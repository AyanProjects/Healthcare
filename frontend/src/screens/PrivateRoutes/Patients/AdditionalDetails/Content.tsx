import { Col, Row } from 'antd'
import Field from '../../../../components/form/Field'

export default function Content() {
  return (
    <>
      <label className="field-label">Additional Details</label>
      <Row gutter={[10, 10]} className="my-1">
        <Col xs={24} sm={24} md={12} lg={4} xl={4}>
          <div className="form-fields">
            <Field
              as="select"
              mode="multiple"
              name="language"
              placeholder="Communication Languages"
              // label="ID Type"
              options={[
                { label: 'English', value: 'english' },
                { label: 'Tamil', value: 'Tamil' },
                { label: 'Hindi', value: 'hindi' }
              ]}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={4} xl={4}>
          <div className="form-fields">
            <Field
              as="select"
              name="preferredLanguage"
              placeholder="Preferred Language"
              // label="ID Type"
              options={[
                { label: 'English', value: 'english' },
                { label: 'Tamil', value: 'Tamil' },
                { label: 'Hindi', value: 'hindi' }
              ]}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={3} xl={3}>
          <div className="form-fields">
            <Field
              as="select"
              name="religion"
              placeholder="Religion"
              // label="ID Type"
              options={[
                { label: 'Hindu', value: 'hindu' },
                { label: 'Muslim', value: 'muslim' },
                { label: 'Christianity', value: 'christianity' }
              ]}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={3} xl={3}>
          <div className="form-fields">
            <Field
              as="select"
              name="race"
              placeholder="Race"
              // label="ID Type"
              options={[{ label: 'Race', value: 'race' }]}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={3} xl={3}>
          <div className="form-fields">
            <Field
              as="select"
              name="ethnicity"
              placeholder="Ethnicity"
              // label="ID Type"
              options={[{ label: 'Ethnicity', value: 'ethnicity' }]}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={3} xl={3}>
          <div className="form-fields">
            <Field
              as="select"
              name="bloodGroup"
              placeholder="Blood Group"
              // label="ID Type"
              options={[
                { label: 'B+ve', value: 'B+ve' },
                { label: 'O+ve', value: 'O+ve' },
                { label: 'O-ve', value: 'O-ve' },
                { label: 'AB-ve', value: 'AB-ve' }
              ]}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={4} xl={4}>
          <div className="form-fields">
            <Field name="birthPlace" placeholder="Birth Place" />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={4} xl={4}>
          <div className="form-fields">
            <Field name="birthTime" placeholder="Birth Time" />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={3} xl={3}>
          <div className="form-fields">
            <Field
              as="select"
              name="genderIdentity"
              placeholder="Gender Identity"
              // label="ID Type"
              options={[{ label: 'Gender Identity', value: 'Gender Identity' }]}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={3} xl={3}>
          <div className="form-fields">
            <Field
              as="select"
              name="birthGender"
              placeholder="Birth Gender"
              // label="ID Type"
              options={[{ label: 'Birth Gender', value: 'birthGender' }]}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={3} xl={3}>
          <div className="form-fields">
            <Field
              as="select"
              name="sexualOrientation"
              placeholder="Sexual Orientation"
              // label="ID Type"
              options={[{ label: 'Sexual Orientation', value: 'sexualOrientation' }]}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={4} xl={4}>
          <div className="form-fields">
            <Field
              as="select"
              name="primaryCarePractitionor"
              placeholder="Primary Care Practitionor"
              // label="ID Type"
              options={[{ label: 'Primary Care Practitionor', value: 'primaryCarePractitionor' }]}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={3} xl={3}>
          <div className="form-fields">
            <Field
              as="select"
              name="disabilityCode"
              placeholder="Disability Code"
              // label="ID Type"
              options={[{ label: 'Disability Code', value: 'disabilityCode' }]}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={4} xl={4}>
          <div className="form-fields">
            <Field name="refSource" placeholder="Ref Source" />
          </div>
        </Col>
      </Row>
    </>
  )
}
