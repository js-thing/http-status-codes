import HttpClientErrorReasonPhrases from './HttpClientErrorReasonPhrases';
import { expect } from 'chai';

describe('HttpClientErrorReasonPhrases', () => {
    describe('#BadRequest', () => {
        it('status code should be equal to Bad Request', () => {
            expect(HttpClientErrorReasonPhrases.BadRequest).to.equal(
                'Bad Request'
            );
        });
    });
    describe('#UnAuthorised', () => {
        it('status code should be equal to Unauthorized', () => {
            expect(HttpClientErrorReasonPhrases.UnAuthorised).to.equal(
                'Unauthorized'
            );
        });
    });
    describe('#PaymentRequired', () => {
        it('status code should be equal to Payment Required', () => {
            expect(HttpClientErrorReasonPhrases.PaymentRequired).to.equal(
                'Payment Required'
            );
        });
    });
    describe('#Forbidden', () => {
        it('status code should be equal to Forbidden', () => {
            expect(HttpClientErrorReasonPhrases.Forbidden).to.equal(
                'Forbidden'
            );
        });
    });
    describe('#NotFound', () => {
        it('status code should be equal to Not Found', () => {
            expect(HttpClientErrorReasonPhrases.NotFound).to.equal('Not Found');
        });
    });
    describe('#MethodNotAllowed', () => {
        it('status code should be equal to Method Not Allowed', () => {
            expect(HttpClientErrorReasonPhrases.MethodNotAllowed).to.equal(
                'Method Not Allowed'
            );
        });
    });
    describe('#NotAcceptable', () => {
        it('status code should be equal to Not Acceptable', () => {
            expect(HttpClientErrorReasonPhrases.NotAcceptable).to.equal(
                'Not Acceptable'
            );
        });
    });
    describe('#ProxyAuthenticationRequired', () => {
        it('status code should be equal to Proxy Authentication Required', () => {
            expect(
                HttpClientErrorReasonPhrases.ProxyAuthenticationRequired
            ).to.equal('Proxy Authentication Required');
        });
    });
    describe('#RequestTimeout', () => {
        it('status code should be equal to Request Timeout', () => {
            expect(HttpClientErrorReasonPhrases.RequestTimeout).to.equal(
                'Request Timeout'
            );
        });
    });
    describe('#Conflict', () => {
        it('status code should be equal to Conflict', () => {
            expect(HttpClientErrorReasonPhrases.Conflict).to.equal('Conflict');
        });
    });
    describe('#Gone', () => {
        it('status code should be equal to Gone', () => {
            expect(HttpClientErrorReasonPhrases.Gone).to.equal('Gone');
        });
    });
    describe('#LengthRequired', () => {
        it('status code should be equal to Length Required', () => {
            expect(HttpClientErrorReasonPhrases.LengthRequired).to.equal(
                'Length Required'
            );
        });
    });
    describe('#PreconditionFailed', () => {
        it('status code should be equal to Precondition Failed', () => {
            expect(HttpClientErrorReasonPhrases.PreconditionFailed).to.equal(
                'Precondition Failed'
            );
        });
    });
    describe('#PayloadTooLarge', () => {
        it('status code should be equal to Payload Too Large', () => {
            expect(HttpClientErrorReasonPhrases.PayloadTooLarge).to.equal(
                'Payload Too Large'
            );
        });
    });
    describe('#URITooLong', () => {
        it('status code should be equal to URI Too Long', () => {
            expect(HttpClientErrorReasonPhrases.URITooLong).to.equal(
                'URI Too Long'
            );
        });
    });
    describe('#UnsupportedMediaType', () => {
        it('status code should be equal to Unsupported Media Type', () => {
            expect(HttpClientErrorReasonPhrases.UnsupportedMediaType).to.equal(
                'Unsupported Media Type'
            );
        });
    });
    describe('#RangeNotSatisfiable', () => {
        it('status code should be equal to Range Not Satisfiable', () => {
            expect(HttpClientErrorReasonPhrases.RangeNotSatisfiable).to.equal(
                'Range Not Satisfiable'
            );
        });
    });
    describe('#ExpectationFailed', () => {
        it('status code should be equal to Expectation Failed', () => {
            expect(HttpClientErrorReasonPhrases.ExpectationFailed).to.equal(
                'Expectation Failed'
            );
        });
    });
    describe('#IAmATeapot', () => {
        it("status code should be equal to I'm a teapot", () => {
            expect(HttpClientErrorReasonPhrases.IAmATeapot).to.equal(
                "I'm a teapot"
            );
        });
    });
    describe('#MisdirectedRequest', () => {
        it('status code should be equal to Misdirected Request', () => {
            expect(HttpClientErrorReasonPhrases.MisdirectedRequest).to.equal(
                'Misdirected Request'
            );
        });
    });

    describe('#UnprocessableEntity', () => {
        it('status code should be equal to Unprocessable Entity', () => {
            expect(HttpClientErrorReasonPhrases.UnprocessableEntity).to.equal(
                'Unprocessable Entity'
            );
        });
    });
    describe('#Locked', () => {
        it('status code should be equal to Locked', () => {
            expect(HttpClientErrorReasonPhrases.Locked).to.equal('Locked');
        });
    });
    describe('#FailedDependency', () => {
        it('status code should be equal to Failed Dependency', () => {
            expect(HttpClientErrorReasonPhrases.FailedDependency).to.equal(
                'Failed Dependency'
            );
        });
    });
    describe('#TooEarly', () => {
        it('status code should be equal to Too Early', () => {
            expect(HttpClientErrorReasonPhrases.TooEarly).to.equal('Too Early');
        });
    });
    describe('#UpgradeRequired', () => {
        it('status code should be equal to Upgrade Required', () => {
            expect(HttpClientErrorReasonPhrases.UpgradeRequired).to.equal(
                'Upgrade Required'
            );
        });
    });
    describe('#PreconditionRequired', () => {
        it('status code should be equal to Precondition Required', () => {
            expect(HttpClientErrorReasonPhrases.PreconditionRequired).to.equal(
                'Precondition Required'
            );
        });
    });
    describe('#TooManyRequests', () => {
        it('status code should be equal to Too Many Requests', () => {
            expect(HttpClientErrorReasonPhrases.TooManyRequests).to.equal(
                'Too Many Requests'
            );
        });
    });
    describe('#RequestHeaderFieldsTooLarge', () => {
        it('status code should be equal to Request Header Fields Too Large', () => {
            expect(
                HttpClientErrorReasonPhrases.RequestHeaderFieldsTooLarge
            ).to.equal('Request Header Fields Too Large');
        });
    });
    describe('#UnavailableForLegalReasons', () => {
        it('status code should be equal to Unavailable For Legal Reasons', () => {
            expect(
                HttpClientErrorReasonPhrases.UnavailableForLegalReasons
            ).to.equal('Unavailable For Legal Reasons');
        });
    });
});
