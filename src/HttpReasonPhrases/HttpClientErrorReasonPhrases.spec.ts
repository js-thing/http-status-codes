import { expect } from 'chai';
import HttpClientErrorReasonPhrases from './HttpClientErrorReasonPhrases';

describe('HttpClientErrorReasonPhrases', function () {
    it('# BadRequest = "Bad Request"', function () {
        expect(HttpClientErrorReasonPhrases.BadRequest).to.equal('Bad Request');
    });
    it('# UnAuthorised = "Unauthorized"', function () {
        expect(HttpClientErrorReasonPhrases.UnAuthorised).to.equal(
            'Unauthorized'
        );
    });
    it('# PaymentRequired = "Payment Required"', function () {
        expect(HttpClientErrorReasonPhrases.PaymentRequired).to.equal(
            'Payment Required'
        );
    });
    it('# Forbidden = "Forbidden"', function () {
        expect(HttpClientErrorReasonPhrases.Forbidden).to.equal('Forbidden');
    });
    it('# NotFound = "Not Found"', function () {
        expect(HttpClientErrorReasonPhrases.NotFound).to.equal('Not Found');
    });
    it('# MethodNotAllowed = "Method Not Allowed"', function () {
        expect(HttpClientErrorReasonPhrases.MethodNotAllowed).to.equal(
            'Method Not Allowed'
        );
    });
    it('# NotAcceptable = "Not Acceptable"', function () {
        expect(HttpClientErrorReasonPhrases.NotAcceptable).to.equal(
            'Not Acceptable'
        );
    });
    it('# ProxyAuthenticationRequired = "Proxy Authentication Required"', function () {
        expect(
            HttpClientErrorReasonPhrases.ProxyAuthenticationRequired
        ).to.equal('Proxy Authentication Required');
    });
    it('# RequestTimeout = "Request Timeout"', function () {
        expect(HttpClientErrorReasonPhrases.RequestTimeout).to.equal(
            'Request Timeout'
        );
    });
    it('# Conflict = "Conflict"', function () {
        expect(HttpClientErrorReasonPhrases.Conflict).to.equal('Conflict');
    });
    it('# Gone = "Gone"', function () {
        expect(HttpClientErrorReasonPhrases.Gone).to.equal('Gone');
    });
    it('# LengthRequired = "Length Required"', function () {
        expect(HttpClientErrorReasonPhrases.LengthRequired).to.equal(
            'Length Required'
        );
    });
    it('# PreconditionFailed = "Precondition Failed"', function () {
        expect(HttpClientErrorReasonPhrases.PreconditionFailed).to.equal(
            'Precondition Failed'
        );
    });
    it('# PayloadTooLarge = "Payload Too Large"', function () {
        expect(HttpClientErrorReasonPhrases.PayloadTooLarge).to.equal(
            'Payload Too Large'
        );
    });
    it('# URITooLong = "URI Too Long"', function () {
        expect(HttpClientErrorReasonPhrases.URITooLong).to.equal(
            'URI Too Long'
        );
    });
    it('# UnsupportedMediaType = "Unsupported Media Type"', function () {
        expect(HttpClientErrorReasonPhrases.UnsupportedMediaType).to.equal(
            'Unsupported Media Type'
        );
    });
    it('# RangeNotSatisfiable = "Range Not Satisfiable"', function () {
        expect(HttpClientErrorReasonPhrases.RangeNotSatisfiable).to.equal(
            'Range Not Satisfiable'
        );
    });
    it('# ExpectationFailed = "Expectation Failed"', function () {
        expect(HttpClientErrorReasonPhrases.ExpectationFailed).to.equal(
            'Expectation Failed'
        );
    });
    it(`# IAmATeapot = "I'm a teapot"`, function () {
        expect(HttpClientErrorReasonPhrases.IAmATeapot).to.equal(
            "I'm a teapot"
        );
    });
    it('# MisdirectedRequest = "Misdirected Request"', function () {
        expect(HttpClientErrorReasonPhrases.MisdirectedRequest).to.equal(
            'Misdirected Request'
        );
    });
    it('# UnprocessableEntity = "Unprocessable Entity"', function () {
        expect(HttpClientErrorReasonPhrases.UnprocessableEntity).to.equal(
            'Unprocessable Entity'
        );
    });
    it('# Locked = "Locked"', function () {
        expect(HttpClientErrorReasonPhrases.Locked).to.equal('Locked');
    });
    it('# FailedDependency = "Failed Dependency"', function () {
        expect(HttpClientErrorReasonPhrases.FailedDependency).to.equal(
            'Failed Dependency'
        );
    });
    it('# TooEarly = "Too Early"', function () {
        expect(HttpClientErrorReasonPhrases.TooEarly).to.equal('Too Early');
    });
    it('# UpgradeRequired = "Upgrade Required"', function () {
        expect(HttpClientErrorReasonPhrases.UpgradeRequired).to.equal(
            'Upgrade Required'
        );
    });
    it('# PreconditionRequired = "Precondition Required"', function () {
        expect(HttpClientErrorReasonPhrases.PreconditionRequired).to.equal(
            'Precondition Required'
        );
    });
    it('# TooManyRequests = "Too Many Requests"', function () {
        expect(HttpClientErrorReasonPhrases.TooManyRequests).to.equal(
            'Too Many Requests'
        );
    });
    it('# RequestHeaderFieldsTooLarge = "Request Header Fields Too Large"', function () {
        expect(
            HttpClientErrorReasonPhrases.RequestHeaderFieldsTooLarge
        ).to.equal('Request Header Fields Too Large');
    });
    it('# UnavailableForLegalReasons = "Unavailable For Legal Reasons"', function () {
        expect(
            HttpClientErrorReasonPhrases.UnavailableForLegalReasons
        ).to.equal('Unavailable For Legal Reasons');
    });
});
