import React from "react";
import {Col, Row} from "antd";

export default function PageFrame(props) {
    const image_width = props.width ? props.width : "100%"
    return <>
        <Row >
            <Col style={{backgroundColor:"black",overflow:"visible"}} xs={0} sm={0} md={0} lg={0}  >
                <img style={{width:100,height:props.height,
                    float:"right", left:100,position:"relative", zIndex:1}} src={"fades/fade_right.png"} />
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} >
                <div
                    style={{
                        backgroundImage: "url(\'" + props.backgroundImage +  " \')",
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: {image_width},
                        height:props.height,




                    }}
                >

                    {props.children}

                </div>

            </Col>

            <Col style={{backgroundColor:"black"}}  xs={0} sm={0} md={0} lg={0}i  >
                <img style={{width:100,height:props.height,
                    float:"left", right:100,position:"relative", zIndex:1}} src={"fades/fade_left.png"} />
            </Col>
        </Row>
    </>
}