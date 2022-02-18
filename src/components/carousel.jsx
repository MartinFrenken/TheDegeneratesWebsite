import React from "react";

import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

export default function CustomCarousel(props) {
    const imageHeight = props.height
    const imageWidth = props.width
    const responsive = {
        desktop:{
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return <>

        <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            arrows={false}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={ true}
            autoPlaySpeed={2100}
            keyBoardControl={true}

            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile","laptop"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-340-px"
            responsive={responsive}>

            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_1.png"} />
            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_25.png"} />
            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_3.png"} />
            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_4.png"} />
            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_24.png"} />
            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_6.png"} />
            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_21.png"} />
        </Carousel>
        <div style={{height: 20}}/>
        <Carousel style
                  swipeable={false}
                  draggable={false}
                  showDots={false}
                  arrows={false}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={ true}
                  autoPlaySpeed={2050}
                  keyBoardControl={true}

                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile","laptop"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                  responsive={responsive}>

            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_7.png"} />
            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_8.png"} />
            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_9.png"} />
            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_10.png"} />
            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_11.png"} />
            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_12.png"} />
            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_22.png"} />
        </Carousel>
        <div style={{height: 20}}/>
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            arrows={false}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={ true}
            autoPlaySpeed={2000}
            keyBoardControl={true}

            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile","laptop"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            responsive={responsive}>

            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_13.png"} />
            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_14.png"} />
            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_15.png"} />
            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_16.png"} />
            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_17.png"} />
            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_18.png"} />
            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_19.png"} />
            <img width={imageWidth} height={imageHeight} src={"/degenerates/degen_23.png"} />
        </Carousel>

    </>
}