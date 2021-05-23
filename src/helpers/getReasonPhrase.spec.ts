import { expect } from 'chai';
import getReasonPhrase from './getReasonPhrase';
import { HttpStatusCodes } from '../HttpStatusCodes';
import { HttpReasonPhrases } from '../HttpReasonPhrases';

describe('getReasonPhrase', function () {
    it('# Returns the corresponding reason phrase for a valid defined status code', function () {
        Object.entries(HttpStatusCodes).forEach((statusCodeKeyVal) => {
            if (typeof statusCodeKeyVal[1] === 'number') {
                expect(getReasonPhrase(statusCodeKeyVal[1])).to.equal(
                    (HttpReasonPhrases as { [key: string]: string })[
                        statusCodeKeyVal[0]
                    ]
                );
            }
        });
    });
    it('# Returns undefined for non-existent status code', function () {
        expect(getReasonPhrase(579)).to.equal(undefined);
    });
});
