import React,{useState} from "react";
import ReactDOM from 'react-dom';
import "./index.css";

// // countの初期値として、1~10までのランダムな数値を生成
// const initialState = Math.floor(Math.random() * 10) + 1;

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // クラスでは、コンストラクタ内で、this.stateの初期値{ count: initialState }をセット
//       count: initialState,
//       // this.stateの初期値{ open: false }をセット
//       open: true,
//     };
//   }
//   // toggleメソッドを作成
//   toggle = () => {
//     this.setState({ open: !this.state.open });
//   };

//   render() {
//     return (
//       <>
//         <button onClick={this.toggle}>
//           {this.state.open ? "close" : "open"}
//         </button>
//         <div className={this.state.open ? "isOpen" : "isClose"}>
//           <p>現在の数字は {this.state.count} です</p>
//           {/*ボタンをクリックした時に、this.setState()を呼ぶことでcountステートを更新 */}
//           <button
//             onClick={() => this.setState({ count: this.state.count - 1 })}
//           >
//             - 1
//           </button>

//           <button
//             onClick={() => this.setState({ count: this.state.count + 1 })}
//           >
//             + 1
//           </button>

//           <button onClick={() => this.setState({ count: 0 })}>0</button>
//           <button onClick={() => this.setState({ count: initialState })}>
//             最初の数値に戻す
//           </button>
//         </div>
//       </>
//     );
//   }
// }


const initialState = Math.floor(Math.random()*10) + 1

const Counter = () =>{
  const [count,setCount] = useState(initialState)
  const [open,setOpen] = useState(true)
  const toggle = () => setOpen(!open)
  const resetZero = () => setCount(0)
  return (
    <React.Fragment>
      <button onClick={toggle}>{open ? "close" : "open"}</button>
      <div className={open ? "isOpen" : "isClose"}>
        <p>最初の値:{initialState}</p>
        <p>現在の数字は{count}です。</p>
        <button onClick={() => setCount((prevState) => prevState + 1)}>
          +
        </button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={resetZero}>0</button>
        <button onClick={() => setCount(initialState)}>最初の数値に戻す</button>
      </div>
    </React.Fragment>
  );
}

export default Counter;

ReactDOM.render(<Counter />, document.getElementById("root"));
