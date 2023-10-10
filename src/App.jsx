import { useState } from 'react'
import './App.css'

export default function App() {
  const [color, setColor] = useState("olive")
const redHandler = ()=> {
  setColor("red")
}

  const greenHandler = ()=> {
    setColor("green")
  }

  const blueColor = ()=> {
    setColor("blue")
  }

  const messengerHandler = ()=> {
    setColor("#00c6ff")
  }

  const yellowHandler = ()=> {
    setColor("yellow")
  }

  const pinkHandler = () => {
    setColor("pink")
   
  }

  const purpleHandler = () => {
    setColor("purple")
  }

  const Css = {
    backgroundColor : "pink",
    fontWeight : "700",
    color : "black"
  }
  

  
  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }} >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={redHandler} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={greenHandler} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={blueColor} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={messengerHandler} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#0072ff"}}>Messenger Color</button>
          <button onClick={yellowHandler} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow" , color : "black" , fontWeight : "700"}}>Yellow</button>
          <button onClick={pinkHandler} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={Css}>Pink</button>
          <button onClick={purpleHandler} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{fontWeight : "700" , color : "black" , backgroundColor : "purple"}} >Purple</button>
        </div>
      </div>
      

    </div>
  )
}
