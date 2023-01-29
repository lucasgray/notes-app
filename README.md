# Notes App

A little app for taking notes. 

View at https://notes-app-web.vercel.app/

View the swagger codegen api documentation at https://notes-backend-30ds.onrender.com/docs/

## Technologies used

* Turborepo
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

### Turbo configuration
* `client` doesn't finish codegen before dependent projects try to build. Workaround being `clean` and `--no-cache`. Ideal workflow here is
  * `tsoa` generates swagger file
  * `client` codegen runs against the swagger file
  * `client` runs `tsc`
  * `^build` can take care of the rest of the dependency tree
* Responsive design
  * UI needs to be improved such that on a small screen the left and right pods should be a single column.
* Autocomplete search
  * Search could wait for 3 keystrokes and `debounce` search requests against the api.
* New note should be a textarea, maybe a dialog
* No placeholder for "no notes" if there aren't any
* Loading screen when an API request is in flight
* `cors` is too broad
* No unit tests
* No database
* `web` couldn't run on `render` because their static sites default to `npm` rather than `pnpm`
* API doesn't hot-reload yet

## Retrospective

### Pros
I'm pretty happy with the monorepo strategy of sharing packages easily between the api and web. The client works quite nicely. 

### Cons
Turborepo dependencies don't work quite right. I wouldn't want to fight the tooling constantly. More to learn here. Seems like there is `pnpm` work to figure out with render. Spent all my 'innovation points' on monorepo.