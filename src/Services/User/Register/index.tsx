import { IRegisterRequest } from '../../../Models/authModels';
import api from '../../axios.config';
import throwIfError from '../../Helpers/throwCustomException';

const register = async (values: IRegisterRequest): Promise<any> => {
  const fullName = `${values.name} ${values.surname}`;
  
  // excluding firstName and lastName and adding fullName.
  const { name, surname } = values;
  const requestQuery = {
    data: {
      name, 
      surname
    }
  }
  const data = await api().post(`/api/v54/users`, requestQuery);
  throwIfError(data)
};

export default register;
