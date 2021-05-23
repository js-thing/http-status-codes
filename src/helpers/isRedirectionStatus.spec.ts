import { expect } from 'chai';
import {
    isRedirectionStatus,
    isRedirectionStatusCode,
    isRedirectionReasonPhrase,
    is3xxRedirectionStatusCode,
} from './isRedirectionStatus';
import {
    HttpRedirectionStatusCodes,
    HttpStatusCodes,
} from '../HttpStatusCodes';
import {
    HttpReasonPhrases,
    HttpRedirectionReasonPhrases,
} from '../HttpReasonPhrases';

describe('isRedirectionStatus', function () {
    describe('isRedirectionStatusCode', function () {
        it('# Returns true for all codes defined in HttpRedirectionStatusCodes', function () {
            Object.values(HttpRedirectionStatusCodes).forEach((code) => {
                if (typeof code === 'number') {
                    expect(isRedirectionStatusCode(code)).to.be.true;
                }
            });
            expect(isRedirectionStatusCode(300)).to.be.true;
        });
        it('# Returns false for all codes not defined in HttpRedirectionStatusCodes', function () {
            Object.values(HttpStatusCodes).forEach((code) => {
                if (
                    typeof code === 'number' &&
                    !(code in HttpRedirectionStatusCodes)
                ) {
                    expect(isRedirectionStatusCode(code)).to.be.false;
                }
            });
            expect(isRedirectionStatusCode(2344575)).to.be.false;
        });
    });

    describe('isRedirectionReasonPhrase', function () {
        it('# Returns true for all phrases defined in HttpRedirectionReasonPhrases', function () {
            Object.values(HttpRedirectionReasonPhrases).forEach((phrase) => {
                expect(isRedirectionReasonPhrase(phrase)).to.be.true;
            });
            expect(isRedirectionReasonPhrase('Found')).to.be.true;
        });
        it('# Returns false for all phrases not defined in HttpRedirectionReasonPhrases', function () {
            Object.entries(HttpReasonPhrases).forEach((phrase) => {
                if (
                    !(
                        HttpRedirectionReasonPhrases as {
                            [key: string]: string;
                        }
                    )[phrase[0]]
                ) {
                    expect(isRedirectionReasonPhrase(phrase[1])).to.be.false;
                }
            });
            expect(isRedirectionReasonPhrase('Ok')).to.be.false;
        });
    });

    describe('isRedirectionStatus', function () {
        it('# Returns true for all codes defined in HttpRedirectionStatusCodes', function () {
            Object.values(HttpRedirectionStatusCodes).forEach((code) => {
                if (typeof code === 'number') {
                    expect(isRedirectionStatus(code)).to.be.true;
                }
            });
            expect(isRedirectionStatus(300)).to.be.true;
        });
        it('# Returns false for all codes not defined in HttpRedirectionStatusCodes', function () {
            Object.values(HttpStatusCodes).forEach((code) => {
                if (
                    typeof code === 'number' &&
                    !(code in HttpRedirectionStatusCodes)
                ) {
                    expect(isRedirectionStatus(code)).to.be.false;
                }
            });
            expect(isRedirectionStatus(2344575)).to.be.false;
        });
        it('# Returns true for all phrases defined in HttpRedirectionReasonPhrases', function () {
            Object.values(HttpRedirectionReasonPhrases).forEach((phrase) => {
                expect(isRedirectionStatus(phrase)).to.be.true;
            });
            expect(isRedirectionStatus('Found')).to.be.true;
        });
        it('# Returns false for all phrases not defined in HttpRedirectionReasonPhrases', function () {
            Object.entries(HttpReasonPhrases).forEach((phrase) => {
                if (
                    !(
                        HttpRedirectionReasonPhrases as {
                            [key: string]: string;
                        }
                    )[phrase[0]]
                ) {
                    expect(isRedirectionStatus(phrase[1])).to.be.false;
                }
            });
            expect(isRedirectionStatus('Ok')).to.be.false;
        });
    });

    describe('is3xxRedirectionStatusCode', function () {
        it('# Returns true for any integer in range [300 - 399]', function () {
            for (let code = 300; code <= 399; code += 1) {
                expect(is3xxRedirectionStatusCode(code)).to.be.true;
            }
        });
        it('# Returns false for any integer outside of range [300 - 399]', function () {
            for (let code = 0; code <= 1000; code += 1) {
                if (code < 300 || code > 399) {
                    expect(is3xxRedirectionStatusCode(code)).to.be.false;
                }
            }
        });
    });
});
