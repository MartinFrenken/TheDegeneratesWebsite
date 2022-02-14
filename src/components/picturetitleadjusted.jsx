import React from "react";
import {Col, Row} from "antd";

export default function PictureTitleAdjusted(props) {

    return <div style={props.styling} >

            <img style={{width:props.width,height:props.height,
                float:"left", left:-10,position:"relative",marginTop:30,paddingLeft:40 }} src={props.imageURL} />


            <p style={{ alignContent:"center",textAlign:"center",float:"left",color:"white",fontSize:60,fontWeight:700,lineHeight:props.lineHeight,marginTop:30,marginBottom:0}}>{props.text}</p>

        </div>

        }