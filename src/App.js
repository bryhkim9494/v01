import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Kiosk from "./components/Kiosk";
import TemplatePage from "./components/layout/TemplatePage";
import Todo from "./components/todo";
import TodoInput from "./components/todo/TodoInput";
import ZCounter from "./components/zcounter";
import ZKiosk from "./components/zkiosk";

function App() {
  return (
    <div>
      {/* <div className="w-full h-24 bg-sb-gary2 border-b-2 border-cyan-50 ">
          <img className="w-20 h-20 m-auto pt-3" src="logo2.png" />
      </div>   */}
        {/* <ZCounter/> */}
       
        {/* <TemplatePage>
          <div className="text-6xl text-red-700">Logo Header</div>
        <ZKiosk></ZKiosk>
        <div className="text-6xl text-red-700">Logo Footer</div>
        </TemplatePage> */}
        {/* <TodoInput></TodoInput> */}

        <Todo></Todo>
    </div>
  );
}

export default App;
