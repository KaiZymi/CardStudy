
import {Link} from "react-router-dom";
import {FC} from "react";

interface NavbarProps {
	toggleSideBar: () => void
}

export const Navbar: FC<NavbarProps> = ({toggleSideBar}) => {
	return (
		<nav className={'mb-5 flex flex-wrap md:flex-nowrap items-center gap-3'}>

			<button
				aria-label="Toggle Menu"
				className="rounded-md py-1 text-gray-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 "
				onClick={toggleSideBar}
			>

				<svg
					className="h-6 w-6 fill-current"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24">
					<path
						fillRule="evenodd"
						d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
					/>

				</svg>
			</button>

			<div className="h-full">
				<Link to={'/'} className="w-28 h-full dark:hidden flex items-center">
					<img src="../../../public/logo.svg" alt="logo" className="w-full h-auto object-contain"
					/>

				</Link>
			</div>


		</nav>
	)
}

