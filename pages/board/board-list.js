import style from "board/style/board-list.module.css";

export default function Board(){
    return (<>
        <h1>게시판</h1><br/><br/>
    <button onClick={ () => {history.back('/'); } } >뒤로가기</button></>)
}