import { FormikProps, withFormik } from 'formik'
import { useEffect } from 'react'
import Button from '../../../components/Button'
import { Field, Form } from '../../../components/form'

type FormValues = {
  patientID: string
  patientName: string
  age: string
}

function PatientFilter({ values, setValues }: FormikProps<FormValues>) {
  useEffect(() => {
    setValues({ ...values })
  }, [])

  return (
    <Form>
      <div className="form-fields">
        <Field name="patientID" label="Patient ID" />
      </div>
      <div className="form-fields">
        <Field name="patientName" label="Patient Name" />
      </div>
      <div className="form-fields">
        <Field name="age" label="Age" />
      </div>
      <div className="form-fields">
        <Button type="submit" variant="primary" className="search">
          <i className="flaticon-search-interface-symbol" /> Search
        </Button>
        <Button type="reset" variant="default" className="btn-glow search mb-3">
          Clear
        </Button>
      </div>
    </Form>
  )
}

export default withFormik<{ onSubmit: (values: FormValues) => void }, FormValues>({
  mapPropsToValues: () => ({
    patientID: '',
    patientName: '',
    age: ''
  }),
  handleSubmit: (values, { props: { onSubmit } }) => onSubmit(values)
})(PatientFilter)
