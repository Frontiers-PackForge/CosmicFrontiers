GTCEuStartupEvents.registry('gtceu:material', event => {
    //PMP
    event.create('platinum_metallic')
        .ore()
        .dust()
        .element(GTElements.get('platinum_metallic_powder'))
        .color(0xbcc28c).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
    //PEA
    event.create('palladium_enriched_ammonia')
        .ore()
        .dust()
        .element(GTElements.get('palladium_enriched_ammonia'))
        .color(0x9e9e9e).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
    //PSD
    event.create('platinum_salts_dust')
        .ore()
        .dust()
        .element(GTElements.get('platinum_salts_dust'))
        .color(0xbcc28c).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
    //RPD
    event.create('reprecipitated_platinum_dust')
        .ore()
        .dust()
        .element(GTElements.get('reprecipitated_platinum_dust'))
        .color(0xbcc28c).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
    //platinum residue
    event.create('platinum_residue_dust')
        .ore()
        .dust()
        .element(GTElements.get('platinum_residue_dust'))
        .color(0xbcc28c).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
    //palladium salts
    event.create('palladium_salts')
        .ore()
        .dust()
        .element(GTElements.get('palladium_salts'))
        .color(0x9e9e9e).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
    //PdMp
    event.create('palladium_metallic')
        .ore()
        .dust()
        .element(GTElements.get('palladium_metallic_powder'))
        .color(0x9e9e9e).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
})



/* event.create('platinum_metallic_powder', 78, 78, -1, null, 'Ptᵪ', false) // 
    event.create('palladium_enriched_ammonia', 78, 78, -1, null, 'Ptᵪ', false) // 
    event.create('platinum_salts_dust', 78, 78, -1, null, 'Ptᵪ', false) // 
    event.create('reprecipitated_platinum_dust', 78, 78, -1, null, 'Ptᵪ', false) // 
    event.create('platinum_residue_dust', 78, 78, -1, null, 'Ptᵪ', false) // 
    event.create('palladium_salts', 78, 78, -1, null, 'Pdᵪ', false) // 
    event.create('palladium_metallic_powder', 78, 78, -1, null, 'Pdᵪ', false) // 
*/