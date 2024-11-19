import {Folder, House, LucideIcon, MessageCircle} from "lucide-react";

export interface MenuType {
	icon: LucideIcon
	label: string,
	href: string,
	external?: boolean

}


export const menu: MenuType[] = [
	{
		icon: House,
		label: "Home",
		href: "/"
	},
	{
		icon: Folder,
		label: "Library",
		href: "/user"
	},
	{
		icon: MessageCircle,
		label: "About",
		href: "/about",
	},

]