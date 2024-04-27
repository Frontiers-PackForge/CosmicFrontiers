GTCEuServerEvents.fluidVeins(event => {
    event.add('gtceu:undergarden_virulent_cloggrum_mixture', vein => {
        vein.dimensions('undergarden:undergarden')
        vein.fluid(() => Fluid.of('gtceu:undergarden_virulent_cloggrum_mixture').fluid)
        vein.weight(600)
        vein.minimumYield(200)
        vein.maximumYield(720)
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