import isClientErrorStatus, {
    isClientErrorStatusCode,
    isClientErrorStatusPhrase,
    is4xxClientErrorStatusCode,
} from './isClientErrorStatus';
import {
    HttpClientErrorStatus,
    HttpServerErrorStatus,
} from '../HttpStatusCodes';
import {
    HttpClientErrorReasonPhrases,
    HttpServerErrorReasonPhrases,
} from '../HttpReasonPhrases';

import { expect } from 'chai';

describe('helper functions', () => {
    describe('# isClientErrorStatusCode(statusCode)', () => {
        it('should return `true` if the argument is defined in HttpClientErrorStatus', () => {
            expect(isClientErrorStatusCode(HttpClientErrorStatus.BadRequest)).to
                .be.true;
        });
        it('should return `true` if the argument is a valid defined code between [400 - 499]', () => {
            expect(isClientErrorStatusCode(401)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpClientErrorStatus', () => {
            expect(
                isClientErrorStatusCode(
                    HttpServerErrorStatus.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid defined code between [400 - 499]', () => {
            expect(isClientErrorStatusCode(100)).to.be.false;
        });
    });

    describe('# isClientErrorStatusPhrase(statusPhrase)', () => {
        it('should return `true` if the argument is defined in HttpClientErrorReasonPhrases', () => {
            expect(
                isClientErrorStatusPhrase(
                    HttpClientErrorReasonPhrases.BadRequest
                )
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid reason phrase string', () => {
            expect(isClientErrorStatusPhrase('Forbidden')).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpClientErrorReasonPhrases', () => {
            expect(
                isClientErrorStatusPhrase(
                    HttpServerErrorReasonPhrases.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid reason phrase string', () => {
            expect(isClientErrorStatusPhrase('Internal Server Error')).to.be
                .false;
        });
    });

    describe('# isClientErrorStatus(status)', () => {
        it('should return `true` if the argument is defined in HttpClientErrorStatus', () => {
            expect(isClientErrorStatus(HttpClientErrorStatus.BadRequest)).to.be
                .true;
        });
        it('should return `true` if the argument is a valid defined code between [400 - 499]', () => {
            expect(isClientErrorStatus(401)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpClientErrorStatus', () => {
            expect(
                isClientErrorStatus(HttpServerErrorStatus.InternalServerError)
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid defined code between [400 - 499]', () => {
            expect(isClientErrorStatus(100)).to.be.false;
        });

        it('should return `true` if the argument is defined in HttpClientErrorReasonPhrases', () => {
            expect(isClientErrorStatus(HttpClientErrorReasonPhrases.BadRequest))
                .to.be.true;
        });
        it('should return `true` if the argument is a valid reason phrase string', () => {
            expect(isClientErrorStatus('Forbidden')).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpClientErrorReasonPhrases', () => {
            expect(
                isClientErrorStatus(
                    HttpServerErrorReasonPhrases.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid reason phrase string', () => {
            expect(isClientErrorStatus('Internal Server Error')).to.be.false;
        });
    });

    describe('# is4xxClientErrorStatusCode(statusCode)', () => {
        it('should return true for any integer between 400 to 499', () => {
            expect(is4xxClientErrorStatusCode(400)).to.be.true;
            expect(is4xxClientErrorStatusCode(450)).to.be.true;
            expect(is4xxClientErrorStatusCode(499)).to.be.true;
        });
        it('should return false for any integer outside of 400 to 499', () => {
            expect(is4xxClientErrorStatusCode(100)).to.be.false;
            expect(is4xxClientErrorStatusCode(500)).to.be.false;
        });
    });
});
