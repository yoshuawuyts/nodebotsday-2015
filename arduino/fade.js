const five = require('johnny-five')
const board = new five.Board()

board.on('ready', function () {
  const led = new five.Led(11)
  led.fadeIn()

  setTimeout(function () {
    led.fadeOut()
  }, 5000)
})

