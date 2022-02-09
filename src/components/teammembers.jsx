import Team from "./team";
import {Col, Row} from "antd";
import { AiOutlineTwitter } from "react-icons/ai";
export default function TeamMembers(props) {
    const center ={
        margin: "auto",

    }
    return<>
        <Row  type="flex" align="center" justify ="center" >
    
        <Team 
            teamname="Project Manager"
            image={"team/projectmanager.png"}
            icon={<AiOutlineTwitter style={{fontSize:"20px"}}></AiOutlineTwitter>}
            link={"https://twitter.com/The_DegensNFT"}
            intro="Hi, I'm Samuel. I'm responsible for all the business ideas and your passive income. My background is in E-commerce, where I worked in the sales department, sales department in a small ice-making factory and I also had an internship as a financial agent. 
            If you have any questions for me, contact me at sa.sopuch@gmail.com. I will try to reply ASAP">

        </Team>
        <Team 
            teamname="Artist"
            image={"team/artist.png"}
            icon={<AiOutlineTwitter style={{fontSize:"20px"}}></AiOutlineTwitter>}
            link={"https://twitter.com/The_DegensNFT"}
            intro="Hi, I'm Milan and I'm the head of the art part of our project. I'm personally responsible for all the tribes of the DEGENERATES. My background is mainly in photoshop and illustrator, which I did in school. I hope you like the art. My main goal was to stand out from the rest of the competition. 
            If you have any questions for me, contact me at mino.krajniak@gmail.com.
             I will try to reply ASAP">

        </Team>
        <Team 
            teamname="Social Manager"
            image={"team/socialmanager.png"}
            icon={<AiOutlineTwitter style={{fontSize:"20px"}}></AiOutlineTwitter>}
            link={"https://twitter.com/The_DegensNFT"}
            intro="Hi, I'm Nina. I'm responsible for your personal well-being on all our platforms. I also help with all sorts of marketing ideas and their transformation into reality. If you need a fast answer to any question, feel free to contact me on Discord where I’m going under the alias TOKI, I will reply to you shortly. You can also write me an email on ninka.dudakova@gmail.com.">

        </Team>
        <Team 
            teamname="Designer"
            image={"team/designer.png"}
            icon={<AiOutlineTwitter style={{fontSize:"20px"}}></AiOutlineTwitter>}
            link={"https://twitter.com/The_DegensNFT"}
            intro="Hi, I'm Peter. I'm also responsible for the art, special skins and everything around, but mainly for our social media designs. I'm also really active in the community, so if you need a quick answer just text me on Discord. My alias is IFRUIT. My background is in all kinds of art sorts, My coworkers know me most for my hand sketching and app designing.">

        </Team>
    
        </Row>
    </>
    }