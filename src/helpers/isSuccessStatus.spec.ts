import isSuccessStatus, {
    isSuccessStatusCode,
    isSuccessStatusPhrase,
    is2xxSuccessStatusCode,
} from './isSuccessStatus';
import { HttpSuccessStatus, HttpServerErrorStatus } from '../HttpStatusCodes';
import {
    HttpSuccessReasonPhrases,
    HttpServerErrorReasonPhrases,
} from '../HttpReasonPhrases';

import { expect } from 'chai';

describe('helper functions', () => {
    describe('# isSuccessStatusCode(statusCode)', () => {
        it('should return `true` if the argument is defined in HttpSuccessStatus', () => {
            expect(isSuccessStatusCode(HttpSuccessStatus.Ok)).to.be.true;
        });
        it('should return `true` if the argument is a valid defined code between [200 - 299]', () => {
            expect(isSuccessStatusCode(201)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpSuccessStatus', () => {
            expect(
                isSuccessStatusCode(HttpServerErrorStatus.InternalServerError)
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid defined code between [200 - 299]', () => {
            expect(isSuccessStatusCode(404)).to.be.false;
        });
    });

    describe('# isSuccessStatusPhrase(statusPhrase)', () => {
        it('should return `true` if the argument is defined in HttpSuccessReasonPhrases', () => {
            expect(isSuccessStatusPhrase(HttpSuccessReasonPhrases.Ok)).to.be
                .true;
        });
        it('should return `true` if the argument is a valid reason phrase string', () => {
            expect(isSuccessStatusPhrase('No Content')).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpSuccessReasonPhrases', () => {
            expect(
                isSuccessStatusPhrase(
                    HttpServerErrorReasonPhrases.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid reason phrase string', () => {
            expect(isSuccessStatusPhrase('Internal Server Error')).to.be.false;
        });
    });

    describe('# isSuccessStatus(status)', () => {
        it('should return `true` if the argument is defined in HttpSuccessStatus', () => {
            expect(isSuccessStatus(HttpSuccessStatus.Ok)).to.be.true;
        });
        it('should return `true` if the argument is a valid defined code between [200 - 299]', () => {
            expect(isSuccessStatus(201)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpSuccessStatus', () => {
            expect(isSuccessStatus(HttpServerErrorStatus.InternalServerError))
                .to.be.false;
        });
        it('should return `false` if the argument is not a valid defined code between [200 - 299]', () => {
            expect(isSuccessStatus(404)).to.be.false;
        });

        it('should return `true` if the argument is defined in HttpSuccessReasonPhrases', () => {
            expect(isSuccessStatus(HttpSuccessReasonPhrases.Ok)).to.be.true;
        });
        it('should return `true` if the argument is a valid reason phrase string', () => {
            expect(isSuccessStatus('No Content')).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpSuccessReasonPhrases', () => {
            expect(
                isSuccessStatus(
                    HttpServerErrorReasonPhrases.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid reason phrase string', () => {
            expect(isSuccessStatus('Internal Server Error')).to.be.false;
        });
    });

    describe('# is2xxSuccessStatusCode(statusCode)', () => {
        it('should return true for any integer between 200 to 299', () => {
            expect(is2xxSuccessStatusCode(200)).to.be.true;
            expect(is2xxSuccessStatusCode(250)).to.be.true;
            expect(is2xxSuccessStatusCode(299)).to.be.true;
        });
        it('should return false for any integer outside of 200 to 299', () => {
            expect(is2xxSuccessStatusCode(100)).to.be.false;
            expect(is2xxSuccessStatusCode(500)).to.be.false;
        });
    });
});
