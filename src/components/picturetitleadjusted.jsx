import React from "react";
import {Col, Row} from "antd";

export default function PictureTitleAdjusted(props) {

    return <div style={{paddingLeft:40}} >

            <img style={{width:props.width,height:props.height,
                float:"left", left:-10,position:"relative",marginTop:30}} src={props.imageURL} />


            <p style={{ float:"left",color:"white",fontSize:60,fontWeight:600,lineHeight:props.lineHeight,marginTop:30}}>{props.text}</p>

        </div>

        }