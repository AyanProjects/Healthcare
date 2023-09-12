import { Form, Input as AntdInput } from 'antd'
import { memo } from 'react'
import useDebounceEffect from '../../hooks/useDebounceEffect'
import type { TInput } from './types'

function Input({ onChange, label, type = 'text', error, value, innerRef, required, ...props }: TInput) {
  const InputField = type === 'password' ? AntdInput.Password : AntdInput
  const [val, setValue] = useDebounceEffect((v) => onChange(props.name, v), value, 200)

  return (
    <Form.Item
      label={label}
      name={props.name}
      validateStatus={error && 'error'}
      valuePropName="custom"
      help={error && error.replace(props.name, label || props.placeholder || '')}
      required={required}>
      <InputField ref={innerRef} onChange={(e) => setValue(e.target.value)} value={val} {...props} />
    </Form.Item>
  )
}

export default memo(Input)
