import { expect } from 'chai';
import HttpSuccessStatusCodes from './HttpSuccessStatusCodes';

describe('HttpSuccessStatusCodes', function () {
    it('# Ok = 200', function () {
        expect(HttpSuccessStatusCodes.Ok).to.equal(200);
    });
    it('# Created = 201', function () {
        expect(HttpSuccessStatusCodes.Created).to.equal(201);
    });
    it('# Accepted = 202', function () {
        expect(HttpSuccessStatusCodes.Accepted).to.equal(202);
    });
    it('# NonAuthoritativeInformation = 203', function () {
        expect(HttpSuccessStatusCodes.NonAuthoritativeInformation).to.equal(
            203
        );
    });
    it('# NoContent = 204', function () {
        expect(HttpSuccessStatusCodes.NoContent).to.equal(204);
    });
    it('# ResetContent = 205', function () {
        expect(HttpSuccessStatusCodes.ResetContent).to.equal(205);
    });
    it('# PartialContent = 206', function () {
        expect(HttpSuccessStatusCodes.PartialContent).to.equal(206);
    });
    it('# MultiStatus = 207', function () {
        expect(HttpSuccessStatusCodes.MultiStatus).to.equal(207);
    });
    it('# AlreadyReported = 208', function () {
        expect(HttpSuccessStatusCodes.AlreadyReported).to.equal(208);
    });
    it('# IMUsed = 226', function () {
        expect(HttpSuccessStatusCodes.IMUsed).to.equal(226);
    });
});
