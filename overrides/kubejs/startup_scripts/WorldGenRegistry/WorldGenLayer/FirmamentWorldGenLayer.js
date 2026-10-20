StartupEvents.registry('gtceu:world_gen_layer', event => {
  event.create('minecraft:firmament_islands')
    .targets(
      'cosmiccore:firmament_saprolite',
      'cosmiccore:astral_regolith'
    )
    .dimensions(['frontiers:firmament'])
})
