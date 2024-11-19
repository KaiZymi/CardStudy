import {FC, ReactNode} from "react";
import {twMerge} from "tailwind-merge";


interface ICardProps {
	children: ReactNode
	className?: string
}

export const StorageWrapper: FC<ICardProps> = ({children, className}) => {

	return (<article className={twMerge('w-full h-full rounded-md bg-white py-4 px-5 font-medium ' +
		className)}>

		{children}


	</article>)
}
