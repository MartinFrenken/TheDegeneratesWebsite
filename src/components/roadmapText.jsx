
import React from "react";


export default function RoadMapText(props) {
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
                fontSize: 40,
                height: 60,
                minWidth: 550,
                color: "white",
                textAlign: 'center'
            }
            }>{props.titleText}</p>
            <p
                style={{

                    position: 'relative',
                    top: props.top - 30,
                    left: props.left,
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 900,
                    fontSize: 20,
                    height: 60,
                    minWidth: 550,
                    color: "white",
                    textAlign: 'center',
                }
                }
            >{props.subText}</p>
        </div>
    }
    if (isMobile){
        return <div>
            <p style={{

                position: 'relative',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 900,
                fontSize: 20,
                height: 20,
                marginLeft:20,
                marginRight:20,
                color: "white",
                textAlign: 'center',
                marginTop:props.marginTop,
                alignContent:"center"}
            }>{props.titleText}</p>
            <p
                style={{

                    position: 'relative',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 900,
                    fontSize: 15,
                    height: 15,
                    marginLeft:20,
                    marginRight:20,
                    marginBottom:props.marginBot,
                    color: "white",
                    textAlign: 'center',
                    alignContent:"center"
                }
                }
            >{props.subText}</p>
        </div>
    }
    }
