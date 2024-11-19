import {FC, ReactNode} from "react";

interface ILayout{
	children: ReactNode
}


export const Layout: FC<ILayout> = ({children}) =>{
	return (<div className="flex flex-col gap-3 m-3 h-screen">
		{children}
	</div>)
}