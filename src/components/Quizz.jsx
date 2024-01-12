import { useCallback, useState } from 'react';

import Question from './Question.jsx';
import QUESTIONS from '../questions.js';
import Summary from './Sumary.jsx';
export default function Quiz() {
	const [userAnswers, setUserAnswers] = useState([]);
	const activeQuestionIndex = userAnswers.length;
	const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

	const handleSelectAnswer = useCallback(
		function handleSelectAnswer(selectedAnswer) {
			if (selectedAnswer === null) console.log(null);
			setUserAnswers((prevAnswers) => {
				return [...prevAnswers, selectedAnswer];
			});
		},
		[activeQuestionIndex]
	);

	const handleSkipAnswer = useCallback(() => {
		handleSelectAnswer(null);
	}, [handleSelectAnswer]);

	if (quizIsComplete) {
		return <Summary userAnswers={userAnswers} />;
	}

	return (
		<div id='quiz'>
			<Question
				key={activeQuestionIndex}
				questionIndex={activeQuestionIndex}
				onSelectAnswer={handleSelectAnswer}
				onSkipAnswer={handleSkipAnswer}
			/>
		</div>
	);
}
