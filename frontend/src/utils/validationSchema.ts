import Yup from './yupMethod'

export const registerSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().password().required()
})

export const memberRegisterSchema = Yup.object().shape({
  name: Yup.string().required(),
  emailId: Yup.string().email().required(),
  phoneNumber: Yup.number().required(),
  username: Yup.string().required()
})

export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().password().required()
})

export const forgotPassSchema = Yup.object().shape({
  emailId: Yup.string().email().required()
})

export const patientRegistrationSchema = Yup.object().shape({
  idNumber: Yup.string().required(),
  firstName: Yup.string().required(),
  prefix: Yup.string().required(),
  gender: Yup.string().required(),
  suffix: Yup.string().required(),
  dob: Yup.string().required(),
  age: Yup.string().required(),
  nationality: Yup.string().required(),
  maritalStatus: Yup.string().required()
})
