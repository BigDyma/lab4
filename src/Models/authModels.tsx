/* eslint-disable func-names */
import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Please enter username'),
  surname: Yup.string().required()
  // .matches(
  //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  //   'Password must contain at least 8 characters, one uppercase, one number and one special case character'
  // )
});

export interface IRegisterRequest {
  name: string;
  surname: string;
}