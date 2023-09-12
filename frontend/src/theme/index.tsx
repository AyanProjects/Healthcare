import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function ThemeProvider({ children }: Props) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#f49f10'
        },
        components: {
          Form: {
            marginLG: 10
          },
          Layout: {
            colorBgHeader: '#212364',
            colorTextLightSolid: '#fff',
            colorText: '#fff',
            controlHeight: 25
          },
          Input: {
            controlHeight: 35
          },
          InputNumber: {
            controlHeight: 35
          },
          Select: {
            controlHeight: 35
          },
          DatePicker: {
            controlHeight: 35
          },
          Divider: {
            marginLG: 16
          }
        }
      }}>
      <StyleProvider hashPriority="high">{children}</StyleProvider>
    </ConfigProvider>
  )
}
