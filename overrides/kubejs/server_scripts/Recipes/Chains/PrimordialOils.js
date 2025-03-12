ServerEvents.recipes(event => {

    event.recipes.gtceu.chemical_reactor('prim_oil_one')
        .inputFluids('gtceu:primordial_oil 500')
        .inputFluids('gtceu:aether_air 500')
        .outputFluids('gtceu:lofty_primordial_oil 1000')
        .duration(160)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.distillation_tower('prim_oil_one_distill')
        .inputFluids('gtceu:lofty_primordial_oil 1000')
        .outputFluids('gtceu:star_dew 200')
        .outputFluids('gtceu:ethane 175')
        .outputFluids('gtceu:methane 150')
        .outputFluids('gtceu:helium 125')
        .outputFluids('gtceu:oxygen 150')
        .outputFluids('gtceu:nitrogen 200')
        .duration(90)
        .EUt(GTValues.VA[GTValues.MV]);

})