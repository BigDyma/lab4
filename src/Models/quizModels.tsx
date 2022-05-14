/* eslint-disable camelcase */

export interface IQuizAnswer {
    question_id: number,
    answer: string,
    user_id: number
}

export interface IQuizResponse {
    id: number,
    title: string,
    questions_count: number
}

export interface IQuizQuestion {
    id: number, 
    question: string, 
    answers: string[]
}

export interface IQuizSummary {
    numberOfCorrectAnswers: number, 
    numberOfQuestions: number,
    totalPoints: number
}

export interface IQuizModel {
    id: number, 
    title: string, 
    questions: IQuizQuestion[];
}