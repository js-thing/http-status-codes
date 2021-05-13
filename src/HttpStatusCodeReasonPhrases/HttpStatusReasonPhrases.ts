import HttpInformationStatusReasonPhrases from './HttpInformationStatusReasonPhrases';
import HttpSuccessStatusReasonPhrases from './HttpSuccessStatusReasonPhrases';
import HttpRedirectionStatusReasonPhrases from './HttpRedirectionStatusReasonPhrases';
import HttpClientErrorStatusReasonPhrases from './HttpClientErrorStatusReasonPhrases';
import HttpServerErrorStatusReasonPhrase from './HttpServerErrorStatusReasonPhrase';

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
// tslint:disable-next-line:variable-name
export const HttpStatusReasonPhrases = {
  ...HttpInformationStatusReasonPhrases,
  ...HttpSuccessStatusReasonPhrases,
  ...HttpRedirectionStatusReasonPhrases,
  ...HttpClientErrorStatusReasonPhrases,
  ...HttpServerErrorStatusReasonPhrase,
};

/**
 * The type for HttpStatusReasonPhrases
 */
export type HttpStatusReasonPhrases =
    | HttpInformationStatusReasonPhrases
    | HttpSuccessStatusReasonPhrases
    | HttpRedirectionStatusReasonPhrases
    | HttpClientErrorStatusReasonPhrases
    | HttpServerErrorStatusReasonPhrase;
