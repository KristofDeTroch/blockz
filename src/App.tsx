import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";

const boxSize = [3, 0.5, 3];

function Scene() {
  return (
    <>
      <Box position={[1, 1, 1]} color="red" />
      <Box position={[2, 2, 2]} color="green" />
    </>
  );
}

function Box(props: { position: number[]; color: string }) {
  return (
    <mesh position={props.position}>
      <boxBufferGeometry attach="geometry" args={boxSize} />
      <meshLambertMaterial attach="material" color={props.color} />
    </mesh>
  );
}

function Dolly() {
  useFrame(({ clock, camera }) => {
    camera.position.z = Math.sin(clock.getElapsedTime()) * 10;
    camera.position.x = Math.cos(clock.getElapsedTime()) * 10;

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
        camera={{ cube: true, position: [3, 3, 3] }}
      >
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <ambientLight intensity={0.2} />
        <Scene />
        <Dolly />
      </Canvas>
    </div>
  );
}

export default App;
