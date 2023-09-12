import { Form, Select as AntdSelect } from 'antd'
import { memo } from 'react'
import type { TSelect } from './types'

function Select({ innerRef, label, error, required, onChange, ...props }: TSelect) {
  return (
    <Form.Item
      label={label}
      name={props.name}
      validateStatus={error && 'error'}
      valuePropName="custom"
      help={error && error.replace(props.name, label || '')}
      required={required}>
      <AntdSelect
        ref={innerRef}
        allowClear
        optionFilterProp="label"
        onChange={(v) => onChange(props.name, v)}
        {...props}
      />
    </Form.Item>
  )
}

export default memo(Select)
