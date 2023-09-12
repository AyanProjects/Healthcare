import { FunnelPlotOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import { getIn } from 'formik'
import React, { ReactElement } from 'react'
import Button from '../components/Button'
import TableLayout from './TableLayout'

const { Sider, Content } = Layout

type TFilterLayout = {
  children: ReactElement<TFilterLayoutProps> | ReactElement<TFilterLayoutProps>[]
  filter: ReactElement<TFilterLayoutProps>
  addButton?: {
    title: string
    onClick: () => void
  }
} & TFilterLayoutProps

type TFilterLayoutProps = {
  filterData?: Record<string, unknown>
}

function AddButton({ addButton }: Pick<TFilterLayout, 'addButton'>) {
  return addButton ? (
    <Button onClick={addButton.onClick} variant="primary" className="w-full mb-3">
      <i className="flaticon-plus" /> {addButton.title}
    </Button>
  ) : null
}

export default function FilterLayout({ filter, filterData, addButton, children }: TFilterLayout) {
  const responsiveFilter = () => {
    const x = document.getElementById('mobile-sider-menu')

    if (x) {
      if (x.style.display === 'block') {
        x.style.display = 'none'
      } else {
        x.style.display = 'block'
      }
    }
  }

  const FilterComponent = filter && React.cloneElement(filter, { ...(filterData && { filterData }) })

  return (
    <Layout className="app-sidebar">
      <div className="mobile-filter">
        <Button>
          <FunnelPlotOutlined onClick={responsiveFilter} />
        </Button>
      </div>
      <Sider
        width={230}
        trigger={null}
        collapsible
        collapsed={false}
        theme="light"
        className="shadow-lg"
        id="mobile-sider-menu">
        <div className="filter-section">
          {addButton && <AddButton addButton={addButton} />}
          {FilterComponent}
        </div>
      </Sider>
      <Layout className="site-layout">
        <Content className="site-layout-background">
          {React.Children.map(children, (child) => {
            if (getIn(child?.type, 'name') === TableLayout.name) {
              return React.cloneElement(child, {
                ...{ filterData, addButton: () => AddButton({ addButton }) }
              })
            }

            return child
          })}
        </Content>
      </Layout>
    </Layout>
  )
}
