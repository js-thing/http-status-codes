enum HttpInformationStatus {
    /**
* 100 CONTINUE - This interim response indicates that everything so far is OK and that the
* client should continue the request, or ignore the response if the request is already finished.
* For more details check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100 }
* @type {number}
*/
    Continue = 100,
    /**
* 101 SWITCHING PROTOCOL - This code is sent in response to an
* Upgrade request header from the client,
* and indicates the protocol the server is switching to.
* For more details check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101 }
* @type {number}
*/
    SwitchingProtocol = 101,
    /**
* 102 PROCESSING - This code indicates that the server has received and is processing the request,
* but no response is available yet.
* For more details check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/102 }
* @type {number}
*/
    Processing = 102,
    /**
* 103 EARLY HINTS - This status code is primarily intended to be used with the Link header,
* letting the user agent start preloading resources while the server prepares a response.
* For more details check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103 }
* @type {number}
*/
    EarlyHints = 103,
}

export default HttpInformationStatus;
