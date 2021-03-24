import {Cell} from '@libs/map-generation';
import {PersonActions} from '@components/Person';

export type PositionSetter = ((value: (((prevState: Cell) =>
Cell) | Cell)) => void);

export type ActionSetter = ((value: (((prevState: PersonActions) =>
PersonActions) | PersonActions)) => void);

export type InputParameters = {
  dx: number,
  dy: number,
  map: Cell[],
};
