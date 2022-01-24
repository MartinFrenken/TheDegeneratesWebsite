import React from "react";
import {Col, Row} from "antd";
import { IdResponsiveRenderOnlyIn, Responsive } from "responsive-react";
export default function Landing()
{
    return <>
        <div >
            <Row justify="center"  >
                <Col span={2}/>
                <Col span={20}>
                    <Responsive displayIn={[IdResponsiveRenderOnlyIn.Mobile, IdResponsiveRenderOnlyIn.Tablet]}>
                        <img style={{marginTop:410}} src="/logo_small.png"/>
                    </Responsive>

                    <Responsive displayIn={[ IdResponsiveRenderOnlyIn.Laptop]}>
                        <img style={{marginTop:410}} src="/logo.png"/>
                    </Responsive>
                </Col>
                <Col span={2}/>
                </Row  >
        </div>
    </>



}