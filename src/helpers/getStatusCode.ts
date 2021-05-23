import { HttpStatusCodes } from '../HttpStatusCodes';
import { HttpReasonPhrases } from '../HttpReasonPhrases';

/**
 * Get the status code for a given reason phrase.
 * Optionally pass a second parameter to ignore case.
 *
 * @param reasonPhrase - e.g. OK
 * @param ignoreCase - ignore case while comparing, default: false
 * @returns - The corresponding status code as `number` for the given input `undefined` otherwise
 */
export default (
    reasonPhrase: string,
    ignoreCase = false
): number | undefined => {
    if (!reasonPhrase) {
        return undefined;
    }
    const foundReasonKeyVal = Object.entries(
        HttpReasonPhrases as { [key: string]: string }
    ).find((reasonKeyVal) => {
        if (ignoreCase) {
            return reasonKeyVal[1].toLowerCase() === reasonPhrase.toLowerCase();
        }
        return reasonKeyVal[1] === reasonPhrase;
    });
    if (!foundReasonKeyVal) {
        return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return ((<any>HttpStatusCodes) as { [key: string]: number })[
        foundReasonKeyVal[0]
    ];
};
