StartupEvents.registry('gtceu:material', event => {

    event.create('gtceu:para_xylene')
        .liquid()
        .formula('C8H10')
        .color(0x5a8fa8).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:terephthalic_acid')
        .dust()
        .formula('C8H6O4')
        .color(0xe0c8a0).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:terephthalaldehyde')
        .liquid()
        .formula('C8H6O2')
        .color(0xd4a060).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:thionyl_chloride')
        .liquid()
        .formula('SOCl2')
        .color(0x58c878).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:terephthaloyl_chloride')
        .dust()
        .formula('C8H4Cl2O2')
        .color(0x48b890).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:para_phenylenediamine')
        .dust()
        .formula('C6H8N2')
        .color(0x7088d0).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:crude_para_phenylenediamine')
        .liquid()
        .formula('C6H8N2')
        .color(0x506898).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:ketene')
        .liquid()
        .formula('C2H2O')
        .color(0xa050c0).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:di_ketene')
        .liquid()
        .formula('C4H4O2')
        .color(0xc068d8).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:beta_butyrolactone')
        .liquid()
        .formula('C4H6O2')
        .color(0xd85888).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:n_methyl_2_pyrrolidone')
        .liquid()
        .formula('C5H9NO')
        .color(0xe09030).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:methylamine')
        .liquid()
        .formula('CH5N')
        .color(0x50a0d8).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:two_naphthol')
        .liquid()
        .formula('C10H8O')
        .color(0xc86848).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:binol')
        .liquid()
        .formula('C20H14O2')
        .color(0xb85830).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:chlorodiphenylphosphine')
        .liquid()
        .formula('C12H10ClP')
        .color(0x68c050).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:butyllithium')
        .liquid()
        .formula('C4H9Li')
        .color(0xe04848).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:binap')
        .liquid()
        .formula('C44H32P2')
        .color(0xd8a830).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:cyclopentadiene')
        .liquid()
        .formula('C5H6')
        .color(0x40c870).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:crude_terephthalic_acid')
        .dust()
        .formula('C8H6O4')
        .color(0xb8a870).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:carboxybenzaldehyde')
        .dust()
        .formula('C8H6O3')
        .color(0xc89858).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:racemic_binap')
        .liquid()
        .formula('C44H32P2')
        .color(0xa88828).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:sodium_sulfite')
        .dust()
        .formula('Na2SO3')
        .color(0xd0d8a0).iconSet(GTMaterialIconSet.DULL)
        .components('2x gtceu:sodium', '1x gtceu:sulfur', '3x gtceu:oxygen')
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)

    event.create('gtceu:kevlar')
        .ingot().liquid()
        .formula('C14H10N2O2')
        .color(0xd1c85c).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FOIL)

})
