/**
 * Enum for HTTP client error response status codes
 *
 * The values can range from (400–499)
 *
 * @readonly
 * @enum {number}
 */
enum HttpClientErrorStatusCodes {
    /**
     * ### 400 Bad Request
     *
     * The server could not understand the request due to invalid syntax.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1)
     * @type {number}
     */
    BadRequest = 400,

    /**
     * ### 401 Unauthorized
     *
     * Although the HTTP standard specifies "unauthorized",
     * semantically this response means "unauthenticated".
     * That is, the client must authenticate itself to get the requested response.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7235#section-3.1)
     * @type {number}
     */
    UnAuthorised = 401,

    /**
     * ### 402 Payment Required
     *
     * This response code is reserved for future use.
     * The initial aim for creating this code was using it for digital payment systems,
     * however this status code is used very rarely and no standard convention exists.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2)
     * @type {number}
     */
    PaymentRequired = 402,

    /**
     * ### 403 Forbidden
     *
     * The client does not have access rights to the content;
     * that is, it is unauthorized, so the server is refusing to give the requested resource.
     * Unlike 401, the client's identity is known to the server.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3)
     * @type {number}
     */
    Forbidden = 403,

    /**
     * ### 404 Not Found
     *
     * The server can not find the requested resource.
     * In the browser, this means the URL is not recognized.
     * In an API, this can also mean that the endpoint is valid but
     * the resource itself does not exist.
     * Servers may also send this response instead of 403 to hide the existence
     * of a resource from an unauthorized client.
     * This response code is probably the most famous one due to its frequent occurrence on the web.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4)
     * @type {number}
     */
    NotFound = 404,

    /**
     * ### 405 Method Not Allowed
     *
     * The request method is known by the server
     * but has been disabled and cannot be used.
     * For example, an API may forbid DELETE-ing a resource.
     * The two mandatory methods, ```GET``` and ```HEAD```,
     * must never be disabled and should not return this error code.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5)
     * @type {number}
     */
    MethodNotAllowed = 405,

    /**
     * ### 406 Not Acceptable
     *
     * This response is sent when the web server, after performing
     * server-driven content negotiation,
     * doesn't find any content that conforms to the criteria given by the user agent.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6)
     * @type {number}
     */
    NotAcceptable = 406,

    /**
     * ### 407 Proxy Authentication Required
     *
     * This is similar to 401 but
     * authentication is needed to be done by a proxy.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7235#section-3.2)
     * @type {number}
     */
    ProxyAuthenticationRequired = 407,

    /**
     * ### 408 Request Timeout
     *
     * This response is sent on an idle connection by some servers,
     * even without any previous request by the client.
     * It means that the server would like to shut down this unused connection.
     * This response is used much more since some browsers, like Chrome, Firefox 27+,
     * or IE9, use HTTP pre-connection mechanisms to speed up surfing.
     * Also note that some servers merely shut down the connection without sending this message.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7)
     * @type {number}
     */
    RequestTimeout = 408,

    /**
     * ### 409 Conflict
     *
     * This response is sent when a request
     * conflicts with the current state of the server.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8)
     * @type {number}
     */
    Conflict = 409,

    /**
     * ### 410 Gone
     *
     * This response is sent when the requested content has been
     * permanently deleted from server,
     * with no forwarding address.
     * Clients are expected to remove their caches and links to the resource.
     * The HTTP specification intends this status code to be used for
     * "limited-time, promotional services".
     * APIs should not feel compelled to indicate resources that have been
     * deleted with this status code.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9)
     * @type {number}
     */
    Gone = 410,

    /**
     * ### 411 Length Required
     *
     * Server rejected the request because the ```Content-Length``` header field
     * is not defined and the server requires it.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10)
     * @type {number}
     */
    LengthRequired = 411,

    /**
     * ### 412 Precondition Failed
     *
     * The client has indicated preconditions
     * in its headers which the server does not meet.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7232#section-4.2)
     * @type {number}
     */
    PreconditionFailed = 412,

    /**
     * ### 413 Payload Too Large
     *
     * Request entity is larger than limits defined by server;
     * the server might close the connection or return an ```Retry-After``` header field.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11)
     * @type {number}
     */
    PayloadTooLarge = 413,

    /**
     * ### 414 URI Too Long
     *
     * The URI requested by the
     * client is longer than the server is willing to interpret.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12)
     * @type {number}
     */
    URITooLong = 414,

    /**
     * ### 415 Unsupported Media Type
     *
     * The media format
     * of the requested data is not supported by the server,
     * so the server is rejecting the request.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13)
     * @type {number}
     */
    UnsupportedMediaType = 415,

    /**
     * ### 416 Range Not Satisfiable
     *
     * The range specified by the ```Range```
     * header field in the request can't be fulfilled;
     * it's possible that the range is outside the size of the target URI's data.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7233#section-4.4)
     * @type {number}
     */
    RangeNotSatisfiable = 416,

    /**
     * ### 417 Expectation Failed
     *
     * This response code means the expectation indicated by the
     * ```Expect``` request header field can't be met by the server.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14)
     * @type {number}
     */
    ExpectationFailed = 417,

    /**
     * ### 418 I'm a teapot
     *
     * The server refuses the attempt to brew coffee with a teapot.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc2324#section-2.3.2)
     * @type {number}
     */
    IAmATeapot = 418,

    /**
     * ### 421 Misdirected Request
     *
     * The request was directed at a server
     * that is not able to produce a response.
     * This can be sent by a server that is not configured to produce
     * responses for the combination of
     * scheme and authority that are included in the request URI.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2)
     * @type {number}
     */
    MisdirectedRequest = 421,

    /**
     * ### 422 Unprocessable Entity (WebDAV)
     *
     * The request was well-formed
     * but was unable to be followed due to semantic errors.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc2518#section-10.3)
     * @type {number}
     */
    UnprocessableEntity = 422,

    /**
     * ### 423 Locked (WebDAV)
     *
     * The resource that is being accessed is locked.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc2518#section-10.4)
     * @type {number}
     */
    Locked = 423,

    /**
     * ### 424 Failed Dependency (WebDAV)
     *
     * The request failed due to failure of a previous request.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc2518#section-10.5)
     * @type {number}
     */
    FailedDependency = 424,

    /**
     * ### 425 Too Early
     *
     * Indicates that the server is unwilling to
     * risk processing a request that might be replayed.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc8470#section-5.2)
     * @type {number}
     */
    TooEarly = 425,

    /**
     * ### 426 Upgrade Required
     *
     * The server refuses to perform the request using the current protocol
     * but might be willing to do so after the client upgrades to a different protocol.
     * The server sends an
     * [Upgrade](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade)
     * header in a 426 response to indicate the required protocol(s).
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.15)
     * @type {number}
     */
    UpgradeRequired = 426,

    /**
     * ### 428 Precondition Required
     *
     * The origin server requires the request to be conditional.
     * This response is intended to prevent the 'lost update' problem,
     * where a client GETs a resource's state, modifies it, and PUTs it back to the server,
     * when meanwhile a third party has modified the state on the server, leading to a conflict.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc6585#section-3)
     * @type {number}
     */
    PreconditionRequired = 428,

    /**
     * ### 429 Too Many Requests
     *
     * The user has sent too many
     * requests in a given amount of time ("rate limiting").
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc6585#section-4)
     * @type {number}
     */
    TooManyRequests = 429,

    /**
     * ### 431 Request Header Fields Too Large
     *
     * The server is unwilling to process the request
     * because its header fields are too large.
     * The request may be resubmitted after reducing the size of the request header fields.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc6585#section-5)
     * @type {number}
     */
    RequestHeaderFieldsTooLarge = 431,

    /**
     * ### 451 Unavailable For Legal Reasons
     *
     * The user-agent
     * requested a resource that cannot legally be provided,
     * such as a web page censored by a government
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7725#section-3)
     * @type {number}
     */
    UnavailableForLegalReasons = 451,
}

export default HttpClientErrorStatusCodes;
