type Actions = "back" | "next" | "skip"
export type StepProps = {
  [key in `on${Capitalize<Actions>}`]?: () => void
}
