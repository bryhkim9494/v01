import { useState } from "react";
import { getList } from "../../api/todoAPI";
import Todo2List from "./Todo2List";
import Todo2Input from "./Todo2Input";


const Todo2 = () => {
    // 아무 내용없이 비동기 통신하는데 문제없는지 확인하는용도

    // getList() // 서버랑 통신하는지 확인용

    //라우팅 설계
    const [cmd, setCmd] = useState("list")
    const changeView = (value) => {
        setCmd(value)
    }
    const getView = () => {
        if (cmd === 'list') {
            return <Todo2List changeView={changeView}></Todo2List>
        } else if (cmd === 'input') {
            return <Todo2Input changeView={changeView}></Todo2Input>
        }
    }




    return (

        <>
            {getView()}
        </>
    );
}

export default Todo2;