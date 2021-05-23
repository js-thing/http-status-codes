import { expect } from 'chai';
import {
    isServerErrorStatus,
    isServerErrorStatusCode,
    isServerErrorReasonPhrase,
    is5xxServerErrorStatusCode,
} from './isServerErrorStatus';
import {
    HttpServerErrorStatusCodes,
    HttpStatusCodes,
} from '../HttpStatusCodes';
import {
    HttpReasonPhrases,
    HttpServerErrorReasonPhrases,
} from '../HttpReasonPhrases';

describe('isServerErrorStatus', function () {
    describe('isServerErrorStatusCode', function () {
        it('# Returns true for all codes defined in HttpServerErrorStatusCodes', function () {
            Object.values(HttpServerErrorStatusCodes).forEach((code) => {
                if (typeof code === 'number') {
                    expect(isServerErrorStatusCode(code)).to.be.true;
                }
            });
            expect(isServerErrorStatusCode(500)).to.be.true;
        });
        it('# Returns false for all codes not defined in HttpServerErrorStatusCodes', function () {
            Object.values(HttpStatusCodes).forEach((code) => {
                if (
                    typeof code === 'number' &&
                    !(code in HttpServerErrorStatusCodes)
                ) {
                    expect(isServerErrorStatusCode(code)).to.be.false;
                }
            });
            expect(isServerErrorStatusCode(2344575)).to.be.false;
        });
    });

    describe('isServerErrorReasonPhrase', function () {
        it('# Returns true for all phrases defined in HttpServerErrorReasonPhrases', function () {
            Object.values(HttpServerErrorReasonPhrases).forEach((phrase) => {
                expect(isServerErrorReasonPhrase(phrase)).to.be.true;
            });
            expect(isServerErrorReasonPhrase('Internal Server Error')).to.be
                .true;
        });
        it('# Returns false for all phrases not defined in HttpServerErrorReasonPhrases', function () {
            Object.entries(HttpReasonPhrases).forEach((phrase) => {
                if (
                    !(
                        HttpServerErrorReasonPhrases as {
                            [key: string]: string;
                        }
                    )[phrase[0]]
                ) {
                    expect(isServerErrorReasonPhrase(phrase[1])).to.be.false;
                }
            });
            expect(isServerErrorReasonPhrase('Ok')).to.be.false;
        });
    });

    describe('isServerErrorStatus', function () {
        it('# Returns true for all codes defined in HttpServerErrorStatusCodes', function () {
            Object.values(HttpServerErrorStatusCodes).forEach((code) => {
                if (typeof code === 'number') {
                    expect(isServerErrorStatus(code)).to.be.true;
                }
            });
            expect(isServerErrorStatus(500)).to.be.true;
        });
        it('# Returns false for all codes not defined in HttpServerErrorStatusCodes', function () {
            Object.values(HttpStatusCodes).forEach((code) => {
                if (
                    typeof code === 'number' &&
                    !(code in HttpServerErrorStatusCodes)
                ) {
                    expect(isServerErrorStatus(code)).to.be.false;
                }
            });
            expect(isServerErrorStatus(2344575)).to.be.false;
        });
        it('# Returns true for all phrases defined in HttpServerErrorReasonPhrases', function () {
            Object.values(HttpServerErrorReasonPhrases).forEach((phrase) => {
                expect(isServerErrorStatus(phrase)).to.be.true;
            });
            expect(isServerErrorStatus('Internal Server Error')).to.be.true;
        });
        it('# Returns false for all phrases not defined in HttpServerErrorReasonPhrases', function () {
            Object.entries(HttpReasonPhrases).forEach((phrase) => {
                if (
                    !(
                        HttpServerErrorReasonPhrases as {
                            [key: string]: string;
                        }
                    )[phrase[0]]
                ) {
                    expect(isServerErrorStatus(phrase[1])).to.be.false;
                }
            });
            expect(isServerErrorStatus('Ok')).to.be.false;
        });
    });

    describe('is3xxRedirectionStatusCode', function () {
        it('# Returns true for any integer in range [500 - 599]', function () {
            for (let code = 500; code <= 599; code += 1) {
                expect(is5xxServerErrorStatusCode(code)).to.be.true;
            }
        });
        it('# Returns false for any integer outside of range [500 - 599]', function () {
            for (let code = 0; code <= 1000; code += 1) {
                if (code < 500 || code > 599) {
                    expect(is5xxServerErrorStatusCode(code)).to.be.false;
                }
            }
        });
    });
});
