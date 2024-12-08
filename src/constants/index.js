import { IoGitNetworkSharp } from "react-icons/io5";
import { TbTemplate } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineNotification } from "react-icons/ai";

export const navigation = [
  { name: 'Dashboard', href: '/', icon: LuLayoutDashboard, current: true },
  { name: 'Templates', href: '/templates', icon: TbTemplate, current: false },
  { name: 'Routings', href: '/routings', icon: IoGitNetworkSharp, current: false },
  { name: 'Events', href: '/events', icon: AiOutlineNotification, current: false },
]

export const quickLinks = [
  { id: 1, name: 'Docs', href: '#', initial: 'D', current: false },
  { id: 2, name: 'Settings', href: '#', initial: 'S', current: false },
]