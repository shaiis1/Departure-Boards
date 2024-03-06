import { DepartureBoardFactory } from './factory/DepartureBoardFactory.js';

async function main() {
  const airportCode = 'LLBG';
  try {
    const service = DepartureBoardFactory.createService(airportCode);
    if(!service){
        console.log(`Departure board service for airport ${airportCode} is not available.`);
        return;
    }

    const departures = await service.departuresFor(airportCode)
    console.log(`Departures: ${JSON.stringify(departures, null, 2)}`) // Pretty-print the departures
  } catch (error) {
    console.error(error);
  }
}

main();
