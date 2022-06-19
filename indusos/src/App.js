import './App.css';
import {useEffect, useState} from 'react';
import { addNewData, dataEmoji, fetchData } from './secureAxios/util';
import TextListShow from './component/TextListShow';

function App() {
  const [textData,setTextData]=useState()
  const [dataFetch,setDataFetch]=useState()
  const [showInputText,setShowInputText]=useState()
  useEffect(()=>{
    fetchTextData()
  },[])

 const fetchTextData=()=>{
  fetchData().then((res)=>{
    setDataFetch(res)
  })
 }

const handleChange=(value)=>{
  const data= dataEmoji(value)
  setShowInputText(data)
 setTextData(value)
}
const handleClick=async()=>{
 await addNewData(textData).then((res)=>{
  fetchTextData()
 })
}
  return (
    <div className="App">
    <label style={{margin:'10px'}}><b>{showInputText}</b> </label><br/>
      <input type='text' style={{margin:'10px'}} value={textData} onChange={(value)=>{handleChange( value.target.value)}}/><br/>
      {textData?.length >0 && <button onClick={handleClick}>click</button> }
     <TextListShow showData={dataFetch}/>
    </div>
  );
}

export default App;
