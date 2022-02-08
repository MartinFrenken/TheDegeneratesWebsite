import React from "react";
import Carousel from 'react-multi-carousel';
import {Col, Row} from "antd";
import 'react-multi-carousel/lib/styles.css';
import CustomCarousel from "./carousel";

export default function TheMint(props) {

return <>
    <Row>
        <Col span={12}>
        </Col>

        <Col span={12}>
            <CustomCarousel>

            </CustomCarousel>
        </Col>
    </Row>
    </>
}