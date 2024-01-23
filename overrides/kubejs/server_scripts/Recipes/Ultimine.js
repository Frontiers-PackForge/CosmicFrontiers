// :)
ServerEvents.tags('item', event => {
  //Exclude Hammers - Removing this causes some extreme issues with ultimine - You have been warned.
  GTRegistries.MATERIALS.forEach(id => {
    event.add('ftbultimine:excluded_tools', [`gtceu:${id.name}_mining_hammer`])
  })
})
//This removes GTCEU Ores from Ultimine - This is a balance change so removing/chaning this is ill advised. I won't invalid.nameate your run but please bear in mind it's either this or I remove Ultimine entirely. 
ServerEvents.tags('block', event => {
  GTRegistries.MATERIALS.forEach(id => {
    event.add('ftbultimine:excluded_blocks', [`gtceu:andesite_${id.name}_ore`, `gtceu:diorite_${id.name}_ore`, `gtceu:deepslate_${id.name}_ore`, `gtceu:${id.name}_ore`, `gtceu:granite_${id.name}_ore`, `gtceu:netherrack_${id.name}_ore`, `gtceu:endstone_${id.name}_ore`])
  })
  event.add('ftbultimine:excluded_blocks', 'minecraft:powder_snow')
})