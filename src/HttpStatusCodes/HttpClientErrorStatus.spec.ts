import HttpClientErrorStatus from './HttpClientErrorStatus';
import { expect } from 'chai';

describe('HttpClientErrorStatus', () => {
    describe('#BadRequest', () => {
        it('status code should be equal to 400', () => {
            expect(HttpClientErrorStatus.BadRequest).to.equal(400);
        });
    });
    describe('#UnAuthorised', () => {
        it('status code should be equal to 401', () => {
            expect(HttpClientErrorStatus.UnAuthorised).to.equal(401);
        });
    });
    describe('#PaymentRequired', () => {
        it('status code should be equal to 402', () => {
            expect(HttpClientErrorStatus.PaymentRequired).to.equal(402);
        });
    });
    describe('#Forbidden', () => {
        it('status code should be equal to 403', () => {
            expect(HttpClientErrorStatus.Forbidden).to.equal(403);
        });
    });
    describe('#NotFound', () => {
        it('status code should be equal to 404', () => {
            expect(HttpClientErrorStatus.NotFound).to.equal(404);
        });
    });
    describe('#MethodNotAllowed', () => {
        it('status code should be equal to 405', () => {
            expect(HttpClientErrorStatus.MethodNotAllowed).to.equal(405);
        });
    });
    describe('#NotAcceptable', () => {
        it('status code should be equal to 406', () => {
            expect(HttpClientErrorStatus.NotAcceptable).to.equal(406);
        });
    });
    describe('#ProxyAuthenticationRequired', () => {
        it('status code should be equal to 407', () => {
            expect(HttpClientErrorStatus.ProxyAuthenticationRequired).to.equal(
                407
            );
        });
    });
    describe('#RequestTimeout', () => {
        it('status code should be equal to 408', () => {
            expect(HttpClientErrorStatus.RequestTimeout).to.equal(408);
        });
    });
    describe('#Conflict', () => {
        it('status code should be equal to 409', () => {
            expect(HttpClientErrorStatus.Conflict).to.equal(409);
        });
    });
    describe('#Gone', () => {
        it('status code should be equal to 410', () => {
            expect(HttpClientErrorStatus.Gone).to.equal(410);
        });
    });
    describe('#LengthRequired', () => {
        it('status code should be equal to 411', () => {
            expect(HttpClientErrorStatus.LengthRequired).to.equal(411);
        });
    });
    describe('#PreconditionFailed', () => {
        it('status code should be equal to 412', () => {
            expect(HttpClientErrorStatus.PreconditionFailed).to.equal(412);
        });
    });
    describe('#PayloadTooLarge', () => {
        it('status code should be equal to 413', () => {
            expect(HttpClientErrorStatus.PayloadTooLarge).to.equal(413);
        });
    });
    describe('#URITooLong', () => {
        it('status code should be equal to 414', () => {
            expect(HttpClientErrorStatus.URITooLong).to.equal(414);
        });
    });
    describe('#UnsupportedMediaType', () => {
        it('status code should be equal to 415', () => {
            expect(HttpClientErrorStatus.UnsupportedMediaType).to.equal(415);
        });
    });
    describe('#RangeNotSatisfiable', () => {
        it('status code should be equal to 416', () => {
            expect(HttpClientErrorStatus.RangeNotSatisfiable).to.equal(416);
        });
    });
    describe('#ExpectationFailed', () => {
        it('status code should be equal to 417', () => {
            expect(HttpClientErrorStatus.ExpectationFailed).to.equal(417);
        });
    });
    describe('#IAmATeapot', () => {
        it('status code should be equal to 418', () => {
            expect(HttpClientErrorStatus.IAmATeapot).to.equal(418);
        });
    });
    describe('#MisdirectedRequest', () => {
        it('status code should be equal to 421', () => {
            expect(HttpClientErrorStatus.MisdirectedRequest).to.equal(421);
        });
    });
    describe('#UnprocessableEntity', () => {
        it('status code should be equal to 422', () => {
            expect(HttpClientErrorStatus.UnprocessableEntity).to.equal(422);
        });
    });
    describe('#Locked', () => {
        it('status code should be equal to 423', () => {
            expect(HttpClientErrorStatus.Locked).to.equal(423);
        });
    });
    describe('#FailedDependency', () => {
        it('status code should be equal to 424', () => {
            expect(HttpClientErrorStatus.FailedDependency).to.equal(424);
        });
    });
    describe('#TooEarly', () => {
        it('status code should be equal to 425', () => {
            expect(HttpClientErrorStatus.TooEarly).to.equal(425);
        });
    });
    describe('#UpgradeRequired', () => {
        it('status code should be equal to 426', () => {
            expect(HttpClientErrorStatus.UpgradeRequired).to.equal(426);
        });
    });
    describe('#PreconditionRequired', () => {
        it('status code should be equal to 428', () => {
            expect(HttpClientErrorStatus.PreconditionRequired).to.equal(428);
        });
    });
    describe('#TooManyRequests', () => {
        it('status code should be equal to 429', () => {
            expect(HttpClientErrorStatus.TooManyRequests).to.equal(429);
        });
    });
    describe('#RequestHeaderFieldsTooLarge', () => {
        it('status code should be equal to 431', () => {
            expect(HttpClientErrorStatus.RequestHeaderFieldsTooLarge).to.equal(
                431
            );
        });
    });
    describe('#UnavailableForLegalReasons', () => {
        it('status code should be equal to 451', () => {
            expect(HttpClientErrorStatus.UnavailableForLegalReasons).to.equal(
                451
            );
        });
    });
});
