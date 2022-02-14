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

import  { useState, useEffect } from "react"
import TeamMembers from "../src/components/teammembers";
import TheApp from "../src/components/theapp";


const LandingPage = dynamic(
    () => import("../src/components/landing.jsx"),
    { ssr: false })

const Mint = dynamic(
    () => import("../src/components/themint.jsx"),
    { ssr: false })

export default function Home() {
    const size = useWindowSize();

  return (



<div style={{overflowX:"hidden"}}>

    <PageFrame backgroundImage={"Naamloos.png"} height={750}>
        <LandingPage >
 
        </LandingPage>


    </PageFrame>
    <PageFrame backgroundImage={"wallpaper/the_mint.png"} height={size.height_the_mint}>

        <Mint/>

    </PageFrame>
    
    <PageFrame backgroundImage={"wallpaper/utilities_wallpaper.png"} height={size.height_benefits}>
        <PictureTitle
            width ={318}
            height ={60}
            lineHeight={"52px"}
            imageURL={"title_texts/title_benefits.png"} text={"AND UTILITIES"} />
        <Utilities />
        <TheApp></TheApp>
    </PageFrame>
    <PageFrame backgroundImage={"wallpaper/cryptominning.png"} height={size.height_crypto_mining}>

     <Minning>

     </Minning>

    </PageFrame>
    <PageFrame backgroundImage={"wallpaper/utilities_wallpaper.png"} height={size.height_the_team}>
        <PictureTitle
            width ={129}
            height ={52}
            lineHeight={"44px"}
            imageURL={"title_texts/the_bottom.png"} text={"TEAM"} />

        <TeamMembers/>
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

  )
}

function useWindowSize() {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
        height_the_mint: undefined,
        height_benefits: undefined,
        height_the_team: undefined,
        height_crypto_mining:undefined
    });

    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
            let set_height_the_mint = 500
            let set_height_benefits = 500
            let set_height_the_team = 500
            let set_height_crypto_mining = 500
            function handleResize() {
                // Set window width/height to state

                if(window.innerWidth<770){
                    set_height_the_mint = 800
                    set_height_benefits = 2500
                    set_height_the_team = 2000
                    set_height_crypto_mining =500
                }
                if(window.innerWidth>770){
                    set_height_the_mint = 530
                    set_height_benefits = 1800
                    set_height_the_team = 500
                    set_height_crypto_mining =700
                }
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                    height_the_mint:set_height_the_mint,
                    height_the_benefits:set_height_benefits,
                    height_crypto_mining:set_height_crypto_mining
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