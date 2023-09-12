import { Col, Row } from 'antd'
import { Formik } from 'formik'
import { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../../components/Button'
import { Form } from '../../../components/form'
import Field from '../../../components/form/Field'
import apiClient from '../../../utils/apiClient'

function OrderCatalogForm() {
  const navigate = useNavigate()
  const { id } = useParams()
  const formik = useRef(null)

  const initialValues = {
    orderCategory: null,
    orderType: null,
    orderCode: '',
    description: '',
    synonym: '',
    defaultQuantity: null,
    quantityChange: false,
    maxQuantity: null,
    remarks: '',
    consent: null,
    completeOnOrder: false,
    holdApplicable: false,
    discontinueApplicable: false,
    chargeable: false,
    resultApplicable: false,
    return: false,
    result: false,
    manufacturer: null,
    vendors: null,
    store: null,
    reorderLevel: null,
    reorderQuantity: null,
    status: null,
    effectiveFrom: null,
    effectiveTo: null,
    reason: ''
  }

  const getData = () => {
    if (id) {
      apiClient.get(`orderCatalogs/get/${id}`).then(({ data }) => {
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
      apiClient.put(`orderCatalogs/update/${id}`, { ...data }).then(({ data }) => {
        if (data && data.result) {
          navigate('/app/order-catalogs')
        }
      })
    } else {
      apiClient.post('orderCatalogs/add', data).then(({ status }) => {
        if (status === 200) {
          navigate('/app/order-catalogs')
        }
      })
    }
  }

  return (
    <div className="p-4 px-16">
      <div className="admin">
        <div className="title">Order Catalog Details</div>
        <Formik innerRef={formik} initialValues={initialValues} onSubmit={handleSubmit}>
          <Form layout="horizontal">
            <div className="bg-white p-3 shadow-lg rounded-md">
              <label className="field-label">Order Description</label>
              <Row gutter={[10, 10]} className="my-1">
                <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                  <Field
                    as="select"
                    name="orderCategory"
                    placeholder="Order Category"
                    // label="ID Type"
                    options={[
                      { label: 'Lab', value: 'lab' },
                      { label: 'Radiology', value: 'radiology' }
                    ]}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                  <Field
                    as="select"
                    name="orderType"
                    placeholder="Order Type"
                    options={[
                      { label: 'Bio-chemistry', value: 'bio-chemistry' },
                      { label: 'Microbiology', value: 'microbiology' },
                      { label: 'Cytology', value: 'cytology' },
                      { label: 'Hematology', value: 'hematology' }
                    ]}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={3} xl={3}>
                  <Field name="orderCode" placeholder="Catalog Code" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                  <Field name="description" placeholder="Description" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                  <Field name="synonym" placeholder="Synonym" />
                </Col>
              </Row>
              <label className="field-label">Quantity</label>
              <Row gutter={[10, 10]} className="my-1">
                <Col xs={24} sm={24} md={12} lg={5} xl={5}>
                  <Field
                    as="select"
                    name="defaultQuantity"
                    placeholder="Default Quantity UOM"
                    options={[
                      { label: 'Box', value: 'box' },
                      { label: 'Bundle', value: 'bundle' },
                      { label: 'Packet', value: 'packet' }
                    ]}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                  <Field as="checkbox" label="Quantity Change" name="quantityChange" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={5} xl={5}>
                  <Field
                    as="select"
                    name="maxQuantity"
                    placeholder="Max Quantity UOM"
                    options={[
                      { label: 'Box', value: 'box' },
                      { label: 'Bundle', value: 'bundle' },
                      { label: 'Packet', value: 'packet' }
                    ]}
                  />
                </Col>
              </Row>

              <label className="field-label">Remarks</label>
              <Row gutter={[10, 10]} className="my-1">
                <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                  <Field name="remarks" placeholder="Explanatory Notes" />
                </Col>
              </Row>
              <label className="field-label">Consent Required</label>
              <Row gutter={[10, 10]} className="my-1">
                <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                  <Field
                    as="select"
                    name="consent"
                    placeholder="Consent Form"
                    options={[
                      { label: 'Yes', value: 'yes' },
                      { label: 'No', value: 'no' }
                    ]}
                  />
                </Col>
              </Row>
              <label className="field-label">Characteristics</label>
              <Row gutter={[10, 10]} className="my-1">
                <Col xs={24} sm={24} md={12} lg={3} xl={3}>
                  <Field as="checkbox" label="Complete on Order" name="completeOnOrder" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={3} xl={3}>
                  <Field as="checkbox" label="Hold Applicable" name="holdApplicable" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                  <Field as="checkbox" label="Discontinue Applicable" name="discontinueApplicable" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={3} xl={3}>
                  <Field as="checkbox" label="Chargeable" name="chargeable" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={3} xl={3}>
                  <Field as="checkbox" label="Result Applicable" name="resultApplicable" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                  <Field as="checkbox" label="Return Authorization Required" name="return" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                  <Field as="checkbox" label="Result Review Required" name="result" />
                </Col>
              </Row>

              <label className="field-label">Manufacturer and Vendors</label>
              <Row gutter={[10, 10]} className="my-1">
                <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                  <Field
                    as="select"
                    name="manufacturer"
                    placeholder="Manufacturer"
                    options={[{ label: 'Manufacturer', value: 'manufacturer' }]}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                  <Field
                    as="select"
                    name="vendors"
                    placeholder="Vendors"
                    options={[{ label: 'Vendors', value: 'vendors' }]}
                  />
                </Col>
              </Row>
              <label className="field-label">Store Details</label>
              <Row gutter={[10, 10]} className="my-1">
                <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                  <Field
                    as="select"
                    name="store"
                    placeholder="Store"
                    options={[{ label: 'Store', value: 'store' }]}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                  <Field
                    as="select"
                    name="reorderLevel"
                    placeholder="Reorder Level"
                    options={[{ label: 'Reorder Level', value: 'reorderLevel' }]}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                  <Field
                    as="select"
                    name="reorderQuantity"
                    placeholder="Reorder quantity"
                    options={[{ label: 'Reorder quantity', value: 'reorderQuantity' }]}
                  />
                </Col>
              </Row>
              <label className="field-label">Status</label>
              <Row gutter={[10, 10]} className="my-1">
                <Col xs={24} sm={24} md={12} lg={3} xl={3}>
                  <Field
                    as="select"
                    name="status"
                    placeholder="Status"
                    options={[{ label: 'Status', value: 'status' }]}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={3} xl={3}>
                  <Field as="date" name="effectiveFrom" placeholder="Effective From" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={3} xl={3}>
                  <Field as="date" name="effectiveTo" placeholder="Effective To" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                  <Field name="reason" placeholder="Reason for Inactive" />
                </Col>
              </Row>
              <div className="flex justify-end my-3">
                <Button type="submit" className="next-btn w-[100px]">
                  Save
                </Button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default OrderCatalogForm
