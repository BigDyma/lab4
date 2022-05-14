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