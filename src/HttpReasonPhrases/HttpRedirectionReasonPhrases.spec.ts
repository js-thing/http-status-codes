import { expect } from 'chai';
import HttpRedirectionReasonPhrases from './HttpRedirectionReasonPhrases';

describe('HttpRedirectionReasonPhrases', function () {
    it('# MultipleChoice = "Multiple Choice"', function () {
        expect(HttpRedirectionReasonPhrases.MultipleChoice).to.equal(
            'Multiple Choice'
        );
    });
    it('# MovedPermanently = "Moved Permanently"', function () {
        expect(HttpRedirectionReasonPhrases.MovedPermanently).to.equal(
            'Moved Permanently'
        );
    });
    it('# Found = "Found"', function () {
        expect(HttpRedirectionReasonPhrases.Found).to.equal('Found');
    });
    it('# SeeOther = "See Other"', function () {
        expect(HttpRedirectionReasonPhrases.SeeOther).to.equal('See Other');
    });
    it('# NotModified = "Not Modified"', function () {
        expect(HttpRedirectionReasonPhrases.NotModified).to.equal(
            'Not Modified'
        );
    });
    it('# UseProxy = "Use Proxy"', function () {
        expect(HttpRedirectionReasonPhrases.UseProxy).to.equal('Use Proxy');
    });
    it('# Unused = "unused"', function () {
        expect(HttpRedirectionReasonPhrases.Unused).to.equal('unused');
    });
    it('# TemporaryRedirect = "Temporary Redirect"', function () {
        expect(HttpRedirectionReasonPhrases.TemporaryRedirect).to.equal(
            'Temporary Redirect'
        );
    });
    it('# PermanentRedirect = "Permanent Redirect"', function () {
        expect(HttpRedirectionReasonPhrases.PermanentRedirect).to.equal(
            'Permanent Redirect'
        );
    });
});
