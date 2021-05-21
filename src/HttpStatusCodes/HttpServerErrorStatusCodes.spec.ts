import { expect } from 'chai';
import HttpServerErrorStatusCodes from './HttpServerErrorStatusCodes';

describe('HttpServerErrorStatusCodes', function () {
    describe('#InternalServerError', function () {
        it('status code should be equal to 500', function () {
            expect(HttpServerErrorStatusCodes.InternalServerError).to.equal(
                500
            );
        });
    });
    describe('#NotImplemented', function () {
        it('status code should be equal to 501', function () {
            expect(HttpServerErrorStatusCodes.NotImplemented).to.equal(501);
        });
    });
    describe('#BadGateway', function () {
        it('status code should be equal to 502', function () {
            expect(HttpServerErrorStatusCodes.BadGateway).to.equal(502);
        });
    });
    describe('#ServiceUnavailable', function () {
        it('status code should be equal to 503', function () {
            expect(HttpServerErrorStatusCodes.ServiceUnavailable).to.equal(503);
        });
    });
    describe('#GatewayTimeout', function () {
        it('status code should be equal to 504', function () {
            expect(HttpServerErrorStatusCodes.GatewayTimeout).to.equal(504);
        });
    });
    describe('#HTTPVersionNotSupported', function () {
        it('status code should be equal to 505', function () {
            expect(HttpServerErrorStatusCodes.HTTPVersionNotSupported).to.equal(
                505
            );
        });
    });
    describe('#VariantAlsoNegotiates', function () {
        it('status code should be equal to 506', function () {
            expect(HttpServerErrorStatusCodes.VariantAlsoNegotiates).to.equal(
                506
            );
        });
    });
    describe('#InsufficientStorage', function () {
        it('status code should be equal to 507', function () {
            expect(HttpServerErrorStatusCodes.InsufficientStorage).to.equal(
                507
            );
        });
    });
    describe('#LoopDetected', function () {
        it('status code should be equal to 508', function () {
            expect(HttpServerErrorStatusCodes.LoopDetected).to.equal(508);
        });
    });
    describe('#NotExtended', function () {
        it('status code should be equal to 510', function () {
            expect(HttpServerErrorStatusCodes.NotExtended).to.equal(510);
        });
    });
    describe('#NetworkAuthenticationRequired', function () {
        it('status code should be equal to 511', function () {
            expect(
                HttpServerErrorStatusCodes.NetworkAuthenticationRequired
            ).to.equal(511);
        });
    });
});
