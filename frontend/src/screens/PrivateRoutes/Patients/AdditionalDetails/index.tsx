import { message } from 'antd'
import { Formik } from 'formik'
import { useRef } from 'react'
import Button from '../../../../components/Button'
import { Form } from '../../../../components/form'
import AdditionalDetailsContent from './Content'

type Props = {
  next: () => void
  previous: () => void
}

export default function AdditionalDetails({ next, previous }: Props) {
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

  const handleSubmit = () => {
    message.success('Additional details created successfully')
    next()
  }

  return (
    <div className="Additional Details">
      <Formik
        innerRef={formik}
        initialValues={initialValues}
        // validationSchema={eGenjaIntroSchema}
        onSubmit={handleSubmit}>
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
