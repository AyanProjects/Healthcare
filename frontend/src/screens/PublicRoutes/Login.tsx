import { Space } from 'antd'
import { Formik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { Field, Form } from '../../components/form'
import { setUserInfo } from '../../stores/users/actions'
import apiClient from '../../utils/apiClient'
import storage from '../../utils/storage'
import { loginSchema } from '../../utils/validationSchema'

type FormValues = {
  email: string
  password: string
}

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = (values: FormValues) => {
    apiClient.post('auth', values).then(({ status, data }) => {
      if (status === 200) {
        storage.set('token', data.token)
        setUserInfo(data.userData)
        navigate('/app/dashboard')
      }
    })
  }

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-[320px] m-auto bg-white px-4 py-6 rounded shadow-lg">
        <div className="text-center mb-4">
          <div className="text-xl font-semibold text-blue-900">Login to Your Account</div>
          <div className="text-xs">Enter your username & password to login</div>
        </div>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={loginSchema}
          onSubmit={handleLogin}>
          <Form>
            <Field name="email" placeholder="Email" label="Email" />
            <Field name="password" type="password" label="Password" placeholder="Password" />
            <div className="text-right">
              <Link className="font-semibold text-xs" to="/forgot-password">
                Forgot Password?
              </Link>
            </div>
            <div className="mt-3">
              <Button className="w-full" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Formik>
        <div className="flex justify-center mt-2">
          <Space>
            <span className="text-xs">Don&apos;t have account?</span>
            <Link to="/register" className="font-medium text-sm">
              Create an account
            </Link>
          </Space>
        </div>
      </div>
    </div>
  )
}
