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

})






