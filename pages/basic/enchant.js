import React, {useState} from "react"
import axios from "axios";

export default function Enchant(){
    const proxy = 'http://localhost:5000'
    const [inputs, setInputs] = useState({})

    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setInputs({...inputs, [name] : value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(proxy + '/api/basic/enchant', inputs)
        .then(res => {
            const enchant = res.data
            document.getElementById('result-span').innerHTML=`
            <h3>선택한 아이템 : ${enchant.item}</h3>
            <h3>결과 : ${enchant.res}</h3>
            `
        })
        .catch(err => alert(err))
    }
    
    return (<>
            <h3>랜덤 무기강화 게임</h3><br/><br/>
            <h1>무기별로 강화확률 다름</h1><br/>
            <h1>(##주의## 절대반지하다가 손목나가도 책임안짐##)</h1><br/>
            <form action="" onSubmit={handleSubmit}>
                <div>
                <select name="item" onChange={handleChange}>
                <option value="sword">소드</option>
                <option value="greatSword">그레이트소드</option>
                <option value="shortSword">단검</option>
                <option value="wand">완드</option>
                <option value="spear">스피어</option>
                <option value="axe">도끼</option>
                <option value="cookKnife">식칼</option>
                <option value="ring">반지</option>
                <option value="ear">귀걸이</option>
                <option value="neck">목걸이</option>
                <option value="absoluteRing">절대반지</option>
            </select><br /><br />
                </div>
                <div>
                    <input type="submit" value="강화!!!"/><br/><br/>
                </div>
            </form>
            <div> <h3>결과 :</h3> <span id='result-span'></span></div><br/><br/>
            <button onClick={ () => {history.back('/'); } } >뒤로가기</button>
       
    </>)
}