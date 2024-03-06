import { DepartureBoardService } from './DepartureBoardService.js';
import { Departure } from '../models/Departure.js';
import { fetchAPI } from '../utils/fetchAPI.js';
import { RequestInit } from 'node-fetch';
import { API_URLS } from '../config/apiConfig.js';

/**
 * Implements DepartureBoards interface for Ben Gurion Airport departures.
 */
export class BenGurionDepartureBoardService implements DepartureBoardService {
  // List of supported airport codes. Currently supports Ben Gurion Airport only.
  private static supportedAirportCode = ['LLBG'];
 
  /**
   * Returns the list of supported airports.
   * @returns An array of supported airport codes.
   */
  supportedAirports(): string[] {
    return BenGurionDepartureBoardService.supportedAirportCode;
  }

  /**
   * Fetches departures for a specified airport.
   * @param airport The airport code to fetch departures for.
   * @returns A promise that resolves to an array of Departure objects.
   * @throws Will throw an error if the airport code is not supported or if fetching the departures fails.
   */
  async departuresFor(airport: string): Promise<Departure[]> {
    if (!BenGurionDepartureBoardService.supportedAirportCode.includes(airport)) {
      throw new Error(`Airport ${airport} is not supported.`);
    }
  
    // Defines the URL and request options for the API call.
    const url = API_URLS.departureBoardSearch;
    const options: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: `FlightType=Outgoing&AirportId=${airport}&UICulture=en-US`,
    };
  
    try {
      // Attempts to fetch the departure data from the API.
      return await fetchAPI<Departure[]>(url, options);
    } catch (error) {
      // Logs and rethrows an error if fetching the departure data fails.
      console.error(`Failed to fetch departures for ${airport}: ${error}`);
      throw new Error('Error fetching departure data.');
    }
  }
}
