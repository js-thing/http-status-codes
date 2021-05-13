import HttpServerErrorStatusReasonPhrase from './HttpServerErrorStatusReasonPhrase';
import { expect } from 'chai';

describe('HttpServerErrorStatusReasonPhrase', () => {
    describe('#InternalServerError', () => {
        it('status code should be equal to Internal Server Error', () => {
            expect(
                HttpServerErrorStatusReasonPhrase.InternalServerError
            ).to.equal('Internal Server Error');
        });
    });
    describe('#NotImplemented', () => {
        it('status code should be equal to Not Implemented', () => {
            expect(HttpServerErrorStatusReasonPhrase.NotImplemented).to.equal(
                'Not Implemented'
            );
        });
    });
    describe('#BadGateway', () => {
        it('status code should be equal to Bad Gateway', () => {
            expect(HttpServerErrorStatusReasonPhrase.BadGateway).to.equal(
                'Bad Gateway'
            );
        });
    });
    describe('#ServiceUnavailable', () => {
        it('status code should be equal to Service Unavailable', () => {
            expect(
                HttpServerErrorStatusReasonPhrase.ServiceUnavailable
            ).to.equal('Service Unavailable');
        });
    });
    describe('#GatewayTimeout', () => {
        it('status code should be equal to Gateway Timeout', () => {
            expect(HttpServerErrorStatusReasonPhrase.GatewayTimeout).to.equal(
                'Gateway Timeout'
            );
        });
    });
    describe('#HTTPVersionNotSupported', () => {
        it('status code should be equal to HTTP Version Not Supported', () => {
            expect(
                HttpServerErrorStatusReasonPhrase.HTTPVersionNotSupported
            ).to.equal('HTTP Version Not Supported');
        });
    });
    describe('#VariantAlsoNegotiates', () => {
        it('status code should be equal to Variant Also Negotiates', () => {
            expect(
                HttpServerErrorStatusReasonPhrase.VariantAlsoNegotiates
            ).to.equal('Variant Also Negotiates');
        });
    });
    describe('#InsufficientStorage', () => {
        it('status code should be equal to Insufficient Storage', () => {
            expect(
                HttpServerErrorStatusReasonPhrase.InsufficientStorage
            ).to.equal('Insufficient Storage');
        });
    });
    describe('#LoopDetected', () => {
        it('status code should be equal to Loop Detected', () => {
            expect(HttpServerErrorStatusReasonPhrase.LoopDetected).to.equal(
                'Loop Detected'
            );
        });
    });
    describe('#NotExtended', () => {
        it('status code should be equal to Not Extended', () => {
            expect(HttpServerErrorStatusReasonPhrase.NotExtended).to.equal(
                'Not Extended'
            );
        });
    });
    describe('#NetworkAuthenticationRequired', () => {
        it('status code should be equal to Network Authentication Required', () => {
            expect(
                HttpServerErrorStatusReasonPhrase.NetworkAuthenticationRequired
            ).to.equal('Network Authentication Required');
        });
    });
});
