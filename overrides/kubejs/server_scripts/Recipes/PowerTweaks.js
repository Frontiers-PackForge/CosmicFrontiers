

ServerEvents.recipes(event => {
    //Hard Bans on extremely unbalanced fuels.
    event.remove({ id: 'gtceu:combustion_generator/naphtha' })
    event.remove({ id: 'gtceu:large_boiler/minecraft_lava' })


    //NBZ has power density cut by about 40% 
    //Still insanely strong for the volume and this is a trial run of what CEU's nerfs will look like
    event.remove({ id: 'gtceu:gas_turbine/nitrobenzene' })
    event.remove({ id: 'gtceu:turbine_power_station/nitrobenzene' })
    event.recipes.gtceu.gas_turbine('frontiers:nitrobenzene').inputFluids('2x gtceu:nitrobenzene').duration(25).EUt(-GTValues.V[GTValues.LV])
    event.remove({ id: 'gtceu:gas_turbine/benzene' })
    event.remove({ id: 'gtceu:turbine_power_station/benzene' })

    event.recipes.gtceu.gas_turbine('frontiers:crude_benzene').inputFluids('2x cosmiccore:crude_benzene').duration(11).EUt(-GTValues.V[GTValues.LV])

    //Misc Power Gen Recipes
    event.recipes.gtceu.combustion_generator('frontiers:source_enhanced_bio_fuel').inputFluids("1x gtceu:source_enhanced_bio_fuel").duration(15).EUt(-32);

    event.recipes.gtceu.gas_turbine('frontiers:cinder_gas').inputFluids('16x gtceu:cinder_gas').duration(10).EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.gas_turbine('frontiers:awakened_cinder_gas').inputFluids('8x gtceu:awakened_cinder_gas').duration(20).EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.steam_turbine('frontiers:smoldering_steam').inputFluids('20x gtceu:smoldering_steam').duration(10).EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.steam_turbine('frontiers:high_pressure_steam').inputFluids('80x cosmiccore:high_pressure_steam').outputFluids('4x gtceu:distilled_water').duration(10).EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.steam_turbine('frontiers:super_critical_steam').inputFluids('12x gtceu:super_critical_steam').duration(10).EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.steam_turbine('frontiers:ashdew_steam').inputFluids('1x gtceu:ashdew_steam').duration(60).EUt(-GTValues.V[GTValues.LV])


    //Cinder Gas
    event.recipes.cosmiccore.dawn_forge('frontiers:ember_pellets').itemInputs('embers:ember_crystal', 'embers:ember_crystal', 'embers:ember_crystal', 'embers:ember_crystal').itemOutputs('16x cosmiccore:cinder_fuel_pellets').input('cosmiccore:ember', 250).duration(40).circuit(1).EUt(GTValues.V[GTValues.LV], 2);

    event.recipes.gtceu.arc_furnace('frontiers:cinder_gas').itemInputs('cosmiccore:cinder_fuel_pellets').inputFluids('1000x gtceu:inert_cinder_gas').outputFluids('4000x gtceu:cinder_gas').duration(160).EUt(GTValues.V[GTValues.LV], 8);
    //Awakeened Cinder Gas Production    
    event.recipes.gtceu.brewery('frontiers:infernal_rosin_emulsion').itemInputs('mynethersdelight:bullet_pepper').inputFluids('1000x gtceu:diluted_hydrochloric_acid').outputFluids('2000x gtceu:infernal_rosin_emulsion').duration(160).EUt(GTValues.V[GTValues.LV], 4);

    event.recipes.gtceu.chemical_reactor('frontiers:awakened_cinder_gas').inputFluids('250x gtceu:infernal_rosin_emulsion').inputFluids('1000x gtceu:cinder_gas').outputFluids('1000x gtceu:awakened_cinder_gas').duration(40).EUt(GTValues.V[GTValues.MV], 2);

    event.recipes.gtceu.gas_turbine('frontiers:natural_gas').inputFluids('8x gtceu:natural_gas').duration(5).EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.combustion_generator('frontiers:middle_fraction_distillates').inputFluids('1x gtceu:middle_fraction_distillates').duration(10).EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.gas_turbine('frontiers:tail_gas').inputFluids('20x cosmiccore:tail_gas').duration(2).EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.combustion_generator('frontiers:light_oil').inputFluids('32x gtceu:light_oil').duration(5).EUt(-32)

    event.recipes.gtceu.gas_turbine('frontiers:wood_gas').inputFluids('8x gtceu:wood_gas').duration(6).EUt(-32)

    event.recipes.gtceu.gas_turbine('frontiers:refinery_gas').inputFluids('1x gtceu:refinery_gas').duration(5).EUt(-32)
})


