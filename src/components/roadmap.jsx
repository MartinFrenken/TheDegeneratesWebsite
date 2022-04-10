import PictureTitlePhoneInverted from "./picturetitlephoneinverted";
import React from "react";
import PageFrame from "./structure/pageframe";
import {Col, Row} from "antd";
import PercentageText from "./percentageText";
import RoadMapText from "./roadmapText";
import BlurryText from "./structure/blurrytext";

export default function RoadMap() {
    return <>
        <Row  >
            <Col xs={0} md={24}>
            <PictureTitlePhoneInverted
                width ={733}
                height ={138}
                imageURL={"title_texts/roadmap.png"} text={"Community"}
                lineHeight = {"60px"}

            >

            </PictureTitlePhoneInverted>
            <p style ={{
                position:'relative',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 900,
                fontSize: 20,
                height:60,
                maxWidth:500,
                marginLeft:"auto",
                marginRight:"auto",
                display:"block",
                minWidth:550,
                align:"center",
                color: "white",
                textAlign: 'center',}}>
                We have complete trust in this project and so we wanted to repay the community a bit. These are not the only rewards of course. There will be monthly lotteries and giveaways for 1% of the <BlurryText> mdemi csfs</BlurryText>, so you will have an even greater chance to win even more.
            </p>
            <div
                style={{
                    backgroundImage: "url(\'" + "roadmap/roadmap_main.png" +  " \')",
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width:321,height:1403,marginLeft:"auto",marginRight:"auto",display:"block",
                    marginTop:150


                }}
            >
                <PercentageText text ={"25%"} top={-380} left={-60}/>

                <RoadMapText top={0} left={220} titleText={"2500 SOLD!"} subText = {"After  selling out 2500 Degenerates we will gift and airdrop the community 15 NFT plus 1 limited NFT, which has a special rewards system."} />
                <PercentageText text ={"50%"} top={-350} left={30}/>
                <RoadMapText top={20} left={-480} titleText={"5000 SOLD!"} subText = {"After selling out 5000 NFTs we will donate 1 special skin to one of you guys and also airdrop 2 Decentaland lots into your metamask wallets!"} />

                <PercentageText text ={"69%"} top={-350} left={-60}/>
                <RoadMapText top={-15} left={220} titleText={"6900 SOLD !"} subText = {<p>
                    When the magic mark of 6900 NFTs sells out, we will choose 2 wallets that get
                    <BlurryText> pagrsibe fe2wew</BlurryText>
                    on a different level. We are giving away
                    <BlurryText> ialsr f.Tefffoh2letH cgf9 rl4u, rbwfh e  ii l1,0ntea d ewb re toi Xw wgmtiwl i fuPnyt1ecsthle n b  </BlurryText>
                    We expect you to make around 700$ every month."</p> }/>

                <PercentageText text ={"75%"} top={-330} left={30}/>
                <RoadMapText top={25} left={-450} titleText={"7500 SOLD!"} subText = {<p>Closely after 69 there is 75 and when we sell out 7500 nfts, one of you lucky ones will be benefiting from <BlurryText> Gegjee FF3 </BlurryText>  from which you can expect a monthly income of around 3 000 $."</p>} />

                <PercentageText text ={"100%"} top={400} left={0}/>
                <RoadMapText top={-115} left={260} titleText={"SOLD OUT"} subText = {"After the completion of the main mint and the reveal, we will spend \n" +
                "100 000 dollars on the floor stabilization. This will result in a even higher floor evaluation of your NFTs. We will also pay out all of the winners of our big giveaways and not only that, but we will also be giving away the last remaining special NFT with all its benefits!\n"} />

                {/*This is going to be interesting...*/}
                </div>


            </Col>
            <Col xs={24} md={0}>

                <PictureTitlePhoneInverted
                    width ={212}
                    height ={36}
                    imageURL={"title_texts/roadmap_mobile.png"} text={"Community"}
                    lineHeight = {"60px"}/>
                <div
                    style={{
                        backgroundImage: "url(\'" + "roadmap/roadmap_mobile.png" +  " \')",
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width:90,height:1403,marginLeft:20,display:"block",
                        marginTop:10,
                        float:"left"

                    }}
                >
                    <PercentageText mobile = {true } text ={"25%"} top={-200} left={0}/>

                    <PercentageText  mobile = {true } text ={"50%"} top={40} left={0}/>

                    <PercentageText  mobile = {true } text ={"69%"} top={260} left={0}/>

                    <PercentageText mobile = {true } text ={"75%"} top={500} left={0}/>

                    <PercentageText  mobile = {true } text ={"100%"} top={550} left={120}/>

                </div>
                <div >
                    <RoadMapText marginBot= {250} marginTop={150} mobile = {true } titleText={"2500 SOLD!"} subText = {"After selling out 2500 Degenerates we will gift and airdrop the community 15 NFT plus 1 limited NFT, which has a special rewards system."} />
                    <RoadMapText marginBot= {200}  mobile = {true }  titleText={"5000 SOLD!"} subText = {"After selling out 5000 NFTs we will donate 1 special skin to one of you guys and also airdrop 2 Decentaland lots into your metamask wallets!"} />
                    <RoadMapText marginBot= {330} mobile = {true }  titleText={"6900 SOLD !"} subText = {<p>
                        When the magic mark of 6900 NFTs sells out, we will choose 2 wallets that get
                        <BlurryText> pagrsibe fe2wew</BlurryText>
                        on a different level. We are giving away
                        <BlurryText> ialsr f.Tefffoh2letH cgf9 rl4u, rbwfh e  ii l1,0ntea d ewb re toi Xw wgmtiwl i fuPnyt1ecsthle n b  </BlurryText>
                        We expect you to make around 700$ every month."</p> } />
                    <RoadMapText marginBot= {270}   mobile = {true } titleText={"7500 SOLD!"} subText = {<p>Closely after 69 there is 75 and when we sell out 7500 nfts, one of you lucky ones will be benefiting from <BlurryText> Gegjee FF3 </BlurryText>  from which you can expect a monthly income of around 3 000 $."</p>} />
                    <RoadMapText marginBot= {200}   mobile = {true }  titleText={"SOLD OUT"} subText = {"After the completion of the main mint and the reveal, we will spend \n" +
                        "100 000 dollars on the floor stabilization. This will result in a even higher floor evaluation of your NFTs. We will also pay out all of the winners of our big giveaways and not only that, but we will also be giving away the last remaining special NFT with all its benefits!\n"} />

                </div>
                </Col>

    </Row>
        </>

}