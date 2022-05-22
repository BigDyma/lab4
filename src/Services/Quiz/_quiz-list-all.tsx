import api from '../axios.config'
import throwIfError from '../Helpers/throwCustomException';
import {IUserResponse} from '../../Models/userModels';
import IErrorResponse from '../../Models/errorModels';

const listQuizes = async ():Promise<any> => {
    const result = await api().get(`/api/v54/quizzes`)
    throwIfError(result);

    return result;
}

export default listQuizes;