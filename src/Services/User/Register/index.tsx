import { IRegisterRequest } from '../../../Models/authModels';
import { IUserResponse, IUserResponseId } from '../../../Models/userModels';
import api from '../../axios.config';
import throwIfError from '../../Helpers/throwCustomException';

const register = async (values: IRegisterRequest): Promise<any> => {
  const fullName = `${values.name} ${values.surname}`;
  
  const { name, surname } = values;
  const requestQuery = {
    data: {
      name, 
      surname
    }
  }
  const data:any = await api().post<IUserResponseId>(`/api/v54/users`, requestQuery);

  // @TO-DO set userId somewhere

  throwIfError(data)

  if (data && data.id)
  {
    localStorage.setItem('userId', JSON.stringify(data.id))
  }
};

export default register;
