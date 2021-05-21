import { expect } from 'chai';
import HttpInformationStatusCodes from './HttpInformationStatusCodes';

describe('HttpInformationStatusCodes', function () {
    describe('#Continue', function () {
        it('status code should be equal to 100', function () {
            expect(HttpInformationStatusCodes.Continue).to.equal(100);
        });
    });
    describe('#SwitchingProtocol', function () {
        it('status code should be equal to 101', function () {
            expect(HttpInformationStatusCodes.SwitchingProtocol).to.equal(101);
        });
    });
    describe('#Processing', function () {
        it('status code should be equal to 102', function () {
            expect(HttpInformationStatusCodes.Processing).to.equal(102);
        });
    });
    describe('#EarlyHints', function () {
        it('status code should be equal to 103', function () {
            expect(HttpInformationStatusCodes.EarlyHints).to.equal(103);
        });
    });
});
