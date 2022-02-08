import React from "react";
import Carousel from 'react-multi-carousel';
import {Col, Row} from "antd";
import 'react-multi-carousel/lib/styles.css';
import CustomCarousel from "./carousel";
import PictureTitle from "./picturetitle";
import PageFrame from "./structure/pageframe";
import PictureTitleAdjusted from "./picturetitleadjusted";

export default function TheMint(props) {

return <>
    <Row>
        <Col xs={24} md={12}>
            <PictureTitleAdjusted
                width ={129}
                height ={67}
                imageURL={"title_texts/the_top.png"} text={"MINT"}
                lineHeight = {"60px"}

            />  
            <p style={{fontWeight:600,fontSize:15,color:"white",paddingLeft:40,paddingTop:100   }}>
                The Degenerates is a collection of 10 000 unique mutants consisting of more than 200 unique traits. We emphasize heavily on 1. ART 2. METAVERSE 3. PASSIVE INCOME. We consider our 10 000 NFT collection, as more than just few pixels on a display, but as a way to connect with each other. With this project we hope that you will see the future and potential of NFTs. We will announce the mint date and price soon! Follow our social media for more information.
            </p>
        </Col>

        <Col xs={24} md={12}>

            <CustomCarousel>

            </CustomCarousel>
        </Col>
    </Row>
    </>
}