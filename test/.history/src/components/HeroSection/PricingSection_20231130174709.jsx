import React from 'react'
import {Row,Col, Typography} from 'antd'

const PricingSection = () => {
  return (
    <Row align="top" >
        <Col  lg={{ span:24, order: 1 }} md={24} xs={24} xl={24} xxl={24}  style={{background:'wheat'}}>
            <Typography level={4} style={{textAlign:'center'}}>Pricing</Typography>
        </Col>
    </Row>
  )
}

export default PricingSection