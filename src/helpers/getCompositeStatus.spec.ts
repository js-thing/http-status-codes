import { expect } from 'chai';
import getCompositeStatus from './getCompositeStatus';
import { HttpStatusCodes } from '../HttpStatusCodes';
import { HttpReasonPhrases } from '../HttpReasonPhrases';

describe('helper functions', function () {
    describe('# getReasonPhrase(statusCode)', function () {
        it('should return the corresponding reason phrase for the input', function () {
            expect(getCompositeStatus(HttpStatusCodes.Ok)).to.equal(
                `${HttpStatusCodes.Ok} ${HttpReasonPhrases.Ok}`
            );
        });
        it('should return the undefined for codes that does not exist', function () {
            expect(getCompositeStatus(579)).to.equal(undefined);
        });
    });
});
