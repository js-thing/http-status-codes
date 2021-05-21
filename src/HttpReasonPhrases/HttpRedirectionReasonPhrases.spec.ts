import { expect } from 'chai';
import HttpRedirectionReasonPhrases from './HttpRedirectionReasonPhrases';

describe('HttpRedirectionReasonPhrases', function () {
    describe('#MultipleChoice', function () {
        it('status code should be equal to Multiple Choice', function () {
            expect(HttpRedirectionReasonPhrases.MultipleChoice).to.equal(
                'Multiple Choice'
            );
        });
    });
    describe('#MovedPermanently', function () {
        it('status code should be equal to Moved Permanently', function () {
            expect(HttpRedirectionReasonPhrases.MovedPermanently).to.equal(
                'Moved Permanently'
            );
        });
    });
    describe('#Found', function () {
        it('status code should be equal to Found', function () {
            expect(HttpRedirectionReasonPhrases.Found).to.equal('Found');
        });
    });
    describe('#SeeOther', function () {
        it('status code should be equal to See Other', function () {
            expect(HttpRedirectionReasonPhrases.SeeOther).to.equal('See Other');
        });
    });
    describe('#NotModified', function () {
        it('status code should be equal to Not Modified', function () {
            expect(HttpRedirectionReasonPhrases.NotModified).to.equal(
                'Not Modified'
            );
        });
    });
    describe('#UseProxy', function () {
        it('status code should be equal to Use Proxy', function () {
            expect(HttpRedirectionReasonPhrases.UseProxy).to.equal('Use Proxy');
        });
    });
    describe('#Unused', function () {
        it('status code should be equal to unused', function () {
            expect(HttpRedirectionReasonPhrases.Unused).to.equal('unused');
        });
    });
    describe('#TemporaryRedirect', function () {
        it('status code should be equal to Temporary Redirect', function () {
            expect(HttpRedirectionReasonPhrases.TemporaryRedirect).to.equal(
                'Temporary Redirect'
            );
        });
    });
    describe('#PermanentRedirect', function () {
        it('status code should be equal to Permanent Redirect', function () {
            expect(HttpRedirectionReasonPhrases.PermanentRedirect).to.equal(
                'Permanent Redirect'
            );
        });
    });
});
