import isRedirectionStatus, {
    isRedirectionStatusCode,
    isRedirectionStatusPhrase,
    is3xxRedirectionStatusCode,
} from './isRedirectionStatus';
import {
    HttpRedirectionStatus,
    HttpServerErrorStatus,
} from '../HttpStatusCodes';
import {
    HttpRedirectionReasonPhrases,
    HttpServerErrorReasonPhrases,
} from '../HttpReasonPhrases';

import { expect } from 'chai';

describe('redirection helper functions', () => {
    describe('# isRedirectionStatusCode(statusCode)', () => {
        it('should return `true` if the argument is defined in HttpRedirectionStatus', () => {
            expect(
                isRedirectionStatusCode(HttpRedirectionStatus.MovedPermanently)
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid defined code between [300 - 399]', () => {
            expect(isRedirectionStatusCode(300)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpRedirectionStatus', () => {
            expect(
                isRedirectionStatusCode(
                    HttpServerErrorStatus.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid defined code between [300 - 399]', () => {
            expect(isRedirectionStatusCode(404)).to.be.false;
        });
    });

    describe('# isRedirectionStatusPhrase(statusPhrase)', () => {
        it('should return `true` if the argument is defined in HttpRedirectionReasonPhrases', () => {
            expect(
                isRedirectionStatusPhrase(
                    HttpRedirectionReasonPhrases.PermanentRedirect
                )
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid reason phrase string', () => {
            expect(isRedirectionStatusPhrase('Moved Permanently')).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpRedirectionReasonPhrases', () => {
            expect(
                isRedirectionStatusPhrase(
                    HttpServerErrorReasonPhrases.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid reason phrase string', () => {
            expect(isRedirectionStatusPhrase('Internal Server Error')).to.be
                .false;
        });
    });

    describe('# isRedirectionStatus(status)', () => {
        it('should return `true` if the argument is defined in HttpRedirectionStatus', () => {
            expect(isRedirectionStatus(HttpRedirectionStatus.MovedPermanently))
                .to.be.true;
        });
        it('should return `true` if the argument is a valid defined code between [300 - 399]', () => {
            expect(isRedirectionStatus(300)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpRedirectionStatus', () => {
            expect(
                isRedirectionStatus(HttpServerErrorStatus.InternalServerError)
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid defined code between [300 - 399]', () => {
            expect(isRedirectionStatus(404)).to.be.false;
        });

        it('should return `true` if the argument is defined in HttpRedirectionReasonPhrases', () => {
            expect(
                isRedirectionStatus(
                    HttpRedirectionReasonPhrases.PermanentRedirect
                )
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid reason phrase string', () => {
            expect(isRedirectionStatus('Moved Permanently')).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpRedirectionReasonPhrases', () => {
            expect(
                isRedirectionStatus(
                    HttpServerErrorReasonPhrases.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid reason phrase string', () => {
            expect(isRedirectionStatus('Internal Server Error')).to.be.false;
        });
    });

    describe('# is3xxRedirectionStatusCode(statusCode)', () => {
        it('should return true for any integer between 300 to 399', () => {
            expect(is3xxRedirectionStatusCode(300)).to.be.true;
            expect(is3xxRedirectionStatusCode(350)).to.be.true;
            expect(is3xxRedirectionStatusCode(399)).to.be.true;
        });
        it('should return false for any integer outside of 300 to 399', () => {
            expect(is3xxRedirectionStatusCode(100)).to.be.false;
            expect(is3xxRedirectionStatusCode(500)).to.be.false;
        });
    });
});
