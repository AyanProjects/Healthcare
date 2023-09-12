import { Checkbox as AntdCheckbox, Form } from 'antd'
import { memo } from 'react'
import type { TCheckbox } from './types'

function Input({ onChange, label, error, innerRef, required, ...props }: TCheckbox) {
  return (
    <Form.Item
      label={label}
      name={props.name}
      validateStatus={error && 'error'}
      valuePropName="custom"
      help={error && error.replace(props.name, label || '')}
      required={required}>
      <AntdCheckbox ref={innerRef} onChange={(e) => onChange?.(props.name, e.target.checked)} {...props} />
    </Form.Item>
  )
}

export default memo(Input)
