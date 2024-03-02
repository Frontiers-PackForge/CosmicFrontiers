//Removing Byproducts from particular ore steps
ServerEvents.recipes(event => {
    
    event.recipes.gtceu.chemical_dehydrator('virulent_mixture_sep')
        .itemOutputs('16x gtceu:crushed_nickel_ore')
        .inputFluids('gtceu:nitric_acid 16000')
        .inputFluids('undergarden:virulent_mix_source 4000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);







})