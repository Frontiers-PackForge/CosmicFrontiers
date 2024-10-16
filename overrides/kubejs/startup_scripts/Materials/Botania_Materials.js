//Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('livingrock')
        .color(0xd7d7c8)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(
            GTMaterialFlags.GENERATE_PLATE
        )

    event.create('livingwood')
        .color(0x34140c)
        .iconSet(GTMaterialIconSet.WOOD)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
        )
    event.create('dreamwood')
        .color(0xb9ddd3)
        .iconSet(GTMaterialIconSet.WOOD)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
        )


    event.create('terrasteel')
        .color(0x55f609)
        .ingot()
        .element(GTElements.get('terrasteel'))
        .iconSet(GTMaterialIconSet.SHINY)
        .cableProperties(GTValues.V[GTValues.MV], 8, 1, false)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FRAME
        )

    event.create('manasteel')
        .liquid()
        .color(0x67b9ee)
        .element(GTElements.get('manasteel'))
        .cableProperties(GTValues.V[GTValues.LV], 8, 0, false)
        .iconSet(GTMaterialIconSet.getByName('mana'))
        .flags(
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD)

    event.create('elementium')
        .color(0xf472c6)
        .iconSet(GTMaterialIconSet.SHINY)
        .ingot()
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING
        )
    event.create('galvanized_ethersteel')
        .color(0xcf325b)
        .ingot()
        .liquid()
        .element(GTElements.get('ether_steel'))
        .iconSet(GTMaterialIconSet.SHINY)
        .cableProperties(GTValues.V[GTValues.HV], 2, 0, true)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.NO_SMELTING

        )


})

GTCEuStartupEvents.materialModification(event => {
    // TagPrefix.ingot.setIgnored(GTMaterials.get('terrasteel'), () => Item.getItem('botania:terrasteel_ingot'))
    // TagPrefix.ingot.setIgnored(GTMaterials.get('elementium'), () => Item.getItem('botania:elementium_ingot'))
    // TagPrefix.ingot.setIgnored(GTMaterials.get('elementium'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('manasteel'), () => Item.getItem('botania:manasteel_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terrasteel'), () => Item.getItem('botania:terrasteel_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('elementium'), () => Item.getItem('botania:elementium_ingot'))

})
