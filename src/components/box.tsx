import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Orienation } from "../enums/orientation.enum";
import { BoxProps } from "../interfaces/box.props.interface";

export function Box(props: BoxProps) {
  const boxRef = useRef<BoxProps>(null);
  const [moving, setMoving] = useState(props.moving);

  function MoveBox() {
    useFrame(({ clock }) => {
      if (boxRef.current && moving) {
        if (props.orientation === Orienation.frontToBack) {
          (boxRef.current as any).position.x +=
            Math.cos(clock.getElapsedTime()) > 0 ? 0.15 : -0.15;
        } else {
          (boxRef.current as any).position.z +=
            Math.cos(clock.getElapsedTime()) > 0 ? 0.15 : -0.15;
        }
      }
    });
    return null;
  }
  const boxSize = [
    props.boxSize.width,
    props.boxSize.height,
    props.boxSize.depth,
  ];

  const position = [props.position.x, props.position.y, props.position.z];

  return (
    <mesh
      position={position}
      ref={boxRef}
      onClick={() => {
        if (moving && boxRef.current !== null) {
          setMoving(false);
          props.addBox();
        }
      }}
    >
      <boxBufferGeometry attach="geometry" args={boxSize} />
      <meshLambertMaterial attach="material" color={props.color} />
      <MoveBox />
    </mesh>
  );
}
