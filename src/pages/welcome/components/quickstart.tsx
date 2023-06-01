import { useNavigate } from "react-router-dom"

import { Button, Card } from "@/components/ui"
import { Lock } from "lucide-react"

type QuickStartEntry = {
  title: string
  description: string
  buttonText: string
  disabled: boolean
  href: string
}

const quickStartList: QuickStartEntry[] = [
  {
    title: "Complete your Account Information",
    description: "Fill in your information to complete your account",
    buttonText: "Fill now",
    disabled: false,
    href: "/home",
  },
  {
    title: "Create your first workspace",
    description: "We recommend one project per workspace",
    buttonText: "Create Workspace",
    disabled: true,
    href: "/home",
  },
  {
    title: "Invite team members",
    description: "Show the team what you have completed so far.",
    buttonText: "Invite",
    disabled: true,
    href: "/home",
  },
]

function QuickStartItem({
  title,
  description,
  buttonText,
  stepNumber,
  disabled,
  href = "",
}: QuickStartEntry & {
  stepNumber: number | string
}) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (!disabled) {
      if (href) {
        navigate(href)
      }
    }
  }

  return (
    <Card className="flex flex-col gap-4 p-4 w-full md:flex-row md:justify-between md:items-center">
      <div className="flex flex-col gap-4 2xs:items-center 2xs:flex-row">
        {disabled ? (
          <span className="text-3xl">
            <Lock className="text-slate-500" />
          </span>
        ) : (
          <span className="flex justify-center items-center w-7 h-7 font-semibold rounded-full border-2 shrink-0">
            {stepNumber}
          </span>
        )}
        <div>
          <h5 className="text-lg text-slate-800">{title}</h5>
          <p className="text-slate-500">{description}</p>
        </div>
      </div>
      <Button disabled={disabled} onClick={handleClick}>
        {buttonText}
      </Button>
    </Card>
  )
}

export default function QuickStart() {
  return (
    <div>
      <h3 className="mb-6 text-3xl text-center">
        <span>Let's get you set up with Katzen Admin</span>
      </h3>
      <div className="flex flex-col gap-2.5 max-w-3xl lg:min-w-[768px]">
        {quickStartList.map((item, index) => (
          <QuickStartItem
            stepNumber={index + 1}
            key={`${item.href}-${index}`}
            title={item.title}
            buttonText={item.buttonText}
            description={item.description}
            disabled={item.disabled}
            href={item.href}
          />
        ))}
      </div>
    </div>
  )
}
