import {HolderCards} from "../../../../entities/Library/components/HolderCards/HolderCards.tsx";
import React from "react";
import {userOwnCards} from "../../model/servise.ts";




const cards = userOwnCards

export const UserModules: React.FC = () => {

	return (

		<section className={'grid gap-6 grid-cols-1 '}>

			{cards.map((card) => (
					<HolderCards key={card.id} id={card.id}
								 title={card.title} count={card.count}
								 author={card.author} items={card.items}/>
				)
			)}

		</section>
	)
}

