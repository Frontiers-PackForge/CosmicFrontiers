// :)
ServerEvents.tags('item', event => {
  //Exclude Hammers - Removing this causes some extreme issues with ultimine - You have been warned.
  GTMaterialRegistry.getRegisteredMaterials().forEach(id => {
    event.add('ftbultimine:excluded_tools', [
      `gtceu:${id.name}_mining_hammer`, 
      `gtceu:lv_${id.name}_drill`,
      `gtceu:mv_${id.name}_drill`,
      `gtceu:hv_${id.name}_drill`,
      `gtceu:ev_${id.name}_drill`,
      `gtceu:iv_${id.name}_drill`,      
    ])
  })
})
//This removes GTCEU Ores from Ultimine - This is a balance change so removing/chaning this is ill advised. I won't invalid.nameate your run but please bear in mind it's either this or I remove Ultimine entirely. 
ServerEvents.tags('block', event => {
  GTMaterialRegistry.getRegisteredMaterials().forEach(id => {
    event.add('ftbultimine:excluded_blocks', [
      `gtceu:${id.name}_ore`,
      `gtceu:andesite_${id.name}_ore`,
      `gtceu:diorite_${id.name}_ore`,
      `gtceu:deepslate_${id.name}_ore`,
      `gtceu:granite_${id.name}_ore`,
      `gtceu:netherrack_${id.name}_ore`,
      `gtceu:endstone_${id.name}_ore`,
      `gtceu:depthrock_${id.name}_ore`,
      `gtceu:shiverstone_${id.name}_ore`,
      `gtceu:sediment_${id.name}_ore`,
      `gtceu:holystone_${id.name}_ore`,
      `gtceu:mossy_holystone_${id.name}_ore`,
      `gtceu:icestone_${id.name}_ore`,
      `gtceu:moon_stone_${id.name}_ore`,
      `gtceu:mars_stone_${id.name}_ore`,
      `gtceu:venus_stone_${id.name}_ore`,
      `gtceu:mercury_stone_${id.name}_ore`,
      `gtceu:glacio_stone_${id.name}_ore`,
      `gtceu:asurine_${id.name}_ore`,
      `gtceu:crimsite_${id.name}_ore`,
      `gtceu:limestone_${id.name}_ore`,
      `gtceu:ochrum_${id.name}_ore`,
      `gtceu:scoria_${id.name}_ore`,
      `gtceu:scorchia_${id.name}_ore`,
      `gtceu:veridium_${id.name}_ore`,
    ])
  })
  event.add('ftbultimine:excluded_blocks', 'minecraft:powder_snow')
  event.add('ftbultimine:excluded_blocks', 'minecraft:campfire')
  event.add('ftbultimine:excluded_blocks', 'minecraft:soul_campfire')
})