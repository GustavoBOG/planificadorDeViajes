import "dotenv/config";
import Amadeus from 'amadeus';

const amadeus = new Amadeus({
    clientId: process.env.AMADEUS_API_KEY,
    clientSecret: process.env.AMADEUS_API_SECRET,
});

export default amadeus;



// import "dotenv/config";
// import Amadeus from 'amadeus';



// console.log('✅ Cargando Amadeus...');
// console.log('🔑 API Key:', process.env.AMADEUS_API_KEY);
// console.log('🔒 API Secret:', process.env.AMADEUS_API_SECRET);
// console.log('🌍 Entorno:', process.env.NODE_ENV);


// const amadeus = new Amadeus({
//     clientId: process.env.AMADEUS_API_KEY,
//     clientSecret: process.env.AMADEUS_API_SECRET,
//     hostname: process.env.NODE_ENV === 'production' ? 'api.amadeus.com' : 'test.api.amadeus.com',// Cambia el hostname según el entorno
// });

// export default amadeus;

//probando solucion de chat gpt
// import 'dotenv/config';
// import Amadeus from 'amadeus';

// console.log('✅ Cargando Amadeus');
// console.log('🔑 CLIENT_ID:', process.env.AMADEUS_CLIENT_ID);
// console.log('🔒 CLIENT_SECRET:', process.env.AMADEUS_CLIENT_SECRET);
// console.log('🌍 NODE_ENV:', process.env.NODE_ENV);
// console.log('🧪 USE_SANDBOX:', process.env.USE_SANDBOX);

// const useSandbox =
//   process.env.USE_SANDBOX === 'true' || process.env.NODE_ENV !== 'production';

// const amadeus = new Amadeus({
//   clientId: process.env.AMADEUS_CLIENT_ID,
//   clientSecret: process.env.AMADEUS_CLIENT_SECRET,
//   baseUrl: useSandbox
//     ? 'https://test.api.amadeus.com'
//     : 'https://api.amadeus.com',
// });


// export default amadeus;






