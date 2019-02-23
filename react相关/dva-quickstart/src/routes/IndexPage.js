import React,{useState} from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';


function IndexPage() {
  let [count, setCount] = useState(0);
  return (
    <div className={styles.normal}>
      <div>you clicked {count} time</div>
      <button onClick={() => setCount(++count)}>
        click me
      </button>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
