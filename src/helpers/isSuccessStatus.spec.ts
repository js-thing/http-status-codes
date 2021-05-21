import { expect } from 'chai';
import {
    isSuccessStatus,
    isSuccessStatusCode,
    isSuccessReasonPhrase,
    is2xxSuccessStatusCode,
} from './isSuccessStatus';
import {
    HttpSuccessStatusCodes,
    HttpServerErrorStatusCodes,
} from '../HttpStatusCodes';
import {
    HttpSuccessReasonPhrases,
    HttpServerErrorReasonPhrases,
} from '../HttpReasonPhrases';

describe('helper functions', function () {
    describe('# isSuccessStatusCode(statusCode)', function () {
        it('should return `true` if the argument is defined in HttpSuccessStatusCodes', function () {
            expect(isSuccessStatusCode(HttpSuccessStatusCodes.Ok)).to.be.true;
        });
        it('should return `true` if the argument is a valid defined code between [200 - 299]', function () {
            expect(isSuccessStatusCode(201)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpSuccessStatusCodes', function () {
            expect(
                isSuccessStatusCode(
                    HttpServerErrorStatusCodes.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid defined code between [200 - 299]', function () {
            expect(isSuccessStatusCode(404)).to.be.false;
        });
    });

    describe('# isSuccessReasonPhrase(statusPhrase)', function () {
        it('should return `true` if the argument is defined in HttpSuccessReasonPhrases', function () {
            expect(isSuccessReasonPhrase(HttpSuccessReasonPhrases.Ok)).to.be
                .true;
        });
        it('should return `true` if the argument is a valid reason phrase string', function () {
            expect(isSuccessReasonPhrase('No Content')).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpSuccessReasonPhrases', function () {
            expect(
                isSuccessReasonPhrase(
                    HttpServerErrorReasonPhrases.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid reason phrase string', function () {
            expect(isSuccessReasonPhrase('Internal Server Error')).to.be.false;
        });
    });

    describe('# isSuccessStatus(status)', function () {
        it('should return `true` if the argument is defined in HttpSuccessStatusCodes', function () {
            expect(isSuccessStatus(HttpSuccessStatusCodes.Ok)).to.be.true;
        });
        it('should return `true` if the argument is a valid defined code between [200 - 299]', function () {
            expect(isSuccessStatus(201)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpSuccessStatusCodes', function () {
            expect(
                isSuccessStatus(HttpServerErrorStatusCodes.InternalServerError)
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid defined code between [200 - 299]', function () {
            expect(isSuccessStatus(404)).to.be.false;
        });

        it('should return `true` if the argument is defined in HttpSuccessReasonPhrases', function () {
            expect(isSuccessStatus(HttpSuccessReasonPhrases.Ok)).to.be.true;
        });
        it('should return `true` if the argument is a valid reason phrase string', function () {
            expect(isSuccessStatus('No Content')).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpSuccessReasonPhrases', function () {
            expect(
                isSuccessStatus(
                    HttpServerErrorReasonPhrases.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid reason phrase string', function () {
            expect(isSuccessStatus('Internal Server Error')).to.be.false;
        });
    });

    describe('# is2xxSuccessStatusCode(statusCode)', function () {
        it('should return true for any integer between 200 to 299', function () {
            expect(is2xxSuccessStatusCode(200)).to.be.true;
            expect(is2xxSuccessStatusCode(250)).to.be.true;
            expect(is2xxSuccessStatusCode(299)).to.be.true;
        });
        it('should return false for any integer outside of 200 to 299', function () {
            expect(is2xxSuccessStatusCode(100)).to.be.false;
            expect(is2xxSuccessStatusCode(500)).to.be.false;
        });
    });
});
