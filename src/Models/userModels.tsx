import * as Yup from 'yup';

export interface IUserResponse {
  name: string;
  surname: string;
}
export interface IUserResponseId {
  name: string;
  surname: string;
  id: number;
}

export const UserUpdate = Yup.object().shape({
  userName: Yup.string().required('Please enter username')
  // .matches(
  //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  //   'Password must contain at least 8 characters, one uppercase, one number and one special case character'
  // )
});
