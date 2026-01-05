GTCEuStartupEvents.worldGenLayers(event => {
    event.create('undergarden', layer => {
        layer.targets('undergarden:depthrock', 'undergarden:shiverstone')
        layer.dimensions('undergarden:undergarden')
    })
})