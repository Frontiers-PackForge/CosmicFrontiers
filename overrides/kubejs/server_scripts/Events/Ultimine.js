const $BUNDLES = Java.loadClass('com.ghostipedia.cosmiccore.common.data.materials.CosmicBundleMaterials')

const ORE_STONE_PREFIXES = ['', 'granite_', 'diorite_', 'andesite_', 'red_granite_', 'marble_', 'deepslate_', 'tuff_', 'sand_', 'red_sand_', 'gravel_', 'basalt_', 'netherrack_', 'blackstone_', 'endstone_', 'depthrock_', 'shiverstone_', 'sediment_', 'holystone_', 'mossy_holystone_', 'icestone_', 'moon_stone_', 'mars_stone_', 'venus_stone_', 'mercury_stone_', 'glacio_', 'glacio_stone_', 'asurine_', 'crimsite_', 'limestone_', 'ochrum_', 'scoria_', 'scorchia_', 'veridium_']

// :)
ServerEvents.tags('item', event => {
  console.log('[1] - [1] - TAG-WATCHER')
  //Exclude Hammers - Removing this causes some extreme issues with ultimine - You have been warned.
  GTRegistries.MATERIALS.forEach(mat => {
    event.add('ftbultimine:excluded_tools', [`gtceu:${mat.name}_mining_hammer`])
  })

  event.add('ftbultimine:excluded_tools', [
    'tconstruct:excavator',
    'tconstruct:sledge_hammer',
    'tconstruct:scythe'
  ])
})
//This removes GTCEU Ores from Ultimine - This is a balance change so removing/chaning this is ill advised. I won't invalid.nameate your run but please bear in mind it's either this or I remove Ultimine entirely.
ServerEvents.tags('block', event => {
  console.log('[1] - [2] - TAG-WATCHER')
  GTRegistries.MATERIALS.forEach(mat => {
    event.add('ftbultimine:excluded_blocks', ORE_STONE_PREFIXES.map(prefix => `gtceu:${prefix}${mat.name}_ore`))
  })
  //Exclude Misc Blocks that are not GT Related.
  event.add('ftbultimine:excluded_blocks', 'minecraft:powder_snow')
  event.add('ftbultimine:excluded_blocks', 'minecraft:campfire')
  event.add('ftbultimine:excluded_blocks', 'minecraft:soul_campfire')
})
ServerEvents.tags('block', event => {
  console.log('[1] - [4] - TAG-WATCHER')
  $BUNDLES.bundleOres().forEach(mat => {
    event.add('ftbultimine:excluded_blocks', ORE_STONE_PREFIXES.map(prefix => `cosmiccore:${prefix}${mat.name}_ore`))
  })
})
//Hides all but stone Ore from EMI
ServerEvents.tags('item', event => {
  console.log('[1] - [3] - TAG-WATCHER')
  GTRegistries.MATERIALS.forEach(mat => {
    event.add('c:hidden_from_recipe_viewers', ORE_STONE_PREFIXES.slice(1).map(prefix => `gtceu:${prefix}${mat.name}_ore`))
  })
})
