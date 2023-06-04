import { Link } from "react-router-dom"
import { Button, Container } from "@/components/ui"
import { Input } from "@/components/ui/input"

const links = [
  {
    href: "#",
    title: "Privacy policy",
  },
  {
    href: "#",
    title: "Faq",
  },
  {
    href: "#",
    title: "Email us",
  },
]

export default function ComingSoon() {
  return (
    <Container className="flex flex-col justify-between min-h-screen lg:px-20">
      {/* TODO: make flex the right way */}
      <div />

      <div className="flex flex-col gap-7 max-w-2xl">
        <div className="flex relative items-center text-2xl text-gray-900 dark:text-white">
          <span>Coming soon</span>
        </div>

        <div className="text-4xl font-bold text-gray-900 lg:text-7xl dark:text-white">
          Get notified when we launch
        </div>

        <p className="text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>

        <div className="flex flex-col gap-3 items-center sm:flex-row">
          <Input
            type="text"
            placeholder="Enter your email"
            className="flex-1 py-6 bg-white placeholder:text-gray-500"
          />
          <div className="flex-none">
            <Button variant="ghost" type="button">
              Notify me
            </Button>
          </div>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          Don’t worry we will not spam you
        </div>
      </div>

      <div className="justify-self-end w-full">
        <div className="flex-wrap justify-between items-center py-6 space-y-4 md:flex">
          <div>
            <div className="flex gap-3 justify-center md:justify-start">
              {links.map((link, index) => (
                <Link
                  key={link.href + index}
                  to={link.href}
                  className="text-sm text-gray-500 transition duration-150 dark:text-gray-400 hover:text-gray-900"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
