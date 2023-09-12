import { withFormik } from 'formik'
import _ from 'lodash'
import { useEffect } from 'react'
import Button from '../../../components/Button'
import { Field, Form } from '../../../components/form'
import { GET_DATA, removeEmptyKeys, SET_DATA } from '../../../utils/util'

function PatientFilter({ values, setValues, ...props }) {
  const onSubmitForm = async () => {
    props.validateForm().then((err) => {
      if (_.isEmpty(err)) {
        const params = removeEmptyKeys(values)
        props.onSubmit(params)
        SET_DATA('pharmacyItems.filterData', values)
      }
    })
  }

  const onClear = () => {
    props.resetForm({})
    props.onSubmit({})
  }

  useEffect(() => {
    setValues({ ...values })
  }, [])

  return (
    <Form>
      <div className="form-fields">
        <Field
          as="select"
          name="idType"
          placeholder="ID Type"
          label="ID Type"
          options={[
            { label: 'Driving License', value: 'drivingLicense' },
            { label: 'PAN Card', value: 'panCard' },
            { label: 'Aadhar', value: 'aadhar' }
          ]}
        />
      </div>
      <div className="form-fields">
        <Field name="patientName" label="Patient Name" />
      </div>
      <div className="form-fields">
        <Field name="age" label="Age" />
      </div>
      <div className="form-fields">
        <Button type="submit" variant="primary" className="search" onClick={onSubmitForm}>
          <i className="flaticon-search-interface-symbol" /> Search
        </Button>
        <Button type="reset" variant="default" className="btn-glow search mb-3" onClick={onClear}>
          Clear
        </Button>
      </div>
    </Form>
  )
}

export default withFormik({
  mapPropsToValues: () => {
    const filterObj = GET_DATA('patients.filterData')

    return {
      idType: filterObj?.patientID || '',
      patientName: filterObj?.patientName || '',
      age: filterObj?.age || ''
    }
  },
  handleSubmit: () => null
})(PatientFilter)
