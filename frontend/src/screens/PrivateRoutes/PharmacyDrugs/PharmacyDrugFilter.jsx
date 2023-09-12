import { withFormik } from 'formik'
import _ from 'lodash'
import { useEffect } from 'react'
import Button from '../../../components/Button'
import { Field, Form } from '../../../components/form'
import { GET_DATA, removeEmptyKeys, SET_DATA } from '../../../utils/util'

function PharmacyDrugFilter({ values, setValues, ...props }) {
  const onSubmitForm = async () => {
    props.validateForm().then((err) => {
      if (_.isEmpty(err)) {
        const params = removeEmptyKeys(values)
        props.onSubmit(params)
        SET_DATA('pharmacyDrugs.filterData', values)
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
          label="ID Category"
          name="itemCategory"
          placeholder="Item Category"
          options={[
            { label: 'Drug', value: 'drug' },
            { label: 'Non-drug', value: 'non-drug' }
          ]}
        />
      </div>
      <div className="form-fields">
        <Field
          as="select"
          name="itemType"
          placeholder="Item Type"
          label="Item Type"
          options={[
            { label: 'General', value: 'general' },
            { label: 'Syringe', value: 'syringe' },
            { label: 'Needle', value: 'needle' }
          ]}
        />
      </div>
      <div className="form-fields">
        <Field
          as="select"
          name="itemClass"
          label="Item Class"
          placeholder="Item Class"
          options={[
            { label: 'SurgicalItem', value: 'surgicalItem' },
            { label: 'Non-SurgicalItem', value: 'nonSurgicalItem' }
          ]}
        />
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
    const filterObj = GET_DATA('pharmacyDrugs.filterData')

    return {
      itemCategory: filterObj?.itemCategory || '',
      itemType: filterObj?.itemType || '',
      itemClass: filterObj?.itemClass || ''
    }
  },
  handleSubmit: () => null
})(PharmacyDrugFilter)
