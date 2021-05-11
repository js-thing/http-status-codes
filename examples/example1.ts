import HttpStatusCodes, { HttpSuccessStatus } from '../src';

const okStatusCode = HttpStatusCodes.Ok;
console.log(`"${okStatusCode}" - should equals 200`);

let anotherOkStatusCode: HttpStatusCodes = HttpSuccessStatus.Ok;
console.log(`"${anotherOkStatusCode}" - should equals 200`);
