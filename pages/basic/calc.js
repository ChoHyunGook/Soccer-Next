import axios from "axios";
import React, {useState} from "react";

export default function Calc(){
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
        axios.post(proxy + '/api/basic/calc', inputs)
        .then(res=>{
            const calc = res.data
            document.getElementById('result-span').innerHTML=`
            <h3>숫자1 : ${calc.num1}</h3>
            <h3>연산기호 : ${calc.op}</h3>
            <h3>숫자2 : ${calc.num2}</h3>
            <h3>결과 : ${calc.res}</h3>
            `
        })
        .catch(err=>alert(err))
    }

    return (<div>
    <form action="" onSubmit={handleSubmit}>
        <h1>계산기</h1>
        <>
        <label htmlFor="">num1</label><br />
        <input type="text" name="num1" onChange={handleChange}/><br />
        <select name="op" onChange={handleChange}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
        </select><br />
        <label htmlFor="">num2</label><br />
        <input type="text" name="num2" onChange={handleChange}/><br />
        <input type="submit" value="실행"/><br/><br/>
        </>
    </form>
    <div> 결과 : <span id='result-span'></span></div>
    <button onClick={ () => {history.back('/'); } } >뒤로가기</button>
    </div>)
}
