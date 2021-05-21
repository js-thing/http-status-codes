import { expect } from 'chai';
import HttpSuccessStatusCodes from './HttpSuccessStatusCodes';

describe('HttpSuccessStatusCodes', function () {
    describe('#Ok', function () {
        it('status code should be equal to 200', function () {
            expect(HttpSuccessStatusCodes.Ok).to.equal(200);
        });
    });
    describe('#Created', function () {
        it('status code should be equal to 201', function () {
            expect(HttpSuccessStatusCodes.Created).to.equal(201);
        });
    });
    describe('#Accepted', function () {
        it('status code should be equal to 202', function () {
            expect(HttpSuccessStatusCodes.Accepted).to.equal(202);
        });
    });
    describe('#NonAuthoritativeInformation', function () {
        it('status code should be equal to 203', function () {
            expect(HttpSuccessStatusCodes.NonAuthoritativeInformation).to.equal(
                203
            );
        });
    });
    describe('#NoContent', function () {
        it('status code should be equal to 204', function () {
            expect(HttpSuccessStatusCodes.NoContent).to.equal(204);
        });
    });
    describe('#ResetContent', function () {
        it('status code should be equal to 205', function () {
            expect(HttpSuccessStatusCodes.ResetContent).to.equal(205);
        });
    });
    describe('#PartialContent', function () {
        it('status code should be equal to 206', function () {
            expect(HttpSuccessStatusCodes.PartialContent).to.equal(206);
        });
    });
    describe('#MultiStatus', function () {
        it('status code should be equal to 207', function () {
            expect(HttpSuccessStatusCodes.MultiStatus).to.equal(207);
        });
    });
    describe('#AlreadyReported', function () {
        it('status code should be equal to 208', function () {
            expect(HttpSuccessStatusCodes.AlreadyReported).to.equal(208);
        });
    });
    describe('#IMUsed', function () {
        it('status code should be equal to 226', function () {
            expect(HttpSuccessStatusCodes.IMUsed).to.equal(226);
        });
    });
});
