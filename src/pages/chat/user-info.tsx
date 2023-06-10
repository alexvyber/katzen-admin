import { Icons } from "@/components/ui/icons"
import { ScrollArea, Viewport } from "@/components/ui"
import { useAppSelector } from "@/hooks/use-app-selector"

export const UserInfo = () => {
  const { user } = useAppSelector((state) => state.chat)
  return (
    <ScrollArea className="h-full">
      <Viewport className="flex flex-col gap-1 py-2 px-3">
        <h4 className="mb-8 text-xl font-medium text-gray-900">About</h4>
        <div className="mx-auto mb-4 rounded-full h-25 w-25">
          <img src={user.avatar} alt="" className="block object-cover w-full h-full rounded-full" />
        </div>
        <div className="text-center">
          <h5 className="mb-1 text-base font-medium text-gray-600 dark:text-gray-300">
            {user.fullName}
          </h5>
          <h6 className="text-xs font-normal text-gray-600 dark:text-gray-300">{user.role}</h6>
        </div>
        <ul className="px-6 pb-5 -mx-6 mt-5 space-y-4 border-b border-gray-100 dark:border-gray-700 list-item">
          <li className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
            <div className="flex gap-2 items-start">
              <Icons icon="heroicons-outline:location-marker" className="text-base" />
              <span>Location</span>
            </div>
            <div className="font-medium">London</div>
          </li>
          <li className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
            <div className="flex gap-2 items-start">
              <Icons icon="heroicons-outline:user" className="text-base" />
              <span>Members since</span>
            </div>
            <div className="font-medium">Oct 2021</div>
          </li>
        </ul>
      </Viewport>
    </ScrollArea>
  )
}
