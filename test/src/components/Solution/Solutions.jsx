import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../PageHeader/PageHeader";
import PageFooter from "../Footer/Footer";
import Typography from "antd/es/typography/Typography";
import { Row, Col, Button, Card } from "antd";
import SolutionSection from "../HeroSection/SolutionSection";

const Solutions = () => {
  return (
    <>
      <PageHeader />

      <Typography.Title
        level={3}
        style={{ textAlign: "center", fontfamily: "arial" , padding:"10px 0px 10px 0px" }}
      >
        Choose us today for sigh-of-relief in times to come!
      </Typography.Title>


      <Row  style={{display:"flex",justifyContent:"center"}}>

      <Col  md={8} sm={12} xs={12} >
        <Card style={{background:"orange"}}> 
        <Typography.Title level={4} >POS Viewpoint</Typography.Title>
        <div>Manage all kinds <br /> of oder in one <br /> system.</div>
        
        </Card>
      </Col>


      <Col Lg={{span:8  , order:2}} md={8} sm={12} xs={12} style={{textAlign:"center" ,background:"orange"}} >
      <Card style={{background:"wheat"}}> 
      <Typography.Title level={4} >Performance</Typography.Title>
      <div>Hardware which has <br /> performance far superior <br /> than competitors.</div>
      </Card>
      </Col>

     <Col Lg={{span:8 ,order:3}} md={8} sm={24} xs={24}>  </Col>

     <Col Lg={{span:8  , order:2}} md={8} sm={12} xs={12} style={{textAlign:"center" ,background:"orange"}} >
      
     <Card style={{background:"wheat"}}> 
      <Typography.Title level={4} >Performance</Typography.Title>
      <div>Hardware which has <br /> performance far superior <br /> than competitors.</div>
      </Card>
      </Col>

      <Col Lg={{span:8  , order:2}} md={8} sm={12} xs={12} style={{textAlign:"center" ,background:"orange"}} >
      
      <Card style={{background:"orange"}}> 
      <Typography.Title level={4} >Performance</Typography.Title>
      <div>Hardware which has <br /> performance far superior <br /> than competitors.</div>
      </Card>
      </Col>


      <Col Lg={{span:8 ,order:3}} md={8} sm={24} xs={24}>  </Col>
      














        
      </Row>
      <SolutionSection/>
      <PageFooter />
    </>
  );
};

export default Solutions;
