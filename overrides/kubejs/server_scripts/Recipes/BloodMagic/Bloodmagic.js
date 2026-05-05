let yeet = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: itemName })
  })
  ServerEvents.tags('item', event => {
    console.log('[18] - [1] - TAG-WATCHER')
    event.add('c:hidden_from_recipe_viewers', itemName)
    event.remove('forge:tools/hammers', itemName)
  })
}
let yeet_f = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: Fluid.of(itemName) })
  })
  ServerEvents.tags('fluid', event => {
    console.log('[18] - [2] - TAG-WATCHER')
    event.add('c:hidden_from_recipe_viewers', itemName)
  })
}

ServerEvents.recipes(event => {

  // Essence Reactor — Altar recipe migrations
  event.recipes.gtceu.essence_reactor('faint_mote_infusion')
    .itemInputs('gtceu:carbon_fiber_plate')
    .itemOutputs('cosmiccore:faint_mote')
    .duration(1200)
    .EUt(GTValues.VA[GTValues.IV]);
  event.recipes.gtceu.essence_reactor('oneiric_signet_t1_infusion')
    .itemInputs('gtceu:ev_field_generator')
    .itemOutputs('cosmiccore:oneiric_signet_t1')
    .soulInput(CosmicSoulTypes.Refined, 5000)
    .duration(1500)
    .EUt(GTValues.VA[GTValues.IV]);
  event.recipes.gtceu.essence_reactor('dim_mote_infusion')
    .itemInputs('cosmiccore:wrapped_faint_mote')
    .itemOutputs('cosmiccore:dim_mote')
    .soulInput(CosmicSoulTypes.Refined, 1000)
    .duration(1200)
    .EUt(GTValues.VA[GTValues.IV]);
  event.recipes.gtceu.essence_reactor('pale_mote_infusion')
    .itemInputs('cosmiccore:wrapped_dim_mote')
    .itemOutputs('cosmiccore:pale_mote')
    .soulInput(CosmicSoulTypes.Refined, 2500)
    .duration(1500)
    .EUt(GTValues.VA[GTValues.IV]);
  event.recipes.gtceu.essence_reactor('clear_mote_infusion')
    .itemInputs('cosmiccore:wrapped_pale_mote')
    .itemOutputs('cosmiccore:clear_mote')
    .soulInput(CosmicSoulTypes.Refined, 5000)
    .duration(1800)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.essence_reactor('bright_mote_infusion')
    .itemInputs('cosmiccore:wrapped_clear_mote')
    .itemOutputs('cosmiccore:bright_mote')
    .soulInput(CosmicSoulTypes.Refined, 10000)
    .duration(2400)
    .EUt(GTValues.VA[GTValues.LuV]);


  event.recipes.gtceu.compressor('slate_to_rune')
    .itemInputs('9x cosmiccore:faint_mote')
    .itemOutputs('cosmiccore:blank_rune')
    .duration(240)
    .EUt(GTValues.VA[GTValues.IV]);

  event.recipes.gtceu.assembler('iv_soul_input')
    .itemInputs(['gtceu:iv_machine_hull', '16x kubejs:resplendent_sylvan_nanolattice', '8x cosmiccore:faint_mote', 'gtceu:steel_fluid_cell', 'gtceu:iv_sensor'])
    .itemOutputs('cosmiccore:iv_soul_input_hatch')
    .duration(240)
    .EUt(GTValues.VA[GTValues.IV]);

  event.recipes.gtceu.mixer('synth_blood')
    .itemInputs(['cosmiccore:tau_fruit', 'cosmiccore:tau_fruit', 'cosmiccore:tau_fruit', 'cosmiccore:tau_fruit'])
    .inputFluids('gtceu:tau_oil 125')
    .outputFluids('gtceu:synthetic_blood 500')
    .duration(240)
    .EUt(GTValues.VA[GTValues.LuV]);

  event.recipes.gtceu.hellfire_foundry('luv_soul_input')
    .itemInputs(['gtceu:luv_machine_hull', '16x kubejs:resplendent_sylvan_nanolattice', '16x cosmiccore:dim_mote', 'gtceu:stainless_steel_fluid_cell', 'gtceu:luv_sensor'])
    .inputFluids('gtceu:grading_fluid_1 500')
    .itemOutputs('cosmiccore:luv_soul_input_hatch')
    .soulInput(CosmicSoulTypes.Refined, 5000)
    .duration(240)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.hellfire_foundry('luv_soul_output')
    .itemInputs(['gtceu:luv_machine_hull', '16x kubejs:resplendent_sylvan_nanolattice', '16x cosmiccore:clear_mote', 'gtceu:stainless_steel_fluid_cell', 'gtceu:luv_emitter'])
    .inputFluids('gtceu:grading_fluid_4 500')
    .itemOutputs('cosmiccore:luv_soul_output_hatch')
    .soulInput(CosmicSoulTypes.Refined, 50000)
    .duration(240)
    .EUt(GTValues.VA[GTValues.LuV]);

  event.recipes.gtceu.hellfire_foundry('zpm_soul_input')
    .itemInputs(['gtceu:zpm_machine_hull', '16x kubejs:resplendent_sylvan_nanolattice', '16x cosmiccore:clear_mote', 'gtceu:stainless_steel_fluid_cell', 'gtceu:zpm_sensor'])
    .inputFluids('gtceu:grading_fluid_1 500')
    .itemOutputs('cosmiccore:zpm_soul_input_hatch')
    .soulInput(CosmicSoulTypes.Refined, 5000)
    .duration(240)
    .EUt(GTValues.VA[GTValues.ZPM]);
  event.recipes.gtceu.hellfire_foundry('zpm_soul_output')
    .itemInputs(['gtceu:zpm_machine_hull', '16x kubejs:resplendent_sylvan_nanolattice', '16x cosmiccore:bright_mote', 'gtceu:stainless_steel_fluid_cell', 'gtceu:zpm_emitter'])
    .inputFluids('gtceu:grading_fluid_4 500')
    .itemOutputs('cosmiccore:zpm_soul_output_hatch')
    .soulInput(CosmicSoulTypes.Refined, 50000)
    .duration(240)
    .EUt(GTValues.VA[GTValues.ZPM]);




  event.recipes.gtceu.hellfire_foundry('t2_signet_prep')
    .itemInputs('4x cosmiccore:dim_mote', '8x gtceu:tempered_glass', '4x cosmiccore:dim_mote', '8x gtceu:tempered_glass', '4x gtceu:iv_field_generator')
    .inputFluids('gtceu:grading_fluid_1 5000')
    .itemOutputs('cosmiccore:oneiric_signet_t2')
    .soulInput(CosmicSoulTypes.Refined, 5000)
    .duration(380)
    .EUt(GTValues.VA[GTValues.IV]);
  event.recipes.gtceu.hellfire_foundry('t3_signet_prep')
    .itemInputs('4x cosmiccore:pale_mote', '8x gtceu:tempered_glass', '4x cosmiccore:pale_mote', '8x gtceu:tempered_glass', '8x gtceu:iv_field_generator')
    .inputFluids('gtceu:grading_fluid_2 5000')
    .itemOutputs('cosmiccore:oneiric_signet_t3')
    .soulInput(CosmicSoulTypes.Refined, 20000)
    .duration(500)
    .EUt(GTValues.VA[GTValues.IV]);
  event.recipes.gtceu.hellfire_foundry('t4_signet_prep')
    .itemInputs('16x cosmiccore:clear_mote', '8x gtceu:tempered_glass', '16x cosmiccore:clear_mote', '16x gtceu:tempered_glass', '4x gtceu:luv_field_generator')
    .inputFluids('gtceu:grading_fluid_3 5000')
    .itemOutputs('cosmiccore:oneiric_signet_t4')
    .soulInput(CosmicSoulTypes.Refined, 40000)
    .duration(500)
    .EUt(GTValues.VA[GTValues.IV]);
  event.recipes.gtceu.hellfire_foundry('t5_signet_prep')
    .itemInputs('16x cosmiccore:bright_mote', '32x gtceu:tempered_glass', '16x cosmiccore:bright_mote', '32x gtceu:tempered_glass', '8x gtceu:luv_field_generator')
    .inputFluids('gtceu:grading_fluid_4 5000')
    .itemOutputs('cosmiccore:oneiric_signet_t5')
    .soulInput(CosmicSoulTypes.Refined, 50000)
    .duration(500)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.hellfire_foundry('t1_mote_prep')
    .itemInputs('cosmiccore:faint_mote', '4x gtceu:polytetrafluoroethylene_foil')
    .inputFluids('gtceu:grading_fluid_1 10')
    .itemOutputs('cosmiccore:wrapped_faint_mote')
    .soulInput(CosmicSoulTypes.Refined, 250)
    .duration(60)
    .EUt(GTValues.VA[GTValues.IV]);
  event.recipes.gtceu.hellfire_foundry('t2_mote_prep')
    .itemInputs('cosmiccore:dim_mote', '8x gtceu:polytetrafluoroethylene_foil')
    .inputFluids('gtceu:grading_fluid_1 20')
    .itemOutputs('cosmiccore:wrapped_dim_mote')
    .soulInput(CosmicSoulTypes.Refined, 500)
    .duration(60)
    .EUt(GTValues.VA[GTValues.IV]);
  event.recipes.gtceu.hellfire_foundry('t3_mote_prep')
    .itemInputs('cosmiccore:pale_mote', '16x gtceu:polybenzimidazole_foil')
    .inputFluids('gtceu:grading_fluid_2 40')
    .itemOutputs('cosmiccore:wrapped_pale_mote')
    .soulInput(CosmicSoulTypes.Refined, 2500)
    .duration(60)
    .EUt(GTValues.VA[GTValues.LuV]);

  event.recipes.gtceu.hellfire_foundry('t4_mote_prep')
    .itemInputs('cosmiccore:clear_mote', '32x gtceu:polybenzimidazole_foil')
    .inputFluids('gtceu:grading_fluid_3 40')
    .itemOutputs('cosmiccore:wrapped_clear_mote')
    .soulInput(CosmicSoulTypes.Refined, 5000)
    .duration(60)
    .EUt(GTValues.VA[GTValues.LuV]);

  event.recipes.gtceu.hellfire_foundry('t5_mote_prep')
    .itemInputs('cosmiccore:bright_mote', '64x gtceu:polybenzimidazole_foil')
    .inputFluids('gtceu:grading_fluid_4 80')
    .itemOutputs('cosmiccore:wrapped_bright_mote')
    .soulInput(CosmicSoulTypes.Refined, 10000)
    .duration(60)
    .EUt(GTValues.VA[GTValues.LuV]);

  event.recipes.gtceu.hellfire_foundry('frontiers:trinavine')
    .itemInputs(['gtceu:trinium_dust', 'gtceu:trinium_dust', 'gtceu:trinium_dust', 'gtceu:trinium_dust', 'cosmiccore:tethering_resin'])
    .inputFluids('gtceu:grading_fluid_3 250')
    .itemOutputs('5x cosmiccore:trinavine_dust')
    .soulInput(CosmicSoulTypes.Refined, 20000)
    .duration(920)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.hellfire_foundry('frontiers:grading_5_catalyst')
    .itemInputs(['gtceu:trinium_dust', 'gtceu:trinium_dust', 'gtceu:trinium_dust', 'gtceu:trinium_dust', 'cosmiccore:tethering_resin'])
    .inputFluids('gtceu:grading_fluid_3 250')
    .itemOutputs('5x cosmiccore:trinavine_dust')
    .soulInput(CosmicSoulTypes.Refined, 20000)
    .duration(920)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.hellfire_foundry('frontiers:dawn_rune')
    .itemInputs(['cosmiccore:ritual_stone', 'gtceu:exquisite_andradite_gem', 'gtceu:exquisite_andradite_gem', 'gtceu:exquisite_andradite_gem', 'gtceu:exquisite_andradite_gem'])
    .inputFluids('gtceu:grading_fluid_5 250')
    .itemOutputs('cosmiccore:light_ritual_stone')
    .soulInput(CosmicSoulTypes.Refined, 50000)
    .duration(920)
    .EUt(GTValues.VA[GTValues.LuV]);

  event.recipes.gtceu.hellfire_foundry('apoth_upgrade_resource')
    .itemInputs('apotheosis:common_material', 'apotheosis:common_material', 'apotheosis:common_material', 'apotheosis:common_material', 'apotheosis:common_material')
    .inputFluids('gtceu:grading_fluid_1 250')
    .itemOutputs('apotheosis:uncommon_material')
    .soulInput(CosmicSoulTypes.Refined, 20000)
    .duration(60)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.hellfire_foundry('apoth_upgrade_resource_2')
    .itemInputs('apotheosis:uncommon_material', 'apotheosis:uncommon_material', 'apotheosis:uncommon_material', 'apotheosis:uncommon_material', 'apotheosis:uncommon_material')
    .inputFluids('gtceu:grading_fluid_2 250')
    .itemOutputs('apotheosis:rare_material')
    .soulInput(CosmicSoulTypes.Refined, 20000)
    .duration(60)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.hellfire_foundry('apoth_upgrade_resource_3')
    .itemInputs('apotheosis:rare_material', 'apotheosis:rare_material', 'apotheosis:rare_material', 'apotheosis:rare_material', 'apotheosis:rare_material')
    .inputFluids('gtceu:grading_fluid_3 250')
    .itemOutputs('apotheosis:epic_material')
    .soulInput(CosmicSoulTypes.Refined, 20000)
    .duration(60)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.hellfire_foundry('apoth_upgrade_resource_4')
    .itemInputs('apotheosis:epic_material', 'apotheosis:epic_material', 'apotheosis:epic_material', 'apotheosis:epic_material', 'apotheosis:epic_material')
    .inputFluids('gtceu:grading_fluid_4 250')
    .itemOutputs('apotheosis:mythic_material')
    .soulInput(CosmicSoulTypes.Refined, 20000)
    .duration(60)
    .EUt(GTValues.VA[GTValues.LuV]);



  event.recipes.gtceu.mana_engraver('frontiers:grading_fluid_1')
    .notConsumable('cosmiccore:oneiric_signet_t1')
    .itemInputs(['16x gtceu:carbon_dust', '4x gtceu:polydimethylsiloxane_dust', 'gtceu:virtue_meld_dust'])
    .inputFluids('cosmiccore:prisma 2000', 'cosmiccore:triphenylphosphine 2000', 'gtceu:distilled_water 2000', 'gtceu:source_oils 2000')
    .outputFluids('gtceu:grading_fluid_1 1000')
    .duration(2000)
    .EUt(GTValues.VA[GTValues.IV]);
  event.recipes.gtceu.mana_engraver('frontiers:grading_fluid_2')
    .notConsumable('cosmiccore:oneiric_signet_t1')
    .itemInputs(['64x gtceu:carbon_dust', '16x gtceu:polydimethylsiloxane_dust', 'cosmiccore:resonant_virtue_meld_dust'])
    .inputFluids('gtceu:grading_fluid_1 1000', 'gtceu:star_dew 2000', 'gtceu:luminite 1152', 'gtceu:potent_mana 8000', 'gtceu:pyroflux 2000')
    .outputFluids('gtceu:grading_fluid_2 1000')
    .duration(2000)
    .soulInput(CosmicSoulTypes.Refined, 500)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.mana_engraver('frontiers:grading_fluid_3')
    .notConsumable('cosmiccore:oneiric_signet_t1')
    .itemInputs(['64x gtceu:graphene_dust', '64x gtceu:polydimethylsiloxane_dust', '4x cosmiccore:resonant_virtue_meld_dust', 'cosmiccore:tau_oil'])
    .inputFluids('gtceu:grading_fluid_2 1000', 'gtceu:lake_water 2000', 'gtceu:potent_mana 16000', 'cosmiccore:prisma 32000')
    .outputFluids('gtceu:grading_fluid_3 1000')
    .soulInput(CosmicSoulTypes.Refined, 1800)
    .duration(1500)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.mana_engraver('frontiers:grading_fluid_4')
    .notConsumable('cosmiccore:oneiric_signet_t2')
    .itemInputs(['16x gtceu:graphene_dust', '16x gtceu:4_4_oxydianiline_pyromellitimide_dust', '8x botania:life_essence'])
    .inputFluids('gtceu:grading_fluid_3 1000', 'gtceu:sterilized_lake_water 8000', 'cosmiccore:trinavine 1152', 'gtceu:potent_mana 32000', 'cosmiccore:prisma 64000')
    .outputFluids('gtceu:grading_fluid_4 1000')
    .soulInput(CosmicSoulTypes.Refined, 15000)
    .duration(1000)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.mana_engraver('frontiers:grading_fluid_5')
    .notConsumable('cosmiccore:oneiric_signet_t3')
    .itemInputs(['2x cosmiccore:trinavine_dust', '1x gtceu:4_4_oxydianiline_pyromellitimide_dust', '1x cosmiccore:naquadric_superalloy_dust', '1x gtceu:synthetic_pthanterum_dust', '1x gtceu:naquadria_dust'])
    .inputFluids('gtceu:grading_fluid_4 2000', 'gtceu:nutrient_solution 8000', 'cosmiccore:neutronite 1152', 'gtceu:potent_mana 64000', 'cosmiccore:prisma 64000')
    .outputFluids('gtceu:grading_fluid_5 1000')
    .soulInput(CosmicSoulTypes.Refined, 50000)
    .duration(950)
    .EUt(GTValues.VA[GTValues.ZPM]);
  event.recipes.gtceu.mana_engraver('frontiers:grading_fluid_6')
    .notConsumable('cosmiccore:oneiric_signet_t3')
    .itemInputs(['gtceu:trinanylon_6_6_dust', 'gtceu:neoprene_dust', 'gtceu:graphene_plasmites', 'gtceu:synthetic_pthanterum_dust'])
    .inputFluids('gtceu:sterilized_lake_water 4000', 'gtceu:raw_growth_medium 1000', 'gtceu:argon_plasma 2000', 'gtceu:hydrogen 4000')
    .outputFluids('gtceu:grading_fluid_6 1000')
    .soulInput(CosmicSoulTypes.Refined, 50000)
    .duration(950)
    .EUt(GTValues.VA[GTValues.ZPM]);
  event.recipes.gtceu.hellfire_foundry('frontiers:tau_oil')
    .itemInputs(['cosmiccore:tau_fruit', 'cosmiccore:tau_fruit', 'cosmiccore:tau_fruit', 'gtceu:oilsands_dust', 'cosmiccore:tethering_resin'])
    .inputFluids('gtceu:grading_fluid_2 250')
    .itemOutputs('cosmiccore:tau_oil')
    .soulInput(CosmicSoulTypes.Refined, 7500)
    .duration(430)
    .EUt(GTValues.VA[GTValues.LuV]);


  event.recipes.gtceu.hellfire_foundry('better_binding')
    .itemInputs(['gtceu:osmium_dust', 'gtceu:berkelium_dust', 'occultism:otherworld_ashes', 'gtceu:naquadah_dust', 'cosmiccore:somnolent_dew'])
    .inputFluids('gtceu:grading_fluid_2 1000')
    .itemOutputs('cosmiccore:tethering_resin')
    .soulInput(CosmicSoulTypes.Refined, 20000)
    .duration(460)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.hellfire_foundry('frontiers:holding_reagent')
    .itemInputs(['4x gtceu:carbon_dust', '4x occultism:otherworld_ashes', '4x gtceu:zeolite_dust', '4x gtceu:carbon_dust', '4x gtceu:calcite_dust'])
    .inputFluids('gtceu:grading_fluid_2 100')
    .itemOutputs('4x cosmiccore:stasis_brine')
    .soulInput(CosmicSoulTypes.Refined, 2500)
    .duration(460)
    .EUt(GTValues.VA[GTValues.LuV]);

  event.recipes.gtceu.hellfire_foundry('ritual_stone')
    .itemInputs(['2x cosmiccore:pale_mote', 'gtceu:polished_dark_concrete', '2x cosmiccore:pale_mote', 'gtceu:polished_dark_concrete', 'cosmiccore:tethering_resin'])
    .inputFluids('gtceu:grading_fluid_2 500')
    .itemOutputs('cosmiccore:ritual_stone')
    .soulInput(CosmicSoulTypes.Refined, 5000)
    .duration(460)
    .EUt(GTValues.VA[GTValues.LuV]);


  //MECHANICAL ALTAR RECIPES


  // event.recipes.gtceu.hemophagic_transfuser('mote_tier_one_bulk')
  //   .itemInputs('16x gtceu:carbon_fiber_plate')
  //   .itemOutputs('16x cosmiccore:faint_mote')
  //   .soulInput(CosmicSoulTypes.Refined, 8000)
  //   .duration(320)
  //   .EUt(GTValues.VA[GTValues.LuV]);
  // event.recipes.gtceu.hemophagic_transfuser('mote_tier_two_bulk')
  //   .itemInputs('16x cosmiccore:wrapped_faint_mote')
  //   .itemOutputs('16x cosmiccore:dim_mote')
  //   .soulInput(CosmicSoulTypes.Refined, 16000)
  //   .duration(320)
  //   .EUt(GTValues.VA[GTValues.LuV]);
  // event.recipes.gtceu.hemophagic_transfuser('mote_tier_three_bulk')
  //   .itemInputs('16x cosmiccore:wrapped_dim_mote')
  //   .itemOutputs('16x cosmiccore:pale_mote')
  //   .soulInput(CosmicSoulTypes.Refined, 40000)
  //   .duration(320)
  //   .EUt(GTValues.VA[GTValues.LuV]);
  // event.recipes.gtceu.hemophagic_transfuser('mote_tier_four_bulk')
  //   .itemInputs('16x cosmiccore:wrapped_pale_mote')
  //   .itemOutputs('16x cosmiccore:clear_mote')
  //   .soulInput(CosmicSoulTypes.Refined, 80000)
  //   .duration(320)
  //   .EUt(GTValues.VA[GTValues.LuV]);
  // event.recipes.gtceu.hemophagic_transfuser('mote_tier_five_bulk')
  //   .itemInputs('16x cosmiccore:wrapped_clear_mote')
  //   .itemOutputs('16x cosmiccore:bright_mote')
  //   .soulInput(CosmicSoulTypes.Refined, 160000)
  //   .duration(320)
  //   .EUt(GTValues.VA[GTValues.LuV]);


})