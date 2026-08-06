
StartupEvents.registry('gtceu:material', event => {


    event.create('gtceu:liquid_shadows')
        .formula('⊖')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:shadow_pitch')
        .formula('⊖')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:shadow_tar')
        .formula('⊖?')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:shaded_bedrock_oil')
        .formula('?')
        .liquid(new GTFluidBuilder().customStill())




    event.create('gtceu:hadalite_sludge')
        .formula('Tl2S3(MgFeSi2O4)4(H2O)')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:sparkling_hadalite')
        .formula('Tl2(HCO3)6(MgFeSi2O4)4(H2O)')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:rubidine_froth')
        .formula('RuS3(H2O)')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:excited_hadalite')
        .formula('Tl2S3')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:holmium_slush_mixture')
        .formula('[HoCaS3][H20]')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:holmium_rubidium_colloid_with_supercoolant')
        .formula('([RbHo]/H20)(LiNa(BeF2)2(AlF3)(AuF3))')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:holmium_solution')
        .formula('Ho(H20)')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:tauin_hexafluoroholmate')
        .dust()
        .formula('?Lp(F6Ho)')
        .color(0xfc4ea8)

    event.create('gtceu:heavy_hadalite_sludge')
        .dust()
        .formula('?')
        .color(0x24015A).secondaryColor(0x150238)


    event.create('gtceu:clumped_waste_metals')
        .dust()
        .formula('InGeTl')
        .color(0x24015A).secondaryColor(0x150238)

    event.create('gtceu:hexafluoroholmate')
        .dust()
        .formula('F6Ho')
        .color(0xad5569)

    event.create('gtceu:liquid_glass_supercoolant')
        .liquid()
        .formula('LiNa(BeF2)2(AlF3)(AuF3)')
        .color(0x99082a)
    event.create('gtceu:rubidium_doped_liquid_glass_supercoolant')
        .liquid()
        .formula('LiNa(BeF2)2(AlF3)(AuF3)')
        .color(0x99082a)

    event.create('gtceu:hot_fluornated_beryllate')
        .liquid()
        .formula('LiNa(BeF2)2')
        .color(0x7af9b3)

    event.create('gtceu:beryllium_fluoride')
        .liquid()
        .formula('BeF2')
        .color(0x5fc791).secondaryColor(0x2f574b)
    event.create('gtceu:beryllium_oxide')
        .dust()
        .formula('BeO')
        .color(0x73d73d).secondaryColor(0x2f574b)




    event.create('gtceu:rubidine_honey')
        .liquid()
        .formula('Rb(?)')
        .color(0xad5569)



    event.create('gtceu:rubidine_extraction_rosin')
        .liquid()
        .formula('?')
        .color(0xad5569)

    event.create('gtceu:dusty_fermium')
        .plasma()
        .formula('Fr')
        .color(0xad5569)


    event.create('gtceu:seaborgium_seeded')
        .plasma()
        .formula('Sg-')
        .color(0xad5569)

    event.create('gtceu:seaborgium_rich')
        .plasma()
        .formula('Sg')
        .color(0xad5569)


    event.create('gtceu:bedrock_soot')
        .gas()
        .formula('')
        .color(0xad5569)


    event.create('gtceu:bedrock_smoke')
        .gas()
        .formula('')
        .color(0xad5569)

    event.create('gtceu:bedrock_gas')
        .gas()
        .formula('')
        .color(0xad5569)

    event.create('gtceu:bedrock_soot_solution')
        .liquid()
        .formula('')
        .color(0xad5569)

    event.create('gtceu:purified_bedrock_soot_solution')
        .liquid()
        .formula('')
        .color(0xad5569)

    event.create('gtceu:ultra_heavy_bedrock_gas')
        .gas()
        .formula('')
        .color(0x1f2021)
    event.create('gtceu:heavy_bedrock_gas')
        .gas()
        .formula('')
        .color(0x262a2e)
    event.create('gtceu:medium_bedrock_gas')
        .gas()
        .formula('')
        .color(0xad5569)
    event.create('gtceu:light_bedrock_gas')
        .liquid()
        .formula('')
        .color(0x84878a)
    event.create('gtceu:ultra_light_bedrock_gas')
        .gas()
        .formula('')
        .color(0xa9acb0)


    event.create('gtceu:primed_bedrock_gas')
        .gas()
        .formula('')
        .color(0xa9acb0)

    event.create('gtceu:cold_ignis')
        .gas(new GTFluidBuilder().customStill())
        .formula('')
        .color(0x383838)
    event.create('gtceu:ignis')
        .gas(new GTFluidBuilder().customStill())
        .formula('')
        .color(0x383838)

    event.create('gtceu:varible_taranium_slush')
        .gas(new GTFluidBuilder().customStill())
        .formula('')
        .color(0x383838)


    event.create('gtceu:severely_xenon_cracked_taranium_slush')
        .liquid()
        .formula('')
        .color(0x94cdff)

    event.create('gtceu:low_purity_taranium')
        .dust()
        .formula('')
        .color(0x383838).secondaryColor(0x73147).iconSet(GTMaterialIconSet.BRIGHT)
    event.create('gtceu:middle_purity_taranium')
        .dust()
        .formula('')
        .color(0x383838).secondaryColor(0x7a365e).iconSet(GTMaterialIconSet.BRIGHT)
    event.create('gtceu:high_purity_taranium')
        .dust()
        .formula('')
        .color(0x383838).secondaryColor(0x8f105a).iconSet(GTMaterialIconSet.BRIGHT)



    event.create('gtceu:taranium_rich_blend')
        .dust()
        .formula('')
        .color(0xad5569)


    event.create('gtceu:unstable_taranium')
        .dust()
        .formula('')
        .color(0xad5569)



    event.create('gtceu:hyperfuel_mk1')
        .liquid()
        .formula('')
        .color(0xad5569)

    event.create('gtceu:hyperfuel_mk2')
        .liquid()
        .formula('')
        .color(0xad5569)

    event.create('gtceu:hyperfuel_mk3')
        .liquid()
        .formula('')
        .color(0xad5569)





    event.create('gtceu:waxy_polymer_honey')
        .formula('')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:citrus_polymer_honey')
        .formula('')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:rose_polymer_honey')
        .formula('')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:argon_honey')
        .formula('')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:nitrogen_honey')
        .formula('')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:oxygen_honey')
        .formula('')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:hydrogen_honey')
        .formula('')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:citrus_polymer')
        .formula('')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:waxy_polymer')
        .formula('')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:rose_polymer')
        .formula('')
        .liquid(new GTFluidBuilder().customStill())


})
