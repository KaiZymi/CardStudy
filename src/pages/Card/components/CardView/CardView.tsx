import {useParams} from "react-router-dom";
import {userOwnCards} from "../../../../widgets/User";
import {ICards} from "../../../../entities/Library/components/HolderCards/HolderCards.tsx";
import CardWindow from "../../../../widgets/CardItem/components/CardWindow/CardWindow.tsx";


export const CardView = () => {

	

	const {id} = useParams<{ id: string }>()

	const cardItem:ICards | undefined = userOwnCards.find(item => item.id === Number(id))


	if(!cardItem){
		return <div>Карточка не найдена</div>
	}




	return(<div className={"max-w-screen-md"}>
		<h1 className={"text-4xl mb-16 font-semibold"}>{cardItem.title}</h1>
		<CardWindow  cardItem={cardItem}/>
	</div>)
}