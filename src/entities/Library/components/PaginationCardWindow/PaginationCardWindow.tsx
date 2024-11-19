import { FC } from "react";

interface IPaginationCardProps{
	currentIndex: number
	onPrev: () => void
	onNext: () => void

}

export const PaginationCardWindow: FC<IPaginationCardProps> = ({currentIndex,
															onPrev,
															onNext
														}) => {

	return (
		<div className="flex justify-center gap-8">
			<button onClick={onPrev}>Лево</button>
			<div>{currentIndex + 1}</div>
			<button onClick={onNext}>Право</button>
		</div>
	);
};

