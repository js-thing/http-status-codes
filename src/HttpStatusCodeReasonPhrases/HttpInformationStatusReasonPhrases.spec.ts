import HttpInformationStatusReasonPhrases from './HttpInformationStatusReasonPhrases';
import { expect } from 'chai';

describe('HttpInformationStatusReasonPhrases', () => {
    describe('#Continue', () => {
        it('status code should be equal to Continue', () => {
            expect(HttpInformationStatusReasonPhrases.Continue).to.equal(
                'Continue'
            );
        });
    });
    describe('#SwitchingProtocol', () => {
        it('status code should be equal to Switching Protocol', () => {
            expect(
                HttpInformationStatusReasonPhrases.SwitchingProtocol
            ).to.equal('Switching Protocol');
        });
    });
    describe('#Processing', () => {
        it('status code should be equal to Processing', () => {
            expect(HttpInformationStatusReasonPhrases.Processing).to.equal(
                'Processing'
            );
        });
    });
    describe('#EarlyHints', () => {
        it('status code should be equal to Early Hints', () => {
            expect(HttpInformationStatusReasonPhrases.EarlyHints).to.equal(
                'Early Hints'
            );
        });
    });
});
