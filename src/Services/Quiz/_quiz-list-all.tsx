import api from '../axios.config'
import throwIfError from '../Helpers/throwCustomException';
import {IUserResponse} from '../../Models/userModels';
import IErrorResponse from '../../Models/errorModels';

const listQuizes = async ():Promise<IUserResponse | IErrorResponse> => {
    const result = await api().get<IUserResponse | IErrorResponse>(`/api/v54/quizzes`)
    throwIfError(result);

    return result;
}

export default listQuizes;