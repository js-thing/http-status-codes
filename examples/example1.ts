import { HttpStatus, HttpSuccessStatus } from '../lib';

const okStatusCode = HttpStatus.Ok;
console.log(`"${okStatusCode}" - should equals 200`);

let anotherOkStatusCode: HttpStatus = HttpSuccessStatus.Ok;
console.log(`"${anotherOkStatusCode}" - should equals 200`);
