import FAQ from "./FAQ";
import {Col, Row} from "antd";

export default function FAQS(){
    const Question1=[
        {"Question": "What are the Degenerates?" , "Answer" :"Degenerates are a species consisting of  \"9999\" non-wild habitants and 3 tribes living in the multiverse. It also acts as an access key to a 3D collection!"},
        {"Question":"What are the utilities behind the Degenerates?","Answer":"Degens are dedicated to creating real-life value to be recognized by humanity. Don't expect any play-to-earn game, anime serie,s or comics. Our utilities will be revealed weekly!"},
        {"Question":"How can I join Discord?","Answer":"To join The Degenerates discord you first have to find your way through a labyrinth and find the sorcerer's stone."},
        {"Question":"What is the sorcery stone hunt?","Answer": "Sorcery stone is the so-called \"white list\". You can find the stone by successfully solving one of the many mysteries the Degenerates left behind themselves. These mysteries can be solved just by explorers thou."}
    ]
    const Question2=[
        {"Question": "How can I become an explorer?" , "Answer": "The degenerates are looking for allies who would help them to be recognized among humans. If you help them and the community in any way you might be considered to get into the chosen group of explorers.  Life>Grind"},
        {"Question": "How many Degens are gonna live on our planet? " , "Answer": "Our information is that there is a war in their universe right now. Let's see how many survive."},
        {"Question": "When is the expected arrival of the degens?" , "Answer": "After the war and acceptance of humankind! Expected arrival will be around June and July, no set date is yet determined. All information will come through the news channel on our social media platforms."},
        {"Question": "Where can I see all the updates?" , "Answer": "We will update you about everything on THE DEGENERATES social media platforms."}
    ]
    return <>

        <Row  type="flex" style={{paddingTop:"72px",paddingBottom:"72px"}}>
        <Col xs={0} md={10} offset={1}>
            <FAQ question={Question1}></FAQ>

        </Col>
        <Col xs={0} md={10} offset={2}>
            <FAQ question={Question2}></FAQ>
        </Col> 
        <Col xs={20} md={0} lg={0} offset={2}>
            <FAQ question={Question1}></FAQ>
            <FAQ question={Question2}></FAQ>
        </Col> 
        </Row>
    </>
}