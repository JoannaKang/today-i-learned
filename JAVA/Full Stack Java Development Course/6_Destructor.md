# Destructor

- Destructor helps to de-allocate memory
- Java automatically takes care of memory management → create / cleaning memory

- How destructor works
  - In JVM, there is a destructor function which automatically gets triggered when object goes out of scope
  - cannot be overloaded
  - Automatically invoked
  - finalize() method helps to clear : can write closing file, cleaning database connection, closing webserver end of connection
      - Not a destructor but it behaves like destructor
      - system.Runfinalizersonexit(ture) helps to forcefully destruct