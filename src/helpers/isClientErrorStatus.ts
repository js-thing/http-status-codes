import { HttpClientErrorStatus } from '../HttpStatusCodes';
import { HttpClientErrorStatusReasonPhrases } from '../HttpStatusCodeReasonPhrases';

/**
 * Checks whether the status code belongs to `HttpClientErrorStatus` enum.
 * The range is all standard code between [400 - 499]
 *
 * To check the entire 4xx range use `is4xxClientErrorStatusCode(code: number)` instead.
 * @param statusCode - The integer status code. e.g. 100
 * @returns `true` if matches `false` otherwise
 */
export const isClientErrorStatusCode = (statusCode: number) =>
    HttpClientErrorStatus[statusCode] !== undefined;

/**
 * Checks whether the status code belongs to 4xx family of status codes.
 *
 * @param statusCode - The integer status code. e.g. 100
 * @returns `true` if matches `false` otherwise
 */
export const is4xxClientErrorStatusCode = (statusCode: number) =>
    statusCode >= 400 && statusCode <= 499;

/**
 * Checks whether the input string belongs to `HttpClientErrorStatusReasonPhrases` enum.
 *
 * The match is case sensitive
 *
 * @param reasonPhrase - The reason phrase. e.g. 'Ok'
 * @returns `true` if matches `false` otherwise
 */
export const isClientErrorStatusPhrase = (reasonPhrase: string) =>
    (<any>Object)
        .values(HttpClientErrorStatusReasonPhrases)
        .includes(reasonPhrase) === true;

/**
 * Checks whether the input integer or string belongs to
 * `HttpClientErrorStatus` or `HttpClientErrorStatusReasonPhrases` enum.
 * For integer input, the range is all standard code between [400 - 499].
 * For string input, the match is case sensitive.
 *
 * To check the entire 4xx range use `is4xxClientErrorStatusCode(code: number)` instead.
 * @param status - e.g. 'Ok' or 200
 * @returns `true` if matches `false` otherwise
 */
export const isClientErrorStatus = (status: string | number) =>
    isClientErrorStatusCode(status as number) ||
    isClientErrorStatusPhrase(status as string);

export default isClientErrorStatus;
