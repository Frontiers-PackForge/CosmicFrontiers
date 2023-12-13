// :)
ServerEvents.tags('item', event => {
    //Exclude Hammers - Removing this causes some extreme issues with ultimine - You have been warned.
    GTRegistries.MATERIALS.forEach(id => {
      event.add('ftbultimine:excluded_tools', [`gtceu:${id}_mining_hammer`])
    })
  })
  //This removes GTCEU Ores from Ultimine - This is a balance change so removing/chaning this is ill advised. I won't invalidate your run but please bear in mind it's either this or I remove Ultimine entirely. 
  ServerEvents.tags('block', event => {
    GTRegistries.MATERIALS.forEach(id => {
      event.add('ftbultimine:excluded_blocks', [`gtceu:andesite_${id}_ore`, `gtceu:diorite_${id}_ore`, `gtceu:deepslate_${id}_ore`, `gtceu:${id}_ore`, `gtceu:granite_${id}_ore`, `gtceu:netherrack_${id}_ore`, `gtceu:endstone_${id}_ore`])
    })
    event.add('ftbultimine:excluded_blocks', 'minecraft:powder_snow')
  })