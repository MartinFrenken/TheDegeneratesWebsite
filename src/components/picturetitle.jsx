import React from "react";
import {Col, Row} from "antd";
import PictureTitleAdjusted from "./picturetitleadjusted";
import PictureTitlePhone from "./picturetitlephone";

export default function PictureTitle(props) {

    return <div >
        <Row  >

        <Col  xs={0} sm={0} lg={12}>
            <img style={{width:props.width,height:props.height,
                float:"right", left:-10,position:"relative",marginTop:30}} src={props.imageURL} />

        </Col>
        <Col  xs={0}     sm={0} lg={12}>
            <p style={{color:"white",fontSize:60,fontWeight:900,lineHeight:props.lineHeight,marginTop:30}}>{props.text}</p>
        </Col>
        </Row>
        <Row  type="flex" align="center" justify ="center">
            <Col  xs={24}     sm={24} lg={0}>
                <PictureTitlePhone width ={props.width}
                                      height={props.height}
                                      lineHeight={props.lineHeight}
                                      imageURL={props.imageURL}
                                      text={props.text}

                />
            </Col>
        </Row>
        </div>

        }