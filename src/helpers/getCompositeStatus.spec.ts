import getCompositeStatus from './getCompositeStatus';
import { expect } from 'chai';
import HttpStatusCodes from '../HttpStatusCodes';
import HttpReasonPhrases from '../HttpReasonPhrases';

describe('helper functions', () => {
    describe('# getReasonPhrase(statusCode)', () => {
        it('should return the corresponding reason phrase for the input', () => {
            expect(getCompositeStatus(HttpStatusCodes.Ok)).to.equal(
                `${HttpStatusCodes.Ok} ${HttpReasonPhrases.Ok}`
            );
        });
        it('should return the undefined for codes that does not exist', () => {
            expect(getCompositeStatus(579)).to.equal(undefined);
        });
    });
});
