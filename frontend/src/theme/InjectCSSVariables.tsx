import { theme } from 'antd'
import _ from 'lodash'
import { ReactNode, useEffect } from 'react'

const { useToken } = theme

type Props = {
  children: ReactNode
}

export default function InjectCSSVariables({ children }: Props) {
  const { token } = useToken()

  useEffect(() => {
    const headTag = document.querySelector(':root')
    const styleTag = document.createElement('style')

    styleTag.innerHTML = `
      :root {
        ${Object.entries(token)
          .map(([key, val]) => `--${_.kebabCase(key)}: ${val}`)
          .join(';')}
      }
    `

    headTag?.appendChild(styleTag)
  }, [])

  return children
}
