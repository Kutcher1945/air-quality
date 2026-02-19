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
  applicant_account: string
  phone_number: string
  problem_address: string
  problem_district: string
  route_number: string
  executor_go: string
  current_executor_go: string
  submission_source: string
  request_status: string
  request_text: string
  request_registration_date: string
  planned_completion_date: string
  actual_completion_date: string
  actual_resolution_time: string
  registrar: string
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
    return calls
      .filter((call) => {
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
      .sort((a, b) => b.id - a.id) // Sort by ID descending (latest first)
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

  // Check if filters are active
  const hasActiveFilters = searchQuery !== "" || subjectFilter !== "all" || subcategoryFilter !== "all"

  // Enhanced stats with highlighting for filtered items
  const enhancedStats = useMemo(() => {
    const filteredSubjectIds = new Set(filteredCalls.map((c) => c.request_subject?.id).filter(Boolean))
    const filteredSubcategoryIds = new Set(filteredCalls.map((c) => c.request_subcategory?.id).filter(Boolean))

    return {
      bySubject: stats.bySubject.map(item => {
        const subjectId = subjects.find(s => s.name === item.name)?.id
        const isHighlighted = !hasActiveFilters || (subjectId && filteredSubjectIds.has(subjectId))
        const filteredValue = subjectId ? filteredCalls.filter(c => c.request_subject?.id === subjectId).length : 0

        return {
          ...item,
          isHighlighted,
          filteredValue,
          opacity: isHighlighted ? 1 : 0.3
        }
      }),
      bySubcategory: stats.bySubcategory.map(item => {
        const subcategoryId = subcategories.find(s => s.name === item.name)?.id
        const isHighlighted = !hasActiveFilters || (subcategoryId && filteredSubcategoryIds.has(subcategoryId))
        const filteredValue = subcategoryId ? filteredCalls.filter(c => c.request_subcategory?.id === subcategoryId).length : 0

        return {
          ...item,
          isHighlighted,
          filteredValue,
          opacity: isHighlighted ? 1 : 0.3
        }
      })
    }
  }, [stats, filteredCalls, hasActiveFilters, subjects, subcategories])

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

        {/* Fuel Consumption by Business Type */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Структура потребления топлива по типам предприятий</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subcategories.map((subcategory) => {
              const subcategoryCalls = filteredCalls.filter(c => c.request_subcategory?.id === subcategory.id)

              if (subcategoryCalls.length === 0) return null

              const fuelDistribution = subjects.map(subject => ({
                name: subject.name,
                value: subcategoryCalls.filter(c => c.request_subject?.id === subject.id).length,
                percentage: (subcategoryCalls.filter(c => c.request_subject?.id === subject.id).length / subcategoryCalls.length * 100).toFixed(1)
              })).filter(item => item.value > 0)

              return (
                <Card key={subcategory.id}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{subcategory.name}</CardTitle>
                    <p className="text-sm text-gray-500">Всего: {subcategoryCalls.length} объектов</p>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={fuelDistribution}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={80}
                          dataKey="value"
                          label={({ percentage }) => `${percentage}%`}
                        >
                          {fuelDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value, name) => [`${value} шт (${fuelDistribution.find(f => f.name === name)?.percentage}%)`, 'Количество']}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="mt-4 space-y-2">
                      {fuelDistribution.map((item, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: COLORS[index % COLORS.length] }}
                            />
                            <span className="text-gray-700">{item.name}</span>
                          </div>
                          <span className="font-semibold">{item.value} ({item.percentage}%)</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Charts Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Общая статистика по обращениям</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Subjects Pie Chart */}
            <Card>
            <CardHeader>
              <CardTitle>Распределение по темам обращений</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={500}>
                <PieChart>
                  <Pie
                    data={enhancedStats.bySubject}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, name, isHighlighted, index }) => {
                      if (!isHighlighted) return null
                      const RADIAN = Math.PI / 180
                      const radius = outerRadius + 30
                      const x = cx + radius * Math.cos(-midAngle * RADIAN)
                      const y = cy + radius * Math.sin(-midAngle * RADIAN)
                      const color = COLORS[index % COLORS.length]

                      return (
                        <text
                          x={x}
                          y={y}
                          fill={color}
                          textAnchor={x > cx ? 'start' : 'end'}
                          dominantBaseline="central"
                          style={{ fontSize: '12px', fontWeight: '600' }}
                        >
                          {`${name}: ${(percent * 100).toFixed(0)}%`}
                        </text>
                      )
                    }}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {enhancedStats.bySubject.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        opacity={entry.opacity}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name, props) => {
                      const { payload } = props
                      if (hasActiveFilters && payload.filteredValue !== undefined) {
                        return [`${payload.filteredValue} (из ${value})`, 'Обращений']
                      }
                      return [value, 'Обращений']
                    }}
                  />
                  <Legend
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                    wrapperStyle={{ paddingTop: '20px' }}
                  />
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
              <ResponsiveContainer width="100%" height={500}>
                <PieChart>
                  <Pie
                    data={enhancedStats.bySubcategory}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, name, isHighlighted, index }) => {
                      if (!isHighlighted) return null
                      const RADIAN = Math.PI / 180
                      const radius = outerRadius + 30
                      const x = cx + radius * Math.cos(-midAngle * RADIAN)
                      const y = cy + radius * Math.sin(-midAngle * RADIAN)
                      const color = COLORS[index % COLORS.length]

                      return (
                        <text
                          x={x}
                          y={y}
                          fill={color}
                          textAnchor={x > cx ? 'start' : 'end'}
                          dominantBaseline="central"
                          style={{ fontSize: '12px', fontWeight: '600' }}
                        >
                          {`${name}: ${(percent * 100).toFixed(0)}%`}
                        </text>
                      )
                    }}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {enhancedStats.bySubcategory.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        opacity={entry.opacity}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name, props) => {
                      const { payload } = props
                      if (hasActiveFilters && payload.filteredValue !== undefined) {
                        return [`${payload.filteredValue} (из ${value})`, 'Обращений']
                      }
                      return [value, 'Обращений']
                    }}
                  />
                  <Legend
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                    wrapperStyle={{ paddingTop: '20px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Bar Chart - Full Width */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Детальная статистика по темам обращений</h2>
          <Card>
            <CardHeader>
              <CardTitle>Количество обращений по темам</CardTitle>
            </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={500}>
              <BarChart
                data={enhancedStats.bySubject}
                margin={{ top: 20, right: 30, left: 20, bottom: 120 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  height={150}
                  interval={0}
                  tick={{ fontSize: 12 }}
                />
                <YAxis />
                <Tooltip
                  formatter={(value, name, props) => {
                    const { payload } = props
                    if (hasActiveFilters && payload.filteredValue !== undefined) {
                      return [`${payload.filteredValue} (из ${value})`, 'Обращений']
                    }
                    return [value, 'Обращений']
                  }}
                />
                <Bar dataKey="value" fill="#8884d8">
                  {enhancedStats.bySubject.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      opacity={entry.opacity}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        </div>

        {/* Calls Table with Pagination */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Список всех обращений</h2>
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
                    <th className="text-left p-3 text-sm font-medium text-gray-600">ID</th>
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
                      <td className="p-3 text-sm text-gray-500">{call.id}</td>
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
        </div>

        {/* Detail Side Panel - Drawer */}
        {showDetailPanel && selectedCall && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/30 z-40 transition-opacity duration-300"
              onClick={() => setShowDetailPanel(false)}
            />

            {/* Drawer */}
            <div className="fixed inset-y-0 right-0 w-full md:w-1/2 lg:w-1/3 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6 sticky top-0 bg-white pb-4 border-b">
                  <h2 className="text-2xl font-bold">Детали обращения</h2>
                  <Button variant="ghost" size="icon" onClick={() => setShowDetailPanel(false)}>
                    ✕
                  </Button>
                </div>

                <div className="space-y-4">
                  {/* Basic Information */}
                  <div className="pb-4 border-b">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Основная информация</h3>

                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Номер записи</label>
                        <p className="text-base font-mono">{selectedCall.record_number || '-'}</p>
                      </div>

                      {selectedCall.request_status && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Статус обращения</label>
                          <p className="text-base">
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                              {selectedCall.request_status}
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Applicant Information */}
                  <div className="pb-4 border-b">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Заявитель</h3>

                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">ФИО</label>
                        <p className="text-base">
                          {selectedCall.applicant_last_name} {selectedCall.applicant_first_name}
                        </p>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-600">Телефон</label>
                        <p className="text-base font-mono">{selectedCall.phone_number || '-'}</p>
                      </div>

                      {selectedCall.applicant_account && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Аккаунт заявителя</label>
                          <p className="text-base">{selectedCall.applicant_account}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Location Information */}
                  <div className="pb-4 border-b">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Адрес и местоположение</h3>

                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Адрес проблемы</label>
                        <p className="text-base">{selectedCall.problem_address || '-'}</p>
                      </div>

                      {selectedCall.problem_district && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Район проблемы</label>
                          <p className="text-base">{selectedCall.problem_district}</p>
                        </div>
                      )}

                      {selectedCall.route_number && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Номер маршрута</label>
                          <p className="text-base font-mono">{selectedCall.route_number}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Request Categories */}
                  <div className="pb-4 border-b">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Категории обращения</h3>

                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Категория</label>
                        <p className="text-base">{selectedCall.request_category?.name || '-'}</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-600">Подкатегория</label>
                        <p className="text-base">{selectedCall.request_subcategory?.name || '-'}</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-600">Тема обращения</label>
                        <p className="text-base">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {selectedCall.request_subject?.name || '-'}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Executors */}
                  {(selectedCall.executor_go || selectedCall.current_executor_go || selectedCall.registrar) && (
                    <div className="pb-4 border-b">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Исполнители</h3>

                      <div className="space-y-3">
                        {selectedCall.executor_go && (
                          <div>
                            <label className="text-sm font-medium text-gray-600">Исполнитель (ГО)</label>
                            <p className="text-base">{selectedCall.executor_go}</p>
                          </div>
                        )}

                        {selectedCall.current_executor_go && (
                          <div>
                            <label className="text-sm font-medium text-gray-600">Текущий исполнитель (ГО)</label>
                            <p className="text-base">{selectedCall.current_executor_go}</p>
                          </div>
                        )}

                        {selectedCall.registrar && (
                          <div>
                            <label className="text-sm font-medium text-gray-600">Регистратор</label>
                            <p className="text-base">{selectedCall.registrar}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Dates */}
                  <div className="pb-4 border-b">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Даты</h3>

                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Дата регистрации</label>
                        <p className="text-base">{selectedCall.request_registration_date || '-'}</p>
                      </div>

                      {selectedCall.planned_completion_date && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Планируемый срок исполнения</label>
                          <p className="text-base">{selectedCall.planned_completion_date}</p>
                        </div>
                      )}

                      {selectedCall.actual_completion_date && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Фактическая дата исполнения</label>
                          <p className="text-base">{selectedCall.actual_completion_date}</p>
                        </div>
                      )}

                      {selectedCall.actual_resolution_time && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Фактический срок исполнения</label>
                          <p className="text-base">{selectedCall.actual_resolution_time}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Additional Information */}
                  {selectedCall.submission_source && (
                    <div className="pb-4 border-b">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Дополнительно</h3>

                      <div>
                        <label className="text-sm font-medium text-gray-600">Источник поступления</label>
                        <p className="text-base">{selectedCall.submission_source}</p>
                      </div>
                    </div>
                  )}

                  {/* Request Text */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Текст обращения</h3>
                    <div className="mt-2 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div
                        className="text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: (selectedCall.request_text || '-')
                            .replace(/&quot;/g, '"')
                            .replace(/&amp;/g, '&')
                            .replace(/&lt;/g, '<')
                            .replace(/&gt;/g, '>')
                            .replace(/Наименование объекта:/g, '<strong>Наименование объекта:</strong><br/>')
                            .replace(/Тип объекта:/g, '<br/><strong>Тип объекта:</strong><br/>')
                            .replace(/Район:/g, '<br/><strong>Район:</strong><br/>')
                            .replace(/Основной вид топлива:/g, '<br/><strong>Основной вид топлива:</strong><br/>')
                            .replace(/Для тех\.нужд:/g, '<br/><strong>Для тех.нужд:</strong><br/>')
                            .replace(/Должность:/g, '<br/><strong>Должность:</strong><br/>')
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      </div>
      </div>
  )
}
