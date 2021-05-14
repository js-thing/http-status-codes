import { HttpReasonPhrases } from './HttpReasonPhrases';
import HttpInformationReasonPhrases from './HttpInformationReasonPhrases';
import HttpSuccessReasonPhrases from './HttpSuccessReasonPhrases';
import HttpRedirectionReasonPhrases from './HttpRedirectionReasonPhrases';
import HttpClientErrorReasonPhrases from './HttpClientErrorReasonPhrases';
import HttpServerErrorReasonPhrases from './HttpServerErrorReasonPhrases';
import { expect } from 'chai';

describe('HttpReasonPhrases', () => {
    describe('#Check if merged enum codes are equal', () => {
        it('Continue from HttpInformationReasonPhrases should be equal', () => {
            expect(HttpInformationReasonPhrases.Continue).to.equal(
                HttpReasonPhrases.Continue
            );
        });
        it('OK from HttpSuccessReasonPhrases should be equal (one from each file)', () => {
            expect(HttpSuccessReasonPhrases.Ok).to.equal(HttpReasonPhrases.Ok);
        });
        it('MovedPermanently from HttpRedirectionReasonPhrases should be equal', () => {
            expect(HttpRedirectionReasonPhrases.MovedPermanently).to.equal(
                HttpReasonPhrases.MovedPermanently
            );
        });
        it('BadRequest from HttpClientErrorReasonPhrases should be equal', () => {
            expect(HttpClientErrorReasonPhrases.BadRequest).to.equal(
                HttpReasonPhrases.BadRequest
            );
        });
        it('InternalServerError from HttpServerErrorReasonPhrase should be equal', () => {
            expect(HttpServerErrorReasonPhrases.InternalServerError).to.equal(
                HttpReasonPhrases.InternalServerError
            );
        });
    });

    describe('#Check if enum instances are assignable', () => {
        it('Continue from HttpInformationReasonPhrases should be assigned', () => {
            const anyCode: HttpReasonPhrases =
                HttpInformationReasonPhrases.Continue;
            expect(anyCode).to.equal(HttpReasonPhrases.Continue);
        });
        it('OK from HttpSuccessReasonPhrases should be assigned', () => {
            const anyCode: HttpReasonPhrases = HttpSuccessReasonPhrases.Ok;
            expect(anyCode).to.equal(HttpReasonPhrases.Ok);
        });
        it('MovedPermanently from HttpRedirectionReasonPhrases should be assigned', () => {
            const anyCode: HttpReasonPhrases =
                HttpRedirectionReasonPhrases.MovedPermanently;
            expect(anyCode).to.equal(HttpReasonPhrases.MovedPermanently);
        });
        it('BadRequest from HttpClientErrorReasonPhrases should be assigned', () => {
            const anyCode: HttpReasonPhrases =
                HttpClientErrorReasonPhrases.BadRequest;
            expect(anyCode).to.equal(HttpReasonPhrases.BadRequest);
        });
        it('InternalServerError from HttpServerErrorReasonPhrase should be assigned', () => {
            const anyCode: HttpReasonPhrases =
                HttpServerErrorReasonPhrases.InternalServerError;
            expect(anyCode).to.equal(HttpReasonPhrases.InternalServerError);
        });
    });
});
