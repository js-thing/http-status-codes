/**
 * Enum for HTTP information response status codes
 *
 * The values can range from (100–199)
 *
 * @readonly
 * @enum {number}
 */
enum HttpInformationStatusCodes {
    /**
     * ### 100 Continue
     *
     * This interim response indicates that everything so far is OK and that the
     * client should continue the request, or ignore the response if the request
     * is already finished.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1)
     * @type {number}
     */
    Continue = 100,

    /**
     * ### 101 Switching Protocol
     *
     * This code is sent in response to an
     * [Upgrade](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade)
     * request header from the client,
     * and indicates the protocol the server is switching to.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2)
     * @type {number}
     */
    SwitchingProtocol = 101,

    /**
     * ### 102 Processing (WebDAV)
     *
     * This code indicates that the server has received and is processing the request,
     * but no response is available yet.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/102) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc2518#section-10.1)
     * @type {number}
     */
    Processing = 102,

    /**
     * ### 103 Early Hints
     *
     * This status code is primarily intended to be used with the
     * [Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link)
     * header, letting the user agent start
     * [preloading](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)
     * resources while the server prepares a response.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc8297#section-2)
     * @type {number}
     */
    EarlyHints = 103,
}

export default HttpInformationStatusCodes;
