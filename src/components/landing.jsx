import React from "react";
import {Col, Row} from "antd";
import { IdResponsiveRenderOnlyIn, Responsive } from "responsive-react";
import Buttons from "./buttons";
import PageFrame from "./structure/pageframe";
export default function Landing()
{
    return <>
        <div >


                    <Responsive displayIn={[IdResponsiveRenderOnlyIn.Mobile, IdResponsiveRenderOnlyIn.Tablet]}>
                        <img style={{display:"block",marginLeft:"auto",marginRight:"auto",paddingTop:260}} src="/logo_small.png"/>
                    </Responsive>

                    <Responsive displayIn={[ IdResponsiveRenderOnlyIn.Laptop]}>
                        <img style={{display:"block",marginLeft:"auto",marginRight:"auto",paddingTop:260}} src="/logo.png"/>
                    </Responsive>
            <Responsive displayIn={[ IdResponsiveRenderOnlyIn.Laptop]}>
            <p style={{fontSize:"22px", fontWeight:"900",color:"white", wordWrap:"break-word", inlineSize:"600px", marginRight:"auto",marginLeft:"auto", textAlign:"center"}}> Enter the metaverse future and truly earn passive income with us! We are one of the only NFT projects where you get more than you paid for!</p>
            </Responsive>
            <Responsive displayIn={[IdResponsiveRenderOnlyIn.Mobile, IdResponsiveRenderOnlyIn.Tablet]}>
                <p style={{fontSize:"18px", fontWeight:"800",color:"white", wordWrap:"break-word", inlineSize:"250px", marginRight:"auto",marginLeft:"auto", textAlign:"center"}}> Enter the metaverse future and truly earn passive income with us! We are one of the only NFT projects where you get more than you paid for!</p>
            </Responsive>
                  <Buttons style={{display:"block",position:"relative",top:712}}/>

        </div>
    </>



}