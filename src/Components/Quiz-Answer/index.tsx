/* eslint-disable react/button-has-type */
import React, { useState, useEffect, useCallback } from 'react';
import { idText } from 'typescript';
import { Link } from 'react-router-dom';
import defaultLocale from './_locale';
import { IQuizModel } from '../../Models/quizModels';
import submitQuiz from '../../Services/Quiz/_quiz-submit';

const Quiz = function (props: { quiz: IQuizModel }): JSX.Element {

  const {quiz} = props;

  useEffect(() => console.log(quiz), []);
  const [start, setStart] = useState(false);
  const [questions, setQuestions] = useState(quiz.questions);
  const [isOver, setIsOver] = useState(false);
  const [result, setResult] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [answer, setAnswer] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nrOfQuestions =
    quiz?.questions?.length;

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
     }
     else {
         console.log(res);
     }
     if (currentIndex === quiz.questions?.length - 1) {
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

  function QuizDetailsComponent(): string | number | boolean  | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal {
    return <div className='content'>
      <h1>{quiz.title}</h1>
      <div>
        {appLocale.landingHeaderText.replace(
          '<questionLength>',
          quiz.questions?.length.toString()
        )}
      </div>
      <div className="startQuizWrapper">
        <button onClick={() => setStart(true)} className="startQuizBtn btn">
          {appLocale.startQuizBtn}
        </button>
      </div>
    </div>;
  }
  
  function TakeQuizComponent(): string | number | boolean  | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal {
    return <>
      <div className='quiz-answers'>
        <div className="quiz-header">
          <h3 className='question'>{currentIndex + 1} {quiz.questions[currentIndex]?.question}</h3>
          <div className="answers " key={quiz.questions[currentIndex].id}>
            {quiz.questions[currentIndex]?.answers.map(
              (ans, index) => (
                <div className="question-answers" key={ans + quiz.questions[currentIndex]?.id}>
                  <input
                    type="radio"
                    className="answer"
                    name={quiz.questions[currentIndex]?.question}
                    value={ans}
                    onClick={(event) => handleAnswers(event)} />
                  <label htmlFor={ans}>{ans}</label>
                </div>
              )
            )}
            <button className="next-question" onClick={() => nextQuestion()}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>;
  }


  return (
    <>
    <div className="react-quiz-container">
      {!start && QuizDetailsComponent()}
      {start && isOver && (
        <>
        <div className="main">
          <div className="card-body">
            <h3 className="card-title">Your result</h3>
            <h2 className="card-subtitle">
              {result} out of {quiz?.questions?.length}{" "}
            </h2>
            <Link to="/">
            <button className="start-quiz">
              Return
            </button>
            </Link>
          </div>
        </div>
      </>
      )}
    </div>
      {start && !isOver && TakeQuizComponent()
            }
						

    </>
  );

 

  
};

export default Quiz;
