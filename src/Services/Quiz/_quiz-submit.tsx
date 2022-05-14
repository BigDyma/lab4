import api from '../axios.config'
import throwIfError from '../Helpers/throwCustomException';
import {IUserResponse} from '../../Models/userModels';
import IErrorResponse from '../../Models/errorModels';
import { IQuizAnswer } from '../../Models/quizModels';

const submitQuiz = async (quizId:number, quizAnswers: IQuizAnswer ):Promise<any> => {
    const result = await api()
        .post<IUserResponse | IErrorResponse>(`/api/v54/quizzes/${quizId}/submit`, 
            {data: quizAnswers})

    throwIfError(result);
    return result;
}

export default submitQuiz;