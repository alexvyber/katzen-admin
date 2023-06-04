import WelcomeSVG from "@/assets/svg/welcome.svg"
import { Button } from "@/components/ui"
import { StepProps } from "./types"

export default function Step1({ onNext, onSkip }: StepProps) {
  return (
    <div className="flex flex-col gap-5 text-center">
      <img
        src={WelcomeSVG}
        className="mx-auto h-96 bg-white rounded-xl border border-gray-200 dark:bg-gray-700 dark:border-gray-500"
      />
      <div>
        <h3 className="mb-2 text-2xl">Welcome on Board, lets get started with Katzen App</h3>
        <p className="text-base">
          Telling us a bit about yourself to get the best experience, this will only take a minute.
        </p>
      </div>
      <div className="flex gap-3 items-center mx-auto">
        <Button className="" variant="default" onClick={onNext}>
          Get started
        </Button>
        <Button variant="outline" onClick={onSkip}>
          Skip now
        </Button>
      </div>
    </div>
  )
}
