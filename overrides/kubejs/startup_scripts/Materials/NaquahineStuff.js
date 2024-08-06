GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('fused_naquadah_emulsion')
        .dust()
        .color(0x1d4f04)
        .flags(
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_UNIFICATION,
            GTMaterialFlags.NO_WORKING
        )
    event.create('raw_naquahine')
        .liquid()
        .color(0x315c04)
    event.create('prisma_doped_raw_naquahine')
        .liquid(new GTFluidBuilder().customStill())
        .color(0x292929)
    event.create('inert_naquahine')
        .dust()
        .color(0x872509)
        .flags(
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_UNIFICATION,
            GTMaterialFlags.NO_WORKING
        )
    event.create('source_cut_naquahine_solution')
        .liquid()
        .color(0x7A116F)
    event.create('naquahine_rich_mixture')
        .liquid()
        .color(0xc4085d)
    event.create('naquahine')
        .gas()
        .color(0xc4083d)
    event.create('thunder_charged_naquahine_mixture')
        .liquid()
        .color(0x681C76)
    event.create('critically_steam_cracked_thundering_naquahine')
        .gas()
        .color(0xd075e0)
    event.create('energized_naquahine_fuel_preperation')
        .gas()
        .color(0x7a3665)
    event.create('aerated_naquahine')
        .gas()
        .color(0x634659)
    event.create('naquahine_superfuel_mk_one')
        .liquid(new GTFluidBuilder().customStill())
    event.create('naquahine_superfuel_mk_two')
        .liquid(new GTFluidBuilder().customStill())

}) 