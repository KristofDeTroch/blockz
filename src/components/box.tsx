import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export function Box(props: { position: number[]; color: string }) {
  const boxSize = [3, 0.5, 3];
  const boxRef = useRef();

  function MoveBox() {
    useFrame(({ clock }) => {
      if (boxRef.current) {
        (boxRef.current as any).position.x =
          Math.sin(clock.getElapsedTime()) * 5;
      }
    });
    return null;
  }

  return (
    <mesh position={props.position} ref={boxRef}>
      <boxBufferGeometry attach="geometry" args={boxSize} />
      <meshLambertMaterial attach="material" color={props.color} />
      <MoveBox />
    </mesh>
  );
}
