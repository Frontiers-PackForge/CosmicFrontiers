
GTCEuStartupEvents.registry('gtceu:material', event => {


    event.create('liquid_shadows')
        .formula('⊖')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create('shadow_pitch')
        .formula('⊖')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create('shadow_tar')
        .formula('⊖?')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create('shaded_bedrock_oil')
        .formula('?')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())




    event.create('hadalite_sludge') //Mixture of Thallium, Sulfates, and Obsidian Dust - Gross
        .formula('Tl2S3(MgFeSi2O4)4(H20)')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create('sparkling_hadalite') //Add Carbonation to get rid of the Sulfates
        .formula('Tl2(HCO3)6(MgFeSi2O4)4(H2O)')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create('rubidine_froth') //Rubidium Precursor and has more sulfates again due to higher quality extraction methods.
        .formula('RuS3(H2O)')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create('excited_hadalite') //Remove the Obsidian, blast the fuck with lasers, the latent holmium isn't happy
        .formula('Tl2S3')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
    event.create('holmium_slush_mixture') // Mix Supercoolant, Ice, and Holmium Flakes/Ore
        .formula('[HoCaS3][H20]')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
    event.create('holmium_rubidium_colloid_with_supercoolant') // Mixture of Rubidium Supercoolant and Holmium Slush
        .formula('([RbHo]/H20)(LiNa(BeF2)2(AlF3)(AuF3))')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
    event.create('holmium_solution') // Stable Solution of unchilled Holium Particles in water
        .formula('Ho(H20)')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
    event.create('tauin_hexafluoroholmate') // Mixing Trinavine Plasmites, Fluorine and Holmium Solution sticks the holmium to the plasmites
        .dust()
        .formula('?Lp(F6Ho)')
        .color(0xfc4ea8)
    event.create('hexafluoroholmate') // get rid of the plasmites - Add "Dead Plasmite" to CosmicCore or some way to 'spend' them and 
        .dust()                    // get the pure metals back as Trinavine is too valuable to waste
        .formula('F6Ho')
        .color(0xad5569)

    //Create enough of a crystal network to help keep it from freezing
    event.create('liquid_glass_supercoolant') //TODO: How to Rubidium. Was going to do components but uh... No.
        .liquid()
        .formula('LiNa(BeF2)2(AlF3)(AuF3)')
        .color(0x99082a)
    event.create('rubidium_doped_liquid_glass_supercoolant') //TODO: How to Rubidium. Was going to do components but uh... No.
        .liquid()
        .formula('LiNa(BeF2)2(AlF3)(AuF3)')
        .color(0x99082a)

    event.create('hot_fluornated_beryllate')
        .liquid()
        .formula('LiNa(BeF2)2')
        .color(0x7af9b3)

    event.create('beryllium_fluoride')
        .liquid()
        .formula('BeF2')
        .color(0x5fc791).secondaryColor(0x2f574b)
    event.create('beryllium_oxide')
        .dust()
        .formula('BeO')
        .color(0x73d73d).secondaryColor(0x2f574b)





    event.create('rubidine_honey')
        .liquid()
        .formula('Rb(?)')
        .color(0xad5569)



    event.create('rubidine_extraction_rosin')
        .liquid()
        .formula('?')
        .color(0xad5569)

    event.create('dusty_fermium')
        .plasma()
        .formula('Fr')
        .color(0xad5569)


    event.create('seaborgium_seeded')
        .plasma()
        .formula('Sg-')
        .color(0xad5569)

    event.create('seaborgium_rich')
        .plasma()
        .formula('Sg')
        .color(0xad5569)


    event.create('bedrock_soot')
        .gas()
        .formula('')
        .color(0xad5569)


    event.create('bedrock_smoke')
        .gas()
        .formula('')
        .color(0xad5569)

    event.create('bedrock_gas')
        .gas()
        .formula('')
        .color(0xad5569)

    event.create('bedrock_soot_solution')
        .liquid()
        .formula('')
        .color(0xad5569)

    event.create('purified_bedrock_soot_solution')
        .liquid()
        .formula('')
        .color(0xad5569)

    //Different Bedrock Gas States
    event.create('ultra_heavy_bedrock_gas')
        .gas()
        .formula('')
        .color(0x1f2021)
    event.create('heavy_bedrock_gas')
        .gas()
        .formula('')
        .color(0x262a2e)
    event.create('medium_bedrock_gas')
        .gas()
        .formula('')
        .color(0xad5569)
    event.create('light_bedrock_gas')
        .liquid()
        .formula('')
        .color(0x84878a)
    event.create('ultra_light_bedrock_gas')
        .gas()
        .formula('')
        .color(0xa9acb0)


    event.create('primed_bedrock_gas')
        .gas()
        .formula('')
        .color(0xa9acb0)

    event.create('cold_ignis')
        .gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill())
        .formula('')
        .color(0x383838)
    event.create('ignis')
        .gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill())
        .formula('')
        .color(0x383838)

    //The Start of OUR Taranium Processing
    event.create('varible_taranium_slush')
        .gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill())
        .formula('')
        .color(0x383838)


    //Split it into 3 purities
    event.create('severely_xenon_cracked_taranium_slush')
        .liquid()
        .formula('')
        .color(0x94cdff)

    event.create('low_purity_taranium') //Chemical Discharge Required
        .dust()
        .formula('')
        .color(0x383838).secondaryColor(0x73147).iconSet(GTMaterialIconSet.BRIGHT)
    event.create('middle_purity_taranium') // Discharger Required
        .dust()
        .formula('')
        .color(0x383838).secondaryColor(0x7a365e).iconSet(GTMaterialIconSet.BRIGHT)
    event.create('high_purity_taranium') // Cant be Discharged Normally
        .dust()
        .formula('')
        .color(0x383838).secondaryColor(0x8f105a).iconSet(GTMaterialIconSet.BRIGHT)



    event.create('taranium_rich_blend')
        .dust()
        .formula('')
        .color(0xad5569)

    //Actual Taranium Goes Here

    event.create('unstable_taranium') // Used for Taranium charges, wastes off to Taranium
        .dust()
        .formula('')
        .color(0xad5569)



    //The NPR and the VRM "Exotic" Fuels ; Requires the Protocyte Module to Activate these powerful Fuels.
    event.create('hyperfuel_mk1')
        .liquid()
        .formula('')
        .color(0xad5569)

    event.create('hyperfuel_mk2')
        .liquid()
        .formula('')
        .color(0xad5569)

    event.create('hyperfuel_mk3')
        .liquid()
        .formula('')
        .color(0xad5569)





    //HONEYS
    event.create('waxy_polymer_honey')
        .formula('')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create('citrus_polymer_honey')
        .formula('')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create('rose_polymer_honey')
        .formula('')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create('argon_honey')
        .formula('')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create('nitrogen_honey')
        .formula('')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create('oxygen_honey')
        .formula('')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create('hydrogen_honey')
        .formula('')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create('citrus_polymer')
        .formula('')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create('waxy_polymer')
        .formula('')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
    event.create('rose_polymer')
        .formula('')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())


})