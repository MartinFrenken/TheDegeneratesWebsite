import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '@brainhubeu/react-carousel/lib/style.css';
import {Col, Row} from "antd";
import dynamic from "next/dist/next-server/lib/dynamic";
import Utility from "../src/components/utility";
import Utilities from "../src/components/utilities";
import Button from "../src/components/button";
import PageFrame from "../src/components/structure/pageframe";
import { FaDiscord ,FaTwitter} from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import 'react-multi-carousel/lib/styles.css';
import PictureTitle from "../src/components/picturetitle";
import Buttons from "../src/components/buttons";
import TheMint from "../src/components/themint";

import TeamMember from "../src/components/teammembers";
import Minning from "../src/components/minning";
import MediaLogos from "../src/components/medialogos";

import  { useState, useEffect } from "react"
import TeamMembers from "../src/components/teammembers";
import TheApp from "../src/components/theapp";
import Toolbar from "../src/components/toolbar";
import SpecialSkins from "../src/components/specialskins";
import RoadMap from "../src/components/roadmap";
import FAQS from "../src/components/FAQs";
const LandingPage = dynamic(
    () => import("../src/components/landing.jsx"),
    { ssr: false })

const Mint = dynamic(
    () => import("../src/components/themint.jsx"),
    { ssr: false })

export default function Home() {
    const size = useWindowSize();

  return (



<div >

   <Toolbar buttonSize = {size.toolbar_tool_size} marginButtons = {size.margin_buttons}/>

    <div style={{overflowX:"hidden"}}>
    <PageFrame backgroundImage={"wallpaper/11.jpg"} height={780}>
        <LandingPage >
 
        </LandingPage>


    </PageFrame>
    <PageFrame backgroundImage={"wallpaper/22.jpg"} height={size.height_the_mint} >
        <div id={"the_mint"}>
        <Mint/>
        </div>

    </PageFrame>
    
    <PageFrame backgroundImage={"wallpaper/benefits_utilities_1920x3750.jpg"} height={size.height_benefits}>
        <div id={"benefits_and_utilities"}>
        <PictureTitle
            width ={318}
            height ={60}
            lineHeight={"52px"}
            imageURL={"title_texts/title_benefits.png"} text={"AND UTILITIES"} />

        <Utilities />
        </div>

        <div id={"the_app"}>
        <TheApp></TheApp>
        </div>
    </PageFrame>
    <PageFrame backgroundImage={"wallpaper/cryptominning.png"} height={size.height_crypto_mining}>
        <div id={"mining"}>
     <Minning>

     </Minning>
        </div>
    </PageFrame>
        <PageFrame backgroundImage={"wallpaper/benefits_utilities_1920x3750.jpg"} height={size.height_benefits}>
               <div id={"roadmap"}>
            <RoadMap></RoadMap>
            </div>
        </PageFrame>
        <PageFrame backgroundImage={"wallpaper/22.jpg"} height={size.height_special_skins}>
            <div id={"special_skins"}>
            <SpecialSkins/>
        </div>
        </PageFrame>
    <PageFrame backgroundImage={"wallpaper/the_team_1920x3000.jpg"} height={size.height_the_team}>
        <PictureTitle
            width ={129}
            height ={52}
            lineHeight={"44px"}
            imageURL={"title_texts/the_bottom.png"} text={"TEAM"} />
        <div id={"team_members"}>
        <TeamMembers/>
        </div>
    </PageFrame>
    <PageFrame backgroundImage={"wallpaper/the_last_image_1920x750.jpg"} height={size.height_the_team}>

        <MediaLogos/>
    </PageFrame>
    <PageFrame backgroundImage={"wallpaper/the_last_image_1920x750.jpg"} height={size.height_the_team}>
 
    <FAQS></FAQS> 
       </PageFrame>
  


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
</div>
  )
}

function useWindowSize() {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
        toolbar_tool_size:undefined,
        height_the_mint: undefined,
        height_benefits: undefined,
        height_the_team: undefined,
        height_crypto_mining:undefined,
        margin_buttons:undefined,
        height_special_skins:undefined,
    });

    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
            let set_height_the_mint = 500
            let set_height_benefits = 500
            let set_height_the_team = 500
            let set_height_crypto_mining = 500
            let set_toolbar_tool_size = 40
            let set_margin_buttons = 30
            let set_height_special_skins = 500
            function handleResize() {
                // Set window width/height to state

                if(window.innerWidth<770){
                    set_height_the_mint = 850
                    set_height_benefits = 2500
                    set_height_the_team = 2000
                    set_toolbar_tool_size = 20
                    set_margin_buttons = 20
                    set_height_crypto_mining =0
                    set_height_special_skins = 950

                }
                if(window.innerWidth>770){
                    set_height_the_mint = 530
                    set_height_benefits = 1800
                    set_height_the_team = 500
                    set_toolbar_tool_size = 40
                    set_margin_buttons = 10
                    set_height_crypto_mining =700
                    set_height_special_skins = 530
                }
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                    height_the_mint:set_height_the_mint,
                    height_the_benefits:set_height_benefits,
                    height_crypto_mining:set_height_crypto_mining,
                    toolbar_tool_size:set_toolbar_tool_size,
                    margin_buttons:set_margin_buttons,
                    height_special_skins:set_height_special_skins
                });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}