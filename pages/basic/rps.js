import axios from "axios";
import React, {useState} from "react";

export default function Rps(){
    const proxy = 'http://localhost:5000'
    const[inputs,setInputs]=useState({})

    const handleChange=(e)=>{
        e.preventDefault()
        const{value,name}=e.target
        setInputs({
            ...inputs,[name]:value})    
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(proxy + '/api/basic/rps', inputs)
        .then(res=>{
            const rps = res.data
            document.getElementById('result-span').innerHTML=`
            <h3>사용자 : ${rps.user}</h3>
            <h3>컴퓨터 : ${rps.computer}</h3>
            <h3>결과 : ${rps.res}</h3>
            `
        })
        .catch(err=>alert(err))
    }

    return (<div>
    <form action="" onSubmit={handleSubmit}>
        <h1>가위바위보 게임</h1>
        <>
        <label htmlFor=""><h3>가위:0 바위:1 보:2</h3></label><br />
        <input type="text" name="user" onChange={handleChange}/><br/><br/>
        <input type="submit" value="실행"/><br/><br/>
        </>
    </form>
    <div> 결과 : <span id='result-span'></span></div>
    <button onClick={ () => {history.back('/'); } } >뒤로가기</button>
    </div>)
}