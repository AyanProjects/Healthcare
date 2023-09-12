import { Form as AntdForm, FormProps as AntdFormProps } from 'antd'
import { useFormikContext } from 'formik'
import { ReactNode, useEffect } from 'react'
import ErrorFocus from './ErrorFocus'

type TForm = {
  children: ReactNode
} & AntdFormProps

export default function Form({ children, layout = 'vertical', ...props }: TForm) {
  const { setTouched, submitForm } = useFormikContext()

  useEffect(() => {
    setTouched({})
  }, [])

  return (
    <AntdForm layout={layout} onFinish={submitForm} {...props}>
      {children}
      <ErrorFocus />
    </AntdForm>
  )
}
