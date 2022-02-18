import ClickLogo from "./clicklogo";
import {Col, Row} from "antd";
export default function MediaLogos(props) {
    const center ={
        margin: "auto",

    }
return <>
    <Row  type="flex"style={{paddingTop:72 }} >
        <Col xs={1} md={0} lg={1}/>
        <div>        
            <p style={{color:"rgba(255,255,255,.5)", fontSize:"15px"}}>MEDIA</p>
            <h5 style={{color:"white", fontWeight:"700", fontSize:"20px"}}>As Seen On:</h5>
            <hr style={{border:"3px solid white"}}/>
        </div>
        
    </Row>
    <Row  type="flex" align="center" justify ="center" style={{paddingBottom:"72px"}} >

    <ClickLogo image={"logos/nft_calendar.png"}
    link={" https://nftcalendar.io/event/the-degenerates/"}
    detail="NFTCalendar.io">

    </ClickLogo>
    <ClickLogo image={"logos/non_fun.png"}
    link={" https://nftcalendar.io/event/the-degenerates/"}
    detail="Non-Fungible.com">

    </ClickLogo>
    <ClickLogo image={"logos/nft_schedule.jpeg"}
    link={" https://nftcalendar.io/event/the-degenerates/"}
    detail="NFTSchedule.co">

    </ClickLogo>
    </Row>

</>

}