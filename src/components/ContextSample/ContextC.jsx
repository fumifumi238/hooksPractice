//ReactからuseContextをimport
import React, {useContext} from 'react'
//AppコンポーネントからUserContext, HobbyContextをimport
import {UserContext, HobbyContext} from '../../index.js'

const ContextC = () => {
//useContextの引数に、UserContextやHobbyContextを渡すことによって、
//AppコンポーネントでProviderに渡したvalueの値を変数に代入することが出来る
  const user = useContext(UserContext)
  const hobby = useContext(HobbyContext)
  console.log(user)
  return (
    <div>
    <p>{user.name}{user.age}歳: 趣味は{hobby}です。</p>
    {/* <button onClick={()=>setUser(state=>({ ...state, age: state.age + 1 }))}>+1</button> */}
    </div>
  )
}

export default ContextC
