import HttpRedirectionStatusCodes from './HttpRedirectionStatusCodes';
import { expect } from 'chai';

describe('HttpRedirectionStatusCodes', () => {
    describe('#MultipleChoice', () => {
        it('status code should be equal to 300', () => {
            expect(HttpRedirectionStatusCodes.MultipleChoice).to.equal(300);
        });
    });
    describe('#MovedPermanently', () => {
        it('status code should be equal to 301', () => {
            expect(HttpRedirectionStatusCodes.MovedPermanently).to.equal(301);
        });
    });
    describe('#Found', () => {
        it('status code should be equal to 302', () => {
            expect(HttpRedirectionStatusCodes.Found).to.equal(302);
        });
    });
    describe('#SeeOther', () => {
        it('status code should be equal to 303', () => {
            expect(HttpRedirectionStatusCodes.SeeOther).to.equal(303);
        });
    });
    describe('#NotModified', () => {
        it('status code should be equal to 304', () => {
            expect(HttpRedirectionStatusCodes.NotModified).to.equal(304);
        });
    });
    describe('#UseProxy', () => {
        it('status code should be equal to 305', () => {
            expect(HttpRedirectionStatusCodes.UseProxy).to.equal(305);
        });
    });
    describe('#Unused', () => {
        it('status code should be equal to 306', () => {
            expect(HttpRedirectionStatusCodes.Unused).to.equal(306);
        });
    });
    describe('#TemporaryRedirect', () => {
        it('status code should be equal to 307', () => {
            expect(HttpRedirectionStatusCodes.TemporaryRedirect).to.equal(307);
        });
    });
    describe('#PermanentRedirect', () => {
        it('status code should be equal to 308', () => {
            expect(HttpRedirectionStatusCodes.PermanentRedirect).to.equal(308);
        });
    });
});
