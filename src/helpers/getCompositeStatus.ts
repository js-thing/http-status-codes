import HttpStatusCodes from '../HttpStatusCodes';
import getReasonPhrase from './getReasonPhrase';

/**
 * Get the complete HTTP Status with code and reason phrase for a given status code
 *
 * @param statusCode - e.g. 200
 * @returns - `string` in `[StatusCode] [ReasonPhrase]` format
 */
export default (statusCode: number) =>
    HttpStatusCodes[statusCode]
        ? `${statusCode} ${getReasonPhrase(statusCode)}`
        : undefined;
