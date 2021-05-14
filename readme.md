[![GitHub version](https://badge.fury.io/gh/js-thing%2Fhttp-status-codes.svg)](https://badge.fury.io/gh/js-thing%2Fhttp-status-codes)
![Build status](https://github.com/js-thing/http-status-codes/actions/workflows/node.js.yml/badge.svg)
[![codecov](https://codecov.io/gh/js-thing/http-status-codes/branch/main/graph/badge.svg?token=lSpAkoUYjc)](https://codecov.io/gh/js-thing/http-status-codes)

## Http Status Codes

This library is a complete collection of all `Http Status Codes` and `Reason Phrases` along with `helper functions` with _no dependencies_ and is _100% compatible_ to use with `Typescript` or `Javascript`

### Covers
- Hypertext Transfer Protocol (HTTP/1.0) defined in 
[RFC 1945](https://datatracker.ietf.org/doc/html/rfc1945)
- Hypertext Transfer Protocol (HTTP/1.1) defined in 
[RFC 2616](https://www.ietf.org/rfc/rfc2616.txt)
- Web-based Distributed Authoring and Versioning (WebDAV) defined in 
[RFC 2518](https://datatracker.ietf.org/doc/html/rfc2518)

---

### Documentation

Each and every member of the enums are properly documented so that users get instant knowledge of the status code along with links to original sources.

#### An example of VS Code IntelliSense

![image](VS_Code_IntelliSense.png)

The complete documentation of this project can be found in this [link](https://js-thing.github.io/http-status-codes/)

---

### Installation

Install from npm
```sh
npm install TBD
```
---

### Import it to your project

Import the library to your project
```javascript
import HttpStatusCodes, { 
    HttpInformationStatusCodes, 
    HttpSuccessStatusCodes,
    HttpRedirectionStatusCodes,
    HttpClientErrorStatusCodes,     
    HttpServerErrorStatusCodes,
} from 'TBD';
```

Or
```javascript
const { 
    HttpInformationStatusCodes, 
    HttpSuccessStatusCodes, 
    HttpRedirectionStatusCodes, 
    HttpClientErrorStatusCodes, 
    HttpServerErrorStatusCodes,
    HttpStatusCodes,
} = require('TBD');
```

Import default using require
```javascript
const HttpStatusCodes = require('TBD').default;
```
---

### Usage

The `HttpStatusCodes` is a combined enum of `HttpInformationStatusCodes`, `HttpSuccessStatusCodes`, `HttpRedirectionStatusCodes`, `HttpClientErrorStatusCodes` and `HttpServerErrorStatusCodes`,

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
---

### Licence
The documentation for this project is directly sourced from
[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) by
[Mozilla Contributors](https://developer.mozilla.org/en-US/docs/MDN/About/contributors.txt) is licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/)

The project excluding the documentation is licenced under
[MIT](LICENSE)