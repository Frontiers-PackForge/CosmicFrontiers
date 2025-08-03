GTCEuServerEvents.fluidVeins(event => {
    event.add('gtceu:undergarden_virulent_cloggrum_mixture', vein => {
        vein.dimensions('undergarden:undergarden')
        vein.fluid(() => Fluid.of('gtceu:undergarden_virulent_cloggrum_mixture').fluid)
        vein.weight(20)
        vein.minimumYield(200)
        vein.maximumYield(720)
        vein.depletionAmount(1)
        vein.depletionChance(1)
        vein.depletedYield(200)
    })
    event.add('gtceu:swamp_sediment', vein => {
        vein.dimensions('undergarden:undergarden')
        vein.fluid(() => Fluid.of('gtceu:swamp_sediment').fluid)
        vein.weight(50)
        vein.minimumYield(200)
        vein.maximumYield(720)
        vein.depletionAmount(1)
        vein.depletionChance(1)
        vein.depletedYield(200)
    })
    event.add('gtceu:nether_slag_mk_1', vein => {
        vein.dimensions('minecraft:the_nether')
        vein.fluid(() => Fluid.of('gtceu:deeply_withered_nether_slag').fluid)
        vein.weight(50)
        vein.minimumYield(250)
        vein.maximumYield(720)
        vein.depletionAmount(1)
        vein.depletionChance(1)
        vein.depletedYield(200)
    })
    event.add('gtceu:pyroflux', vein => {
        vein.dimensions('minecraft:the_nether')
        vein.fluid(() => Fluid.of('gtceu:pyroflux').fluid)
        vein.weight(20)
        vein.minimumYield(150)
        vein.maximumYield(320)
        vein.depletionAmount(1)
        vein.depletionChance(1)
        vein.depletedYield(200)
    })
    event.add('gtceu:primordial_oil', vein => {
        vein.dimensions('aether:the_aether')
        vein.fluid(() => Fluid.of('gtceu:primordial_oil').fluid)
        vein.weight(20)
        vein.minimumYield(250)
        vein.maximumYield(960)
        vein.depletionAmount(1)
        vein.depletionChance(1)
        vein.depletedYield(200)
    })

    // event.modify('gtceu:light_oil_deposit', vein => {
    //     vein.addSpawnDimension('minecraft:overworld')
    // })
    // event.modify('gtceu:heavy_oil_deposit', vein => {
    //     vein.addSpawnDimension('minecraft:overworld')
    // })
    // event.modify('gtceu:natural_gas_deposit', vein => {
    //     vein.addSpawnDimension('minecraft:overworld')
    // })
    // event.modify('gtceu:oil_deposit', vein => {
    //     vein.addSpawnDimension('minecraft:overworld')
    // })
    // event.modify('gtceu:raw_oil_deposit', vein => {
    //     vein.addSpawnDimension('minecraft:overworld')
    // })
    // event.modify('gtceu:salt_water_deposit', vein => {
    //     vein.addSpawnDimension('minecraft:overworld')
    // })
    // event.modify('gtceu:heavy_oil_deposit', vein => {
    //     vein.addSpawnDimension('minecraft:overworld')
    // })
})