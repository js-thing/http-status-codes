import { expect } from 'chai';
import HttpInformationReasonPhrases from './HttpInformationReasonPhrases';

describe('HttpInformationReasonPhrases', function () {
    describe('#Continue', function () {
        it('status code should be equal to Continue', function () {
            expect(HttpInformationReasonPhrases.Continue).to.equal('Continue');
        });
    });
    describe('#SwitchingProtocol', function () {
        it('status code should be equal to Switching Protocol', function () {
            expect(HttpInformationReasonPhrases.SwitchingProtocol).to.equal(
                'Switching Protocol'
            );
        });
    });
    describe('#Processing', function () {
        it('status code should be equal to Processing', function () {
            expect(HttpInformationReasonPhrases.Processing).to.equal(
                'Processing'
            );
        });
    });
    describe('#EarlyHints', function () {
        it('status code should be equal to Early Hints', function () {
            expect(HttpInformationReasonPhrases.EarlyHints).to.equal(
                'Early Hints'
            );
        });
    });
});
