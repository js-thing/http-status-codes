/**
 * Enum for HTTP redirects status reason phrases
 *
 * @readonly
 * @enum {string}
 */
enum HttpRedirectionReasonPhrases {
    /**
     * ### 300 Multiple Choice
     *
     * The request has more than one possible response.
     * The user-agent or user should choose one of them.
     * (There is no standardized way of choosing one of the responses,
     * but HTML links to the possibilities are recommended so the user can pick.)
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1)
     * @type {string}
     */
    MultipleChoice = 'Multiple Choice',

    /**
     * ### 301 Moved Permanently
     *
     * The URL of the requested resource has been changed permanently.
     * The new URL is given in the response.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2)
     * @type {string}
     */
    MovedPermanently = 'Moved Permanently',

    /**
     * ### 302 Found
     *
     * This response code means that the URI
     * of requested resource has been changed temporarily.
     * Further changes in the URI might be made in the future.
     * Therefore, this same URI should be used by the client in future requests.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3)
     * @type {string}
     */
    Found = 'Found',

    /**
     * ### 303 See Other
     *
     * The server sent this response to direct the client to
     * get the requested resource at another URI with a GET request.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4)
     * @type {string}
     */
    SeeOther = 'See Other',

    /**
     * ### 304 Not Modified
     *
     * This is used for caching purposes.
     * It tells the client that the response has not been modified,
     * so the client can continue to use the same cached version of the response.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7232#section-4.1)
     * @type {string}
     */
    NotModified = 'Not Modified',

    /**
     * ### 305 Use Proxy
     *
     * @deprecated
     *
     * Defined in a previous version of the HTTP specification to
     * indicate that a requested response must be accessed by a proxy.
     * It has been deprecated due to security concerns regarding in-band
     * configuration of a proxy.
     *
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5)
     * @type {string}
     */
    UseProxy = 'Use Proxy',

    /**
     * ### 306 unused
     *
     * @deprecated
     *
     * This response code is no longer used; it is just reserved.
     * It was used in a previous version of the HTTP/1.1 specification.
     *
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.6)
     * @type {string}
     */
    Unused = 'unused',

    /**
     * ### 307 Temporary Redirect
     *
     * The server sends this response to direct the client to get
     * the requested resource at another URI with same method that
     * was used in the prior request. This has the same semantics
     * as the `302 Found` HTTP response code, with the exception
     * that the user agent must not change the HTTP method used:
     * If a `POST` was used in the first request, a `POST`
     * must be used in the second request.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7)
     * @type {string}
     */
    TemporaryRedirect = 'Temporary Redirect',

    /**
     * ### 308 Permanent Redirect
     *
     * This means that the resource is now permanently located at
     * another URI, specified by the `Location:` HTTP Response
     * header. This has the same semantics as the
     * `301 Moved Permanently` HTTP response code, with the
     * exception that the user agent must not change the HTTP method used:
     * If a `POST` was used in the first request, a `POST`
     * must be used in the second request.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7538#section-3)
     * @type {string}
     */
    PermanentRedirect = 'Permanent Redirect',
}

export default HttpRedirectionReasonPhrases;
