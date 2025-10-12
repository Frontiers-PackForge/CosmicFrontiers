//A Simple "REMOVE AND HIDE" function akin to GroovyScript's Jei.yeet() function - This will tag the item for hiding from recipe viewers and remove the recipe
//This one also has a tag removal function to remove the forge:tools/knives tag from what is removed so bear that in mind if you copy/paste this around
let yeet = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: itemName })
  })

}
//Removal of Large Boilers and their recipemaps - DO NOT revert these changes, as eventually they will also be stripped out and overwritten via coremod
// YOU HAVE BEEN WARNED, THIS **WILL** RESULT IN IRREVERSIBLE DAMAGE TO WORLDS - NO SUPPORT WILL BE GIVEN FOR PEOPLE WHO IGNORE THIS WARNING
yeet('gtceu:bronze_large_boiler')
yeet('gtceu:steel_large_boiler')
yeet('gtceu:titanium_large_boiler')
yeet('gtceu:tungstensteel_large_boiler')
//Disabled Until 0.6.0 - Recipes Will vanish then.
ServerEvents.recipes(event => {
  // event.remove({ id: /([^:]+):large_boiler(.*)$/ })


  event.recipes.gtceu.vorax('vorax_tier_3')
    .perTick(true)
    .inputFluids('gtceu:nickel_plasma 15')
    .inputFluids('gtceu:homeward_resin_plasma 15')
    .perTick(false)
    .duration(20)
    .EUt(-3750000, 64)


  event.recipes.gtceu.combustion_generator("combustion_source_fuel")
    .inputFluids("gtceu:source_enhanced_bio_fuel 1")
    .duration(15)
    .EUt(-32);

  event.remove({ id: 'gtceu:combustion_generator/naphtha' })
  //TODO : CINDER FUEL 

  //NBZ has power density cut by about 40% 
  //Still insanely strong for the volume and this is a trial run of what CEU's nerfs will look like
  event.remove({ id: 'gtceu:gas_turbine/nitrobenzene' })
  event.recipes.gtceu.combustion_generator('worse_nitrobenzene')
    .inputFluids('gtceu:nitrobenzene 2')
    .duration(25)
    .EUt(-GTValues.V[GTValues.LV])

  // Cinder Fuel Stuff

  event.recipes.gtceu.mixer('frontiers:ember_gas_unrefined')
    .itemInputs('embers:ember_grit')
    .inputFluids('gtceu:naphtha 1500')
    .inputFluids('gtceu:steam 1000')
    .outputFluids('gtceu:inert_cinder_gas 1000')
    .duration(40)
    .EUt(GTValues.VH[GTValues.LV]);

  event.recipes.gtceu.dawn_forge('frontiers:ember_pellets')
    .itemInputs('embers:ember_crystal', 'embers:ember_crystal', 'embers:ember_crystal', 'embers:ember_crystal')
    .itemOutputs('16x kubejs:cinder_gas_pellets')
    .emberInput(250)
    .duration(40)
    .EUt(GTValues.VH[GTValues.LV]);

  event.recipes.gtceu.arc_furnace('frontiers:cinder_gas')
    .itemInputs('kubejs:cinder_fuel_pellets')
    .inputFluids('gtceu:inert_cinder_gas 1000')
    .outputFluids('gtceu:cinder_gas 1250')
    .duration(160)
    .EUt(GTValues.VH[GTValues.LV]);

  event.recipes.gtceu.gas_turbine('frontiers:ember_gas_basic')
    .inputFluids('gtceu:cinder_gas 1')
    .duration(11)
    .EUt(-GTValues.V[GTValues.LV])

  event.recipes.gtceu.gas_turbine('frontiers:ember_gas_good')
    .inputFluids('gtceu:awakened_cinder_gas 1')
    .duration(20)
    .EUt(-GTValues.V[GTValues.LV])

  //Awakened Cinder Gas (Uses Ember, quite a bit)

  // Dilute HCl + Infernal spirit + 'create:cinder_flour' -> Infernal Rosin Emulsion 

  // Infernal Rosin Emulsion -> Infernal Yeast Solution + Dilute HCL (loopps)

  // Infernal Yeast Solution + Cinder Fuel + Refinery Gas - Awakened Cinder Gas


  event.recipes.gtceu.brewery('frontiers:cinder_emulsion')
    .itemInputs('4x create:cinder_flour')
    .inputFluids('gtceu:diluted_hydrochloric_acid 1000')
    .outputFluids('gtceu:infernal_rosin_emulsion 2000')
    .duration(160)
    .EUt(GTValues.VH[GTValues.LV]);

  event.recipes.gtceu.centrifuge('frontiers:yeast_solution')
    .inputFluids('gtceu:infernal_rosin_emulsion 1000')
    .outputFluids('gtceu:infernal_yeast_froth 500')
    .outputFluids('gtceu:diluted_hydrochloric_acid 500')
    .duration(320)
    .EUt(GTValues.VH[GTValues.MV]);

  event.recipes.gtceu.chemical_reactor('frontiers:awakened_cinder_gas')
    .itemInputs('cosmiccore:tiny_moondrop_dust')
    .inputFluids('gtceu:infernal_yeast_froth 250')
    .inputFluids('gtceu:refinery_gas 500')
    .inputFluids('gtceu:cinder_gas 5000')
    .outputFluids('gtceu:awakened_cinder_gas 5000')
    .duration(80)
    .EUt(GTValues.VH[GTValues.MV]);




  // Pure Cinder Gas (Uses a LOT of Ember)

  //Tears of the Sky + Ammonium Aerocloud Solution -> Heavy Aerocloud Seltzer

  // Heavy Aerocloud Seltzer + Toulene + Infernal Yeast Solution +(EMBER)-> Smoldering Cinder Yeast Solution

  // Smoldering Cinder Yeast Sol. + Awakened Cinder Gas -> Pure Cinder Gas.






})




