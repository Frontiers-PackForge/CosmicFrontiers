GTCEuStartupEvents.registry('gtceu:material', event => {
    //Chlorides
    //     event.create('hre_chlorides')
    //         .dust()
    //         .color(0xb55d1f).iconSet(GTMaterialIconSet.DULL)
    //Oxides
    //     event.create('hre_oxides')
    //         .dust()
    //         .color(0xb55d1f).iconSet(GTMaterialIconSet.DULL)
    // Nitrate Solution
    //     event.create('lre_nitrate_solution')
    //         .fluid()
    //         .color(0x15b35c).iconSet(GTMaterialIconSet.DULL)
    //     event.create('mre_nitrate_solution')
    //         .fluid()
    //         .color(0x108277).iconSet(GTMaterialIconSet.DULL)
    //     event.create('hre_nitrate_solution')
    //         .fluid()
    //         .color(0xb55d1f).iconSet(GTMaterialIconSet.DULL)

    //Slags from undergarden
    event.create('monasite_slag')
        .fluid()
        .color(0xf22f11).iconSet(GTMaterialIconSet.DULL)
    event.create('xenotime_slag')
        .fluid()
        .color(0x149f2).iconSet(GTMaterialIconSet.DULL)
    event.create('undergarden_virulent_cloggrum_mixture')
        .fluid()
        .color(0x4f462b).iconSet(GTMaterialIconSet.DULL)
    event.create('lre_slag')
        .fluid()
        .color(0x158c9e).iconSet(GTMaterialIconSet.DULL)
    event.create('mre_slag')
        .fluid()
        .color(0x657d43).iconSet(GTMaterialIconSet.DULL)
    event.create('hre_slag')
        .fluid()
        .color(0x836234).iconSet(GTMaterialIconSet.DULL)

    //LRE extraction tier 1
    event.create('monasite_concentrate')
        .fluid()
        .color(0x9e1500).iconSet(GTMaterialIconSet.DULL)
    event.create('xenotime_concentrate')
        .fluid()
        .color(0x000F75).iconSet(GTMaterialIconSet.DULL)
    event.create('mixed_lre_leachate')
        .fluid()
        .color(0x304c70).iconSet(GTMaterialIconSet.DULL)
    event.create('leached_lre_residue')
        .dust()
        .color(0x4d79b3).iconSet(GTMaterialIconSet.DULL)
    event.create('leached_lre_liquor')
        .fluid()
        .color(0x1e4442).iconSet(GTMaterialIconSet.DULL)
    event.create('wet_lre_precipitate')
        .fluid()
        .color(0x2c6360).iconSet(GTMaterialIconSet.DULL)
    event.create('chromate_waste_water')
        .fluid()
        .color(0x4d8a86).iconSet(GTMaterialIconSet.DULL)
    event.create('dried_mixed_lre_precipitate')
        .dust()
        .color(0x357a76).iconSet(GTMaterialIconSet.DULL)

    //LRE extraction tier 2
    //TODO: Proper Colors

    event.create('lre_hydroxides')
        .dust()
        .color(0x357a76)
    event.create('lre_leachate_2')
        .fluid()
        .color(0x357a76)
    event.create('lre_organic_leachate')
        .fluid()
        .color(0x357a76)
    event.create('lre_mixed')
        .dust()
        .color(0x357a76)
    event.create('lre_oxides')
        .dust()
        .color(0x15b35c).iconSet(GTMaterialIconSet.DULL)
    event.create('lre_chlorides')
        .fluid()
        .color(0x108277).iconSet(GTMaterialIconSet.DULL)

    //LRE extraction tier 3

    //MRE extraction tier 2
    //TODO : Proper Colors
    event.create('mre_oxides')
        .dust()
        .color(0x108277).iconSet(GTMaterialIconSet.DULL)
    event.create('mre_chlorides')
        .fluid()
        .color(0x108277).iconSet(GTMaterialIconSet.DULL)
    event.create('calcium_carbide')
        .dust()
        .color(0x357a76).iconSet(GTMaterialIconSet.DULL)
    event.create('mre_hydroxides')
        .dust()
        .color(0x657d43).iconSet(GTMaterialIconSet.DULL)
    event.create('mre_extraction_mix') // Change lang to Improved Rare Earth Extraction Mix or sth idk
        .fluid()
        .color(0x357a76).iconSet(GTMaterialIconSet.DULL)
    event.create('mre_leachate')
        .fluid()
        .color(0x357a76).iconSet(GTMaterialIconSet.DULL)
    event.create('mre_organic_leachate')
        .fluid()
        .color(0x357a76).iconSet(GTMaterialIconSet.DULL)
    event.create('mre_mixed')
        .dust()
        .color(0x357a76).iconSet(GTMaterialIconSet.DULL)
    event.create('sodium_phosphate')
        .dust()
        .color(0x357a76).iconSet(GTMaterialIconSet.DULL)

    //MRE extraction tier 3

})
