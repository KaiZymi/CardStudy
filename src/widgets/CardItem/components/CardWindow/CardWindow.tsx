
import {FC, useCallback, useEffect, useState} from "react";
import {ICards} from "../../../../entities/Library/components/HolderCards/HolderCards.tsx";
import {PaginationCardWindow} from "../../../../entities/Library";
import {InvertedCard} from "../../../../entities/InsideCard";

interface ICardWindowProps {
	cardItem: ICards
}

export const CardWindow: FC<ICardWindowProps> = ({cardItem}) => {

	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [isFlipped, setIsFlipped] = useState(false)
	// const [isAnimating, setIsAnimating] = useState(false)
	const [isTransitionDisabled, setIsTransitionDisabled] = useState(false)
	const [isSpacePressed, setIsSpacePressed] = useState(false);

	const cardWords = Object.keys(cardItem.items)
	const word = cardWords[currentIndex]
	const translation = cardItem.items[cardWords[currentIndex]]

	const onNext = useCallback(() =>{
		setIsTransitionDisabled(true)
		setIsFlipped(false)
		setCurrentIndex(currentIndex => currentIndex < cardWords.length-1 ? currentIndex + 1 : cardWords.length-1)
	}, [cardWords.length])
	
	const onPrev = useCallback(() =>{
		setIsTransitionDisabled(true)
		setIsFlipped(false)
		setCurrentIndex(currentIndex => currentIndex > 0 ? currentIndex - 1 : 0)
	}, [])
	
	const handleFlipCard = () =>{
		setIsTransitionDisabled(false)
		setIsFlipped(prevState => !prevState)
		// setIsAnimating(true)
	}



	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "ArrowRight") {
				onNext(); // Переключение на следующую карточку
			} else if (event.key === "ArrowLeft") {
				onPrev(); // Переключение на предыдущую карточку
			} else if (event.key === " " || event.code === "Space") {
				if (!isSpacePressed) {
					// Если пробел ещё не был нажат
					event.preventDefault(); // Предотвращаем прокрутку страницы
					handleFlipCard(); // Переворот карточки
					setIsSpacePressed(true); // Устанавливаем флаг нажатого пробела
				}
			}
		};

		const handleKeyUp = (event: KeyboardEvent) => {
			if (event.key === " " || event.code === "Space") {
				setIsSpacePressed(false); // Сбрасываем флаг нажатого пробела
			}
		};

		// Привязываем обработчики событий
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

		// Убираем обработчики при размонтировании компонента
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [currentIndex, isSpacePressed, onNext, onPrev]); // Обновляем эффект, если currentIndex изменяется


	return (
		<div>

			<InvertedCard handleFlipCard={handleFlipCard}
						  isFlipped={isFlipped}
						  word={word}
						  isTransitionDisabled={isTransitionDisabled}
						  translation={translation}
			/>
			<PaginationCardWindow currentIndex={currentIndex} onPrev={onPrev} onNext={onNext}/>

		</div>
	);
};

export default CardWindow;