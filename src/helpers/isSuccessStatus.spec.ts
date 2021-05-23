import { expect } from 'chai';
import {
    isSuccessStatus,
    isSuccessStatusCode,
    isSuccessReasonPhrase,
    is2xxSuccessStatusCode,
} from './isSuccessStatus';
import { HttpSuccessStatusCodes, HttpStatusCodes } from '../HttpStatusCodes';
import {
    HttpSuccessReasonPhrases,
    HttpReasonPhrases,
} from '../HttpReasonPhrases';

describe('isSuccessStatus', function () {
    describe('isSuccessStatusCode', function () {
        it('# Returns true for all codes defined in HttpSuccessStatusCodes', function () {
            Object.values(HttpSuccessStatusCodes).forEach((code) => {
                if (typeof code === 'number') {
                    expect(isSuccessStatusCode(code)).to.be.true;
                }
            });
            expect(isSuccessStatusCode(200)).to.be.true;
        });
        it('# Returns false for all codes not defined in HttpSuccessStatusCodes', function () {
            Object.values(HttpStatusCodes).forEach((code) => {
                if (
                    typeof code === 'number' &&
                    !(code in HttpSuccessStatusCodes)
                ) {
                    expect(isSuccessStatusCode(code)).to.be.false;
                }
            });
            expect(isSuccessStatusCode(2344575)).to.be.false;
        });
    });

    describe('isSuccessReasonPhrase', function () {
        it('# Returns true for all phrases defined in HttpSuccessReasonPhrases', function () {
            Object.values(HttpSuccessReasonPhrases).forEach((phrase) => {
                expect(isSuccessReasonPhrase(phrase)).to.be.true;
            });
            expect(isSuccessReasonPhrase('OK')).to.be.true;
        });
        it('# Returns false for all phrases not defined in HttpSuccessReasonPhrases', function () {
            Object.entries(HttpReasonPhrases).forEach((phrase) => {
                if (
                    !(
                        HttpSuccessReasonPhrases as {
                            [key: string]: string;
                        }
                    )[phrase[0]]
                ) {
                    expect(isSuccessReasonPhrase(phrase[1])).to.be.false;
                }
            });
            expect(isSuccessReasonPhrase('Bad Request')).to.be.false;
        });
    });

    describe('isSuccessStatus', function () {
        it('# Returns true for all codes defined in HttpSuccessStatusCodes', function () {
            Object.values(HttpSuccessStatusCodes).forEach((code) => {
                if (typeof code === 'number') {
                    expect(isSuccessStatus(code)).to.be.true;
                }
            });
            expect(isSuccessStatus(200)).to.be.true;
        });
        it('# Returns false for all codes not defined in HttpSuccessStatusCodes', function () {
            Object.values(HttpStatusCodes).forEach((code) => {
                if (
                    typeof code === 'number' &&
                    !(code in HttpSuccessStatusCodes)
                ) {
                    expect(isSuccessStatus(code)).to.be.false;
                }
            });
            expect(isSuccessStatus(2344575)).to.be.false;
        });
        it('# Returns true for all phrases defined in HttpSuccessReasonPhrases', function () {
            Object.values(HttpSuccessReasonPhrases).forEach((phrase) => {
                expect(isSuccessStatus(phrase)).to.be.true;
            });
            expect(isSuccessStatus('OK')).to.be.true;
        });
        it('# Returns false for all phrases not defined in HttpSuccessReasonPhrases', function () {
            Object.entries(HttpReasonPhrases).forEach((phrase) => {
                if (
                    !(
                        HttpSuccessReasonPhrases as {
                            [key: string]: string;
                        }
                    )[phrase[0]]
                ) {
                    expect(isSuccessStatus(phrase[1])).to.be.false;
                }
            });
            expect(isSuccessStatus('Bad Request')).to.be.false;
        });
    });

    describe('is2xxSuccessStatusCode', function () {
        it('# Returns true for any integer in range [200 - 299]', function () {
            for (let code = 200; code <= 299; code += 1) {
                expect(is2xxSuccessStatusCode(code)).to.be.true;
            }
        });
        it('# Returns false for any integer outside of range [200 - 299]', function () {
            for (let code = 0; code <= 1000; code += 1) {
                if (code < 200 || code > 299) {
                    expect(is2xxSuccessStatusCode(code)).to.be.false;
                }
            }
        });
    });
});
