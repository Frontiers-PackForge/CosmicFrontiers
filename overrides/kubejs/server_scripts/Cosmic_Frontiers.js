//A Simple "REMOVE AND HIDE" function akin to GroovyScript's Jei.yeet() function - This will tag the item for hiding from recipe viewers and remove the recipe
//This one also has a tag removal function to remove the forge:tools/knives tag from what is removed so bear that in mind if you copy/paste this around
let yeet = (itemName) => {
    ServerEvents.recipes(event => { 
        event.remove({ output: itemName })
      })
    ServerEvents.tags('item', event => {
        event.add('forge:viewers/hidden_from_recipe', itemName)
        
    })
  }
  
    //Generator Removal - WILL RETURN WITH UH, """BETTER""" CREATE FUNCTIONALITY
  // yeet('gtceu:lv_combustion')
  // yeet('gtceu:mv_combustion')
  // yeet('gtceu:hv_combustion')
  // yeet('gtceu:large_combustion_engine')
  // yeet('gtceu:extreme_combustion_engine')
  // yeet('gtceu:lv_gas_turbine')
  // yeet('gtceu:mv_gas_turbine')
  // yeet('gtceu:hv_gas_turbine')
  // yeet('gtceu:gas_large_turbine')
  // yeet('gtceu:lv_steam_turbine')
  // yeet('gtceu:mv_steam_turbine')
  // yeet('gtceu:hv_steam_turbine')
  // yeet('gtceu:lv_steam_turbine')
  // yeet('gtceu:steam_large_turbine')
  // yeet('gtceu:plasma_large_turbine')
  // yeet('gtceu:turbine_rotor')
  
  ServerEvents.recipes(event => {
    // event.remove({ output: 'gtceu:firebrick' })
    event.recipes.gtceu.nether_catalyzer('cosmiccore:blackstone_pustule_growth') 
           .itemInputs('biomesoplenty:blackstone_bulb')
           .itemOutputs('cosmiccore:blackstone_pustule')
           .duration(160)
           .EUt(16);
    event.recipes.gtceu.cutter('cosmiccore:blackstone_pustule_slice') 
           .itemInputs('cosmiccore:blackstone_pustule')
           .itemOutputs('3x biomesoplenty:blackstone_bulb')
           .chancedOutput(Item.of('biomesoplenty:blackstone_bulb', 1), 5000, 500)
           .duration(160)
           .EUt(16);
    event.recipes.gtceu.mixer('cosmiccore:sediment_sludge_mixing') 
           .itemInputs('biomesoplenty:blackstone_bulb')
           .inputFluids(Fluid.of('minecraft:water',1000))
           .outputFluids(Fluid.of('gtceu:nether_sediment_sludge',1000))
           .duration(80)
           .circuit(1)
           .EUt(32);
    event.recipes.gtceu.mixer('cosmiccore:sediment_sludge_mixing_good') 
           .itemInputs('2x biomesoplenty:blackstone_bulb')
           .inputFluids(Fluid.of('gtceu:ethanol',250))
           .outputFluids(Fluid.of('gtceu:nether_sediment_sludge',1000))
           .duration(40)
           .circuit(2)
           .EUt(32);
    event.recipes.gtceu.flora_nurturer('cosmiccore:lucis_spore_cultivation') 
           .itemInputs('1x betternether:lucis_spore')
           .inputFluids(Fluid.of('gtceu:nether_sediment_sludge',500))
           .itemOutputs('2x cosmiccore:engourged_spore')
           .itemOutputs('2x betternether:lucis_spore')
           .chancedOutput(Item.of('betternether:lucis_spore', 1), 5000, 500)
           .duration(160)
           .EUt(16);
    event.recipes.gtceu.nether_catalyzer('cosmiccore:engourged_spore_catalyzing') 
           .itemInputs('cosmiccore:engourged_spore')
           .outputFluids(Fluid.of('gtceu:ethanol',250))
           .duration(240)
           .EUt(32);
















  })
  
  
  