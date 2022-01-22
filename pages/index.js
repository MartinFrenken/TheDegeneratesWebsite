import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Col, Row} from "antd";
import Landing from "../src/components/landing";

export default function Home() {
  return (
<div>

    <Row  >
        <Col style={{backgroundColor:"#002d2d"}} xs={0} sm={2} md={2} lg={4} xl={6} >col-8</Col>
        <Col xs={24} sm={20} md={20} lg={16} xl={12} >
            <div
                style={{
                    backgroundImage: "url('/Naamloos.png')",
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width:"100%",
                    height:1000,




                }}
            >


            <Landing></Landing>

            </div>

        </Col>
        <Col style={{backgroundColor:"#002d2d"}}  xs={0} sm={2} md={2} lg={4} xl={6}  >col-8</Col>
    </Row>


    <style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Poppins;
  }

  * {
    box-sizing: border-box;
  }
`}</style>



</div>

  )
}

