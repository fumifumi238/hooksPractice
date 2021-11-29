import React, { useRef} from "react";
import ReactDOM from "react-dom";
import "./index.css";


const App = () => {
  const inputEl = useRef(null);
  const handleClick = () => {
    inputEl.current.focus();
    console.log("inputEl.current:", inputEl.current);
    //inputEl.current: <input type="text">
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={handleClick}>入力エリアをフォーカスする</button>
    </>
  );
};

// useStateはstateの更新時に再レンダリングする。
// const App = () => {
//   const inputEl = useRef(null);
//   const [text, setText] = useState("");
//   const handleClick = () => {
//     setText(inputEl.current.value);
//   };
//   console.log("レンダリング！！");
//   return (
//     <>
//       <input ref={inputEl} type="text" />
//       <button onClick={handleClick}>set text</button>
//       <p>テキスト : {text}</p>
//     </>
//   );
// };
export default App;

ReactDOM.render(<App />, document.getElementById("root"));
