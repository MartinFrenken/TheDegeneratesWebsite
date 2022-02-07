import React from "react";
import {Col, Row} from "antd";

export default function PictureTitle(props) {

    return <div >
        <Row >
        <Col  span={2}>
        </Col>
        <Col  span={10}>
            <img style={{width:props.width,height:props.height,
                float:"right", left:-10,position:"relative",marginTop:30}} src={props.imageURL} />

        </Col>
        <Col  span={10}>
            <p style={{color:"white",fontSize:60,fontWeight:600,lineHeight:props.lineHeight,marginTop:30}}>{props.text}</p>
        </Col>


        <Col  span={2}>
        </Col>
        </Row>
        </div>

        }