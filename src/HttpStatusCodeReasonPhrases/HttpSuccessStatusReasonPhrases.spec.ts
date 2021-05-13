import HttpSuccessStatusReasonPhrases from './HttpSuccessStatusReasonPhrases';
import { expect } from 'chai';

describe('HttpSuccessStatusReasonPhrases', () => {
    describe('#Ok', () => {
        it('status code should be equal to OK', () => {
            expect(HttpSuccessStatusReasonPhrases.Ok).to.equal('OK');
        });
    });
    describe('#Created', () => {
        it('status code should be equal to Created', () => {
            expect(HttpSuccessStatusReasonPhrases.Created).to.equal('Created');
        });
    });
    describe('#Accepted', () => {
        it('status code should be equal to Accepted', () => {
            expect(HttpSuccessStatusReasonPhrases.Accepted).to.equal(
                'Accepted'
            );
        });
    });
    describe('#NonAuthoritativeInformation', () => {
        it('status code should be equal to Non-Authoritative Information', () => {
            expect(
                HttpSuccessStatusReasonPhrases.NonAuthoritativeInformation
            ).to.equal('Non-Authoritative Information');
        });
    });
    describe('#NoContent', () => {
        it('status code should be equal to No Content', () => {
            expect(HttpSuccessStatusReasonPhrases.NoContent).to.equal(
                'No Content'
            );
        });
    });
    describe('#ResetContent', () => {
        it('status code should be equal to Reset Content', () => {
            expect(HttpSuccessStatusReasonPhrases.ResetContent).to.equal(
                'Reset Content'
            );
        });
    });
    describe('#PartialContent', () => {
        it('status code should be equal to Partial Content', () => {
            expect(HttpSuccessStatusReasonPhrases.PartialContent).to.equal(
                'Partial Content'
            );
        });
    });
    describe('#MultiStatus', () => {
        it('status code should be equal to Multi-Status', () => {
            expect(HttpSuccessStatusReasonPhrases.MultiStatus).to.equal(
                'Multi-Status'
            );
        });
    });
    describe('#AlreadyReported', () => {
        it('status code should be equal to Already Reported', () => {
            expect(HttpSuccessStatusReasonPhrases.AlreadyReported).to.equal(
                'Already Reported'
            );
        });
    });
    describe('#IMUsed', () => {
        it('status code should be equal to IM Used', () => {
            expect(HttpSuccessStatusReasonPhrases.IMUsed).to.equal('IM Used');
        });
    });
});
