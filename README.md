# Notes App

A little app for taking notes. 

View at https://notes-app-web.vercel.app/

View the swagger codegen api documentation at https://notes-backend-30ds.onrender.com/docs/

## Technologies used

* [Turborepo](https://turbo.build/)
* Typescript
* Create-React-App
* Tailwind CSS
* Express
* [tsoa](https://tsoa-community.github.io/docs/)
* [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen)

## How this project is structured

```
/apps
../web # the CRA webapp
../api # the tsoa express server
/packages
../client # the openapi codegen client
../types  # shared typescript types package 
```

Read the readmes in those paths for more info on each project.

Run locally using:

```sh
pnpm install
turbo clean && turbo build --no-cache && turbo dev
```


## TODOs

* Responsive design
  * UI needs to be improved such that on a small screen the left and right pods should be a single column.
* Autocomplete search
  * Search could wait for 3 keystrokes and `debounce` search requests against the api.
* New note should be a textarea, maybe a dialog?
* No placeholder for "no notes" if there aren't any
* Loading screen when an API request is in flight
* `cors` is too broad
* Unit tests
* Database
* `web` couldn't run on `render` because their static sites default to `npm` rather than `pnpm`
* API doesn't hot-reload yet
