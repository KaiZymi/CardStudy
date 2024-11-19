import {StorageWrapper} from "../../../../shared/ui/StorageWrapper/StorageWrapper.tsx";
import {FC} from "react";
import {Link} from "react-router-dom";
import styles from "./HolderCards.module.scss"

export interface ICards {
	title: string;
	count: number;
	author?: string;
	id: number
	items: {
		[key:string] : string
	}
}

export const HolderCards: FC<ICards> = ({title, count, author, id}) => {
	return (

			<StorageWrapper className={styles.holderCard}>
				<div className={'flex gap-3 text-sm mb-1 '}>
					<div>
						{count} терминов
					</div>

					{author && <div>
                        Автор: {author}
                    </div>}

				</div>


				<div className={'text-xl '}>
					{title}
				</div>

				<Link to={`/id/${id}`} className={styles.holderCardLink}/>
			</StorageWrapper>

	)
}
