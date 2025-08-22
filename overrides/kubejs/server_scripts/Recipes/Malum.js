console.log('[Malum.js loading]')
let massHideMalum = ['malum:belt_of_the_prospector', 'malum:brilliant_stone', 'malum:natural_quartz_ore', 'malum:natural_quartz', 'malum:cthonic_gold_ore', 'malum:deepslate_soulstone_ore', 'malum:soulstone_ore', 'malum:brilliant_deepslate', 'malum:deepslate_quartz_ore', 'malum:blazing_quartz_ore', /malum:(.*)_impetus/, /malum:(.*)_node/, 'malum:spirit_crucible', 'malum:spirit_catalyzer', ]

ServerEvents.tags('item', event => {
  console.log('[14] - [1] - TAG-WATCHER')
  event.add('c:hidden_from_recipe_viewers', massHideMalum)
  event.remove('forge:gems/quartz', 'malum:natural_quartz_ore')
  event.remove('forge:gems/quartz', 'malum:deepslate_quartz_ore')
})

ServerEvents.tags('block', event => {
  console.log('[14] - [2] - TAG-WATCHER')
  event.add('cosmicfrontiers:soulwood_ultimine_group', 'malum:exposed_soulwood_log')
  event.add('cosmicfrontiers:soulwood_ultimine_group', 'malum:soulwood_log')
  event.add('cosmicfrontiers:soulwood_ultimine_group', 'malum:blighted_soulwood')

  event.add('cosmicfrontiers:runewood_ultimine_group', 'malum:exposed_runewood_log')
  event.add('cosmicfrontiers:runewood_ultimine_group', 'malum:runewood_log')
})

ServerEvents.recipes(event => {
  let massRemovalMalum = ['malum:brilliant_stone', 'malum:natural_quartz_ore', 'malum:natural_quartz', 'malum:cthonic_gold_ore', 'malum:deepslate_soulstone_ore', 'malum:soulstone_ore', 'malum:brilliant_deepslate', 'malum:deepslate_quartz_ore', 'malum:blazing_quartz_ore']

  massRemovalMalum.forEach(yeetus => {
    event.remove({ output: `${yeetus}` })
    event.remove({ input: `${yeetus}` })
  })
  event.remove({ id: 'malum:void_favor/raw_soulstone' })
  event.remove({ id: 'malum:arcane_charcoal_from_runewood' })
  event.remove({ id: 'malum:arcane_charcoal_from_soulwood' })
  event.remove({ id: 'malum:spirit_infusion/belt_of_the_prospector' })
  event.recipes.gtceu.coke_oven('arcane_charcoal_coking')
    .itemInputs('#malum:soulwood_logs')
    .itemOutputs('malum:arcane_charcoal')
    .duration(900)

  event.recipes.gtceu.coke_oven('arcane_charcoal_coking2')
    .itemInputs('#malum:runewood_logs')
    .itemOutputs('malum:arcane_charcoal')
    .duration(900)


  event.remove({ output: 'malum:crude_scythe' })
  event.shaped('malum:crude_scythe', [
    'AAG',
    ' SA',
    'S  '
  ], {
    A: 'gtceu:aluminium_plate',
    G: 'occultism:soul_gem',
    S: 'minecraft:stick',
  })

  event.remove({ id: 'malum:spirit_altar' })
  event.recipes.occultism.ritual(
    'malum:spirit_altar',
    ['cosmiccore:rune_slate_arklys',
      'gtceu:runed_steel_plate',
      'cosmiccore:rune_slate_tylomir',
      'gtceu:runed_steel_plate',
      'cosmiccore:rune_slate_khoruth',
      'gtceu:runed_steel_plate',
      'cosmiccore:rune_slate_zelothar',
      'gtceu:runed_steel_plate',
      'malum:block_of_raw_soulstone',
      'malum:block_of_raw_soulstone',
      'malum:runewood_item_pedestal',
      'malum:runewood_item_pedestal',
    ],
    'malum:processed_soulstone',
    'occultism:craft_djinni'
  ).dummy("kubejs:dummy_ritual_thing").id("occultism:frontiers.fusion_ritual.malum.spirit_altar")

  event.remove({ id: 'malum:spirit_infusion/soul_stained_steel_ingot' })
  event.custom(
    {
      "type": "malum:spirit_infusion",
      "extra_items": [
        {
          "count": 4,
          "item": "gtceu:soulresin_ingot"
        },
        {
          "count": 1,
          "item": "malum:processed_soulstone"
        },
        {
          "count": 1,
          "item": "thinair:soulfire_bottle"
        }
      ],
      "input": {
        "count": 4,
        "item": "gtceu:aluminium_ingot"
      },
      "output": {
        "count": 4,
        "item": "malum:soul_stained_steel_ingot"
      },
      "spirits": [
        {
          "type": "wicked",
          "count": 3
        },
        {
          "type": "arcane",
          "count": 2
        },
        {
          "type": "earthen",
          "count": 1
        },
      ]
    }
  ).id("malum:spirit_infusion.frontiers.steel_stained_soul")

  //Stained Steel Plate etc
  event.remove({ id: 'malum:soul_stained_steel_plating' })
  event.remove({ id: 'malum:spirit_infusion/spirit_fabric' })
  event.custom(
    {
      "type": "malum:spirit_infusion",
      "extra_items": [
        {
          "count": 4,
          "item": "minecraft:string"
        },
        {
          "count": 1,
          "item": "malum:hex_ash"
        },
        {
          "count": 1,
          "item": "cosmiccore:rune_slate_valdris"
        }
      ],
      "input": {
        "count": 2,
        "tag": "minecraft:wool"
      },
      "output": {
        "count": 4,
        "item": "malum:spirit_fabric"
      },
      "spirits": [
        {
          "type": "wicked",
          "count": 2
        },
        {
          "type": "earthen",
          "count": 2
        },
        {
          "type": "aerial",
          "count": 1
        },
      ]
    }
  ).id("malum:spirit_infusion.frontiers.spirit_fabric")



  event.custom(
    {
      "type": "malum:spirit_infusion",
      "extra_items": [
        {
          "count": 1,
          "item": "malum:tainted_rock_tablet"
        },
        {
          "count": 4,
          "item": "malum:soul_stained_steel_plating"
        },
        {
          "count": 1,
          "item": "cosmiccore:rune_slate_valdris"
        }
      ],
      "input": {
        "count": 1,
        "item": "gtceu:frostproof_machine_casing"
      },
      "output": {
        "count": 1,
        "item": "cosmiccore:plated_aerocloud"
      },
      "spirits": [
        {
          "type": "arcane",
          "count": 2
        },
        {
          "type": "earthen",
          "count": 2
        },
        {
          "type": "aerial",
          "count": 2
        },
      ]
    }
  ).id("malum:spirit_infusion.frontiers.aether_frame_first")
  // Soulstone
  event.recipes.occultism.ritual(
    '4x malum:block_of_raw_soulstone',
    ['malum:earthen_spirit',
      'minecraft:stone',
      'malum:earthen_spirit',
      'minecraft:stone',
      'malum:earthen_spirit',
      'minecraft:stone',
      'malum:earthen_spirit',
      'minecraft:stone',
      'thinair:soulfire_bottle',
      'thinair:soulfire_bottle',
      'thinair:soulfire_bottle',
      'thinair:soulfire_bottle'],
    'minecraft:cobblestone',
    'occultism:rune_ritual'
  ).dummy("kubejs:dummy_ritual_thing").id("occultism:frontiers.raw_soul_stone_ritual")

  //cthonic gold
  event.remove({ id: 'malum:create/crushing/crush_rare_earths' })
  event.recipes.occultism.ritual(
    '16x malum:cthonic_gold_fragment',
    ['malum:infernal_spirit',
      'malum:raw_soulstone',
      'gtceu:crushed_lead_ore',
      'gtceu:crushed_gold_ore',],
    'malum:hallowed_gold_ingot',
    'occultism:rune_ritual'
  ).dummy("kubejs:dummy_ritual_thing").id("occultism:frontiers.cthonic_gold_ritual")

  //impetus/spirit crucible removal
  event.remove({ id: /malum:spirit_crucible(.*)/ })
  event.remove({ id: /malum:impetus_creation(.*)/ })
  event.remove({ id: /malum:node_focusing(.*)/ })
  event.remove({ id: /malum:spirit_infusion(.*)_impetus/ })
  event.remove({ id: /malum:(.*)_from_node_smelting/ })
  event.remove({ id: /malum:(.*)_from_node_blasting/ })
  event.remove({ id: 'malum:spirit_infusion/spirit_crucible' })
  event.remove({ id: 'malum:spirit_infusion/spirit_catalyzer' })
  event.remove({ id: 'malum:spirit_crucible/repair/metal_impetus_restoration' })
  event.remove({ id: 'malum:spirit_crucible/repair/alchemical_impetus_restoration' })



 event.recipes.gtceu.spirit_crucible('frontiers:forge_3')
    .itemInputs('botania:life_essence')
    .inputFluids('gtceu:pyroflux 250')
    .itemOutputs(['8x malum:aerial_spirit', '8x malum:sacred_spirit', '8x malum:aqueous_spirit', '8x malum:earthen_spirit','8x malum:infernal_spirit'])
    .duration(350)
    .EUt(GTValues.VA[GTValues.ZPM]);


 event.recipes.gtceu.spirit_crucible('frontiers:forge_4')
    .itemInputs('botania:life_essence')
    .inputFluids('gtceu:starlight 250')
    .itemOutputs(['8x malum:eldritch_spirit', '8x malum:wicked_spirit', '8x malum:arcane_spirit', 'malum:umbral_spirit'])
    .duration(400)
    .EUt(GTValues.VA[GTValues.ZPM]);



    

})

// Mass Removal
console.log('[Malum.js finished loading]')


