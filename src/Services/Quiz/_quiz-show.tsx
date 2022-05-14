import api from '../axios.config'
import throwIfError from '../Helpers/throwCustomException';
import {IUserResponse} from '../../Models/userModels';
import IErrorResponse from '../../Models/errorModels';
import { IQuizModel } from '../../Models/quizModels';

const showQuiz = async (quizId:number):Promise<IQuizModel> => {
    console.log(quizId);
    const result : any = await api().get<IQuizModel>(`/api/v54/quizzes/${quizId}`)
    throwIfError(result);

    return result;
}

export default showQuiz;