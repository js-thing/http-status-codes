import { expect } from 'chai';
import {
    isClientErrorStatus,
    isClientErrorStatusCode,
    isClientErrorReasonPhrase,
    is4xxClientErrorStatusCode,
} from './isClientErrorStatus';
import {
    HttpClientErrorStatusCodes,
    HttpServerErrorStatusCodes,
} from '../HttpStatusCodes';
import {
    HttpClientErrorReasonPhrases,
    HttpServerErrorReasonPhrases,
} from '../HttpReasonPhrases';

describe('helper functions', function () {
    describe('# isClientErrorStatusCode(statusCode)', function () {
        it('should return `true` if the argument is defined in HttpClientErrorStatusCodes', function () {
            expect(
                isClientErrorStatusCode(HttpClientErrorStatusCodes.BadRequest)
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid defined code between [400 - 499]', function () {
            expect(isClientErrorStatusCode(401)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpClientErrorStatusCodes', function () {
            expect(
                isClientErrorStatusCode(
                    HttpServerErrorStatusCodes.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid defined code between [400 - 499]', function () {
            expect(isClientErrorStatusCode(100)).to.be.false;
        });
    });

    describe('# isClientErrorReasonPhrase(statusPhrase)', function () {
        it('should return `true` if the argument is defined in HttpClientErrorReasonPhrases', function () {
            expect(
                isClientErrorReasonPhrase(
                    HttpClientErrorReasonPhrases.BadRequest
                )
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid reason phrase string', function () {
            expect(isClientErrorReasonPhrase('Forbidden')).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpClientErrorReasonPhrases', function () {
            expect(
                isClientErrorReasonPhrase(
                    HttpServerErrorReasonPhrases.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid reason phrase string', function () {
            expect(isClientErrorReasonPhrase('Internal Server Error')).to.be
                .false;
        });
    });

    describe('# isClientErrorStatus(status)', function () {
        it('should return `true` if the argument is defined in HttpClientErrorStatusCodes', function () {
            expect(isClientErrorStatus(HttpClientErrorStatusCodes.BadRequest))
                .to.be.true;
        });
        it('should return `true` if the argument is a valid defined code between [400 - 499]', function () {
            expect(isClientErrorStatus(401)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpClientErrorStatusCodes', function () {
            expect(
                isClientErrorStatus(
                    HttpServerErrorStatusCodes.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid defined code between [400 - 499]', function () {
            expect(isClientErrorStatus(100)).to.be.false;
        });

        it('should return `true` if the argument is defined in HttpClientErrorReasonPhrases', function () {
            expect(isClientErrorStatus(HttpClientErrorReasonPhrases.BadRequest))
                .to.be.true;
        });
        it('should return `true` if the argument is a valid reason phrase string', function () {
            expect(isClientErrorStatus('Forbidden')).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpClientErrorReasonPhrases', function () {
            expect(
                isClientErrorStatus(
                    HttpServerErrorReasonPhrases.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid reason phrase string', function () {
            expect(isClientErrorStatus('Internal Server Error')).to.be.false;
        });
    });

    describe('# is4xxClientErrorStatusCode(statusCode)', function () {
        it('should return true for any integer between 400 to 499', function () {
            expect(is4xxClientErrorStatusCode(400)).to.be.true;
            expect(is4xxClientErrorStatusCode(450)).to.be.true;
            expect(is4xxClientErrorStatusCode(499)).to.be.true;
        });
        it('should return false for any integer outside of 400 to 499', function () {
            expect(is4xxClientErrorStatusCode(100)).to.be.false;
            expect(is4xxClientErrorStatusCode(500)).to.be.false;
        });
    });
});
