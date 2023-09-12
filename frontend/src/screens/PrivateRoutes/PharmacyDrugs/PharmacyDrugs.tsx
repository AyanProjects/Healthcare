/* eslint-disable @typescript-eslint/no-explicit-any */
import { SettingOutlined } from '@ant-design/icons'
import { Popconfirm, Popover } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
// import apiClient from '../../Utils/apiClient'
import Table from '../../../components/table/Table'
import FilterLayout from '../../../layouts/FilterLayout'
import TableLayout from '../../../layouts/TableLayout'
import PharmacyDrugFilter from './PharmacyDrugFilter'

export default function PharmacyDrugs() {
  const navigate = useNavigate()
  // const [industry, setIndustry] = useState([])

  // const getData = (params = {}) => {
  //   apiClient.get('admin/industries', { params }).then(({ status, data }) => {
  //     if (status === 200) {
  //       setIndustry(data.data)
  //     }
  //   })
  // }

  // useEffect(() => {
  //   getData()
  // }, [])

  // const onDelete = (id) => {
  //   apiClient.delete(`admin/industries/${id}`).then(({ status }) => {
  //     if (status === 200) {
  //       setIndustry(industry.filter((item) => item.id !== id))
  //     }
  //   })
  // }

  const tableActions = (row: { id: any }) => (
    <div className="action-buttons">
      <ul>
        <li>
          <Link to={`/app/add/${row.id}`}>
            <i className="flaticon-edit-1" /> Edit
          </Link>
        </li>

        <li>
          <Popconfirm title="Sure to delete?">
            <a>
              <i className="flaticon-delete-2" /> Delete
            </a>
          </Popconfirm>
        </li>
      </ul>
    </div>
  )
  const data = [
    {
      patientId: 'PATIENT001',
      firstName: 'Alice',
      lastName: 'Smith',
      age: 35,
      sugarLevel: '80 mg',
      bpLevel: '120/80 mmHg'
    },
    {
      patientId: 'PATIENT002',
      firstName: 'Bob',
      lastName: 'Johnson',
      age: 42,
      sugarLevel: '95 mg',
      bpLevel: '130/85 mmHg'
    },
    {
      patientId: 'PATIENT003',
      firstName: 'Charlie',
      lastName: 'Williams',
      age: 28,
      sugarLevel: '70 mg',
      bpLevel: '110/70 mmHg'
    },
    {
      patientId: 'PATIENT004',
      firstName: 'David',
      lastName: 'Brown',
      age: 55,
      sugarLevel: '120 mg',
      bpLevel: '140/90 mmHg'
    },
    {
      patientId: 'PATIENT005',
      firstName: 'Eva',
      lastName: 'Davis',
      age: 48,
      sugarLevel: '85 mg',
      bpLevel: '125/82 mmHg'
    },
    {
      patientId: 'PATIENT006',
      firstName: 'Frank',
      lastName: 'Miller',
      age: 60,
      sugarLevel: '110 mg',
      bpLevel: '135/88 mmHg'
    },
    {
      patientId: 'PATIENT007',
      firstName: 'Grace',
      lastName: 'Wilson',
      age: 29,
      sugarLevel: '75 mg',
      bpLevel: '112/75 mmHg'
    },
    {
      patientId: 'PATIENT008',
      firstName: 'Henry',
      lastName: 'Jones',
      age: 38,
      sugarLevel: '100 mg',
      bpLevel: '128/84 mmHg'
    },
    {
      patientId: 'PATIENT009',
      firstName: 'Isabel',
      lastName: 'Harris',
      age: 45,
      sugarLevel: '90 mg',
      bpLevel: '122/78 mmHg'
    },
    {
      patientId: 'PATIENT0010',
      firstName: 'Jack',
      lastName: 'Anderson',
      age: 50,
      sugarLevel: '115 mg',
      bpLevel: '132/86 mmHg'
    }
  ]
  const columns = [
    {
      title: 'Patient ID',
      dataIndex: 'patientId',
      render: (v: string) => (
        <div onClick={() => navigate('/app/pharmacy-drugs/add')}>
          <a>{v}</a>
        </div>
      )
    },
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
      title: 'Sugar Level',
      dataIndex: 'sugarLevel'
    },
    {
      title: 'BP Level',
      dataIndex: 'bpLevel'
    },

    {
      title: 'Action',
      dataIndex: 'custom_action',
      render: (text: any, row: any) => (
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
        title: 'Add Pharmacy Drugs',
        onClick: () => navigate('/app/pharmacy-drugs/add')
      }}
      filter={<PharmacyDrugFilter onSubmit={console.log} />}>
      <TableLayout title="Pharmacy Drugs">
        <Table dataSource={data} columns={columns} />
      </TableLayout>
    </FilterLayout>
  )
}
