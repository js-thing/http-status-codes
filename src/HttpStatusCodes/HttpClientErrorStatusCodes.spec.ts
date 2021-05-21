import { expect } from 'chai';
import HttpClientErrorStatusCodes from './HttpClientErrorStatusCodes';

describe('HttpClientErrorStatusCodes', function () {
    describe('#BadRequest', function () {
        it('status code should be equal to 400', function () {
            expect(HttpClientErrorStatusCodes.BadRequest).to.equal(400);
        });
    });
    describe('#UnAuthorised', function () {
        it('status code should be equal to 401', function () {
            expect(HttpClientErrorStatusCodes.UnAuthorised).to.equal(401);
        });
    });
    describe('#PaymentRequired', function () {
        it('status code should be equal to 402', function () {
            expect(HttpClientErrorStatusCodes.PaymentRequired).to.equal(402);
        });
    });
    describe('#Forbidden', function () {
        it('status code should be equal to 403', function () {
            expect(HttpClientErrorStatusCodes.Forbidden).to.equal(403);
        });
    });
    describe('#NotFound', function () {
        it('status code should be equal to 404', function () {
            expect(HttpClientErrorStatusCodes.NotFound).to.equal(404);
        });
    });
    describe('#MethodNotAllowed', function () {
        it('status code should be equal to 405', function () {
            expect(HttpClientErrorStatusCodes.MethodNotAllowed).to.equal(405);
        });
    });
    describe('#NotAcceptable', function () {
        it('status code should be equal to 406', function () {
            expect(HttpClientErrorStatusCodes.NotAcceptable).to.equal(406);
        });
    });
    describe('#ProxyAuthenticationRequired', function () {
        it('status code should be equal to 407', function () {
            expect(
                HttpClientErrorStatusCodes.ProxyAuthenticationRequired
            ).to.equal(407);
        });
    });
    describe('#RequestTimeout', function () {
        it('status code should be equal to 408', function () {
            expect(HttpClientErrorStatusCodes.RequestTimeout).to.equal(408);
        });
    });
    describe('#Conflict', function () {
        it('status code should be equal to 409', function () {
            expect(HttpClientErrorStatusCodes.Conflict).to.equal(409);
        });
    });
    describe('#Gone', function () {
        it('status code should be equal to 410', function () {
            expect(HttpClientErrorStatusCodes.Gone).to.equal(410);
        });
    });
    describe('#LengthRequired', function () {
        it('status code should be equal to 411', function () {
            expect(HttpClientErrorStatusCodes.LengthRequired).to.equal(411);
        });
    });
    describe('#PreconditionFailed', function () {
        it('status code should be equal to 412', function () {
            expect(HttpClientErrorStatusCodes.PreconditionFailed).to.equal(412);
        });
    });
    describe('#PayloadTooLarge', function () {
        it('status code should be equal to 413', function () {
            expect(HttpClientErrorStatusCodes.PayloadTooLarge).to.equal(413);
        });
    });
    describe('#URITooLong', function () {
        it('status code should be equal to 414', function () {
            expect(HttpClientErrorStatusCodes.URITooLong).to.equal(414);
        });
    });
    describe('#UnsupportedMediaType', function () {
        it('status code should be equal to 415', function () {
            expect(HttpClientErrorStatusCodes.UnsupportedMediaType).to.equal(
                415
            );
        });
    });
    describe('#RangeNotSatisfiable', function () {
        it('status code should be equal to 416', function () {
            expect(HttpClientErrorStatusCodes.RangeNotSatisfiable).to.equal(
                416
            );
        });
    });
    describe('#ExpectationFailed', function () {
        it('status code should be equal to 417', function () {
            expect(HttpClientErrorStatusCodes.ExpectationFailed).to.equal(417);
        });
    });
    describe('#IAmATeapot', function () {
        it('status code should be equal to 418', function () {
            expect(HttpClientErrorStatusCodes.IAmATeapot).to.equal(418);
        });
    });
    describe('#MisdirectedRequest', function () {
        it('status code should be equal to 421', function () {
            expect(HttpClientErrorStatusCodes.MisdirectedRequest).to.equal(421);
        });
    });
    describe('#UnprocessableEntity', function () {
        it('status code should be equal to 422', function () {
            expect(HttpClientErrorStatusCodes.UnprocessableEntity).to.equal(
                422
            );
        });
    });
    describe('#Locked', function () {
        it('status code should be equal to 423', function () {
            expect(HttpClientErrorStatusCodes.Locked).to.equal(423);
        });
    });
    describe('#FailedDependency', function () {
        it('status code should be equal to 424', function () {
            expect(HttpClientErrorStatusCodes.FailedDependency).to.equal(424);
        });
    });
    describe('#TooEarly', function () {
        it('status code should be equal to 425', function () {
            expect(HttpClientErrorStatusCodes.TooEarly).to.equal(425);
        });
    });
    describe('#UpgradeRequired', function () {
        it('status code should be equal to 426', function () {
            expect(HttpClientErrorStatusCodes.UpgradeRequired).to.equal(426);
        });
    });
    describe('#PreconditionRequired', function () {
        it('status code should be equal to 428', function () {
            expect(HttpClientErrorStatusCodes.PreconditionRequired).to.equal(
                428
            );
        });
    });
    describe('#TooManyRequests', function () {
        it('status code should be equal to 429', function () {
            expect(HttpClientErrorStatusCodes.TooManyRequests).to.equal(429);
        });
    });
    describe('#RequestHeaderFieldsTooLarge', function () {
        it('status code should be equal to 431', function () {
            expect(
                HttpClientErrorStatusCodes.RequestHeaderFieldsTooLarge
            ).to.equal(431);
        });
    });
    describe('#UnavailableForLegalReasons', function () {
        it('status code should be equal to 451', function () {
            expect(
                HttpClientErrorStatusCodes.UnavailableForLegalReasons
            ).to.equal(451);
        });
    });
});
