[![npm version](https://badge.fury.io/js/%40js-thing%2Fhttp-status-codes.svg)](https://badge.fury.io/js/%40js-thing%2Fhttp-status-codes)
![Build status](https://github.com/js-thing/http-status-codes/actions/workflows/node.js.yml/badge.svg)
[![codecov](https://codecov.io/gh/js-thing/http-status-codes/branch/main/graph/badge.svg?token=lSpAkoUYjc)](https://codecov.io/gh/js-thing/http-status-codes)
[![GitHub version](https://badge.fury.io/gh/js-thing%2Fhttp-status-codes.svg)](https://badge.fury.io/gh/js-thing%2Fhttp-status-codes)
![dependencies](https://status.david-dm.org/gh/js-thing/http-status-codes.svg)
![dev-dependencies](https://status.david-dm.org/gh/js-thing/http-status-codes.svg?type=dev)
![npm-downloads](https://img.shields.io/npm/dt/@js-thing/http-status-codes)

## Http Status Codes

This library is a complete collection of all `Http Status Codes` and `Reason Phrases` along with `helper functions` with _no dependencies_ and is _open source_ written in typescript.

Use with `Typescript` or `Javascript` in both _server_ or _client_ side.

### Covers status codes defined in
- Hypertext Transfer Protocol (HTTP/1.0) defined in 
[RFC 1945](https://datatracker.ietf.org/doc/html/rfc1945)
- Hypertext Transfer Protocol (HTTP/1.1) defined in 
[RFC 2616](https://www.ietf.org/rfc/rfc2616.txt)
- Web-based Distributed Authoring and Versioning (WebDAV) defined in 
[RFC 2518](https://datatracker.ietf.org/doc/html/rfc2518)


View project on [GitHub](https://github.com/js-thing/http-status-codes)

---

### Documentation

Each and every member/property/function of the library are properly documented to get comprehensive inforation along with supporting links to original sources.

An example of VS Code IntelliSense showing the Unauthorized enum member.

![image](https://github.com/js-thing/http-status-codes/raw/main/VS_Code_IntelliSense.png)

The complete documentation of this project can be found in this [link](https://http-status-codes.js-thing.com).

---

### Installation

Install from [npm](https://www.npmjs.com/package/@js-thing/http-status-codes)
```sh
npm install @js-thing/http-status-codes
```
---

### Import it to your project

Use ES module import
```javascript
import { 
    HttpInformationStatusCodes, 
    HttpSuccessStatusCodes,
    HttpRedirectionStatusCodes,
    HttpClientErrorStatusCodes,     
    HttpServerErrorStatusCodes,
    HttpStatusCodes,
} from '@js-thing/http-status-codes';
```

Or CommonJS Require
```javascript
const { 
    HttpInformationStatusCodes, 
    HttpSuccessStatusCodes, 
    HttpRedirectionStatusCodes, 
    HttpClientErrorStatusCodes, 
    HttpServerErrorStatusCodes,
    HttpStatusCodes,
} = require('@js-thing/http-status-codes');
```
---

### Usage

The `HttpStatusCodes` enum is the  status code super set of `HttpInformationStatusCodes`, `HttpSuccessStatusCodes`, `HttpRedirectionStatusCodes`, `HttpClientErrorStatusCodes` and `HttpServerErrorStatusCodes` enums

```javascript
// use the combined enum to access any status code
const code = HttpStatusCodes.Continue; // code = 100
const code = HttpStatusCodes.Ok; // code = 200
const code = HttpStatusCodes.Found; // code = 302
const code = HttpStatusCodes.BadRequest; // code = 400
const code = HttpStatusCodes.InternalServerError; // code = 500

// Or use the individual enum group
const code = HttpInformationStatusCodes.Continue; // code = 100
const code = HttpSuccessStatusCodes.Ok; // code = 200
const code = HttpRedirectionStatusCodes.Found; // code = 302
const code = HttpClientErrorStatusCodes.BadRequest; // code = 400
const code = HttpServerErrorStatusCodes.InternalServerError; // code = 500
```

Similarly for reason phrase

```javascript
const {
    HttpInformationReasonPhrases,
    HttpSuccessReasonPhrases,
    HttpRedirectionReasonPhrases,
    HttpClientErrorReasonPhrases,
    HttpServerErrorReasonPhrases,
    HttpReasonPhrases
  } = require("@js-thing/http-status-codes");

// use the combined enum to access any reason rhrase
const phrase = HttpReasonPhrases.Continue; // phrase = "Continue"
const phrase = HttpReasonPhrases.Ok; // phrase = "OK"
const phrase = HttpReasonPhrases.Found; // phrase = "Found"
const phrase = HttpReasonPhrases.BadRequest; // phrase = "Bad Request"
const phrase = HttpReasonPhrases.InternalServerError; // phrase = "Internal Server Error"

// Or use the individual enum group
const phrase = HttpInformationReasonPhrases.Continue; // phrase = "Continue"
const phrase = HttpSuccessReasonPhrases.Ok; // phrase = "OK"
const phrase = HttpRedirectionReasonPhrases.Found; // phrase = "Found"
const phrase = HttpClientErrorReasonPhrases.BadRequest; // phrase = "Bad Request"
const phrase = HttpServerErrorReasonPhrases.InternalServerError; // phrase = "Internal Server Error"
```

Check status code, reason phrase defined in RFC

```javascript
const {
  isSuccessStatusCode,
  isSuccessReasonPhrase,
  isSuccessStatus,
} = require("@js-thing/http-status-codes");

isSuccessStatusCode(200); // returns true
isSuccessStatusCode(250); // returns false as 250 is not defined in RFC
isSuccessReasonPhrase("OK"); // returns true
isSuccessReasonPhrase("ABC"); // returns false
// isSuccessStatus accepts both number or string and can check code or phrase
isSuccessStatus(200); // returns true
isSuccessStatus("OK"); // returns true

// similarly these methods are available for other status family as well
```

Check status code family

```javascript
const {
  is1xxInformationStatusCode,
  is2xxSuccessStatusCode,
  is3xxRedirectionStatusCode,
  is4xxClientErrorStatusCode,
  is5xxServerErrorStatusCode,
} = require("@js-thing/http-status-codes");

is1xxInformationStatusCode(code); // returns true for code >= 100 && code <=199
is2xxSuccessStatusCode(code); // returns true for code >= 200 && code <=299
is3xxRedirectionStatusCode(code); // returns true for code >= 300 && code <=399
is4xxClientErrorStatusCode(code); // returns true for code >= 400 && code <=499
is5xxServerErrorStatusCode(code); // returns true for code >= 500 && code <=599
```

Get status code, reason phrase and complete status code with phrase

```javascript
const {
  getStatusCode,
  getReasonPhrase,
  getCompositeStatus,
} = require("@js-thing/http-status-codes");

getStatusCode("OK"); // returns 200
//or pass an optional parameter to ignore the case of the status phrase
getStatusCode("ok", true); // returns 200
getStatusCode("abc"); // returns undefined

getReasonPhrase(200); // returns "OK"
getCompositeStatus(200); // returns "200 OK"
```

---

### Contributors

Jnyan Ankur Kakati  
Abhishek Chaterjee  
Ankita Agarwal  
[Nabadeep Kakati](mailto:kakati.nabadeep@gmail.com) - Logo

---

### Licence
The documentation for this project is directly sourced from
[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) by
[Mozilla Contributors](https://developer.mozilla.org/en-US/docs/MDN/About/contributors.txt) is licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/)

The project excluding the documentation is licenced under
[MIT](https://github.com/js-thing/http-status-codes/raw/main/LICENSE)