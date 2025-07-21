import Amadeus from 'amadeus';
import amadeus from './amadeusApiKey.js';

const buildResponse = (response) => {
  console.log(response);
  const locations = response.filter(
    (location) => location.type === 'location' && location.subType === 'AIRPORT'
  );

  console.log(locations);

  const responseData = locations.map((airport) => ({
    name: airport.name,
    detailedName: airport.detailedName,
    city: airport.detailedName.split('/')[0],
    id: airport.id,
    iataCode: airport.iataCode,
    latitude: airport.geoCode.latitude,
    longitude: airport.geoCode.longitude,
  }));

  console.log(responseData);
  return responseData;
};

const cityAndAirportSearch = async (req, res, next) => {
  try {
    // const parameter = req.params.parameter;
    const parameter = req.params.query;

    const response = await amadeus.referenceData.locations.get({
      keyword: parameter,
      subType: Amadeus.location.any,
    });

    const responseData = buildResponse(response.result.data);

    // Enviamos la respuesta
    res.send(responseData);
    // res.send(response.result.data);
  } catch (error) {
    // ver si este catch esté imprimiendo el error completo

    
    console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.error('ERROR EN cityAndAirportSearch (Amadeus API): ', error);
    console.error('Stack Trace: ', error.stack);
    console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    next(error);
  }
};

export default cityAndAirportSearch;
