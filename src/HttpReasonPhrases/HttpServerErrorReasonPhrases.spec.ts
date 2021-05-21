import { expect } from 'chai';
import HttpServerErrorReasonPhrases from './HttpServerErrorReasonPhrases';

describe('HttpServerErrorReasonPhrase', function () {
    describe('#InternalServerError', function () {
        it('status code should be equal to Internal Server Error', function () {
            expect(HttpServerErrorReasonPhrases.InternalServerError).to.equal(
                'Internal Server Error'
            );
        });
    });
    describe('#NotImplemented', function () {
        it('status code should be equal to Not Implemented', function () {
            expect(HttpServerErrorReasonPhrases.NotImplemented).to.equal(
                'Not Implemented'
            );
        });
    });
    describe('#BadGateway', function () {
        it('status code should be equal to Bad Gateway', function () {
            expect(HttpServerErrorReasonPhrases.BadGateway).to.equal(
                'Bad Gateway'
            );
        });
    });
    describe('#ServiceUnavailable', function () {
        it('status code should be equal to Service Unavailable', function () {
            expect(HttpServerErrorReasonPhrases.ServiceUnavailable).to.equal(
                'Service Unavailable'
            );
        });
    });
    describe('#GatewayTimeout', function () {
        it('status code should be equal to Gateway Timeout', function () {
            expect(HttpServerErrorReasonPhrases.GatewayTimeout).to.equal(
                'Gateway Timeout'
            );
        });
    });
    describe('#HTTPVersionNotSupported', function () {
        it('status code should be equal to HTTP Version Not Supported', function () {
            expect(
                HttpServerErrorReasonPhrases.HTTPVersionNotSupported
            ).to.equal('HTTP Version Not Supported');
        });
    });
    describe('#VariantAlsoNegotiates', function () {
        it('status code should be equal to Variant Also Negotiates', function () {
            expect(HttpServerErrorReasonPhrases.VariantAlsoNegotiates).to.equal(
                'Variant Also Negotiates'
            );
        });
    });
    describe('#InsufficientStorage', function () {
        it('status code should be equal to Insufficient Storage', function () {
            expect(HttpServerErrorReasonPhrases.InsufficientStorage).to.equal(
                'Insufficient Storage'
            );
        });
    });
    describe('#LoopDetected', function () {
        it('status code should be equal to Loop Detected', function () {
            expect(HttpServerErrorReasonPhrases.LoopDetected).to.equal(
                'Loop Detected'
            );
        });
    });
    describe('#NotExtended', function () {
        it('status code should be equal to Not Extended', function () {
            expect(HttpServerErrorReasonPhrases.NotExtended).to.equal(
                'Not Extended'
            );
        });
    });
    describe('#NetworkAuthenticationRequired', function () {
        it('status code should be equal to Network Authentication Required', function () {
            expect(
                HttpServerErrorReasonPhrases.NetworkAuthenticationRequired
            ).to.equal('Network Authentication Required');
        });
    });
});
