import React from "react";
import {Col, Row} from "antd";

export default function PictureTitlePhoneInverted(props) {

    return <div style={{paddingTop:30}} >

            <p style={{ alignContent:"center",textAlign:"center",color:"white",fontSize:60,fontWeight:900,lineHeight:props.lineHeight,marginBottom:15,marginTop:10}}>{props.text}</p>
        <img style={{width:props.width,height:props.height,
            display:"block",    marginLeft:"auto",marginRight:"auto"}} src={props.imageURL} />

        </div>

        }