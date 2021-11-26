// ReactからcreateContextとuseStateをimport
import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ContextA from "./components/ContextSample/ContextA";

//createContextを使ってUserContextとHobbyContextを作成
export const UserContext = createContext();
export const HobbyContext = createContext();

function App() {
  //useStateを使ってuserを作成
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({
    name: "セイラ",
    age: 17,
  });
  //useStateを使ってhobbyを作成
  // eslint-disable-next-line no-unused-vars
  const [hobby, setHobby] = useState("キャンプ");
  return (
    <div className="App">
      {/* userContext。Providerを作成、valueにはuserをセット */}
      <UserContext.Provider value={(user, setUser)}>
        {/* HobbyContext.Providerを作成、valueにはhobbyをセット */}
        <HobbyContext.Provider value={hobby}>
          <ContextA />
        </HobbyContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
