GTCEuStartupEvents.worldGenLayers(event => {
  event.create('firmament_islands', layer => {
    layer.targets(
      'cosmiccore:firmament_saprolite',
      'cosmiccore:astral_regolith'
    )
    layer.dimensions('frontiers:firmament')
  })
})