import { expect } from 'chai';
import HttpInformationStatusCodes from './HttpInformationStatusCodes';

describe('HttpInformationStatusCodes', function () {
    it('# Continue = 100', function () {
        expect(HttpInformationStatusCodes.Continue).to.equal(100);
    });
    it('# SwitchingProtocol = 101', function () {
        expect(HttpInformationStatusCodes.SwitchingProtocol).to.equal(101);
    });
    it('# Processing = 102', function () {
        expect(HttpInformationStatusCodes.Processing).to.equal(102);
    });
    it('# EarlyHints = 103', function () {
        expect(HttpInformationStatusCodes.EarlyHints).to.equal(103);
    });
});
