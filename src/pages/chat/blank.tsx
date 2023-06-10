import { useWidth } from "@/hooks/use-window-size"
import { Icons } from "@/components/ui/icons"
import { useAppDispatch } from "@/hooks/use-app-dispatcher"
import { toggleisMobileChatSidebar } from "./store"

export const Blank = () => {
  const { width, breakpoints } = useWidth()
  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-col justify-center items-center space-y-6 h-full xl:space-y-2">
      <Icons icon="lucide:messages-square" />
      <h4 className="text-2xl font-medium text-gray-600 dark:text-gray-300">No message yet...</h4>
      <p className="pt-4 text-sm text-gray-500 lg:pt-0">
        {width > breakpoints.lg ? (
          <span>don't worry, just take a deep breath & say "Hello"</span>
        ) : (
          <span
            className="cursor-pointer btn btn-dark"
            onClick={() => dispatch(toggleisMobileChatSidebar(true))}
          >
            Start Conversation
          </span>
        )}
      </p>
    </div>
  )
}
