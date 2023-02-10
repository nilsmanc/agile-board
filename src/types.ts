export type TaskState = {
  id: string
  title: string
  description: string
  assignee: {
    name: string
    avatar: string
  }
}
