/**
 * @enum Http Successful Responses
 */
enum HttpSuccessStatus {
    
    /**
     * ### 200 OK
     * #### The request has succeeded. 
     * 
     * 
     * The meaning of the success depends on the HTTP method:  
     * 
     * **GET:** The resource has been fetched and is transmitted in the message body.  
     * **HEAD:** The entity headers are in the message body.  
     * **PUT or POST:** The resource describing the result.  
     * of the action is transmitted in the message body.  
     * **TRACE:** The message body contains the request message as received by the server.
     * 
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200|Read more}
     * 
     */
    Ok = 200,

    /**
    * 201 CREATED - The request has succeeded and a new resource has been created as a result.
    * This is typically the response sent after POST requests, or some PUT requests.
    * For more details check out
    * { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201 }
    * @type {number}
    */
    Created = 201,
    /**
   * 202 ACCEPTED - The request has been received but not yet acted upon. It is noncommittal,
   * since there is no way in HTTP to
   * later send an asynchronous response indicating the outcome of the request.
   * It is intended for cases where another process
   * or server handles the request, or for batch processing.
   * For more details check out
   * { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202 }
   * @type {number}
   */
    Accepted = 202,
    /**
 * 203 NON AUTHORITATIVE INFORMATION -This response code means the returned meta-information
 * is not exactly the same as is available from the origin server, but is collected from a local
 * or a third-party copy.
 * This is mostly used for mirrors or backups of another resource.
 * For more details check out
 * { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203 }
 * Except for that specific case, the "200 OK" response is preferred to this status.
 * @type {number}
 */
    NonAuthoritativeInformation = 203,
    /**
 * 204 NO CONTENT - There is no content to send for this request, but the headers may be useful.
 * The user-agent may update its cached headers for this resource with the new ones.
 * For more details check out
 * { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204 }
 * @type {number}
 */
    NoContent = 204,
    /**
 * 205 RESET CONTENT - Tells the user-agent to reset the document which sent this request.
 * For more details check out
 * { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205 }
 * @type {number}
 */
    ResetContent = 205,
    /**
 * 206 PARTIAL CONTENT - This response code is used when the Range header is sent from the client to
 * request only part of a resource.
 * For more details check out
 * { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206 }
 * @type {number}
 */
    PartialContent = 206,
    /**
* 207 MULTI STATUS - Conveys information about multiple resources,
* for situations where multiple status codes might be appropriate.
* For more details check out
{ @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207 }
* @type {number}
*/
    MultiStatus = 207,
    /**
* 208 ALREADY REPORTED - Used inside a <dav:propstat> response element to avoid repeatedly
* enumerating the internal members of multiple bindings to the same collection.
* For more details check out
{ @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/208 }
*  @type {number}
*/
    AlreadyReported = 208,
    /**
* 209 IM USED - The server has fulfilled a GET request for the resource, and the response is
* a representation of the result of one or more
* instance-manipulations applied to the current instance.
* For more details check out { @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/226 }
* @type {number}
*/
    IMUsed = 226,
}

export default HttpSuccessStatus;
