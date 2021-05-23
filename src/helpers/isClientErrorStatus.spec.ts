import { expect } from 'chai';
import {
    isClientErrorStatus,
    isClientErrorStatusCode,
    isClientErrorReasonPhrase,
    is4xxClientErrorStatusCode,
} from './isClientErrorStatus';
import {
    HttpStatusCodes,
    HttpClientErrorStatusCodes,
} from '../HttpStatusCodes';
import {
    HttpClientErrorReasonPhrases,
    HttpReasonPhrases,
} from '../HttpReasonPhrases';

describe('isClientErrorStatus', function () {
    describe('isClientErrorStatusCode', function () {
        it('# Returns true for all codes defined in HttpClientErrorStatusCodes', function () {
            Object.values(HttpClientErrorStatusCodes).forEach((code) => {
                if (typeof code === 'number') {
                    expect(isClientErrorStatusCode(code)).to.be.true;
                }
            });
            expect(isClientErrorStatusCode(400)).to.be.true;
        });
        it('# Returns false for all codes not defined in HttpClientErrorStatusCodes', function () {
            Object.values(HttpStatusCodes).forEach((code) => {
                if (
                    typeof code === 'number' &&
                    !(code in HttpClientErrorStatusCodes)
                ) {
                    expect(isClientErrorStatusCode(code)).to.be.false;
                }
            });
            expect(isClientErrorStatusCode(2344575)).to.be.false;
        });
    });

    describe('isClientErrorReasonPhrase', function () {
        it('# Returns true for all phrases defined in HttpClientErrorReasonPhrases', function () {
            Object.values(HttpClientErrorReasonPhrases).forEach((phrase) => {
                expect(isClientErrorReasonPhrase(phrase)).to.be.true;
            });
            expect(isClientErrorReasonPhrase('Unauthorized')).to.be.true;
        });
        it('# Returns false for all phrases not defined in HttpClientErrorReasonPhrases', function () {
            Object.entries(HttpReasonPhrases).forEach((phrase) => {
                if (
                    !(
                        HttpClientErrorReasonPhrases as {
                            [key: string]: string;
                        }
                    )[phrase[0]]
                ) {
                    expect(isClientErrorReasonPhrase(phrase[1])).to.be.false;
                }
            });
            expect(isClientErrorReasonPhrase('Ok')).to.be.false;
        });
    });

    describe('isClientErrorStatus', function () {
        it('# Returns true for all codes defined in HttpClientErrorStatusCodes', function () {
            Object.values(HttpClientErrorStatusCodes).forEach((code) => {
                if (typeof code === 'number') {
                    expect(isClientErrorStatus(code)).to.be.true;
                }
            });
            expect(isClientErrorStatus(400)).to.be.true;
        });
        it('# Returns false for all codes not defined in HttpClientErrorStatusCodes', function () {
            Object.values(HttpStatusCodes).forEach((code) => {
                if (
                    typeof code === 'number' &&
                    !(code in HttpClientErrorStatusCodes)
                ) {
                    expect(isClientErrorStatus(code)).to.be.false;
                }
            });
            expect(isClientErrorStatus(2344575)).to.be.false;
        });
        it('# Returns true for all phrases defined in HttpClientErrorReasonPhrases', function () {
            Object.values(HttpClientErrorReasonPhrases).forEach((phrase) => {
                expect(isClientErrorStatus(phrase)).to.be.true;
            });
            expect(isClientErrorStatus('Unauthorized')).to.be.true;
        });
        it('# Returns false for all phrases not defined in HttpClientErrorReasonPhrases', function () {
            Object.entries(HttpReasonPhrases).forEach((phrase) => {
                if (
                    !(
                        HttpClientErrorReasonPhrases as {
                            [key: string]: string;
                        }
                    )[phrase[0]]
                ) {
                    expect(isClientErrorStatus(phrase[1])).to.be.false;
                }
            });
            expect(isClientErrorStatus('Ok')).to.be.false;
        });
    });

    describe('is4xxClientErrorStatusCode', function () {
        it('# Returns true for any integer in range [400 - 499]', function () {
            for (let code = 400; code <= 499; code += 1) {
                expect(is4xxClientErrorStatusCode(code)).to.be.true;
            }
        });
        it('# Returns false for any integer outside of range [400 - 499]', function () {
            for (let code = 0; code <= 1000; code += 1) {
                if (code < 400 || code > 499) {
                    expect(is4xxClientErrorStatusCode(code)).to.be.false;
                }
            }
        });
    });
});
