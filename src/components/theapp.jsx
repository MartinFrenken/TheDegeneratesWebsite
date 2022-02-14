import React from "react";
import {Col, Row} from "antd";

export default function TheApp() {
    return <Row style={{paddingTop:72,paddingRight:40,paddingLeft:40}} type="flex" align="center" justify ="center">
        <Col xs={0} md={0} lg={9}>
            <img style={{width:777,height:788,position:"relative"}} src={"phone.png"} />
        </Col>
        <Col xs={24} md={24} lg={15}>
        <p style={{color:"white", fontSize:"40px", fontFamily:"Poppins", fontWeight:"900", marginBottom:"0px", textAlign:"center"}}>DEGENERATES APP</p>

        <p style={{color:"white",fontSize:15,fontWeight:600,marginTop:30,alignContent:"center",textAlign:"center"}}>The degenerate app is for the community and for you to have a closer interaction with us and the NFT itself. We will be giving you weekly updates about our progress, our crypto newsletter and NFTs to watch, which hopefully will be helpful to you. Aside from the work we will do for you, you will be able to claim your monthly passive income, stake your NFT and buy items in the shop part using our $DEGN coins.

            You will be able to stake your NFTs and gain rewards in form of coins.
            Staking will be available for 10 days(1000 $DEGN), 30 Days(3300 $DEGN),
            50 Days(6000 $DEGN), 100D(15000 $DEGN), 180 days (30 000 $DEGN).

            Various event items will be available, but mainly there will be mint passes for the next generations of our NFTs, with which we want to go on another level. For 150 000 $DEGN coins you will be getting a free NFT, which will make you free passive income, for 90 000 $DEGN coin you will be getting 50% of the mint price, for 25 000 $DEGN coins you will be getting a discount of 25 % and 10 000 $DEGN coins will get you a mint pass, guaranteeing you a spot in the next generation of our NFTS.
        </p>
        </Col>

        <Col xs={24} md={24} lg={0}>
        <img style={{width:400,height:400}} src={"phone.png"} />
        </Col>
      </Row>
}