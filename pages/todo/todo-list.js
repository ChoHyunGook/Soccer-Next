import React from "react";



export default function Todo(){
    return (
            <div className="Todo">
            <input type="checkbox" id="todo0" name ="todo0" value="todo9"/>
            <label htmlFor="todo0">Todo 컴포넌트 만들기</label><br/><br/>
            <button onClick={ () => {history.back('/'); } } >뒤로가기</button>
            </div>
        );
    
}