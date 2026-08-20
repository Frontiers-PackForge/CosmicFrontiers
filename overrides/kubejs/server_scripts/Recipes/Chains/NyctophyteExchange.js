ServerEvents.recipes(event => {
    // Ca(C8H10NO6S)2 + 2NaOH + 2H2O -> 2NaC8H10NO6S(H2O) + Ca(OH)2
    event.recipes.gtceu.chemical_reactor('frontiers:calcium_hydroxide_dust')
        .itemInputs(['3x cosmiccore:nyctophyte_dust', '6x gtceu:sodium_hydroxide_dust'])
        .inputFluids('2000x gtceu:distilled_water')
        .itemOutputs('5x gtceu:calcium_hydroxide_dust')
        .outputFluids('2000x gtceu:alkaline_nyctophyte_extract')
        .duration(300)
        .EUt(GTValues.V[GTValues.MV], 4)

    // NaC8H10NO6S(H2O) + HCl -> C8H11NO6S + NaCl + H2O
    event.recipes.cosmiccore.chemical_dehydrator('frontiers:chains/nyctophyte_exchange/chelant_neutralization')
        .notConsumableItem('cosmiccore:utherium_ceramic_liner')
        .inputFluids(['1000x gtceu:alkaline_nyctophyte_extract', '1000x gtceu:hydrochloric_acid'])
        .itemOutputs('2x gtceu:salt_dust')
        .outputFluids('1000x gtceu:nyctophytic_chelant')
        .duration(240)
        .EUt(GTValues.V[GTValues.MV], 8)

})
