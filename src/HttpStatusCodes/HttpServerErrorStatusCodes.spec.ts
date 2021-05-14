import HttpServerErrorStatusCodes from './HttpServerErrorStatusCodes';
import { expect } from 'chai';

describe('HttpServerErrorStatusCodes', () => {
    describe('#InternalServerError', () => {
        it('status code should be equal to 500', () => {
            expect(HttpServerErrorStatusCodes.InternalServerError).to.equal(500);
        });
    });
    describe('#NotImplemented', () => {
        it('status code should be equal to 501', () => {
            expect(HttpServerErrorStatusCodes.NotImplemented).to.equal(501);
        });
    });
    describe('#BadGateway', () => {
        it('status code should be equal to 502', () => {
            expect(HttpServerErrorStatusCodes.BadGateway).to.equal(502);
        });
    });
    describe('#ServiceUnavailable', () => {
        it('status code should be equal to 503', () => {
            expect(HttpServerErrorStatusCodes.ServiceUnavailable).to.equal(503);
        });
    });
    describe('#GatewayTimeout', () => {
        it('status code should be equal to 504', () => {
            expect(HttpServerErrorStatusCodes.GatewayTimeout).to.equal(504);
        });
    });
    describe('#HTTPVersionNotSupported', () => {
        it('status code should be equal to 505', () => {
            expect(HttpServerErrorStatusCodes.HTTPVersionNotSupported).to.equal(505);
        });
    });
    describe('#VariantAlsoNegotiates', () => {
        it('status code should be equal to 506', () => {
            expect(HttpServerErrorStatusCodes.VariantAlsoNegotiates).to.equal(506);
        });
    });
    describe('#InsufficientStorage', () => {
        it('status code should be equal to 507', () => {
            expect(HttpServerErrorStatusCodes.InsufficientStorage).to.equal(507);
        });
    });
    describe('#LoopDetected', () => {
        it('status code should be equal to 508', () => {
            expect(HttpServerErrorStatusCodes.LoopDetected).to.equal(508);
        });
    });
    describe('#NotExtended', () => {
        it('status code should be equal to 510', () => {
            expect(HttpServerErrorStatusCodes.NotExtended).to.equal(510);
        });
    });
    describe('#NetworkAuthenticationRequired', () => {
        it('status code should be equal to 511', () => {
            expect(
                HttpServerErrorStatusCodes.NetworkAuthenticationRequired
            ).to.equal(511);
        });
    });
});
