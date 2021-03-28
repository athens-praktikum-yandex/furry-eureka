import { Cell } from '../map-generation';
import { PersonActions } from '../person';

export type PositionSetter = ((value: (((prevState: Cell) =>
Cell) | Cell)) => void);

export type ActionSetter = ((value: (((prevState: PersonActions) =>
PersonActions) | PersonActions)) => void);

export type PositionOffset = Record<string, Cell>;
