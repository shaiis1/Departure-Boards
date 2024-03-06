import { Departure } from '../models/Departure.js';

export interface DepartureBoards {
    supportedAirports(): string[];
    departuresFor(airport: string): Promise<Departure[]>;
  }