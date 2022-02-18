import React from "react";
import {Col, Row} from "antd";

export default function PictureTitlePhone(props) {

    return <div style={{marginTop:30}} >

            <img style={{width:props.width,height:props.height,
                display:"block",    marginLeft:"auto",marginRight:"auto"}} src={props.imageURL} />


            <p style={{ alignContent:"center",textAlign:"center",color:"white",fontSize:60,fontWeight:700,lineHeight:props.lineHeight,marginBottom:15,marginTop:10}}>{props.text}</p>

        </div>

        }