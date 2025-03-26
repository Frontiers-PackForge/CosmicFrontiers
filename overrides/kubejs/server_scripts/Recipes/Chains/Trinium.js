ServerEvents.recipes(event => {
    event.recipes.gtceu.chemical_reactor('trinium_metallic_decomp')
    .itemInputs('6x gtceu:trinium_metallic_dust')
    .inputFluids('gtceu:fluoroantimonic_acid 1000')
    .inputFluids('gtceu:aqua_regia 3000')
    .outputFluids('gtceu:trinium_calx_solution 2000')
    .outputFluids('gtceu:vitrolic_slurry 1000')
    .duration(300)
    .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.chemical_reactor('trinium_calx_refinement')
    .inputFluids('gtceu:trinium_calx_solution 3000')
    .inputFluids('gtceu:sodium_carbonate_solution 2000')
    .itemOutputs('2x gtceu:trinium_oxide_dust')
    .outputFluids('gtceu:trinium_waste 2000')
    .duration(600)
    .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.electrolyzer('trinium_oxide_electrolysis')
    .itemInputs('2x gtceu:trinium_oxide_dust')
    .itemOutputs('1x gtceu:trinium_dust')
    .outputFluids('gtceu:oxygen 1000')
    .duration(500)
    .EUt(GTValues.VA[GTValues.LuV]);

    //Vitrolic Slurry
    event.recipes.gtceu.centrifuge('vitrolic_slurry_centrifuge')
    .inputFluids('gtceu:vitrolic_slurry 3000')
    .chancedOutput('1x gtceu:terbium_dust', 5000, 500)
    .outputFluids('gtceu:fluorine 2500')
    .duration(500)
    .EUt(GTValues.VA[GTValues.LuV])

    //Waste 1
    event.recipes.gtceu.distillation_tower('trinium_waste_distillation')
    .disableDistilleryRecipes(true)
    .inputFluids('gtceu:trinium_waste 4000')
    .outputFluids('gtceu:chlorine 3000')
    .outputFluids('gtceu:nitrogen_dioxide 1000')
    .duration(200)
    .EUt(GTValues.VA[GTValues.ZPM])
})