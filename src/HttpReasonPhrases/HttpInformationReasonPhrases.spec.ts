import { expect } from 'chai';
import HttpInformationReasonPhrases from './HttpInformationReasonPhrases';

describe('HttpInformationReasonPhrases', function () {
    it('# Continue = "Continue"', function () {
        expect(HttpInformationReasonPhrases.Continue).to.equal('Continue');
    });
    it('# SwitchingProtocol = "Switching Protocol"', function () {
        expect(HttpInformationReasonPhrases.SwitchingProtocol).to.equal(
            'Switching Protocol'
        );
    });
    it('# Processing = "Processing"', function () {
        expect(HttpInformationReasonPhrases.Processing).to.equal('Processing');
    });
    it('# EarlyHints = "Early Hints"', function () {
        expect(HttpInformationReasonPhrases.EarlyHints).to.equal('Early Hints');
    });
});
