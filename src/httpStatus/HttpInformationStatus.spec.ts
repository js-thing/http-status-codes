import HttpInformationStatus from './HttpInformationStatus';
import { expect } from 'chai';

describe('HttpInformationStatus', () => {
  describe('#Continue', () => {
    it('status code should be equal to 100', () => {
      expect(HttpInformationStatus.Continue).to.equal(100);
    });
  });
  describe('#SwitchingProtocol', () => {
    it('status code should be equal to 101', () => {
      expect(HttpInformationStatus.SwitchingProtocol).to.equal(101);
    });
  });
  describe('#Processing', () => {
    it('status code should be equal to 102', () => {
      expect(HttpInformationStatus.Processing).to.equal(102);
    });
  });
  describe('#EarlyHints', () => {
    it('status code should be equal to 103', () => {
      expect(HttpInformationStatus.EarlyHints).to.equal(103);
    });
  });
});
