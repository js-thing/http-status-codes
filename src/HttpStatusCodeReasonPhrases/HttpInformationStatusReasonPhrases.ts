/**
 * Enum for HTTP information response reason phrases
 *
 * @readonly
 * @enum {string}
 */
enum HttpInformationStatusReasonPhrases {
    /**
     * ### 100 Continue
     *
     * This interim response indicates that everything so far is OK and that the
     * client should continue the request, or ignore the response if the request
     * is already finished.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100)
     *
     * @type {string}
     */
    Continue = 'Continue',

    /**
     * ### 101 Switching Protocol
     *
     * This code is sent in response to an
     * [Upgrade](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade)
     * request header from the client,
     * and indicates the protocol the server is switching to.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101)
     *
     * @type {string}
     */
    SwitchingProtocol = 'Switching Protocol',

    /**
     * ### 102 Processing (WebDAV)
     *
     * This code indicates that the server has received and is processing the request,
     * but no response is available yet.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/102)
     *
     * @type {string}
     */
    Processing = 'Processing',

    /**
     * ### 103 Early Hints
     *
     * This status code is primarily intended to be used with the
     * [Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link)
     * header, letting the user agent start
     * [preloading](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)
     * resources while the server prepares a response.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103)
     *
     * @type {string}
     */
    EarlyHints = 'Early Hints',
}

export default HttpInformationStatusReasonPhrases;
