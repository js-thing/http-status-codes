import HttpRedirectionReasonPhrases from './HttpRedirectionReasonPhrases';
import { expect } from 'chai';

describe('HttpRedirectionReasonPhrases', () => {
    describe('#MultipleChoice', () => {
        it('status code should be equal to Multiple Choice', () => {
            expect(HttpRedirectionReasonPhrases.MultipleChoice).to.equal(
                'Multiple Choice'
            );
        });
    });
    describe('#MovedPermanently', () => {
        it('status code should be equal to Moved Permanently', () => {
            expect(
                HttpRedirectionReasonPhrases.MovedPermanently
            ).to.equal('Moved Permanently');
        });
    });
    describe('#Found', () => {
        it('status code should be equal to Found', () => {
            expect(HttpRedirectionReasonPhrases.Found).to.equal('Found');
        });
    });
    describe('#SeeOther', () => {
        it('status code should be equal to See Other', () => {
            expect(HttpRedirectionReasonPhrases.SeeOther).to.equal(
                'See Other'
            );
        });
    });
    describe('#NotModified', () => {
        it('status code should be equal to Not Modified', () => {
            expect(HttpRedirectionReasonPhrases.NotModified).to.equal(
                'Not Modified'
            );
        });
    });
    describe('#UseProxy', () => {
        it('status code should be equal to Use Proxy', () => {
            expect(HttpRedirectionReasonPhrases.UseProxy).to.equal(
                'Use Proxy'
            );
        });
    });
    describe('#Unused', () => {
        it('status code should be equal to unused', () => {
            expect(HttpRedirectionReasonPhrases.Unused).to.equal(
                'unused'
            );
        });
    });
    describe('#TemporaryRedirect', () => {
        it('status code should be equal to Temporary Redirect', () => {
            expect(
                HttpRedirectionReasonPhrases.TemporaryRedirect
            ).to.equal('Temporary Redirect');
        });
    });
    describe('#PermanentRedirect', () => {
        it('status code should be equal to Permanent Redirect', () => {
            expect(
                HttpRedirectionReasonPhrases.PermanentRedirect
            ).to.equal('Permanent Redirect');
        });
    });
});
