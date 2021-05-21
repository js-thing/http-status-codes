import HttpInformationStatusCodes from './HttpInformationStatusCodes';
import HttpSuccessStatusCodes from './HttpSuccessStatusCodes';
import HttpRedirectionStatusCodes from './HttpRedirectionStatusCodes';
import HttpClientErrorStatusCodes from './HttpClientErrorStatusCodes';
import HttpServerErrorStatusCodes from './HttpServerErrorStatusCodes';

/**
 * Enum for all HTTP status codes
 *
 * HTTP response status codes indicate whether a specific
 * HTTP request has been successfully completed.
 *
 * This enum is a combined enum of all HTTP status codes
 *
 * @readonly
 * @enum {number}
 */
export const HttpStatusCodes = {
    ...HttpInformationStatusCodes,
    ...HttpSuccessStatusCodes,
    ...HttpRedirectionStatusCodes,
    ...HttpClientErrorStatusCodes,
    ...HttpServerErrorStatusCodes,
};

/**
 * The type for HttpStatusCodes
 */
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type HttpStatusCodes =
    | HttpInformationStatusCodes
    | HttpSuccessStatusCodes
    | HttpRedirectionStatusCodes
    | HttpClientErrorStatusCodes
    | HttpServerErrorStatusCodes;
