import HttpSuccessReasonPhrases from './HttpSuccessReasonPhrases';
import { expect } from 'chai';

describe('HttpSuccessReasonPhrases', () => {
    describe('#Ok', () => {
        it('status code should be equal to OK', () => {
            expect(HttpSuccessReasonPhrases.Ok).to.equal('OK');
        });
    });
    describe('#Created', () => {
        it('status code should be equal to Created', () => {
            expect(HttpSuccessReasonPhrases.Created).to.equal('Created');
        });
    });
    describe('#Accepted', () => {
        it('status code should be equal to Accepted', () => {
            expect(HttpSuccessReasonPhrases.Accepted).to.equal(
                'Accepted'
            );
        });
    });
    describe('#NonAuthoritativeInformation', () => {
        it('status code should be equal to Non-Authoritative Information', () => {
            expect(
                HttpSuccessReasonPhrases.NonAuthoritativeInformation
            ).to.equal('Non-Authoritative Information');
        });
    });
    describe('#NoContent', () => {
        it('status code should be equal to No Content', () => {
            expect(HttpSuccessReasonPhrases.NoContent).to.equal(
                'No Content'
            );
        });
    });
    describe('#ResetContent', () => {
        it('status code should be equal to Reset Content', () => {
            expect(HttpSuccessReasonPhrases.ResetContent).to.equal(
                'Reset Content'
            );
        });
    });
    describe('#PartialContent', () => {
        it('status code should be equal to Partial Content', () => {
            expect(HttpSuccessReasonPhrases.PartialContent).to.equal(
                'Partial Content'
            );
        });
    });
    describe('#Multi', () => {
        it('status code should be equal to Multi-Status', () => {
            expect(HttpSuccessReasonPhrases.MultiStatus).to.equal(
                'Multi-Status'
            );
        });
    });
    describe('#AlreadyReported', () => {
        it('status code should be equal to Already Reported', () => {
            expect(HttpSuccessReasonPhrases.AlreadyReported).to.equal(
                'Already Reported'
            );
        });
    });
    describe('#IMUsed', () => {
        it('status code should be equal to IM Used', () => {
            expect(HttpSuccessReasonPhrases.IMUsed).to.equal('IM Used');
        });
    });
});
