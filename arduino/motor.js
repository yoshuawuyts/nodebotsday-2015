const five = require('johnny-five')
const board = new five.Board()

board.on('ready', function () {
  const motor = new five.Motor({ pin: 5 })

  board.repl.inject({ motor: motor })

  motor.on('start', function () {
    console.log('start')
    board.wait(2000, function () {
      motor.stop()
    })
  })

  motor.on('stop', function () {
    console.log('stop')
  })

  motor.start()
})
