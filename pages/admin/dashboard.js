export default function Dashboard(){
    return (<>
        <h1>대시보드</h1><br/><br/>
    <button onClick={ () => {history.back('/'); } } >뒤로가기</button>
    </>)
}