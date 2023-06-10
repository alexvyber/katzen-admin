import { Icons } from "@/components/ui/icons"
import { useDarkmode } from "@/hooks/use-dark-mode"

export function SwitchDark() {
  const [isDark, setDarkMode] = useDarkmode()

  return (
    <div
      className="flex flex-col justify-center items-center text-lg text-gray-900 rounded-full cursor-pointer lg:w-8 lg:h-8 lg:bg-gray-100 dark:text-white lg:dark:bg-gray-900"
      onClick={() => setDarkMode(!isDark)}
    >
      {isDark ? <Icons icon="heroicons-outline:sun" /> : <Icons icon="heroicons-outline:moon" />}
    </div>
  )
}
