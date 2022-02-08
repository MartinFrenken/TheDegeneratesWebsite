import React from "react";
import {Col, Row} from "antd";

export default function PageFrame(props) {

    return <>
        <Row >
            <Col style={{backgroundColor:"black",overflow:"visible"}} xs={0} sm={2} md={2} lg={3} xl={4} >
                <img style={{width:100,height:props.height,
                    float:"right", left:100,position:"relative", zIndex:1}} src={"fades/fade_right.png"} />
            </Col>
            <Col xs={24} sm={20} md={20} lg={18} xl={16} >
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

            <Col style={{backgroundColor:"black"}}  xs={0} sm={2} md={2} lg={3} xl={4}  >
                <img style={{width:100,height:props.height,
                    float:"left", right:100,position:"relative", zIndex:1}} src={"fades/fade_left.png"} />
            </Col>
        </Row>
    </>
}