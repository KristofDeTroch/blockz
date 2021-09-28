import { Orienation } from "../enums/orientation.enum";
import { BoxSize } from "./boxSize.interface";
import { Coordinate } from "./coordinate.interface";

export interface BoxProps {
  position: Coordinate;
  boxSize: BoxSize;
  color: string;
  moving: boolean;
  orientation: Orienation;
  addBox: () => void;
}
