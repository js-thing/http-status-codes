import getReasonPhrase from './getReasonPhrase';
import { expect } from 'chai';
import HttpStatusCodes from '../HttpStatusCodes';
import HttpStatusReasonPhrases from '../HttpStatusCodeReasonPhrases';

describe('helper functions', () => {
    describe('# getReasonPhrase(statusCode)', () => {
        it('should return the corresponding reason phrase for the input', () => {
            expect(getReasonPhrase(HttpStatusCodes.Ok)).to.equal(
                HttpStatusReasonPhrases.Ok
            );
        });
        it('should return the undefined for codes that does not exist', () => {
            expect(getReasonPhrase(579)).to.equal(undefined);
        });
    });
});
