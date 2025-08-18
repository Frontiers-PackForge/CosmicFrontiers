
GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('hadalite_sludge') //Mixture of Thallium, Sulfates, and Obsidian Dust - Gross
        .formula('Tl2S3(MgFeSi3O4)4(H20)')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create('sparkling_hadalite') //Add Carbonation to get rid of the Sulfates
        .formula('Tl2(HCO3)6(MgFeSi3O4)4(H2O)')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create('rubidine_froth') //Rubidium Precursor and has more sulfates again due to higher quality extraction methods.
        .formula('RuS32(H2O)')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create('excited_hadalite') //Remove the Obsidian, blast the fuck with lasers, the latent holmium isn't happy
        .formula('Tl2S3')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
    event.create('holmium_slush_mixture') // Mix Supercoolant, Ice, and Holmium Flakes/Ore
        .formula('')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
    event.create('holmium_rubidium_colloid') // Mixture of Rubidium Supercoolant and Holmium Slush
        .formula('[RuHo]/H20')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
    event.create('holmium_solution') // Stable Solution of unchilled Holium Particles in water
        .formula('(H20)Ho')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
    event.create('tauin_hexafluoroholmate') // Mixing Trinavine Plasmites, Fluorine and Holmium Solution sticks the holmium to the plasmites
        .dust()
        .formula('?Lp(F6Ho)')
        .color(0xfc4ea8)
    event.create('hexafluoroholmate') // get rid of the plasmites - Add "Dead Plasmite" to CosmicCore or some way to 'spend' them and 
        .dust()                    // get the pure metals back as Trinavine is too valuable to waste
        .formula('F6Ho')
        .color(0xad5569)
    event.create('aerofluoride_liquid_glass_supercoolant') //TODO: How to Rubidium. Was going to do components but uh... No.
        .liquid()
        .formula('Rb3LiNa(BeF2)2(AlF3)(AuF3)')
        .color(0x99082a)


    event.create('rubidine_extraction_rosin')
        .liquid()
        .formula('?')
        .color(0xad5569)



})