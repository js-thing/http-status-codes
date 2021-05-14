import isServerErrorStatus, {
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

import { expect } from 'chai';

describe('helper functions', () => {
    describe('# isServerErrorStatusCode(statusCode)', () => {
        it('should return `true` if the argument is defined in HttpServerErrorStatusCodes', () => {
            expect(
                isServerErrorStatusCode(
                    HttpServerErrorStatusCodes.InternalServerError
                )
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid defined code between [500 - 599]', () => {
            expect(isServerErrorStatusCode(501)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpServerErrorStatusCodes', () => {
            expect(isServerErrorStatusCode(HttpClientErrorStatusCodes.BadRequest)).to
                .be.false;
        });
        it('should return `false` if the argument is not a valid defined code between [500 - 599]', () => {
            expect(isServerErrorStatusCode(404)).to.be.false;
        });
    });

    describe('# isServerErrorReasonPhrase(statusPhrase)', () => {
        it('should return `true` if the argument is defined in HttpServerErrorReasonPhrases', () => {
            expect(
                isServerErrorReasonPhrase(
                    HttpServerErrorReasonPhrases.BadGateway
                )
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid reason phrase string', () => {
            expect(isServerErrorReasonPhrase('Internal Server Error')).to.be
                .true;
        });
        it('should return `false` if the argument is not defined in HttpServerErrorReasonPhrases', () => {
            expect(
                isServerErrorReasonPhrase(HttpClientErrorReasonPhrases.NotFound)
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid reason phrase string', () => {
            expect(isServerErrorReasonPhrase('Length Required')).to.be.false;
        });
    });

    describe('# isServerErrorStatus(status)', () => {
        it('should return `true` if the argument is defined in HttpServerErrorStatusCodes', () => {
            expect(
                isServerErrorStatus(HttpServerErrorStatusCodes.InternalServerError)
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid defined code between [500 - 599]', () => {
            expect(isServerErrorStatus(501)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpServerErrorStatusCodes', () => {
            expect(isServerErrorStatus(HttpClientErrorStatusCodes.BadRequest)).to.be
                .false;
        });
        it('should return `false` if the argument is not a valid defined code between [500 - 599]', () => {
            expect(isServerErrorStatus(404)).to.be.false;
        });

        it('should return `true` if the argument is defined in HttpServerErrorReasonPhrases', () => {
            expect(isServerErrorStatus(HttpServerErrorReasonPhrases.BadGateway))
                .to.be.true;
        });
        it('should return `true` if the argument is a valid reason phrase string', () => {
            expect(isServerErrorStatus('Internal Server Error')).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpServerErrorReasonPhrases', () => {
            expect(isServerErrorStatus(HttpClientErrorReasonPhrases.NotFound))
                .to.be.false;
        });
        it('should return `false` if the argument is not a valid reason phrase string', () => {
            expect(isServerErrorStatus('Length Required')).to.be.false;
        });
    });

    describe('# is5xxServerErrorStatusCode(statusCode)', () => {
        it('should return true for any integer between 500 to 599', () => {
            expect(is5xxServerErrorStatusCode(500)).to.be.true;
            expect(is5xxServerErrorStatusCode(550)).to.be.true;
            expect(is5xxServerErrorStatusCode(599)).to.be.true;
        });
        it('should return false for any integer outside of 500 to 599', () => {
            expect(is5xxServerErrorStatusCode(100)).to.be.false;
            expect(is5xxServerErrorStatusCode(400)).to.be.false;
        });
    });
});
