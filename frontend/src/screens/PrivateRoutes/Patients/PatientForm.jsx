import { Col, Row, Steps } from 'antd'
import { useState } from 'react'
import AccompanyDetails from './AccompanyDetails'
import AdditionalDetails from './AdditionalDetails'
import PatientRegistration from './Registration'

const { Step } = Steps

export default function PatientForm() {
  const [progress, setProgress] = useState(0)

  const handleNextClick = () => {
    setProgress(progress + 1)
  }

  const handlePreviousClick = () => {
    setProgress(progress - 1)
  }

  const steps = [
    {
      title: '1.Patient Registration'
    },
    {
      title: '2.Accompanying Person'
    },
    {
      title: '3.Additional Details'
    }
  ]

  const render = () => {
    switch (progress) {
      case 0:
        return <PatientRegistration next={handleNextClick} />
      case 1:
        return <AccompanyDetails next={handleNextClick} previous={handlePreviousClick} />
      case 2:
        return <AdditionalDetails next={handleNextClick} previous={handlePreviousClick} />

      default:
        return null
    }
  }

  return (
    <div className="p-4 px-16">
      <div className="admin">
        <div className="title">Patient Details</div>
        <Steps
          type="navigation"
          current={progress}
          onChange={(v) => {
            setProgress(v)
          }}
          className="site-navigation-steps">
          {steps.map((item) => (
            <Step key={item.title} title={item.title} icon />
          ))}
        </Steps>
        <div className="steps-content mt-3">
          <Row gutter={[10, 10]}>
            <Col xs={24} sm={24} md={24} lg={16} xl={24}>
              <div className="bg-white p-3 shadow-lg rounded-md">{render()}</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
