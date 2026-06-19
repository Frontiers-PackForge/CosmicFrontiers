//This entire file will error, this is the stuff I am unsure of the 1.21.1 equalivent for.
//This Material is here to act as a tester (Please Install Malum in your test enviroment or set the setIgnored lines to use items that exist in your enviroment)
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


    // THIS material is broken, in the context the fluidbuilder is now dead...
    event.create('gtceu:source_oils')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
})

// Material Modifications (The Registered Material Should Work above it)
// GTCEuStartupEvents.materialModification(event => {
//     TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('soul_stained_alumina'), () => Item.getItem('malum:block_of_soul_stained_steel'))
//     TagPrefix.plate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('soul_stained_alumina'), () => Item.getItem('malum:soul_stained_steel_plating'))
//     TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('soul_stained_alumina'), () => Item.getItem('malum:soul_stained_steel_ingot'))
// })




