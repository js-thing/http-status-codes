import HttpStatusCodes, { HttpSuccessStatus } from '../lib';

const okStatusCode = HttpStatusCodes.Ok;
console.log(`"${okStatusCode}" - should equals 200`);

let anotherOkStatusCode: HttpStatusCodes = HttpSuccessStatus.Ok;
console.log(`"${anotherOkStatusCode}" - should equals 200`);
