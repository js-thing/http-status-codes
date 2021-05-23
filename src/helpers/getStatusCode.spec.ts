import { expect } from 'chai';
import getStatusCode from './getStatusCode';
import { HttpStatusCodes } from '../HttpStatusCodes';
import { HttpReasonPhrases } from '../HttpReasonPhrases';

describe('getStatusCode', function () {
    it('# Returns the corresponding status code for a valid defined reason phrase', function () {
        Object.entries(HttpReasonPhrases).forEach((reasonPhraseKeyVal) => {
            expect(getStatusCode(reasonPhraseKeyVal[1])).to.equal(
                (HttpStatusCodes as { [key: string]: number | string })[
                    reasonPhraseKeyVal[0]
                ]
            );
            expect(
                getStatusCode(reasonPhraseKeyVal[1].toUpperCase(), true)
            ).to.equal(
                (HttpStatusCodes as { [key: string]: number | string })[
                    reasonPhraseKeyVal[0]
                ]
            );
        });
    });
    it('# Returns undefined for non-existent reason phrase', function () {
        expect(getStatusCode('')).to.equal(undefined);
        expect(getStatusCode('hello')).to.equal(undefined);
    });
});
