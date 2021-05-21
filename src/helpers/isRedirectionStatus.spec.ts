import { expect } from 'chai';
import {
    isRedirectionStatus,
    isRedirectionStatusCode,
    isRedirectionReasonPhrase,
    is3xxRedirectionStatusCode,
} from './isRedirectionStatus';
import {
    HttpRedirectionStatusCodes,
    HttpServerErrorStatusCodes,
} from '../HttpStatusCodes';
import {
    HttpRedirectionReasonPhrases,
    HttpServerErrorReasonPhrases,
} from '../HttpReasonPhrases';

describe('redirection helper functions', function () {
    describe('# isRedirectionStatusCode(statusCode)', function () {
        it('should return `true` if the argument is defined in HttpRedirectionStatusCodes', function () {
            expect(
                isRedirectionStatusCode(
                    HttpRedirectionStatusCodes.MovedPermanently
                )
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid defined code between [300 - 399]', function () {
            expect(isRedirectionStatusCode(300)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpRedirectionStatusCodes', function () {
            expect(
                isRedirectionStatusCode(
                    HttpServerErrorStatusCodes.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid defined code between [300 - 399]', function () {
            expect(isRedirectionStatusCode(404)).to.be.false;
        });
    });

    describe('# isRedirectionReasonPhrase(statusPhrase)', function () {
        it('should return `true` if the argument is defined in HttpRedirectionReasonPhrases', function () {
            expect(
                isRedirectionReasonPhrase(
                    HttpRedirectionReasonPhrases.PermanentRedirect
                )
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid reason phrase string', function () {
            expect(isRedirectionReasonPhrase('Moved Permanently')).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpRedirectionReasonPhrases', function () {
            expect(
                isRedirectionReasonPhrase(
                    HttpServerErrorReasonPhrases.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid reason phrase string', function () {
            expect(isRedirectionReasonPhrase('Internal Server Error')).to.be
                .false;
        });
    });

    describe('# isRedirectionStatus(status)', function () {
        it('should return `true` if the argument is defined in HttpRedirectionStatusCodes', function () {
            expect(
                isRedirectionStatus(HttpRedirectionStatusCodes.MovedPermanently)
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid defined code between [300 - 399]', function () {
            expect(isRedirectionStatus(300)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpRedirectionStatusCodes', function () {
            expect(
                isRedirectionStatus(
                    HttpServerErrorStatusCodes.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid defined code between [300 - 399]', function () {
            expect(isRedirectionStatus(404)).to.be.false;
        });

        it('should return `true` if the argument is defined in HttpRedirectionReasonPhrases', function () {
            expect(
                isRedirectionStatus(
                    HttpRedirectionReasonPhrases.PermanentRedirect
                )
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid reason phrase string', function () {
            expect(isRedirectionStatus('Moved Permanently')).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpRedirectionReasonPhrases', function () {
            expect(
                isRedirectionStatus(
                    HttpServerErrorReasonPhrases.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid reason phrase string', function () {
            expect(isRedirectionStatus('Internal Server Error')).to.be.false;
        });
    });

    describe('# is3xxRedirectionStatusCode(statusCode)', function () {
        it('should return true for any integer between 300 to 399', function () {
            expect(is3xxRedirectionStatusCode(300)).to.be.true;
            expect(is3xxRedirectionStatusCode(350)).to.be.true;
            expect(is3xxRedirectionStatusCode(399)).to.be.true;
        });
        it('should return false for any integer outside of 300 to 399', function () {
            expect(is3xxRedirectionStatusCode(100)).to.be.false;
            expect(is3xxRedirectionStatusCode(500)).to.be.false;
        });
    });
});
