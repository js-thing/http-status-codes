import HttpInformationStatus from './HttpInformationStatus';
import HttpSuccessStatus from './HttpSuccessStatus';
import HttpRedirectionStatus from './HttpRedirectionStatus';
import HttpClientErrorStatus from './HttpClientErrorStatus';
import HttpServerErrorStatus from './HttpServerErrorStatus';

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
// tslint:disable-next-line:variable-name
export const HttpStatusCodes = {
  ...HttpInformationStatus,
  ...HttpSuccessStatus,
  ...HttpRedirectionStatus,
  ...HttpClientErrorStatus,
  ...HttpServerErrorStatus,
};

/**
 * The type for HttpStatusCodes
 */
export type HttpStatusCodes =
    | HttpInformationStatus
    | HttpSuccessStatus
    | HttpRedirectionStatus
    | HttpClientErrorStatus
    | HttpServerErrorStatus;
