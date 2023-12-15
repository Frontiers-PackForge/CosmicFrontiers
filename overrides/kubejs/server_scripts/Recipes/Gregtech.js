ServerEvents.recipes(event => {
    event.remove({ output: 'gtceu:firebrick' })
    event.recipes.gtceu.masonry_oven('gtceu:firebrick_masonry') 
           .itemInputs('gtceu:compressed_fireclay')
           .itemInputs('gtceu:coal_dust')
           .itemOutputs('gtceu:firebrick')
           .itemOutputs('gtceu:ash_dust')
           .notConsumable('gtceu:ingot_casting_mold')
           .duration(100)
           .EUt(8);
    event.recipes.gtceu.masonry_oven('gtceu:andesite_alloy_masonry') 
           .itemInputs('minecraft:andesite')
           .itemInputs('gtceu:zinc_dust')
           .itemOutputs('create:andesite_alloy')
           .notConsumable('gtceu:ingot_casting_mold')
           .duration(100)
           .EUt(8);       
    event.recipes.gtceu.macerator('gtceu:treated_wood_dust_shred') 
           .itemInputs('gtceu:treated_wood_planks')
           .itemOutputs('gtceu:treated_wood_dust')
           .duration(40)
           .EUt(8);
    event.recipes.gtceu.macerator('gtceu:nether_brick_dust_shred') 
           .itemInputs('minecraft:nether_bricks')
           .itemOutputs('gtceu:nether_brick_dust_dust')
           .duration(40)
           .EUt(16);
    event.remove({ output: 'gtceu:fireclay_dust' })
    event.shapeless('2x gtceu:fireclay_dust', [ 
           'gtceu:nether_brick_dust_dust',
           'gtceu:clay_dust'	
         ])

//Crafting Recipes
//Wrought Iron Base Molds
event.remove({ output: 'gtceu:empty_mold' })
event.shaped('gtceu:empty_mold', [
    'HF ', 
    'WW ', 
    'WW '  
  ], {
    W: 'gtceu:wrought_iron_plate', 
    H: '#forge:tools/files',  
    F: '#forge:tools/hammers'   
  }
)
//Masonry Oven
event.shaped('gtceu:lp_steam_masonry_oven', [
  'BBB', 
  'PFP', 
  'SSS'  
], {
  B: 'gtceu:bronze_plate',  
  P: 'gtceu:bronze_small_fluid_pipe',
  F: 'minecraft:furnace',
  S: 'minecraft:smooth_stone', 
})
//HP Masonry Oven
event.shaped('gtceu:hp_steam_masonry_oven', [
  'WWW', 
  'PBP', 
  'SSS'  
], {
  W: 'gtceu:wrought_iron_plate',  
  P: 'gtceu:steel_small_fluid_pipe',
  B: 'minecraft:blast_furnace',
  S: 'minecraft:smooth_stone', 
})
//Custom Recipe Handler? - Reference - Otherwise just dump the recipe in questions JSON into event.custom()
  let drying = (dryingoutput, dryingInput, duration) => {
    event.custom({"type": "integrateddynamics:drying_basin",
    "item": dryingInput,
    "duration": duration,
    "result": { item : dryingoutput}
  })
}
drying('create:shaft','create:cogwheel',40)
})
ServerEvents.tags('item', event => {
    //Exclude Hammers
    GTRegistries.MATERIALS.forEach(id => {
      event.add('ftbultimine:excluded_tools', [`gtceu:${id}_mining_hammer`])
    })
  
  })
  
ServerEvents.tags('block', event => {
    GTRegistries.MATERIALS.forEach(id => {
      event.add('ftbultimine:excluded_blocks', [`gtceu:andesite_${id}_ore`, `gtceu:diorite_${id}_ore`, `gtceu:deepslate_${id}_ore`, `gtceu:${id}_ore`, `gtceu:granite_${id}_ore`, `gtceu:netherrack_${id}_ore`, `gtceu:endstone_${id}_ore`])
    })
    event.add('ftbultimine:excluded_blocks', 'minecraft:powder_snow')
   
    event.remove('aether:aether_portal_blocks', 'minecraft:glowstone'),
    event.add('aether:aether_portal_blocks', 'gtceu:frostproof_machine_casing')
  })




