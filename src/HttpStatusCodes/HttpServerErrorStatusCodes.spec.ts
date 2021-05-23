import { expect } from 'chai';
import HttpServerErrorStatusCodes from './HttpServerErrorStatusCodes';

describe('HttpServerErrorStatusCodes', function () {
    it('# InternalServerError = 500', function () {
        expect(HttpServerErrorStatusCodes.InternalServerError).to.equal(500);
    });
    it('# NotImplemented = 501', function () {
        expect(HttpServerErrorStatusCodes.NotImplemented).to.equal(501);
    });
    it('# BadGateway = 502', function () {
        expect(HttpServerErrorStatusCodes.BadGateway).to.equal(502);
    });
    it('# ServiceUnavailable = 503', function () {
        expect(HttpServerErrorStatusCodes.ServiceUnavailable).to.equal(503);
    });
    it('# GatewayTimeout = 504', function () {
        expect(HttpServerErrorStatusCodes.GatewayTimeout).to.equal(504);
    });
    it('# HTTPVersionNotSupported = 505', function () {
        expect(HttpServerErrorStatusCodes.HTTPVersionNotSupported).to.equal(
            505
        );
    });
    it('# VariantAlsoNegotiates = 506', function () {
        expect(HttpServerErrorStatusCodes.VariantAlsoNegotiates).to.equal(506);
    });
    it('# InsufficientStorage = 507', function () {
        expect(HttpServerErrorStatusCodes.InsufficientStorage).to.equal(507);
    });
    it('# LoopDetected = 508', function () {
        expect(HttpServerErrorStatusCodes.LoopDetected).to.equal(508);
    });
    it('# NotExtended = 510', function () {
        expect(HttpServerErrorStatusCodes.NotExtended).to.equal(510);
    });
    it('# NetworkAuthenticationRequired = 511', function () {
        expect(
            HttpServerErrorStatusCodes.NetworkAuthenticationRequired
        ).to.equal(511);
    });
});
