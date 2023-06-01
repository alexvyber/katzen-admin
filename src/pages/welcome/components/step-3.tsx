import {
  HiArrowSmLeft,
  HiOutlineAcademicCap,
  HiOutlineCode,
  HiOutlineCube,
  HiOutlinePencil,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiArrowSmRight,
} from "react-icons/hi"

import { Button, toast } from "@/components/ui"
import { StepProps } from "./types"
import { useState } from "react"
import { cx } from "cvax"

const roles = [
  { value: "softwareEngineer", label: "Software Engineer", icon: HiOutlineCode },
  { value: "productManager", label: "Product Manager", icon: HiOutlineCube },
  { value: "designer", label: "Designer", icon: HiOutlinePencil },
  { value: "qaTester", label: "QA Tester", icon: HiOutlineShieldCheck },
  { value: "skateHolder", label: "Skate Holder", icon: HiOutlineAcademicCap },
  { value: "other", label: "Others", icon: HiOutlineSparkles },
] as const

type RoleValue = typeof roles[number]["value"]

export default function Step3({ onNext, onBack }: StepProps) {
  const [allowedNextStep, setAllowedNextStep] = useState(false)
  const [selected, setSelected] = useState<RoleValue | undefined>(undefined)

  const onClick = (value: RoleValue) => {
    setAllowedNextStep(true)
    setSelected(value)

    toast({
      title: `You selected: ${roles.find((item) => item.value === value)?.label}`,
    })
  }

  return (
    <div className="text-center">
      <h3 className="mb-2">What is your role in the organization?</h3>
      <div className="mx-auto mt-8 lg:min-w-[32rem]">
        <div>
          <div className="grid grid-cols-2 gap-4 w-full">
            {roles.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                onClick={() => onClick(value)}
                className={cx(
                  "p-4  rounded-lg border dark:bg-slate-800",
                  value === selected ? "bg-sky-50 text-sky-500" : "bg-white text-slate-900"
                )}
              >
                <div className="flex gap-3 items-center">
                  <span className="text-2xl text-slate-500">
                    <Icon className={cx(value === selected && "text-sky-500")} />
                  </span>
                  <h6>{label}</h6>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3 mx-auto mt-12">
          <Button variant="outline" onClick={onBack}>
            <HiArrowSmLeft className="mr-2" />
            Back
          </Button>

          <Button onClick={onNext} disabled={!allowedNextStep}>
            Next
            <HiArrowSmRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
