# Metron

> Never let **judgment** cloud your **curiosity**.
>
> --Metron (New Earth)

Another React Next.js Boilerplate

With a combination of [nextjs with redux observable](https://github.com/zeit/next.js/tree/canary/examples/with-redux-observable), [nextjs with custom express server](https://github.com/zeit/next.js/tree/canary/examples/custom-server-express), and [nextjs with react toolbox](https://github.com/zeit/next.js/tree/canary/examples/with-react-toolbox)

## What's here?

* SSR with next.js
* custom server with express
* redux and redux-observable
* fractal project structure
* React class component - stateless component hybrid


## Usage

    git clone git@github.com:littlechad/next-metron.git
    cd next-metron
    yarn install

running in development

    yarn dev

running in production

    mv .env.example .env && export $(cat .env | xargs)
    yarn run build
    yarn start

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
    │   ├── about
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
