import { Form, Radio as AntdRadio } from 'antd'
import { memo } from 'react'
import type { TRadio } from './types'

function Radio({ onChange, onBlur, label, error, value, options, required, ...props }: TRadio) {
  return (
    <Form.Item
      label={label}
      name={props.name}
      validateStatus={error && 'error'}
      valuePropName="custom"
      help={error && error.replace(props.name, label || '')}
      required={required}>
      <AntdRadio.Group onChange={(e) => onChange(props.name, e.target.value)} value={value}>
        {options.map((option) => (
          <AntdRadio key={option.value} value={option.value}>
            {option.label}
          </AntdRadio>
        ))}
      </AntdRadio.Group>
    </Form.Item>
  )
}

export default memo(Radio)
