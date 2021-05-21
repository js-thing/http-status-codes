import { expect } from 'chai';
import HttpClientErrorReasonPhrases from './HttpClientErrorReasonPhrases';

describe('HttpClientErrorReasonPhrases', function () {
    describe('#BadRequest', function () {
        it('status code should be equal to Bad Request', function () {
            expect(HttpClientErrorReasonPhrases.BadRequest).to.equal(
                'Bad Request'
            );
        });
    });
    describe('#UnAuthorised', function () {
        it('status code should be equal to Unauthorized', function () {
            expect(HttpClientErrorReasonPhrases.UnAuthorised).to.equal(
                'Unauthorized'
            );
        });
    });
    describe('#PaymentRequired', function () {
        it('status code should be equal to Payment Required', function () {
            expect(HttpClientErrorReasonPhrases.PaymentRequired).to.equal(
                'Payment Required'
            );
        });
    });
    describe('#Forbidden', function () {
        it('status code should be equal to Forbidden', function () {
            expect(HttpClientErrorReasonPhrases.Forbidden).to.equal(
                'Forbidden'
            );
        });
    });
    describe('#NotFound', function () {
        it('status code should be equal to Not Found', function () {
            expect(HttpClientErrorReasonPhrases.NotFound).to.equal('Not Found');
        });
    });
    describe('#MethodNotAllowed', function () {
        it('status code should be equal to Method Not Allowed', function () {
            expect(HttpClientErrorReasonPhrases.MethodNotAllowed).to.equal(
                'Method Not Allowed'
            );
        });
    });
    describe('#NotAcceptable', function () {
        it('status code should be equal to Not Acceptable', function () {
            expect(HttpClientErrorReasonPhrases.NotAcceptable).to.equal(
                'Not Acceptable'
            );
        });
    });
    describe('#ProxyAuthenticationRequired', function () {
        it('status code should be equal to Proxy Authentication Required', function () {
            expect(
                HttpClientErrorReasonPhrases.ProxyAuthenticationRequired
            ).to.equal('Proxy Authentication Required');
        });
    });
    describe('#RequestTimeout', function () {
        it('status code should be equal to Request Timeout', function () {
            expect(HttpClientErrorReasonPhrases.RequestTimeout).to.equal(
                'Request Timeout'
            );
        });
    });
    describe('#Conflict', function () {
        it('status code should be equal to Conflict', function () {
            expect(HttpClientErrorReasonPhrases.Conflict).to.equal('Conflict');
        });
    });
    describe('#Gone', function () {
        it('status code should be equal to Gone', function () {
            expect(HttpClientErrorReasonPhrases.Gone).to.equal('Gone');
        });
    });
    describe('#LengthRequired', function () {
        it('status code should be equal to Length Required', function () {
            expect(HttpClientErrorReasonPhrases.LengthRequired).to.equal(
                'Length Required'
            );
        });
    });
    describe('#PreconditionFailed', function () {
        it('status code should be equal to Precondition Failed', function () {
            expect(HttpClientErrorReasonPhrases.PreconditionFailed).to.equal(
                'Precondition Failed'
            );
        });
    });
    describe('#PayloadTooLarge', function () {
        it('status code should be equal to Payload Too Large', function () {
            expect(HttpClientErrorReasonPhrases.PayloadTooLarge).to.equal(
                'Payload Too Large'
            );
        });
    });
    describe('#URITooLong', function () {
        it('status code should be equal to URI Too Long', function () {
            expect(HttpClientErrorReasonPhrases.URITooLong).to.equal(
                'URI Too Long'
            );
        });
    });
    describe('#UnsupportedMediaType', function () {
        it('status code should be equal to Unsupported Media Type', function () {
            expect(HttpClientErrorReasonPhrases.UnsupportedMediaType).to.equal(
                'Unsupported Media Type'
            );
        });
    });
    describe('#RangeNotSatisfiable', function () {
        it('status code should be equal to Range Not Satisfiable', function () {
            expect(HttpClientErrorReasonPhrases.RangeNotSatisfiable).to.equal(
                'Range Not Satisfiable'
            );
        });
    });
    describe('#ExpectationFailed', function () {
        it('status code should be equal to Expectation Failed', function () {
            expect(HttpClientErrorReasonPhrases.ExpectationFailed).to.equal(
                'Expectation Failed'
            );
        });
    });
    describe('#IAmATeapot', function () {
        it("status code should be equal to I'm a teapot", function () {
            expect(HttpClientErrorReasonPhrases.IAmATeapot).to.equal(
                "I'm a teapot"
            );
        });
    });
    describe('#MisdirectedRequest', function () {
        it('status code should be equal to Misdirected Request', function () {
            expect(HttpClientErrorReasonPhrases.MisdirectedRequest).to.equal(
                'Misdirected Request'
            );
        });
    });

    describe('#UnprocessableEntity', function () {
        it('status code should be equal to Unprocessable Entity', function () {
            expect(HttpClientErrorReasonPhrases.UnprocessableEntity).to.equal(
                'Unprocessable Entity'
            );
        });
    });
    describe('#Locked', function () {
        it('status code should be equal to Locked', function () {
            expect(HttpClientErrorReasonPhrases.Locked).to.equal('Locked');
        });
    });
    describe('#FailedDependency', function () {
        it('status code should be equal to Failed Dependency', function () {
            expect(HttpClientErrorReasonPhrases.FailedDependency).to.equal(
                'Failed Dependency'
            );
        });
    });
    describe('#TooEarly', function () {
        it('status code should be equal to Too Early', function () {
            expect(HttpClientErrorReasonPhrases.TooEarly).to.equal('Too Early');
        });
    });
    describe('#UpgradeRequired', function () {
        it('status code should be equal to Upgrade Required', function () {
            expect(HttpClientErrorReasonPhrases.UpgradeRequired).to.equal(
                'Upgrade Required'
            );
        });
    });
    describe('#PreconditionRequired', function () {
        it('status code should be equal to Precondition Required', function () {
            expect(HttpClientErrorReasonPhrases.PreconditionRequired).to.equal(
                'Precondition Required'
            );
        });
    });
    describe('#TooManyRequests', function () {
        it('status code should be equal to Too Many Requests', function () {
            expect(HttpClientErrorReasonPhrases.TooManyRequests).to.equal(
                'Too Many Requests'
            );
        });
    });
    describe('#RequestHeaderFieldsTooLarge', function () {
        it('status code should be equal to Request Header Fields Too Large', function () {
            expect(
                HttpClientErrorReasonPhrases.RequestHeaderFieldsTooLarge
            ).to.equal('Request Header Fields Too Large');
        });
    });
    describe('#UnavailableForLegalReasons', function () {
        it('status code should be equal to Unavailable For Legal Reasons', function () {
            expect(
                HttpClientErrorReasonPhrases.UnavailableForLegalReasons
            ).to.equal('Unavailable For Legal Reasons');
        });
    });
});
