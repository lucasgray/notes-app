# `api`

This is an express + `tsoa` backend api.

We use an in-memory database since it's easier. 

For a persistence layer my goto for typescript is `knex` and postgres. Render has [great support for postgres](https://render.com/docs/databases) and you can scale on postgres for a long time. No need to overcomplicate ops.