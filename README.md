# Binlist

Binlist is a Node and browser client library for [the Binlist.net service](https://binlist.net).

## Installation

TBD

## Development

Build: `npm run build`
Tests: `npm run test`

## Resources

Packages for **both Node and Browser JS**
https://github.com/yargs/yargs-parser

Bitly library using Typescript
https://github.com/tanepiper/node-bitly/blob/v7.x.x/src/bitly.ts

Jest Cheatsheet
https://github.com/sapegin/jest-cheat-sheet/#exceptions

Library using cross-fetch for both Node and browser
https://github.com/prisma-labs/graphql-request

In `node` console
https://remarkablemark.org/blog/2019/07/12/rollup-commonjs-umd/

```
$ npm run build
$ node
binlistFind = require('./dist/bundle');
binlistFind("45717360").then(data => console.log(data));
```
