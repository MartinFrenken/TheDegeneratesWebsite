import React from "react";
import Carousel, { autoplayPlugin,slidesToShowPlugin,DIRECTION } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import CarouselTop from "./carouseltop";

export default function TheMint(props) {

    return <>


        <Carousel
            plugins={
                [
                    'infinite',
                    {
                        resolve: autoplayPlugin,
                        options: {
                            interval: 2000,
                            stopAutoPlayOnHover: false
                        }

                    },
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 3
                        }
                    }
                ]

            }
            animationSpeed={1000}
        >
            <img width={115} height={115} src={"/degenerates/degen_7.png"} />
            <img width={115} height={115} src={"/degenerates/degen_8.png"} />
            <img width={115} height={115} src={"/degenerates/degen_9.png"} />
            <img width={115} height={115} src={"/degenerates/degen_10.png"} />
            <img width={115} height={115} src={"/degenerates/degen_11.png"} />
            <img width={115} height={115} src={"/degenerates/degen_12.png"} />
        </Carousel>
        <Carousel
            plugins={
                [
                    'infinite',
                    {
                        resolve: autoplayPlugin,
                        options: {
                            interval: 2000,
                            stopAutoPlayOnHover: false
                        }

                    },
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 3
                        }
                    }
                ]

            }
            animationSpeed={1000}
        >
            <img width={115} height={115} src={"/degenerates/degen_7.png"} />
            <img width={115} height={115} src={"/degenerates/degen_8.png"} />
            <img width={115} height={115} src={"/degenerates/degen_9.png"} />
            <img width={115} height={115} src={"/degenerates/degen_10.png"} />
            <img width={115} height={115} src={"/degenerates/degen_11.png"} />
            <img width={115} height={115} src={"/degenerates/degen_12.png"} />
        </Carousel>

    </>
}