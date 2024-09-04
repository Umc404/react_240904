function Test() {
    // return 밖 영역 주석
    // 반드시 태그가 닫혀있어야 함. 안닫으면 오류 발생.
    // <input /> <- 요렇게 /> 로 닫아줘야함.
    
    const name = 'react Test Component';
    const style = {
        color: "white",
        backgroundColor: "black",
        fontSize : "48px",
        padding : "16px"
    }

    return (
        <div className="Test">
            {/* 주석 */}
            {/* `${변수명}` => {변수명} */}
            <div style={style}>{name}</div>
        </div>
    );
}

export default Test;