/* eslint-disable react/button-has-type */
import React, { useState, useEffect, useCallback } from 'react';
import defaultLocale from './_locale';
import { IQuizModel } from '../../Models/quizModels';
import submitQuiz from '../../Services/Quiz/_quiz-submit';

const Quiz = function (props: { quiz: IQuizModel }): JSX.Element {

  const {quiz} = props;

  const [start, setStart] = useState(false);
  const [questions, setQuestions] = useState(quiz.questions);
  const [isOver, setIsOver] = useState(false);
  const [result, setResult] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [answer, setAnswer] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nrOfQuestions =
    quiz.questions.length;

  const handleAnswers = (event) => {
        setAnswer(event.target.value);
        const test = event.target.value;
        setSelectedAnswer(test);
      };


  const  nextQuestion = async () => {
    const userId = parseInt(localStorage.getItem("userId"), 10);
    const questionId = quiz.questions[currentIndex].id;

    const requestData = {
          question_id: questionId,
          answer: selectedAnswer as string,
          user_id: userId,
      };

     const res =  await submitQuiz(quiz.id, requestData);
      
     if (res && res.correct)
     {
         setResult((prevState) => prevState + 1);

         // @TODO create snackbar message
     }
     else {
         console.log(res);
     }
     if (currentIndex === quiz.questions.length - 1) {
        setIsOver(true);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
  
    }    
  const shuffleQuestions = useCallback((q) => {
    for (let i = nrOfQuestions - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [quiz.questions[i], quiz.questions[j]] = [q[j], q[i]];
    }
    quiz.questions.length = nrOfQuestions;
    return q;
  }, []);

  useEffect(() => {
      setQuestions(shuffleQuestions(quiz.questions));
    setQuestions(
      quiz.questions.map((question, index) => ({
        ...question,
        questionIndex: index + 1
      }))
    );
  }, [start]);

  const appLocale = {
    ...defaultLocale,
  };

  return (
    <div className="react-quiz-container">
      {!start && (
        <div>
          <h2>{quiz.title}</h2>
          <div>
            {appLocale.landingHeaderText.replace(
              '<questionLength>',
              quiz.questions.length.toString()
            )}
          </div>
          <div className="startQuizWrapper">
            <button onClick={() => setStart(true)} className="startQuizBtn btn">
              {appLocale.startQuizBtn}
            </button>
          </div>
        </div>
      )}

      {start && isOver && (
           <>
           <div className="main">
             <div className="pass-quiz-card">
               {quiz.questions[currentIndex]?.question}
               <div className="answers ">
                 {quiz.questions[currentIndex]?.answers.map(
                   (ans, index) => (
                     <div className="question-answers" key={quiz.questions[currentIndex].id}>
                       <input
                         type="radio"
                         name={quiz.questions[currentIndex].question}
                         value={answer}
                         onClick={(event) => handleAnswers(event)}
                       />
                       <label htmlFor={answer}>{answer}</label>
                     </div>
                   )
                 )}
                 <button className="start-quiz" onClick={() => nextQuestion()}>
                   Next 
                 </button>
               </div>
             </div>
           </div>
         </>
      )}
    </div>
  );
};

export default Quiz;
