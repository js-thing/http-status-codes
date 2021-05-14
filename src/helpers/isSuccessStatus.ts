import { HttpSuccessStatus } from '../HttpStatusCodes';
import { HttpSuccessStatusReasonPhrases } from '../HttpStatusCodeReasonPhrases';

/**
 * Checks whether the status code belongs to `HttpSuccessStatus` enum.
 * The range is all standard code between [200 - 299]
 *
 * To check the entire 2xx range use `is2xxSuccessStatusCode(code: number)` instead.
 * @param statusCode - The integer status code. e.g. 100
 * @returns `true` if matches `false` otherwise
 */
export const isSuccessStatusCode = (statusCode: number) =>
    HttpSuccessStatus[statusCode] !== undefined;

/**
 * Checks whether the status code belongs to 2xx family of status codes.
 *
 * @param statusCode - The integer status code. e.g. 100
 * @returns `true` if matches `false` otherwise
 */
export const is2xxSuccessStatusCode = (statusCode: number) =>
    statusCode >= 200 && statusCode <= 299;

/**
 * Checks whether the input string belongs to `HttpSuccessStatusReasonPhrases` enum.
 *
 * The match is case sensitive
 *
 * @param reasonPhrase - The reason phrase. e.g. 'Ok'
 * @returns `true` if matches `false` otherwise
 */
export const isSuccessStatusPhrase = (reasonPhrase: string) =>
    (<any>Object)
        .values(HttpSuccessStatusReasonPhrases)
        .includes(reasonPhrase) === true;

/**
 * Checks whether the input integer or string belongs to
 * `HttpSuccessStatus` or `HttpSuccessStatusReasonPhrases` enum.
 * For integer input, the range is all standard code between [200 - 299].
 * For string input, the match is case sensitive.
 *
 * To check the entire 2xx range use `is2xxSuccessStatusCode(code: number)` instead.
 * @param status - e.g. 'Ok' or 200
 * @returns `true` if matches `false` otherwise
 */
export const isSuccessStatus = (status: string | number) =>
    isSuccessStatusCode(status as number) ||
    isSuccessStatusPhrase(status as string);

export default isSuccessStatus;
