import React,{useState} from "react";

export default function SignIn(){

    const[inputs,setInputs]=useState({})
    const{id,pw,name}=inputs;

    const handleChange=(e)=>{
        e.preventDefault()
        const{value,name}=e.target;
        setInputs({
            ...inputs,[name]:value
        })
    }
    const handleClick=(e)=>{
        e.preventDefault()
        const loginRequest={id,pw,name}
        alert(`사용자이름:${JSON.stringify(loginRequest)}`)
    }

    return <><h1>로그인</h1>

    <label htmlFor="">ID</label><br />
    <input type="text" name="id" onChange={handleChange} /><br />
    <label htmlFor="">Pw</label><br />
    <input type="text" name="pw" onChange={handleChange}/><br/>
    <label htmlFor="">성함</label><br />
    <input type="text" name="name" onChange={handleChange}/>
    <button onClick={handleClick}>입력</button><br/><br/>
    <button onClick={ () => {history.back('/'); } } >뒤로가기</button>
    </>
}