import { expect } from 'chai';
import getCompositeStatus from './getCompositeStatus';
import { HttpStatusCodes } from '../HttpStatusCodes';
import { HttpReasonPhrases } from '../HttpReasonPhrases';

describe('getCompositeStatus', function () {
    it('# Returns complete HTTP status string for a valid defined status code', function () {
        expect(getCompositeStatus(HttpStatusCodes.Ok)).to.equal(
            `${HttpStatusCodes.Ok} ${HttpReasonPhrases.Ok}`
        );
    });
    it('# Returns undefined for non-existent status code', function () {
        expect(getCompositeStatus(579)).to.equal(undefined);
    });
});
