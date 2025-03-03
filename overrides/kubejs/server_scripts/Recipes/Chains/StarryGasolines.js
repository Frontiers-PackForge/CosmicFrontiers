ServerEvents.recipes(event => {

    event.recipes.gtceu.large_chemical_reactor('cracking_cbd_to_cracked_cbd')
        .notConsumable('96x gtceu:luminescent_utherium_dust')
        .inputFluids('gtceu:cetane_boosted_diesel 1000')
        .inputFluids('gtceu:ammonia 500')
        .inputFluids('gtceu:hydrogen 500')
        .outputFluids('gtceu:cracked_cetane_boosted_diesel 1000')
        .duration(160)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.mixer('luminite_infusing')
        .itemInputs('2x gtceu:sodium_hydroxide_dust')
        .chancedInput('gtceu:luminite_dust', 6500, 0)
        .inputFluids('gtceu:cracked_cetane_boosted_diesel 8000')
        .inputFluids('gtceu:star_dew 500')
        .outputFluids('gtceu:starry_fuel_mixture 8000')
        .duration(160)
        .EUt(GTValues.VA[GTValues.HV]);
    //This is actual mass multiplication, this is not a bug, I want to give players more yield and potentially more fuel from this line, it'll build back into Nqu later.
    event.recipes.gtceu.large_chemical_reactor('fuel_mix_injection_into_gasoline')
        .itemInputs('4x gtceu:gelled_toluene')
        .inputFluids('gtceu:raw_gasoline 10000')
        .inputFluids('gtceu:starry_fuel_mixture 1000')
        .outputFluids('gtceu:stardust_infused_gasoline 16000')
        .duration(240)
        .EUt(GTValues.VA[GTValues.EV]);


    event.recipes.gtceu.combustion_generator('starry_gasoline')
        .inputFluids('gtceu:stardust_infused_gasoline 1')
        .duration(75)
        .EUt(-GTValues.V[GTValues.LV])

})