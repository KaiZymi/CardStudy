import {cx} from "../../../../utils/all.ts";
import {m} from "framer-motion";
import {Link} from "react-router-dom";
import {FC} from "react";
import {MenuType} from "../../model/servise.ts";

interface IMenuItem {
	item: MenuType
	index: number
	sideBarOpen: boolean
}

export const MenuItem: FC<IMenuItem> = ({item, index, sideBarOpen}) => {
	return (
		<Link
			to={item.href}
			key={`${item.label}${index}`}
			className={cx("w-full flex  py-4 text-lg font-medium items-center gap-2.5")}
			target={item.external ? "_blank" : ""}
			rel={item.external ? "noopener" : ""}>
			<div className={cx("w-6 h-6 flex-shrink-0")}> {/* контейнер иконки */}
				<item.icon className="w-full h-full"/>
			</div>
			<m.span
				className="overflow-hidden"
				initial={{opacity: 0}}
				animate={{opacity: sideBarOpen ? 1 : 0}}
				// transition={{ delay: 0.1 * index, duration: 0.3 }}
			>
				{sideBarOpen &&
                    <div className={'h-6'}>
						{item.label}
                    </div>

				}
			</m.span>

		</Link>
	)
}