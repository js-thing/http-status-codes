import { HttpStatusCodes } from './HttpStatusCodes';
import HttpInformationStatus from './HttpInformationStatus';
import HttpSuccessStatus from './HttpSuccessStatus';
import HttpRedirectionStatus from './HttpRedirectionStatus';
import HttpClientErrorStatus from './HttpClientErrorStatus';
import HttpServerErrorStatus from './HttpServerErrorStatus';
import { expect } from 'chai';

describe('HttpStatusCodes', () => {
    describe('#Check if merged enum codes are equal', () => {
        it('OK from HttpSuccessStatus should be equal (one from each file)', () => {
            expect(HttpSuccessStatus.Ok).to.equal(HttpStatusCodes.Ok);
        });
        it('Continue from HttpInformationStatus should be equal', () => {
            expect(HttpInformationStatus.Continue).to.equal(
                HttpStatusCodes.Continue
            );
        });
        it('MovedPermanently from HttpRedirectionStatus should be equal', () => {
            expect(HttpRedirectionStatus.MovedPermanently).to.equal(
                HttpStatusCodes.MovedPermanently
            );
        });
        it('BadRequest from HttpClientErrorStatus should be equal', () => {
            expect(HttpClientErrorStatus.BadRequest).to.equal(
                HttpStatusCodes.BadRequest
            );
        });
        it('InternalServerError from HttpServerErrorStatus should be equal', () => {
            expect(HttpServerErrorStatus.InternalServerError).to.equal(
                HttpStatusCodes.InternalServerError
            );
        });
    });

    describe('#Check if enum instances are assignable', () => {
        it('OK from HttpSuccessStatus should be assigned', () => {
            const anyStatusCode: HttpStatusCodes = HttpSuccessStatus.Ok;
            expect(anyStatusCode).to.equal(HttpStatusCodes.Ok);
        });
        it('Continue from HttpInformationStatus should be assigned', () => {
            const anyStatusCode: HttpStatusCodes =
                HttpInformationStatus.Continue;
            expect(anyStatusCode).to.equal(HttpStatusCodes.Continue);
        });
        it('MovedPermanently from HttpRedirectionStatus should be assigned', () => {
            const anyStatusCode: HttpStatusCodes =
                HttpRedirectionStatus.MovedPermanently;
            expect(anyStatusCode).to.equal(HttpStatusCodes.MovedPermanently);
        });
        it('BadRequest from HttpClientErrorStatus should be assigned', () => {
            const anyStatusCode: HttpStatusCodes =
                HttpClientErrorStatus.BadRequest;
            expect(anyStatusCode).to.equal(HttpStatusCodes.BadRequest);
        });
        it('InternalServerError from HttpServerErrorStatus should be assigned', () => {
            const anyStatusCode: HttpStatusCodes =
                HttpServerErrorStatus.InternalServerError;
            expect(anyStatusCode).to.equal(HttpStatusCodes.InternalServerError);
        });
    });
});
