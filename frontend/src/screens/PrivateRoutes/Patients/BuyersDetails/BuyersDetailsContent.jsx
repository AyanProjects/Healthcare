import { Col, Row } from 'antd'
import { useFormikContext } from 'formik'
import { Field } from '../../../../components/form'
import FieldArray from '../../../../components/form/FieldArray'
import Panel from '../../../../layouts/Panel'
import PanelLayout from '../../../../layouts/PanelLayout'

function Details({ i }) {
  return (
    <Row gutter={[10, 10]} className="my-3">
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
        <div className="form-fields">
          <Field
            as="select"
            name={`propertyBuyerDetail.buyerDetails[${i}].buyerTitle`}
            placeholder="--Select Title--"
            // label="Title"
            options={[
              { label: 'Mr', value: 'mr' },
              { label: 'Ms', value: 'ms' },
              { label: 'Mrs', value: 'mrs' },
              { label: 'Dasho', value: 'dasho' },
              { label: 'Lyenpo', value: 'lyenpo' },
              { label: 'Lam', value: 'lam' }
            ]}
          />
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
        <div className="form-fields">
          <Field
            name={`propertyBuyerDetail.buyerDetails[${i}].buyerName`}
            placeholder="Full Name"
            // label="Full Name"
          />
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
        <div className="form-fields">
          <Field
            name={`propertyBuyerDetail.buyerDetails[${i}].buyerPhoneNumber`}
            placeholder="Contact Number"
            // label="Contact Number"
            type="number"
          />
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
        <div className="form-fields">
          <Field
            name={`propertyBuyerDetail.buyerDetails[${i}].buyerCidNo`}
            placeholder="CID No"
            // label="CID No"
            type="number"
          />
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
        <div className="form-fields">
          <Field
            name={`propertyBuyerDetail.buyerDetails[${i}].buyerEmailId`}
            placeholder="Email Address"
            // label="Email Address"
            type="email"
          />
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
        <div className="form-fields">
          <Field
            as="select"
            name={`propertyBuyerDetail.buyerDetails[${i}].qualification`}
            placeholder="--Select Qualification--"
            // label="Qualification"
            options={[
              { label: 'Not Educated', value: 'educated' },
              { label: 'Monk / Nun', value: 'monk' },
              { label: 'Non Formal Education (NFE)', value: 'nfe' },
              { label: 'Primary', value: 'primary' },
              { label: 'High School', value: 'highSchool' },
              { label: 'Diploma', value: 'diploma' },
              { label: 'Degree', value: 'degree' },
              { label: 'Masters', value: 'masters' },
              { label: 'PhD', value: 'phd' }
            ]}
          />
        </div>
      </Col>
    </Row>
  )
}

export default function BuyersDetailsContent() {
  const { values } = useFormikContext()

  return (
    <>
      <label className="field-label">Buyer&apos;s Details</label>
      <PanelLayout>
        <Panel>
          <h4 className="py-2">Details</h4>
          <FieldArray
            name="propertyBuyerDetail.buyerDetails"
            editable
            additionalValues={{ values }}
            defaultValues={{
              buyerTitle: null,
              buyerName: '',
              buyerCidNo: '',
              buyerPhoneNumber: '',
              buyerEmailId: '',
              qualification: null,
              state: null,
              city: null,
              village: null
            }}>
            {Details}
          </FieldArray>
        </Panel>
      </PanelLayout>
      <label className="field-label">Buyer&apos;s witness Detail</label>
      <Row gutter={[10, 10]} className="content my-3">
        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
          <div className="form-field">
            <Field
              as="select"
              name="propertyBuyerDetail.buyerWitnessTitle"
              placeholder="--Select Title--"
              options={[
                { label: 'Mr', value: 'mr' },
                { label: 'Ms', value: 'ms' },
                { label: 'Mrs', value: 'mrs' },
                { label: 'Dasho', value: 'dasho' },
                { label: 'Lyenpo', value: 'lyenpo' },
                { label: 'Lam', value: 'lam' }
              ]}
            />
          </div>
        </Col>
        <Col xs={12} sm={12} md={16} lg={16} xl={16}>
          <div className="form-field">
            <Field name="propertyBuyerDetail.buyerWitnessName" placeholder="Full Name" />
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="form-field">
            <Field name="propertyBuyerDetail.buyerWitnessCidNo" placeholder="CID No" type="number" />
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="form-field">
            <Field
              name="propertyBuyerDetail.buyerWitnessPhoneNumber"
              placeholder="Contact Number"
              type="number"
            />
          </div>
        </Col>
      </Row>
    </>
  )
}
