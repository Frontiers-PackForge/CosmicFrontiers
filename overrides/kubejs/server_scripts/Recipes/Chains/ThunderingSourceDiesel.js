ServerEvents.recipes(event => {

    event.recipes.gtceu.large_chemical_reactor('thundering_aerocloud_concentrate')
        .notConsumable('48x gtceu:zano_aluminate_dust')
        .chancedFluidInput(Fluid.of('gtceu:ammonia', 2000), 0, 0)
        // Please hound someone to fix this not working natively, using chancedFluid works but it's extra fluff for something that a different function should support
        // .notConsumable(Fluid.of('gtceu:ammonia', 2000))
        .inputFluids('gtceu:thundering_aerocloud_solution 2000')
        .inputFluids('gtceu:toluene 1000')
        .inputFluids('gtceu:refinery_gas 2000')
        .outputFluids('gtceu:thundering_aerocloud_concentration 5000')
        .duration(160)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.large_chemical_reactor('thundering_mana')
        .itemInputs('2x gtceu:sodium_hydroxide')
        .inputFluids('gtceu:thundering_aerocloud_concentration 1000')
        .inputFluids('gtceu:potent_mana 3000')
        .outputFluids('gtceu:thundering_mana 4000')
        .duration(160)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_reactor('thunder_boosted_source_diesel')
        .itemInputs('10x gtceu:gelled_toluene')
        .inputFluids('gtceu:source_enhanced_bio_fuel 20000')
        .inputFluids('gtceu:thundering_mana 1000')
        .outputFluids('gtceu:thunder_boosted_source_diesel 20000')
        .outputFluids('gtceu:potent_mana 750')
        .duration(600)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.combustion_generator('boosted_combustion_source_fuel')
        .inputFluids('gtceu:thunder_boosted_source_diesel 2')
        .duration(45)
        .EUt(-32)
})