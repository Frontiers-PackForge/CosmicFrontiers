/*
TerraSteel Chain

  CATALYST @ MV CHEM REACTOR
  4 Ambrosium Dust + 4 Zanite Dust + 4 ALuminium Dust + 2000L Sodium Carbonate => 12x Zano Aluminate
 
  STEP 1 @ MIXER MV 15S
  2 Mana Diamond + 2 Mana Pearl + 2x Mana Powder+ 1000L of Sulfuric Acid => 2000L Raw Mana Crystal Slurry
  
  STEP 2 @ MIXER MV 20S
  2000L Raw Mana Crystal Slurry + 2000L Hydrochloric Acid = 4000L Prepared Terrasteel

  STEP 3  @ CHEM REACTOR MV 30S
  4000L Prepared TerraSteel + 4000L Potent Mana + 24 Zanalate Compound (NC)= 8000L of Unstable Terrasteel
   
  STEP 4 CHEMICAL DEHYDRATOR MV 15S
  2000L Unstable Terrasteel + 1 Mana Steel Dust = TerraSteel Dust 

  STEP 5 @ EBF HV 120S
  Terrasteel Dust + 1000L Nitrogen Gas = Terrasteel ingot
*/
ServerEvents.recipes(event => {
    event.remove({ input: 'gtceu:manasteel_dust' })
    event.recipes.gtceu.chemical_reactor('gtceu:mixer/zano_aluminate_creation')
        .itemInputs(['4x gtceu:zanite_dust', '4x gtceu:ambrosium_dust'])
        .inputFluids('gtceu:aluminium 576')
        .itemOutputs('12x gtceu:zano_aluminate_dust')
        .duration(390)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.mixer('gtceu:mixer/raw_mana_crystal_slurry')
        .itemInputs(['2x botania:mana_pearl', '2x botania:mana_diamond', '2x botania:mana_powder'])
        .inputFluids('gtceu:sulfuric_acid 1000')
        .outputFluids('gtceu:raw_mana_crystal_slurry 2000')
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.mixer('gtceu:mixer/prepared_terrasteel')
        .inputFluids('gtceu:raw_mana_crystal_slurry 2000')
        .inputFluids('gtceu:hydrochloric_acid 2000')
        .outputFluids('gtceu:prepared_terrasteel 4000')
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.chemical_reactor('gtceu:chemical_reactor/unstable_terrasteel')
        .inputFluids(['gtceu:prepared_terrasteel 4000', 'gtceu:potent_mana 4000'])
        .notConsumable('48x gtceu:zano_aluminate_dust')
        .outputFluids('gtceu:unstable_terrasteel 8000')
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.chemical_dehydrator('gtceu:chemical_dehydrator/terrasteel_dust')
        .itemInputs('gtceu:manasteel_dust')
        .inputFluids('gtceu:unstable_terrasteel 2000')
        .itemOutputs('gtceu:terrasteel_dust')
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.electric_blast_furnace('gtceu:ebf/terrasteel_ingot_recipe')
        .itemInputs('gtceu:terrasteel_dust')
        .inputFluids('gtceu:potent_mana 1000')
        .itemOutputs('botania:terrasteel_ingot')
        .blastFurnaceTemp(1800)
        .duration(2400)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.electric_blast_furnace('manasteel_ebf_return_recipe')
        .itemInputs('gtceu:manasteel_dust')
        .circuit(1)
        .itemOutputs('botania:manasteel_ingot')
        .blastFurnaceTemp(1800)
        .duration(660)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.electric_blast_furnace('manasteel_ebf_return_recipe_boosted')
        .itemInputs('gtceu:manasteel_dust')
        .inputFluids('gtceu:nitrogen 1000')
        .circuit(2)
        .itemOutputs('botania:manasteel_ingot')
        .blastFurnaceTemp(1800)
        .duration(440)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.electric_blast_furnace('gtceu:ebf/ethersteel_ingot_recipe')
        .itemInputs(['4x gtceu:stainless_steel_ingot', '2x botania:terrasteel_ingot', '4x gtceu:zano_aluminate_dust'])
        .inputFluids('gtceu:nitrogen 1000')
        .itemOutputs(['8x gtceu:galvanized_ethersteel_ingot', '5x gtceu:alumina_dust', '2x gtceu:electrum_ingot'])
        .blastFurnaceTemp(2000)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.HV]);
})