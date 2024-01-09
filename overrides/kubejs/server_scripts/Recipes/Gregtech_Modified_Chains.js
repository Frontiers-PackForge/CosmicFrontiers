/*
Chromite Line

Auxiliary Recipe 1 : EBF @ MV 60s
10 Alumina + 3 Carbon => 4 Aluminium Ingots + 3000L of Carbon Dioxide

Auxiliary Material 1 : Mixer @ LV 3 Seconds
6x Soda Ash + 1000L Water => Sodium Carbonate Solution 1000L

STEP 1 : Chem Reactor @ MV 6 seconds
7 Chromite Dust + 7000L Oxygen + 4000L Sodium Carbonate Solution => 5 Banded Iron Dust + 4000L Carbon Dioxide + 4000L Sodium Chromate Solution

STEP 2 : Chemical Dehydrator @ MV 9 Seconds 
1000L Sulfuric Acid + 2000L Sodium Chromate Solution => 7 Sodium Sulfate + 1000L Sodium Dichromate Solution

STEP 3 : Chemical Dehydrator @ MV 10 Seconds
2 Carbon + 1000L Sodium Dichromate Solution => 6 Soda Ash + 5 Chromium(III) Oxide Dust + 1000L Carbon Monoxide

STEP 4 : EBF @ MV 10 Seconds
5 Chromium(III) Oxide Dust + 2 Aluminium Dust => 2 Chrome Dust + 5 Alumina Dust
*/

ServerEvents.recipes(e => {
    //Removal of Recipes that Violate this chain
    
    e.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_chromite'})
    e.remove({ id : 'gtceu:centrifuge/ruby_slurry_centrifuging'})
    e.remove({ id : 'gtceu:electrolyzer/decomposition_electrolyzing_ruby'})

    //Auxiliary Recipe 1
    e.recipes.gtceu.electric_blast_furnace('gtceu:electric_blast_furnace/alumina_to_aluminum')
    .itemInputs('10x gtceu:alumina_dust')
    .itemInputs('3x gtceu:carbon_dust')
    .itemOutputs('4x gtceu:aluminium_ingot')
    .outputFluids('gtceu:carbon_dioxide 3000')
    .blastFurnaceTemp(1200)
    .duration(1200)
    .EUt(GTValues.VA[GTValues.MV]);
    //Auxiliary Material 1
    e.recipes.gtceu.mixer('gtceu:mixer/sodium_carbonate_solution')
    .itemInputs('6x gtceu:soda_ash_dust')
    .inputFluids('water 1000')
    .outputFluids('gtceu:sodium_carbonate_solution 1000')
    .duration(60)
    .EUt(GTValues.VA[GTValues.LV]);
    //Step 1
    e.recipes.gtceu.chemical_reactor('gtceu:mixer/sodium_chromate_from_sodium_carbonate')
    .itemInputs('7x gtceu:chromite_dust')
    .inputFluids('gtceu:oxygen 7000')
    .inputFluids('gtceu:sodium_carbonate_solution 7000')
    .itemOutputs('5x gtceu:banded_iron_dust')
    .outputFluids('gtceu:carbon_dioxide 4000')
    .outputFluids('gtceu:sodium_chromate_solution 4000')
    .duration(120)
    .EUt(GTValues.VA[GTValues.MV]);
    //Step 2
    e.recipes.gtceu.chemical_dehydrator('gtceu:chemical_dehydrator/sodium_dichromate_from_sodium_chromate')
    .inputFluids('gtceu:sulfuric_acid 1000')
    .inputFluids('gtceu:sodium_chromate_solution 2000')
    .itemOutputs('7x gtceu:sodium_sulfate_dust')
    .outputFluids('gtceu:sodium_dichromate_solution 2000')
    .duration(200)
    .EUt(GTValues.VA[GTValues.MV]);
    e.recipes.gtceu.chemical_dehydrator('gtceu:chemical_dehydrator/chromium_iii_oxide_dust_from_sodium_dichromate')
    .itemInputs('2x gtceu:carbon_dust')
    .inputFluids('gtceu:sodium_dichromate_solution 1000')
    .itemOutputs('6x gtceu:soda_ash_dust')
    .itemOutputs('5x gtceu:chromium_iii_oxide_dust')
    .outputFluids('gtceu:carbon_monoxide 1000')
    .duration(200)
    .EUt(GTValues.VA[GTValues.MV]);
    e.recipes.gtceu.electric_blast_furnace('gtceu:electric_blast_furnace/chrome_from_chromium_3')
    .itemInputs('5x gtceu:chromium_iii_oxide_dust')
    .itemInputs('2x gtceu:aluminium_dust')
    .itemOutputs('2x gtceu:chromium_dust')
    .itemOutputs('5x gtceu:alumina_dust')
    .blastFurnaceTemp(1200)
    .duration(200)
    .EUt(GTValues.VA[GTValues.MV]);
})
