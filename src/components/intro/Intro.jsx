import "./intro.scss"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight/>

          </Suspense>
        </Canvas>
      </div>
      <div className="right"></div>
    </div>
  )
}
