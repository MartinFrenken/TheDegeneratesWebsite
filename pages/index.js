import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Col, Row} from "antd";

export default function Home() {
  return (
<div>

      <div
          style={{
            backgroundImage: "url('/Naamloos.png')",
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width:100,
              height:1900,




          }}
      >



      </div>



      </div>

  )
}
// <Row justify >
//     <Col span={8}>col-8</Col>
//     <Col span={8} style={{top:400}}>
//         col-8
//         <img src="/Logo.png"/>
//     </Col>
//     <Col span={8}>col-8</Col>
// </Row>