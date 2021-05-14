import HttpInformationStatusCodes from './HttpInformationStatusCodes';
import { expect } from 'chai';

describe('HttpInformationStatusCodes', () => {
    describe('#Continue', () => {
        it('status code should be equal to 100', () => {
            expect(HttpInformationStatusCodes.Continue).to.equal(100);
        });
    });
    describe('#SwitchingProtocol', () => {
        it('status code should be equal to 101', () => {
            expect(HttpInformationStatusCodes.SwitchingProtocol).to.equal(101);
        });
    });
    describe('#Processing', () => {
        it('status code should be equal to 102', () => {
            expect(HttpInformationStatusCodes.Processing).to.equal(102);
        });
    });
    describe('#EarlyHints', () => {
        it('status code should be equal to 103', () => {
            expect(HttpInformationStatusCodes.EarlyHints).to.equal(103);
        });
    });
});
