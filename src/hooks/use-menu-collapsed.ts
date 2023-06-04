import { handleMenuCollapsed } from "@/store/theme"
import { useAppDispatch } from "./use-app-dispatcher"
import { useAppSelector } from "./use-app-selector"

const useMenuCollapsed = () => {
  const dispatch = useAppDispatch()
  const collapsed = useAppSelector((state) => state.theme.menuCollapsed)

  const setMenuCollapsed = (val: boolean) => dispatch(handleMenuCollapsed(val))

  return [collapsed, setMenuCollapsed] as const
}

export default useMenuCollapsed
