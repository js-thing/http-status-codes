import { HttpStatusReasonPhrases } from './HttpStatusReasonPhrases';
import HttpInformationStatusReasonPhrases from './HttpInformationStatusReasonPhrases';
import HttpSuccessStatusReasonPhrases from './HttpSuccessStatusReasonPhrases';
import HttpRedirectionStatusReasonPhrases from './HttpRedirectionStatusReasonPhrases';
import HttpClientErrorStatusReasonPhrases from './HttpClientErrorStatusReasonPhrases';
import HttpServerErrorStatusReasonPhrase from './HttpServerErrorStatusReasonPhrase';
import { expect } from 'chai';

describe('HttpStatusReasonPhrases', () => {
    describe('#Check if merged enum codes are equal', () => {
        it('Continue from HttpInformationStatusReasonPhrases should be equal', () => {
            expect(HttpInformationStatusReasonPhrases.Continue).to.equal(
                HttpStatusReasonPhrases.Continue
            );
        });
        it('OK from HttpSuccessStatusReasonPhrases should be equal (one from each file)', () => {
            expect(HttpSuccessStatusReasonPhrases.Ok).to.equal(
                HttpStatusReasonPhrases.Ok
            );
        });
        it('MovedPermanently from HttpRedirectionStatusReasonPhrases should be equal', () => {
            expect(
                HttpRedirectionStatusReasonPhrases.MovedPermanently
            ).to.equal(HttpStatusReasonPhrases.MovedPermanently);
        });
        it('BadRequest from HttpClientErrorStatusReasonPhrases should be equal', () => {
            expect(HttpClientErrorStatusReasonPhrases.BadRequest).to.equal(
                HttpStatusReasonPhrases.BadRequest
            );
        });
        it('InternalServerError from HttpServerErrorStatusReasonPhrase should be equal', () => {
            expect(
                HttpServerErrorStatusReasonPhrase.InternalServerError
            ).to.equal(HttpStatusReasonPhrases.InternalServerError);
        });
    });

    describe('#Check if enum instances are assignable', () => {
        it('Continue from HttpInformationStatusReasonPhrases should be assigned', () => {
            const anyStatusCode: HttpStatusReasonPhrases =
                HttpInformationStatusReasonPhrases.Continue;
            expect(anyStatusCode).to.equal(HttpStatusReasonPhrases.Continue);
        });
        it('OK from HttpSuccessStatusReasonPhrases should be assigned', () => {
            const anyStatusCode: HttpStatusReasonPhrases =
                HttpSuccessStatusReasonPhrases.Ok;
            expect(anyStatusCode).to.equal(HttpStatusReasonPhrases.Ok);
        });
        it('MovedPermanently from HttpRedirectionStatusReasonPhrases should be assigned', () => {
            const anyStatusCode: HttpStatusReasonPhrases =
                HttpRedirectionStatusReasonPhrases.MovedPermanently;
            expect(anyStatusCode).to.equal(
                HttpStatusReasonPhrases.MovedPermanently
            );
        });
        it('BadRequest from HttpClientErrorStatusReasonPhrases should be assigned', () => {
            const anyStatusCode: HttpStatusReasonPhrases =
                HttpClientErrorStatusReasonPhrases.BadRequest;
            expect(anyStatusCode).to.equal(HttpStatusReasonPhrases.BadRequest);
        });
        it('InternalServerError from HttpServerErrorStatusReasonPhrase should be assigned', () => {
            const anyStatusCode: HttpStatusReasonPhrases =
                HttpServerErrorStatusReasonPhrase.InternalServerError;
            expect(anyStatusCode).to.equal(
                HttpStatusReasonPhrases.InternalServerError
            );
        });
    });
});
