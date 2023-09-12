import { Col, message, Row } from 'antd'
import { Formik } from 'formik'
import { useRef } from 'react'
import Button from '../../../components/Button'
import { Form } from '../../../components/form'
import Field from '../../../components/form/Field'

function OrderCatalogForm() {
  const formik = useRef(null)

  const initialValues = {
    itemCategory: null,
    itemClass: null,
    itemType: null,
    itemCode: '',
    description: '',
    synonym: '',
    stockItem: '',
    consignmentItem: '',
    batchApplicable: '',
    expiryItem: '',
    replaceOnExpiry: '',
    returnAllowed: '',
    refundAllowed: '',
    packOfUom: null,
    packSize: null,
    packUnitUom: null,
    baseUnitUom: null,
    dispenseUom: null,
    manufacturer: null,
    vendors: null,
    store: null,
    reorderLevel: null,
    reorderQuantity: null,
    status: null,
    effectiveFrom: '',
    effectiveTo: '',
    reason: ''
  }

  const handleSubmit = () => {
    message.success('Intro details created successfully')
  }

  return (
    <div className="p-4 px-16">
      <div className="admin">
        <div className="title">Order Catalog Details</div>
        <Formik
          innerRef={formik}
          initialValues={initialValues}
          // validationSchema={eGenjaIntroSchema}
          onSubmit={handleSubmit}>
          <Form labelCol={{ xs: 0 }}>
            <div className="bg-white p-3 shadow-lg rounded-md">
              <label className="field-label">Item</label>
              <Row gutter={[10, 10]} className="my-1">
                <Col xs={24} sm={24} md={12} lg={3} xl={3}>
                  <Field
                    as="select"
                    name="itemCategory"
                    placeholder="Item Category"
                    // label="ID Type"
                    options={[
                      { label: 'Drug', value: 'drug' },
                      { label: 'Non-drug', value: 'non-drug' }
                    ]}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={3} xl={3}>
                  <Field
                    as="select"
                    name="itemClass"
                    placeholder="Item Class"
                    options={[
                      { label: 'SurgicalItem', value: 'surgicalItem' },
                      { label: 'Non-SurgicalItem', value: 'nonSurgicalItem' }
                    ]}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={3} xl={3}>
                  <Field
                    as="select"
                    name="itemType"
                    placeholder="Item Type"
                    options={[
                      { label: 'General', value: 'general' },
                      { label: 'Syringe', value: 'syringe' },
                      { label: 'Needle', value: 'needle' }
                    ]}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={3} xl={3}>
                  <Field name="itemCode" placeholder="Item Code" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={3} xl={3}>
                  <Field name="description" placeholder="Description" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={3} xl={3}>
                  <Field name="synonym" placeholder="Synonym" />
                </Col>
              </Row>
              <label className="field-label">Attributes</label>
              <Row gutter={[10, 10]} className="my-1">
                <Col xs={24} sm={24} md={12} lg={2} xl={2}>
                  <Field as="checkbox" label="Stock Item" name="stockItem" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={2} xl={2}>
                  <Field as="checkbox" label="Consignment Item" name="consignmentItem" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={2} xl={2}>
                  <Field as="checkbox" label="Batch Applicable" name="batchApplicable" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={2} xl={2}>
                  <Field as="checkbox" label="Expiry Item" name="expiryItem" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={2} xl={2}>
                  <Field as="checkbox" label="Replace On Expiry" name="replaceOnExpiry" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={2} xl={2}>
                  <Field as="checkbox" label="Return Allowed" name="returnAllowed" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={2} xl={2}>
                  <Field as="checkbox" label="Refund Allowed" name="refundAllowed" />
                </Col>
              </Row>
              <label className="field-label">Unit Of Measurement</label>
              <Row gutter={[10, 10]} className="my-1">
                <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                  <Field
                    as="select"
                    name="packOfUom"
                    placeholder="Pack Of UOM"
                    options={[
                      { label: 'Box', value: 'box' },
                      { label: 'Bundle', value: 'bundle' },
                      { label: 'Packet', value: 'packet' }
                    ]}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                  <Field
                    as="select"
                    name="packSize"
                    placeholder="Pack Size"
                    options={[
                      { label: 'Box', value: 'box' },
                      { label: 'Bundle', value: 'bundle' },
                      { label: 'Packet', value: 'packet' }
                    ]}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                  <Field
                    as="select"
                    name="packUnitUom"
                    placeholder="Pack Unit Uom"
                    options={[
                      { label: 'Box', value: 'box' },
                      { label: 'Bundle', value: 'bundle' },
                      { label: 'Packet', value: 'packet' }
                    ]}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                  <Field
                    as="select"
                    name="baseUnitUom"
                    placeholder="Base Unit Uom"
                    options={[
                      { label: 'Box', value: 'box' },
                      { label: 'Bundle', value: 'bundle' },
                      { label: 'Packet', value: 'packet' }
                    ]}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                  <Field
                    as="select"
                    name="dispenseUom"
                    placeholder="Dispense Uom"
                    options={[
                      { label: 'Box', value: 'box' },
                      { label: 'Bundle', value: 'bundle' },
                      { label: 'Packet', value: 'packet' }
                    ]}
                  />
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
