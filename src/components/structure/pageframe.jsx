import React from "react";
import {Col, Row} from "antd";

export default function PageFrame(props) {

    return <>
        <Row >
            <Col style={{backgroundColor:"#002d2d"}} xs={0} sm={2} md={2} lg={4} xl={6} >col-8</Col>
            <Col xs={24} sm={20} md={20} lg={16} xl={12} >
                <div
                    style={{
                        backgroundImage: "url(\'" + props.backgroundImage +  " \')",
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width:"100%",
                        height:props.height,




                    }}
                >

                    {props.children}

                </div>

            </Col>
            <Col style={{backgroundColor:"#002d2d"}}  xs={0} sm={2} md={2} lg={4} xl={6}  >col-8</Col>
        </Row>
    </>
}