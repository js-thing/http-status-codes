import HttpInformationReasonPhrases from './HttpInformationReasonPhrases';
import HttpSuccessReasonPhrases from './HttpSuccessReasonPhrases';
import HttpRedirectionReasonPhrases from './HttpRedirectionReasonPhrases';
import HttpClientErrorReasonPhrases from './HttpClientErrorReasonPhrases';
import HttpServerErrorReasonPhrases from './HttpServerErrorReasonPhrases';

/**
 * Enum for all HTTP status reason phrases
 *
 * HTTP response status codes indicate whether a specific
 * HTTP request has been successfully completed.
 *
 * This enum is a combined enum of all HTTP status reason phrases
 *
 * @readonly
 * @enum {string}
 */
export const HttpReasonPhrases = {
    ...HttpInformationReasonPhrases,
    ...HttpSuccessReasonPhrases,
    ...HttpRedirectionReasonPhrases,
    ...HttpClientErrorReasonPhrases,
    ...HttpServerErrorReasonPhrases,
};

/**
 * The type for HttpReasonPhrases
 */
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type HttpReasonPhrases =
    | HttpInformationReasonPhrases
    | HttpSuccessReasonPhrases
    | HttpRedirectionReasonPhrases
    | HttpClientErrorReasonPhrases
    | HttpServerErrorReasonPhrases;
