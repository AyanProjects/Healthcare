import { withFormik } from 'formik'
import _ from 'lodash'
import { useEffect } from 'react'
import Button from '../../../components/Button'
import { Field, Form } from '../../../components/form'
import { GET_DATA, removeEmptyKeys, SET_DATA } from '../../../utils/util'

function OrderCatalogFilter({ values, setValues, ...props }) {
  const onSubmitForm = async () => {
    props.validateForm().then((err) => {
      if (_.isEmpty(err)) {
        const params = removeEmptyKeys(values)
        props.onSubmit(params)
        SET_DATA('orderCatalogs.filterData', values)
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
          name="orderCategory"
          placeholder="Order Category"
          label="Order Category"
          options={[
            { label: 'Lab', value: 'lab' },
            { label: 'Radiology', value: 'radiology' }
          ]}
        />
      </div>
      <div className="form-fields">
        <Field
          as="select"
          name="orderType"
          placeholder="Order Type"
          label="Order Type"
          options={[
            { label: 'Bio-chemistry', value: 'bio-chemistry' },
            { label: 'Microbiology', value: 'microbiology' },
            { label: 'Cytology', value: 'cytology' },
            { label: 'Hematology', value: 'hematology' }
          ]}
        />
      </div>
      <div className="form-fields">
        <Field name="orderCode" placeholder="Catalog Code" label="Catalog Code" />
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
    const filterObj = GET_DATA('orderCatalogs.filterData')

    return {
      orderCategory: filterObj?.itemCategory || '',
      orderType: filterObj?.itemType || '',
      orderCode: filterObj?.itemClass || ''
    }
  },
  handleSubmit: () => null
})(OrderCatalogFilter)
