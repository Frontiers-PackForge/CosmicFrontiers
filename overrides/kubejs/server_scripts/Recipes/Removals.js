// Okay So basically. Recipe Remoals
ServerEvents.recipes(event => { 
  console.log('Hello! The recipe event has fired!')
  event.remove({ output: 'ad_astra:steel_ingot' })
  event.remove({ output: 'ad_astra:steel_plate' })
  event.remove({ output: 'ad_astra:iron_plate' })
  event.remove({ output: 'embers:iron_plate' })
  event.remove({ output: 'embers:copper_plate' })
  event.remove({ output: 'embers:lead_plate' })
  event.remove({ output: 'embers:silver_plate' })
  event.remove({ output: 'create:andesite_alloy' })
})

// Okay So basically. Tags
ServerEvents.tags('item', event => {
  console.log('Hello! The item tags event has fired!')
  //Other Modded Plate Removals From the Forge Tag - Remember to Hide in EMI if needed below
  event.remove('forge:plates/copper', 'create:copper_sheet')
  event.remove('forge:plates/brass', 'create:brass_sheet')
  event.remove('forge:plates/iron', 'create:iron_sheet')
  event.remove('forge:plates/gold', 'create:golden_sheet')
  event.remove('forge:plates/iron', 'embers:iron_plate')
  event.remove('forge:plates/copper', 'embers:copper_plate')
  event.remove('forge:plates/lead', 'embers:lead_plate')
  event.remove('forge:plates/silver', 'embers:silver_plate')
  event.remove('forge:plates/iron', 'ad_astra:iron_plate')
  event.remove('forge:plates/steel', 'ad_astra:steel_plate')
  event.remove('forge:ingots/steel', 'ad_astra:steel_ingot')


  //Hiding the Above Removals from EMI
  event.add('c:hidden_from_recipe_viewers', 'create:copper_sheet')
  event.add('c:hidden_from_recipe_viewers', 'create:brass_sheet')
  event.add('c:hidden_from_recipe_viewers', 'create:iron_sheet')
  event.add('c:hidden_from_recipe_viewers', 'create:golden_sheet')
  event.add('c:hidden_from_recipe_viewers', 'embers:iron_plate')
  event.add('c:hidden_from_recipe_viewers', 'embers:copper_plate')
  event.add('c:hidden_from_recipe_viewers', 'embers:lead_plate')
  event.add('c:hidden_from_recipe_viewers', 'embers:silver_plate')
  event.add('c:hidden_from_recipe_viewers', 'ad_astra:iron_plate')
  event.add('c:hidden_from_recipe_viewers', 'ad_astra:steel_plate')
  event.add('c:hidden_from_recipe_viewers', 'ad_astra:steel_ingot')
  
  //Blacklist Tags for Ore Mining

})

ServerEvents.tags('block', event => {
  GTRegistries.MATERIALS.forEach(id => {
    event.add('ftbultimine:excluded_blocks', [`gtceu:andesite_${id}_ore`, `gtceu:diorite_${id}_ore`, `gtceu:deepslate_${id}_ore`, `gtceu:${id}_ore`, `gtceu:granite_${id}_ore`, `gtceu:netherrack_${id}_ore`, `gtceu:endstone_${id}_ore`])
  })
  event.add('ftbultimine:excluded_blocks', 'minecraft:powder_snow')
})

//Internal Erroring Recipe Removal
ServerEvents.recipes(event => { 
  console.log('Hello! Correcting Errored Recipes!')
  event.remove({ id: 'create:cutting/compat/blue_skies/stripped_cherry_wood' })
  event.remove({ id: 'create:cutting/compat/blue_skies/stripped_cherry_log' })
  event.remove({ id: 'create:cutting/compat/biomesoplenty/cherry_log' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/stripped_cherrywood_log' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/stripped_mysterywood' })
  event.remove({ id: 'create:cutting/compat/biomesoplenty/stripped_cherry_wood' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/cherrywood' })
  event.remove({ id: 'create:cutting/compat/biomesoplenty/cherry_wood' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/mysterywood_log' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/mysterywood' })
  event.remove({ id: 'create:cutting/compat/blue_skies/cherry_wood' })
  event.remove({ id: 'create:cutting/compat/blue_skies/cherry_log' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/stripped_cherrywood' })
  event.remove({ id: 'create:cutting/compat/biomesoplenty/stripped_cherry_log' })
  event.remove({ id: 'crabbersdelight:lanternfish_barrel' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/cherrywood_log' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/stripped_mysterywood_log' })
})