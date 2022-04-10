import React from "react";
import Carousel from 'react-multi-carousel';
import {Col, Row, Space} from "antd";
import 'react-multi-carousel/lib/styles.css';
import CustomCarousel from "./carousel";
import PictureTitle from "./picturetitle";
import PageFrame from "./structure/pageframe";
import PictureTitleAdjusted from "./picturetitleadjusted";
const pstyle = {  fontWeight:600,
        fontSize:15,
        color:"white",
        paddingLeft:80
    }
const margin = 0
export default function TheMint(props) {

return <>
    <Row  >
        <Col xs={0} md={12}>
            <PictureTitleAdjusted
                width ={149}
                height ={67}
                imageURL={"title_texts/the_top.png"} text={"COLLECTION"}
                lineHeight = {"60px"}

            />  

            <p style={{fontWeight:600,fontSize:15,color:"white",paddingTop:130,paddingLeft:80   }}>


                <p style={{margin:margin}} >  There was a time</p>
                <p  style={{margin:margin}}>           When human were prime</p>
                <p style={{margin:margin}} >
                    But that's just a past</p>

                <p  style={{margin:margin}}>        And the world is changing fast</p>


                <p style={{margin:margin}} > Lot of us died</p>
                Some become wild
                Some want to survive
                For new life we strive


                There are no humans
                And we are considered demons
                You need to save us now
                The question left, How?

                The Degenerates is more than a 2D animated collection on the Ethereum block chain. It acts like an access key to "blurred out - metaverse" . Our goal is to create a collection which would disrupt the market and change the view on NFTs as a whole with real life utilities.

                The Discord is closed. If you want to be teleported to the labyrinth be a productive member of our Twitter community.

            </p>
        </Col>

        <Col xs={24} md={0}>
            <PictureTitle
                width ={119}
                height ={67}
                imageURL={"title_texts/the_top.png"} text={"COLLECTION"}


            />
            <p style={{fontWeight:600,fontSize:15,color:"white",paddingRight:20,paddingLeft:20,textAlign:"center",alignContent:"center"   }}>
                The Degenerates is a collection of 10 000 unique mutants consisting of more than 200 unique traits. We emphasize heavily on 1. ART 2. METAVERSE & 3. PASSIVE INCOME. We consider our 10 000 NFT collection, more than just a few pixels on a display, but as a way to connect with the community. With this project we hope you will see the future and potential of NFTs. We will be announcing the mint date and price soon! Follow our social media platforms for more information.
                We also realised our whitepaper. To get an in-depth understanding of our project please, visit -
               <a href={"https://medium.com/@thedegenerates.nft/the-degenerates-the-truly-passive-income-nft-132399fabefe"}> https://medium.com/@thedegenerates.nft/the-degenerates-the-truly-passive-income-nft-132399fabefe</a>
            </p>
        </Col>




        <Col xs={2} md={2} xxl={2}/>
        <Col xs= {0} md={9} xxl={8} >
            <div style ={{paddingTop: 30}}/>

            <CustomCarousel style={{ margin: "auto"}} height={130} width={130}>

            </CustomCarousel>

        </Col>
        <Col xs={20} md={0} xxl={0} >
            <div style ={{paddingTop: 30}}/>

            <CustomCarousel style={{ margin: "auto"}} height={80} width={80}>

            </CustomCarousel>

        </Col>
        <Col xs={2} md={1} xxl={2}/>
    </Row>
    </>
}