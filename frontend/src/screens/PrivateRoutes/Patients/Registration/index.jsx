import { message } from 'antd'
import { Formik } from 'formik'
import { useRef } from 'react'
import Button from '../../../../components/Button'
import { Form } from '../../../../components/form'
import { patientRegistrationSchema } from '../../../../utils/validationSchema'
import Content from './Content'

export default function PatientRegistration({ next }) {
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

  const handleSubmit = () => {
    message.success('Intro details created successfully')
    next()
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
