import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import PageFooter from '../Footer/Footer'
import { Typography } from 'antd'
const AboutUs = () => {
  return (
    <>
    <PageHeader/>
    <div>
    <Typography.Title>About Us</Typography.Title> style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
    

    </div>

    <PageFooter/>
    </>
  )
}

export default AboutUs