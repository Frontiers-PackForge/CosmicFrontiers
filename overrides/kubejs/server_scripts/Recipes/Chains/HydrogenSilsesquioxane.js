// HSQ NEW
// Step 1 :
// //Si + 3 HCl → HCl3Si + H2
// 1 Silicon Dust + 3000 Hydrochloric Acid => 1000 Trichlorosilane + 2000 Hydrogen  
// //8 HSiCl3 + 12 H2O + H2SO4 (NC) → [HSiO3/2]8 + 24 HCl
// Step 2 : 
// 8000 TriChloroSilate + 12B Water + 1B Sulfuric Acid (NC) => HydrogenSilesquioxane + 24B Hydrochloric Acid


ServerEvents.recipes(event => {
    event.recipes.gtceu.chemical_reactor('trichlorosilane_synth')
        .itemInputs('1x gtceu:silicon_dust')
        .inputFluids('gtceu:hydrochloric_acid 3000')
        .outputFluids('gtceu:trichlorosilane 1000')
        .outputFluids('gtceu:hydrogen 2000')
        .duration(240)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_reactor('hsq_synth')
        .notConsumableFluid('gtceu:sulfuric_acid 500')
        // Please Hound Someone to Fix this not working using a 0% chanced fluid seems super cursed and useless fluff
        // .notConsumable(Fluid.of('gtceu:sulfuric_acid', 1000))
        .inputFluids('gtceu:trichlorosilane 4000')
        .inputFluids('minecraft:water 6000')
        .outputFluids('gtceu:hydrogensilesquioxane 500')
        .outputFluids('gtceu:hydrochloric_acid 12000')
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV]);
})