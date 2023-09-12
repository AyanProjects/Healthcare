/* eslint-disable @typescript-eslint/no-explicit-any */
import { SettingOutlined } from '@ant-design/icons'
import { Popconfirm, Popover } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
// import apiClient from '../../Utils/apiClient'
import { useEffect, useState } from 'react'
import Table from '../../../components/table/Table'
import FilterLayout from '../../../layouts/FilterLayout'
import TableLayout from '../../../layouts/TableLayout'
import apiClient from '../../../utils/apiClient'
import { GET_DATA, SET_DATA } from '../../../utils/util'
import OrderCatalogFilter from './OrderCatalogFilter'

export default function OrderCatalogs() {
  const navigate = useNavigate()
  const [orderCatalog, setOrderCatalog] = useState([])

  const getData = (params = {}) => {
    apiClient.get('orderCatalogs/get', { params }).then(({ data }) => {
      if (data.result) {
        SET_DATA('orderCatalogs.filterData', { ...params })
        setOrderCatalog(data.result)
      }
    })
  }

  useEffect(() => {
    getData(GET_DATA('orderCatalogs.filterData'))
  }, [])

  const onDelete = (id) => {
    apiClient.delete(`orderCatalogs/delete/${id}`).then(({ status }) => {
      if (status === 200) {
        setOrderCatalog(orderCatalog.filter((item) => item?.id !== id))
      }
    })
  }

  const tableActions = (row) => (
    <div className="action-buttons">
      <ul>
        <li>
          <Link to={`/app/order-catalogs/edit/${row.id}`}>
            <i className="flaticon-edit-1" /> Edit
          </Link>
        </li>

        <li>
          <Popconfirm title="Sure to delete?" onConfirm={() => onDelete(row.id)}>
            <a>
              <i className="flaticon-delete-2" /> Delete
            </a>
          </Popconfirm>
        </li>
      </ul>
    </div>
  )

  const columns = [
    {
      title: 'Order Category',
      dataIndex: 'orderCategory'
    },
    {
      title: 'Order Type',
      dataIndex: 'orderType'
    },
    {
      title: 'Order Code',
      dataIndex: 'orderCode'
    },
    {
      title: 'Description',
      dataIndex: 'description'
    },
    {
      title: 'Synonym',
      dataIndex: 'synonym'
    },

    {
      title: 'Action',
      dataIndex: 'custom_action',
      render: (text, row) => (
        <Popover placement="bottomRight" content={tableActions(row)} trigger="click">
          <div className="btn-group">
            <button type="button" className="btn glow dropdown-toggle">
              <SettingOutlined /> <span className="caret" />
            </button>
          </div>
        </Popover>
      )
    }
  ]

  return (
    <FilterLayout
      addButton={{
        title: 'Add Order Catalogs',
        onClick: () => navigate('/app/order-catalogs/add')
      }}
      filter={<OrderCatalogFilter onSubmit={getData} />}>
      <TableLayout title="Order Catalogs">
        <Table dataSource={orderCatalog} columns={columns} />
      </TableLayout>
    </FilterLayout>
  )
}
