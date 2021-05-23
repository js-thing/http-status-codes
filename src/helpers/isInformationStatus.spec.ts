import { expect } from 'chai';
import {
    isInformationStatus,
    isInformationStatusCode,
    isInformationReasonPhrase,
    is1xxInformationStatusCode,
} from './isInformationStatus';
import {
    HttpInformationStatusCodes,
    HttpStatusCodes,
} from '../HttpStatusCodes';
import {
    HttpInformationReasonPhrases,
    HttpReasonPhrases,
} from '../HttpReasonPhrases';

describe('isInformationStatus', function () {
    describe('isInformationStatusCode', function () {
        it('# Returns true for all codes defined in HttpInformationStatusCodes', function () {
            Object.values(HttpInformationStatusCodes).forEach((code) => {
                if (typeof code === 'number') {
                    expect(isInformationStatusCode(code)).to.be.true;
                }
            });
            expect(isInformationStatusCode(100)).to.be.true;
        });
        it('# Returns false for all codes not defined in HttpInformationStatusCodes', function () {
            Object.values(HttpStatusCodes).forEach((code) => {
                if (
                    typeof code === 'number' &&
                    !(code in HttpInformationStatusCodes)
                ) {
                    expect(isInformationStatusCode(code)).to.be.false;
                }
            });
            expect(isInformationStatusCode(2344575)).to.be.false;
        });
    });

    describe('isInformationReasonPhrase', function () {
        it('# Returns true for all phrases defined in HttpInformationReasonPhrases', function () {
            Object.values(HttpInformationReasonPhrases).forEach((phrase) => {
                expect(isInformationReasonPhrase(phrase)).to.be.true;
            });
            expect(isInformationReasonPhrase('Continue')).to.be.true;
        });
        it('# Returns false for all phrases not defined in HttpInformationReasonPhrases', function () {
            Object.entries(HttpReasonPhrases).forEach((phrase) => {
                if (
                    !(
                        HttpInformationReasonPhrases as {
                            [key: string]: string;
                        }
                    )[phrase[0]]
                ) {
                    expect(isInformationReasonPhrase(phrase[1])).to.be.false;
                }
            });
            expect(isInformationReasonPhrase('Ok')).to.be.false;
        });
    });

    describe('isInformationStatus', function () {
        it('# Returns true for all codes defined in HttpInformationStatusCodes', function () {
            Object.values(HttpInformationStatusCodes).forEach((code) => {
                if (typeof code === 'number') {
                    expect(isInformationStatus(code)).to.be.true;
                }
            });
            expect(isInformationStatus(100)).to.be.true;
        });
        it('# Returns false for all codes not defined in HttpInformationStatusCodes', function () {
            Object.values(HttpStatusCodes).forEach((code) => {
                if (
                    typeof code === 'number' &&
                    !(code in HttpInformationStatusCodes)
                ) {
                    expect(isInformationStatus(code)).to.be.false;
                }
            });
            expect(isInformationStatus(2344575)).to.be.false;
        });
        it('# Returns true for all phrases defined in HttpInformationReasonPhrases', function () {
            Object.values(HttpInformationReasonPhrases).forEach((phrase) => {
                expect(isInformationStatus(phrase)).to.be.true;
            });
            expect(isInformationStatus('Continue')).to.be.true;
        });
        it('# Returns false for all phrases not defined in HttpInformationReasonPhrases', function () {
            Object.entries(HttpReasonPhrases).forEach((phrase) => {
                if (
                    !(
                        HttpInformationReasonPhrases as {
                            [key: string]: string;
                        }
                    )[phrase[0]]
                ) {
                    expect(isInformationStatus(phrase[1])).to.be.false;
                }
            });
            expect(isInformationStatus('Ok')).to.be.false;
        });
    });

    describe('is1xxInformationStatusCode', function () {
        it('# Returns true for any integer in range [100 - 199]', function () {
            for (let code = 100; code <= 199; code += 1) {
                expect(is1xxInformationStatusCode(code)).to.be.true;
            }
        });
        it('# Returns false for any integer outside of range [100 - 199]', function () {
            for (let code = 0; code <= 1000; code += 1) {
                if (code < 100 || code > 199) {
                    expect(is1xxInformationStatusCode(code)).to.be.false;
                }
            }
        });
    });
});
