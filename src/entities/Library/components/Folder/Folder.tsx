import {StorageWrapper} from "../../../../shared/ui/StorageWrapper/StorageWrapper.tsx";
import {FC} from "react";

export interface IFolder {
	title: string
	count: number
	id: number
}


export const Folder: FC<IFolder> = ({title, count}) => {
	return(<StorageWrapper>
		<div className={'flex gap-3 text-sm mb-1'}>
			{count}
		</div>
		<div className={'text-xl'}>
			{title}
		</div>
	</StorageWrapper>)


}