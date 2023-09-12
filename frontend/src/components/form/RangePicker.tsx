import { Form } from 'antd'
import { memo } from 'react'
import GenericDatePicker from './GenericDatePicker'
import type { TRangePicker } from './types'

const { RangePicker: AntdRangePicker } = GenericDatePicker

function RangePicker({ innerRef, label, error, required, onChange, ...props }: TRangePicker) {
  return (
    <Form.Item
      label={label}
      name={props.name}
      validateStatus={error && 'error'}
      valuePropName="custom"
      help={error && error.replace(props.name, label || '')}
      required={required}>
      <AntdRangePicker
        className="w-full"
        ref={innerRef}
        onChange={(v) => onChange(props.name, v)}
        {...props}
      />
    </Form.Item>
  )
}

export default memo(RangePicker)
