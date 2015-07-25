const tessel = require('tessel')

// start with:
// tessel run blink.js
const led1 = tessel.led[0].output(1)
const led2 = tessel.led[1].output(0)

setInterval(function () {
  console.log('blinky blink')
  led1.toggle()
  led2.toggle()
}, 100)
