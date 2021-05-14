import { HttpInformationStatus } from '../HttpStatusCodes';
import { HttpInformationStatusReasonPhrases } from '../HttpStatusCodeReasonPhrases';

/**
 * Checks whether the status code belongs to `HttpInformationStatus` enum.
 * The range is all standard code between [100 - 199]
 *
 * To check the entire 1xx range use `is1xxInformationStatusCode(code: number)` instead.
 * @param statusCode - The integer status code. e.g. 100
 * @returns `true` if matches `false` otherwise
 */
export const isInformationStatusCode = (statusCode: number) =>
    HttpInformationStatus[statusCode] !== undefined;

/**
 * Checks whether the status code belongs to 1xx family of status codes.
 *
 * @param statusCode - The integer status code. e.g. 100
 * @returns `true` if matches `false` otherwise
 */
export const is1xxInformationStatusCode = (statusCode: number) =>
    statusCode >= 100 && statusCode <= 199;

/**
 * Checks whether the input string belongs to `HttpInformationStatusReasonPhrases` enum.
 *
 * The match is case sensitive
 *
 * @param reasonPhrase - The reason phrase. e.g. 'Ok'
 * @returns `true` if matches `false` otherwise
 */
export const isInformationStatusPhrase = (reasonPhrase: string) =>
    (<any>Object)
        .values(HttpInformationStatusReasonPhrases)
        .includes(reasonPhrase) === true;

/**
 * Checks whether the input integer or string belongs to
 * `HttpInformationStatus` or `HttpInformationStatusReasonPhrases` enum.
 * For integer input, the range is all standard code between [100 - 199].
 * For string input, the match is case sensitive.
 *
 * To check the entire 1xx range use `is1xxInformationStatusCode(code: number)` instead.
 * @param status - e.g. 'Ok' or 200
 * @returns `true` if matches `false` otherwise
 */
export const isInformationStatus = (status: string | number) =>
    isInformationStatusCode(status as number) ||
    isInformationStatusPhrase(status as string);

export default isInformationStatus;