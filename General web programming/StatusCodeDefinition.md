# What is HTTP response status code?

- HTTP response status codes indicate whether a specific HTTP request has been successfully completed.

# Types of Status code

## 1. 1xx: Informational responses (100–199)

- 100 (Continue): This code indicate that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.

## 2. 2xx: Successful responses (200–299)

- 200 (OK): The request has succeeded.
- 201 (CREATED): The request has succeeded and a new resource has been created as a result.

## 3. 3xx: Redirects (300–399)

- 300 (Multiple Choice): The request has more than one possible response. The user-agent or user should choose one of them.
- 301 (Moved Permanently): The URL of the requested resource has been changed permanently. The new URL is given in the response.

## 4. Client errors (400–499)

- 400 (Bad Request): The server could not understand the request due to invalid syntax.
- 401 (Unauthorized): The client must authenticate itself to get the requested response.
- 404 (Not Found): The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist.

## 5. Server errors (500–599)

- 500 (Internal Server Error): The server has encountered a situation it doesn't know how to handle.
- 501 (Not Implemented): The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
- 503 (Service Unavailable): The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.
