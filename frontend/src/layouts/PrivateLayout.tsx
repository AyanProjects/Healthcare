import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Dropdown, Layout, Menu, MenuProps, Space, theme } from 'antd'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

const { useToken } = theme

const { Header, Content } = Layout

type Props = {
  children: ReactNode
}

export default function PrivateLayout({ children }: Props) {
  const navigate = useNavigate()
  const { token } = useToken()

  const menuItems: MenuProps['items'] = [
    {
      label: 'Patient',
      key: 'Patient',
      className: '!text-white',
      onClick: () => navigate('/app/patients')
    },
    {
      label: 'Pharmacy Item',
      key: 'PharmacyItem',
      className: '!text-white',
      onClick: () => navigate('/app/pharmacy-items')
    },
    {
      label: 'Pharmacy Drug',
      key: 'PharmacyDrug',
      className: '!text-white',
      onClick: () => navigate('/app/pharmacy-drugs')
    },
    {
      label: 'Order Catalog',
      key: 'orderCatalog',
      className: '!text-white',
      onClick: () => navigate('/app/order-catalogs')
    }
  ]

  const userItems: MenuProps['items'] = [
    {
      label: 'Logout',
      key: 'logout',
      onClick: () => null
    }
  ]

  return (
    <Layout>
      <Header className="sticky top-0 z-[1] flex w-full shadow !pl-3 !pr-6">
        <div className="w-[178px] p-1 px-3">
          <img src={logo} alt="Agastha" />
        </div>
        <div className="flex w-full justify-between pl-3 border-l">
          <Menu
            style={{ backgroundColor: token.Layout?.colorBgHeader }}
            mode="horizontal"
            items={menuItems}
          />
          <Space>
            <Dropdown menu={{ items: userItems }} trigger={['click']} placement="bottomRight">
              <Button shape="circle" className="!p-0" type="link" icon={<Avatar icon={<UserOutlined />} />} />
            </Dropdown>
          </Space>
        </div>
      </Header>
      <Content className="site-layout !min-h-screen overflow-y-auto overflow-x-hidden">{children}</Content>
    </Layout>
  )
}
