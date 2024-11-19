import {NavLink} from "react-router-dom";
import styles from "./Library.module.scss"

export const LibraryNavbar = () =>{
	return(<div className={styles.LibraryNavbar}>

		<NavLink to='/user/sets' className={({isActive}) => isActive ? `${styles.LibraryNavbarLinkActive}` : `${styles.LibraryNavbarLink}` }>
			Модули
		</NavLink>
		<NavLink to='/user/folders' className={({isActive}) => isActive ? `${styles.LibraryNavbarLinkActive}` : `${styles.LibraryNavbarLink}`}>
			Папки
		</NavLink>


	</div>)
}