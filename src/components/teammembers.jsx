import Team from "./team";
import {Col, Row} from "antd";
import { AiOutlineTwitter } from "react-icons/ai";
import React from "react";
import Buttons from "./buttons";
export default function TeamMembers(props) {
    const center ={
        margin: "auto",

    }
    return<>
        <Row  type="flex" align="center" justify ="center" >

        <Team 
            teamname="Project Manager"
            image={"team/projectmanager.png"}
            icon={<AiOutlineTwitter style={{fontSize: "39px", color: "white"}}/>}
            link={"https://twitter.com/samuel_sopuch"}
            intro={<>Hi, I'm Samuel. I'm responsible for all the business ideas and your passive income. My background is in E-commerce, where I worked in the sales department, sales department in a small ice-making factory and I also had an internship as a financial agent.
                If you have any questions for me, contact me at <a target={"_blank"} href={"mailto:sopuch.thedegeneratesnft@gmail.com"}>sopuch.thedegeneratesnft@gmail.com
            </a></>}>

        </Team>
        <Team 
            teamname="Artist"
            image={"team/artist.png"}
            icon={<AiOutlineTwitter style={{fontSize: "39px", color: "white"}}/>}
            link={"https://twitter.com/Thewaterstone2"}
            intro={<>Hi, I'm Milan and I'm the head of the art part of our project. I'm personally responsible for all the tribes of the DEGENERATES.
            My background is mainly in photoshop and illustrator, which I did in school. I hope you like the art. My main goal was to stand out from the rest of the competition. If you have any questions for me, contact me at <a target={"_blank"} href={"mailto:mino.krajniak@gmail.com"}>mino.krajniak@gmail.com</a></>}>

        </Team>
        <Team 
            teamname="Social Manager"
            image={"team/socialmanager.png"}
            icon={<AiOutlineTwitter style={{fontSize: "39px", color: "white"}}/>}
            link={"https://twitter.com/The_DegensNFT"}
            intro={<>Hi, I'm Nina. I'm responsible for your personal well-being on all our platforms. I also help with all sorts of marketing ideas and their transformation into reality. If you need a fast answer to any question, feel free to contact me on Discord where I’m going under the alias TOKI, I will reply to you shortly. You can also write me an email on <a target={"_blank"} href={"mailto:nina.thedegeneratesnft@gmail.com"}>nina.thedegeneratesnft@gmail.com
            </a></>}>

        </Team>
        <Team 
            teamname="Designer"
            image={"team/designer.png"}
            icon={<AiOutlineTwitter style={{fontSize: "39px", color: "white"}}/>}
            link={"https://mobile.twitter.com/ifruit007"}
            intro={<>Hi, I'm Peter. I'm also responsible for the art, special skins and everything around, but mainly for our social media designs. I'm also really active in the community, so if you need a quick answer just text me on Discord. My alias is IFRUIT. My background is in all kinds of art sorts, My coworkers know me most for my hand sketching and app designing. You can also write me an email on <a target={"_blank"} href={"mailto:krajniak.thedegeneratesnft@gmail.com"}>krajniak.thedegeneratesnft@gmail.com

            </a></>}>
        </Team>
        </Row>
            <Row  type="flex" align="center" justify ="center" >
        <p style={{paddingTop:"73px",paddingBottom:"73px",fontSize:"20px", fontWeight:"600",color:"white", wordWrap:"break-word", inlineSize:"1000px", marginRight:"auto",marginLeft:"auto", textAlign:"center"}}>We are a group of crypto and NFT technology enthusiasts, who decided to do one of a kind NFT project together. If you would like to know us more, feel free to join one of our weekly AMA sessions and ask some questions!</p>
                </Row>
        <Row  type="flex" align="center" justify ="center" >
            <p style={{paddingTop:"73px",paddingBottom:"20px",fontSize:"15px", fontWeight:"600",color:"white", wordWrap:"break-word", inlineSize:"1000px", marginRight:"auto",marginLeft:"auto", textAlign:"center"}}>This website is still under development. Nft roadmap and developer roadmap coming soon.</p>
        </Row>

        <Buttons style={{display:"block",position:"relative"}}/>

        <Row  type="flex" align="center" justify ="center"  style={{paddingBottom:73}}>

        </Row>


    </>
    }