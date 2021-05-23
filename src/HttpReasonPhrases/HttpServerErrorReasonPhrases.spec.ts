import { expect } from 'chai';
import HttpServerErrorReasonPhrases from './HttpServerErrorReasonPhrases';

describe('HttpServerErrorReasonPhrase', function () {
    it('# InternalServerError = "Internal Server Error"', function () {
        expect(HttpServerErrorReasonPhrases.InternalServerError).to.equal(
            'Internal Server Error'
        );
    });
    it('# NotImplemented = "Not Implemented"', function () {
        expect(HttpServerErrorReasonPhrases.NotImplemented).to.equal(
            'Not Implemented'
        );
    });
    it('# BadGateway = "Bad Gateway"', function () {
        expect(HttpServerErrorReasonPhrases.BadGateway).to.equal('Bad Gateway');
    });
    it('# ServiceUnavailable = "Service Unavailable"', function () {
        expect(HttpServerErrorReasonPhrases.ServiceUnavailable).to.equal(
            'Service Unavailable'
        );
    });
    it('# GatewayTimeout = "Gateway Timeout"', function () {
        expect(HttpServerErrorReasonPhrases.GatewayTimeout).to.equal(
            'Gateway Timeout'
        );
    });
    it('# HTTPVersionNotSupported = "HTTP Version Not Supported"', function () {
        expect(HttpServerErrorReasonPhrases.HTTPVersionNotSupported).to.equal(
            'HTTP Version Not Supported'
        );
    });
    it('# VariantAlsoNegotiates = "Variant Also Negotiates"', function () {
        expect(HttpServerErrorReasonPhrases.VariantAlsoNegotiates).to.equal(
            'Variant Also Negotiates'
        );
    });
    it('# InsufficientStorage = "Insufficient Storage"', function () {
        expect(HttpServerErrorReasonPhrases.InsufficientStorage).to.equal(
            'Insufficient Storage'
        );
    });
    it('# LoopDetected = "Loop Detected"', function () {
        expect(HttpServerErrorReasonPhrases.LoopDetected).to.equal(
            'Loop Detected'
        );
    });
    it('# NotExtended = "Not Extended"', function () {
        expect(HttpServerErrorReasonPhrases.NotExtended).to.equal(
            'Not Extended'
        );
    });
    it('# NetworkAuthenticationRequired = "Network Authentication Required"', function () {
        expect(
            HttpServerErrorReasonPhrases.NetworkAuthenticationRequired
        ).to.equal('Network Authentication Required');
    });
});
