GTCEuStartupEvents.worldGenLayers(event => {
  event.create('aether_islands', layer => {
    layer.targets('aether:holystone', 'aether:mossy_holystone', 'aether:icestone')
    layer.dimensions('aether:the_aether')
  })
})
