import {Col, Row} from "antd";
import PictureTitleAdjusted from "./picturetitleadjusted";
import PictureTitle from "./picturetitle";
import CustomCarousel from "./carousel";
import React from "react";
import PictureTitlePhone from "./picturetitlephone";
import PictureTitlePhoneInverted from "./picturetitlephoneinverted";

export default function SpecialSkins() {
    return <>
        <Row  >
            <Col xs={0} md={12}>
                <PictureTitlePhoneInverted
                    width ={315}
                    height ={62}
                    imageURL={"title_texts/rewards.png"} text={"Special Skin"}
                    lineHeight = {"60px"}

                />
                <div style={{fontWeight:600,fontSize:15,color:"white",paddingTop:20,paddingLeft:80   }}>
                    <p>
                    When we started our project, we really wanted to emphasize the different rarities of our Degenerates. Therefore, we have created 3 types of tribes. The Cheleops have a population of 5000, the Tuaange have a population of 3500 and Genzos are the rarest and have a population of 1500. We gave great details to our special skins, as we wanted them to really stand out. Here are the additional rewards for holding a special skin.
                    </p>
                <p>1. Free merch and a painting, this is a one-time reward and not renewable.</p>
                <p>2. Exclusive board meetings with the owners every 2 weeks. </p>
                <p>3. 5% of royalties will be divided between the special skins.</p>
                <p>4. Paid hotel for our Degenerate Events. </p>
                <p>5.  2x Miner income</p>
                    </div>
            </Col>

            <Col xs={24} md={0}>
                <PictureTitlePhoneInverted
                    width ={315}
                    height ={62}
                    imageURL={"title_texts/rewards.png"} text={"Special Skin"}
                    lineHeight = {"60px"}

                />

                <div style={{fontWeight:600,fontSize:15,color:"white",paddingTop:20,paddingLeft:30,paddingRight:30,textAlign:"center"   }}>
                    <p>
                        When we started our project, we really wanted to emphasize the different rarities of our Degenerates. Therefore, we have created 3 types of tribes. The Cheleops have a population of 5000, the Tuaange have a population of 3500 and Genzos are the rarest and have a population of 1500. We gave great details to our special skins, as we wanted them to really stand out. Here are the additional rewards for holding a special skin.
                    </p>
                    <p>1. Free merch and a painting, this is a one-time reward and not renewable.</p>
                    <p>2. Exclusive board meetings with the owners every 2 weeks. </p>
                    <p>3. 5% of royalties will be divided between the special skins.</p>
                    <p>4. Paid hotel for our Degenerate Events. </p>
                    <p>5.  2x Miner income</p>
                </div>
            </Col>




            <Col xs={2} md={2} xxl={2}/>
            <Col xs= {0} md={9} xxl={8} >
                <div style ={{paddingTop: 130}}/>
                <img src={"special_skins_picture.png"} style={{width:550,height: 340}}/>

            </Col>
            <Col xs={20} md={0} xxl={0} >
                <div style ={{paddingTop: 20}}/>
                <img src={"special_skins_picture.png"} style={{width:450,height: 275,marginLeft:"auto",marginRight:"auto",display:"block"}}/>

            </Col>
            <Col xs={2} md={1} xxl={2}/>
        </Row>
    </>

}