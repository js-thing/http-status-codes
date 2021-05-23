import { expect } from 'chai';
import HttpSuccessReasonPhrases from './HttpSuccessReasonPhrases';

describe('HttpSuccessReasonPhrases', function () {
    it('# Ok = "OK"', function () {
        expect(HttpSuccessReasonPhrases.Ok).to.equal('OK');
    });
    it('# Created = "Created"', function () {
        expect(HttpSuccessReasonPhrases.Created).to.equal('Created');
    });
    it('# Accepted = "Accepted"', function () {
        expect(HttpSuccessReasonPhrases.Accepted).to.equal('Accepted');
    });
    it('# NonAuthoritativeInformation = "Non-Authoritative Information"', function () {
        expect(HttpSuccessReasonPhrases.NonAuthoritativeInformation).to.equal(
            'Non-Authoritative Information'
        );
    });
    it('# NoContent = "No Content"', function () {
        expect(HttpSuccessReasonPhrases.NoContent).to.equal('No Content');
    });
    it('# ResetContent = "Reset Content"', function () {
        expect(HttpSuccessReasonPhrases.ResetContent).to.equal('Reset Content');
    });
    it('# PartialContent = "Partial Content"', function () {
        expect(HttpSuccessReasonPhrases.PartialContent).to.equal(
            'Partial Content'
        );
    });
    it('# MultiStatus = "Multi-Status"', function () {
        expect(HttpSuccessReasonPhrases.MultiStatus).to.equal('Multi-Status');
    });
    it('# AlreadyReported = "Already Reported"', function () {
        expect(HttpSuccessReasonPhrases.AlreadyReported).to.equal(
            'Already Reported'
        );
    });
    it('# IMUsed = "IM Used"', function () {
        expect(HttpSuccessReasonPhrases.IMUsed).to.equal('IM Used');
    });
});
