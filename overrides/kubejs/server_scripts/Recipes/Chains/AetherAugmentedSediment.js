ServerEvents.recipes(event => {

    event.recipes.gtceu.gas_collector('aether_air_collection')
        .outputFluids('gtceu:aether_air 10000')
        .duration(200)
        .circuit(4)
        .dimension('aether:the_aether')
        .EUt(GTValues.VA[GTValues.HV]);
    //Liquid Aether Air
    event.recipes.gtceu.vacuum_freezer('aether_air_condensing')
        .inputFluids('gtceu:aether_air 4000')
        .outputFluids('gtceu:liquid_aether_air 4000')
        .duration(80)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.distillation_tower('aether_air_distillation') 
        .inputFluids('gtceu:liquid_aether_air 50000')
        .outputFluids('gtceu:nitrogen 15000')
        .outputFluids('gtceu:tears_of_the_sky 11000')
        .outputFluids('gtceu:ammonia_rich_aerocloud_solution 6000')
        .outputFluids('gtceu:carbon_dioxide 5000')
        .outputFluids('gtceu:oxygen 5000')
        .outputFluids('gtceu:thundering_aerocloud_solution 4000')
        .outputFluids('gtceu:argon 2000')
        .duration(80)
        .EUt(GTValues.VA[GTValues.HV]);

})