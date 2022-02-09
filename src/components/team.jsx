import React,{ useState } from "react";

export default function Team(props)
{
    const [hover, setHover] = useState();

    const handleMouseIn = () => {
        setHover(true);
    };
    const handleMouseOut = () => {
        setHover(false);
    };
    
    return <>
    <div>
    <p style={{fontWeight:"900", width:"300px"}}>{props.teamname} <a style={{float:"right"}} href={props.link}>{props.icon}</a></p>
    <div  onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} style={{width:"300px" ,height:"300px", position:"relative"}}>
    <img src={props.image} alt="" width="300" height="300" />
    <p style={{visibility:hover? "visible":"hidden",opacity:hover?"1":"0", position:"absolute", top:"0",bottom:"0",
    left:"0", right:"0", marginLeft:"auto", marginRight:"auto", textAlign:"center",
    background: "rgba(0, 0, 0, 0.60)", marginBottom:"0px", color:"white", padding:"10px"}}
    >
        
        {props.intro}
    </p>

    </div>
    </div>
    
    
    </>
}