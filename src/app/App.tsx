// import { Routes} from "react-router-dom";
import {Navbar} from "../widgets/Navbar/Navbar.tsx";
import {useState} from "react";

import {Route, Routes} from "react-router-dom";
import {UserOwnCards} from "../pages/Library/components/UserOwnCards/UserOwnCards.tsx";
import {Sidebar} from "../widgets/SideBar";
import {Layout} from "../shared/ui/Layout/Layout.tsx";
import {CardView} from "../pages/Card";


function App() {
	const [sideBarOpen, setSideBarOpen] = useState(false);



	const toggleSideBar = () => {
		setSideBarOpen((prev) => !prev);
	}

	return (
		<Layout>

			<div className="h-14">
				<Navbar toggleSideBar={toggleSideBar}/>
			</div>


			<div className={"flex"}>
				<Sidebar sideBarOpen={sideBarOpen}/>

				<div className={"bg-blue-400 h-screen w-screen flex"}>
					<div className={" container mx-auto max-w-screen-xl lg:max-w-screen-lg  mt-10 "}>
						<Routes>
							<Route path='/user/*' element={<UserOwnCards/>}/>
							<Route path={'/id/:id'} element={<CardView/>} />

						</Routes>
					</div>

				</div>
			</div>

		</Layout>
	)
}

export default App
