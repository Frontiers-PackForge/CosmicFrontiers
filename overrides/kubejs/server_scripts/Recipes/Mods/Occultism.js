
console.info('[CosmicFrontiers] - Loaded KubeJS Scripts for Occultism')
ServerEvents.recipes(event => {
  event.recipes.occultism.spirit_fire('occultism:spirit_attuned_gem', 'gtceu:certus_quartz_gem')
  event.shaped('occultism:chalk_white_impure', [
    'TC ',
    'TC ',
    'TC ',
  ], {
    T: 'gtceu:talc_dust',
    C: '#c:dusts/ash'
  })

  event.shaped('occultism:magic_lamp_empty', [
    ' C ',
    'CTC',
    ' CC',
  ], {
    T: 'gtceu:double_iesnium_plate',
    C: 'gtceu:double_silver_plate'
  })
  event.shaped('occultism:iesnium_pickaxe', [
    'PII',
    'FSH',
    ' S '
  ], {
    P: 'gtceu:iesnium_plate',
    I: 'occultism:iesnium_ingot',
    S: '#c:rods/wooden',
    F: '#c:tools/file',
    H: '#c:tools/hammer'
  })

  event.shaped('occultism:lens_frame', [
    'PHP',
    'ILI',
    'SFS'
  ], {
    P: 'gtceu:silver_rod',
    I: 'occultism:otherstone_frame',
    S: 'gtceu:silver_plate',
    L: 'gtceu:silver_ring',
    F: '#c:tools/file',
    H: '#c:tools/hammer'
  })
  event.shaped('occultism:lenses', [
    ' C ',
    'IPI',
    'SFS'
  ], {
    P: 'gtceu:fine_gold_wire',
    I: 'occultism:spirit_attuned_gem',
    S: 'minecraft:tinted_glass',
    F: '#c:tools/file',
    C: '#c:tools/wire_cutter'
  })
  
  event.recipes.occultism.miner(
    WeightedRecipeResult.of('cosmiccore:rune_slate_arklys', 1, 50),
    'occultism:miner_foliot_unspecialized'
  )
  event.recipes.occultism.miner(
    WeightedRecipeResult.of('cosmiccore:rune_slate_tylomir', 1, 50),
    'occultism:miner_foliot_unspecialized'
  )
  event.recipes.occultism.miner(
    WeightedRecipeResult.of('cosmiccore:rune_slate_khoruth', 1, 50),
    'occultism:miner_foliot_unspecialized'
  )
  event.recipes.occultism.miner(
    WeightedRecipeResult.of('cosmiccore:rune_slate_zelothar', 1, 50),
    'occultism:miner_foliot_unspecialized'
  )
  event.recipes.occultism.miner(
    WeightedRecipeResult.of('cosmiccore:rune_slate_tenura', 1, 75),
    'malum:soul_stained_steel_pickaxe'
  )
  event.recipes.occultism.miner(
    WeightedRecipeResult.of('cosmiccore:rune_slate_valdris', 1, 75),
    'malum:soul_stained_steel_pickaxe'
  )
  event.recipes.occultism.miner(
    WeightedRecipeResult.of('malum:raw_brilliance', 1, 75),
    'malum:soul_stained_steel_pickaxe'
  )

  //Malum Spirits
  event.recipes.occultism.miner(
    WeightedRecipeResult.of('malum:sacred_spirit', 1, 75),
    'malum:soul_stained_steel_scythe'
  )
  event.recipes.occultism.miner(
    WeightedRecipeResult.of('malum:wicked_spirit', 1, 75),
    'malum:soul_stained_steel_scythe'
  )
  event.recipes.occultism.miner(
    WeightedRecipeResult.of('malum:arcane_spirit', 1, 75),
    'malum:soul_stained_steel_scythe'
  )
  event.recipes.occultism.miner(
    WeightedRecipeResult.of('malum:eldritch_spirit', 1, 75),
    'malum:soul_stained_steel_scythe'
  )
  event.recipes.occultism.miner(
    WeightedRecipeResult.of('malum:aerial_spirit', 1, 75),
    'malum:soul_stained_steel_scythe'
  )
  event.recipes.occultism.miner(
    WeightedRecipeResult.of('malum:aqueous_spirit', 1, 75),
    'malum:soul_stained_steel_scythe'
  )
  event.recipes.occultism.miner(
    WeightedRecipeResult.of('malum:earthen_spirit', 1, 75),
    'malum:soul_stained_steel_scythe'
  )
  event.recipes.occultism.miner(
    WeightedRecipeResult.of('malum:infernal_spirit', 1, 75),
    'malum:soul_stained_steel_scythe'
  )



  event.recipes.occultism.ritual(
    'occultism:miner_foliot_unspecialized',
    ['occultism:spirit_attuned_crystal',
      'embers:eldritch_insignia',
      'occultism:magic_lamp_empty',
      'occultism:iesnium_pickaxe',
      'minecraft:raw_iron',
      'gtceu:double_gold_plate'],
    'occultism:book_of_binding_bound_foliot',
    'occultism:craft_foliot'
  ).dummy('occultism:ritual_dummy/craft_miner_foliot_unspecialized').id("occultism:frontiers.fusion_ritual.ritual_miner")


  event.recipes.occultism.ritual(
    '16x gtceu:runed_steel_ingot',
    [
      "gtceu:steel_ingot",
      "gtceu:steel_ingot",
      "gtceu:steel_ingot",
      "gtceu:steel_ingot",
      "gtceu:steel_ingot",
      "gtceu:steel_ingot",
      "gtceu:steel_ingot",
      "gtceu:steel_ingot",
      'cosmiccore:rune_slate_tylomir',
      'occultism:iesnium_ingot',
      'cosmiccore:rune_slate_zelothar',
      'occultism:iesnium_ingot',
    ],
    'occultism:otherworld_ashes',
    'occultism:summon_unbound_marid'
  ).dummy("occultism:ritual_dummy/custom_ritual_craft").id("occultism:frontiers.rune_ritual")

  event.recipes.occultism.ritual(
    'occultism:dimensional_mineshaft',
    ['occultism:spirit_attuned_crystal',
      'occultism:otherstone_pedestal',
      'occultism:otherstone_pedestal',
      'occultism:otherstone_pedestal',
      'occultism:otherstone_pedestal',
      'occultism:iesnium_block',
      'gtceu:double_gold_plate'],
    'occultism:book_of_binding_bound_djinni',
    'occultism:craft_djinni'
  ).dummy('occultism:ritual_dummy/craft_dimensional_mineshaft').id("occultism:frontiers.fusion_ritual.dim_mineshaft")


  event.recipes.occultism.ritual(
    'occultism:satchel',
    ['legendarysurvivaloverhaul:cold_string',
      'legendarysurvivaloverhaul:cold_string',
      'cosmiccore:waxed_leather',
      'cosmiccore:waxed_leather',
      'cosmiccore:waxed_leather',
      'cosmiccore:waxed_leather',
      'legendarysurvivaloverhaul:warm_string',
      'legendarysurvivaloverhaul:warm_string',],
    "gtceu:steel_crate",
    'occultism:craft_djinni'
  ).dummy("occultism:ritual_dummy/custom_ritual_craft").id("occultism:frontiers.fusion_ritual.satchel")
})
