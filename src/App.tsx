import React from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { Scene } from "./components/scene";

function Dolly() {
  useFrame(({ clock, camera }) => {
    //camera.position.z = Math.sin(clock.getElapsedTime()) * 10;
    //camera.position.x = Math.cos(clock.getElapsedTime()) * 10;

    camera.lookAt(0, 2, 0);
    camera.updateProjectionMatrix();
  });
  return null;
}

function App() {
  return (
    <div>
      <Canvas
        className="Canvas"
        onClick={(e) => console.log(e)}
        style={{ width: window.innerWidth, height: window.innerHeight }}
        camera={{ position: [10, 5, 10] }}
      >
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <ambientLight intensity={0.7} />
        <Scene />
        <Dolly />
      </Canvas>
    </div>
  );
}

export default App;
