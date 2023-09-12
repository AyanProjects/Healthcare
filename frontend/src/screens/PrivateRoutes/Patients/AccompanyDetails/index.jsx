import { Formik } from 'formik'
import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../../../../components/Button'
import { Form } from '../../../../components/form'
import apiClient from '../../../../utils/apiClient'
import AccompanyDetailsContent from './Content'

export default function AccompanyDetails({ next, previous }) {
  const { id } = useParams()
  const formik = useRef(null)

  const initialValues = {
    toPatient: null,
    idType: null,
    idNumber: '',
    expiryDate: '',
    idSource: null,
    images: [],
    prefix: null,
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: null,
    gender: null,
    dob: '',
    age: '',
    nationality: null,
    maritalStatus: null,
    contactPoint: [
      {
        mode: null,
        value: '',
        ext: '',
        contactUse: null,
        priority: null
      }
    ],
    address: [
      {
        addressUse: null,
        addressType: null,
        country: '',
        pincode: '',
        state: '',
        village: '',
        line1: '',
        line2: ''
      }
    ]
  }

  const getData = () => {
    if (id) {
      apiClient.get(`accompanies/get/${id}`).then(({ data }) => {
        if (data && data.result) {
          formik.current.setValues(data.result)
        }
      })
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const handleSubmit = (data) => {
    if (id) {
      apiClient.put(`accompanies/update/${id}`, { ...data }).then(({ data }) => {
        if (data && data.result) {
          next()
        }
      })
    } else {
      apiClient.post('accompanies/add', data).then(({ data }) => {
        if (data && data.result) {
          next()
        }
      })
    }
  }

  return (
    <div className="Accompany Details">
      <Formik innerRef={formik} initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <AccompanyDetailsContent />
          <div className="flex justify-between my-3">
            <Button type="submit" className="previous-btn min-w-[100px]" onClick={() => previous()}>
              Previous
            </Button>
            <Button type="submit" className="next-btn min-w-[100px]">
              Next
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
