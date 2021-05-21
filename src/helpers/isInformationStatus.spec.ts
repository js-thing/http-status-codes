import { expect } from 'chai';
import {
    isInformationStatus,
    isInformationStatusCode,
    isInformationReasonPhrase,
    is1xxInformationStatusCode,
} from './isInformationStatus';
import {
    HttpInformationStatusCodes,
    HttpServerErrorStatusCodes,
} from '../HttpStatusCodes';
import {
    HttpInformationReasonPhrases,
    HttpServerErrorReasonPhrases,
} from '../HttpReasonPhrases';

describe('helper functions', function () {
    describe('# isInformationStatusCode(statusCode)', function () {
        it('should return `true` if the argument is defined in HttpInformationStatusCodes', function () {
            expect(isInformationStatusCode(HttpInformationStatusCodes.Continue))
                .to.be.true;
        });
        it('should return `true` if the argument is a valid defined code between [100 - 199]', function () {
            expect(isInformationStatusCode(101)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpInformationStatusCodes', function () {
            expect(
                isInformationStatusCode(
                    HttpServerErrorStatusCodes.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid defined code between [100 - 199]', function () {
            expect(isInformationStatusCode(404)).to.be.false;
        });
    });

    describe('# isInformationReasonPhrase(statusPhrase)', function () {
        it('should return `true` if the argument is defined in HttpInformationReasonPhrases', function () {
            expect(
                isInformationReasonPhrase(HttpInformationReasonPhrases.Continue)
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid reason phrase string', function () {
            expect(isInformationReasonPhrase('Early Hints')).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpInformationReasonPhrases', function () {
            expect(
                isInformationReasonPhrase(
                    HttpServerErrorReasonPhrases.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid reason phrase string', function () {
            expect(isInformationReasonPhrase('Internal Server Error')).to.be
                .false;
        });
    });

    describe('# isInformationStatus(status)', function () {
        it('should return `true` if the argument is defined in HttpInformationStatusCodes', function () {
            expect(isInformationStatus(HttpInformationStatusCodes.Continue)).to
                .be.true;
        });
        it('should return `true` if the argument is a valid defined code between [100 - 199]', function () {
            expect(isInformationStatus(101)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpInformationStatusCodes', function () {
            expect(
                isInformationStatus(
                    HttpServerErrorStatusCodes.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid defined code between [100 - 199]', function () {
            expect(isInformationStatus(404)).to.be.false;
        });

        it('should return `true` if the argument is defined in HttpInformationReasonPhrases', function () {
            expect(isInformationStatus(HttpInformationReasonPhrases.Continue))
                .to.be.true;
        });
        it('should return `true` if the argument is a valid reason phrase string', function () {
            expect(isInformationStatus('Early Hints')).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpInformationReasonPhrases', function () {
            expect(
                isInformationStatus(
                    HttpServerErrorReasonPhrases.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid reason phrase string', function () {
            expect(isInformationStatus('Internal Server Error')).to.be.false;
        });
    });

    describe('# is1xxInformationStatusCode(statusCode)', function () {
        it('should return true for any integer between 100 to 199', function () {
            expect(is1xxInformationStatusCode(100)).to.be.true;
            expect(is1xxInformationStatusCode(150)).to.be.true;
            expect(is1xxInformationStatusCode(199)).to.be.true;
        });
        it('should return false for any integer outside of 100 to 199', function () {
            expect(is1xxInformationStatusCode(200)).to.be.false;
            expect(is1xxInformationStatusCode(500)).to.be.false;
        });
    });
});
