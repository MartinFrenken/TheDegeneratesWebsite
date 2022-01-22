import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Col, Row} from "antd";

export default function Home() {
  return (
<div>

      <div>
      <img src="/Naamloos.png" alt="BigCo Inc. logo" style={{
        height:"auto",
        width:"100%",
        maxWidth:"100%"

      }}/>
      
      
      </div>
      <Row justify >
        <Col span={8}>col-8</Col>
        <Col span={8} style={{top:400}}>
            col-8
            <img src="/logo.png"/>
        </Col>
        <Col span={8}>col-8</Col>
      </Row>



</div>


  );

}
      