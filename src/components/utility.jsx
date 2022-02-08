import React from "react";
import {Space} from "antd";
import {Col, Row} from "antd";
export default function Utility(props) {
    
return <>
    <Row>
        <Col  span={2}>
        </Col>
        <Col  span={20}>
            <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                <img src ={props.imageIcon} style={{width:71,height:71,alignSelf: 'center' }}/>
            </Space >


            <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                <p style={{fontWeight:800,fontSize:30,alignContent:"center",color:"white",textAlign:"center"}}>{props.title}</p>
            </Space >


            <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                <p style={{fontWeight:400,fontSize:15,alignContent:"center",color:"white",textAlign:"center"}}>{props.text}</p>
            </Space >
        </Col>
    <Col  span={2} >
    </Col>
    </Row>
</>
}