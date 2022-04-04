import React,{useState} from "react"


export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <button onClick={() => setCount(count + 1)}>+</button><br />
    <button onClick={() => setCount(count - 1)}>-</button> <br/>
    <div>{count}</div><br/><br/>
    <button onClick={ () => {history.back('/'); } } >뒤로가기</button>
    </>
  )
} 