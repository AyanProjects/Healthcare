import { Formik } from 'formik'
import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../../../../components/Button'
import { Form } from '../../../../components/form'
import apiClient from '../../../../utils/apiClient'
import { patientRegistrationSchema } from '../../../../utils/validationSchema'
import Content from './Content'

export default function PatientRegistration({ next }) {
  const { id } = useParams()
  const formik = useRef(null)

  const initialValues = {
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
      apiClient.get(`patients/get/${id}`).then(({ data }) => {
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
      apiClient.put(`patients/update/${id}`, { ...data }).then(({ data }) => {
        if (data && data.result) {
          next()
        }
      })
    } else {
      apiClient.post('patients/add', data).then(({ data }) => {
        if (data && data.result) {
          next()
        }
      })
    }
  }

  return (
    <div className="Patient Registration">
      <Formik
        innerRef={formik}
        initialValues={initialValues}
        validationSchema={patientRegistrationSchema}
        onSubmit={handleSubmit}>
        <Form labelCol={{ xs: 0 }}>
          <Content />
          <div className="flex justify-end my-3">
            <Button type="submit" className="next-btn w-[100px]">
              Next
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
