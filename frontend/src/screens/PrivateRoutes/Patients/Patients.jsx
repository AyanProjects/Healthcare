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
import PatientFilter from './PatientFilter'

export default function PatientList() {
  const navigate = useNavigate()
  const [patient, setPatient] = useState([])

  const getData = (params = {}) => {
    apiClient.get('patients/get', { params }).then(({ data }) => {
      if (data.result) {
        SET_DATA('pharmacyItems.filterData', { ...params })
        setPatient(data.result)
      }
    })
  }

  useEffect(() => {
    getData(GET_DATA('patients.filterData'))
  }, [])

  const onDelete = (id) => {
    apiClient.delete(`patients/delete/${id}`).then(({ status }) => {
      if (status === 200) {
        setPatient(patient.filter((item) => item?.id !== id))
      }
    })
  }

  const tableActions = (row) => (
    <div className="action-buttons">
      <ul>
        <li>
          <Link to={`/app/patients/edit/${row.id}`}>
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
      title: 'First Name',
      dataIndex: 'firstName'
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName'
    },
    {
      title: 'Age',
      dataIndex: 'age'
    },
    {
      title: 'ID Type',
      dataIndex: 'idType'
    },
    {
      title: 'Marital Status',
      dataIndex: 'maritalStatus'
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
        title: 'Add Patient',
        onClick: () => navigate('/app/patients/add')
      }}
      filter={<PatientFilter onSubmit={getData} />}>
      <TableLayout title="Patients">
        <Table dataSource={patient} columns={columns} />
      </TableLayout>
    </FilterLayout>
  )
}
