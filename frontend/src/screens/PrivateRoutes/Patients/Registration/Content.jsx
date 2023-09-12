import { Col, Row } from 'antd'
import { useFormikContext } from 'formik'
import { Field } from '../../../../components/form'
import FieldArray from '../../../../components/form/FieldArray'

function Details({ i }) {
  return (
    <Row gutter={[10, 10]} className="my-1">
      <Col xs={24} sm={24} md={12} lg={2} xl={2}>
        <Field
          as="select"
          name={`contactPoint[${i}].mode`}
          placeholder="Mode"
          options={[
            { label: 'Phone', value: 'phone' },
            { label: 'Fax', value: 'fax' },
            { label: 'Email', value: 'email' },
            { label: 'Url', value: 'url' },
            { label: 'SMS', value: 'sms' },
            { label: 'Whatsapp', value: 'whatsapp' }
          ]}
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={3} xl={3}>
        <Field name={`contactPoint[${i}].value`} placeholder="Value" />
      </Col>
      <Col xs={24} sm={24} md={12} lg={3} xl={3}>
        <Field name={`contactPoint[${i}].ext`} placeholder="Ext" />
      </Col>
      <Col xs={24} sm={24} md={12} lg={3} xl={3}>
        <Field
          as="select"
          name={`contactPoint[${i}].contactUse`}
          placeholder="Use"
          options={[
            { label: 'Home', value: 'home' },
            { label: 'Work', value: 'work' },
            { label: 'Temporary', value: 'temporary' },
            { label: 'Old', value: 'old' }
          ]}
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={2} xl={2}>
        <Field
          as="select"
          name={`contactPoint[${i}].priority`}
          placeholder="Priority"
          options={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' }
          ]}
        />
      </Col>
    </Row>
  )
}

function Address({ i }) {
  return (
    <Row gutter={[10, 10]} className="my-1">
      <Col xs={24} sm={24} md={12} lg={2} xl={2}>
        <Field
          as="select"
          name={`address[${i}].addressUse`}
          placeholder="Use"
          options={[
            { label: 'Home', value: 'home' },
            { label: 'Work', value: 'work' },
            { label: 'Temporary', value: 'temporary' },
            { label: 'Old', value: 'old' },
            { label: 'Billing', value: 'billing' }
          ]}
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={2} xl={2}>
        <Field
          as="select"
          name={`address[${i}].addressType`}
          placeholder="Type"
          options={[
            { label: 'Postal', value: 'postal' },
            { label: 'Physical', value: 'physical' },
            { label: 'Both', value: 'both' }
          ]}
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={3} xl={3}>
        <Field name={`address[${i}].country`} placeholder="Country" />
      </Col>
      <Col xs={24} sm={24} md={12} lg={3} xl={3}>
        <Field name={`address[${i}].pincode`} placeholder="Zip/Pin" />
      </Col>
      <Col xs={24} sm={24} md={12} lg={3} xl={3}>
        <Field name={`address[${i}].state`} placeholder="State/Province" />
      </Col>
      <Col xs={24} sm={24} md={12} lg={3} xl={3}>
        <Field name={`address[${i}].village`} placeholder="Village/Town/City" />
      </Col>
      <Col xs={24} sm={24} md={12} lg={3} xl={3}>
        <Field name={`address[${i}].line1`} placeholder="Address line 1" />
      </Col>
      <Col xs={24} sm={24} md={12} lg={3} xl={3}>
        <Field name={`address[${i}].line2`} placeholder="Address line 2" />
      </Col>
    </Row>
  )
}

export default function Content() {
  const { values } = useFormikContext()

  return (
    <>
      <label className="field-label">Identification</label>
      <Row gutter={[10, 10]} className="my-1">
        <Col xs={24} sm={24} md={12} lg={3} xl={3}>
          <Field
            as="select"
            name="idType"
            placeholder="ID Type"
            // label="ID Type"
            options={[
              { label: 'Driving License', value: 'drivingLicense' },
              { label: 'PAN Card', value: 'panCard' },
              { label: 'Aadhar', value: 'aadhar' }
            ]}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={3} xl={3}>
          <Field name="idNumber" placeholder="ID Number" />
        </Col>
        <Col xs={24} sm={24} md={12} lg={3} xl={3}>
          <Field as="date" name="expiryDate" placeholder="Expiry Date" />
        </Col>
        <Col xs={24} sm={24} md={12} lg={3} xl={3}>
          <Field
            as="select"
            name="idSource"
            placeholder="ID Source"
            options={[{ label: 'ID Source', value: 'idSource' }]}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Field as="upload" name="images" />
        </Col>
      </Row>
      <label className="field-label">Details</label>
      <Row gutter={[10, 10]} className="my-1">
        <Col xs={24} sm={24} md={12} lg={2} xl={2}>
          <Field
            as="select"
            name="prefix"
            placeholder="Prefix"
            options={[
              { label: 'Mr.', value: 'mr' },
              { label: 'Ms.', value: 'ms' },
              { label: 'Mrs.', value: 'mrs' }
            ]}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={3} xl={3}>
          <Field name="firstName" placeholder="First Name" />
        </Col>
        <Col xs={24} sm={24} md={12} lg={3} xl={3}>
          <Field name="middleName" placeholder="Middle Name" />
        </Col>
        <Col xs={24} sm={24} md={12} lg={3} xl={3}>
          <Field name="lastName" placeholder="Last Name" />
        </Col>
        <Col xs={24} sm={24} md={12} lg={2} xl={2}>
          <Field
            as="select"
            name="suffix"
            placeholder="Suffix"
            options={[
              { label: 'Senior', value: 'senior' },
              { label: 'Junior', value: 'junior' }
            ]}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={2} xl={2}>
          <Field
            as="select"
            name="gender"
            placeholder="Gender"
            options={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
              { label: 'Others', value: 'others' }
            ]}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={3} xl={3}>
          <Field as="date" name="dob" placeholder="Date Of Birth" />
        </Col>
        <Col xs={24} sm={24} md={12} lg={2} xl={2}>
          <Field name="age" placeholder="Age" />
        </Col>
        <Col xs={24} sm={24} md={12} lg={3} xl={3}>
          <Field
            as="select"
            name="nationality"
            placeholder="Nationality"
            options={[
              { label: 'India', value: 'india' },
              { label: 'Pakistan', value: 'pakistan' },
              { label: 'Japan', value: 'japan' },
              { label: 'US', value: 'US' },
              { label: 'Denmark', value: 'denmark' },
              { label: 'France', value: 'france' }
            ]}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={3} xl={3}>
          <Field
            as="select"
            name="maritalStatus"
            placeholder="Marital Status"
            options={[
              { label: 'Married', value: 'married' },
              { label: 'Not Married', value: 'notMarried' }
            ]}
          />
        </Col>
      </Row>
      <label className="field-label">Contact Point</label>
      <FieldArray
        name="contactPoint"
        editable
        additionalValues={{ values }}
        defaultValues={{
          mode: null,
          value: '',
          ext: '',
          contactUse: null,
          priority: null
        }}>
        {Details}
      </FieldArray>

      <label className="field-label">Address Details</label>
      <FieldArray
        name="address"
        editable
        additionalValues={{ values }}
        defaultValues={{
          addressUse: null,
          addressType: null,
          country: '',
          pincode: '',
          state: '',
          village: '',
          line1: '',
          line2: ''
        }}>
        {Address}
      </FieldArray>
    </>
  )
}
