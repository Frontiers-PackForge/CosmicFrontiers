StartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('minecraft:undergarden')
        .targets('undergarden:depthrock', 'undergarden:shiverstone')
        .dimensions(['undergarden:undergarden'])
})
