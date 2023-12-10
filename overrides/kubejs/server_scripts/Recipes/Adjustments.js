ServerEvents.recipes(event => {
    event.remove({ output: 'gtceu:firebrick' })
    event.recipes.gtceu.masonry_oven('gtceu:firebrick_masonry') 
           .itemInputs('gtceu:compressed_fireclay')
           .itemInputs('gtceu:coal_dust')
           .itemOutputs('gtceu:firebrick')
           .itemOutputs('gtceu:ash_dust')
           .notConsumable('gtceu:ingot_casting_mold')
           .duration(100)
           .EUt(24);
    event.recipes.gtceu.masonry_oven('gtceu:andesite_alloy_masonry') 
           .itemInputs('minecraft:andesite')
           .itemInputs('gtceu:zinc_dust')
           .itemOutputs('create:andesite_alloy')
           .notConsumable('gtceu:ingot_casting_mold')
           .duration(100)
           .EUt(24);       

    event.recipes.gtceu.compressor('gtceu:nether_crystal_compressor') 
           .itemInputs(Item.of('waystones:warp_stone', '{Damage:0}'))
           .itemOutputs('nether_remastered:seal_crystal')
           .duration(800)
           .EUt(32);       
     event.recipes.gtceu.extractor('gtceu:shard_fragment_1') 
           .itemInputs('minecraft:echo_shard')
           .itemOutputs('nether_remastered:seal_piece_1')
           .duration(800)
           .EUt(32);  
    event.recipes.gtceu.extractor('gtceu:shard_fragment_2') 
           .itemInputs('minecraft:nautilus_shell')
           .itemOutputs('nether_remastered:seal_piece_2')
           .duration(800)
           .EUt(32);  
    event.recipes.gtceu.extractor('gtceu:shard_fragment_3') 
           .itemInputs('embers:ancient_motive_core')
           .itemOutputs('nether_remastered:seal_piece_3')
           .duration(800)
           .EUt(32);  
    event.recipes.gtceu.extractor('gtceu:shard_fragment_4') 
           .itemInputs('minecraft:heart_of_the_sea')
           .itemOutputs('nether_remastered:seal_piece_4')
           .duration(800)
           .EUt(32);  
    event.recipes.gtceu.macerator('gtceu:treated_wood_dust_shred') 
           .itemInputs('gtceu:treated_wood_planks')
           .itemOutputs('gtceu:treated_wood_dust')
           .duration(40)
           .EUt(32);





           



//Crafting Recipes
event.remove({ output: 'integrateddynamics:drying_basin' })
event.shaped('integrateddynamics:drying_basin', [
    'W W', 
    'T T', 
    'STS'  
  ], {
    S: 'minecraft:smooth_stone', 
    W: 'gtceu:wrought_iron_plate',  
    T: 'gtceu:treated_wood_plate'   
  }
)
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
//Waxed Leather
event.shaped('cosmiccore:waxed_leather', [
  ' W ', 
  'WLW', 
  ' W '  
], {
  W: 'minecraft:honeycomb', 
  L: 'minecraft:leather' 
}
)
event.remove({ output: 'create:copper_backtank' })
event.shaped('create:copper_backtank', [
    'WGW', 
    'CBC', 
    ' C '  
  ], {
    B: 'gtceu:bronze_machine_casing', 
    C: 'gtceu:copper_double_plate',  
    G: 'create:cogwheel',
    W: 'create:shaft'
  }
)
//Cogs
event.remove({ output: 'create:cogwheel' })
event.shaped('create:cogwheel', [
  ' T ', 
  'TST', 
  ' T '  
], {
  S: 'create:shaft',
  T: 'gtceu:treated_wood_plate'   
})
event.remove({ output: 'create:large_cogwheel' })
event.shaped('create:large_cogwheel', [
  ' T ', 
  'TCT', 
  ' T '  
], {
  C: 'create:cogwheel',  
  T: 'gtceu:treated_wood_plate'   
})
//Diving Helm
event.remove({ output: Item.of('create:copper_diving_helmet', '{Damage:0}') })
event.shaped(Item.of('create:copper_diving_helmet', '{Damage:0}'), [
  'CCC', 
  'CGC', 
  '   '  
], {
  C: 'gtceu:copper_plate',  
  G: 'minecraft:glass_pane'   
})
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