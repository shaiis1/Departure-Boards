import { DepartureBoardService } from '../services/DepartureBoardService.js';
import { BenGurionDepartureBoardService } from '../services/BenGurionDepartureBoardService.js';

export class DepartureBoardFactory {
  static createService(airport: string): DepartureBoardService | null {
    switch (airport) {
      case 'LLBG':
        return new BenGurionDepartureBoardService();
      // Future cases for other airports
      default:
        return null;
    }
  }
}
