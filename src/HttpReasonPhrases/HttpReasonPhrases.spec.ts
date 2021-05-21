import { expect } from 'chai';
import { HttpReasonPhrases } from './HttpReasonPhrases';
import HttpInformationReasonPhrases from './HttpInformationReasonPhrases';
import HttpSuccessReasonPhrases from './HttpSuccessReasonPhrases';
import HttpRedirectionReasonPhrases from './HttpRedirectionReasonPhrases';
import HttpClientErrorReasonPhrases from './HttpClientErrorReasonPhrases';
import HttpServerErrorReasonPhrases from './HttpServerErrorReasonPhrases';

describe('HttpReasonPhrases', function () {
    describe('#Check if merged enum codes are equal', function () {
        it('Continue from HttpInformationReasonPhrases should be equal', function () {
            expect(HttpInformationReasonPhrases.Continue).to.equal(
                HttpReasonPhrases.Continue
            );
        });
        it('OK from HttpSuccessReasonPhrases should be equal (one from each file)', function () {
            expect(HttpSuccessReasonPhrases.Ok).to.equal(HttpReasonPhrases.Ok);
        });
        it('MovedPermanently from HttpRedirectionReasonPhrases should be equal', function () {
            expect(HttpRedirectionReasonPhrases.MovedPermanently).to.equal(
                HttpReasonPhrases.MovedPermanently
            );
        });
        it('BadRequest from HttpClientErrorReasonPhrases should be equal', function () {
            expect(HttpClientErrorReasonPhrases.BadRequest).to.equal(
                HttpReasonPhrases.BadRequest
            );
        });
        it('InternalServerError from HttpServerErrorReasonPhrase should be equal', function () {
            expect(HttpServerErrorReasonPhrases.InternalServerError).to.equal(
                HttpReasonPhrases.InternalServerError
            );
        });
    });

    describe('#Check if enum instances are assignable', function () {
        it('Continue from HttpInformationReasonPhrases should be assigned', function () {
            const anyCode: HttpReasonPhrases =
                HttpInformationReasonPhrases.Continue;
            expect(anyCode).to.equal(HttpReasonPhrases.Continue);
        });
        it('OK from HttpSuccessReasonPhrases should be assigned', function () {
            const anyCode: HttpReasonPhrases = HttpSuccessReasonPhrases.Ok;
            expect(anyCode).to.equal(HttpReasonPhrases.Ok);
        });
        it('MovedPermanently from HttpRedirectionReasonPhrases should be assigned', function () {
            const anyCode: HttpReasonPhrases =
                HttpRedirectionReasonPhrases.MovedPermanently;
            expect(anyCode).to.equal(HttpReasonPhrases.MovedPermanently);
        });
        it('BadRequest from HttpClientErrorReasonPhrases should be assigned', function () {
            const anyCode: HttpReasonPhrases =
                HttpClientErrorReasonPhrases.BadRequest;
            expect(anyCode).to.equal(HttpReasonPhrases.BadRequest);
        });
        it('InternalServerError from HttpServerErrorReasonPhrase should be assigned', function () {
            const anyCode: HttpReasonPhrases =
                HttpServerErrorReasonPhrases.InternalServerError;
            expect(anyCode).to.equal(HttpReasonPhrases.InternalServerError);
        });
    });
});
