import {m} from 'framer-motion'
import {cx} from "../../../../utils/all.ts";
import {menu} from "../../model/servise.ts";
import {MenuItem} from "../MenuItem/MenuItem.tsx";




const menuList = menu

export const Sidebar = ({sideBarOpen}: { sideBarOpen: boolean }) => {

	return (
		<m.aside
			className={cx("order-0 mt-4 flex flex-col items-center justify-start whitespace-nowrap overline-hidden")}
			style={{transformOrigin: "left"}}
			animate={{width: sideBarOpen ? 224 : 42}}
		>
			{menuList.map((item, index) => (
				<MenuItem key={index} index={index} item={item} sideBarOpen={sideBarOpen}/>
			))}

		</m.aside>
	)
}