import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import PageFooter from '../Footer/Footer'
import { Typography } from 'antd'
import { TrophyFilled } from '@ant-design/icons'
const AboutUs = () => {
  const txStyle={
    
    
    color:'#fd7e14',
    display:'-webkit-flex',
    padding:"0px 0px 0px 60px"

  };



  return (
    <>
    <PageHeader/>
    
    <Typography.Title level={1} style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>About Us</Typography.Title> 

    <Typography.Title level={3} style={txStyle}>Welcome to Posista-Your Partner in Restaurant Success!</Typography.Title>
    <div style={{fontFamily:"flex",fontSize:"20px ",padding:"0px 30px 0px 60px" }}>Welcome to Posista - Your Partner in Restaurant Success!At Posista, we're not just selling software; were empowering restaurants to thrive in a dynamic and competitive industry. We understand the unique challenges and opportunities that come with running a restaurant, which is why we ve crafted a state-of-the-art Point-of-Sale (POS) subscription service tailored specifically to your needs.</div>

    <Typography.Title level={3} style={txStyle}>Our Story</Typography.Title>
    <div style={{fontFamily:"flex",fontSize:"20px ",padding:"0px 30px 0px 60px" }}>Posista was born out of a passion for great food and a commitment to helping restaurants urish. Our founders, who have deep roots in the restaurant industry, recognized the creasing demands on restaurant owners and staff. They saw the need for a modern, user-iendly, and comprehensive POS system that could streamline operations, enhance ustomer experiences, and ultimately boost profitability.</div>
    
    <Typography.Title level={3} style={txStyle}>Our Mission</Typography.Title>
    <div style={{fontFamily:"flex",fontSize:"20px ",padding:"0px 30px 0px 60px" }}>Our mission is simple yet powerful: to empower restaurant owners and operators with the tools they need to succeed. We're here to simplify the complexities of running a restaurant, so you can focus on what matters most-creating memorable diningexperiences.</div>
    
    <Typography.Title level={3} style={txStyle}>Why Choose Posista?</Typography.Title>
    <div style={{fontFamily:"flex",fontSize:"20px ",padding:"0px 30px 0px 60px" }}> 
    <ol>
      <li>Tailored for Restaurants: Our POS system is designed exclusively for the restaurant industry. It's not a one-size-fits-all solution; it's your restaurant's secret ingredient for success.</li> 
      <li>User-Friendly: We believe that technology should work for you, not the other way around.Our intuitive interface ensures that you and your staff can master it quickly.</li>
      <li>Robust Features: From order management to inventory control, staff scheduling to customer insights, our comprehensive features help you streamline operations and boost efficiency.</li>
      <li>Exceptional Support: At Posista, you're not just a customer; you're part of our family. Our dedicated support team is here to assist you every step of the way.</li>
      <li>Affordability: We understand the financial challenges of the restaurant industry. Our flexible subscription plans ensure you get the best value for your investment.</li>
    </ol>  
    </div>
    
    <Typography.Title level={3} style={txStyle}>Join the Posista Family Today</Typography.Title>
    <div style={{fontFamily:"flex",fontSize:"20px ",padding:"0px 30px 0px 60px" }}>Whether you're a neighborhood bistro, a bustling café, or a fine dining establishment, Posista Is here to be your trusted partner. We're committed to your success because we believe that when restaurants thrive, communities thrive. <br></br>
Take the first step toward a brighter future for your restaurant - join the Posista family today, and let's create unforgettable dining experiences together!</div>
    
    <PageFooter/>
    </>
  )
}

export default AboutUs