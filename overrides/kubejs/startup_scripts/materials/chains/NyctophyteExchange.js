StartupEvents.registry('gtceu:material', event => {
    event.create('gtceu:alkaline_nyctophyte_extract')
        .liquid()
        .formula('NaC8H10NO6S(H2O)')
        .color(0x657d43)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:nyctophytic_chelant')
        .liquid()
        .formula('C8H11NO6S')
        .color(0x4f766a)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
})
