import HttpServerErrorReasonPhrases from './HttpServerErrorReasonPhrases';
import { expect } from 'chai';

describe('HttpServerErrorReasonPhrase', () => {
    describe('#InternalServerError', () => {
        it('status code should be equal to Internal Server Error', () => {
            expect(
                HttpServerErrorReasonPhrases.InternalServerError
            ).to.equal('Internal Server Error');
        });
    });
    describe('#NotImplemented', () => {
        it('status code should be equal to Not Implemented', () => {
            expect(HttpServerErrorReasonPhrases.NotImplemented).to.equal(
                'Not Implemented'
            );
        });
    });
    describe('#BadGateway', () => {
        it('status code should be equal to Bad Gateway', () => {
            expect(HttpServerErrorReasonPhrases.BadGateway).to.equal(
                'Bad Gateway'
            );
        });
    });
    describe('#ServiceUnavailable', () => {
        it('status code should be equal to Service Unavailable', () => {
            expect(
                HttpServerErrorReasonPhrases.ServiceUnavailable
            ).to.equal('Service Unavailable');
        });
    });
    describe('#GatewayTimeout', () => {
        it('status code should be equal to Gateway Timeout', () => {
            expect(HttpServerErrorReasonPhrases.GatewayTimeout).to.equal(
                'Gateway Timeout'
            );
        });
    });
    describe('#HTTPVersionNotSupported', () => {
        it('status code should be equal to HTTP Version Not Supported', () => {
            expect(
                HttpServerErrorReasonPhrases.HTTPVersionNotSupported
            ).to.equal('HTTP Version Not Supported');
        });
    });
    describe('#VariantAlsoNegotiates', () => {
        it('status code should be equal to Variant Also Negotiates', () => {
            expect(
                HttpServerErrorReasonPhrases.VariantAlsoNegotiates
            ).to.equal('Variant Also Negotiates');
        });
    });
    describe('#InsufficientStorage', () => {
        it('status code should be equal to Insufficient Storage', () => {
            expect(
                HttpServerErrorReasonPhrases.InsufficientStorage
            ).to.equal('Insufficient Storage');
        });
    });
    describe('#LoopDetected', () => {
        it('status code should be equal to Loop Detected', () => {
            expect(HttpServerErrorReasonPhrases.LoopDetected).to.equal(
                'Loop Detected'
            );
        });
    });
    describe('#NotExtended', () => {
        it('status code should be equal to Not Extended', () => {
            expect(HttpServerErrorReasonPhrases.NotExtended).to.equal(
                'Not Extended'
            );
        });
    });
    describe('#NetworkAuthenticationRequired', () => {
        it('status code should be equal to Network Authentication Required', () => {
            expect(
                HttpServerErrorReasonPhrases.NetworkAuthenticationRequired
            ).to.equal('Network Authentication Required');
        });
    });
});
