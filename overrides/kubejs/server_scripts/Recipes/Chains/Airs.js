ServerEvents.recipes(event => {
    //Undergarden Smog
    event.recipes.gtceu.gas_collector('undergarden_smog_collection')
        .outputFluids('gtceu:undergarden_smog 10000')
        .duration(400)
        .circuit(5)
        .dimension('undergarden:undergarden')
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.gas_collector('aether_air_collection_gas')
        .outputFluids('gtceu:aether_air 10000')
        .duration(200)
        .circuit(6)
        .dimension('aether:the_aether')
        .EUt(GTValues.VA[GTValues.HV]);
    //Undergarden Sludge
    event.recipes.gtceu.vacuum_freezer('undergarden_smog_condensing')
        .inputFluids('gtceu:undergarden_smog 4000')
        .outputFluids('gtceu:undergarden_sludge 4000')
        .duration(80)
        .EUt(GTValues.VA[GTValues.EV]);
    //Undergarden Sludge Distillation - An unholy anbomination before god.
    event.recipes.gtceu.distillation_tower('undergarden_sludge_distillation')
        .inputFluids('gtceu:undergarden_sludge 200000')
        .outputFluids('gtceu:fermented_biomass 75000')
        .outputFluids('gtceu:coal_gas 45000')
        .outputFluids('gtceu:natural_gas 20000')
        .outputFluids('gtceu:sulfur_trioxide 30000')
        .outputFluids('gtceu:coal_tar 15000')
        .outputFluids('gtceu:kerosene 15000')
        .duration(4000)
        .EUt(GTValues.VA[GTValues.IV]);
})