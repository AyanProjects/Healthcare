import { Col, Row } from 'antd'
import { Formik } from 'formik'
import { useRef } from 'react'
import Button from '../../../../components/Button'
import { Form } from '../../../../components/form'
import BuyersDetailsContent from './BuyersDetailsContent'

function BuyersDetails({ next, previous }) {
  const formik = useRef(null)

  const initialValues = {
    propertyBuyerDetail: {
      buyerDetails: [
        {
          buyerTitle: null,
          buyerName: '',
          buyerCidNo: '',
          buyerPhoneNumber: '',
          buyerEmailId: '',
          qualification: null,
          stateId: null,
          cityId: null,
          villageId: null
        }
      ],
      buyerWitnessTitle: null,
      buyerWitnessName: '',
      buyerWitnessCidNo: '',
      buyerWitnessPhoneNumber: '',
      stateId: null,
      cityId: null,
      villageId: null
    }
  }

  return (
    <Formik innerRef={formik} initialValues={initialValues} onSubmit={next}>
      <Form>
        <BuyersDetailsContent />
        <Row gutter={[10, 10]} className="content my-3">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Button type="submit" className="previous-btn" onClick={() => previous()}>
              Previous
            </Button>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Button type="submit" className="next-btn">
              Next
            </Button>
          </Col>
        </Row>
      </Form>
    </Formik>
  )
}

export default BuyersDetails
