/* eslint-disable @typescript-eslint/no-explicit-any */
import { SettingOutlined } from '@ant-design/icons'
import { Popconfirm, Popover } from 'antd'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Table from '../../../components/table/Table'
import FilterLayout from '../../../layouts/FilterLayout'
import TableLayout from '../../../layouts/TableLayout'
import apiClient from '../../../utils/apiClient'
import { GET_DATA, SET_DATA } from '../../../utils/util'
import PharmacyItemFilter from './PharmacyItemFilter'

export default function PharmacyItems() {
  const navigate = useNavigate()
  const [pharmacyItem, setPharmacyItem] = useState([])

  const getData = (params = {}) => {
    apiClient.get('pharmacyItems/get', { params }).then(({ data }) => {
      if (data.result) {
        SET_DATA('pharmacyItems.filterData', { ...params })
        setPharmacyItem(data.result)
      }
    })
  }

  useEffect(() => {
    getData(GET_DATA('pharmacyItems.filterData'))
  }, [])

  const onDelete = (id) => {
    apiClient.delete(`pharmacyItems/delete/${id}`).then(({ status }) => {
      if (status === 200) {
        setPharmacyItem(pharmacyItem.filter((item) => item?.id !== id))
      }
    })
  }

  const tableActions = (row) => (
    <div className="action-buttons">
      <ul>
        <li>
          <Link to={`/app/pharmacy-items/edit/${row.id}`}>
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
      title: 'Item Category',
      dataIndex: 'itemCategory'
    },
    {
      title: 'Item Class',
      dataIndex: 'itemClass'
    },
    {
      title: 'Item Type',
      dataIndex: 'itemType'
    },
    {
      title: 'Item Code',
      dataIndex: 'itemCode'
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
        title: 'Add Pharmacy Items',
        onClick: () => navigate('/app/pharmacy-items/add')
      }}
      filter={<PharmacyItemFilter onSubmit={getData} />}>
      <TableLayout title="Pharmacy Items">
        <Table dataSource={pharmacyItem} columns={columns} />
      </TableLayout>
    </FilterLayout>
  )
}
