import { message } from 'antd'
import { Formik } from 'formik'
import { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../../../components/Button'
import { Form } from '../../../../components/form'
import apiClient from '../../../../utils/apiClient'
import AdditionalDetailsContent from './Content'

export default function AdditionalDetails({ previous }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const formik = useRef(null)

  const initialValues = {
    language: null,
    preferredLanguage: null,
    religion: null,
    race: null,
    ethnicity: null,
    bloodGroup: null,
    birthPlace: '',
    birthTime: '',
    genderIdentity: null,
    birthGender: null,
    sexualOrientation: null,
    primaryCarePractitionor: null,
    disabilityCode: null,
    refSource: ''
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
          navigate('/app/patients')
        }
      })
    } else {
      apiClient.post('accompanies/add', data).then(({ data }) => {
        if (data && data.result) {
          message.success('Patient Details created successfully')
          navigate('/app/patients')
        }
      })
    }
  }

  return (
    <div className="Additional Details">
      <Formik innerRef={formik} initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <AdditionalDetailsContent />
          <div className="flex justify-between my-3">
            <Button type="submit" className="previous-btn min-w-[100px]" onClick={() => previous()}>
              Previous
            </Button>
            <Button type="submit" className="next-btn min-w-[100px]">
              Save
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
