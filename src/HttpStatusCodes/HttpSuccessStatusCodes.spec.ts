import HttpSuccessStatusCodes from './HttpSuccessStatusCodes';
import { expect } from 'chai';

describe('HttpSuccessStatusCodes', () => {
    describe('#Ok', () => {
        it('status code should be equal to 200', () => {
            expect(HttpSuccessStatusCodes.Ok).to.equal(200);
        });
    });
    describe('#Created', () => {
        it('status code should be equal to 201', () => {
            expect(HttpSuccessStatusCodes.Created).to.equal(201);
        });
    });
    describe('#Accepted', () => {
        it('status code should be equal to 202', () => {
            expect(HttpSuccessStatusCodes.Accepted).to.equal(202);
        });
    });
    describe('#NonAuthoritativeInformation', () => {
        it('status code should be equal to 203', () => {
            expect(HttpSuccessStatusCodes.NonAuthoritativeInformation).to.equal(203);
        });
    });
    describe('#NoContent', () => {
        it('status code should be equal to 204', () => {
            expect(HttpSuccessStatusCodes.NoContent).to.equal(204);
        });
    });
    describe('#ResetContent', () => {
        it('status code should be equal to 205', () => {
            expect(HttpSuccessStatusCodes.ResetContent).to.equal(205);
        });
    });
    describe('#PartialContent', () => {
        it('status code should be equal to 206', () => {
            expect(HttpSuccessStatusCodes.PartialContent).to.equal(206);
        });
    });
    describe('#MultiStatus', () => {
        it('status code should be equal to 207', () => {
            expect(HttpSuccessStatusCodes.MultiStatus).to.equal(207);
        });
    });
    describe('#AlreadyReported', () => {
        it('status code should be equal to 208', () => {
            expect(HttpSuccessStatusCodes.AlreadyReported).to.equal(208);
        });
    });
    describe('#IMUsed', () => {
        it('status code should be equal to 226', () => {
            expect(HttpSuccessStatusCodes.IMUsed).to.equal(226);
        });
    });
});
