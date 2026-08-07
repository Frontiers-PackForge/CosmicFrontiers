

StartupEvents.registry('gtceu:material', event => {
    event.create('gtceu:nether_brick_dust')
        .dust()
        .color(0x511515)
    event.create('gtceu:fluix')
        .gem()
        .dust()
        .flags(
            GTMaterialFlags.CRYSTALLIZABLE,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )
        .color(0x7921c2).iconSet(GTMaterialIconSet.DIAMOND)
    event.create('gtceu:nether_sediment_sludge')
        .liquid()
        .color(0x511515)
    event.create('gtceu:firmament_air')
        .liquid()
        .color(0x75bfff)
    event.create('gtceu:liquid_firmament_air')
        .liquid()
        .color(0x75bfff)
    event.create('gtceu:tears_of_the_sky')
        .liquid()
        .color(0x2e76e8)
    event.create('gtceu:thundering_aerocloud_solution')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:thundering_aerocloud_concentration')
        .liquid()
        .color(0x173159)
    event.create('gtceu:thundering_mana')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:thunder_boosted_source_diesel')
        .color(0xe642f5)
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:ammonia_rich_aerocloud_solution')
        .liquid()
        .color(0x9368e3)
    event.create('gtceu:high_grade_solder')
        .liquid()
        .color(0xd1c664)
    event.create('gtceu:firmament_augmented_sediment')
        .liquid()
        .color(0x00c4b7)
    event.create('gtceu:potent_mana')
        .liquid()
        .color(0x457bd1)
    event.create('gtceu:somatic_mana')
        .liquid()
        .color(0x31b594)
    event.create('gtceu:hydrazine')
        .liquid()
        .color(0xff2e51)
    event.create('gtceu:raw_mana_crystal_slurry')
        .liquid()
        .color(0x32a88d).iconSet(GTMaterialIconSet.SHINY)
    event.create('gtceu:prepared_terrasteel')
        .liquid()
        .color(0x32a861).iconSet(GTMaterialIconSet.SHINY)
    event.create('gtceu:unstable_terrasteel')
        .liquid()
        .color(0x00731f).iconSet(GTMaterialIconSet.SHINY)
    event.create('gtceu:luminite')
        .color(0x85ffad).secondaryColor(0x6ac49d)
        .liquid(new GTFluidBuilder().customStill())
        .ingot()
        .ore()
        .dust()
        .blastTemp(4500)
        .flags(
            GTMaterialFlags.NO_ORE_SMELTING,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
        )
        .iconSet('starry')
    event.create('gtceu:desh')
        .color(0xeb9b34)
        .liquid(new GTFluidBuilder().customStill())
        .iconSet('utherium')
        .ingot()
        .ore()
        .dust()
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.NO_ORE_SMELTING
        )
        .element(GTElements.get('desh'))
        .iconSet('starry')
    event.create('gtceu:virtue_meld')
        .color(0xff8400)
        .ingot()
        .liquid()
        .element(GTElements.get('virtue'))
        .cableProperties(GTValues.V[GTValues.IV], 4, 2, true)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
    event.create('gtceu:luminescent_utherium')
        .color(0x6A40B8)
        .ingot()
        .liquid()
        .cableProperties(GTValues.V[GTValues.EV], 4, 16, false)
        .iconSet('starry')
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING
        )
    event.create('gtceu:cosmolite')
        .color(0x4614a3)
        .gem()
        .liquid()
        .iconSet('starry')
        .cableProperties(GTValues.V[GTValues.EV], 8, 0, false)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )

    event.create('gtceu:molten_virtue_meld')
        .color(0xff8400)
        .liquid()
    event.create('gtceu:raw_psionic_solution')
        .color(0xff8400)
        .liquid()
    event.create('gtceu:astraline_corrosion_agent')
        .color(0xff8400)
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:astraline_prismatic_solution')
        .color(0xff8400)
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:super_critical_steam')
        .color(0xffffff)
        .liquid()

    event.create('gtceu:deeply_withered_nether_slag')
        .color(0x1f0207)
        .liquid()
    event.create('gtceu:silica_enriched_nether_slag')
        .color(0xb3377d)
        .liquid()
    event.create('gtceu:pyroflux')
        .color(0xdb593b)
        .liquid()
    event.create('gtceu:nether_star_distillate_slurry')
        .color(0xa87692)
        .liquid()
    event.create('gtceu:dull_nether_star')
        .color(0x949494)
        .dust()

    event.create('gtceu:psi_superconductor_primordia')
        .color(0xfc0345)
        .cableProperties(GTValues.V[GTValues.HV], 16, 0, true)

    event.create('gtceu:psi_superconductor_alpha')
        .color(0xff2ee3)
        .cableProperties(GTValues.V[GTValues.EV], 16, 0, true)
    event.create('gtceu:psi_superconductor_beta')
        .color(0xb940ff)
        .cableProperties(GTValues.V[GTValues.IV], 16, 0, true)
    event.create('gtceu:psi_superconductor_eterna')
        .color(0xffffff)
        .cableProperties(GTValues.V[GTValues.MAX], 2048, 0, true)
    event.create('gtceu:neodymium_praseodymium')
        .dust()
        .color(0x473147)
        .flags(
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.NO_SMELTING
        )
    event.create('gtceu:magnetic_neodymium_praseodymium')
        .dust()
        .color(0x473147).iconSet(GTMaterialIconSet.MAGNETIC)
        .flags(
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.NO_SMELTING
        )

    event.create('gtceu:false_infinity')
        .color(0x4614a3)
        .ingot()
        .liquid()
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
    event.create('gtceu:impractical_infinity')
        .color(0x4614a3)
        .ingot()
        .liquid()
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
    event.create('gtceu:suitable_infinity')
        .color(0x4614a3)
        .ingot()
        .liquid()
        .cableProperties(GTValues.V[GTValues.EV], 8, 0, false)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
    event.create('gtceu:logical_infinity')
        .color(0x4614a3)
        .ingot()
        .liquid()
        .cableProperties(GTValues.V[GTValues.EV], 8, 0, false)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
    event.create('gtceu:programmable_matter_base')
        .color(0x4614a3)
        .ingot()
        .liquid()
        .iconSet('luminite')
        .cableProperties(GTValues.V[GTValues.UV], 12, 0, true)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
    event.create('gtceu:runed_steel')
        .ingot()
        .liquid()
        .color(0x5d466b)
        .element(GTElements.get('rune_steel'))
        .iconSet('rune_steel')
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING
        )
    event.create('gtceu:magnetic_runed_steel')
        .ingot()
        .color(0x5d466b).secondaryColor(0x241a2c)
        .iconSet(GTMaterialIconSet.MAGNETIC)
        .components('1x gtceu:runed_steel')
        .flags(
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.IS_MAGNETIC
        )
    event.create('gtceu:cinderwax')
        .liquid()
        .ingot()
        .formula('C18H27NO3')
        .color(0xa84c32).secondaryColor(0xbd6500).iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )
    event.create('gtceu:soulresin')
        .liquid()
        .ingot()
        .formula('C20H30O2')
        .color(0x00add4).secondaryColor(0x39b1cc).iconSet(GTMaterialIconSet.ROUGH)
        .flags(
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )
    event.create('gtceu:undergarden_smog')
        .gas()
        .color(0x614b09).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:undergarden_sludge')
        .liquid()
        .color(0x3d2e02).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:swamp_sediment')
        .liquid()
        .color(0x3d2e02).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:rotten_sediment')
        .liquid()
        .color(0xb36250).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:pungent_sediment')
        .liquid()
        .color(0x8b50b3).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:lake_water')
        .liquid()
        .color(0x5382ad).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:sterilized_lake_water')
        .liquid()
        .color(0x5382ad).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:silt_slurry')
        .liquid()
        .color(0x544940).iconSet(GTMaterialIconSet.DULL)



    event.create('gtceu:dawnstone')
        .color(0xfa9d32)
        .ingot()
        .formula('Cu8Au2')
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR
        )

    event.create('gtceu:chrysanthium')
        .color(0x494149).secondaryColor(0x2F2C2F)
        .ingot()
        .liquid()
        .iconSet(GTMaterialIconSet.SHINY)
        .cableProperties(GTValues.V[GTValues.HV], 4, 4, false)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR
        )

    event.create('gtceu:faded_dusk_alloy')
        .color(0x741db3).secondaryColor(0x1c85c7)
        .ingot()
        .iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR
        )



    event.create('gtceu:impure_silt')
        .dust()
        .color(0x544940).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:silt_seperation_composite')
        .dust()
        .color(0x9e9690).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:high_grade_silicon')
        .ingot()
        .dust()
        .color(0x392742)
        .iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:middle_grade_silicon')
        .ingot()
        .dust()
        .color(0x5f5166)
        .iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:europium_blended_silicon')
        .dust()
        .color(0x3d4952).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:luminent_silicon')
        .liquid()
        .fluid(GTFluidStorageKeys.MOLTEN, GTFluidState.LIQUID)
        .color(0x575724).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:naquadah_doped_silicon')
        .fluid(GTFluidStorageKeys.MOLTEN, GTFluidState.LIQUID)
        .color(0x3c2f40).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:dilumixal_naquadah_doped_silicon')
        .fluid(GTFluidStorageKeys.MOLTEN, GTFluidState.LIQUID)
        .color(0x544940).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:neutronium_doped_silicon')
        .liquid()
        .fluid(GTFluidStorageKeys.MOLTEN, GTFluidState.LIQUID)
        .color(0x575724).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:europium_silicide')
        .dust()
        .color(0x20323d).iconSet(GTMaterialIconSet.DULL)


    event.create('gtceu:nutrient_solution_base')
        .liquid()
        .color(0x79ad53).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:nutrient_solution')
        .liquid()
        .color(0x79ad53).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:fungal_nutrient_waste')
        .liquid()
        .color(0x79ad53).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:stygian_rage_waste')
        .liquid()
        .color(0x79ad53).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:stygian_psionzyme')
        .liquid()
        .color(0x79ad53).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:stygian_sputum')
        .liquid()
        .color(0x79ad53).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:stygian_bile')
        .liquid()
        .color(0x79ad53).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:ortho_diethynylbenzene_dianion')
        .gas()
        .color(0x79ad53).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:critical_neutron_mass')
        .ingot()
        .blastTemp(7500)
        .color(0xd4973b).secondaryColor(0x181f47).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.NO_SMELTING
        )
    event.create('gtceu:neutronic_composite')
        .ingot()
        .blastTemp(7500)
        .color(0xd62e22).secondaryColor(0x181f47).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.NO_SMELTING
        )
    event.create('gtceu:resh_neutron_meld')
        .dust()
        .color(0x34dceb).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:pey_neutron_gas')
        .gas()
        .color(0xeb4034).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:ayin_neutron_fluid')
        .liquid()
        .color(0xa10840).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:alef_neutron')
        .plasma()
        .color(0x544940).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:resh_neutron')
        .plasma()
        .color(0x34dceb).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:pey_neutron')
        .plasma()
        .color(0xeb4034).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:ayin_neutron')
        .plasma()
        .color(0xa10840).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:ultralight_neutronium')
        .plasma()
        .liquid()
        .color(0x0d1eb).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:moderate_neutronium')
        .plasma()
        .color(0xe3eeff).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:ultradense_neutronium')
        .plasma()
        .liquid()
        .color(0xd6d6d6).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:crystaline_neutronium')
        .gas()
        .plasma()
        .color(0xe3eeff).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:sifted_neutronium')
        .plasma()
        .gas()
        .color(0xd6d6d6).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:neutronium_crystals')
        .gem()
        .color(0xd6d6d6).iconSet(GTMaterialIconSet.EMERALD)

    GTMaterials.get('gtceu:neptunium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('gtceu:plutonium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('gtceu:curium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('gtceu:berkelium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('gtceu:californium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('gtceu:einsteinium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('gtceu:fermium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('gtceu:mendelevium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('gtceu:nobelium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('gtceu:lawrencium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('gtceu:praseodymium').addFlags(GTMaterialFlags.GENERATE_ROD)

    event.create('gtceu:andesite_alloy')
        .ingot()
        .color(0xa7ad9f).iconSet(GTMaterialIconSet.DULL)
        .components('1x gtceu:andesite', '1x gtceu:iron')
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL
        )
    event.create('gtceu:industrial_iron')
        .ingot()
        .color(0x4e4e4e).iconSet(GTMaterialIconSet.DULL)
        .components('1x gtceu:iron')
        .flags(
            GTMaterialFlags.GENERATE_PLATE
        )
    GTMaterials.Aluminium.addFlags(GTMaterialFlags.GENERATE_ROTOR)
    event.create('gtceu:trinium_metallic')
        .ore()
        .color(0x7f6c82).iconSet(GTMaterialIconSet.SHINY)

    event.create('gtceu:graphene_oxide')
        .dust()
        .color(0x292929).secondaryColor(0x353836).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:zblan_glass')
    ["fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)"](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(4500))
        .color(0xa2edf2)



    event.create('gtceu:primordial_gas')
        .color(0xdb3dff)
        .gas()
    event.create('gtceu:primordial_oil')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:lofty_primordial_oil')
        .color(0xdb3dff)
        .liquid()
    event.create('gtceu:refined_primordial_oil')
        .color(0xad5953)
        .liquid()
    event.create('gtceu:thick_primordial_oil')
        .color(0xdb3dff)
        .liquid()
    event.create('gtceu:energetic_primordial_oil')
        .color(0xdb3dff)
        .liquid()
    event.create('gtceu:super_dense_primordial_oil')
        .color(0xdb3dff)
        .liquid()
    event.create('gtceu:deepdrop_primordial_oil')
        .color(0xdb3dff)
        .liquid()

    event.create('gtceu:dew_light')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:grading_fluid_1')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:grading_fluid_2')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:grading_fluid_3')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:grading_fluid_4')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:grading_fluid_5')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:grading_fluid_6')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:grading_fluid_7')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:starlight')
        .liquid(new GTFluidBuilder().customStill())


    event.create('gtceu:star_dew')
        .liquid()
        .color(0xa8ddff)
    event.create('gtceu:genesis_resin')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:void_tar')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:ourofluid')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:abyss_grease')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:veltharic_slough')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:stardust_infused_gasoline')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:cracked_cetane_boosted_diesel')
        .liquid()
        .color(0x03fc98)
    event.create('gtceu:starry_fuel_mixture')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:illuminated_heavy_fuel_mixture')
        .liquid()
        .color(0xa8ddff)
    event.create('gtceu:illuminated_light_fuel_mixture')
        .liquid()
        .color(0x0cf0e8)
    event.create('gtceu:wispy_star_dew')
        .gas()
        .color(0x0cf0e8)
    event.create('gtceu:moon_stone')
        .dust()
        .color(0x143d30)
    event.create('gtceu:trinium_calx_solution')
        .color(0xe50508b)
        .liquid()
    event.create('gtceu:vitrolic_slurry')
        .color(0x5b767b)
        .liquid()
    event.create('gtceu:trinium_waste')
        .color(0x348d8d)
        .liquid()
    event.create('gtceu:trinium_oxide')
        .dust()
        .color(0x6d7283).secondaryColor(0x353836).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:ghost_matter')
        .color(0x34ebbd)
        .plasma()
    event.create('gtceu:sol_blood')
        .color(0xc28e1f)
        .plasma()
    event.create('gtceu:homeward_resin')
        .color(0xf0912b)
        .plasma()
    event.create('gtceu:perpetuity_slag')
        .color(0x696969)
        .plasma()


    event.create('gtceu:inert_cinder_gas')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:cinder_gas')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:awakened_cinder_gas')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:pure_cinder_gas')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:infernal_rosin_emulsion')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:infernal_yeast_froth')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:heavy_aerocloud_seltzer')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:smoldering_cinder_brew')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:lofty_primordial_resin')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:thick_primordial_resin')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:heavy_primordial_resin')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:dense_primordial_resin')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:slick_primordial_resin')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:oscillating_primordial_resin')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:twin_primordial_resin')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:alpha_primordial_resin')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:omega_primordial_resin')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:twisting_primordial_resin')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:ichorvein_primordial_resin')
        .liquid(new GTFluidBuilder().customStill())
    event.create('gtceu:absolute_primordial_resin')
        .liquid(new GTFluidBuilder().customStill())

    event.create('gtceu:wispy_primordial_oil')
        .liquid()
        .color(0xa8fff4)
    event.create('gtceu:warm_primordial_oil')
        .liquid()
        .color(0xffc47a)
    event.create('gtceu:overlubricated_primordial_resin')
        .liquid()
        .color(0xf5b642)
    event.create('gtceu:impure_primordial_broth')
        .liquid()
        .color(0x8a5b32)
    event.create('gtceu:cleaned_primordial_broth')
        .liquid()
        .color(0xd5c97a)
    event.create('gtceu:thickened_primordial_broth')
        .liquid()
        .color(0xc5b23d)
    event.create('gtceu:steam_cracked_primordial_tar')
        .liquid()
        .color(0x2e2a26)
    event.create('gtceu:fuming_primordial_sludge')
        .liquid()
        .color(0x5b3a6b)
    event.create('gtceu:asphaltenes')
        .liquid()
        .color(0x1f1c1b)
    event.create('gtceu:halrium')
        .liquid()
        .color(0x3de0d0)
    event.create('gtceu:primordial_coke')
        .liquid()
        .color(0x444444)
    event.create('gtceu:reactive_primordial_slush')
        .liquid()
        .color(0xb54ef2)
    event.create('gtceu:voscous_primordial_goo')
        .liquid()
        .color(0x85cc3a)
    event.create('gtceu:primordial_gel')
        .liquid()
        .color(0x72f2d4)
    event.create('gtceu:slippery_primordial_jelly')
        .liquid()
        .color(0xe382db)
    event.create('gtceu:overwhelmed_primordial_mucus')
        .liquid()
        .color(0x4a9959)
    event.create('gtceu:royal_carnivorous_cocktail')
        .liquid()
        .color(0xff47a3)


})

GTCEuStartupEvents.materialModification(event => {
    const runedSteel = GTMaterials.get('gtceu:runed_steel')
    const magneticRunedSteel = GTMaterials.get('gtceu:magnetic_runed_steel')
    const magneticRunedSteelIngot = magneticRunedSteel.getProperty(PropertyKey.INGOT)

    GTMaterials.get('gtceu:sterling_silver').addFlags(GTMaterialFlags.GENERATE_FOIL)

    runedSteel.getProperty(PropertyKey.INGOT).setMagneticMaterial(magneticRunedSteel)
    magneticRunedSteelIngot.setSmeltingInto(runedSteel)
    magneticRunedSteelIngot.setArcSmeltingInto(runedSteel)
    magneticRunedSteelIngot.setMacerateInto(runedSteel)

    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('gtceu:andesite_alloy'), () => Item.getItem('create:andesite_alloy'))
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('gtceu:andesite_alloy'), () => Item.getItem('create:andesite_alloy_block'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('gtceu:industrial_iron'), () => Item.getItem('createdeco:industrial_iron_ingot'))
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('gtceu:industrial_iron'), () => Item.getItem('create:industrial_iron_block'))
    TagPrefix.gem['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('gtceu:emberite'), () => Item.getItem('embers:ember_crystal'))
    TagPrefix.dust['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('gtceu:emberite'), () => Item.getItem('embers:ember_grit'))
})

StartupEvents.postInit(event => {
    GTMaterials.get('gtceu:primordial_oil').setFormula('√∞₍Ω₎', true)
    GTMaterials.get('gtceu:star_dew').setFormula('(℧ₓ∞)', true)
    GTMaterials.get('gtceu:ourofluid').setFormula('(Ӂₜ∞)', true)
    GTMaterials.get('gtceu:genesis_resin').setFormula('(Ɽӎ∞)', true)
    GTMaterials.get('gtceu:void_tar').setFormula('(Ɽ∞)', true)
    GTMaterials.get('gtceu:abyss_grease').setFormula('(⟓∞)', true)
    GTMaterials.get('gtceu:veltharic_slough').setFormula('(√◉)', true)
})
