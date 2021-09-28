import React, { useState } from "react";
import { Box } from "./box";
import { BoxProps } from "../interfaces/box.props.interface";
import { Orienation } from "../enums/orientation.enum";
import { Coordinate } from "../interfaces/coordinate.interface";
import { BoxSize } from "../interfaces/boxSize.interface";

export function Scene() {
  const [boxSize, setBoxSize] = useState<BoxSize>({
    width: 5,
    height: 0.5,
    depth: 5,
  });
  const stackPosition: Coordinate = {
    x: 1,
    y: 0.5,
    z: 1,
  };
  const [boxes, setBoxes] = useState(
    Array<BoxProps>(
      {
        position: { x: 1, y: 1, z: 1 },
        color: "green",
        addBox,
        moving: false,
        orientation: Orienation.frontToBack,
        boxSize,
      },
      {
        position: { x: 1, y: 1.5, z: 1 },
        color: "red",
        addBox,
        moving: true,
        orientation: Orienation.sideToSide,
        boxSize,
      }
    )
  );

  function addBox() {
    setBoxes([
      ...boxes.map((box) => ({
        ...box,
        ...(box.color === "green" ? { color: "green" } : { color: "blue" }),
      })),
      {
        position: { ...stackPosition, y: boxes.length * 0.5 + 1 },
        color: "red",
        addBox,
        moving: true,
        boxSize,
        orientation:
          boxes.length % 2 === 1
            ? Orienation.sideToSide
            : Orienation.frontToBack,
      },
    ]);
  }

  return (
    <>
      {boxes.map((box, i) => (
        <Box
          key={i}
          boxSize={box.boxSize}
          position={box.position}
          color={box.color}
          addBox={addBox}
          moving={box.moving}
          orientation={box.orientation}
        />
      ))}
    </>
  );
}
