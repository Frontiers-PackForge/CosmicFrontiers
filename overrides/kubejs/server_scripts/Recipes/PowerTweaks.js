

ServerEvents.recipes(event => {
    //Hard Bans on extremely unbalanced fuels.
    event.remove({ id: 'gtceu:combustion_generator/naphtha' })
    event.remove({ id: 'gtceu:large_boiler/minecraft_lava' })


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

    //Misc Power Gen Recipes
    event.recipes.gtceu.combustion_generator("combustion_source_fuel")
        .inputFluids("gtceu:source_enhanced_bio_fuel 1")
        .duration(15)
        .EUt(-32);

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

    event.recipes.gtceu.steam_turbine('frontiers:steam_mk3')
        .inputFluids('gtceu:super_critical_steam 12')
        .duration(10)
        .EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.steam_turbine('frontiers:steam_mk4')
        .inputFluids('gtceu:ashdew_steam 1')
        .duration(60)
        .EUt(-GTValues.V[GTValues.LV])


    //Cinder Gas
    event.recipes.gtceu.mixer('frontiers:ember_gas_unrefined')
        .itemInputs('embers:ember_grit')
        .inputFluids('gtceu:naphtha 750')
        .inputFluids('gtceu:steam 250')
        .outputFluids('gtceu:inert_cinder_gas 1000')
        .duration(40)
        .EUt(GTValues.VH[GTValues.LV]);

    event.recipes.cosmiccore.dawn_forge('frontiers:ember_pellets')
        .itemInputs('embers:ember_crystal', 'embers:ember_crystal', 'embers:ember_crystal', 'embers:ember_crystal')
        .itemOutputs('16x cosmiccore:cinder_fuel_pellets')
        .input('cosmiccore:ember', 250)
        .duration(40)
        .circuit(1)
        .EUt(GTValues.VH[GTValues.LV]);

    event.recipes.gtceu.arc_furnace('frontiers:cinder_gas')
        .itemInputs('cosmiccore:cinder_fuel_pellets')
        .inputFluids('gtceu:inert_cinder_gas 1000')
        .outputFluids('gtceu:cinder_gas 4000')
        .duration(160)
        .EUt(GTValues.VH[GTValues.LV]);
    //Awakeened Cinder Gas Production    
    event.recipes.gtceu.brewery('frontiers:cinder_emulsion')
        .itemInputs('mynethersdelight:bullet_pepper')
        .inputFluids('gtceu:diluted_hydrochloric_acid 1000')
        .outputFluids('gtceu:infernal_rosin_emulsion 2000')
        .duration(160)
        .EUt(GTValues.VH[GTValues.LV]);

    event.recipes.gtceu.chemical_reactor('frontiers:awakened_cinder_gas')
        .inputFluids('gtceu:infernal_rosin_emulsion 250')
        .inputFluids('gtceu:cinder_gas 1000')
        .outputFluids('gtceu:awakened_cinder_gas 1000')
        .duration(40)
        .EUt(GTValues.VH[GTValues.MV]);


})


