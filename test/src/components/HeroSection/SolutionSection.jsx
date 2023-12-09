import React from 'react'
import { Link } from "react-router-dom";
import {Row,Col,Button,Card} from 'antd'
import Typography from "antd/es/typography/Typography";
const SolutionSection = () => {
  return (
    <>
    <Row style={{padding:'50px 0px 20px 0px'}}>

    
    <Col Lg={{span:8, order:1}} md={8} sm={12} xs={12} style={{textAlign:"center"}} >
    <Card style={{background:"orange"}}> 
      <Typography.Title level={4}>Marketing</Typography.Title>
      <div> 
        Save customer <br />
        data for targeted <br />
        marketing <br />
        campaigns to <br />
        increase sales.
      </div>

    </Card>

    </Col>

    <Col Lg={{span:8,order :2}} md={8} sm={12} xs={12} style={{textAlign:"center"}} >
    <Card style={{background:"wheat"}}> 
      <Typography.Title level={4}>Customizability</Typography.Title>
      <div> 
        Well curated <br />
        Software which <br />
        can be moulded <br />
        as per your needs. <br />
        
      </div>
    </Card>
    </Col>

    <Col Lg={{span:8,order :3}} md={8}  ></Col>

    




    <Col

          lg={{ span: 10  ,order:4}}
          md={{ span: 10}}
          sm={{ span: 22,offset:2 }}
          xs={{ span: 22,offset:2 }}
          style={{ textAlign: "center", background: "#f1f0f0" }}
        >
          <Typography.Title level={2} style={{ fontFamily: "arial"}}> Free Demo of Posista</Typography.Title>
          <div style={{ fontFamily: "arial", fontSize: "20px" }}>
            Not sure where to start? Get a free 
            demo of out state-of-the-art 
            software that seamlessly manages 
            POS services and make life easy for 
            restaurants. 
          </div><br />
          <Button
            style={{
              background: "orange",
              
              fontFamily: "Arial",
              textAlign: "center",
            }}
            type="primary"
            htmlType="submit"
          >
            <Link to="/login"> Book Demo</Link>
          </Button>

          
        </Col>

        <Col
        lg={{ span: 10,offset:1  }}
        md={{ span: 10,offset:1  }}
        sm={{ span: 22,offset:2 }}
        xs={{ span: 22,offset:2 }}
          style={{ textAlign: "center", background: "#f1f0f0" }}
        >
          <Typography.Title level={2} style={{ fontFamily: "arial"}}> Buy Posista</Typography.Title>

          <div style={{ fontFamily: "arial", fontSize: "20px" }}>
            Want to bring speed and 
            performance to your restaurant
            business? Buy Posista  
            today and unlock features you can only 
            imagine.
          </div><br />
          <Button
            style={{
              background: "orange",

              fontFamily: "Arial",
              textAlign: "center",
            }}
            type="primary"
            htmlType="submit"
          >
            <Link to="/login"> Buy Now</Link>
          </Button>



        </Col>
    </Row>
    
    </>
  )
}

export default SolutionSection