[![npm version](https://badge.fury.io/js/%40js-thing%2Fhttp-status-codes.svg)](https://badge.fury.io/js/%40js-thing%2Fhttp-status-codes)
[![GitHub version](https://badge.fury.io/gh/js-thing%2Fhttp-status-codes.svg)](https://badge.fury.io/gh/js-thing%2Fhttp-status-codes)
![npm](https://img.shields.io/npm/dt/@js-thing/http-status-codes)
![Build status](https://github.com/js-thing/http-status-codes/actions/workflows/node.js.yml/badge.svg)
[![codecov](https://codecov.io/gh/js-thing/http-status-codes/branch/main/graph/badge.svg?token=lSpAkoUYjc)](https://codecov.io/gh/js-thing/http-status-codes)

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

---

### Documentation

Each and every member/property/function of the library are properly documented to get comprehensive inforation along with supporting links to original sources.

An example of VS Code IntelliSense showing the Unauthorized enum member.

![image](https://github.com/js-thing/http-status-codes/raw/main/VS_Code_IntelliSense.png)

#### The complete documentation of this project can be found in this [link](https://http-status-codes.js-thing.com)

---

### Installation

Install from npm
```sh
npm install @js-thing/http-status-codes
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
} from '@js-thing/http-status-codes';
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
} = require('@js-thing/http-status-codes');
```

Import default using require
```javascript
const HttpStatusCodes = require('@js-thing/http-status-codes').default;
```
---

### Usage

The `HttpStatusCodes` enum is the super set of `HttpInformationStatusCodes`, `HttpSuccessStatusCodes`, `HttpRedirectionStatusCodes`, `HttpClientErrorStatusCodes` and `HttpServerErrorStatusCodes` enums,

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
[MIT](https://github.com/js-thing/http-status-codes/raw/main/LICENSE)