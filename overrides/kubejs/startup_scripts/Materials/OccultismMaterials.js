
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('iesnium')
        .color(0x47adc4).secondaryColor(0x00a383)
        .ore()
        .ingot()
        .dust()
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
    event.create('gold_sulfide_amalgam')
        .color(0xb8b23e).secondaryColor(0x703100)
        .dust()
        .iconSet(GTMaterialIconSet.BRIGHT)
    event.create('tempered_iesnium')
        .color(0x1bd1ad).secondaryColor(0x00a383)
        .ore()
        .ingot()
        .dust()
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
})
GTCEuStartupEvents.materialModification(event => {
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('iesnium'), () => Item.getItem('occultism:iesnium_ingot'))
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('iesnium'), () => Item.getItem('occultism:iesnium_block'))
    TagPrefix.rawOre['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('iesnium'), () => Item.getItem('occultism:raw_iesnium'))
    TagPrefix.dust['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('iesnium'), () => Item.getItem('occultism:iesnium_dust'))
})