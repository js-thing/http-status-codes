/**
 * Enum for HTTP successful response status codes
 *
 * The values can range from (200–299)
 *
 * @readonly
 * @enum {number}
 */
enum HttpSuccessStatusCodes {
    /**
     * ### 200 OK
     *
     * The request has succeeded. The meaning of the success depends on the HTTP method:
     *
     * `GET`: The resource has been fetched and is transmitted in the message body.
     *
     * `HEAD`: The entity headers are in the message body.
     *
     * `PUT` or `POST`: The resource describing the result.
     * of the action is transmitted in the message body.
     *
     * `TRACE`: The message body contains the request message as received by the server.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1)
     * @type {number}
     */
    Ok = 200,

    /**
     * ### 201 Created
     *
     * The request has succeeded and a new resource has been created as a result.
     * This is typically the response sent after `POST` requests, or some `PUT` requests.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2)
     * @type {number}
     */
    Created = 201,

    /**
     * ### 202 Accepted
     *
     * The request has been received but not yet acted upon. It is noncommittal,
     * since there is no way in HTTP to later send an asynchronous response
     * indicating the outcome of the request. It is intended for cases where
     * another process or server handles the request, or for batch processing.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3)
     * @type {number}
     */
    Accepted = 202,

    /**
     * ### 203 Non-Authoritative Information
     *
     * This response code means the returned meta-information
     * is not exactly the same as is available from the origin server, but is collected from a local
     * or a third-party copy. This is mostly used for mirrors or backups of another resource.
     *
     * Except for that specific case, the "200 OK" response is preferred to this status.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4)
     * @type {number}
     */
    NonAuthoritativeInformation = 203,

    /**
     * ### 204 No Content
     *
     * There is no content to send for this request, but the headers may be useful.
     * The user-agent may update its cached headers for this resource with the new ones.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5)
     * @type {number}
     */
    NoContent = 204,

    /**
     * ### 205 Reset Content
     *
     * Tells the user-agent to reset the document which sent this request.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6)
     * @type {number}
     */
    ResetContent = 205,

    /**
     * ### 206 Partial Content
     *
     * This response code is used when the
     * [Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range)
     * header is sent from the client to
     * request only part of a resource.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc7233#section-4.1)
     * @type {number}
     */
    PartialContent = 206,

    /**
     * ### 207 Multi-Status (WebDAV)
     *
     * Conveys information about multiple resources, for situations where
     * multiple status codes might be appropriate.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc2518#section-10.2)
     * @type {number}
     */
    MultiStatus = 207,

    /**
     * ### 208 Already Reported (WebDAV)
     *
     * Used inside a `<dav:propstat>` response element to avoid repeatedly
     * enumerating the internal members of multiple bindings to the same collection.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/208) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc5842#section-7.1)
     * @type {number}
     */
    AlreadyReported = 208,

    /**
     * ### 226 IM Used (HTTP Delta encoding)
     *
     * The server has fulfilled a `GET` request for the resource, and the response is
     * a representation of the result of one or more
     * instance-manipulations applied to the current instance.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/226) |
     * [Official Documentation](https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1)
     * @type {number}
     */
    IMUsed = 226,
}

export default HttpSuccessStatusCodes;
