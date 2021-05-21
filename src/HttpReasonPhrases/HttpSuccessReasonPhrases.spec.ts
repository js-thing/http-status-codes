import { expect } from 'chai';
import HttpSuccessReasonPhrases from './HttpSuccessReasonPhrases';

describe('HttpSuccessReasonPhrases', function () {
    describe('#Ok', function () {
        it('status code should be equal to OK', function () {
            expect(HttpSuccessReasonPhrases.Ok).to.equal('OK');
        });
    });
    describe('#Created', function () {
        it('status code should be equal to Created', function () {
            expect(HttpSuccessReasonPhrases.Created).to.equal('Created');
        });
    });
    describe('#Accepted', function () {
        it('status code should be equal to Accepted', function () {
            expect(HttpSuccessReasonPhrases.Accepted).to.equal('Accepted');
        });
    });
    describe('#NonAuthoritativeInformation', function () {
        it('status code should be equal to Non-Authoritative Information', function () {
            expect(
                HttpSuccessReasonPhrases.NonAuthoritativeInformation
            ).to.equal('Non-Authoritative Information');
        });
    });
    describe('#NoContent', function () {
        it('status code should be equal to No Content', function () {
            expect(HttpSuccessReasonPhrases.NoContent).to.equal('No Content');
        });
    });
    describe('#ResetContent', function () {
        it('status code should be equal to Reset Content', function () {
            expect(HttpSuccessReasonPhrases.ResetContent).to.equal(
                'Reset Content'
            );
        });
    });
    describe('#PartialContent', function () {
        it('status code should be equal to Partial Content', function () {
            expect(HttpSuccessReasonPhrases.PartialContent).to.equal(
                'Partial Content'
            );
        });
    });
    describe('#Multi', function () {
        it('status code should be equal to Multi-Status', function () {
            expect(HttpSuccessReasonPhrases.MultiStatus).to.equal(
                'Multi-Status'
            );
        });
    });
    describe('#AlreadyReported', function () {
        it('status code should be equal to Already Reported', function () {
            expect(HttpSuccessReasonPhrases.AlreadyReported).to.equal(
                'Already Reported'
            );
        });
    });
    describe('#IMUsed', function () {
        it('status code should be equal to IM Used', function () {
            expect(HttpSuccessReasonPhrases.IMUsed).to.equal('IM Used');
        });
    });
});
