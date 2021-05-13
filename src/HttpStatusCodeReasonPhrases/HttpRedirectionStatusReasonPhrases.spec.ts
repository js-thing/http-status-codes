import HttpRedirectionStatusReasonPhrases from './HttpRedirectionStatusReasonPhrases';
import { expect } from 'chai';

describe('HttpRedirectionStatusReasonPhrases', () => {
    describe('#MultipleChoice', () => {
        it('status code should be equal to Multiple Choice', () => {
            expect(HttpRedirectionStatusReasonPhrases.MultipleChoice).to.equal(
                'Multiple Choice'
            );
        });
    });
    describe('#MovedPermanently', () => {
        it('status code should be equal to Moved Permanently', () => {
            expect(
                HttpRedirectionStatusReasonPhrases.MovedPermanently
            ).to.equal('Moved Permanently');
        });
    });
    describe('#Found', () => {
        it('status code should be equal to Found', () => {
            expect(HttpRedirectionStatusReasonPhrases.Found).to.equal('Found');
        });
    });
    describe('#SeeOther', () => {
        it('status code should be equal to See Other', () => {
            expect(HttpRedirectionStatusReasonPhrases.SeeOther).to.equal(
                'See Other'
            );
        });
    });
    describe('#NotModified', () => {
        it('status code should be equal to Not Modified', () => {
            expect(HttpRedirectionStatusReasonPhrases.NotModified).to.equal(
                'Not Modified'
            );
        });
    });
    describe('#UseProxy', () => {
        it('status code should be equal to Use Proxy', () => {
            expect(HttpRedirectionStatusReasonPhrases.UseProxy).to.equal(
                'Use Proxy'
            );
        });
    });
    describe('#Unused', () => {
        it('status code should be equal to unused', () => {
            expect(HttpRedirectionStatusReasonPhrases.Unused).to.equal(
                'unused'
            );
        });
    });
    describe('#TemporaryRedirect', () => {
        it('status code should be equal to Temporary Redirect', () => {
            expect(
                HttpRedirectionStatusReasonPhrases.TemporaryRedirect
            ).to.equal('Temporary Redirect');
        });
    });
    describe('#PermanentRedirect', () => {
        it('status code should be equal to Permanent Redirect', () => {
            expect(
                HttpRedirectionStatusReasonPhrases.PermanentRedirect
            ).to.equal('Permanent Redirect');
        });
    });
});
