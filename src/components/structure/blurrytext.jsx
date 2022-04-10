import React,{ useState } from "react";
import {Col, Row} from "antd";

export default function BlurryText(props) {
    return <b style={{  filter: "blur(.21rem)",userSelect: "none"}}>{props.children}</b>
}
export  function ExtraBlurryText(props) {
    return <b style={{  filter: "blur(.41rem)",userSelect: "none"}}>{props.children}</b>
}