
import React from "react";


export default function PercentageText(props) {
    const isMobile = props.mobile;
    if (isMobile == null) {
        return <div>
            <p style={{
                position: 'relative',
                top: props.top,
                left: props.left,
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 900,
                fontSize: 60,
                height: 60,
                lineHeight: 20,
                color: "white",
                textAlign: 'center'
            }}>

                {props.text}
            </p>

        </div>
    }
    if(isMobile){
        return <div>
            <p style={{
                position: 'relative',
                top: props.top,
                left: props.left,
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 900,
                fontSize: 40,
                height: 60,
                lineHeight: 20,
                color: "white",
                textAlign: 'center'
            }}>

                {props.text}
            </p>

        </div>
    }
}
