import { expect } from 'chai';
import {
    isServerErrorStatus,
    isServerErrorStatusCode,
    isServerErrorReasonPhrase,
    is5xxServerErrorStatusCode,
} from './isServerErrorStatus';
import {
    HttpServerErrorStatusCodes,
    HttpClientErrorStatusCodes,
} from '../HttpStatusCodes';
import {
    HttpClientErrorReasonPhrases,
    HttpServerErrorReasonPhrases,
} from '../HttpReasonPhrases';

describe('helper functions', function () {
    describe('# isServerErrorStatusCode(statusCode)', function () {
        it('should return `true` if the argument is defined in HttpServerErrorStatusCodes', function () {
            expect(
                isServerErrorStatusCode(
                    HttpServerErrorStatusCodes.InternalServerError
                )
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid defined code between [500 - 599]', function () {
            expect(isServerErrorStatusCode(501)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpServerErrorStatusCodes', function () {
            expect(
                isServerErrorStatusCode(HttpClientErrorStatusCodes.BadRequest)
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid defined code between [500 - 599]', function () {
            expect(isServerErrorStatusCode(404)).to.be.false;
        });
    });

    describe('# isServerErrorReasonPhrase(statusPhrase)', function () {
        it('should return `true` if the argument is defined in HttpServerErrorReasonPhrases', function () {
            expect(
                isServerErrorReasonPhrase(
                    HttpServerErrorReasonPhrases.BadGateway
                )
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid reason phrase string', function () {
            expect(isServerErrorReasonPhrase('Internal Server Error')).to.be
                .true;
        });
        it('should return `false` if the argument is not defined in HttpServerErrorReasonPhrases', function () {
            expect(
                isServerErrorReasonPhrase(HttpClientErrorReasonPhrases.NotFound)
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid reason phrase string', function () {
            expect(isServerErrorReasonPhrase('Length Required')).to.be.false;
        });
    });

    describe('# isServerErrorStatus(status)', function () {
        it('should return `true` if the argument is defined in HttpServerErrorStatusCodes', function () {
            expect(
                isServerErrorStatus(
                    HttpServerErrorStatusCodes.InternalServerError
                )
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid defined code between [500 - 599]', function () {
            expect(isServerErrorStatus(501)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpServerErrorStatusCodes', function () {
            expect(isServerErrorStatus(HttpClientErrorStatusCodes.BadRequest))
                .to.be.false;
        });
        it('should return `false` if the argument is not a valid defined code between [500 - 599]', function () {
            expect(isServerErrorStatus(404)).to.be.false;
        });

        it('should return `true` if the argument is defined in HttpServerErrorReasonPhrases', function () {
            expect(isServerErrorStatus(HttpServerErrorReasonPhrases.BadGateway))
                .to.be.true;
        });
        it('should return `true` if the argument is a valid reason phrase string', function () {
            expect(isServerErrorStatus('Internal Server Error')).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpServerErrorReasonPhrases', function () {
            expect(isServerErrorStatus(HttpClientErrorReasonPhrases.NotFound))
                .to.be.false;
        });
        it('should return `false` if the argument is not a valid reason phrase string', function () {
            expect(isServerErrorStatus('Length Required')).to.be.false;
        });
    });

    describe('# is5xxServerErrorStatusCode(statusCode)', function () {
        it('should return true for any integer between 500 to 599', function () {
            expect(is5xxServerErrorStatusCode(500)).to.be.true;
            expect(is5xxServerErrorStatusCode(550)).to.be.true;
            expect(is5xxServerErrorStatusCode(599)).to.be.true;
        });
        it('should return false for any integer outside of 500 to 599', function () {
            expect(is5xxServerErrorStatusCode(100)).to.be.false;
            expect(is5xxServerErrorStatusCode(400)).to.be.false;
        });
    });
});
