import React,{useReducer} from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "./index.css";


//stateが一つの場合

//counterの初期値を0に設定
const initialState = 0
//reducer関数を作成
//countStateとactionを渡して、新しいcountStateを返すように実装する
const reducerFunc = (countState, action)=> {
//reducer関数にincrement、increment、reset処理を書く
//どの処理を渡すかはactionを渡すことによって判断する
switch(action){
  case 'increment':
    return countState + 1;
  case 'decrement':
    return countState - 1;
  case 'reset':
    return initialState;
  default:
    return countState;

}

}

const Counter = () => {
  //作成したreducerFunc関数とcountStateをuseReducerに渡す
  //useReducerはcountStateとdispatchをペアで返すので、それぞれを分割代入
  const [count, dispatch] = useReducer(reducerFunc, initialState);
  //カウント数とそれぞれのactionを実行する<Button/>を設置する
  return (
    <>
      <h2>カウント：{count}</h2>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button
          onClick={() => {
            dispatch("increment");
          }}
        >
          increment
        </Button>
        <Button
          onClick={() => {
            dispatch("decrement");
          }}
        >
          decrement
        </Button>
        <Button
          onClick={() => {
            dispatch("reset");
          }}
        >
          reset
        </Button>
      </ButtonGroup>
    </>
  );
};


export default Counter;
ReactDOM.render(<Counter />, document.getElementById("root"));
