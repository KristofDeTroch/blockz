import React from "react";
import { Box } from "./box";

export function Scene() {
  return (
    <>
      <Box position={[1, 1, 1]} color="red" />
      <Box position={[2, 2, 2]} color="green" />
    </>
  );
}
