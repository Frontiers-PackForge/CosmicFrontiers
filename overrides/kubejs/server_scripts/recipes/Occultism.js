
console.info('[CosmicFrontiers] - Loaded KubeJS Scripts for Occultism')
let yeet = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: itemName })
  })
  ServerEvents.tags('item', event => {
    console.log('[15] - [1] - TAG-WATCHER')
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
yeet('occultism:raw_silver_block')
yeet('occultism:silver_block')
yeet('occultism:silver_nugget')
yeet('occultism:raw_silver')
yeet('occultism:silver_ore')
yeet('occultism:silver_ore_deepslate')
yeet('occultism:dimensional_matrix')
yeet('occultism:storage_controller')
yeet('occultism:storage_controller_base')
yeet('occultism:storage_stabilizer_tier1')
yeet('occultism:storage_stabilizer_tier2')
yeet('occultism:storage_stabilizer_tier3')
yeet('occultism:storage_stabilizer_tier4')

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
// yeet('occultism:satchel')





ServerEvents.tags('item', event => {
  console.log('[15] - [2] - TAG-WATCHER')
  event.remove('c:ingots/silver', 'occultism:silver_ingot')
  event.remove('c:dusts/iron', 'occultism:iron_dust')
  event.remove('c:dusts/gold', 'occultism:gold_dust')
  event.remove('c:dusts/copper', 'occultism:copper_dust')
  event.remove('c:dusts/silver', 'occultism:silver_dust')
  event.remove('c:dusts/obsidian', 'occultism:obsidian_dust')
  event.remove('c:dusts/end_stone', 'occultism:crushed_end_stone')
})

ServerEvents.recipes(event => {
  event.remove({ type: 'occultism:crushing' })
  event.remove({ type: 'occultism:miner' })
  event.remove({ id: 'occultism:spirit_fire/spirit_attuned_gem' })
  event.remove({ id: 'occultism:crafting/chalk_red_impure' })
  event.remove({ id: 'occultism:crafting/chalk_purple_impure' })
  // event.recipes.occultism.spirit_trade('minecraft:rotten_flesh', 'minecraft:bone')
  event.recipes.occultism.spirit_fire('occultism:spirit_attuned_gem', 'gtceu:certus_quartz_gem')
  // event.recipes.occultism.crushing(
  //   '2x #c:ores/iron',
  //   '#c:tools/swords'
  // )
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
  //Iesnium Pickaxe
  event.remove({ id: 'occultism:crafting/iesnium_pickaxe' })
  event.shaped('occultism:iesnium_pickaxe', [
    'PII',
    'FSH',
    ' S '
  ], {
    P: 'gtceu:iesnium_plate',
    I: 'occultism:iesnium_ingot',
    S: '#c:rods/wooden',
    F: '#c:tools/files',
    H: '#c:tools/hammers'
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
    F: '#c:tools/files',
    H: '#c:tools/hammers'
  })
  event.shaped('occultism:lenses', [
    ' C ',
    'IPI',
    'SFS'
  ], {
    P: 'gtceu:fine_gold_wire',
    I: 'occultism:spirit_attuned_gem',
    S: 'cognition:whisperglass',
    F: '#c:tools/files',
    C: '#c:tools/wire_cutters'
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


  // event.recipes.gtceu.primitive_blast_furnace('chalk_purify')
  //   .itemInputs('occultism:chalk_white_impure', '#minecraft:coals')
  //   .itemOutputs('occultism:chalk_white')
  //   .duration(3000)
  // event.recipes.gtceu.primitive_blast_furnace('chalk_bake_red')
  //   .itemInputs(['occultism:chalk_white_impure', '3x gtceu:raw_pyrope', '3x occultism:afrit_essence'])
  //   .itemOutputs('occultism:chalk_red_impure')
  //   .duration(1500)
  event.remove({ id: 'occultism:crafting/chalk_gold_impure' })
  // event.recipes.gtceu.primitive_blast_furnace('yellow_chalk_melding')
  //   .itemInputs(['occultism:chalk_white_impure', 'gtceu:ancient_debris_dust', '2x gtceu:gold_sulfide_amalgam_dust'])
  //   .itemOutputs('occultism:chalk_gold_impure')
  //   .duration(800)
  //IPBF VERSIONS
  event.recipes.gtceu.industrial_primitive_blast_furnace('chalk_purify_ipbf')
    .itemInputs(['occultism:chalk_white_impure', '4x gtceu:calcite_dust'])
    .inputFluids('gtceu:creosote 1000')
    .itemOutputs('occultism:chalk_white')
    .duration(3000)
  event.recipes.gtceu.electric_blast_furnace('chalk_purify_ebf')
    .itemInputs(['occultism:chalk_white_impure', '4x gtceu:calcite_dust'])
    .inputFluids('gtceu:oxygen 250')
    .itemOutputs('occultism:chalk_white')
    .blastFurnaceTemp(800)
    .duration(700)
    .EUt(128)
  event.recipes.gtceu.industrial_primitive_blast_furnace('chalk_bake_red_ipbf')
    .itemInputs(['occultism:chalk_white_impure', '3x gtceu:raw_pyrope', '3x occultism:afrit_essence'])
    .inputFluids('gtceu:creosote 1000')
    .itemOutputs('occultism:chalk_red_impure')
    .duration(1500)
  event.recipes.gtceu.electric_blast_furnace('chalk_bake_red_ebf')
    .itemInputs(['occultism:chalk_white_impure', '3x gtceu:raw_pyrope', '3x occultism:afrit_essence'])
    .inputFluids('gtceu:oxygen 250')
    .itemOutputs('occultism:chalk_red_impure')
    .blastFurnaceTemp(800)
    .duration(500)
    .EUt(128)
  event.recipes.gtceu.industrial_primitive_blast_furnace('yellow_chalk_melding_ipbf')
    .itemInputs(['occultism:chalk_white_impure', 'gtceu:ancient_debris_dust', '2x gtceu:gold_sulfide_amalgam_dust'])
    .inputFluids('gtceu:creosote 1000')
    .itemOutputs('occultism:chalk_gold_impure')
    .duration(800)
  event.recipes.gtceu.electric_blast_furnace('yellow_chalk_melding_ebf')
    .itemInputs(['occultism:chalk_white_impure', 'gtceu:ancient_debris_dust', '2x gtceu:gold_sulfide_amalgam_dust'])
    .inputFluids('gtceu:oxygen 250')
    .itemOutputs('occultism:chalk_gold_impure')
    .blastFurnaceTemp(800)
    .duration(300)
    .EUt(128)
  event.recipes.gtceu.industrial_primitive_blast_furnace('purple_chalk_melding_ipbf')
    .itemInputs(['occultism:chalk_white_impure', '8x gtceu:soulresin_ingot', '4x gtceu:cinderwax_ingot'])
    .inputFluids('gtceu:creosote 1000')
    .itemOutputs('occultism:chalk_purple_impure')
    .duration(800)

  event.recipes.gtceu.electric_blast_furnace('purple_chalk_melding')
    .itemInputs(['occultism:chalk_white_impure', '8x gtceu:soulresin_ingot', '4x gtceu:cinderwax_ingot'])
    .inputFluids('gtceu:oxygen 250')
    .itemOutputs('occultism:chalk_purple_impure')
    .blastFurnaceTemp(800)
    .duration(240)
    .EUt(128)
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
    Item.of('occultism:raw_iesnium').withChance(75),
    'occultism:iesnium_pickaxe'
  )
  event.recipes.occultism.miner(
    Item.of('cosmiccore:rune_slate_tenura').withChance(75),
    'malum:soul_stained_steel_pickaxe'
  )
  event.recipes.occultism.miner(
    Item.of('cosmiccore:rune_slate_valdris').withChance(75),
    'malum:soul_stained_steel_pickaxe'
  )
  event.recipes.occultism.miner(
    Item.of('malum:cluster_of_brilliance').withChance(75),
    'malum:soul_stained_steel_pickaxe'
  )
  event.recipes.occultism.miner(
    Item.of('minecraft:ancient_debris').withChance(2),
    'minecraft:netherite_pickaxe'
  )

  //Malum Spirits
  event.recipes.occultism.miner(
    Item.of('malum:sacred_spirit').withChance(75),
    'malum:soul_stained_steel_scythe'
  )
  event.recipes.occultism.miner(
    Item.of('malum:wicked_spirit').withChance(75),
    'malum:soul_stained_steel_scythe'
  )
  event.recipes.occultism.miner(
    Item.of('malum:arcane_spirit').withChance(75),
    'malum:soul_stained_steel_scythe'
  )
  event.recipes.occultism.miner(
    Item.of('malum:eldritch_spirit').withChance(75),
    'malum:soul_stained_steel_scythe'
  )
  event.recipes.occultism.miner(
    Item.of('malum:aerial_spirit').withChance(75),
    'malum:soul_stained_steel_scythe'
  )
  event.recipes.occultism.miner(
    Item.of('malum:aqueous_spirit').withChance(75),
    'malum:soul_stained_steel_scythe'
  )
  event.recipes.occultism.miner(
    Item.of('malum:earthen_spirit').withChance(75),
    'malum:soul_stained_steel_scythe'
  )
  event.recipes.occultism.miner(
    Item.of('malum:infernal_spirit').withChance(75),
    'malum:soul_stained_steel_scythe'
  )


  event.remove({ id: 'occultism:ritual/craft_miner_foliot_unspecialized' })
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
    'occultism:rune_ritual'
  ).dummy("kubejs:dummy_ritual_thing").id("occultism:frontiers.rune_ritual")

  //event.recipes.occultism.ritual(
  //  'cosmiccore:dawn_forge',
  //  [
  //    'embers:dawnstone_plate',
  //    'embers:dawnstone_plate',
  //    'embers:dawnstone_plate',
  //    'embers:dawnstone_plate',
  //    'embers:dawnstone_plate',
  //    'embers:dawnstone_plate',
  //    'embers:dawnstone_plate',
  //    'embers:dawnstone_plate'
  //  ],
  //  'gtceu:steel_brick_casing',
  //  'occultism:basic_fusion'
  //).dummy("kubejs:dummy_ritual_thing").id("occultism:frontiers.fusion_ritual.dawn_forge")

  //event.recipes.occultism.ritual(
  //  'nether_remastered:seal_of_the_underworld_item',
  //  [
  //    "nether_remastered:seal_piece_1",
  //    "nether_remastered:seal_piece_2",
  //    "nether_remastered:seal_piece_3",
  //    "nether_remastered:seal_piece_4",
  //    "gtceu:steel_ingot",
  //    "gtceu:steel_ingot",
  //    "gtceu:steel_ingot",
  //    "gtceu:steel_ingot"
  //  ],
  //  "nether_remastered:seal_crystal",
  //  'occultism:basic_fusion'
  //).dummy("kubejs:dummy_ritual_thing").id("occultism:frontiers.fusion_ritual.seal_underworld")
  event.recipes.occultism.ritual(
    'gtceu:gold_sulfide_amalgam_dust',
    ['gtceu:sulfur_dust',
      'gtceu:cinnabar_dust',
      'gtceu:cinnabar_dust',
      'gtceu:gold_dust'],
    "gtceu:gold_dust",
    'occultism:basic_fusion'
  ).dummy("kubejs:dummy_ritual_thing").id("occultism:frontiers.fusion_ritual.gold_glob")
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

  event.recipes.occultism.ritual(
    '3x legendarysurvivaloverhaul:sun_fern_seeds',
    [
      "minecraft:magma_block",
      "minecraft:magma_block",
      "gtceu:netherrack_dust",
      "gtceu:netherrack_dust",
      "#botania:petals",
      "#botania:petals",
      "#ars_nouveau:magic_shards",
      "#ars_nouveau:magic_shards"
    ],
    "minecraft:fern",
    'occultism:basic_fusion'
  ).dummy("kubejs:dummy_ritual_thing").id("occultism:frontiers.sun_fern1")
  event.recipes.occultism.ritual(
    '3x legendarysurvivaloverhaul:sun_fern_seeds',
    [
      "minecraft:magma_block",
      "minecraft:magma_block",
      "gtceu:netherrack_dust",
      "gtceu:netherrack_dust",
      "#botania:petals",
      "#botania:petals",
      "legendarysurvivaloverhaul:ice_fern_leaf",
      "legendarysurvivaloverhaul:ice_fern_leaf"
    ],
    "minecraft:fern",
    'occultism:basic_fusion'
  ).dummy("kubejs:dummy_ritual_thing").id("occultism:frontiers.sun_fern2")

  event.recipes.occultism.ritual(
    '3x legendarysurvivaloverhaul:ice_fern_seeds',
    [
      "minecraft:snow_block",
      "minecraft:snow_block",
      "#c:dusts/ice",
      "#c:dusts/ice",
      "#botania:petals",
      "#botania:petals",
      "#ars_nouveau:magic_shards",
      "#ars_nouveau:magic_shards"
    ],
    "minecraft:fern",
    'occultism:basic_fusion'
  ).dummy("kubejs:dummy_ritual_thing").id("occultism:frontiers.ice_fern1")
  event.recipes.occultism.ritual(
    '3x legendarysurvivaloverhaul:ice_fern_seeds',
    [
      "minecraft:snow_block",
      "minecraft:snow_block",
      "#c:dusts/ice",
      "#c:dusts/ice",
      "#botania:petals",
      "#botania:petals",
      "legendarysurvivaloverhaul:sun_fern_leaf",
      "legendarysurvivaloverhaul:sun_fern_leaf"
    ],
    "minecraft:fern",
    'occultism:basic_fusion'
  ).dummy("kubejs:dummy_ritual_thing").id("occultism:frontiers.ice_fern2")


  event.remove({ id: 'occultism:ritual/craft_satchel' })
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
    "gtceu:aluminium_crate",
    'occultism:craft_djinni'
  ).dummy("kubejs:dummy_ritual_thing").id("occultism:frontiers.fusion_ritual.satchel")

  //Using Event.custom because i'm too lazy to try and parse this
  event.custom({
    "type": "occultism:ritual",
    "ritual_type": "occultism:summon",
    "activation_item": {
      "item": "occultism:book_of_binding_bound_afrit"
    },
    "pentacle_id": "occultism:summon_wild_afrit",
    "duration": 60,
    "entity_to_sacrifice": {
      "tag": "c:cows",
      "display_name": "ritual.occultism.sacrifice.cows"
    },
    "entity_to_summon": "occultism:afrit_wild",
    "ritual_dummy": {
      "item": "occultism:ritual_dummy/summon_wild_afrit"
    },
    "ingredients": [
      {
        "tag": "c:netherrack"
      },
      {
        "tag": "c:gems/quartz"
      },
      {
        "item": "minecraft:flint_and_steel"
      },
      {
        "item": "minecraft:gunpowder"
      },
      {
        "item": "minecraft:gold_ingot"
      }
    ],
    "result": {
      "item": "occultism:afrit_essence",
      "nbt": {
        "display": {
          "Lore": [
            "[{\"translate\":\"item.occultism.ritual_dummy.summon_wild_afrit.tooltip\"}]"
          ],
          "Name": "[{\"translate\":\"item.occultism.ritual_dummy.summon_wild_afrit\"}]"
        }
      }
    }
  })
})