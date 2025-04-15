//ad_astra:venus
GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('venus_stone')
        .targets('ad_astra:venus_sandstone')
        .dimensions('ad_astra:venus') 
})