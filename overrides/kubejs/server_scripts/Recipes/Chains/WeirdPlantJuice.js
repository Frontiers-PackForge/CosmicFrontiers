ServerEvents.recipes(event => {

    // .inputFluids('gtceu:source_oils 100')
    // .itemOutputs('2x skilltree:wisdom_scroll')


    event.recipes.gtceu.distillation_tower('swamp_filtering')
        .inputFluids('gtceu:swamp_sediment 500') //Pumped Directly in the undergarden
        .outputFluids('gtceu:rotten_sediment 175') //Done Rotten -> Silt - Output requires a bit extra processing but gains more silt and lakewater
        .outputFluids('gtceu:pungent_sediment 100') // Pugent -> Sludge - Gives you the funny DT fluid, and more silt slurry
        .outputFluids('gtceu:lake_water 500') // For Future Processing - Eject ALL WATER as lake water - For Nutrient Solution Creation
        .outputFluids('gtceu:undergarden_sludge 100') // For DT'ing, Gives a wild amount of random stuff, as well as fermented biomass
        .outputFluids('gtceu:silt_slurry 250') // For Processing in Hell to produce luminent monosilicon
        .dimension('undergarden:undergarden') // Lock the entire chain to Undergarden, require an outpost base
        .duration(40)
        .EUt(GTValues.VA[GTValues.EV]);

    // PROCESSING SEDIMENTS

    event.recipes.gtceu.leaching_plant('rot_sed_leach')
        .inputFluids('gtceu:rotten_sediment 1000')
        .inputFluids('minecraft:water 2000')
        .outputFluids('gtceu:lake_water 750')
        .outputFluids('gtceu:silt_slurry 150')
        .itemOutputs('3x gtceu:bio_chaff')
        .dimension('undergarden:undergarden')
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.leaching_plant('pung_sed_leach')
        .inputFluids('gtceu:pungent_sediment 1000')
        .inputFluids('minecraft:water 2000')
        .outputFluids('gtceu:undergarden_sludge 750')
        .outputFluids('gtceu:silt_slurry 300')
        .itemOutputs('6x gtceu:bio_chaff')
        .dimension('undergarden:undergarden')
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV]);


    event.recipes.gtceu.arboreal_growth_facility('bloody_mushroom_growing')
        .notConsumable('undergarden:blood_mushroom')
        .inputFluids('gtceu:nutrient_solution 500')
        .inputFluids('gtceu:sulfur_trioxide 500')
        .outputFluids('gtceu:fungal_nutrient_waste 1000')
        .itemOutputs('32x undergarden:blood_mushroom_cap')
        .itemOutputs('32x undergarden:blood_mushroom_stem')
        .itemOutputs('24x undergarden:blood_globule')
        .itemOutputs('16x undergarden:engorged_blood_mushroom_cap')
        .dimension('undergarden:undergarden')
        .duration(600)
        .EUt(GTValues.VA[GTValues.IV]);


    event.recipes.gtceu.fluid_heater('lake_to_rich_lake')
        .inputFluids('gtceu:lake_water 1000')
        .outputFluids('gtceu:cultured_lake_water 1000')
        .dimension('undergarden:undergarden')
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.brewery('rich_lake_to_plant_juice_one')
        .inputFluids('gtceu:lake_water 8000')
        .itemInputs('2x gtceu:apatite_dust')
        .outputFluids('gtceu:nutrient_solution_base 4000')
        .dimension('undergarden:undergarden')
        .duration(250)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.brewery('juice_one_juice_two')
        .inputFluids('gtceu:nutrient_solution_base 1000')
        .itemInputs('4x gtceu:bio_chaff')
        .outputFluids('gtceu:nutrient_solution 1000')
        .dimension('undergarden:undergarden')
        .duration(250)
        .EUt(GTValues.VA[GTValues.EV]);

    //SILT PROCESSING PREP

    event.recipes.gtceu.brewery('silt_drying')
        .inputFluids('gtceu:silt_slurry 1000')
        .outputFluids('gtceu:silt_slurry 300')
        .dimension('undergarden:undergarden')
        .duration(250)
        .EUt(GTValues.VA[GTValues.EV]);

})