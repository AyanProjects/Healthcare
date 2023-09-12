import { message } from 'antd'
import { Formik } from 'formik'
import { useRef } from 'react'
import Button from '../../../../components/Button'
import { Form } from '../../../../components/form'
import AccompanyDetailsContent from './Content'

export default function AccompanyDetails({ next, previous }) {
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

  const handleSubmit = () => {
    message.success('Accompany details created successfully')
    next()
  }

  return (
    <div className="Accompany Details">
      <Formik
        innerRef={formik}
        initialValues={initialValues}
        // validationSchema={eGenjaIntroSchema}
        onSubmit={handleSubmit}>
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
