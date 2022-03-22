
import React from "react";


export default function RoadMapText(props) {
   return <div>
    <p style={{

        position:'relative',
        top:props.top,
        left:props.left,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: 40,
        height:60,
        minWidth:550,
        color: "white",
        textAlign: 'center'
    }
    }>{props.titleText}</p>
        <p
            style={{

                position:'relative',
                top:props.top-30,
                left:props.left,
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 900,
                fontSize: 20,
                height:60,
                minWidth:550,
                color: "white",
                textAlign: 'center',
            }
            }
        >{props.subText}</p>
    </div>
    }
