StartupEvents.registry('gtceu:material', event => {
    GTMaterials.Zincite.addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:vanadium_pentoxide')
        .dust()
        .formula('V2O5')
        .color(0xf2a23b).iconSet(GTMaterialIconSet.DULL)
        .components('2x gtceu:vanadium', '5x gtceu:oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:sphalerite_slurry')
        .liquid()
        .formula('(ZnS)4(CdS)(Ga2S3)(GeS2)(In2S3)(H2O)4')
        .color(0x6f6843)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:pyrolitic_cadmium_sulfide_fraction')
        .liquid()
        .formula('(ZnS)(CdS)(H2O)')
        .color(0x827050)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:pyrolitic_gallium_sulfide_fraction')
        .liquid()
        .formula('(ZnS)(Ga2S3)(H2O)')
        .color(0x786b54)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:pyrolitic_germanium_sulfide_fraction')
        .liquid()
        .formula('(ZnS)(GeS2)(H2O)')
        .color(0x726c61)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:pyrolitic_indium_sulfide_fraction')
        .liquid()
        .formula('(ZnS)(In2S3)(H2O)')
        .color(0x76637e)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:cadmium_oxide')
        .dust()
        .formula('CdO')
        .color(0xb76f34).iconSet(GTMaterialIconSet.DULL)
        .components('1x gtceu:cadmium', '1x gtceu:oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:gallium_oxide')
        .dust()
        .formula('Ga2O3')
        .color(0xd6d0c4).iconSet(GTMaterialIconSet.DULL)
        .components('2x gtceu:gallium', '3x gtceu:oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:germanium_dioxide')
        .dust()
        .formula('GeO2')
        .color(0xe0dfd7).iconSet(GTMaterialIconSet.DULL)
        .components('1x gtceu:germanium', '2x gtceu:oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:indium_oxide')
        .dust()
        .formula('In2O3')
        .color(0xd9cfdf).iconSet(GTMaterialIconSet.DULL)
        .components('2x gtceu:indium', '3x gtceu:oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:sphaleritic_mixed_oxide_concentrate')
        .dust()
        .formula('(ZnO)4(CdO)(Ga2O3)(GeO2)(In2O3)')
        .color(0x93866f).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:sphaleritic_mixed_sulfate_liquor')
        .liquid()
        .formula('(ZnSO4)4(CdSO4)(Ga2(SO4)3)(Ge(SO4)2)(In2(SO4)3)(H2O)13')
        .color(0x81785d)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:sphaleritic_zinc_sulfate_solution')
        .liquid()
        .formula('ZnSO4(H2O)')
        .color(0xb0aa8b)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:pyrolitic_cadmium_sulfate_solution')
        .liquid()
        .formula('CdSO4(H2O)')
        .color(0x979ca7)
        .components(
            '1x gtceu:cadmium',
            '1x gtceu:sulfur',
            '5x gtceu:oxygen',
            '2x gtceu:hydrogen'
        )
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:pyrolitic_gallium_sulfate_solution')
        .liquid()
        .formula('Ga2(SO4)3(H2O)3')
        .color(0xaaa4bd)
        .components(
            '2x gtceu:gallium',
            '3x gtceu:sulfur',
            '15x gtceu:oxygen',
            '6x gtceu:hydrogen'
        )
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:pyrolitic_germanium_sulfate_solution')
        .liquid()
        .formula('Ge(SO4)2(H2O)2')
        .color(0x90949c)
        .components(
            '1x gtceu:germanium',
            '2x gtceu:sulfur',
            '10x gtceu:oxygen',
            '4x gtceu:hydrogen'
        )
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:pyrolitic_indium_sulfate_solution')
        .liquid()
        .formula('In2(SO4)3(H2O)3')
        .color(0x9686ac)
        .components(
            '2x gtceu:indium',
            '3x gtceu:sulfur',
            '15x gtceu:oxygen',
            '6x gtceu:hydrogen'
        )
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:cadmium_sulfate')
        .dust()
        .formula('CdSO4')
        .color(0xd4d5df).iconSet(GTMaterialIconSet.DULL)
        .components('1x gtceu:cadmium', '1x gtceu:sulfur', '4x gtceu:oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:gallium_sulfate')
        .dust()
        .formula('Ga2(SO4)3')
        .color(0xc7bfdc).iconSet(GTMaterialIconSet.DULL)
        .components('2x gtceu:gallium', '3x gtceu:sulfur', '12x gtceu:oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:germanium_sulfate')
        .dust()
        .formula('Ge(SO4)2')
        .color(0xa6a8b0).iconSet(GTMaterialIconSet.DULL)
        .components('1x gtceu:germanium', '2x gtceu:sulfur', '8x gtceu:oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:indium_sulfate')
        .dust()
        .formula('In2(SO4)3')
        .color(0xa992c8).iconSet(GTMaterialIconSet.DULL)
        .components('2x gtceu:indium', '3x gtceu:sulfur', '12x gtceu:oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
})
