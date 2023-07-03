import axios from "axios";

//axios통신하는 코드를 여기다가 배치
export const getList = async () => { //async함수의 결과는 promise만 기억 /// promise는 약속어음으로 이해!!! return을 해주긴해주는데 약속어음만주는것
    const res = await axios.get(`http://localhost:8080/api/todos/list`)
    return res.data;
}
export const postTodo = async (todo) => {
    const res = await axios.post(`http://localhost:8080/api/todos/`, todo)

    return res.data;
}