
import "./intro.scss"
import Char from '../model/Model'
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useRef } from "react"
import { OrbitControls } from "@react-three/drei"
import { init } from "ityped"


export default function Intro() {

  const textRef = useRef();

  useEffect(()=>{
    //Instead of using doc selector cause im using react
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500, // Miliseconds
      backSpeed: 60,
      startDelay: 200,
      cursorChar: "✏️", // i didnt even know I coulde use emojies this is dope
      strings: ["Abuuk", "A Developer", "An Artist", "Determined", "Wait this is fun", "Were you expecting more?", "Come on now let me enjoy this"],
    });
  },[])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <Canvas>
          <Suspense>
            <spotLight/>
            <OrbitControls/>
            <Char/>
          </Suspense>
        </Canvas>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Hassan Kaderi</h1>
          <h3>... But my friends call me <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down-arrow.png" alt=""/>
        </a>
      </div>
    </div>
  )
}
