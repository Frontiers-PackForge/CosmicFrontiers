GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('nether_brick_dust')
        .dust()
        .color(0x511515)
    event.create('fluix')
        .gem()
        .dust()
        .flags(GTMaterialFlags.CRYSTALLIZABLE)
        .color(0x7921c2).iconSet(GTMaterialIconSet.DIAMOND)
    event.create('zanite')
        .gem()
        .ore()
        .element(GTElements.get('zanite'))
        .flags(GTMaterialFlags.GENERATE_LENS, GTMaterialFlags.GENERATE_PLATE)
        .color(0xa521fc).iconSet(GTMaterialIconSet.DIAMOND)
    event.create('ambrosium')
        .gem()
        .ore()
        .element(GTElements.get('ambrosium'))
        .color(0xfbff00).iconSet(GTMaterialIconSet.CERTUS)
    event.create('nether_sediment_sludge')
        .liquid()
        .color(0x511515)
    event.create('aether_air')
        .liquid()
        .color(0x75bfff)
    event.create('liquid_aether_air')
        .liquid()
        .color(0x75bfff)
    event.create('tears_of_the_sky')
        .liquid()
        .color(0x2e76e8)
    event.create('thundering_aerocloud_solution')
        .liquid(new GTFluidBuilder().customStill())
    // .color(0x154085)
    event.create('thundering_aerocloud_concentration')
        .liquid()
        .color(0x173159)
    event.create('thundering_mana')
        // .color(0x154085)
        .liquid(new GTFluidBuilder().customStill())
    event.create('thunder_boosted_source_diesel')
        .color(0xe642f5)
        .liquid(new GTFluidBuilder().customStill())
    event.create('ammonia_rich_aerocloud_solution')
        .liquid()
        .color(0x9368e3)
    event.create('high_grade_solder')
        .liquid()
        .color(0xd1c664)
    event.create('aether_augmented_sediment')
        .liquid()
        .color(0x00c4b7)
    event.create('potent_mana')
        .liquid()
        .color(0x457bd1)
    event.create('hydrogen_peroxide')
        .liquid()
        .color(0xa7f0fa)
    event.create('hydrazine')
        .liquid()
        .color(0xff2e51)
    //Netherite Line Materials
    event.create('ancient_debris')
        .dust()
        .color(0x422a25)


    event.create('netherite_scrap')
        .dust()
        .color(0x53332b).iconSet(GTMaterialIconSet.SHINY)


    event.create('netherite_alloy')
        .dust()
        .color(0x393435).iconSet(GTMaterialIconSet.SHINY)
    event.create('raw_mana_crystal_slurry')
        .liquid()
        .color(0x32a88d).iconSet(GTMaterialIconSet.SHINY)
    event.create('prepared_terrasteel')
        .liquid()
        .color(0x32a861).iconSet(GTMaterialIconSet.SHINY)
    event.create('unstable_terrasteel')
        .liquid()
        .color(0x00731f).iconSet(GTMaterialIconSet.SHINY)
    event.create('zano_aluminate')
        .dust()
        .color(0x8e46fa).iconSet(GTMaterialIconSet.SHINY)
        .element(GTElements.get('zano_alumate'))
    event.create('luminite')
        .color(0x85ffad)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .ingot()
        .ore()
        .dust()
        .blastTemp(4500)
        // .toolStats(ToolProperty.Builder.of(6.0, 7.0, 768, 3).attackSpeed(0.1).enchantability(18).build())
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
        // .element(GTElements.get('prism_tungstensteel'))
        .iconSet(GTMaterialIconSet.getByName('starry'))
    event.create('desh')
        .color(0xeb9b34)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .iconSet(GTMaterialIconSet.getByName('utherium'))
        .ingot()
        .ore()
        .dust()
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.NO_ORE_SMELTING
        )
        .element(GTElements.get('desh'))
        .iconSet(GTMaterialIconSet.getByName('starry'))
    event.create('virtue_meld')
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
            GTMaterialFlags.NO_ORE_SMELTING

        )
    event.create('utherium')
        .color(0xc3434c)
        .gem()
        .ore()

        .iconSet(GTMaterialIconSet.getByName('utherium'))
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
    event.create('luminescent_utherium')
        .color(0x6A40B8)
        .ingot()
        .liquid()
        .cableProperties(GTValues.V[GTValues.EV], 4, 16, false)
        .iconSet(GTMaterialIconSet.getByName('starry'))
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
    event.create('cosmolite')
        .color(0x4614a3)
        .gem()
        .liquid()
        .iconSet(GTMaterialIconSet.getByName('starry'))
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

    event.create('molten_virtue_meld')
        .color(0xff8400)
        .liquid()
    event.create('raw_psionic_solution')
        .color(0xff8400)
        .liquid()
    event.create('astraline_corrosion_agent')
        .color(0xff8400)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
    event.create('astraline_prismatic_solution')
        .color(0xff8400)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
    event.create('super_critical_steam')
        .color(0xffffff)
        .liquid()

    event.create('deeply_withered_nether_slag')
        .color(0x1f0207)
        .liquid()
    event.create('silica_enriched_nether_slag')
        .color(0xb3377d)
        .liquid()
    event.create('pyroflux')
        .color(0xdb593b)
        .liquid()
    event.create('nether_star_distillate_slurry')
        .color(0xa87692)
        .liquid()
    event.create('dull_nether_star')
        .color(0x949494)
        .dust()


    event.create('psi_superconductor_alpha')
        .color(0xff2ee3)
        .cableProperties(GTValues.V[GTValues.EV], 16, 0, true)
    event.create('psi_superconductor_beta')
        .color(0xb940ff)
        .cableProperties(GTValues.V[GTValues.IV], 16, 0, true)
    event.create('neodymium_praseodymium')
        .dust()
        .color(0x473147)
        .flags(
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.NO_SMELTING
        )
    event.create('magnetic_neodymium_praseodymium')
        .dust()
        .color(0x473147).iconSet(GTMaterialIconSet.MAGNETIC)
        .flags(
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.NO_SMELTING
        )

    //LUV Stuff
    event.create('false_infinity')
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
    event.create('impractical_infinity')
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
    event.create('suitable_infinity')
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
    event.create('logical_infinity')
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
    event.create('programmable_matter_base')
        .color(0x4614a3)
        .ingot()
        .liquid()
        .iconSet(GTMaterialIconSet.getByName('luminite'))
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
    event.create('runed_steel')
        .ingot()
        .liquid()
        .color(0x5d466b)
        .element(GTElements.get('rune_steel'))
        // .cableProperties(GTValues.V[GTValues.LV], 8, 0, false) - probably not needed, but revisit in a bit
        .iconSet(GTMaterialIconSet.getByName('rune_steel'))
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
    event.create('cinderwax')
        .liquid()
        .ingot()
        .color(0xa84c32).secondaryColor(0xbd6500).iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.NO_SMELTING
        )
    event.create('soulresin')
        .liquid()
        .ingot()
        .color(0x00add4).secondaryColor(0x39b1cc).iconSet(GTMaterialIconSet.ROUGH)
        .flags(
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.NO_SMELTING
        )
    event.create('undergarden_smog')
        .gas()
        .color(0x614b09).iconSet(GTMaterialIconSet.DULL)
    event.create('undergarden_sludge')
        .liquid()
        .color(0x3d2e02).iconSet(GTMaterialIconSet.DULL)
    event.create('swamp_sediment')
        .liquid()
        .color(0x3d2e02).iconSet(GTMaterialIconSet.DULL)
    event.create('rotten_sediment')
        .liquid()
        .color(0xb36250).iconSet(GTMaterialIconSet.DULL)
    event.create('pungent_sediment')
        .liquid()
        .color(0x8b50b3).iconSet(GTMaterialIconSet.DULL)
    event.create('lake_water')
        .liquid()
        .color(0x5382ad).iconSet(GTMaterialIconSet.DULL)
    event.create('sterilized_lake_water')
        .liquid()
        .color(0x5382ad).iconSet(GTMaterialIconSet.DULL)
    event.create('silt_slurry')
        .liquid()
        .color(0x544940).iconSet(GTMaterialIconSet.DULL)


    //TODO - COLORS & TEXTURES! ! ! !
    event.create('impure_silt')
        .dust()
        .color(0x544940).iconSet(GTMaterialIconSet.DULL)
    event.create('silt_seperation_composite')
        .dust()
        .color(0x9e9690).iconSet(GTMaterialIconSet.DULL)
    event.create('high_grade_silicon')
        .ingot()
        .dust()
        .color(0x392742)
        .iconSet(GTMaterialIconSet.DULL)
    event.create('middle_grade_silicon')
        .ingot()
        .dust()
        .color(0x5f5166)
        .iconSet(GTMaterialIconSet.DULL)
    event.create('europium_blended_silicon')
        .dust()
        .color(0x3d4952).iconSet(GTMaterialIconSet.DULL)
    event.create('luminent_silicon')
        .liquid()
        .fluid($FluidStorageKeys.MOLTEN, $FluidState.LIQUID)
        .color(0x575724).iconSet(GTMaterialIconSet.DULL)
    event.create('naquadah_doped_silicon')
        .fluid($FluidStorageKeys.MOLTEN, $FluidState.LIQUID)
        .color(0x3c2f40).iconSet(GTMaterialIconSet.DULL)
    event.create('dilumixal_naquadah_doped_silicon')
        .fluid($FluidStorageKeys.MOLTEN, $FluidState.LIQUID)
        .color(0x544940).iconSet(GTMaterialIconSet.DULL)
    event.create('europium_silicide')
        .dust()
        .color(0x20323d).iconSet(GTMaterialIconSet.DULL)


    event.create('nutrient_solution_base')
        .liquid()
        .color(0x79ad53).iconSet(GTMaterialIconSet.DULL)
    event.create('nutrient_solution')
        .liquid()
        .color(0x79ad53).iconSet(GTMaterialIconSet.DULL)
    event.create('fungal_nutrient_waste')
        .liquid()
        .color(0x79ad53).iconSet(GTMaterialIconSet.DULL)
    event.create('cultured_nutrient_solution')
        .liquid()
        .color(0x79ad53).iconSet(GTMaterialIconSet.DULL)
    event.create('shroom_blood')
        .liquid()
        .color(0x79ad53).iconSet(GTMaterialIconSet.DULL)


    event.create('hemoglobin')
        .liquid()
        .color(0x79ad53).iconSet(GTMaterialIconSet.DULL)
    event.create('synthetic_blood')
        .liquid()
        .color(0x79ad53).iconSet(GTMaterialIconSet.DULL)
    event.create('stygian_rage_waste')
        .liquid()
        .color(0x79ad53).iconSet(GTMaterialIconSet.DULL)
    event.create('stygian_psionzyme')
        .liquid()
        .color(0x79ad53).iconSet(GTMaterialIconSet.DULL)
    event.create('stygian_sputum')
        .liquid()
        .color(0x79ad53).iconSet(GTMaterialIconSet.DULL)
    event.create('stygian_bile')
        .liquid()
        .color(0x79ad53).iconSet(GTMaterialIconSet.DULL)

    event.create('ortho_diethynylbenzene_dianion')
        .gas()
        .color(0x79ad53).iconSet(GTMaterialIconSet.DULL)
    //Neutronite and precursor neutron states
    event.create('neutronite')
        .ingot()
        .blastTemp(7500)
        .color(0xa6f8ff).secondaryColor(0x181f47).iconSet(GTMaterialIconSet.BRIGHT)
        .flags(
            GTMaterialFlags.FORCE_GENERATE_BLOCK,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_ROTOR,
            GTMaterialFlags.GENERATE_ROUND,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.IS_MAGNETIC
        )
    event.create('critical_neutron_mass')
        .ingot()
        .blastTemp(7500)
        .color(0xd4973b).secondaryColor(0x181f47).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.NO_SMELTING
        )
    event.create('neutronic_composite')
        .ingot()
        .blastTemp(7500)
        .color(0xd62e22).secondaryColor(0x181f47).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.NO_SMELTING
        )
    event.create('resh_neutron_meld')
        .dust()
        .color(0x34dceb).iconSet(GTMaterialIconSet.DULL)
    event.create('pey_neutron_gas')
        .gas()
        .color(0xeb4034).iconSet(GTMaterialIconSet.DULL)
    event.create('ayin_neutron_fluid')
        .liquid()
        .color(0xa10840).iconSet(GTMaterialIconSet.DULL)

    event.create('alef_neutron')
        .plasma()
        .color(0x544940).iconSet(GTMaterialIconSet.DULL)
    event.create('resh_neutron')
        .plasma()
        .color(0x34dceb).iconSet(GTMaterialIconSet.DULL)
    event.create('pey_neutron')
        .plasma()
        .color(0xeb4034).iconSet(GTMaterialIconSet.DULL)
    event.create('ayin_neutron')
        .plasma()
        .color(0xa10840).iconSet(GTMaterialIconSet.DULL)

    GTMaterials.get('neptunium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('plutonium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('curium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('berkelium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('californium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('einsteinium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('fermium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('mendelevium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('nobelium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('lawrencium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('praseodymium').addFlags(GTMaterialFlags.GENERATE_ROD)

    event.create('andesite_alloy')
        .ingot()
        .color(0xa7ad9f).iconSet(GTMaterialIconSet.DULL)
        .components('1x andesite', '1x iron')
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
    event.create('industrial_iron')
        .ingot()
        .color(0x4e4e4e).iconSet(GTMaterialIconSet.DULL)
        .components('1x iron')
        .flags(
            GTMaterialFlags.GENERATE_PLATE
        )
    GTMaterials.Aluminium.addFlags(GTMaterialFlags.GENERATE_ROTOR)
    event.create('trinium_metallic')
        .ore()
        .color(0x7f6c82).iconSet(GTMaterialIconSet.SHINY)
    event.create('soul_stained_steel')
        .color(0xdb3dff).secondaryColor(0xe683fc)
        .ingot()
        .liquid()
        .cableProperties(GTValues.V[GTValues.MV], 2, 2, false)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
    event.create('graphene_oxide')
        .dust()
        .color(0x292929).secondaryColor(0x353836).iconSet(GTMaterialIconSet.DULL)

    event.create('primordial_gas')
        .color(0xdb3dff)
        .gas()
    event.create('primordial_oil')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
    event.create('lofty_primordial_oil')
        .color(0xdb3dff)
        .liquid()
    event.create('refined_primordial_oil')
        .color(0xdb3dff)
        .liquid()
    event.create('thick_primordial_oil')
        .color(0xdb3dff)
        .liquid()
    event.create('energetic_primordial_oil')
        .color(0xdb3dff)
        .liquid()
    event.create('super_dense_primordial_oil')
        .color(0xdb3dff)
        .liquid()
    event.create('deepdrop_primordial_oil')
        .color(0xdb3dff)
        .liquid()

    event.create('star_dew') //Skyline Cracked Product
        .liquid()
        .color(0xa8ddff)
    event.create('genesis_resin') //Refined Primordial Oil Product
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
    event.create('void_tar') //Depth Touched Primordial Oil Product
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
    event.create('ourofluid') //Energetic Primordial Oil Product
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
    event.create('abyss_grease') //Thick Primordial Oil Product
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
    event.create('veltharic_slough') //
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
    event.create('stardust_infused_gasoline')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
    event.create('cracked_cetane_boosted_diesel')
        .liquid()
        .color(0x03fc98)
    event.create('starry_fuel_mixture')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create("triphenyl_phosphine")
        .liquid()
        .color(0x825991)
        .formula('P(C6H5)3')
    event.create('illuminated_heavy_fuel_mixture')
        .liquid()
        .color(0xa8ddff)
    event.create('illuminated_light_fuel_mixture')
        .liquid()
        .color(0x0cf0e8)
    event.create('wispy_star_dew')
        .gas()
        .color(0x0cf0e8)
    event.create('moon_stone')
        .dust()
        .color(0x143d30)

})

GTCEuStartupEvents.materialModification(event => {
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('andesite_alloy'), () => Item.getItem('create:andesite_alloy')),
        TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('andesite_alloy'), () => Item.getItem('create:andesite_alloy_block')),
        TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('industrial_iron'), () => Item.getItem('createdeco:industrial_iron_ingot')),
        TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('industrial_iron'), () => Item.getItem('create:industrial_iron_block'))
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('soul_stained_steel'), () => Item.getItem('malum:block_of_soul_stained_steel'))
    TagPrefix.plate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('soul_stained_steel'), () => Item.getItem('malum:soul_stained_steel_plating'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('soul_stained_steel'), () => Item.getItem('malum:soul_stained_steel_ingot'))
})
GTCEuStartupEvents.materialModification(event => {
    GTMaterials.get('primordial_oil').setFormula('√∞₍Ω₎', true)
    GTMaterials.get('star_dew').setFormula('(℧ₓ∞)', true)
    GTMaterials.get('ourofluid').setFormula('(Ӂₜ∞)', true)
    GTMaterials.get('genesis_resin').setFormula('(Ɽӎ∞)', true)
    GTMaterials.get('void_tar').setFormula('(Ɽ∞)', true)
    GTMaterials.get('abyss_grease').setFormula('(⟓∞)', true)
    GTMaterials.get('veltharic_slough').setFormula('(√◉)', true)
})

