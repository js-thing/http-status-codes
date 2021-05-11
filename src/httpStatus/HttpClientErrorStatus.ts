enum HttpClientErrorStatus {
    /**
* 400 BAD REQUEST - The server could not understand the request due to invalid syntax.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400 }
* @type {number}
*/
    BadRequest = 400,
    /**
* 401 UNAUTHORISED - Although the HTTP standard specifies "unauthorized",
* semantically this response means "unauthenticated".
* That is, the client must authenticate itself to get the requested response.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401 }
* @type {number}
*/
    UnAuthorised = 401,
    /**
* 402 PAYMENT REQUIRED - This response code is reserved for future use.
* The initial aim for creating this code was using it for digital payment systems,
* however this status code is used very rarely and no standard convention exists.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402 }
* @type {number}
*/
    PaymentRequired = 402,
    /**
* 403 FORBIDDEN - The client does not have access rights to the content;
* that is, it is unauthorized, so the server is refusing to give the requested resource.
* Unlike 401, the client's identity is known to the server.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403 }
* @type {number}
*/
    Forbidden = 403,
    /**
* 404 NOT FOUND - The server can not find the requested resource.
* In the browser, this means the URL is not recognized.
* In an API, this can also mean that the endpoint is valid but the resource itself does not exist.
* Servers may also send this response instead of 403 to hide the existence
* of a resource from an unauthorized client.
* This response code is probably the most famous one due to its frequent occurrence on the web.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404 }
* @type {number}
*/
    NotFound = 404,
    /**
* 405 METHOD NOT ALLOWED - The request method is known by the server
* but has been disabled and cannot be used.
* For example, an API may forbid DELETE-ing a resource.
* The two mandatory methods, GET and HEAD,
* must never be disabled and should not return this error code.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405 }
* @type {number}
*/
    MethodNotAllowed = 405,
    /**
* 406 NOT ACCEPTABLE - This response is sent when the web server,
* after performing server-driven content negotiation,
* doesn't find any content that conforms to the criteria given by the user agent.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406 }
* @type {number}
*/
    NotAcceptable = 406,
    /**
* 407 PROXY AUTHENTICATION REQUIRED - This is similar to 401 but
* authentication is needed to be done by a proxy.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407 }
* @type {number}
*/
    ProxyAuthenticationRequired = 407,
    /**
* 408 REQUEST TIMEOUT - This response is sent on an idle connection by some servers,
* even without any previous request by the client.
* It means that the server would like to shut down this unused connection.
* This response is used much more since some browsers, like Chrome, Firefox 27+,
* or IE9, use HTTP pre-connection mechanisms to speed up surfing.
* Also note that some servers merely shut down the connection without sending this message.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408 }
* @type {number}
*/
    RequestTimeout = 408,
    /**
* 409 CONFLICT - This response is sent when a request
* conflicts with the current state of the server.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409 }
* @type {number}
*/
    Conflict = 409,
    /**
* 410 GONE - This response is sent when the requested content has been
* permanently deleted from server,
* with no forwarding address.
* Clients are expected to remove their caches and links to the resource.
* The HTTP specification intends this status code to be used for
* "limited-time, promotional services".
* APIs should not feel compelled to indicate resources that have been deleted with this status code.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410 }
* @type {number}
*/
    Gone = 410,
    /**
* 411 LENGTH REQUIRED - Server rejected the request because the Content-Length header field
* is not defined and the server requires it.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411 }
* @type {number}
*/
    LengthRequired = 411,
    /**
* 412 PRECONDITION FAILED - The client has indicated preconditions
* in its headers which the server does not meet.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412 }
* @type {number}
*/
    PreconditionFailed = 412,
    /**
* 413 PAYLOAD TOO LARGE - Request entity is larger than limits defined by server;
* the server might close the connection or return an Retry-After header field.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413 }
* @type {number}
*/
    PayloadTooLarge = 413,
    /**
* 414 URI TOO LONG - The URI requested by the
* client is longer than the server is willing to interpret.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414 }
* @type {number}
*/
    URITooLong = 414,
    /**
* 415 UNSUPPORTED MEDIA TYPE - The media format
* of the requested data is not supported by the server,
* so the server is rejecting the request.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415 }
* @type {number}
*/
    UnsupportedMediaType = 415,
    /**
* 416 RANGE NOT SATISFIABLE - The range specified by the Range
* header field in the request can't be fulfilled;
* it's possible that the range is outside the size of the target URI's data.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416 }
* @type {number}
*/
    RangeNotSatisfiable = 416,
    /**
* 417 EXPECTATION FAILED - This response code means the expectation indicated by the
* Expect request header field can't be met by the server.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417 }
* @type {number}
*/
    ExpectationFailed = 417,
    /**
* 418 I AM A TEAPOT - The server refuses the attempt to brew coffee with a teapot.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418 }
* @type {number}
*/
    IAmATeapot = 418,
    /**
* 421 UNSUPPORTED MEDIA TYPE - The request was directed at a server
* that is not able to produce a response.
* This can be sent by a server that is not configured to produce responses for the combination of
* scheme and authority that are included in the request URI.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421 }
* @type {number}
*/
    MisdirectedRequest = 421,
    /**
* 422 UNPROCESSABLE ENTITY - The request was well-formed
* but was unable to be followed due to semantic errors.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422 }
* @type {number}
*/
    UnprocessableEntity = 422,
    /**
* 423 LOCKED - The resource that is being accessed is locked.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423 }
* @type {number}
*/
    Locked = 423,
    /**
* 424 FAILED DEPENDENCY - The request failed due to failure of a previous request.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424 }
* @type {number}
*/
    FailedDependency = 424,
    /**
* 425 TOO EARLY - Indicates that the server is unwilling to
* risk processing a request that might be replayed.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425 }
* @type {number}
*/
    TooEarly = 425,
    /**
* 426 UPGRADE REQUIRED - The server refuses to perform the request using the current protocol
* but might be willing to do so after the client upgrades to a different protocol.
* The server sends an Upgrade header in a 426 response to indicate the required protocol(s).
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426 }
* @type {number}
*/
    UpgradeRequired = 426,
    /**
* 428 PRECONDITION REQUIRED - The origin server requires the request to be conditional.
* This response is intended to prevent the 'lost update' problem,
* where a client GETs a resource's state, modifies it, and PUTs it back to the server,
* when meanwhile a third party has modified the state on the server, leading to a conflict.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428 }
* @type {number}
*/
    PreconditionRequired = 428,
    /**
* 429 TOO MANY REQUESTS - The user has sent too many
* requests in a given amount of time ("rate limiting").
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429 }
* @type {number}
*/
    TooManyRequests = 429,
    /**
* 431 REQUEST HEADER FIELDS TOO LARGE - The server is unwilling to process the request
* because its header fields are too large.
* The request may be resubmitted after reducing the size of the request header fields.
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431 }
* @type {number}
*/
    RequestHeaderFieldsTooLarge = 431,
    /**
* 451 UNAVAILABLE FOR LEGAL REASONS - The user-agent
* requested a resource that cannot legally be provided,
* such as a web page censored by a government
* For more deatils check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451 }
* @type {number}
*/
    UnavailableForLegalReasons = 451,
}

export default HttpClientErrorStatus;
