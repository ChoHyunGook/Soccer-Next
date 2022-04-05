import React,{useState} from "react"
import axios from "axios"

export default function SignUp(){
    const [inputs, setInputs] = useState({})

    const handleChange = e => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({ ...inputs, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/user/signup', inputs)
        .then(res => {
            const signup = res.data
            document.getElementById('result-span').innerHTML = `
        
            <h3>${signup.name}님 회원가입을 축하합니다. 웰컴 투 헬프론트</h3>
            `
        })
        .catch(err => alert(err))
    }

    return <>
    <form action="" onSubmit={handleSubmit} >
    <h1>회원가입</h1>

    <label htmlFor="">아이디</label><br />
    <input type="text" name="id" onChange={handleChange} /><br />

    <label htmlFor="">비밀번호</label><br />
    <input type="text" name="pw" onChange={handleChange}/><br/>

    <label htmlFor="">성함</label><br />
    <input type="text" name="name" onChange={handleChange}/><br/>

    <label htmlFor="">전화번호</label><br />
    <input type="text" name="tel" onChange={handleChange}/>
    
    <input type="submit" value="확인" /><br /><br/>
    </form>
    <div> 결과 : <span id='result-span'></span></div>
    <button onClick={ () => {history.back('/'); } } >뒤로가기</button>
    </>
}