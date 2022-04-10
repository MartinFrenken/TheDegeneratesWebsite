import React, { useState } from 'react';
import styles from './FAQ.module.css'

export default function Questions(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <div className={styles.accordionTitle} onClick={() => setIsActive(!isActive)}>
      <div style={{display:"inline"}} >{isActive ? '^' : '>'}</div>
        <div style={{paddingLeft:"20px",display:"inline"}}>{props.title}</div>
      </div>
      {isActive && <div className={styles.accordionContent}>{props.content}</div>}
    </div>
  );
}

