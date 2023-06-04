import { ButtonLink } from "@/components/ui"
import { Container } from "@/components/ui"

export default function Error404() {
  return (
    <div className="flex flex-col justify-center items-center py-20 min-h-screen text-center bg-gray-50">
      <Container>
        <div className="flex flex-col gap-8 mx-auto max-w-xl">
          <h4 className="text-5xl text-gray-600">404 - Page not found</h4>
          <div className="text-base font-normal text-gray-500">
            The page you are looking for might have been removed had its name changed or is
            temporarily unavailable.
          </div>
          <div>
            <ButtonLink variant="outline" to="/home">
              Go to homepage
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  )
}
