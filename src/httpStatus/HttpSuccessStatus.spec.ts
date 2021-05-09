import HttpSuccessStatus from './HttpSuccessStatus';
import { expect } from 'chai';

describe('HttpSuccessStatus', () => {
  describe('#Ok', () => {
    it('status code should be equal to 200', () => {
      expect(HttpSuccessStatus.Ok).to.equal(200);
    });
  });
  describe('#Created', () => {
    it('status code should be equal to 201', () => {
      expect(HttpSuccessStatus.Created).to.equal(201);
    });
  });
  describe('#Accepted', () => {
    it('status code should be equal to 202', () => {
      expect(HttpSuccessStatus.Accepted).to.equal(202);
    });
  });
  describe('#NonAuthoritativeInformation', () => {
    it('status code should be equal to 203', () => {
      expect(HttpSuccessStatus.NonAuthoritativeInformation).to.equal(203);
    });
  });
  describe('#NoContent', () => {
    it('status code should be equal to 204', () => {
      expect(HttpSuccessStatus.NoContent).to.equal(204);
    });
  });
  describe('#ResetContent', () => {
    it('status code should be equal to 205', () => {
      expect(HttpSuccessStatus.ResetContent).to.equal(205);
    });
  });
  describe('#PartialContent', () => {
    it('status code should be equal to 206', () => {
      expect(HttpSuccessStatus.PartialContent).to.equal(206);
    });
  });
  describe('#MultiStatus', () => {
    it('status code should be equal to 207', () => {
      expect(HttpSuccessStatus.MultiStatus).to.equal(207);
    });
  });
  describe('#AlreadyReported', () => {
    it('status code should be equal to 208', () => {
      expect(HttpSuccessStatus.AlreadyReported).to.equal(208);
    });
  });
  describe('#IMUsed', () => {
    it('status code should be equal to 226', () => {
      expect(HttpSuccessStatus.IMUsed).to.equal(226);
    });
  });
});
