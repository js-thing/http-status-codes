import { HttpServerErrorStatus } from '../HttpStatusCodes';
import { HttpServerErrorStatusReasonPhrase } from '../HttpStatusCodeReasonPhrases';

/**
 * Checks whether the status code belongs to `HttpServerErrorStatus` enum.
 * The range is all standard code between [500 - 599]
 *
 * To check the entire 5xx range use `is5xxServerErrorStatusCode(code: number)` instead.
 * @param statusCode - The integer status code. e.g. 100
 * @returns `true` if matches `false` otherwise
 */
export const isServerErrorStatusCode = (statusCode: number) =>
    HttpServerErrorStatus[statusCode] !== undefined;

/**
 * Checks whether the status code belongs to 5xx family of status codes.
 *
 * @param statusCode - The integer status code. e.g. 100
 * @returns `true` if matches `false` otherwise
 */
export const is5xxServerErrorStatusCode = (statusCode: number) =>
    statusCode >= 500 && statusCode <= 599;

/**
 * Checks whether the input string belongs to `HttpServerErrorStatusReasonPhrase` enum.
 *
 * The match is case sensitive
 *
 * @param reasonPhrase - The reason phrase. e.g. 'Ok'
 * @returns `true` if matches `false` otherwise
 */
export const isServerErrorStatusPhrase = (reasonPhrase: string) =>
    (<any>Object)
        .values(HttpServerErrorStatusReasonPhrase)
        .includes(reasonPhrase) === true;

/**
 * Checks whether the input integer or string belongs to
 * `HttpServerErrorStatus` or `HttpServerErrorStatusReasonPhrase` enum.
 * For integer input, the range is all standard code between [500 - 599].
 * For string input, the match is case sensitive.
 *
 * To check the entire 5xx range use `is5xxServerErrorStatusCode(code: number)` instead.
 * @param status - e.g. 'Ok' or 200
 * @returns `true` if matches `false` otherwise
 */
export const isServerErrorStatus = (status: string | number) =>
    isServerErrorStatusCode(status as number) ||
    isServerErrorStatusPhrase(status as string);

export default isServerErrorStatus;
