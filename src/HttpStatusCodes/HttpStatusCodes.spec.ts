import { expect } from 'chai';
import { HttpStatusCodes } from './HttpStatusCodes';
import HttpInformationStatusCodes from './HttpInformationStatusCodes';
import HttpSuccessStatusCodes from './HttpSuccessStatusCodes';
import HttpRedirectionStatusCodes from './HttpRedirectionStatusCodes';
import HttpClientErrorStatusCodes from './HttpClientErrorStatusCodes';
import HttpServerErrorStatusCodes from './HttpServerErrorStatusCodes';

describe('HttpStatusCodes', function () {
    describe('#Check if merged enum codes are equal', function () {
        it('Continue from HttpInformationStatusCodes should be equal', function () {
            expect(HttpInformationStatusCodes.Continue).to.equal(
                HttpStatusCodes.Continue
            );
        });
        it('OK from HttpSuccessStatusCodes should be equal (one from each file)', function () {
            expect(HttpSuccessStatusCodes.Ok).to.equal(HttpStatusCodes.Ok);
        });
        it('MovedPermanently from HttpRedirectionStatusCodes should be equal', function () {
            expect(HttpRedirectionStatusCodes.MovedPermanently).to.equal(
                HttpStatusCodes.MovedPermanently
            );
        });
        it('BadRequest from HttpClientErrorStatusCodes should be equal', function () {
            expect(HttpClientErrorStatusCodes.BadRequest).to.equal(
                HttpStatusCodes.BadRequest
            );
        });
        it('InternalServerError from HttpServerErrorStatusCodes should be equal', function () {
            expect(HttpServerErrorStatusCodes.InternalServerError).to.equal(
                HttpStatusCodes.InternalServerError
            );
        });
    });

    describe('#Check if enum instances are assignable', function () {
        it('Continue from HttpInformationStatusCodes should be assigned', function () {
            const anyStatusCode: HttpStatusCodes =
                HttpInformationStatusCodes.Continue;
            expect(anyStatusCode).to.equal(HttpStatusCodes.Continue);
        });
        it('OK from HttpSuccessStatusCodes should be assigned', function () {
            const anyStatusCode: HttpStatusCodes = HttpSuccessStatusCodes.Ok;
            expect(anyStatusCode).to.equal(HttpStatusCodes.Ok);
        });
        it('MovedPermanently from HttpRedirectionStatusCodes should be assigned', function () {
            const anyStatusCode: HttpStatusCodes =
                HttpRedirectionStatusCodes.MovedPermanently;
            expect(anyStatusCode).to.equal(HttpStatusCodes.MovedPermanently);
        });
        it('BadRequest from HttpClientErrorStatusCodes should be assigned', function () {
            const anyStatusCode: HttpStatusCodes =
                HttpClientErrorStatusCodes.BadRequest;
            expect(anyStatusCode).to.equal(HttpStatusCodes.BadRequest);
        });
        it('InternalServerError from HttpServerErrorStatusCodes should be assigned', function () {
            const anyStatusCode: HttpStatusCodes =
                HttpServerErrorStatusCodes.InternalServerError;
            expect(anyStatusCode).to.equal(HttpStatusCodes.InternalServerError);
        });
    });
});
