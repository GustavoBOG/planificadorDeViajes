import "dotenv/config";
import Amadeus from 'amadeus';



console.log('✅ Cargando Amadeus...');
console.log('🔑 API Key:', process.env.AMADEUS_API_KEY);
console.log('🔒 API Secret:', process.env.AMADEUS_API_SECRET);
console.log('🌍 Entorno:', process.env.NODE_ENV);


const amadeus = new Amadeus({
    clientId: process.env.AMADEUS_API_KEY,
    clientSecret: process.env.AMADEUS_API_SECRET,
    hostname: process.env.NODE_ENV === 'production' ? 'api.amadeus.com' : 'test.api.amadeus.com',// Cambia el hostname según el entorno
});

export default amadeus;