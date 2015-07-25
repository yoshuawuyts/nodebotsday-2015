const ambientLib = require('ambient-attx4')
const tessel = require('tessel')

const ambient = ambientLib.use(tessel.port.A)

ambient.on('ready', function () {
  setInterval(function () {
    ambient.getLightLevel(function (err, ldata) {
      if (err) throw err
      ambient.getSoundLevel(function (err, sdata) {
        if (err) throw err
        console.log('llevel', ldata.toFixed(8))
        console.log('slevel', sdata.toFixed(8))
      })
    })
  }, 500)

  ambient.setLightTrigger(0.5)

  ambient.on('light-trigger', function (data) {
    console.log('light trigger was hit')
    ambient.clearLightTrigger()
    setTimeout(function () {
      ambient.setLightTrigger(0.5)
    }, 1500)
  })

  ambient.on('sound-trigger', function (data) {
    console.log('sound trigger was hit')
    ambient.clearSoundTrigger()
    setTimeout(function () {
      ambient.setSoundTrigger(0.1)
    }, 1500)
  })
})

ambient.on('error', function (err) {
  console.error(err)
})
