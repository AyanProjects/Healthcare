import { Form } from 'antd'
import moment from 'moment'
import { memo } from 'react'
import GenericDatePicker from './GenericDatePicker'
import type { TDatePicker } from './types'

function Input({ onChange, label, error, value, innerRef, required, ...props }: TDatePicker) {
  return (
    <Form.Item
      label={label}
      name={props.name}
      validateStatus={error && 'error'}
      valuePropName="custom"
      help={error && error.replace(props.name, label || '')}
      required={required}>
      <GenericDatePicker
        ref={innerRef}
        onChange={(v) => onChange(props.name, v)}
        value={moment(value)}
        {...props}
      />
    </Form.Item>
  )
}

export default memo(Input)
