const $CosmicMaterialSet = Java.loadClass("com.ghostipedia.cosmiccore.common.data.materials.CosmicMaterialSet")
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('ka_oil')
        .liquid()
        .formula('(CH2)5CO')
        .color(0x5106c9)

    event.create('adipic_acid')
        .liquid()
        .formula('C6H10O4')
        .color(0x169c05)

    event.create('adiponitrile')
        .liquid()
        .formula('C6H8N2')
        .color(0x35de1f)

    event.create('hexamethylenediamine')
        .dust()
        .formula('C6H16N2')
        .color(0xc77f12)

    event.create('nylon_jelly_polymer')
        .liquid()
        .formula('(C12H22N2O2)n')
        .color(0xe6732c)

    event.create('nylon_6_6')
        .liquid()
        .ingot()
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
        .formula('(C12H22N2O2)n')
        .color(0xd4804c)

    //Nylon reinforced with trinavine, much more stretchy and durable.
    event.create('trinanylon_6_6')
        .liquid()
        .ingot()
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
        .formula('(C12H22N2O2)16⋖Tv⋗')
        .color(0xdea740).secondaryColor(0xd4804c).iconSet($CosmicMaterialSet.TRINAVINE)
})