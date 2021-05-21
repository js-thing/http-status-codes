import { expect } from 'chai';
import getReasonPhrase from './getReasonPhrase';
import { HttpStatusCodes } from '../HttpStatusCodes';
import { HttpReasonPhrases } from '../HttpReasonPhrases';

describe('helper functions', function () {
    describe('# getReasonPhrase(statusCode)', function () {
        it('should return the corresponding reason phrase for the input', function () {
            expect(getReasonPhrase(HttpStatusCodes.Ok)).to.equal(
                HttpReasonPhrases.Ok
            );
        });
        it('should return the undefined for codes that does not exist', function () {
            expect(getReasonPhrase(579)).to.equal(undefined);
        });
    });
});
