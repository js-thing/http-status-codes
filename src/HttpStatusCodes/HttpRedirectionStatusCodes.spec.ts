import { expect } from 'chai';
import HttpRedirectionStatusCodes from './HttpRedirectionStatusCodes';

describe('HttpRedirectionStatusCodes', function () {
    describe('#MultipleChoice', function () {
        it('status code should be equal to 300', function () {
            expect(HttpRedirectionStatusCodes.MultipleChoice).to.equal(300);
        });
    });
    describe('#MovedPermanently', function () {
        it('status code should be equal to 301', function () {
            expect(HttpRedirectionStatusCodes.MovedPermanently).to.equal(301);
        });
    });
    describe('#Found', function () {
        it('status code should be equal to 302', function () {
            expect(HttpRedirectionStatusCodes.Found).to.equal(302);
        });
    });
    describe('#SeeOther', function () {
        it('status code should be equal to 303', function () {
            expect(HttpRedirectionStatusCodes.SeeOther).to.equal(303);
        });
    });
    describe('#NotModified', function () {
        it('status code should be equal to 304', function () {
            expect(HttpRedirectionStatusCodes.NotModified).to.equal(304);
        });
    });
    describe('#UseProxy', function () {
        it('status code should be equal to 305', function () {
            expect(HttpRedirectionStatusCodes.UseProxy).to.equal(305);
        });
    });
    describe('#Unused', function () {
        it('status code should be equal to 306', function () {
            expect(HttpRedirectionStatusCodes.Unused).to.equal(306);
        });
    });
    describe('#TemporaryRedirect', function () {
        it('status code should be equal to 307', function () {
            expect(HttpRedirectionStatusCodes.TemporaryRedirect).to.equal(307);
        });
    });
    describe('#PermanentRedirect', function () {
        it('status code should be equal to 308', function () {
            expect(HttpRedirectionStatusCodes.PermanentRedirect).to.equal(308);
        });
    });
});
