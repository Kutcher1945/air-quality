export const API_BASE =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api/v1"
    : (process.env.NEXT_PUBLIC_API_BASE ?? "https://admin.smartalmaty.kz/api/v1")
