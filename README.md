# Metron

> Never let **judgment** cloud your **curiosity**.
>
> --Metron (New Earth)

Another React Next.js Boilerplate

With a combination of [nextjs with redux observable](https://github.com/zeit/next.js/tree/canary/examples/with-redux-observable) and [nextjs with custom express server](https://github.com/zeit/next.js/tree/canary/examples/custom-server-express)

## What's here?

* SSR with next.js
* Custom server with [express](https://expressjs.com/)
* Redux and Redux-observable
* [material-ui-next (v1)](https://material-ui-next.com/)
* Global layout
* Folder alias with babel-module-resolver
* Fractal project structure
* React class component - stateless component hybrid


## Usage

    git clone git@github.com:littlechad/next-metron.git
    cd next-metron
    yarn install

running in development

    mv .env.example .env && export $(cat .env | xargs)
    yarn dev

running in production

    mv .env.example .env && export $(cat .env | xargs) // change accordingly
    yarn run build
    yarn start

running using docker

    mv .env.example .env
    docker-compose up

## Project structure

Root

    ...
    ├── components
    ├── pages
    ├── redux
    ├── static
    ├── server.js
    ├── env.example.sh
    ├── package.json
    └── yarn.lock

Components

    ...
    ├── components
    │   └── Info
    │       └── index.js
    ...

Pages

    ...
    ├── pages
    │   ├── index
    │   │   ├── component
    │   │   │   └── index.js
    │   │   ├── container
    │   │   │   └── index.js
    │   │   └── index.js
    ...
    │   ├── index.js
        └── _document.js

Redux

    ├── redux
    │   ├── ducks
    │   │   ├── Character
    │   │   │   ├── actions.js
    │   │   │   ├── epics.js
    │   │   │   ├── index.js
    │   │   │   └── types.js
    ...
    │   ├── index.js
    │   └── root
    │       ├── epics.js
    │       └── reducers.js


# License
This project is licensed under the MIT license, Copyright (c) 2018 Fian Kurniawan. For more information see LICENSE.md.

# Contributing
[TODO]

# Versioning
**Metron** is using [semantic versioning](https://semver.org/). For the versions available, see the [tags on this repository](https://github.com/littlechad/next-metron/tags).

# Author
Fian Kurniawan
