import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { Field, Form } from '../../components/form'
import apiClient from '../../utils/apiClient'
import { registerSchema } from '../../utils/validationSchema'

type FormValues = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export default function Register() {
  const navigate = useNavigate()

  const handleRegister = (values: FormValues) => {
    apiClient.post('users', values).then(({ status }) => {
      if (status === 200) {
        navigate('/login')
      }
    })
  }

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-[320px] m-auto bg-white px-4 py-6 rounded shadow-lg">
        <div className="text-center mb-4">
          <div className="text-xl font-semibold text-blue-900">Register Here</div>
        </div>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: ''
          }}
          validationSchema={registerSchema}
          onSubmit={handleRegister}>
          <Form>
            <Field name="firstName" placeholder="First Name" label="First Name" />
            <Field name="lastName" placeholder="Last Name" label="Last Name" />
            <Field name="email" placeholder="Email" label="Email" />
            <Field name="password" type="password" label="Password" placeholder="Password" />

            <div className="mt-3">
              <Button className="w-full" type="submit">
                Register
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}
