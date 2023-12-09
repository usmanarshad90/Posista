import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import PageFooter from '../Footer/Footer'
import { Typography } from 'antd'
const AboutUs = () => {
  return (
    <>
    <PageHeader/>
    <div>
    <Typography.Title level= style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>About Us</Typography.Title> 
    

    </div>

    <PageFooter/>
    </>
  )
}

export default AboutUs