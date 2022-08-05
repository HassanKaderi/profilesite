import "./intro.scss"
import Char from '../model/Model'
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <Canvas>
          <Suspense><Char/></Suspense>
          
        </Canvas>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, i'm</h2>
          <h1>Hassan Kaderi</h1>
        </div>
      </div>
    </div>
  )
}
