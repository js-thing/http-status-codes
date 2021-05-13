const HttpStatusCodes = require('../lib').default;

const okStatusCode = HttpStatusCodes.Ok;
console.log(`"${okStatusCode}" - should equals 200`);
