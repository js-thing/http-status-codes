import { HttpRedirectionStatus } from '../HttpStatusCodes';
import { HttpRedirectionStatusReasonPhrases } from '../HttpStatusCodeReasonPhrases';

/**
 * Checks whether the status code belongs to `HttpRedirectionStatus` enum.
 * The range is all standard code between [300 - 399]
 *
 * To check the entire 3xx range use `is3xxRedirectionStatusCode(code: number)` instead.
 * @param statusCode - The integer status code. e.g. 100
 * @returns `true` if matches `false` otherwise
 */
export const isRedirectionStatusCode = (statusCode: number) =>
    HttpRedirectionStatus[statusCode] !== undefined;

/**
 * Checks whether the status code belongs to 3xx family of status codes.
 *
 * @param statusCode - The integer status code. e.g. 100
 * @returns `true` if matches `false` otherwise
 */
export const is3xxRedirectionStatusCode = (statusCode: number) =>
    statusCode >= 300 && statusCode <= 399;

/**
 * Checks whether the input string belongs to `HttpRedirectionStatusReasonPhrases` enum.
 *
 * The match is case sensitive
 *
 * @param reasonPhrase - The reason phrase. e.g. 'Ok'
 * @returns `true` if matches `false` otherwise
 */
export const isRedirectionStatusPhrase = (reasonPhrase: string) =>
    (<any>Object)
        .values(HttpRedirectionStatusReasonPhrases)
        .includes(reasonPhrase) === true;

/**
 * Checks whether the input integer or string belongs to
 * `HttpRedirectionStatus` or `HttpRedirectionStatusReasonPhrases` enum.
 * For integer input, the range is all standard code between [300 - 399].
 * For string input, the match is case sensitive.
 *
 * To check the entire 3xx range use `is3xxRedirectionStatusCode(code: number)` instead.
 * @param status - e.g. 'Ok' or 200
 * @returns `true` if matches `false` otherwise
 */
export const isRedirectionStatus = (status: string | number) =>
    isRedirectionStatusCode(status as number) ||
    isRedirectionStatusPhrase(status as string);

export default isRedirectionStatus;
