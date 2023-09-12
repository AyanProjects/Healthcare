import { Button as AntdButton } from 'antd'
import { ButtonHTMLType, ButtonProps, ButtonType } from 'antd/lib/button'
import clsx from 'clsx'
import { memo } from 'react'

export type TButton = {
  type?: ButtonHTMLType
  variant?: ButtonType
  success?: boolean
} & Omit<ButtonProps, 'type' | 'htmlType'>

function Button({ type = 'button', variant = 'primary', success, className, ...props }: TButton) {
  return (
    <AntdButton
      htmlType={type}
      type={success ? 'text' : variant}
      className={clsx(success && '!bg-lime-500 !text-white hover:!bg-lime-400', className)}
      {...props}>
      {props.children}
    </AntdButton>
  )
}

export default memo(Button)
