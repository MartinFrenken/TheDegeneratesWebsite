import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Col, Row} from "antd";
import dynamic from "next/dist/next-server/lib/dynamic";
import Utility from "../src/components/utility";
import Utilities from "../src/components/utilities";
import PageFrame from "../src/components/structure/pageframe";


const LandingPage = dynamic(
    () => import("../src/components/landing.jsx"),
    { ssr: false })

export default function Home() {
  return (
<div>

    <PageFrame backgroundImage={"Naamloos.png"} height={1000}>
        <LandingPage>

        </LandingPage>
    </PageFrame>

   <Utilities></Utilities>
    <></>

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

