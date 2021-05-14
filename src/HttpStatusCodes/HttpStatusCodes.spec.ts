import { HttpStatusCodes } from './HttpStatusCodes';
import HttpInformationStatusCodes from './HttpInformationStatusCodes';
import HttpSuccessStatusCodes from './HttpSuccessStatusCodes';
import HttpRedirectionStatusCodes from './HttpRedirectionStatusCodes';
import HttpClientErrorStatusCodes from './HttpClientErrorStatusCodes';
import HttpServerErrorStatusCodes from './HttpServerErrorStatusCodes';
import { expect } from 'chai';

describe('HttpStatusCodes', () => {
    describe('#Check if merged enum codes are equal', () => {
        it('Continue from HttpInformationStatusCodes should be equal', () => {
            expect(HttpInformationStatusCodes.Continue).to.equal(
                HttpStatusCodes.Continue
            );
        });
        it('OK from HttpSuccessStatusCodes should be equal (one from each file)', () => {
            expect(HttpSuccessStatusCodes.Ok).to.equal(HttpStatusCodes.Ok);
        });
        it('MovedPermanently from HttpRedirectionStatusCodes should be equal', () => {
            expect(HttpRedirectionStatusCodes.MovedPermanently).to.equal(
                HttpStatusCodes.MovedPermanently
            );
        });
        it('BadRequest from HttpClientErrorStatusCodes should be equal', () => {
            expect(HttpClientErrorStatusCodes.BadRequest).to.equal(
                HttpStatusCodes.BadRequest
            );
        });
        it('InternalServerError from HttpServerErrorStatusCodes should be equal', () => {
            expect(HttpServerErrorStatusCodes.InternalServerError).to.equal(
                HttpStatusCodes.InternalServerError
            );
        });
    });

    describe('#Check if enum instances are assignable', () => {
        it('Continue from HttpInformationStatusCodes should be assigned', () => {
            const anyStatusCode: HttpStatusCodes =
                HttpInformationStatusCodes.Continue;
            expect(anyStatusCode).to.equal(HttpStatusCodes.Continue);
        });
        it('OK from HttpSuccessStatusCodes should be assigned', () => {
            const anyStatusCode: HttpStatusCodes = HttpSuccessStatusCodes.Ok;
            expect(anyStatusCode).to.equal(HttpStatusCodes.Ok);
        });
        it('MovedPermanently from HttpRedirectionStatusCodes should be assigned', () => {
            const anyStatusCode: HttpStatusCodes =
                HttpRedirectionStatusCodes.MovedPermanently;
            expect(anyStatusCode).to.equal(HttpStatusCodes.MovedPermanently);
        });
        it('BadRequest from HttpClientErrorStatusCodes should be assigned', () => {
            const anyStatusCode: HttpStatusCodes =
                HttpClientErrorStatusCodes.BadRequest;
            expect(anyStatusCode).to.equal(HttpStatusCodes.BadRequest);
        });
        it('InternalServerError from HttpServerErrorStatusCodes should be assigned', () => {
            const anyStatusCode: HttpStatusCodes =
                HttpServerErrorStatusCodes.InternalServerError;
            expect(anyStatusCode).to.equal(HttpStatusCodes.InternalServerError);
        });
    });
});
