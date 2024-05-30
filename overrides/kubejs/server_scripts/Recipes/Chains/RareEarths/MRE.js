ServerEvents.recipes((event) => {

    // MRE - tier 2
    event.recipes.gtceu.chemical_reactor('mre_hydroxide')
        .inputFluids('gtceu:mre_slag 100')
        .itemInputs('3x gtceu:sodium_hydroxide_dust')
        .itemOutputs('gtceu:mre_hydroxides_dust')
        .itemOutputs('gtceu:sodium_phosphate_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.chemical_dehydrator('mre_oxide')
        .itemInputs('gtceu:mre_hydroxides_dust')
        .itemOutputs('gtceu:mre_oxides_dust')
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.chemical_reactor('mre_chloride')
        .itemInputs('gtceu:mre_oxides_dust')
        .inputFluids('gtceu:hydrochloric_acid 6000')
        .outputFluids('gtceu:mre_chlorides 1000')
        .duration(300)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.mixer('mre_leached_solution')
        .inputFluids('gtceu:mre_chlorides 1000')
        .inputFluids('gtceu:mre_extraction_mix 4000')
        .outputFluids('gtceu:mre_leachate 5000')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.centrifuge('mre_phase_separation')
        .inputFluids('gtceu:mre_leachate 5000')
        .outputFluids('gtceu:diluted_hydrochloric_acid 1000')
        .outputFluids('gtceu:mre_organic_leachate 4000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.chemical_reactor('mre_precipitation')
        .inputFluids('gtceu:mre_organic_leachate 4000')
        .inputFluids('gtceu:sulfuric_acid 1000')
        .itemOutputs('4x gtceu:mre_mixed_dust')
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.centrifuge('mre_dust_separation') // Probs needs rebalancing // Yeah probably -G
        .itemInputs('16x gtceu:mre_mixed_dust')
        .chancedOutput('gtceu:europium_dust', 2500, 750)
        .chancedOutput('gtceu:gadolinium_dust', 2500, 750)
        .chancedOutput('gtceu:terbium_dust', 2500, 750)
        .chancedOutput('2x gtceu:samarium_dust', 6500, 750)
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV]);
        
    // Sodium Phosphate Decomp
    event.recipes.gtceu.electrolyzer('isodecanol_prep')
        .itemInputs('8x gtceu:sodium_phosphate_dust')
        .itemOutputs('5x gtceu:phosphate_dust')
        .itemOutputs('3x gtceu:sodium_dust')
        .duration(40)
        .EUt(GTValues.VA[GTValues.HV]);
})