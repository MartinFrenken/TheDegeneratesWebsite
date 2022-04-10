import React from "react";
import {Space} from "antd";
import {Col, Row} from "antd";
import Countdown from "react-countdown";
import BlurryText, {ExtraBlurryText} from "./structure/blurrytext";
const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
export default function Utility(props) {
    const [isRevealed, setIsRevealed] = React.useState(props.isRevealed)
    const [title, setTitle] = React.useState("")
    const [text, setText] = React.useState("")
    if (isRevealed) {
        return <>
            <Row>
                <Col span={2}>
                </Col>
                <Col span={20}>


                    <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                        <img src={props.imageIcon} style={{width: 71, height: 71, alignSelf: 'center'}}/>
                    </Space>


                    <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>

                        <p style={{
                            fontWeight: 800,
                            fontSize: 30,
                            alignContent: "center",
                            color: "white",
                            textAlign: "center"
                        }}>     {title}</p>

                    </Space>


                    <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>

                            <p style={{
                                fontWeight: 400,
                                maxWidth: 700,
                                fontSize: 15,
                                alignContent: "center",
                                color: "white",
                                textAlign: "center"
                            }}>{text}</p>

                    </Space>
                </Col>
                <Col span={2}>
                </Col>
            </Row>
        </>
    }
    else{
        return <>
            <Row>
                <Col span={2}>
                </Col>
                <Col span={20}>


                    <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                        <img src={props.imageIcon} style={{width: 71, height: 71, alignSelf: 'center'}} />
                    </Space>

                    <p style={{
                        fontWeight: 800,
                        fontSize: 30,
                        alignContent: "center",
                        color: "white",
                        textAlign: "center"
                    }}>

                        <Countdown date={props.countDownDate} onComplete ={completeTimer}/>

                    </p>

                    <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>

                        <p style={{
                            fontWeight: 800,
                            fontSize: 30,
                            alignContent: "center",
                            color: "white",
                            textAlign: "center"
                        }}>      <ExtraBlurryText>   {props.title}  </ExtraBlurryText>  </p>

                    </Space>


                    <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                        <BlurryText>
                            <p style={{
                                fontWeight: 400,
                                maxWidth: 700,
                                fontSize: 15,
                                alignContent: "center",
                                color: "white",
                                textAlign: "center"
                            }}>    <BlurryText> {props.text}</BlurryText></p>
                        </BlurryText>
                    </Space>
                </Col>
                <Col span={2}>
                </Col>
            </Row>
        </>
    }
    function completeTimer(){
        setIsRevealed(true)
        if (typeof window !== 'undefined') {
            const hostname = window.location.origin;
            var url = new URL(hostname);
            url.port = '5000';
            let URLString = url.toString()
            fetch(URLString+"/1")
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log("fe")
                    setTitle(responseJson.title);
                    setText(responseJson.text);
                })
                .catch((error) => {
                    console.error(error);
                });

        }

    }
}