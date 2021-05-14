import HttpInformationReasonPhrases from './HttpInformationReasonPhrases';
import { expect } from 'chai';

describe('HttpInformationReasonPhrases', () => {
    describe('#Continue', () => {
        it('status code should be equal to Continue', () => {
            expect(HttpInformationReasonPhrases.Continue).to.equal(
                'Continue'
            );
        });
    });
    describe('#SwitchingProtocol', () => {
        it('status code should be equal to Switching Protocol', () => {
            expect(
                HttpInformationReasonPhrases.SwitchingProtocol
            ).to.equal('Switching Protocol');
        });
    });
    describe('#Processing', () => {
        it('status code should be equal to Processing', () => {
            expect(HttpInformationReasonPhrases.Processing).to.equal(
                'Processing'
            );
        });
    });
    describe('#EarlyHints', () => {
        it('status code should be equal to Early Hints', () => {
            expect(HttpInformationReasonPhrases.EarlyHints).to.equal(
                'Early Hints'
            );
        });
    });
});
