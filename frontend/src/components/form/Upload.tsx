import { UploadOutlined } from '@ant-design/icons'
import { Button, Form, Upload as AntdUpload } from 'antd'
import type { UploadRequestOption } from 'rc-upload/lib/interface'
import { TUpload } from './types'

function Upload({ value = [], label, error, onChange, required, ...props }: TUpload) {
  const handleUpload = async ({ file, filename, onSuccess }: UploadRequestOption) => {
    console.log(file)
    onChange?.(props.name, [...value])
    onSuccess?.(filename)
  }

  return (
    <Form.Item
      label={label}
      name={props.name}
      validateStatus={error && 'error'}
      valuePropName="custom"
      help={error && error.replace(props.name, label || '')}
      required={required}>
      <AntdUpload
        customRequest={handleUpload}
        onRemove={(file) =>
          onChange?.(
            props.name,
            value.filter((x) => x.name !== file.name)
          )
        }
        fileList={value.map((x) => ({
          response: x,
          uid: x.name,
          name: x.name
        }))}
        {...props}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </AntdUpload>
    </Form.Item>
  )
}

export default Upload
