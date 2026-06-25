
StartupEvents.registry('gtceu:material', event => {


    event.create("gtceu:retinol")
        .fluid()
        .color(0x845ca1).iconSet("dull")
        .components("20x gtceu:carbon", "30x gtceu:hydrogen", "1x gtceu:oxygen")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )
    event.create("gtceu:ethanolamine")
        .fluid()
        .color(0x56618c).iconSet("dull")
        .formula("HOCH2CH2NH2")
        .components("gtceu:ethylene_oxide", "gtceu:ammonia")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("gtceu:linoleic_acid")
        .fluid()
        .color(0xaab038).iconSet("dull")
        .components("18x gtceu:carbon", "32x gtceu:hydrogen", "2x gtceu:oxygen")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("gtceu:biotin")
        .fluid()
        .color(0xa6bf8e).iconSet("dull")
        .components("10x gtceu:carbon", "16x gtceu:hydrogen", "2x gtceu:nitrogen", "3x gtceu:oxygen", "1x gtceu:sulfur")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("gtceu:complex_multivitamin_solution")
        .fluid()
        .color(0xeffdb70).iconSet("dull")
        .components("4x gtceu:retinol", "6x gtceu:linoleic_acid", "3x gtceu:biotin")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("gtceu:cellulose")
        .dust()
        .color(0xe6ddca).iconSet("dull")
        .components("6x gtceu:carbon", "10x gtceu:hydrogen", "5x gtceu:oxygen")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("gtceu:glucose")
        .dust()
        .color(0xe6ddca).iconSet("dull")
        .components("6x gtceu:carbon", "12x gtceu:hydrogen", "6x gtceu:oxygen")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("gtceu:sorbose")
        .dust()
        .color(0xe6ddca).iconSet("dull")
        .components("6x gtceu:carbon", "12x gtceu:hydrogen", "6x gtceu:oxygen")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("gtceu:ascorbic_acid")
        .fluid()
        .color(0xfad44b).iconSet("dull")
        .components("6x gtceu:carbon", "8x gtceu:hydrogen", "6x gtceu:oxygen")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("gtceu:oxolane")
        .fluid()
        .color(0x4f542b).iconSet("dull")
        .components("4x gtceu:carbon", "8x gtceu:hydrogen", "gtceu:oxygen")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )



    event.create("gtceu:pyrrole")
        .fluid()
        .color(0x4f542b).iconSet("dull")
        .components("4x gtceu:carbon", "5x gtceu:hydrogen", "gtceu:nitrogen")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )
    event.create("gtceu:prophine")
        .dust()
        .color(0x4f542b).iconSet("dull")
        .components("20x gtceu:carbon", "14x gtceu:hydrogen", "4x gtceu:nitrogen")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create('gtceu:gelatin_concentrate')
        .liquid()
        .components("57x gtceu:carbon", "91x gtceu:hydrogen", "19x gtceu:nitrogen", "16x gtceu:oxygen", "gtceu:phosphorus")
        .color(0x234354).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )
    event.create('gtceu:agar_sludge')
        .liquid()
        .formula("?")
        .color(0x285427).iconSet(GTMaterialIconSet.DULL)


    event.create('gtceu:chloroethane')
        .liquid()
        .components("2x gtceu:carbon", "5x gtceu:hydrogen", "gtceu:chlorine")
        .color(0x61b08a).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )
    event.create('gtceu:methyl_formate')
        .liquid()
        .components("2x gtceu:carbon", "4x gtceu:hydrogen", "2x gtceu:oxygen")
        .color(0xb38b54).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create('gtceu:turpentine')
        .liquid()
        .components("10x gtceu:carbon", "16x gtceu:hydrogen")
        .color(0x93bd46).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:beta_pinene')
        .dust()
        .components("10x gtceu:carbon", "16x gtceu:hydrogen")
        .color(0x106115).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:citral')
        .fluid()
        .components("10x gtceu:carbon", "16x gtceu:hydrogen", "gtceu:oxygen")
        .color(0xc7cc37).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:beta_ionone')
        .fluid()
        .components("gtceu:acetone", "gtceu:citral")
        .color(0xce03fd3).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:acetylene')
        .fluid()
        .components("2x gtceu:carbon", "2x gtceu:hydrogen")
        .color(0x619166).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:propargyl_alcohol')
        .fluid()
        .components("gtceu:acetylene", "gtceu:formaldehyde")
        .color(0x94885c).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:propargyl_chloride')
        .fluid()
        .components("gtceu:acetone", "gtceu:citral")
        .color(0xcb59a36).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:fungal_blood')
        .liquid()
        .formula("?")
        .color(0x872408).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:synthetic_blood')
        .liquid()
        .formula("?")
        .color(0xff4942).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:bacteria_growth_medium')
        .liquid()
        .formula("?")
        .color(0x1e1333).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:blood_plasma')
        .liquid()
        .formula("?")
        .color(0xd18c8a).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:echoing_sludge')
        .liquid()
        .formula("?")
        .color(0x1e1333).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:rapidly_mutating_cancer')
        .liquid()
        .formula("!?!?")
        .color(0xb03378).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:sox_2')
        .liquid()
        .formula("?")
        .color(0x82e04f).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:kfl_4')
        .liquid()
        .formula("?")
        .color(0x38cf90).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:myc')
        .liquid()
        .formula("?")
        .color(0x36e622).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:oct_4')
        .liquid()
        .formula("?")
        .color(0x229c59).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:cas_9')
        .liquid()
        .formula("?")
        .color(0x079459).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:gene_plasmids')
        .liquid()
        .formula("?")
        .color(0x40f018).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:genetic_therapy_solution')
        .liquid()
        .formula("?")
        .color(0x8b18f0).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:catalase')
        .liquid()
        .formula("?")
        .color(0xd46d4e).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:fibroblast_growth_factor')
        .liquid()
        .formula("?")
        .color(0xd44e88).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:chitin')
        .liquid()
        .formula("?")
        .color(0x1e1333).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:chitosan')
        .liquid()
        .formula("?")
        .color(0x1e1333).iconSet(GTMaterialIconSet.DULL)





})

StartupEvents.postInit(event => {
    GTMaterials.Agar.setFormula('C₁₄H₂₄O₉', true)
})
