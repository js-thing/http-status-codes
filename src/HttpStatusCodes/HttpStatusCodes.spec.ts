import { expect } from 'chai';
import { HttpStatusCodes } from './HttpStatusCodes';
import HttpInformationStatusCodes from './HttpInformationStatusCodes';
import HttpSuccessStatusCodes from './HttpSuccessStatusCodes';
import HttpRedirectionStatusCodes from './HttpRedirectionStatusCodes';
import HttpClientErrorStatusCodes from './HttpClientErrorStatusCodes';
import HttpServerErrorStatusCodes from './HttpServerErrorStatusCodes';

describe('HttpStatusCodes', function () {
    it('# Contains all members from all individual enums', function () {
        Object.entries(HttpInformationStatusCodes).forEach(
            (statusCodeMember) => {
                if (typeof statusCodeMember[0] === 'string') {
                    expect(
                        (HttpStatusCodes as { [key: string]: number | string })[
                            statusCodeMember[0]
                        ]
                    ).to.equal(statusCodeMember[1]);
                }
            }
        );
        Object.entries(HttpSuccessStatusCodes).forEach((statusCodeMember) => {
            if (typeof statusCodeMember[0] === 'string') {
                expect(
                    (HttpStatusCodes as { [key: string]: number | string })[
                        statusCodeMember[0]
                    ]
                ).to.equal(statusCodeMember[1]);
            }
        });
        Object.entries(HttpRedirectionStatusCodes).forEach(
            (statusCodeMember) => {
                if (typeof statusCodeMember[0] === 'string') {
                    expect(
                        (HttpStatusCodes as { [key: string]: number | string })[
                            statusCodeMember[0]
                        ]
                    ).to.equal(statusCodeMember[1]);
                }
            }
        );
        Object.entries(HttpClientErrorStatusCodes).forEach(
            (statusCodeMember) => {
                if (typeof statusCodeMember[0] === 'string') {
                    expect(
                        (HttpStatusCodes as { [key: string]: number | string })[
                            statusCodeMember[0]
                        ]
                    ).to.equal(statusCodeMember[1]);
                }
            }
        );
        Object.entries(HttpServerErrorStatusCodes).forEach(
            (statusCodeMember) => {
                if (typeof statusCodeMember[0] === 'string') {
                    expect(
                        (HttpStatusCodes as { [key: string]: number | string })[
                            statusCodeMember[0]
                        ]
                    ).to.equal(statusCodeMember[1]);
                }
            }
        );
    });

    it('# Compiles when a subtype enum is assigned', function () {
        const anyCode: HttpStatusCodes = HttpInformationStatusCodes.Continue;
        expect(anyCode).to.equal(HttpStatusCodes.Continue);
    });
});
