import api from '../axios.config'
import throwIfError from '../Helpers/throwCustomException';
import {IUserResponse} from '../../Models/userModels';
import IErrorResponse from '../../Models/errorModels';

const showQuiz = async (quizId:number):Promise<IUserResponse | IErrorResponse> => {
    const result = await api().get<IUserResponse | IErrorResponse>(`/api/v54/quizzes/${quizId}`)
    throwIfError(result);

    return result;
}

export default showQuiz;