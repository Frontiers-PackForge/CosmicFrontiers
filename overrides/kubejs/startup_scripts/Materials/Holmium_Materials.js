
GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('hadalite_sludge') //Mixture of Thallium, Sulfates, and Obsidian Dust - Gross
        .liquid()
        .formula('Tl2S3(MgFeSi3O4)4(H20)')
        .color(0xf6fc9c).secondaryColor(0xa3a3a3)
    event.create('sparkling_hadalite') //Add Carbonation to get rid of the Sulfates
        .liquid()
        .formula('Tl2(HCO3)6(MgFeSi3O4)4(H2O)')
        .color(0xf6fc9c).secondaryColor(0xa3a3a3)
    event.create('excited_hadalite') //Remove the Obsidian, blast the fuck with lasers, the latent holmium isn't happy
        .liquid()
        .formula('Tl2S3')
        .color(0xf6fc9c).secondaryColor(0xa3a3a3)
    event.create('holmium_slush_mixture') // Mix Supercoolant, Ice, and Holmium Flakes/Ore
        .liquid()
        .formula('')
        .color(0xf6fc9c).secondaryColor(0xa3a3a3)
    event.create('holmium_rubidium_colloid') // Mixture of Rubidium Supercoolant and Holmium Slush
        .liquid()
        .formula('')
        .color(0xbd1593)
    event.create('holmium_solution') // Stable Solution of unchilled Holium Particles in water
        .liquid()
        .formula('(H20)Ho')
        .color(0xbd6a95)
    event.create('tauin_hexafluoroholmate') // Mixing Trinavine Plasmites, Fluorine and Holmium Solution sticks the holmium to the plasmites
        .liquid()
        .formula('?Lp(F6Ho)')
        .color(0xfc4ea8)
    event.create('hexafluoroholmate') // get rid of the plasmites - Add "Dead Plasmite" to CosmicCore or some way to 'spend' them and 
        .liquid()                     // get the pure metals back as Trinavine is too valuable to waste
        .formula('F6Ho')
        .color(0xad5569)
    event.create('aerofluoride_liquid_glass_supercoolant') //TODO: How to Rubidium. Was going to do components but uh... No.
        .liquid()
        .formula('Rb3LiNa(BeF2)2(AlF3)(AuF3)')
        .color(0x99082a)

})