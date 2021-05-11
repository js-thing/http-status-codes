/**
 * @enum Http Server Error Status
 */
 enum HttpServerErrorStatus {
    /**
* 500 INTERNAL SERVER ERROR - The server has encountered a situation it doesn't know how to handle.
* For more details check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500 }
* @type {number}
*/
    InternalServerError = 500,
    /**
* 501 NOT IMPLEMENTED - The request method is not supported by the server and cannot be handled.
* The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
* For more details check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501 }
* @type {number}
*/
    NotImplemented = 501,
    /**
* 502 BAD GATEWAY - This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
* For more details check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502 }
* @type {number}
*/
    BadGateway = 502,
    /**
* 503 SERVICE UNAVAILABLE - The server is not ready to handle the request.
* Common causes are a server that is down for maintenance or that is overloaded.
* Note that together with this response, a user-friendly page explaining the problem should be sent.
* This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service.
* The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
* For more details check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503 }
* @type {number}
*/
    ServiceUnavailable = 503,
    /**
* 504 GATEWAY TIMEOUT - This error response is given when the server is acting as a gateway and cannot get a response in time.
* For more details check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504 }
* @type {number}
*/
    GatewayTimeout = 504,
    /**
* 505 HTTP VERSION NOT SUPPORTED - The HTTP version used in the request is not supported by the server.
* For more details check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505 }
* @type {number}
*/
    HTTPVersionNotSupported = 505,
    /**
* 506 VARIANT ALSO NEGOTIATES - The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
* For more details check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506 }
* @type {number}
*/
    VariantAlsoNegotiates = 506,
    /**
* 507 INSUFFICIENT STORAGE - The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.
* For more details check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507 }
* @type {number}
*/
    InsufficientStorage = 507,
    /**
* 508 LOOP DETECTED - The server detected an infinite loop while processing the request.
* For more details check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508 }
* @type {number}
*/
    LoopDetected = 508,
    /**
* 510 NOT EXTENDED - Further extensions to the request are required for the server to fulfill it.
* For more details check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510 }
* @type {number}
*/
    NotExtended = 510,
    /**
* 511 NETWORK AUTHENTICATION REQUIRED - The 511 status code indicates that the client needs to authenticate to gain network access.
* For more details check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511 }
* @type {number}
*/
    NetworkAuthenticationRequired = 511,
}

export default HttpServerErrorStatus;
