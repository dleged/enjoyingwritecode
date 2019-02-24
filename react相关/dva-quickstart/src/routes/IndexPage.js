import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Item from '../components/Label'





function IndexPage() {
  let firstName = useStateFirstName('范');
  let lastName = useStateLastName('端端');
  let width = useEffectHook();
  return (
    <div className={styles.normal}>
      <Item name='firstName'>
        <input {...firstName}/>
      </Item>
      <Item name='lastName'>
        <input {...lastName}/>
      </Item>
      <Item name='width'>
        <input value={width} />
      </Item>
    </div>
  );
}

function useStateFirstName(name){
    let [firstName, setFirstName] = useState(name);
    function handleChangeFirstName(e){
      setFirstName(e.target.value)
    }

    return {
      value: firstName,
      onChange: handleChangeFirstName
    }
}

function useStateLastName(name){
    let [lastName, setLastName] = useState(name);
    function handleChangesetLastName(e){
      setLastName(e.target.value)
    }

    return {
      value: lastName,
      onChange: handleChangesetLastName
    }
}

function useEffectHook(){
    let [width, setWidth] = useState(window.innerWidth);
    function handleResize(){
        setWidth(window.innerWidth);
    }

    useEffect(function(){
      window.addEventListener('resize',handleResize);
      return function(){
        window.removeEventListener('resize',handleResize);
      }
    })
    return width;
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
