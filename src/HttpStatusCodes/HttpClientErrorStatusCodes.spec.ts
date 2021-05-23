import { expect } from 'chai';
import HttpClientErrorStatusCodes from './HttpClientErrorStatusCodes';

describe('HttpClientErrorStatusCodes', function () {
    it('# BadRequest = 400', function () {
        expect(HttpClientErrorStatusCodes.BadRequest).to.equal(400);
    });
    it('# UnAuthorised = 401', function () {
        expect(HttpClientErrorStatusCodes.UnAuthorised).to.equal(401);
    });
    it('# PaymentRequired = 402', function () {
        expect(HttpClientErrorStatusCodes.PaymentRequired).to.equal(402);
    });
    it('# Forbidden = 403', function () {
        expect(HttpClientErrorStatusCodes.Forbidden).to.equal(403);
    });
    it('# NotFound = 404', function () {
        expect(HttpClientErrorStatusCodes.NotFound).to.equal(404);
    });
    it('# MethodNotAllowed = 405', function () {
        expect(HttpClientErrorStatusCodes.MethodNotAllowed).to.equal(405);
    });
    it('# NotAcceptable = 406', function () {
        expect(HttpClientErrorStatusCodes.NotAcceptable).to.equal(406);
    });
    it('# ProxyAuthenticationRequired = 407', function () {
        expect(HttpClientErrorStatusCodes.ProxyAuthenticationRequired).to.equal(
            407
        );
    });
    it('# RequestTimeout = 408', function () {
        expect(HttpClientErrorStatusCodes.RequestTimeout).to.equal(408);
    });
    it('# Conflict = 409', function () {
        expect(HttpClientErrorStatusCodes.Conflict).to.equal(409);
    });
    it('# Gone = 410', function () {
        expect(HttpClientErrorStatusCodes.Gone).to.equal(410);
    });
    it('# LengthRequired = 411', function () {
        expect(HttpClientErrorStatusCodes.LengthRequired).to.equal(411);
    });
    it('# PreconditionFailed = 412', function () {
        expect(HttpClientErrorStatusCodes.PreconditionFailed).to.equal(412);
    });
    it('# PayloadTooLarge = 413', function () {
        expect(HttpClientErrorStatusCodes.PayloadTooLarge).to.equal(413);
    });
    it('# URITooLong = 414', function () {
        expect(HttpClientErrorStatusCodes.URITooLong).to.equal(414);
    });
    it('# UnsupportedMediaType = 415', function () {
        expect(HttpClientErrorStatusCodes.UnsupportedMediaType).to.equal(415);
    });
    it('# RangeNotSatisfiable = 416', function () {
        expect(HttpClientErrorStatusCodes.RangeNotSatisfiable).to.equal(416);
    });
    it('# ExpectationFailed = 417', function () {
        expect(HttpClientErrorStatusCodes.ExpectationFailed).to.equal(417);
    });
    it('# IAmATeapot = 418', function () {
        expect(HttpClientErrorStatusCodes.IAmATeapot).to.equal(418);
    });
    it('# MisdirectedRequest = 421', function () {
        expect(HttpClientErrorStatusCodes.MisdirectedRequest).to.equal(421);
    });
    it('# UnprocessableEntity = 422', function () {
        expect(HttpClientErrorStatusCodes.UnprocessableEntity).to.equal(422);
    });
    it('# Locked = 423', function () {
        expect(HttpClientErrorStatusCodes.Locked).to.equal(423);
    });
    it('# FailedDependency = 424', function () {
        expect(HttpClientErrorStatusCodes.FailedDependency).to.equal(424);
    });
    it('# TooEarly = 425', function () {
        expect(HttpClientErrorStatusCodes.TooEarly).to.equal(425);
    });
    it('# UpgradeRequired = 426', function () {
        expect(HttpClientErrorStatusCodes.UpgradeRequired).to.equal(426);
    });
    it('# PreconditionRequired = 428', function () {
        expect(HttpClientErrorStatusCodes.PreconditionRequired).to.equal(428);
    });
    it('# TooManyRequests = 429', function () {
        expect(HttpClientErrorStatusCodes.TooManyRequests).to.equal(429);
    });
    it('# RequestHeaderFieldsTooLarge = 431', function () {
        expect(HttpClientErrorStatusCodes.RequestHeaderFieldsTooLarge).to.equal(
            431
        );
    });
    it('# UnavailableForLegalReasons = 451', function () {
        expect(HttpClientErrorStatusCodes.UnavailableForLegalReasons).to.equal(
            451
        );
    });
});
