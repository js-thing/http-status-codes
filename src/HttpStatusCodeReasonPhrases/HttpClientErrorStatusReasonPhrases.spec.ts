import HttpClientErrorStatusReasonPhrases from './HttpClientErrorStatusReasonPhrases';
import { expect } from 'chai';

describe('HttpClientErrorStatusReasonPhrases', () => {
    describe('#BadRequest', () => {
        it('status code should be equal to Bad Request', () => {
            expect(HttpClientErrorStatusReasonPhrases.BadRequest).to.equal(
                'Bad Request'
            );
        });
    });
    describe('#UnAuthorised', () => {
        it('status code should be equal to Unauthorized', () => {
            expect(HttpClientErrorStatusReasonPhrases.UnAuthorised).to.equal(
                'Unauthorized'
            );
        });
    });
    describe('#PaymentRequired', () => {
        it('status code should be equal to Payment Required', () => {
            expect(HttpClientErrorStatusReasonPhrases.PaymentRequired).to.equal(
                'Payment Required'
            );
        });
    });
    describe('#Forbidden', () => {
        it('status code should be equal to Forbidden', () => {
            expect(HttpClientErrorStatusReasonPhrases.Forbidden).to.equal(
                'Forbidden'
            );
        });
    });
    describe('#NotFound', () => {
        it('status code should be equal to Not Found', () => {
            expect(HttpClientErrorStatusReasonPhrases.NotFound).to.equal(
                'Not Found'
            );
        });
    });
    describe('#MethodNotAllowed', () => {
        it('status code should be equal to Method Not Allowed', () => {
            expect(
                HttpClientErrorStatusReasonPhrases.MethodNotAllowed
            ).to.equal('Method Not Allowed');
        });
    });
    describe('#NotAcceptable', () => {
        it('status code should be equal to Not Acceptable', () => {
            expect(HttpClientErrorStatusReasonPhrases.NotAcceptable).to.equal(
                'Not Acceptable'
            );
        });
    });
    describe('#ProxyAuthenticationRequired', () => {
        it('status code should be equal to Proxy Authentication Required', () => {
            expect(
                HttpClientErrorStatusReasonPhrases.ProxyAuthenticationRequired
            ).to.equal('Proxy Authentication Required');
        });
    });
    describe('#RequestTimeout', () => {
        it('status code should be equal to Request Timeout', () => {
            expect(HttpClientErrorStatusReasonPhrases.RequestTimeout).to.equal(
                'Request Timeout'
            );
        });
    });
    describe('#Conflict', () => {
        it('status code should be equal to Conflict', () => {
            expect(HttpClientErrorStatusReasonPhrases.Conflict).to.equal(
                'Conflict'
            );
        });
    });
    describe('#Gone', () => {
        it('status code should be equal to Gone', () => {
            expect(HttpClientErrorStatusReasonPhrases.Gone).to.equal('Gone');
        });
    });
    describe('#LengthRequired', () => {
        it('status code should be equal to Length Required', () => {
            expect(HttpClientErrorStatusReasonPhrases.LengthRequired).to.equal(
                'Length Required'
            );
        });
    });
    describe('#PreconditionFailed', () => {
        it('status code should be equal to Precondition Failed', () => {
            expect(
                HttpClientErrorStatusReasonPhrases.PreconditionFailed
            ).to.equal('Precondition Failed');
        });
    });
    describe('#PayloadTooLarge', () => {
        it('status code should be equal to Payload Too Large', () => {
            expect(HttpClientErrorStatusReasonPhrases.PayloadTooLarge).to.equal(
                'Payload Too Large'
            );
        });
    });
    describe('#URITooLong', () => {
        it('status code should be equal to URI Too Long', () => {
            expect(HttpClientErrorStatusReasonPhrases.URITooLong).to.equal(
                'URI Too Long'
            );
        });
    });
    describe('#UnsupportedMediaType', () => {
        it('status code should be equal to Unsupported Media Type', () => {
            expect(
                HttpClientErrorStatusReasonPhrases.UnsupportedMediaType
            ).to.equal('Unsupported Media Type');
        });
    });
    describe('#RangeNotSatisfiable', () => {
        it('status code should be equal to Range Not Satisfiable', () => {
            expect(
                HttpClientErrorStatusReasonPhrases.RangeNotSatisfiable
            ).to.equal('Range Not Satisfiable');
        });
    });
    describe('#ExpectationFailed', () => {
        it('status code should be equal to Expectation Failed', () => {
            expect(
                HttpClientErrorStatusReasonPhrases.ExpectationFailed
            ).to.equal('Expectation Failed');
        });
    });
    describe('#IAmATeapot', () => {
        it("status code should be equal to I'm a teapot", () => {
            expect(HttpClientErrorStatusReasonPhrases.IAmATeapot).to.equal(
                "I'm a teapot"
            );
        });
    });
    describe('#MisdirectedRequest', () => {
        it('status code should be equal to Misdirected Request', () => {
            expect(
                HttpClientErrorStatusReasonPhrases.MisdirectedRequest
            ).to.equal('Misdirected Request');
        });
    });

    describe('#UnprocessableEntity', () => {
        it('status code should be equal to Unprocessable Entity', () => {
            expect(
                HttpClientErrorStatusReasonPhrases.UnprocessableEntity
            ).to.equal('Unprocessable Entity');
        });
    });
    describe('#Locked', () => {
        it('status code should be equal to Locked', () => {
            expect(HttpClientErrorStatusReasonPhrases.Locked).to.equal(
                'Locked'
            );
        });
    });
    describe('#FailedDependency', () => {
        it('status code should be equal to Failed Dependency', () => {
            expect(
                HttpClientErrorStatusReasonPhrases.FailedDependency
            ).to.equal('Failed Dependency');
        });
    });
    describe('#TooEarly', () => {
        it('status code should be equal to Too Early', () => {
            expect(HttpClientErrorStatusReasonPhrases.TooEarly).to.equal(
                'Too Early'
            );
        });
    });
    describe('#UpgradeRequired', () => {
        it('status code should be equal to Upgrade Required', () => {
            expect(HttpClientErrorStatusReasonPhrases.UpgradeRequired).to.equal(
                'Upgrade Required'
            );
        });
    });
    describe('#PreconditionRequired', () => {
        it('status code should be equal to Precondition Required', () => {
            expect(
                HttpClientErrorStatusReasonPhrases.PreconditionRequired
            ).to.equal('Precondition Required');
        });
    });
    describe('#TooManyRequests', () => {
        it('status code should be equal to Too Many Requests', () => {
            expect(HttpClientErrorStatusReasonPhrases.TooManyRequests).to.equal(
                'Too Many Requests'
            );
        });
    });
    describe('#RequestHeaderFieldsTooLarge', () => {
        it('status code should be equal to Request Header Fields Too Large', () => {
            expect(
                HttpClientErrorStatusReasonPhrases.RequestHeaderFieldsTooLarge
            ).to.equal('Request Header Fields Too Large');
        });
    });
    describe('#UnavailableForLegalReasons', () => {
        it('status code should be equal to Unavailable For Legal Reasons', () => {
            expect(
                HttpClientErrorStatusReasonPhrases.UnavailableForLegalReasons
            ).to.equal('Unavailable For Legal Reasons');
        });
    });
});
