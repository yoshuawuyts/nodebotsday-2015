# nodebotsday-2015
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

## spark
Experiment 1 was playing with a spark, which kind of failed b/c wifi wasn't
playing along.

### Getting started
We want to load johnnyfive on our spark. This means we need to connect locally
over serial, and flash our firmware.

### Flashing the firmware
Step 1 is to create an account, I did it through the spark iPhone app.
- [spark-io](https://github.com/rwaldron/spark-io)
- [voodoospark](https://github.com/voodootikigod/voodoospark#getting-started)

### Generating a new access token
```sh
./scripts/generate-at.sh <username> <password>
```
- [docs](http://docs.particle.io/core/api/#authentication-generate-a-new-access-token)

### See Also
- [johnnyfive/spark-core](http://johnny-five.io/platform-support/#spark-core)
- [spark-io](https://github.com/rwaldron/spark-io)
- [voodoospark](https://github.com/voodootikigod/voodoospark)
- [docs.particle.io/core](http://docs.particle.io/core/)
- [build.particle.io](https://build.particle.io/build) - IDE
- [connecting spark to OSX over serial](http://docs.particle.io/core/connect/#connecting-your-device-using-osx)

## tessel
Experiment 2 was playing with a tessel.

### Running the thing
Getting the hello world up was pretty straightforward. `npm@3` had some
failures, but by switching back to `npm@2` we could cirvumvent those. After
getting the hello world up and running `tessel blink`, `tessel run blink.js`,
I tried getting the `ambient-attx4` up and running. This caused more issues.
`iojs` / npm didn't play along. Eventually I got around an issue by installing
and running `flatten-packages`. Eventually I ran into LUA issues and decided to
not continue.

## arduino
Experiment 3 was playing with an arduino. Got a cute lil LED working. Whoop!
The way to approach this is by using johnny-five and the appropriate modules.
The docs are super straight forwarward! :D

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/nodebotsday-2015.svg?style=flat-square
[npm-url]: https://npmjs.org/package/nodebotsday-2015
[travis-image]: https://img.shields.io/travis/yoshuawuyts/nodebotsday-2015/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/nodebotsday-2015
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/nodebotsday-2015.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/nodebotsday-2015?branch=master
[downloads-image]: http://img.shields.io/npm/dm/nodebotsday-2015.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/nodebotsday-2015
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
