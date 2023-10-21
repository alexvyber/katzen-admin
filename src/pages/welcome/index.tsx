import { Container } from "@/components/ui"
import { lazy, Suspense, useCallback, useState } from "react"

const Step1 = lazy(() => import("./components/step-1"))
const Step2 = lazy(() => import("./components/step-2"))
const Step3 = lazy(() => import("./components/step-3"))
const QuickStart = lazy(() => import("./components/quickstart"))

const Welcome = () => {
  const [surveyStep, setSurveyStep] = useState(0)

  const handleNext = useCallback(() => {
    setSurveyStep(surveyStep + 1)
  }, [surveyStep])

  const handleBack = useCallback(() => {
    setSurveyStep(surveyStep - 1)
  }, [surveyStep])

  const handleSkip = () => setSurveyStep(3)

  return (
    <Container className="h-full">
      <div className="flex flex-col justify-center items-center h-full">
        <Suspense fallback={null}>
          {surveyStep === 0 && <Step1 onNext={handleNext} onSkip={handleSkip} />}
          {surveyStep === 1 && <Step2 onNext={handleNext} onBack={handleBack} />}
          {surveyStep === 2 && <Step3 onNext={handleNext} onBack={handleBack} />}
          {surveyStep === 3 && <QuickStart />}
        </Suspense>
      </div>
    </Container>
  )
}

export default Welcome
