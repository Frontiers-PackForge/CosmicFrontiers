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
           'gtceu:clay_dust']);	
      
    event.recipes.gtceu.bender('kubejs:stainless_steel_fin') 
         .itemInputs('6x gtceu:stainless_steel_plate')
         .circuit(4)
         .itemOutputs('kubejs:stainless_steel_fin')
         .duration(100)
         .EUt(480);
    event.recipes.gtceu.assembler('kubejs:stainless_steel_nose_cone') 
         .itemInputs('4x gtceu:stainless_steel_plate')
         .itemInputs('gtceu:annealed_copper_rod')
         .itemInputs('gtceu:annealed_copper_nugget')
         .inputFluids('gtceu:polytetrafluoroethylene 288')
         .itemOutputs('kubejs:stainless_steel_nose_cone')
         .duration(100)
         .EUt(480);  
    event.recipes.gtceu.assembler('kubejs:stainless_steel_engine') 
         .itemInputs('4x gtceu:stainless_steel_plate')
         .itemInputs('gtceu:stainless_steel_rotor')
         .itemInputs('gtceu:stainless_steel_drum')
         .itemInputs('gtceu:hv_electric_motor')
         .inputFluids('gtceu:polytetrafluoroethylene 432')
         .itemOutputs('kubejs:stainless_steel_engine')
         .duration(100)
         .EUt(480);   
    event.recipes.gtceu.bender('kubejs:hsse_fin') 
         .itemInputs('6x gtceu:hsse_plate')
         .circuit(4)
         .itemOutputs('kubejs:hsse_fin')
         .duration(100)
         .EUt(4046);
    event.recipes.gtceu.assembler('kubejs:hsse_nose_cone') 
         .itemInputs('4x gtceu:hsse_plate')
         .itemInputs('gtceu:annealed_copper_rod')
         .itemInputs('gtceu:annealed_copper_nugget')
         .inputFluids('gtceu:polytetrafluoroethylene 288')
         .itemOutputs('kubejs:hsse_nose_cone')
         .duration(100)
         .EUt(4046);  
    event.recipes.gtceu.assembler('kubejs:hsse_engine') 
         .itemInputs('4x gtceu:hsse_plate')
         .itemInputs('gtceu:stainless_steel_rotor')
         .itemInputs('gtceu:iv_quantum_tank')
         .itemInputs('gtceu:iv_electric_motor')
         .inputFluids('gtceu:polytetrafluoroethylene 432')
         .itemOutputs('kubejs:hsse_engine')
         .duration(100)
         .EUt(4046);
    event.recipes.gtceu.bender('kubejs:osmiridium_fin') 
         .itemInputs('6x gtceu:osmiridium_plate')
         .circuit(4)
         .itemOutputs('kubejs:osmiridium_fin')
         .duration(100)
         .EUt(30720);
    event.recipes.gtceu.assembler('kubejs:osmiridium_nose_cone') 
         .itemInputs('4x gtceu:osmiridium_plate')
         .itemInputs('gtceu:annealed_copper_rod')
         .itemInputs('gtceu:annealed_copper_nugget')
         .inputFluids('gtceu:styrene_butadiene_rubber 288')
         .itemOutputs('kubejs:osmiridium_nose_cone')
         .duration(100)
         .EUt(30720);  
    event.recipes.gtceu.assembly_line('kubejs:osmiridium_engine') 
         .itemInputs('4x gtceu:osmiridium_plate')
         .itemInputs('2x gtceu:osmiridium_round')
         .itemInputs('gtceu:stainless_steel_rotor')
         .itemInputs('gtceu:niobium_titanium_small_fluid_pipe')
         .itemInputs('gtceu:luv_quantum_tank')
         .itemInputs('gtceu:luv_electric_motor')
         .itemInputs('4x gtceu:hsss_screw')
         .inputFluids('gtceu:styrene_butadiene_rubber 288')
         .inputFluids('gtceu:soldering_alloy 432')
         .itemOutputs('kubejs:osmiridium_engine')
         .duration(100)
         .EUt(30720);  
         event.recipes.gtceu.bender('kubejs:americium_fin') 
         .itemInputs('6x gtceu:americium_plate')
         .circuit(4)
         .itemOutputs('kubejs:americium_fin')
         .duration(100)
         .EUt(122800);
    event.recipes.gtceu.assembler('kubejs:americium_nose_cone') 
         .itemInputs('4x gtceu:americium_plate')
         .itemInputs('2x gtceu:americium_round')
         .itemInputs('gtceu:annealed_copper_rod')
         .itemInputs('gtceu:annealed_copper_nugget')
         .itemInputs('4x gtceu:osmiridium_screw')
         .inputFluids('gtceu:styrene_butadiene_rubber 288')
         .itemOutputs('kubejs:americium_nose_cone')
         .duration(100)
         .EUt(122800);  
    event.recipes.gtceu.assembly_line('kubejs:americium_engine') 
         .itemInputs('4x gtceu:americium_plate')
         .itemInputs('gtceu:stainless_steel_rotor')
         .itemInputs('gtceu:vanadium_gallium_single_cable')
         .itemInputs('gtceu:zpm_quantum_tank')
         .itemInputs('gtceu:zpm_electric_motor')
         .itemInputs('4x gtceu:osmiridium_screw')
         .itemInputs('4x gtceu:osmiridium_round')
         .inputFluids('gtceu:styrene_butadiene_rubber 288')
         .inputFluids('gtceu:soldering_alloy 432')
         .itemOutputs('kubejs:americium_engine')
         .duration(100)
         .EUt(122800);  
    event.recipes.gtceu.assembler('ad_astra:launch_pad') 
         .itemInputs('4x gtceu:stainless_steel_plate')
         .itemInputs('4x gtceu:steel_plate')
         .itemOutputs('ad_astra:launch_pad')
         .duration(100)
         .EUt(480); 
      
      
      
      
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




