import {ICards} from "../../../entities/Library/components/HolderCards/HolderCards.tsx";
import {IFolder} from "../../../entities/Library/components/Folder/Folder.tsx";

export const userOwnFolders: IFolder[] = [
	{
		title: '1',
		count: 0,
		id: Date.now()
	},
	{
		title: '2',
		count: 0,
		id: Date.now()
	},
	{
		title: '3',
		count: 0,
		id: Date.now()
	},
]


export const userOwnCards: ICards[] = [
	{
		id: 1,
		title: 'Программирование',
		count: 1,
		author: 'Марк',
		items:{
			"Список": "list",
			"Случай": "case",
			"Применить": "apply",
			"Ожидание": "expectation "
		}
	},
	{
		id: 2,
		title: 'Кухня',
		count: 23,
		author: 'Kizlik',
		items:{
			"Арбуз": "melon",
			"Чайник": "kattle",
			"Молоко": "milk",
			"Мясо": "meat"
		}

	},
	{
		id: 3,
		title: 'Космос',
		count: 122,
		author: 'KingMaster',
		items:{
			"Звёзды": "stars",
			"Земля": "earth",
			"Солнце": "solar",
		}
	},
	// {
	// 	id: 4,
	// 	title: 'Продукты',
	// 	count: 1,
	// 	author: 'Гуру по английскому',
	// 	items:{
	// 		"": "melon",
	// 		"book": "книга",
	// 		"pen": "ручка",
	// 		"dictionary": "переводчик"
	// 	}
	// }
]