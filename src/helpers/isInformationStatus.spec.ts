import isInformationStatus, {
    isInformationStatusCode,
    isInformationStatusPhrase,
    is1xxInformationStatusCode,
} from './isInformationStatus';
import {
    HttpInformationStatus,
    HttpServerErrorStatus,
} from '../HttpStatusCodes';
import {
    HttpInformationReasonPhrases,
    HttpServerErrorReasonPhrases,
} from '../HttpReasonPhrases';

import { expect } from 'chai';

describe('helper functions', () => {
    describe('# isInformationStatusCode(statusCode)', () => {
        it('should return `true` if the argument is defined in HttpInformationStatus', () => {
            expect(isInformationStatusCode(HttpInformationStatus.Continue)).to
                .be.true;
        });
        it('should return `true` if the argument is a valid defined code between [100 - 199]', () => {
            expect(isInformationStatusCode(101)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpInformationStatus', () => {
            expect(
                isInformationStatusCode(
                    HttpServerErrorStatus.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid defined code between [100 - 199]', () => {
            expect(isInformationStatusCode(404)).to.be.false;
        });
    });

    describe('# isInformationStatusPhrase(statusPhrase)', () => {
        it('should return `true` if the argument is defined in HttpInformationReasonPhrases', () => {
            expect(
                isInformationStatusPhrase(HttpInformationReasonPhrases.Continue)
            ).to.be.true;
        });
        it('should return `true` if the argument is a valid reason phrase string', () => {
            expect(isInformationStatusPhrase('Early Hints')).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpInformationReasonPhrases', () => {
            expect(
                isInformationStatusPhrase(
                    HttpServerErrorReasonPhrases.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid reason phrase string', () => {
            expect(isInformationStatusPhrase('Internal Server Error')).to.be
                .false;
        });
    });

    describe('# isInformationStatus(status)', () => {
        it('should return `true` if the argument is defined in HttpInformationStatus', () => {
            expect(isInformationStatus(HttpInformationStatus.Continue)).to.be
                .true;
        });
        it('should return `true` if the argument is a valid defined code between [100 - 199]', () => {
            expect(isInformationStatus(101)).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpInformationStatus', () => {
            expect(
                isInformationStatus(HttpServerErrorStatus.InternalServerError)
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid defined code between [100 - 199]', () => {
            expect(isInformationStatus(404)).to.be.false;
        });

        it('should return `true` if the argument is defined in HttpInformationReasonPhrases', () => {
            expect(isInformationStatus(HttpInformationReasonPhrases.Continue))
                .to.be.true;
        });
        it('should return `true` if the argument is a valid reason phrase string', () => {
            expect(isInformationStatus('Early Hints')).to.be.true;
        });
        it('should return `false` if the argument is not defined in HttpInformationReasonPhrases', () => {
            expect(
                isInformationStatus(
                    HttpServerErrorReasonPhrases.InternalServerError
                )
            ).to.be.false;
        });
        it('should return `false` if the argument is not a valid reason phrase string', () => {
            expect(isInformationStatus('Internal Server Error')).to.be.false;
        });
    });

    describe('# is1xxInformationStatusCode(statusCode)', () => {
        it('should return true for any integer between 100 to 199', () => {
            expect(is1xxInformationStatusCode(100)).to.be.true;
            expect(is1xxInformationStatusCode(150)).to.be.true;
            expect(is1xxInformationStatusCode(199)).to.be.true;
        });
        it('should return false for any integer outside of 100 to 199', () => {
            expect(is1xxInformationStatusCode(200)).to.be.false;
            expect(is1xxInformationStatusCode(500)).to.be.false;
        });
    });
});
