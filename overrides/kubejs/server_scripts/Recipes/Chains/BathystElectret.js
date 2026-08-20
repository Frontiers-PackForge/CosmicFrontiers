ServerEvents.recipes(event => {
    // BaTiO3 + C20H30O2 + C18H27NO3 -> BaTiC38H57NO8 (composite mixing)
    event.recipes.gtceu.mixer('frontiers:bathyst_electret_compound_dust')
        .itemInputs('cosmiccore:bathyst_dust')
        .inputFluids(['1000x gtceu:soulresin', '1000x gtceu:cinderwax'])
        .itemOutputs('3x gtceu:bathyst_electret_compound_dust')
        .duration(200)
        .EUt(GTValues.V[GTValues.LV], 2)

})
