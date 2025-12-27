
StartupEvents.registry('gtceu:material', event => {


    event.create("gtceu:retinol")
        .fluid()
        .color(0x845ca1).iconSet("dull")
        .components("20x carbon", "30x hydrogen", "1x oxygen")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )
    event.create("gtceu:ethanolamine")
        .fluid()
        .color(0x56618c).iconSet("dull")
        .formula("HOCH2CH2NH2")
        .components("ethylene_oxide", "ammonia")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("gtceu:linoleic_acid")
        .fluid()
        .color(0xaab038).iconSet("dull")
        .components("18x carbon", "32x hydrogen", "2x oxygen")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("gtceu:biotin")
        .fluid()
        .color(0xa6bf8e).iconSet("dull")
        .components("10x carbon", "16x hydrogen", "2x nitrogen", "3x oxygen", "1x sulfur")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("gtceu:complex_multivitamin_solution")
        .fluid()
        .color(0xeffdb70).iconSet("dull")
        .components("4x retinol", "6x linoleic_acid", "3x biotin")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("gtceu:cellulose")
        .dust()
        .color(0xe6ddca).iconSet("dull")
        .components("6x carbon", "10x hydrogen", "5x oxygen")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("gtceu:glucose")
        .dust()
        .color(0xe6ddca).iconSet("dull")
        .components("6x carbon", "12x hydrogen", "6x oxygen")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("gtceu:sorbose")
        .dust()
        .color(0xe6ddca).iconSet("dull")
        .components("6x carbon", "12x hydrogen", "6x oxygen")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("gtceu:ascorbic_acid")
        .fluid()
        .color(0xfad44b).iconSet("dull")
        .components("6x carbon", "8x hydrogen", "6x oxygen")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("gtceu:oxolane")
        .fluid()
        .color(0x4f542b).iconSet("dull")
        .components("4x carbon", "8x hydrogen", "oxygen")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    //Materials that the chemical formula was not confirmed for. So assuming what I've found on Google is good enough:tm:



    event.create("gtceu:pyrrole")
        .fluid()
        .color(0x4f542b).iconSet("dull")
        .components("4x carbon", "5x hydrogen", "nitrogen")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )
    event.create("gtceu:prophine")
        .dust()
        .color(0x4f542b).iconSet("dull")
        .components("20x carbon", "14x hydrogen", "4x nitrogen")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create('gtceu:gelatin_concentrate')
        .liquid()
        .components("57x carbon", "91x hydrogen", "19x nitrogen", "16x oxygen", "phosphorus")
        .color(0x234354).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )
    //DO NOT GIVE FORMULA :)
    event.create('gtceu:agar_sludge')
        .liquid()
        .formula("?")
        .color(0x285427).iconSet(GTMaterialIconSet.DULL)


    event.create('gtceu:chloroethane')
        .liquid()
        .components("2x carbon", "5x hydrogen", "chlorine")
        .color(0x61b08a).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )
    event.create('gtceu:methyl_formate')
        .liquid()
        .components("2x carbon", "4x hydrogen", "2x oxygen")
        .color(0xb38b54).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create('gtceu:turpentine')
        .liquid()
        .components("10x carbon", "16x hydrogen")
        .color(0x93bd46).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:beta_pinene')
        .dust()
        .components("10x carbon", "16x hydrogen")
        .color(0x106115).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:citral')
        .fluid()
        .components("10x carbon", "16x hydrogen", "oxygen")
        .color(0xc7cc37).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:beta_ionone')
        .fluid()
        .components("acetone", "citral")
        .color(0xce03fd3).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:acetylene')
        .fluid()
        .components("2x carbon", "2x hydrogen")
        .color(0x619166).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:propargyl_alcohol')
        .fluid()
        .components("acetylene", "formaldehyde")
        .color(0x94885c).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:propargyl_chloride')
        .fluid()
        .components("acetone", "citral")
        .color(0xcb59a36).iconSet(GTMaterialIconSet.DULL)

    //Materials that are too complex to assume a single formula is accurate, manually override formulas as needed.
    //YES this makes it difficult to verify molar balance, NO i do not care we're not putting full protein formula's here!
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

    event.create('gtceu:cas_9') //Strep + Distilled Water
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

// GTCEuStartupEvents.materialModification(event => {
//     GTMaterials.Agar.setFormula('C₁₄H₂₄O₉', true)
// })
//subscript (copy and paste) ₁₂₃₄₅₆₇₈₉₀