// import React, { useReducer } from 'react'

import Navbar from "./Navbar";

// import Home from './Home'

// const App = () => {

//   function reduser (count,action){
//     if(action.type === 'incre'){
//       return count +=1
//     }
//     else if(action.type==='decr'){
//       return count -=1
//     }
//     else if (action.type ==='reset'){
//       return 0
//     }
//     else{
//       return count
//     }
//   }
//   let [count , dispatch] = useReducer(reduser,0)
//   return (
//     <div>App
//       {/* <Home/> */}    
//    <h2>{count}</h2>
// <button  onClick={()=>{dispatch({type:"incre"})}}>++</button>
// <button  onClick={()=>{dispatch({type:"decr"})}}>--</button>
// <button  onClick={()=>{dispatch({type:"reset"})}}>reset</button>




      
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {

//   function reduser (color , action){
//     if(action.type ==='red'){
//       return color = 'red'
//     }
//     else if (action.type === 'blue'){
//       return color = 'blue'
//     }
//     else if (action.type === 'yellow'){
//       return color = 'yellow'
//     }
//     else if(action.type === 'green'){
//      return color = 'green'
//     }
//     else {
//       return color
//     }
//   }

//   let [color , dispatch] = useReducer(reduser , 'pink')

//   return (
//     <div  style={{backgroundColor:color , height:'400px'}}>
      
//       <button  onClick={()=>{dispatch({type:"red"})}}>red</button>
//       <button  onClick={()=>{dispatch({type:"blue"})}}>blue</button>
//       <button  onClick={()=>{dispatch({type:"yellow"})}}>yellow</button>
//       <button  onClick={()=>{dispatch({type:"green"})}}>green</button>
//     </div>
//   )
// }

// export default App

import React from 'react'

const App = () => {
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default App