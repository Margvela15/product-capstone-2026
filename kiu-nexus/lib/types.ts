export type AcademicUpdate = {
  id: string
  type: "assignment" | "exam" | "lecture" | "deadline" | "announcement"
  title: string
  description: string | null
  due_at: string | null
  source: "moodle" | "teams" | "whatsapp" | "email"
  created_at: string
  courses: { code: string; title: string } | null
}
