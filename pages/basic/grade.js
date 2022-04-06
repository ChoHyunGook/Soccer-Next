import React, {useState} from "react"
import axios from "axios";

export default function Grade(){
    const proxy = 'http://localhost:5000'
    const [inputs, setInputs] = useState({})

    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setInputs({...inputs, [name] : value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(proxy + '/api/basic/grade', inputs)
        .then(res => {
            alert(`${JSON.stringify(res.data)}`)
            const grade = res.data
            document.getElementById('result-span').innerHTML=`
            <h3>국어점수 : ${grade.kor}</h3>
            <h3>영어점수 : ${grade.eng}</h3>
            <h3>수학점수 : ${grade.math}</h3>
            <h3>평균점수 : ${grade.avg}</h3>
            <h3>등급 : ${grade.grade}</h3>
            <h3>합격여부 : ${grade.res}</h3>
            `
        })
        .catch(err => alert(err))
    }
    
    return (<>
            <h1>성적표</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label><b>이름</b></label> <br/>
                    <input name="name" onChange={handleChange}/> <br/>
                    <label><b>국어 성적</b></label> <br/>
                    <input name="kor" onChange={handleChange}/> <br/>
                    <label><b>영어 성적</b></label> <br/>
                    <input name="eng" onChange={handleChange}/> <br/>
                    <label><b>수학 성적</b></label> <br/>
                    <input name="math" onChange={handleChange}/>
                </div>
                <div>
                    <input type="submit" value="실행"/>&nbsp;<br/><br/>
                </div>
            </form>
            <div> <h3>결과 :</h3> <span id='result-span'></span></div><br/><br/>
            <button onClick={ () => {history.back('/'); } } >뒤로가기</button>
       
    </>)
}