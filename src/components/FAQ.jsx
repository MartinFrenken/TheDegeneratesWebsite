import { Collapse } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import {Col, Row} from "antd";
import styles from "./FAQ.module.css"

export default function FAQ(props){
  const { Panel } = Collapse;
  let questions = props.question

function callback(key) {
}


  return <>

        <Collapse bordered={false} expandIcon={({ isActive }) => <PlusCircleFilled  style={{fontSize:"30px",color:"Red"}} rotate={isActive ? 90 : 0} />} expandIconPosition="right" className={styles.customCollaspe}  defaultActiveKey={['1']} onChange={callback}>
        {questions.map((q, index) => (
      <Panel header={q.Question} key={index}>
        <p>{q.Answer}</p>
      </Panel>
    ))}
    </Collapse>
  </>

  }

