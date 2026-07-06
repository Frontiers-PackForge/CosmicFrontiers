StartupEvents.registry('gtceu:material', event => {
    event.create('gtceu:dark_steel')
        .color(0x363636).secondaryColor(0x1b1b1b)
        .ingot()
        .liquid()
        .iconSet(GTMaterialIconSet.SHINY)
        .cableProperties(GTValues.V[GTValues.HV], 4, 4, false)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR
        )
})

GTCEuStartupEvents.materialModification(event => {
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('gtceu:dark_steel'), () => Item.of('enderio:dark_steel_ingot').getItem())
})
