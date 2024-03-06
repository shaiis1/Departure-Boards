import { DepartureBoards } from './DepartureBoards.js';
import { Departure } from '../models/Departure.js';

export abstract class DepartureBoardService implements DepartureBoards {
  abstract supportedAirports(): string[];
  abstract departuresFor(airport: string): Promise<Departure[]>;
}
export { DepartureBoards };

