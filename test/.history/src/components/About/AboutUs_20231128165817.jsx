import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import PageFooter from '../Footer/Footer'
import { Typography } from 'antd'
const AboutUs = () => {
  const txStyle={
    
    p

  };



  return (
    <>
    <PageHeader/>
    <div>
    <Typography.Title level={1} style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>About Us</Typography.Title> 

    <Typography.Title level={5} style={{display: '-webkit-flex'}}>Welcome to Posista-Your Partner in Restaurant Success!</Typography.Title>
    

    </div>

    <PageFooter/>
    </>
  )
}

export default AboutUs