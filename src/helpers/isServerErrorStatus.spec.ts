import isServerErrorStatus, {
    isServerErrorStatusCode,
    isServerErrorStatusPhrase,
    is5xxServerErrorStatusCode,
} from './isServerErrorStatus';
import {
    HttpServerErrorStatus,
    HttpClientErrorStatus,
} from '../HttpStatusCodes';
import {
    HttpClientErrorStatusReasonPhrases,
    HttpServerErrorStatusReasonPhrase,
} from '../HttpStatusCodeReasonPhrases';

import { expect } from 'chai';

describe('helper functions', () => {
    describe('# isServerErrorStatusCode(statusCode)', () => {
        it('should return `true` if the argument is defined in HttpServerErrorStatus', () => {
            expect(
                isServerErrorStatusCode(
                    HttpServerErrorStatus.InternalServerError
                )
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid defined code between [500 - 599]', () => {
            expect(isServerErrorStatusCode(501)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpServerErrorStatus', () => {
            expect(isServerErrorStatusCode(HttpClientErrorStatus.BadRequest)).to
                .be.false;
        });
        it('should return `false` if the argument is not a valid defined code between [500 - 599]', () => {
            expect(isServerErrorStatusCode(404)).to.be.false;
        });
    });

    describe('# isServerErrorStatusPhrase(statusPhrase)', () => {
        it('should return `true` if the argument is defined in HttpServerErrorStatusReasonPhrase', () => {
            expect(
                isServerErrorStatusPhrase(
                    HttpServerErrorStatusReasonPhrase.BadGateway
                )
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid reason phrase string', () => {
            expect(isServerErrorStatusPhrase('Internal Server Error')).to.be
                .true;
        });
        it('should return `false` if the argument is not defined in HttpServerErrorStatusReasonPhrase', () => {
            expect(
                isServerErrorStatusPhrase(
                    HttpClientErrorStatusReasonPhrases.NotFound
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid reason phrase string', () => {
            expect(isServerErrorStatusPhrase('Length Required')).to.be.false;
        });
    });

    describe('# isServerErrorStatus(status)', () => {
        it('should return `true` if the argument is defined in HttpServerErrorStatus', () => {
            expect(
                isServerErrorStatus(HttpServerErrorStatus.InternalServerError)
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid defined code between [500 - 599]', () => {
            expect(isServerErrorStatus(501)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpServerErrorStatus', () => {
            expect(isServerErrorStatus(HttpClientErrorStatus.BadRequest)).to.be
                .false;
        });
        it('should return `false` if the argument is not a valid defined code between [500 - 599]', () => {
            expect(isServerErrorStatus(404)).to.be.false;
        });

        it('should return `true` if the argument is defined in HttpServerErrorStatusReasonPhrase', () => {
            expect(
                isServerErrorStatus(
                    HttpServerErrorStatusReasonPhrase.BadGateway
                )
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid reason phrase string', () => {
            expect(isServerErrorStatus('Internal Server Error')).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpServerErrorStatusReasonPhrase', () => {
            expect(
                isServerErrorStatus(HttpClientErrorStatusReasonPhrases.NotFound)
            ).to.be.false;
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
