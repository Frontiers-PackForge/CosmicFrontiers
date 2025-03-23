let yeet = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: itemName })
  })
  ServerEvents.tags('item', event => {
    event.add('c:hidden_from_recipe_viewers', itemName)
    event.remove('forge:tools/hammers', itemName)
  })
}
let yeet_f = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: Fluid.of(itemName) })
  })
  ServerEvents.tags('fluid', event => {
    event.add('c:hidden_from_recipe_viewers', itemName)
  })
}

yeet('bloodmagic:soul_forge')
ServerEvents.tags('item', event => {
  event.remove('forge:dusts/iron', 'bloodmagic:ironsand')
  event.remove('forge:dusts/copper', 'bloodmagic:coppersand')
  event.remove('forge:dusts/coal', 'bloodmagic:coalsand')
  event.remove('forge:dusts/gold', 'bloodmagic:goldsand')
  event.remove('forge:dusts/netherite', 'bloodmagic:sand_netherite')
})
ServerEvents.recipes(event => {

  console.log('[BLOODMAGIC.JS] - Rewriting History')
  // event.remove({ not: { type: 'bloodmagic:meteor' }, mod: 'bloodmagic' })
  event.remove({ type: 'bloodmagic:arc', mod: 'bloodmagic' })
  event.remove({ type: 'bloodmagic:arc/furnace', mod: 'bloodmagic' })
  event.remove({ type: 'bloodmagic:arcfurnace', mod: 'bloodmagic' })
  event.remove({ type: 'bloodmagic:soulforge', mod: 'bloodmagic' })
  // event.remove({ type: 'minecraft:smelting' , mod: 'bloodmagic' })
  event.remove({ id: 'bloodmagic:soul_forge' })
  event.remove({ id: 'bloodmagic:blood_altar' })
  event.remove({ id: 'bloodmagic:altar/slate' })
  event.remove({ id: 'bloodmagic:array/spike' })
  event.remove({ id: 'bloodmagic:array/night' })
  event.remove({ id: 'bloodmagic:array/bounce' })
  event.remove({ id: 'bloodmagic:array/updraft' })
  event.remove({ id: 'bloodmagic:array/day' })
  event.remove({ id: 'bloodmagic:array/movement' })
  event.remove({ id: 'bloodmagic:alchemytable/gold_ore_from_gilded' })
  event.remove({ id: 'bloodmagic:alchemytable/corrupted_coal' })
  event.remove({ id: 'bloodmagic:alchemytable/sand_coal' })
  event.remove({ id: 'bloodmagic:alchemytable/corrupted_gold' })
  event.remove({ id: 'bloodmagic:alchemytable/corrupted_copper' })
  event.remove({ id: 'bloodmagic:alchemytable/sand_iron' })
  event.remove({ id: 'bloodmagic:alchemytable/gunpowder' })
  event.remove({ id: 'bloodmagic:alchemytable/clay_from_sand' })
  event.remove({ id: 'bloodmagic:alchemytable/string' })
  event.remove({ id: 'bloodmagic:alchemytable/sulfur_from_sigil' })
  event.remove({ id: 'bloodmagic:alchemytable/saltpeter' })
  event.remove({ id: 'bloodmagic:alchemytable/saltpeter' })
  event.remove({ id: 'bloodmagic:alchemytable/corrupted_iron' })
  event.remove({ id: 'bloodmagic:alchemytable/sulfur_from_lava' })
  event.remove({ id: 'bloodmagic:altar/reinforcedslate' })
  event.remove({ id: 'bloodmagic:ritual_stone_blank' })
  event.remove({ id: 'bloodmagic:altar/daggerofsacrifice' })
  event.remove({ id: 'bloodmagic:alchemy_table' })
  event.remove({ id: 'bloodmagic:sacrificial_dagger' })
  event.remove({ id: 'bloodmagic:altar/apprenticebloodorb' })
  event.remove({ id: 'bloodmagic:alchemytable/reagent_binding' })
  event.remove({ id: 'bloodmagic:blood_rune_blank' })
  event.remove({ id: 'bloodmagic:altar/weakbloodorb' })

  event.remove({ id: 'bloodmagic:alchemytable/reagent_water' })
  event.remove({ id: 'bloodmagic:alchemytable/reagent_lava' })
  event.remove({ id: 'bloodmagic:alchemytable/reagent_void' })
  event.remove({ id: 'bloodmagic:alchemytable/reagent_growth' })
  event.remove({ id: 'bloodmagic:alchemytable/reagent_fastminer' })
  event.remove({ id: 'bloodmagic:alchemytable/reagent_magnetism' })
  event.remove({ id: 'bloodmagic:alchemytable/reagent_air' })
  event.remove({ id: 'bloodmagic:alchemytable/reagent_blood_light' })
  event.remove({ id: 'bloodmagic:alchemytable/reagent_sight' })
  event.remove({ id: 'bloodmagic:alchemytable/reagent_holding' })
  event.remove({ id: 'bloodmagic:alchemytable/reagent_suppression' })
  event.remove({ id: 'bloodmagic:alchemytable/reagent_teleposition' })
  event.remove({ id: 'bloodmagic:arc' })
  event.remove({ id: 'bloodmagic:altar/magicianbloodorb' })
  event.remove({ id: 'bloodmagic:altar/masterbloodorb' })

  event.recipes.bloodmagic.altar('bloodmagic:blankslate', 'gtceu:carbon_fiber_plate').drainRate(50).consumptionRate(25).altarSyphon(500)
  event.recipes.bloodmagic.altar('bloodmagic:daggerofsacrifice', 'gtceu:nano_saber').drainRate(50).consumptionRate(25).altarSyphon(2000)
  event.recipes.bloodmagic.altar('bloodmagic:weakbloodorb', 'gtceu:ev_field_generator').drainRate(100).consumptionRate(50).altarSyphon(5000)

  event.recipes.bloodmagic.altar('bloodmagic:apprenticebloodorb', 'kubejs:apprenticebloodorb_frame').upgradeLevel(1).drainRate(100).consumptionRate(50).altarSyphon(5000)

  event.recipes.bloodmagic.altar('bloodmagic:magicianbloodorb', 'kubejs:magicianbloodorb_frame').upgradeLevel(2).drainRate(100).consumptionRate(50).altarSyphon(5000)
  event.recipes.bloodmagic.altar('bloodmagic:masterbloodorb', 'kubejs:masterbloodorb_frame').upgradeLevel(3).drainRate(100).consumptionRate(50).altarSyphon(20000)
  //T2 Orb
  event.recipes.bloodmagic.altar('bloodmagic:daggerofsacrifice', 'gtceu:nano_saber').upgradeLevel(0).drainRate(50).consumptionRate(25).altarSyphon(10000)


  event.recipes.gtceu.compressor('slate_to_rune')
    .itemInputs('9x bloodmagic:blankslate')
    .itemOutputs('bloodmagic:blankrune')
    .duration(240)
    .EUt(GTValues.VA[GTValues.IV]);

  event.recipes.gtceu.assembler('iv_soul_input')
    .itemInputs(['gtceu:iv_machine_hull', '16x kubejs:resplendent_sylvan_nanolattice', '8x bloodmagic:blankslate', 'gtceu:steel_fluid_cell', 'gtceu:iv_sensor'])
    .itemOutputs('cosmiccore:iv_soul_input_hatch')
    .duration(240)
    .EUt(GTValues.VA[GTValues.IV]);

  event.recipes.gtceu.hellfire_foundry('luv_soul_input')
    .itemInputs(['gtceu:luv_machine_hull', '16x kubejs:resplendent_sylvan_nanolattice', '16x bloodmagic:reinforcedslate', 'gtceu:stainless_steel_fluid_cell', 'gtceu:luv_sensor'])
    .inputFluids('gtceu:grading_fluid_1 500')
    .itemOutputs('cosmiccore:luv_soul_input_hatch')
    .soulInput(5000)
    .duration(240)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.hellfire_foundry('t2_orb_prep')
    .itemInputs('4x bloodmagic:reinforcedslate', '8x gtceu:tempered_glass', '4x bloodmagic:reinforcedslate', '8x gtceu:tempered_glass', 'gtceu:iv_field_generator')
    .inputFluids('gtceu:grading_fluid_1 5000')
    .itemOutputs('kubejs:apprenticebloodorb_frame')
    .soulInput(5000)
    .duration(380)
    .EUt(GTValues.VA[GTValues.IV]);
  event.recipes.gtceu.hellfire_foundry('t3_orb_prep')
    .itemInputs('4x bloodmagic:infusedslate', '8x gtceu:tempered_glass', '4x bloodmagic:infusedslate', '8x gtceu:tempered_glass', '4x gtceu:iv_field_generator')
    .inputFluids('gtceu:grading_fluid_2 5000')
    .itemOutputs('kubejs:magicianbloodorb_frame')
    .soulInput(20000)
    .duration(500)
    .EUt(GTValues.VA[GTValues.IV]);
  event.recipes.gtceu.hellfire_foundry('t4_orb_prep')
    .itemInputs('16x bloodmagic:demonslate', '8x gtceu:tempered_glass', '16x bloodmagic:demonslate', '16x gtceu:tempered_glass', '4x gtceu:luv_field_generator')
    .inputFluids('gtceu:grading_fluid_3 5000')
    .itemOutputs('kubejs:masterbloodorb_frame')
    .soulInput(40000)
    .duration(500)
    .EUt(GTValues.VA[GTValues.IV]);
  event.recipes.bloodmagic.altar('bloodmagic:reinforcedslate', 'kubejs:wrapped_slate_tier_2').upgradeLevel(1).drainRate(25).consumptionRate(20).altarSyphon(500)
  event.recipes.gtceu.hellfire_foundry('t2_slate_prep')
    .itemInputs('bloodmagic:blankslate', '8x gtceu:polytetrafluoroethylene_foil')
    .inputFluids('gtceu:grading_fluid_1 20')
    .itemOutputs('kubejs:wrapped_slate_tier_2')
    .soulInput(500)
    .duration(60)
    .EUt(GTValues.VA[GTValues.IV]);
  event.remove({ id: 'bloodmagic:altar/imbuedslate' })
  event.recipes.bloodmagic.altar('bloodmagic:infusedslate', 'kubejs:wrapped_slate_tier_3').upgradeLevel(2).drainRate(55).consumptionRate(70).altarSyphon(2500)
  event.recipes.gtceu.hellfire_foundry('t3_slate_prep')
    .itemInputs('bloodmagic:reinforcedslate', '16x gtceu:polybenzimidazole_foil')
    .inputFluids('gtceu:grading_fluid_2 40')
    .itemOutputs('kubejs:wrapped_slate_tier_3')
    .soulInput(2500)
    .duration(60)
    .EUt(GTValues.VA[GTValues.LuV]);

  event.remove({ id: 'bloodmagic:altar/demonicslate' })
  event.recipes.bloodmagic.altar('bloodmagic:demonslate', 'kubejs:wrapped_slate_tier_4').upgradeLevel(3).drainRate(55).consumptionRate(70).altarSyphon(5000)
  event.recipes.gtceu.hellfire_foundry('t4_slate_prep')
    .itemInputs('bloodmagic:infusedslate', '32x gtceu:polybenzimidazole_foil')
    .inputFluids('gtceu:grading_fluid_3 40')
    .itemOutputs('kubejs:wrapped_slate_tier_4')
    .soulInput(5000)
    .duration(60)
    .EUt(GTValues.VA[GTValues.LuV]);

  event.recipes.gtceu.hellfire_foundry('frontiers:trinavine')
    .itemInputs(['gtceu:trinium_dust', 'gtceu:trinium_dust', 'gtceu:trinium_dust', 'gtceu:trinium_dust', 'bloodmagic:reagentbinding'])
    .inputFluids('gtceu:grading_fluid_3 250')
    .itemOutputs('5x cosmiccore:trinavine_dust')
    .soulInput(20000)
    .duration(920)
    .EUt(GTValues.VA[GTValues.LuV]);

  event.recipes.gtceu.hellfire_foundry('apoth_upgrade_resource')
    .itemInputs('apotheosis:common_material', 'apotheosis:common_material', 'apotheosis:common_material', 'apotheosis:common_material', 'apotheosis:common_material')
    .inputFluids('gtceu:grading_fluid_1 250')
    .itemOutputs('apotheosis:uncommon_material')
    .soulInput(20000)
    .duration(60)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.hellfire_foundry('apoth_upgrade_resource_2')
    .itemInputs('apotheosis:uncommon_material', 'apotheosis:uncommon_material', 'apotheosis:uncommon_material', 'apotheosis:uncommon_material', 'apotheosis:uncommon_material')
    .inputFluids('gtceu:grading_fluid_2 250')
    .itemOutputs('apotheosis:rare_material')
    .soulInput(20000)
    .duration(60)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.hellfire_foundry('apoth_upgrade_resource_3')
    .itemInputs('apotheosis:rare_material', 'apotheosis:rare_material', 'apotheosis:rare_material', 'apotheosis:rare_material', 'apotheosis:rare_material')
    .inputFluids('gtceu:grading_fluid_3 250')
    .itemOutputs('apotheosis:epic_material')
    .soulInput(20000)
    .duration(60)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.hellfire_foundry('apoth_upgrade_resource_4')
    .itemInputs('apotheosis:epic_material', 'apotheosis:epic_material', 'apotheosis:epic_material', 'apotheosis:epic_material', 'apotheosis:epic_material')
    .inputFluids('gtceu:grading_fluid_4 250')
    .itemOutputs('apotheosis:mythic_material')
    .soulInput(20000)
    .duration(60)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.remove({ id: 'bloodmagic:altar/demonicslate' })
  //TODO T4 Slate Recipes
  event.remove({ id: 'bloodmagic:altar/etherealslate' })
  //TODO T5 Slate Recipes

  event.recipes.gtceu.mana_engraver('altar_engraver')
    .itemInputs(['gtceu:iv_chemical_bath', 'botania:fabulous_pool', '4x bloodmagic:reagentbinding', '2x gtceu:iv_electric_pump', '16x gtceu:stone_plate', 'botania:rune_spring', 'botania:rune_summer', 'botania:rune_autumn', 'botania:rune_winter'])
    .itemOutputs('bloodmagic:altar')
    .duration(240)
    .EUt(GTValues.VA[GTValues.IV]);


  event.recipes.gtceu.mana_engraver('frontiers:grading_fluid_1')
    .notConsumable('bloodmagic:weakbloodorb')
    .itemInputs(['16x gtceu:carbon_dust', '4x gtceu:polydimethylsiloxane_dust', 'gtceu:virtue_meld_dust'])
    .inputFluids('cosmiccore:prisma 2000', 'cosmiccore:triphenylphosphine 2000', 'gtceu:distilled_water 2000', 'gtceu:source_oils 2000')
    .outputFluids('gtceu:grading_fluid_1 1000')
    .duration(3600)
    .EUt(GTValues.VA[GTValues.IV]);
  event.recipes.gtceu.mana_engraver('frontiers:grading_fluid_2')
    .notConsumable('bloodmagic:apprenticebloodorb')
    .itemInputs(['64x gtceu:carbon_dust', '16x gtceu:polydimethylsiloxane_dust', 'cosmiccore:resonant_virtue_meld_dust'])
    .inputFluids('gtceu:grading_fluid_1 1000', 'gtceu:star_dew 2000', 'gtceu:luminite 1152', 'gtceu:potent_mana 8000', 'gtceu:pyroflux 2000')
    .outputFluids('gtceu:grading_fluid_2 1000')
    .duration(2000)
    .soulInput(500)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.mana_engraver('frontiers:grading_fluid_3')
    .notConsumable('bloodmagic:magicianbloodorb')
    .itemInputs(['64x gtceu:graphene_dust', '64x gtceu:polydimethylsiloxane_dust', '4x cosmiccore:resonant_virtue_meld_dust', 'bloodmagic:tauoil'])
    .inputFluids('gtceu:grading_fluid_2 1000', 'gtceu:lake_water 2000', 'gtceu:potent_mana 16000', 'cosmiccore:prisma 32000')
    .outputFluids('gtceu:grading_fluid_3 1000')
    .soulInput(1800)
    .duration(1500)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.mana_engraver('frontiers:grading_fluid_4')
    .notConsumable('bloodmagic:masterbloodorb')
    .itemInputs(['64x gtceu:graphene_dust', '64x gtceu:4_4_oxydianiline_pyromellitimide_dust', '8x botania:life_essence'])
    .inputFluids('gtceu:grading_fluid_3 1000', 'gtceu:sterilized_lake_water 8000', 'cosmiccore:trinavine 1152', 'gtceu:potent_mana 32000', 'cosmiccore:prisma 64000')
    .outputFluids('gtceu:grading_fluid_4 1000')
    .soulInput(15000)
    .duration(1000)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.remove({ id: "bloodmagic:ritual_stone_master" })
  event.recipes.gtceu.mana_engraver('frontiers:master_ritual_stone')
    .notConsumable('bloodmagic:magicianbloodorb')
    .itemInputs(['botania:rune_winter', 'botania:rune_autumn', 'botania:rune_summer', 'botania:rune_spring', 'botania:life_essence'])
    .inputFluids('cosmiccore:prisma 64000')
    .itemOutputs('bloodmagic:masterritualstone')
    .duration(750)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.remove({ id: 'bloodmagic:alchemytable/tau_oil' })
  event.recipes.gtceu.hellfire_foundry('frontiers:tau_oil')
    .itemInputs(['bloodmagic:weak_tau', 'bloodmagic:weak_tau', 'bloodmagic:weak_tau', 'gtceu:oilsands_dust', 'bloodmagic:reagentbinding'])
    .inputFluids('gtceu:grading_fluid_2 1000')
    .itemOutputs('bloodmagic:tauoil')
    .soulInput(7500)
    .duration(430)
    .EUt(GTValues.VA[GTValues.LuV]);


  event.recipes.gtceu.hellfire_foundry('frontiers:weakened_shard')
    .itemInputs('bloodmagic:tauoil', 'gtceu:utherium_gem')
    .inputFluids('gtceu:grading_fluid_3 1000')
    .itemOutputs('bloodmagic:weakbloodshard')
    .soulInput(5000)
    .duration(430)
    .EUt(GTValues.VA[GTValues.LuV]);

  //CHALKS
  event.remove({ id: 'bloodmagic:altar/dusk_tool' })
  event.remove({ id: 'bloodmagic:altar/air_tool' })
  event.remove({ id: 'bloodmagic:altar/fire_tool' })
  event.remove({ id: 'bloodmagic:altar/earth_tool' })
  event.remove({ id: 'bloodmagic:lava_crystal' })

  event.recipes.gtceu.hellfire_foundry('terra_chalk')
    .itemInputs(['occultism:chalk_white_impure', 'ars_nouveau:earth_essence', 'malum:earthen_spirit', 'botania:rune_earth', 'bloodmagic:reagentgrowth'])
    .inputFluids('gtceu:grading_fluid_3 1000')
    .itemOutputs('bloodmagic:earthscribetool')
    .soulInput(20000)
    .duration(460)
    .EUt(GTValues.VA[GTValues.LuV]);

  event.recipes.gtceu.hellfire_foundry('fire_chalk')
    .itemInputs(['occultism:chalk_white_impure', 'ars_nouveau:fire_essence', 'malum:sacred_spirit', 'botania:rune_fire', 'bloodmagic:reagentlava'])
    .inputFluids('gtceu:grading_fluid_2 1000')
    .itemOutputs('bloodmagic:firescribetool')
    .soulInput(20000)
    .duration(460)
    .EUt(GTValues.VA[GTValues.LuV]);

  event.recipes.gtceu.hellfire_foundry('water_chalk')
    .itemInputs(['occultism:chalk_white_impure', 'ars_nouveau:water_essence', 'malum:aqueous_spirit', 'botania:rune_water', 'bloodmagic:reagentwater'])
    .inputFluids('gtceu:grading_fluid_2 1000')
    .itemOutputs('bloodmagic:waterscribetool')
    .soulInput(20000)
    .duration(460)
    .EUt(GTValues.VA[GTValues.LuV]);

  event.recipes.gtceu.hellfire_foundry('air_chalk')
    .itemInputs(['occultism:chalk_white_impure', 'ars_nouveau:air_essence', 'malum:aerial_spirit', 'botania:rune_air', 'bloodmagic:reagentair'])
    .inputFluids('gtceu:grading_fluid_2 1000')
    .itemOutputs('bloodmagic:airscribetool')
    .soulInput(20000)
    .duration(460)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.hellfire_foundry('dusk_chalk')
    .itemInputs(['occultism:chalk_purple_impure', 'gtceu:quantum_star', 'ad_astra:moon_globe', 'gtceu:trinium_block'])
    .inputFluids('gtceu:grading_fluid_3 1000')
    .itemOutputs('bloodmagic:duskscribetool')
    .soulInput(20000)
    .duration(460)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.hellfire_foundry('better_binding')
    .itemInputs(['gtceu:osmium_dust', 'gtceu:berkelium_dust', 'occultism:otherworld_ashes', 'gtceu:naquadah_dust', 'bloodmagic:reagentwater'])
    .inputFluids('gtceu:grading_fluid_2 1000')
    .itemOutputs('bloodmagic:reagentbinding')
    .soulInput(20000)
    .duration(460)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.hellfire_foundry('frontiers:holding_reagent')
    .itemInputs(['4x gtceu:carbon_dust', '4x occultism:otherworld_ashes', '4x gtceu:zeolite_dust', '4x gtceu:carbon_dust', '4x gtceu:calcite_dust'])
    .inputFluids('gtceu:grading_fluid_2 100')
    .itemOutputs('4x bloodmagic:reagentholding')
    .soulInput(2500)
    .duration(460)
    .EUt(GTValues.VA[GTValues.LuV]);

  event.recipes.gtceu.hellfire_foundry('ritual_stone')
    .itemInputs(['2x bloodmagic:infusedslate', 'gtceu:polished_dark_concrete', '2x bloodmagic:infusedslate', 'gtceu:polished_dark_concrete', 'bloodmagic:reagentbinding'])
    .inputFluids('gtceu:grading_fluid_2 500')
    .itemOutputs('bloodmagic:ritualstone')
    .soulInput(5000)
    .duration(460)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.hellfire_foundry('lava_crystal')
    .itemInputs(['botania:blaze_block', 'botania:blaze_block', 'botania:blaze_block', 'gtceu:exquisite_nether_quartz_gem', 'botania:mana_diamond_block'])
    .inputFluids('gtceu:grading_fluid_3 500')
    .itemOutputs('bloodmagic:lavacrystal')
    .soulInput(10000)
    .duration(460)
    .EUt(GTValues.VA[GTValues.LuV]);


  event.shapeless('bloodmagic:sacrificialdagger', [
    'gtceu:tungsten_steel_knife'
  ])
})