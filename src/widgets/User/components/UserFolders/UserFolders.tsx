import {userOwnFolders} from "../../model/servise.ts";
import {HolderCards} from "../../../../entities/Library/components/HolderCards/HolderCards.tsx";



const folders = userOwnFolders

export const UserFolders = () =>{
	return(
		<section className="grid gap-6 grid-cols-1 ">
			{folders.map((folder)=> (
				<HolderCards key={folder.id} id={folder.id} title={folder.title} count={folder.count}/>
			))}
		</section>
	)
}