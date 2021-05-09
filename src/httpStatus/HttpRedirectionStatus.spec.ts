import HttpRedirectionStatus from './HttpRedirectionStatus';
import { expect } from 'chai';

describe('HttpRedirectionStatus', () => {
  describe('#MultipleChoice', () => {
    it('status code should be equal to 300', () => {
      expect(HttpRedirectionStatus.MultipleChoice).to.equal(300);
    });
  });
  describe('#MovedPermanently', () => {
    it('status code should be equal to 301', () => {
      expect(HttpRedirectionStatus.MovedPermanently).to.equal(301);
    });
  });
  describe('#Found', () => {
    it('status code should be equal to 302', () => {
      expect(HttpRedirectionStatus.Found).to.equal(302);
    });
  });
  describe('#SeeOther', () => {
    it('status code should be equal to 303', () => {
      expect(HttpRedirectionStatus.SeeOther).to.equal(303);
    });
  });
  describe('#NotModified', () => {
    it('status code should be equal to 304', () => {
      expect(HttpRedirectionStatus.NotModified).to.equal(304);
    });
  });
  describe('#UseProxy', () => {
    it('status code should be equal to 305', () => {
      expect(HttpRedirectionStatus.UseProxy).to.equal(305);
    });
  });
  describe('#TemporaryRedirect', () => {
    it('status code should be equal to 307', () => {
      expect(HttpRedirectionStatus.TemporaryRedirect).to.equal(307);
    });
  });
  describe('#PermanentRedirect', () => {
    it('status code should be equal to 308', () => {
      expect(HttpRedirectionStatus.PermanentRedirect).to.equal(308);
    });
  });
});
