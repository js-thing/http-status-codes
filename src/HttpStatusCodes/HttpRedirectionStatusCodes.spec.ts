import { expect } from 'chai';
import HttpRedirectionStatusCodes from './HttpRedirectionStatusCodes';

describe('HttpRedirectionStatusCodes', function () {
    it('# MultipleChoice = 300', function () {
        expect(HttpRedirectionStatusCodes.MultipleChoice).to.equal(300);
    });
    it('# MovedPermanently = 301', function () {
        expect(HttpRedirectionStatusCodes.MovedPermanently).to.equal(301);
    });
    it('# Found = 302', function () {
        expect(HttpRedirectionStatusCodes.Found).to.equal(302);
    });
    it('# SeeOther = 303', function () {
        expect(HttpRedirectionStatusCodes.SeeOther).to.equal(303);
    });
    it('# NotModified = 304', function () {
        expect(HttpRedirectionStatusCodes.NotModified).to.equal(304);
    });
    it('# UseProxy = 305', function () {
        expect(HttpRedirectionStatusCodes.UseProxy).to.equal(305);
    });
    it('# Unused = 306', function () {
        expect(HttpRedirectionStatusCodes.Unused).to.equal(306);
    });
    it('# TemporaryRedirect = 307', function () {
        expect(HttpRedirectionStatusCodes.TemporaryRedirect).to.equal(307);
    });
    it('# PermanentRedirect = 308', function () {
        expect(HttpRedirectionStatusCodes.PermanentRedirect).to.equal(308);
    });
});
