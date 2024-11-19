

import {Navigate, Route, Routes} from "react-router-dom";
import {LibraryNavbar, UserModules, UserFolders} from "../../../../widgets/User";







export const UserOwnCards = () => {


	return (<>
		<h1 className='font-semibold text-4xl text-black mb-14 w-10'> Библиотека </h1>

		<LibraryNavbar />

		<Routes>

			<Route path="/" element={<Navigate to="sets" replace />} />
			<Route path="sets" element={<UserModules />} />
			<Route path="folders" element={<UserFolders />} />

		</Routes>

	</>)
}

