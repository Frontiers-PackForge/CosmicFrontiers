
GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('hadalite_sludge') //Mixture of Thallium, Sulfates, and Obsidian Dust - Gross
<<<<<<< Updated upstream:overrides/kubejs/startup_scripts/Materials/Holmium_Materials.js
        .liquid()
        .formula('Tl2S3(MgFeSi3O4)4(H20)')
        .color(0xf6fc9c).secondaryColor(0xa3a3a3)
=======
        .formula('Tl2S3(MgFeSi3O4)4(H2O)')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

>>>>>>> Stashed changes:overrides/kubejs/startup_scripts/Materials/UVProcessingMaterials.js
    event.create('sparkling_hadalite') //Add Carbonation to get rid of the Sulfates
        .liquid()
        .formula('Tl2(HCO3)6(MgFeSi3O4)4(H2O)')
<<<<<<< Updated upstream:overrides/kubejs/startup_scripts/Materials/Holmium_Materials.js
        .color(0xf6fc9c).secondaryColor(0xa3a3a3)
=======
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create('rubidine_froth') //Rubidium Precursor and has more sulfates again due to higher quality extraction methods.
        .formula('RbS3(H2O)')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

>>>>>>> Stashed changes:overrides/kubejs/startup_scripts/Materials/UVProcessingMaterials.js
    event.create('excited_hadalite') //Remove the Obsidian, blast the fuck with lasers, the latent holmium isn't happy
        .liquid()
        .formula('Tl2S3')
        .color(0xf6fc9c).secondaryColor(0xa3a3a3)
    event.create('holmium_slush_mixture') // Mix Supercoolant, Ice, and Holmium Flakes/Ore
        .liquid()
        .formula('')
        .color(0xf6fc9c).secondaryColor(0xa3a3a3)
    event.create('holmium_rubidium_colloid') // Mixture of Rubidium Supercoolant and Holmium Slush
<<<<<<< Updated upstream:overrides/kubejs/startup_scripts/Materials/Holmium_Materials.js
        .liquid()
        .formula('')
        .color(0xbd1593)
    event.create('holmium_solution') // Stable Solution of unchilled Holium Particles in water
        .liquid()
        .formula('(H20)Ho')
        .color(0xbd6a95)
=======
        .formula('[RuHo]/H2O')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
    event.create('holmium_solution') // Stable Solution of unchilled Holium Particles in water
        .formula('(H2O)Ho')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
>>>>>>> Stashed changes:overrides/kubejs/startup_scripts/Materials/UVProcessingMaterials.js
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