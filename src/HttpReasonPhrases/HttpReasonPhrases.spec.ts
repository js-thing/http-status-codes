import { expect } from 'chai';
import { HttpReasonPhrases } from './HttpReasonPhrases';
import HttpInformationReasonPhrases from './HttpInformationReasonPhrases';
import HttpSuccessReasonPhrases from './HttpSuccessReasonPhrases';
import HttpRedirectionReasonPhrases from './HttpRedirectionReasonPhrases';
import HttpClientErrorReasonPhrases from './HttpClientErrorReasonPhrases';
import HttpServerErrorReasonPhrases from './HttpServerErrorReasonPhrases';

describe('HttpReasonPhrases', function () {
    it('# Contains all members from all individual enums', function () {
        Object.entries(HttpInformationReasonPhrases).forEach(
            (reasonPhraseMember) => {
                expect(
                    (HttpReasonPhrases as { [key: string]: string })[
                        reasonPhraseMember[0]
                    ]
                ).to.equal(reasonPhraseMember[1]);
            }
        );
        Object.entries(HttpSuccessReasonPhrases).forEach(
            (reasonPhraseMember) => {
                expect(
                    (HttpReasonPhrases as { [key: string]: string })[
                        reasonPhraseMember[0]
                    ]
                ).to.equal(reasonPhraseMember[1]);
            }
        );
        Object.entries(HttpRedirectionReasonPhrases).forEach(
            (reasonPhraseMember) => {
                expect(
                    (HttpReasonPhrases as { [key: string]: string })[
                        reasonPhraseMember[0]
                    ]
                ).to.equal(reasonPhraseMember[1]);
            }
        );
        Object.entries(HttpClientErrorReasonPhrases).forEach(
            (reasonPhraseMember) => {
                expect(
                    (HttpReasonPhrases as { [key: string]: string })[
                        reasonPhraseMember[0]
                    ]
                ).to.equal(reasonPhraseMember[1]);
            }
        );
        Object.entries(HttpServerErrorReasonPhrases).forEach(
            (reasonPhraseMember) => {
                expect(
                    (HttpReasonPhrases as { [key: string]: string })[
                        reasonPhraseMember[0]
                    ]
                ).to.equal(reasonPhraseMember[1]);
            }
        );
    });

    it('# Compiles when a subtype enum is assigned', function () {
        const anyPhrase: HttpReasonPhrases =
            HttpInformationReasonPhrases.Continue;
        expect(anyPhrase).to.equal(HttpReasonPhrases.Continue);
    });
});
