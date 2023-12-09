import React from 'react'
import {Row,Col, Typography} from 'antd'

const PricingSection = () => {
  return (
    <Row align="top" >
        <Col   lg={{ span:24, order: 1 }} md={24} xs={24} xl={24} xxl={24}  style={{background:'wheat' ,textAlign:'center'}}>
            <Typography.Title level={2} >Pricing</Typography.Title>
            <div style={{display:"flex"}}> With our < style={{color:'orange'}}> market competetiveplans,</>you </div>
        </Col>
    </Row>
  )
}

export default PricingSection