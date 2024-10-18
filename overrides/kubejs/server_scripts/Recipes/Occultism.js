
console.info('[CosmicFrontiers] - Loaded KubeJS Scripts for Occultism')
let yeet = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: itemName })
  })
  ServerEvents.tags('item', event => {
    event.add('c:hidden_from_recipe_viewers', itemName)

  })
}
yeet('occultism:miner_debug_unspecialized')
// yeet('occultism:miner_foliot_unspecialized')
yeet('occultism:miner_djinni_ores')
yeet('occultism:miner_afrit_deeps')
yeet('occultism:miner_marid_master')
yeet('occultism:ritual_dummy/craft_miner_afrit_deeps')
yeet('occultism:ritual_dummy/craft_miner_djinni_ores')
// yeet('occultism:ritual_dummy/craft_miner_foliot_unspecialized')
yeet('occultism:ritual_dummy/craft_miner_marid_master')

yeet('occultism:silver_ingot')
yeet('occultism:gold_dust')
yeet('occultism:copper_dust')
yeet('occultism:silver_dust')
yeet('occultism:obsidian_dust')
yeet('occultism:crushed_end_stone')

yeet('occultism:storage_remote_inert')
yeet('occultism:storage_remote')
yeet('occultism:stable_wormhole')
yeet('occultism:iron_dust')
yeet('occultism:book_of_calling_djinni_manage_machine')
yeet('occultism:ritual_dummy/summon_foliot_crusher')
yeet('occultism:ritual_dummy/summon_djinni_crusher')
yeet('occultism:ritual_dummy/summon_afrit_crusher')
yeet('occultism:ritual_dummy/summon_marid_crusher')
yeet('occultism:wormhole_frame')
yeet('occultism:satchel')





ServerEvents.tags('item', event => {
  event.remove('forge:ingots/silver', 'occultism:silver_ingot')
  event.remove('forge:dusts/iron', 'occultism:iron_dust')
  event.remove('forge:dusts/gold', 'occultism:gold_dust')
  event.remove('forge:dusts/copper', 'occultism:copper_dust')
  event.remove('forge:dusts/silver', 'occultism:silver_dust')
  event.remove('forge:dusts/obsidian', 'occultism:obsidian_dust')
  event.remove('forge:dusts/end_stone', 'occultism:crushed_end_stone')
  event.remove('forge:raw_materials/iesnium', 'gtceu:raw_iesnium')
  event.add('c:hidden_from_recipe_viewers', 'gtceu:raw_iesnium')
})

ServerEvents.recipes(event => {
  event.remove({ type: 'occultism:crushing' })
  event.remove({ type: 'occultism:miner' })
  event.remove({ id: 'occultism:spirit_fire/spirit_attuned_gem' })
  event.remove({ id: 'occultism:crafting/chalk_red_impure' })
  // event.recipes.occultism.spirit_trade('minecraft:rotten_flesh', 'minecraft:bone')
  event.recipes.occultism.spirit_fire('occultism:spirit_attuned_gem', 'gtceu:certus_quartz_gem')
  // event.recipes.occultism.crushing(
  //   '2x #forge:ores/iron',
  //   '#forge:tools/swords'
  // )
  event.shaped('occultism:chalk_white_impure', [
    'TC ',
    'TC ',
    'TC ',
  ], {
    T: 'gtceu:talc_dust',
    C: 'gtceu:ash_dust'
  })

  event.shaped('occultism:magic_lamp_empty', [
    ' C ',
    'CTC',
    ' CC',
  ], {
    T: 'gtceu:double_iesnium_plate',
    C: 'gtceu:double_silver_plate'
  })
  event.remove({ id: 'occultism:crafting/storage_controller' })
  event.shaped('occultism:storage_controller', [
    ' A ',
    ' B ',
    ' C ',
  ], {
    A: 'occultism:dimensional_matrix',
    B: 'toms_storage:ts.crafting_terminal',
    C: 'occultism:storage_controller_base'
  })
  //Iesnium Pickaxe
  event.remove({ id: 'occultism:crafting/iesnium_pickaxe' })
  event.shaped('occultism:iesnium_pickaxe', [
    'PII',
    'FSH',
    ' S '
  ], {
    P: 'gtceu:iesnium_plate',
    I: 'gtceu:iesnium_ingot',
    S: '#forge:rods/wooden',
    F: '#forge:tools/files',
    H: '#forge:tools/hammers'
  })
  event.remove({ id: 'occultism:crafting/lens_frame' })
  event.shaped('occultism:lens_frame', [
    'PHP',
    'ILI',
    'SFS'
  ], {
    P: 'gtceu:silver_rod',
    I: 'occultism:otherstone_frame',
    S: 'gtceu:silver_plate',
    L: 'gtceu:silver_ring',
    F: '#forge:tools/files',
    H: '#forge:tools/hammers'
  })
  event.shaped('occultism:lenses', [
    ' C ',
    'IPI',
    'SFS'
  ], {
    P: 'gtceu:fine_gold_wire',
    I: 'occultism:spirit_attuned_gem',
    S: 'experienceobelisk:whisperglass',
    F: '#forge:tools/files',
    C: '#forge:tools/wire_cutters'
  })
  event.remove({ id: 'occultism:crafting/lenses' })
  event.remove({ id: 'occultism:crafting/chalk_white_impure' })
  event.remove({ id: 'occultism:spirit_fire/chalk_white' })
  event.remove({ id: 'occultism:crafting/magic_lamp_empty' })

  //not used rituals
  event.remove({ id: 'occultism:ritual/summon_marid_crusher' })
  event.remove({ id: 'occultism:ritual/summon_djinni_crusher' })
  event.remove({ id: 'occultism:ritual/possess_shulker' })
  event.remove({ id: 'occultism:ritual/summon_foliot_crusher' })
  event.remove({ id: 'occultism:ritual/summon_afrit_crusher' })
  event.remove({ id: 'occultism:ritual/possess_weak_shulker' })
  event.remove({ id: 'occultism:ritual/craft_stable_wormhole' })
  event.remove({ id: 'occultism:crafting/storage_remote_inert' })
  event.remove({ id: 'occultism:ritual/craft_storage_remote' })
  // event.remove({ id: '' })
  // event.remove({ id: '' })


  event.recipes.gtceu.primitive_blast_furnace('chalk_purify')
    .itemInputs('occultism:chalk_white_impure')
    .itemOutputs('occultism:chalk_white')
    .duration(3000)
  event.recipes.gtceu.primitive_blast_furnace('chalk_bake_red')
    .itemInputs(['occultism:chalk_white_impure', '3x gtceu:raw_pyrope', '3x occultism:afrit_essence'])
    .itemOutputs('occultism:chalk_red_impure')
    .duration(1500)
  event.remove({ id: 'occultism:crafting/chalk_gold_impure' })
  event.recipes.gtceu.primitive_blast_furnace('yellow_chalk_melding')
    .itemInputs(['occultism:chalk_white_impure', 'gtceu:ancient_debris_dust', '2x gtceu:gold_sulfide_amalgam_dust'])
    .itemOutputs('occultism:chalk_gold_impure')
    .duration(800)
    //IPBF VERSIONS
  event.recipes.gtceu.industrial_primitive_blast_furnace('chalk_purify_ipbf')
    .itemInputs('occultism:chalk_white_impure')
    .inputFluids('gtceu:creosote 1000')
    .itemOutputs('occultism:chalk_white')
    .duration(3000)
  event.recipes.gtceu.industrial_primitive_blast_furnace('chalk_bake_red_ipbf')
    .itemInputs(['occultism:chalk_white_impure', '3x gtceu:raw_pyrope', '3x occultism:afrit_essence'])
    .inputFluids('gtceu:creosote 1000')
    .itemOutputs('occultism:chalk_red_impure')
    .duration(1500)
  event.recipes.gtceu.industrial_primitive_blast_furnace('yellow_chalk_melding_ipbf')
    .itemInputs(['occultism:chalk_white_impure', 'gtceu:ancient_debris_dust', '2x gtceu:gold_sulfide_amalgam_dust'])
    .inputFluids('gtceu:creosote 1000')
    .itemOutputs('occultism:chalk_gold_impure')
    .duration(800)
  event.recipes.occultism.miner(
    Item.of('cosmiccore:rune_slate_arklys').withChance(50),
    'occultism:miner_foliot_unspecialized'
  )
  event.recipes.occultism.miner(
    Item.of('cosmiccore:rune_slate_tylomir').withChance(50),
    'occultism:miner_foliot_unspecialized'
  )
  event.recipes.occultism.miner(
    Item.of('cosmiccore:rune_slate_khoruth').withChance(50),
    'occultism:miner_foliot_unspecialized'
  )
  event.recipes.occultism.miner(
    Item.of('cosmiccore:rune_slate_zelothar').withChance(50),
    'occultism:miner_foliot_unspecialized'
  )
  event.recipes.occultism.miner(
    Item.of('gtceu:raw_iesnium').withChance(75),
    'occultism:iesnium_pickaxe'
  )
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
    'occultism:rune_ritual'
  ).dummy("kubejs:dummy_ritual_thing").id("occultism:frontiers.rune_ritual")
  event.recipes.occultism.ritual(
    'nether_remastered:seal_of_the_underworld_item',
    [
      "nether_remastered:seal_piece_1",
      "nether_remastered:seal_piece_2",
      "nether_remastered:seal_piece_3",
      "nether_remastered:seal_piece_4",
      "gtceu:steel_ingot",
      "gtceu:steel_ingot",
      "gtceu:steel_ingot",
      "gtceu:steel_ingot"
    ],
    "nether_remastered:seal_crystal",
    'occultism:basic_fusion'
  ).dummy("kubejs:dummy_ritual_thing").id("occultism:frontiers.fusion_ritual.seal_underworld")
  event.recipes.occultism.ritual(
    'gtceu:gold_sulfide_amalgam_dust',
    ['gtceu:sulfur_dust',
      'gtceu:cinnabar_dust',
      'gtceu:cinnabar_dust',
      'gtceu:gold_dust'],
    "gtceu:gold_dust",
    'occultism:basic_fusion'
  ).dummy("kubejs:dummy_ritual_thing").id("occultism:frontiers.fusion_ritual.gold_glob")
  event.recipes.occultism.ritual(
    'toms_storage:ts.crafting_terminal',
    ['ulvcovm:ulv_robot_arm',
      'ulvcovm:ulv_robot_arm',
      'ulvcovm:ulv_robot_arm',
      'minecraft:crafting_table',
      'minecraft:crafting_table',
      'minecraft:crafting_table',
      'minecraft:crafting_table',
      'gtceu:steam_machine_casing'],
    'toms_storage:ts.storage_terminal',
    'occultism:craft_djinni'
  ).dummy("kubejs:dummy_ritual_thing").id("occultism:frontiers.fusion_ritual.terminal_crafting")
  event.remove({ id: 'occultism:ritual/craft_storage_controller_base' })
  event.recipes.occultism.ritual(
    'occultism:storage_controller_base',
    ['gtceu:double_gold_plate',
      'gtceu:double_gold_plate',
      'gtceu:double_gold_plate',
      'gtceu:double_gold_plate',
      'gtceu:double_gold_plate',
      'gtceu:double_gold_plate',
      'gtceu:double_gold_plate',
      'gtceu:double_gold_plate',
    ],
    'occultism:otherstone_pedestal',
    'occultism:craft_foliot'
  ).dummy('occultism:ritual_dummy/craft_storage_controller_base').id("occultism:frontiers.fusion_ritual.actuator_base")
  event.remove({ id: 'occultism:ritual/craft_dimensional_mineshaft' })
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
})