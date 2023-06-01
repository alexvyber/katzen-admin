import { Icons } from "@/components/icons"

export function SwitchDark() {
  const [
    isDark,
    // setDarkMode
  ] = [false, undefined]

  return (
    <span>
      <div
        className="flex flex-col justify-center items-center text-lg rounded-full cursor-pointer lg:w-8 lg:h-8 dark:text-white text-slate-900 lg:bg-slate-100 lg:dark:bg-slate-900"
        // onClick={() => setDarkMode(!isDark)}
      >
        {isDark ? <Icons icon="heroicons-outline:sun" /> : <Icons icon="heroicons-outline:moon" />}
      </div>
    </span>
  )
}
