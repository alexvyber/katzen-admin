import { Container } from "@/components/ui"
import { CircleOff } from "lucide-react"

function AccessDenied() {
  return (
    <Container>
      <div className="flex flex-col gap-3 items-center h-full text-slate-600">
        <CircleOff className="w-14 h-14" />
        <h3 className="text-4xl">Access Denied!</h3>
        <p>You have no permission to visit this page</p>
      </div>
    </Container>
  )
}

export default AccessDenied
