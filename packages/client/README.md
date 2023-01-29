# `client`

Client depends on the swagger file generated in the `api` and generates a `fetch` based api client automatically. The smarter the swagger file, the smarter the resulting client. In our case, payload shapes are included.

Further refinement here could include authentication tokens, examples (which get baked into jsdoc), validation, and more.