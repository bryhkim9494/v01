import axios from "axios";
import { useEffect, useState } from "react";


const ProductList = ({requestViewProduct}) => {

    const [obj,setObj] = useState([])
    console.log(obj)
    
    useEffect(()=> {

        axios.get('http://localhost/products').then(res => { //여기 안에는 await async못씀
            console.log("effect inside" + res.data)
            setObj(res.data) // 이 코드(setObj)에서 리액트 컴포넌트 상태가 변경됨
            // 리액트 컴포넌트 상태가 변경되면 렌더링이 일어남
        })

    },[]) // [] 빈 배열은 딱 한 번만 작업하고싶을때 사용 -> 컴포넌트가 렌더링이 처음 딱끝났을때 실행

   
    if(obj.length ===0 ) {
        return (
            <div className="text-4xl">Loading....................</div>
        )
    }
    return ( 

      <ul>
        {obj.map( p=> <li key={p.id} onClick={()=> requestViewProduct(p.id)}> {p.id} - {p.pname} - {p.price} </li>)}
      </ul>  
     );
}
 // useEffect 내가 부가적인 작업을 하고싶은거로 이해하면됨

 // json서버 실행하려면 cmd창에서 node server.js 실행
export default ProductList;