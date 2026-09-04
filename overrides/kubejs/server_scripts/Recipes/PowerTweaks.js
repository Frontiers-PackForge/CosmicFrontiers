

ServerEvents.recipes(event => {
    //Hard Bans on extremely unbalanced fuels.
    event.remove({ id: 'gtceu:combustion_generator/naphtha' })
    event.remove({ id: 'gtceu:large_boiler/minecraft_lava' })


    event.remove({ id: 'gtceu:gas_turbine/nitrobenzene' })
    event.remove({ id: 'gtceu:turbine_power_station/nitrobenzene' })
    event.recipes.gtceu.gas_turbine('frontiers:nitrobenzene').inputFluids('1x gtceu:nitrobenzene').duration(90).EUt(-GTValues.V[GTValues.LV])
    event.remove({ id: 'gtceu:gas_turbine/benzene' })
    event.remove({ id: 'gtceu:turbine_power_station/benzene' })
    event.recipes.gtceu.gas_turbine('frontiers:benzene').inputFluids('2x gtceu:benzene').duration(75).EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.gas_turbine('frontiers:crude_benzene').inputFluids('1x cosmiccore:crude_benzene').duration(25).EUt(-GTValues.V[GTValues.LV])

    event.remove({ id: 'gtceu:combustion_generator/biodiesel' })
    event.remove({ id: 'gtceu:combustion_power_station/biodiesel' })
    event.recipes.gtceu.combustion_generator('frontiers:biodiesel').inputFluids('1x gtceu:bio_diesel').duration(30).EUt(-GTValues.V[GTValues.LV])

    event.remove({ id: 'gtceu:combustion_generator/diesel' })
    event.remove({ id: 'gtceu:combustion_power_station/diesel' })
    event.recipes.gtceu.combustion_generator('frontiers:diesel').inputFluids('1x gtceu:diesel').duration(45).EUt(-GTValues.V[GTValues.LV])

    event.remove({ id: 'gtceu:combustion_generator/cetane_diesel' })
    event.remove({ id: 'gtceu:combustion_power_station/cetane_diesel' })
    event.recipes.gtceu.combustion_generator('frontiers:cetane_diesel').inputFluids('2x gtceu:cetane_boosted_diesel').duration(135).EUt(-GTValues.V[GTValues.LV])

    event.remove({ id: 'gtceu:combustion_generator/gasoline' })
    event.remove({ id: 'gtceu:combustion_power_station/gasoline' })
    event.recipes.gtceu.combustion_generator('frontiers:gasoline').inputFluids('1x gtceu:gasoline').duration(75).EUt(-GTValues.V[GTValues.LV])

    //Misc Power Gen Recipes
    event.recipes.gtceu.combustion_generator('frontiers:source_enhanced_bio_fuel').inputFluids("1x gtceu:source_enhanced_bio_fuel").duration(60).EUt(-32);

    event.recipes.gtceu.gas_turbine('frontiers:cinder_gas').inputFluids('1x gtceu:cinder_gas').duration(20).EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.gas_turbine('frontiers:awakened_cinder_gas').inputFluids('1x gtceu:awakened_cinder_gas').duration(50).EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.steam_turbine('frontiers:smoldering_steam').inputFluids('20x gtceu:smoldering_steam').duration(10).EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.steam_turbine('frontiers:high_pressure_steam').inputFluids('80x cosmiccore:high_pressure_steam').outputFluids('4x gtceu:distilled_water').duration(10).EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.steam_turbine('frontiers:super_critical_steam').inputFluids('12x gtceu:super_critical_steam').duration(10).EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.steam_turbine('frontiers:ashdew_steam').inputFluids('1x gtceu:ashdew_steam').duration(60).EUt(-GTValues.V[GTValues.LV])


    //Cinder Gas
    event.recipes.cosmiccore.dawn_forge('frontiers:ember_pellets').itemInputs('embers:ember_crystal', 'embers:ember_crystal', 'embers:ember_crystal', 'embers:ember_crystal').itemOutputs('16x cosmiccore:cinder_fuel_pellets').input('cosmiccore:ember', 250).duration(40).circuit(1).EUt(GTValues.V[GTValues.LV], 2);

    event.recipes.gtceu.arc_furnace('frontiers:cinder_gas').itemInputs('cosmiccore:cinder_fuel_pellets').inputFluids('32x gtceu:inert_cinder_gas').outputFluids('128x gtceu:cinder_gas').duration(160).EUt(GTValues.V[GTValues.LV], 2);
    //Awakeened Cinder Gas Production    
    event.recipes.gtceu.brewery('frontiers:infernal_rosin_emulsion').itemInputs('mynethersdelight:bullet_pepper').inputFluids('1000x gtceu:diluted_hydrochloric_acid').outputFluids('2000x gtceu:infernal_rosin_emulsion').duration(160).EUt(GTValues.V[GTValues.LV], 4);

    event.recipes.gtceu.chemical_reactor('frontiers:awakened_cinder_gas').inputFluids('16x gtceu:infernal_rosin_emulsion').inputFluids('64x gtceu:cinder_gas').outputFluids('64x gtceu:awakened_cinder_gas').duration(50).EUt(GTValues.V[GTValues.MV], 2);

    event.recipes.gtceu.gas_turbine('frontiers:natural_gas').inputFluids('8x gtceu:natural_gas').duration(5).EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.combustion_generator('frontiers:middle_fraction_distillates').inputFluids('1x gtceu:middle_fraction_distillates').duration(10).EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.gas_turbine('frontiers:tail_gas').inputFluids('20x cosmiccore:tail_gas').duration(2).EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.combustion_generator('frontiers:light_oil').inputFluids('32x gtceu:light_oil').duration(5).EUt(-32)

    event.recipes.gtceu.gas_turbine('frontiers:wood_gas').inputFluids('8x gtceu:wood_gas').duration(6).EUt(-32)

    event.recipes.gtceu.gas_turbine('frontiers:refinery_gas').inputFluids('1x gtceu:refinery_gas').duration(5).EUt(-32)
})


