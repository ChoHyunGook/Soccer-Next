import axios from "axios"
import { useState } from "react"

export default function SignUp(){
    const [inputs,setInputs]=useState({})

   const handleChange = e =>{
       e.preventDefault()
       const {name,value} = e.target
       setInputs({...inputs,[name]:value}) 
    }
    
    const handleSubmit = e =>{
        e.preventDefault()
        axios.post('http://localhost:5000/api/user/signup',inputs)
        .then(res=>{
            const signup = res.data
            document.getElementById('result-span').innerHTML = `
            <h3>결과 : ${JSON.stringify(signup)}</h3>
            `
        }).catch(err=>alert(err))
   
   }

    return (<div>
    <form action = "" onSubmit={handleSubmit} >

    <h1>회원 가입</h1> 
    <div>
        <label><b>사용자 ID</b></label><br/>
        <input type="text" name='username' onChange={handleChange}/><br /><br/>

        <label htmlFor=""><b>비밀번호</b></label><br/>
        <input type="password" name='password' onChange={handleChange}/><br /><br/>

        <label><b>이름</b></label><br/>
        <input type="text" name='name' onChange={handleChange}/><br /><br/>

        <label><b>전화번호</b></label><br/>
        <input type="text" name='telephone' onChange={handleChange}/><br /><br/>
    </div>
    <button >회원가입</button>  
    </form>
    <button onClick={ () => {history.back('/'); } } >뒤로가기</button>
    <div><span id="result-span">결과</span></div>
    </div>)}
    
