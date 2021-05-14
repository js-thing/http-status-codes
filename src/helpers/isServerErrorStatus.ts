import { HttpServerErrorStatusCodes } from '../HttpStatusCodes';
import { HttpServerErrorReasonPhrases } from '../HttpReasonPhrases';

/**
 * Checks whether the status code belongs to `HttpServerErrorStatusCodes` enum.
 * The range is all standard code between [500 - 599]
 *
 * To check the entire 5xx range use `is5xxServerErrorStatusCode(code: number)` instead.
 * @param statusCode - The integer status code. e.g. 100
 * @returns `true` if matches `false` otherwise
 */
export const isServerErrorStatusCode = (statusCode: number) =>
    HttpServerErrorStatusCodes[statusCode] !== undefined;

/**
 * Checks whether the status code belongs to 5xx family of status codes.
 *
 * @param statusCode - The integer status code. e.g. 100
 * @returns `true` if matches `false` otherwise
 */
export const is5xxServerErrorStatusCode = (statusCode: number) =>
    statusCode >= 500 && statusCode <= 599;

/**
 * Checks whether the input string belongs to `HttpServerErrorReasonPhrases` enum.
 *
 * The match is case sensitive
 *
 * @param reasonPhrase - The reason phrase. e.g. 'Ok'
 * @returns `true` if matches `false` otherwise
 */
export const isServerErrorReasonPhrase = (reasonPhrase: string) =>
    (<any>Object)
        .values(HttpServerErrorReasonPhrases)
        .includes(reasonPhrase) === true;

/**
 * Checks whether the input integer or string belongs to
 * `HttpServerErrorStatusCodes` or `HttpServerErrorReasonPhrases` enum.
 * For integer input, the range is all standard code between [500 - 599].
 * For string input, the match is case sensitive.
 *
 * To check the entire 5xx range use `is5xxServerErrorStatusCode(code: number)` instead.
 * @param status - e.g. 'Ok' or 200
 * @returns `true` if matches `false` otherwise
 */
export const isServerErrorStatus = (status: string | number) =>
    isServerErrorStatusCode(status as number) ||
    isServerErrorReasonPhrase(status as string);

export default isServerErrorStatus;
