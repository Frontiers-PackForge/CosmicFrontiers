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


//
//TerraSteel Chain
//
//  STEP 1 @ MIXER MV 15S
//  4 Mana Diamond + 4 Mana Pearl + 1000L of Sulfuric Acid => 2000L Raw Mana Crystal Slurry
//  
//  STEP 2 @ MIXER MV 20S
//  2000L Raw Mana Crystal Slurry + 2000L Hydrochloric Acid = 4000L Prepared Terrasteel
//
//  STEP 3  @ CHEM REACTOR MV 30S
//  4000L Prepared TerraSteel + 4000L Potent Mana + 24 Zanalate Compound (NC)= 8000L of Unstable Terrasteel
//   
//  STEP 4 CHEMICAL DEHYDRATOR MV 15S
//  2000L Unstable Terrasteel + 1 Mana Powder = TerraSteel Dust 
//
//  STEP 5 @ EBF HV 120S
//  Terrasteel Dust + 1000L Nitrogen Gas = Terrasteel ingot
//
//
e.recipes.gtceu.chemical_reactor('gtceu:mixer/zanosium_aluminate_creation')
.itemInputs(['4x gtceu:zanite_dust', '4x gtceu:ambrosium_dust', '4x gtceu:aluminium_dust'])
.inputFluids('deep_aether:poison 2000', 'gtceu:sodium_carbonate_solution 2000')
.itemOutputs('12x gtceu:zanosium_aluminate_dust')
.duration(390)
.EUt(GTValues.VA[GTValues.MV]);
e.recipes.gtceu.mixer('gtceu:mixer/raw_mana_crystal_slurry')
.itemInputs(['4x botania:mana_pearl', '4x botania:mana_diamond'])
.inputFluids('gtceu:sulfuric_acid 1000')
.outputFluids('gtceu:raw_mana_crystal_slurry 2000')
.duration(120)
.EUt(GTValues.VA[GTValues.MV]);
e.recipes.gtceu.mixer('gtceu:mixer/prepared_terrasteel')
.inputFluids('gtceu:raw_mana_crystal_slurry 2000')
.inputFluids('gtceu:hydrochloric_acid 2000')
.outputFluids('gtceu:prepared_terrasteel 4000')
.duration(120)
.EUt(GTValues.VA[GTValues.MV]);
e.recipes.gtceu.chemical_reactor('gtceu:chemical_reactor/unstable_terrasteel')
.inputFluids(['gtceu:prepared_terrasteel 4000','gtceu:potent_mana 4000'])
.notConsumable('48x gtceu:zanosium_aluminate_dust')
.outputFluids('gtceu:unstable_terrasteel 8000')
.duration(120)
.EUt(GTValues.VA[GTValues.MV]);
e.recipes.gtceu.chemical_dehydrator('gtceu:chemical_dehydrator/terrasteel_dust')
.itemInputs('botania:mana_powder')
.inputFluids('gtceu:unstable_terrasteel 2000')
.itemOutputs('gtceu:terrasteel_dust')
.duration(120)
.EUt(GTValues.VA[GTValues.MV]);
e.recipes.gtceu.chemical_dehydrator('gtceu:ebf/terrasteel_ingot_recipe')
.itemInputs('gtceu:terrasteel_dust')
.inputFluids('gtceu:nitrogen 1000')
.itemOutputs('botania:terrasteel_ingot')
.duration(2400)
.EUt(GTValues.VA[GTValues.MV]);
})
