import { expect } from 'chai';
import getReasonPhrase from './getReasonPhrase';
import { HttpStatusCodes } from '../HttpStatusCodes';
import { HttpReasonPhrases } from '../HttpReasonPhrases';

describe('getReasonPhrase', function () {
    it('# Returns the corresponding reason phrase for a valid defined status code', function () {
        expect(getReasonPhrase(HttpStatusCodes.Ok)).to.equal(
            HttpReasonPhrases.Ok
        );
    });
    it('# Returns undefined for non-existent status code', function () {
        expect(getReasonPhrase(579)).to.equal(undefined);
    });
});
