let DONOTEXIST = ['sophisticatedstorage:stack_upgrade_tier_5', 'sophisticatedstorage:basic_to_gold_tier_upgrade', 'sophisticatedstorage:basic_to_diamond_tier_upgrade', 'sophisticatedstorage:basic_to_netherite_tier_upgrade', 'sophisticatedstorage:iron_to_diamond_tier_upgrade', 'sophisticatedstorage:iron_to_netherite_tier_upgrade', 'sophisticatedstorage:gold_to_netherite_tier_upgrade', 'sophisticatedstorage:stack_upgrade_tier_3', 'sophisticatedstorage:stack_upgrade_tier_4', 'sophisticatedbackpacks:stack_upgrade_tier_1', 'sophisticatedbackpacks:stack_upgrade_tier_2', 'sophisticatedbackpacks:stack_upgrade_tier_3', 'sophisticatedbackpacks:stack_upgrade_tier_4', 'sophisticatedbackpacks:stack_upgrade_starter_tier', 'sophisticatedstorage:stack_upgrade_tier_1_plus',
  'sophisticatedstorage:limited_barrel_1',
  'sophisticatedstorage:limited_barrel_2',
  'sophisticatedstorage:limited_barrel_3',
  'sophisticatedstorage:limited_barrel_4',
  'sophisticatedstorage:limited_iron_barrel_1',
  'sophisticatedstorage:limited_iron_barrel_2',
  'sophisticatedstorage:limited_iron_barrel_3',
  'sophisticatedstorage:limited_iron_barrel_4',
  'sophisticatedstorage:limited_copper_barrel_1',
  'sophisticatedstorage:limited_copper_barrel_2',
  'sophisticatedstorage:limited_copper_barrel_3',
  'sophisticatedstorage:limited_copper_barrel_4',
  'sophisticatedstorage:limited_diamond_barrel_1',
  'sophisticatedstorage:limited_diamond_barrel_2',
  'sophisticatedstorage:limited_diamond_barrel_3',
  'sophisticatedstorage:limited_diamond_barrel_4',
  'sophisticatedstorage:limited_netherite_barrel_1',
  'sophisticatedstorage:limited_netherite_barrel_2',
  'sophisticatedstorage:limited_netherite_barrel_3',
  'sophisticatedstorage:limited_netherite_barrel_4',
  'sophisticatedstorage:limited_gold_barrel_1',
  'sophisticatedstorage:limited_gold_barrel_2',
  'sophisticatedstorage:limited_gold_barrel_3',
  'sophisticatedstorage:limited_gold_barrel_4',
  'sophisticatedstorage:copper_barrel',
  'sophisticatedstorage:copper_chest',
  'sophisticatedstorage:copper_shulker_box',
  'sophisticatedstorage:basic_to_copper_tier_upgrade',
  'sophisticatedstorage:copper_to_iron_tier_upgrade',
  'sophisticatedstorage:copper_to_gold_tier_upgrade',
  'sophisticatedstorage:copper_to_diamond_tier_upgrade',
  'sophisticatedstorage:copper_to_netherite_tier_upgrade',
  'sophisticatedstorage:pump_upgrade',
  'sophisticatedstorage:advanced_pump_upgrade',
  'sophisticatedstorage:xp_pump_upgrade',
  'sophisticatedbackpacks:pump_upgrade',
  'sophisticatedbackpacks:advanced_pump_upgrade',
  'sophisticatedbackpacks:xp_pump_upgrade',
  'sophisticatedstorage:stack_upgrade_omega_tier',
  'sophisticatedstorage:infinity_upgrade',
  'sophisticatedbackpacks:stack_upgrade_omega_tier',
  'sophisticatedbackpacks:infinity_upgrade',
  'sophisticatedstorage:survival_infinity_upgrade',
  'sophisticatedbackpacks:survival_infinity_upgrade',
]
ServerEvents.tags('item', event => {
  console.log('[16] - [1] - TAG-WATCHER')
  event.add('forge:viewers/hidden_from_recipe', DONOTEXIST)
  event.add('c:hidden_from_recipe_viewers', DONOTEXIST)
  event.add('minecraft:bamboo_logs', 'minecraft:stripped_bamboo_block')
  event.add('minecraft:bamboo_logs', 'minecraft:bamboo_block')
})

ServerEvents.recipes(event => {

  event.remove({ mod: 'sophisticatedbackpacks' })
  event.remove({ mod: 'sophisticatedstorage' })

  event.shapeless('ironchest:iron_chest', [
    'sophisticatedstorage:iron_chest'
  ])
  event.shapeless('ironchest:gold_chest', [
    'sophisticatedstorage:gold_chest'
  ])
  event.shapeless('ironchest:diamond_chest', [
    'sophisticatedstorage:diamond_chest'
  ])
  event.shapeless('ironchest:obsidian_chest', [
    'sophisticatedstorage:netherite_chest'
  ])

  event.shapeless('gtceu:wood_crate', [
    'sophisticatedstorage:barrel'
  ])
  event.shapeless('gtceu:steel_crate', [
    'sophisticatedstorage:iron_barrel'
  ])
  event.shapeless('gtceu:aluminium_crate', [
    'sophisticatedstorage:gold_barrel'
  ])
  event.shapeless('gtceu:stainless_steel_crate', [
    'sophisticatedstorage:diamond_barrel'
  ])
  event.shapeless('gtceu:aluminium_crate', [
    'sophisticatedstorage:iron_barrel'
  ])
  event.shapeless('gtceu:stainless_steel_crate', [
    'sophisticatedstorage:netherite_barrel'
  ])


  //Iron Chest Recipe Removal and Addition here bc lazy lol
  event.remove({ output: 'ironchest:copper_chest' })
  event.remove({ output: 'ironchest:iron_chest' })
  event.remove({ output: 'ironchest:gold_chest' })
  event.remove({ output: 'ironchest:diamond_chest' })
  event.remove({ output: 'ironchest:crystal_chest' })
  event.remove({ output: 'ironchest:obsidian_chest' })
  event.remove({ output: 'ironchest:wood_to_copper_chest_upgrade' })
  event.remove({ output: 'ironchest:wood_to_iron_chest_upgrade' })
  event.remove({ output: 'ironchest:copper_to_iron_chest_upgrade' })
  event.remove({ output: 'ironchest:iron_to_gold_chest_upgrade' })
  event.remove({ output: 'ironchest:gold_to_diamond_chest_upgrade' })
  event.remove({ output: 'ironchest:diamond_to_crystal_chest_upgrade' })
  event.remove({ output: 'ironchest:diamond_to_obsidian_chest_upgrade' })
  
  event.shaped('ironchest:copper_chest', [
    'QWQ',
    'WXW',
    'QWQ'
  ], {
    Q: 'gtceu:copper_plate',
    W: 'gtceu:double_copper_plate',
    X: 'minecraft:chest',
  })
  event.shaped('ironchest:wood_to_copper_chest_upgrade', [
    'QWQ',
    'WXW',
    'QWQ'
  ], {
    Q: 'gtceu:copper_plate',
    W: 'gtceu:double_copper_plate',
    X: '#minecraft:planks',
  })

  event.shaped('ironchest:iron_chest', [
    'QWQ',
    'WXW',
    'QWQ'
  ], {
    Q: 'gtceu:iron_plate',
    W: 'gtceu:double_iron_plate',
    X: 'ironchest:copper_chest',
  })
  event.shaped('ironchest:wood_to_iron_chest_upgrade', [
    'QWQ',
    'WXW',
    'QWQ'
  ], {
    Q: 'gtceu:iron_plate',
    W: 'gtceu:double_iron_plate',
    X: '#minecraft:planks',
  })
  event.shaped('ironchest:copper_to_iron_chest_upgrade', [
    'QWQ',
    'WXW',
    'QWQ'
  ], {
    Q: 'gtceu:iron_plate',
    W: 'gtceu:double_iron_plate',
    X: 'minecraft:copper_ingot',
  })

  event.shaped('ironchest:gold_chest', [
    'QWQ',
    'WXW',
    'QWQ'
  ], {
    Q: 'gtceu:gold_plate',
    W: 'gtceu:double_gold_plate',
    X: 'ironchest:iron_chest',
  })
  event.shaped('ironchest:iron_to_gold_chest_upgrade', [
    'QWQ',
    'WXW',
    'QWQ'
  ], {
    Q: 'gtceu:gold_plate',
    W: 'gtceu:double_gold_plate',
    X: 'minecraft:iron_ingot',
  })

  event.shaped('ironchest:diamond_chest', [
    'QQQ',
    'QXQ',
    'QQQ'
  ], {
    Q: 'gtceu:diamond_plate',
    X: 'ironchest:gold_chest',
  })
  event.shaped('ironchest:gold_to_diamond_chest_upgrade', [
    'QQQ',
    'QXQ',
    'QQQ'
  ], {
    Q: 'gtceu:diamond_plate',
    X: 'minecraft:gold_ingot',
  })
  
  //not sure if you want recipes for crystal/obsidian chests?
  event.shaped('ironchest:crystal_chest', [
    'QWQ',
    'WXW',
    'QWQ'
  ], {
    Q: '#forge:glass',
    W: 'minecraft:obsidian',
    X: 'ironchest:diamond_chest',
  })
  event.shaped('ironchest:diamond_to_crystal_chest_upgrade', [
    'QWQ',
    'WXW',
    'QWQ'
  ], {
    Q: '#forge:glass',
    W: 'minecraft:obsidian',
    X: 'minecraft:diamond',
  })

  event.shaped('ironchest:obsidian_chest', [
    'QQQ',
    'QXQ',
    'QQQ'
  ], {
    Q: 'minecraft:obsidian',
    X: 'ironchest:diamond_chest',
  })
  event.shaped('ironchest:diamond_to_obsidian_chest_upgrade', [
    'QQQ',
    'QXQ',
    'QQQ'
  ], {
    Q: 'minecraft:obsidian',
    X: 'minecraft:diamond',
  })

  event.recipes.gtceu.assembler("frontiers:skip_copper_chest")
    .itemInputs('4x gtceu:copper_plate', 'minecraft:chest')
    .itemOutputs('ironchest:copper_chest')
    .circuit(3)
    .duration(100)
    .EUt(32, 4);

  event.recipes.gtceu.assembler("frontiers:skip_iron_chest")
    .itemInputs('4x gtceu:iron_plate', 'minecraft:chest')
    .itemOutputs('ironchest:iron_chest')
    .circuit(3)
    .duration(100)
    .EUt(32, 4);

  event.recipes.gtceu.assembler("frontiers:skip_gold_chest")
    .itemInputs('4x gtceu:gold_plate', 'minecraft:chest')
    .itemOutputs('ironchest:gold_chest')
    .circuit(3)
    .duration(100)
    .EUt(32, 4);

  event.recipes.gtceu.assembler("frontiers:skip_diamond_chest")
    .itemInputs('4x gtceu:diamond_plate', 'minecraft:chest')
    .itemOutputs('ironchest:diamond_chest')
    .circuit(3)
    .duration(100)
    .EUt(32, 4);


})
