import HttpStatusCodes from '../HttpStatusCodes';
import HttpReasonPhrases from '../HttpReasonPhrases';

/**
 * Get the reason phrase for a given status code
 *
 * @param statusCode - e.g. 200
 * @returns - The corresponding reason phrase as `string` for the given input `undefined` otherwise
 */
export default (statusCode: number) =>
    (HttpReasonPhrases as { [key: string]: string })[
        HttpStatusCodes[statusCode]
];
