import { Col, Row, Space } from 'antd'
import React, { ReactNode } from 'react'
import Button from '../components/Button'

type TTableLayout = {
  title: string | ReactNode
  children: ReactNode
  rightSection?: ReactNode
  addButton?: {
    title: string
    onClick: () => void
  }
}

export default function TableLayout({ title, rightSection, addButton, children }: TTableLayout) {
  return (
    <div className="table-layout px-3">
      <Row justify="space-between" align="middle">
        <Col>{title && (typeof title === 'string' ? <h2 className="table-title">{title}</h2> : title)}</Col>
        <Col className="pt-1">
          <Space>{rightSection}</Space>
        </Col>
      </Row>
      {addButton && (
        <div className="add-button">
          {typeof addButton === 'function' ? (
            React.createElement(addButton)
          ) : (
            <Button onClick={addButton.onClick} variant="primary" className="btn-block">
              <i className="flaticon-plus" /> {addButton.title}
            </Button>
          )}
        </div>
      )}
      {children}
    </div>
  )
}
