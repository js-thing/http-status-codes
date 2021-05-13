import HttpServerErrorStatus from './HttpServerErrorStatus';
import { expect } from 'chai';

describe('HttpServerErrorStatus', () => {
    describe('#InternalServerError', () => {
        it('status code should be equal to 500', () => {
            expect(HttpServerErrorStatus.InternalServerError).to.equal(500);
        });
    });
    describe('#NotImplemented', () => {
        it('status code should be equal to 501', () => {
            expect(HttpServerErrorStatus.NotImplemented).to.equal(501);
        });
    });
    describe('#BadGateway', () => {
        it('status code should be equal to 502', () => {
            expect(HttpServerErrorStatus.BadGateway).to.equal(502);
        });
    });
    describe('#ServiceUnavailable', () => {
        it('status code should be equal to 503', () => {
            expect(HttpServerErrorStatus.ServiceUnavailable).to.equal(503);
        });
    });
    describe('#GatewayTimeout', () => {
        it('status code should be equal to 504', () => {
            expect(HttpServerErrorStatus.GatewayTimeout).to.equal(504);
        });
    });
    describe('#HTTPVersionNotSupported', () => {
        it('status code should be equal to 505', () => {
            expect(HttpServerErrorStatus.HTTPVersionNotSupported).to.equal(505);
        });
    });
    describe('#VariantAlsoNegotiates', () => {
        it('status code should be equal to 506', () => {
            expect(HttpServerErrorStatus.VariantAlsoNegotiates).to.equal(506);
        });
    });
    describe('#InsufficientStorage', () => {
        it('status code should be equal to 507', () => {
            expect(HttpServerErrorStatus.InsufficientStorage).to.equal(507);
        });
    });
    describe('#LoopDetected', () => {
        it('status code should be equal to 508', () => {
            expect(HttpServerErrorStatus.LoopDetected).to.equal(508);
        });
    });
    describe('#NotExtended', () => {
        it('status code should be equal to 510', () => {
            expect(HttpServerErrorStatus.NotExtended).to.equal(510);
        });
    });
    describe('#NetworkAuthenticationRequired', () => {
        it('status code should be equal to 511', () => {
            expect(
                HttpServerErrorStatus.NetworkAuthenticationRequired
            ).to.equal(511);
        });
    });
});
