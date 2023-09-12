import { Form, InputNumber as AntdInputNumber } from 'antd'
import { memo } from 'react'
import useDebounceEffect from '../../hooks/useDebounceEffect'
import type { TInputNumber } from './types'

function InputNumber({
  onChange,
  label,
  error,
  value,
  innerRef,
  required,
  formItemProps,
  ...props
}: TInputNumber) {
  const [val, setValue] = useDebounceEffect((v) => onChange?.(props.name, v), value, 200)

  return (
    <Form.Item
      label={label}
      name={props.name}
      validateStatus={error && 'error'}
      valuePropName="custom"
      help={error && error.replace(props.name, label || props.placeholder || '')}
      required={required}
      {...formItemProps}>
      <AntdInputNumber ref={innerRef} onChange={setValue} value={val} className="!w-full" {...props} />
    </Form.Item>
  )
}

export default memo(InputNumber)
