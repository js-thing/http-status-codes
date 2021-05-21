import { HttpRedirectionStatusCodes } from '../HttpStatusCodes';
import { HttpRedirectionReasonPhrases } from '../HttpReasonPhrases';

/**
 * Checks whether the status code belongs to `HttpRedirectionStatusCodes` enum.
 * The range is all standard code between [300 - 399]
 *
 * To check the entire 3xx range use `is3xxRedirectionStatusCode(code: number)` instead.
 * @param statusCode - The integer status code. e.g. 100
 * @returns `true` if matches `false` otherwise
 */
export const isRedirectionStatusCode = (statusCode: number): boolean =>
    HttpRedirectionStatusCodes[statusCode] !== undefined;

/**
 * Checks whether the status code belongs to 3xx family of status codes.
 *
 * @param statusCode - The integer status code. e.g. 100
 * @returns `true` if matches `false` otherwise
 */
export const is3xxRedirectionStatusCode = (statusCode: number): boolean =>
    statusCode >= 300 && statusCode <= 399;

/**
 * Checks whether the input string belongs to `HttpRedirectionReasonPhrases` enum.
 *
 * The match is case sensitive
 *
 * @param reasonPhrase - The reason phrase. e.g. 'Ok'
 * @returns `true` if matches `false` otherwise
 */
export const isRedirectionReasonPhrase = (reasonPhrase: string): boolean =>
    (Object.values(HttpRedirectionReasonPhrases) as string[]).includes(
        reasonPhrase
    ) === true;

/**
 * Checks whether the input integer or string belongs to
 * `HttpRedirectionStatusCodes` or `HttpRedirectionReasonPhrases` enum.
 * For integer input, the range is all standard code between [300 - 399].
 * For string input, the match is case sensitive.
 *
 * To check the entire 3xx range use `is3xxRedirectionStatusCode(code: number)` instead.
 * @param status - e.g. 'Ok' or 200
 * @returns `true` if matches `false` otherwise
 */
export const isRedirectionStatus = (status: string | number): boolean =>
    isRedirectionStatusCode(status as number) ||
    isRedirectionReasonPhrase(status as string);

export default isRedirectionStatus;
