import { HttpStatusCodes } from './HttpStatusCodes';
import HttpInformationStatusCodes from './HttpInformationStatusCodes';
import HttpSuccessStatusCodes from './HttpSuccessStatusCodes';
import HttpRedirectionStatusCodes from './HttpRedirectionStatusCodes';
import HttpClientErrorStatusCodes from './HttpClientErrorStatusCodes';
import HttpServerErrorStatusCodes from './HttpServerErrorStatusCodes';
import { expect } from 'chai';

describe('HttpStatusCodes', () => {
    describe('#Check if merged enum codes are equal', () => {
        it('Continue from HttpInformationStatus should be equal', () => {
            expect(HttpInformationStatusCodes.Continue).to.equal(
                HttpStatusCodes.Continue
            );
        });
        it('OK from HttpSuccessStatus should be equal (one from each file)', () => {
            expect(HttpSuccessStatusCodes.Ok).to.equal(HttpStatusCodes.Ok);
        });
        it('MovedPermanently from HttpRedirectionStatus should be equal', () => {
            expect(HttpRedirectionStatusCodes.MovedPermanently).to.equal(
                HttpStatusCodes.MovedPermanently
            );
        });
        it('BadRequest from HttpClientErrorStatus should be equal', () => {
            expect(HttpClientErrorStatusCodes.BadRequest).to.equal(
                HttpStatusCodes.BadRequest
            );
        });
        it('InternalServerError from HttpServerErrorStatus should be equal', () => {
            expect(HttpServerErrorStatusCodes.InternalServerError).to.equal(
                HttpStatusCodes.InternalServerError
            );
        });
    });

    describe('#Check if enum instances are assignable', () => {
        it('Continue from HttpInformationStatus should be assigned', () => {
            const anyStatusCode: HttpStatusCodes =
                HttpInformationStatusCodes.Continue;
            expect(anyStatusCode).to.equal(HttpStatusCodes.Continue);
        });
        it('OK from HttpSuccessStatus should be assigned', () => {
            const anyStatusCode: HttpStatusCodes = HttpSuccessStatusCodes.Ok;
            expect(anyStatusCode).to.equal(HttpStatusCodes.Ok);
        });
        it('MovedPermanently from HttpRedirectionStatus should be assigned', () => {
            const anyStatusCode: HttpStatusCodes =
                HttpRedirectionStatusCodes.MovedPermanently;
            expect(anyStatusCode).to.equal(HttpStatusCodes.MovedPermanently);
        });
        it('BadRequest from HttpClientErrorStatus should be assigned', () => {
            const anyStatusCode: HttpStatusCodes =
                HttpClientErrorStatusCodes.BadRequest;
            expect(anyStatusCode).to.equal(HttpStatusCodes.BadRequest);
        });
        it('InternalServerError from HttpServerErrorStatus should be assigned', () => {
            const anyStatusCode: HttpStatusCodes =
                HttpServerErrorStatusCodes.InternalServerError;
            expect(anyStatusCode).to.equal(HttpStatusCodes.InternalServerError);
        });
    });
});
