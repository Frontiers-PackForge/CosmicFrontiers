//A Simple "REMOVE AND HIDE" function akin to GroovyScript's Jei.yeet() function - This will tag the item for hiding from recipe viewers and remove the recipe
//This one also has a tag removal function to remove the forge:tools/knives tag from what is removed so bear that in mind if you copy/paste this around
let yeet = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: itemName })
  })

}


ServerEvents.recipes(event => {
  event.remove({ id: 'gtceu:large_boiler/minecraft_lava' })


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
  event.recipes.gtceu.gas_turbine('worse_nitrobenzene')
    .inputFluids('gtceu:nitrobenzene 2')
    .duration(25)
    .EUt(-GTValues.V[GTValues.LV])
  event.remove({ id: 'gtceu:gas_turbine/benzene' })

  event.recipes.gtceu.gas_turbine('worse_benzene')
    .inputFluids('gtceu:benzene 2')
    .duration(11)
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

  event.recipes.gtceu.steam_turbine('frontiers:steam_mk2')
    .inputFluids('gtceu:smoldering_steam 96')
    .duration(10)
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



  event.recipes.gtceu.pyrothermic_refinery('frontiers:smoldering_steam_1')
    .circuit(1)
    .emberInput(250)
    .perTick(true)
    .inputFluids('gtceu:steam 1800')
    .outputFluids('gtceu:smoldering_steam 360')
    .perTick(false)
    .duration(200)
    .EUt(GTValues.VH[GTValues.MV]);

  event.recipes.gtceu.pyrothermic_refinery('frontiers:smoldering_steam_2')
    .circuit(2)
    .emberInput(375)
    .perTick(true)
    .inputFluids('gtceu:steam 3600')
    .outputFluids('gtceu:smoldering_steam 720')
    .perTick(false)
    .duration(200)
    .EUt(GTValues.VH[GTValues.MV]);

  event.recipes.gtceu.pyrothermic_refinery('frontiers:smoldering_steam_3')
    .circuit(3)
    .emberInput(500)
    .perTick(true)
    .inputFluids('gtceu:steam 5400')
    .outputFluids('gtceu:smoldering_steam 1080')
    .perTick(false)
    .duration(200)
    .EUt(GTValues.VH[GTValues.MV]);

  event.recipes.gtceu.pyrothermic_refinery('frontiers:smoldering_steam_4')
    .circuit(4)
    .emberInput(625)
    .perTick(true)
    .inputFluids('gtceu:steam 7200')
    .outputFluids('gtceu:smoldering_steam 1440')
    .perTick(false)
    .duration(200)
    .EUt(GTValues.VH[GTValues.MV]);

  event.recipes.gtceu.pyrothermic_refinery('frontiers:smoldering_steam_5')
    .circuit(5)
    .emberInput(750)
    .perTick(true)
    .inputFluids('gtceu:steam 9000')
    .outputFluids('gtceu:smoldering_steam 1800')
    .perTick(false)
    .duration(200)
    .EUt(GTValues.VH[GTValues.MV]);

  event.recipes.gtceu.pyrothermic_refinery('frontiers:smoldering_steam_6')
    .circuit(6)
    .emberInput(875)
    .perTick(true)
    .inputFluids('gtceu:steam 10800')
    .outputFluids('gtceu:smoldering_steam 2160')
    .perTick(false)
    .duration(200)
    .EUt(GTValues.VH[GTValues.MV]);

  event.recipes.gtceu.pyrothermic_refinery('frontiers:smoldering_steam_7')
    .circuit(7)
    .emberInput(1000)
    .perTick(true)
    .inputFluids('gtceu:steam 12600')
    .outputFluids('gtceu:smoldering_steam 2520')
    .perTick(false)
    .duration(200)
    .EUt(GTValues.VH[GTValues.MV]);

  event.recipes.gtceu.pyrothermic_refinery('frontiers:smoldering_steam_8')
    .circuit(8)
    .emberInput(1125)
    .perTick(true)
    .inputFluids('gtceu:steam 14400')
    .outputFluids('gtceu:smoldering_steam 2880')
    .perTick(false)
    .duration(200)
    .EUt(GTValues.VH[GTValues.MV]);

  event.recipes.gtceu.pyrothermic_refinery('frontiers:smoldering_steam_9')
    .circuit(9)
    .emberInput(1250)
    .perTick(true)
    .inputFluids('gtceu:steam 16200')
    .outputFluids('gtceu:smoldering_steam 3240')
    .perTick(false)
    .duration(200)
    .EUt(GTValues.VH[GTValues.MV]);

  event.recipes.gtceu.pyrothermic_refinery('frontiers:smoldering_steam_10')
    .circuit(10)
    .emberInput(1375)
    .perTick(true)
    .inputFluids('gtceu:steam 18000')
    .outputFluids('gtceu:smoldering_steam 3600')
    .perTick(false)
    .duration(200)
    .EUt(GTValues.VH[GTValues.MV]);

  event.recipes.gtceu.pyrothermic_refinery('frontiers:smoldering_steam_11')
    .circuit(11)
    .emberInput(1500)
    .perTick(true)
    .inputFluids('gtceu:steam 19800')
    .outputFluids('gtceu:smoldering_steam 3960')
    .perTick(false)
    .duration(200)
    .EUt(GTValues.VH[GTValues.MV]);

  event.recipes.gtceu.pyrothermic_refinery('frontiers:smoldering_steam_12')
    .circuit(12)
    .emberInput(1625)
    .perTick(true)
    .inputFluids('gtceu:steam 21600')
    .outputFluids('gtceu:smoldering_steam 4320')
    .perTick(false)
    .duration(200)
    .EUt(GTValues.VH[GTValues.MV]);

  event.recipes.gtceu.pyrothermic_refinery('frontiers:smoldering_steam_13')
    .circuit(13)
    .emberInput(1750)
    .perTick(true)
    .inputFluids('gtceu:steam 23400')
    .outputFluids('gtceu:smoldering_steam 4680')
    .perTick(false)
    .duration(200)
    .EUt(GTValues.VH[GTValues.MV]);

  event.recipes.gtceu.pyrothermic_refinery('frontiers:smoldering_steam_14')
    .circuit(14)
    .emberInput(1875)
    .perTick(true)
    .inputFluids('gtceu:steam 25200')
    .outputFluids('gtceu:smoldering_steam 5040')
    .perTick(false)
    .duration(200)
    .EUt(GTValues.VH[GTValues.MV]);

  event.recipes.gtceu.pyrothermic_refinery('frontiers:smoldering_steam_15')
    .circuit(15)
    .emberInput(2000)
    .perTick(true)
    .inputFluids('gtceu:steam 27000')
    .outputFluids('gtceu:smoldering_steam 5400')
    .perTick(false)
    .duration(200)
    .EUt(GTValues.VH[GTValues.MV]);

  event.recipes.gtceu.pyrothermic_refinery('frontiers:smoldering_steam_16')
    .circuit(16)
    .emberInput(2125)
    .perTick(true)
    .inputFluids('gtceu:steam 28800')
    .outputFluids('gtceu:smoldering_steam 5760')
    .perTick(false)
    .duration(200)
    .EUt(GTValues.VH[GTValues.MV]);



  // Pure Cinder Gas (Uses a LOT of Ember)

  //Tears of the Sky + Ammonium Aerocloud Solution -> Heavy Aerocloud Seltzer

  // Heavy Aerocloud Seltzer + Toulene + Infernal Yeast Solution +(EMBER)-> Smoldering Cinder Yeast Solution

  // Smoldering Cinder Yeast Sol. + Awakened Cinder Gas -> Pure Cinder Gas.






})




