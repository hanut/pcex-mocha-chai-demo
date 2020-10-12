# pcex-mocha-chai-demo

A simple setup of mocha + chai for testing javascript code

## Setup

Clone the repository and install the dependencies. This demo uses
the yarn package manager by default which can be installed using the following
command -

```
npm i -g yarn
```

After this run

```
yarn install
```

## Running the test cases

This repo is setup with mocha + chai + nyc (for coverage)

The test commands are -

```
# Live testing while developing locally
yarn dev

# Usually used by CI along with coverage check
yarn test

# Coverage check
yarn coverage
```
