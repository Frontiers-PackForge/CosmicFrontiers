StartupEvents.registry('gtceu:material', event => {
    event.create('gtceu:soul_stained_alumina')
        .color(0xdb3dff).secondaryColor(0xe683fc)
        .ingot()
        .liquid()
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
})

GTCEuStartupEvents.materialModification(event => {
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('gtceu:soul_stained_alumina'), () => Item.of('malum:block_of_soul_stained_steel').getItem())
    TagPrefix.plate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('gtceu:soul_stained_alumina'), () => Item.of('malum:soul_stained_steel_plating').getItem())
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('gtceu:soul_stained_alumina'), () => Item.of('malum:soul_stained_steel_ingot').getItem())
})
