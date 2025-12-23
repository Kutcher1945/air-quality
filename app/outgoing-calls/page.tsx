"use client"

import { useState, useEffect, useMemo } from "react"
import { HeaderMenu } from "@/components/header-menu"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Download, Filter, Search, FileText, ChevronLeft, ChevronRight } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'

interface RequestCategory {
  id: number
  name: string
}

interface RequestSubcategory {
  id: number
  name: string
  category: RequestCategory
}

interface RequestSubject {
  id: number
  name: string
}

interface OutgoingCall {
  id: number
  request_category: RequestCategory
  request_subcategory: RequestSubcategory
  request_subject: RequestSubject
  record_number: string
  applicant_last_name: string
  applicant_first_name: string
  phone_number: string
  problem_address: string
  request_text: string
  request_registration_date: string
  actual_resolution_time: string
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82ca9d', '#ffc658', '#ff7c7c', '#8dd1e1']

export default function OutgoingCallsPage() {
  const [calls, setCalls] = useState<OutgoingCall[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [subjectFilter, setSubjectFilter] = useState<string>("all")
  const [subcategoryFilter, setSubcategoryFilter] = useState<string>("all")
  const [selectedCall, setSelectedCall] = useState<OutgoingCall | null>(null)
  const [showDetailPanel, setShowDetailPanel] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  useEffect(() => {
    fetchOutgoingCalls()
  }, [])

  const fetchOutgoingCalls = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("https://admin.smartalmaty.kz/api/v1/address/address-without-gas-outgoing-calls/")

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setCalls(data.results || [])
      console.log("✅ Loaded", data.count, "outgoing calls")
    } catch (error) {
      console.error("Failed to fetch outgoing calls:", error)
      setError(error instanceof Error ? error.message : "Failed to load data")
    } finally {
      setLoading(false)
    }
  }

  const filteredCalls = useMemo(() => {
    return calls.filter((call) => {
      const matchesSearch =
        searchQuery === "" ||
        call.problem_address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        call.applicant_first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        call.applicant_last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        call.phone_number.includes(searchQuery) ||
        call.record_number.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesSubject = subjectFilter === "all" || call.request_subject?.id === parseInt(subjectFilter)
      const matchesSubcategory = subcategoryFilter === "all" || call.request_subcategory?.id === parseInt(subcategoryFilter)

      return matchesSearch && matchesSubject && matchesSubcategory
    })
  }, [calls, searchQuery, subjectFilter, subcategoryFilter])

  // Pagination
  const totalPages = Math.ceil(filteredCalls.length / itemsPerPage)
  const paginatedCalls = filteredCalls.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, subjectFilter, subcategoryFilter])

  // Get unique subjects and subcategories by ID
  const uniqueSubjectIds = new Set(calls.map((c) => c.request_subject?.id).filter(Boolean))
  const subjects = calls
    .filter((c) => c.request_subject && uniqueSubjectIds.has(c.request_subject.id))
    .reduce((acc, c) => {
      if (!acc.find(s => s.id === c.request_subject.id)) {
        acc.push(c.request_subject)
      }
      return acc
    }, [] as RequestSubject[])

  const uniqueSubcategoryIds = new Set(calls.map((c) => c.request_subcategory?.id).filter(Boolean))
  const subcategories = calls
    .filter((c) => c.request_subcategory && uniqueSubcategoryIds.has(c.request_subcategory.id))
    .reduce((acc, c) => {
      if (!acc.find(s => s.id === c.request_subcategory.id)) {
        acc.push(c.request_subcategory)
      }
      return acc
    }, [] as RequestSubcategory[])

  const stats = {
    total: calls.length,
    uniqueSubjects: subjects.length,
    uniqueSubcategories: subcategories.length,
    bySubject: subjects.map(s => ({
      name: s.name,
      value: calls.filter(c => c.request_subject?.id === s.id).length
    })).sort((a, b) => b.value - a.value),
    bySubcategory: subcategories.map(s => ({
      name: s.name,
      value: calls.filter(c => c.request_subcategory?.id === s.id).length
    })).sort((a, b) => b.value - a.value)
  }

  const exportToCSV = () => {
    const csvData = filteredCalls.map((call) => ({
      "Номер записи": call.record_number,
      "Дата регистрации": call.request_registration_date,
      "Дата разрешения": call.actual_resolution_time,
      "Фамилия": call.applicant_last_name,
      "Имя": call.applicant_first_name,
      "Телефон": call.phone_number,
      "Адрес": call.problem_address,
      "Категория": call.request_category?.name || "",
      "Подкатегория": call.request_subcategory?.name || "",
      "Тема обращения": call.request_subject?.name || "",
      "Текст обращения": call.request_text,
    }))

    const headers = Object.keys(csvData[0] || {})
    const csvContent = [
      headers.join(","),
      ...csvData.map((row) =>
        headers.map((header) => `"${row[header as keyof typeof row]}"`).join(",")
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `outgoing-calls-${new Date().toISOString().split("T")[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <HeaderMenu />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Загрузка данных...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <HeaderMenu />
        <div className="container mx-auto px-4 py-8">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="pt-6">
              <p className="text-red-600">Ошибка загрузки данных: {error}</p>
              <Button onClick={fetchOutgoingCalls} className="mt-4">
                Попробовать снова
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <HeaderMenu />

      <div className="container mx-auto px-4 py-8 max-w-full">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            <Phone className="inline-block mr-3 h-10 w-10 text-blue-600" />
            Исходящие звонки (обзвон)
          </h1>
          <p className="text-gray-600">Данные по обзвону объектов без газоснабжения</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Всего обращений</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{stats.total}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Отфильтровано</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{filteredCalls.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Тем обращений</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">{stats.uniqueSubjects}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Типов объектов</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">{stats.uniqueSubcategories}</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Subjects Pie Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Распределение по темам обращений</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={stats.bySubject}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {stats.bySubject.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Subcategories Pie Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Распределение по типам объектов</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={stats.bySubcategory}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {stats.bySubcategory.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Bar Chart - Full Width */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Количество обращений по темам</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={stats.bySubject}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={150} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8">
                  {stats.bySubject.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Search className="inline-block mr-2 h-4 w-4" />
                  Поиск
                </label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Адрес, имя, телефон, номер записи..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Subject Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Filter className="inline-block mr-2 h-4 w-4" />
                  Тема обращения
                </label>
                <select
                  value={subjectFilter}
                  onChange={(e) => setSubjectFilter(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">Все темы</option>
                  {subjects.map((subject) => (
                    <option key={subject.id} value={subject.id.toString()}>
                      {subject.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subcategory Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Filter className="inline-block mr-2 h-4 w-4" />
                  Подкатегория
                </label>
                <select
                  value={subcategoryFilter}
                  onChange={(e) => setSubcategoryFilter(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">Все подкатегории</option>
                  {subcategories.map((subcat) => (
                    <option key={subcat.id} value={subcat.id.toString()}>
                      {subcat.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <Button onClick={exportToCSV} variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Экспорт в CSV
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Calls Table with Pagination */}
        <Card>
          <CardHeader>
            <CardTitle>
              Список обращений ({filteredCalls.length}) - Страница {currentPage} из {totalPages}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left p-3 text-sm font-medium text-gray-600">№ записи</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-600">Дата</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-600">Заявитель</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-600">Телефон</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-600">Адрес</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-600">Тема</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-600">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedCalls.map((call) => (
                    <tr key={call.id} className="border-b hover:bg-gray-50">
                      <td className="p-3 text-sm font-mono">{call.record_number}</td>
                      <td className="p-3 text-sm">{call.request_registration_date}</td>
                      <td className="p-3 text-sm">
                        {call.applicant_last_name} {call.applicant_first_name}
                      </td>
                      <td className="p-3 text-sm font-mono">{call.phone_number}</td>
                      <td className="p-3 text-sm max-w-xs truncate" title={call.problem_address}>
                        {call.problem_address}
                      </td>
                      <td className="p-3 text-sm">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          {call.request_subject?.name}
                        </span>
                      </td>
                      <td className="p-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setSelectedCall(call)
                            setShowDetailPanel(true)
                          }}
                        >
                          <FileText className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Показано {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filteredCalls.length)} из {filteredCalls.length}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Назад
                </Button>

                {/* Page Numbers */}
                <div className="flex gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum
                    if (totalPages <= 5) {
                      pageNum = i + 1
                    } else if (currentPage <= 3) {
                      pageNum = i + 1
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i
                    } else {
                      pageNum = currentPage - 2 + i
                    }

                    return (
                      <Button
                        key={pageNum}
                        variant={currentPage === pageNum ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(pageNum)}
                      >
                        {pageNum}
                      </Button>
                    )
                  })}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  Вперед
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detail Side Panel */}
        {showDetailPanel && selectedCall && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
            <div className="bg-white w-full md:w-1/2 lg:w-1/3 h-full overflow-y-auto p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">Детали обращения</h2>
                <Button variant="ghost" onClick={() => setShowDetailPanel(false)}>
                  ✕
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Номер записи</label>
                  <p className="text-lg font-mono">{selectedCall.record_number}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">Заявитель</label>
                  <p className="text-lg">
                    {selectedCall.applicant_last_name} {selectedCall.applicant_first_name}
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">Телефон</label>
                  <p className="text-lg font-mono">{selectedCall.phone_number}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">Адрес проблемы</label>
                  <p className="text-lg">{selectedCall.problem_address}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">Категория</label>
                  <p className="text-lg">{selectedCall.request_category?.name}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">Подкатегория</label>
                  <p className="text-lg">{selectedCall.request_subcategory?.name}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">Тема обращения</label>
                  <p className="text-lg">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                      {selectedCall.request_subject?.name}
                    </span>
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">Дата регистрации</label>
                  <p className="text-lg">{selectedCall.request_registration_date}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">Дата разрешения</label>
                  <p className="text-lg">{selectedCall.actual_resolution_time}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">Текст обращения</label>
                  <div className="mt-2 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-sm whitespace-pre-wrap">{selectedCall.request_text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
