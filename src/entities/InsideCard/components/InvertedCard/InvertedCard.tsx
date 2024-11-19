import s from "./InvertedCard.module.scss";
import {m} from "framer-motion";
import {FC} from "react";

interface ICardProps {
	isTransitionDisabled: boolean
	isFlipped: boolean
	handleFlipCard: () => void
	word: string
	translation: string
}

export const InvertedCard: FC<ICardProps> = ({
												 isTransitionDisabled,
												 isFlipped,
												 handleFlipCard,
												 word,
												 translation
											 }) => {
	return (
		<m.div
			className={`${s.card_inner} ${isTransitionDisabled ? "transition-none" : ""}`}
			initial={false}
			animate={{rotateX: isFlipped ? 180 : 360}}
			transition={isTransitionDisabled ? {duration: 0} : {duration: 0.1}}
			// onAnimationComplete={() => setIsAnimating(false)}
			onClick={handleFlipCard}
		>

			<div className={s.card_front}>
				{word}
			</div>
			<div className={s.card_back}>
				{translation}
			</div>

		</m.div>
	);
};

