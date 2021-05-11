import HttpInformationStatus from './HttpInformationStatus';
import HttpSuccessStatus from './HttpSuccessStatus';
import HttpRedirectionStatus from './HttpRedirectionStatus';
import HttpClientErrorStatus from './HttpClientErrorStatus';
import HttpServerErrorStatus from './HttpServerErrorStatus';

// tslint:disable-next-line:variable-name
export const HttpStatusCodes = {
  ...HttpInformationStatus,
  ...HttpSuccessStatus,
  ...HttpRedirectionStatus,
  ...HttpClientErrorStatus,
  ...HttpServerErrorStatus,
};

export type HttpStatusCodes =
  HttpInformationStatus |
  HttpSuccessStatus |
  HttpRedirectionStatus |
  HttpClientErrorStatus |
  HttpServerErrorStatus;
