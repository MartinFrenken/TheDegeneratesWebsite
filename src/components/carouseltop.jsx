import React from "react";
    import Carousel, {autoplayPlugin, slidesToShowPlugin} from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css';

export default function CarouselTop(props) {

    return <div>
        <Carousel
            plugins={
                [
                    'infinite',
                    {
                        resolve: autoplayPlugin,
                        options: {
                            interval: 2000,
                            stopAutoPlayOnHover: false,
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
            <img width={115} height={115} src={"/degenerates/degen_1.png"} />
            <img width={115} height={115} src={"/degenerates/degen_2.png"} />
            <img width={115} height={115} src={"/degenerates/degen_3.png"} />
            <img width={115} height={115} src={"/degenerates/degen_4.png"} />
            <img width={115} height={115} src={"/degenerates/degen_5.png"} />
            <img width={115} height={115} src={"/degenerates/degen_6.png"} />
        </Carousel>
    </div>
}