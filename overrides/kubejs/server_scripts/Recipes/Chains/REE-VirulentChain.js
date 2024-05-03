//Removing Byproducts from particular ore steps
ServerEvents.recipes((event) => {
    // Oxalic Acid
    event.recipes.gtceu.chemical_reactor('oxalic_acid')
        .inputFluids('gtceu:ethylene 1000')
        .inputFluids('gtceu:oxygen 4000')
        .notConsumable('4x gtceu:potassium_dichromate_dust')
        .outputFluids('gtceu:oxalic_acid 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);

    //Slag separation
    event.recipes.gtceu.centrifuge('cloggurm_mix_spinny')
        .inputFluids('gtceu:undergarden_virulent_cloggrum_mixture 5000')
        .outputFluids('gtceu:xenotime_slag 500')
        .outputFluids('gtceu:hydrofluoric_acid 4500')
        .duration(600)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.centrifuge('xeno_spinny')
        .inputFluids('gtceu:xenotime_concentrate 1000')
        .outputFluids('gtceu:lre_slag 700')
        .outputFluids('gtceu:mre_slag 300')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);

    // Xenotime extraction tier 1
    event.recipes.gtceu.chemical_dehydrator('xenotime_concentration')
        .inputFluids('gtceu:xenotime_slag 1000')
        .outputFluids('gtceu:xenotime_concentrate 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_reactor('alkaline_xenotime_leaching') // Set higher energy use (temperature requirement sim)
        .inputFluids('gtceu:lre_slag 1000')
        .itemInputs('4x gtceu:sodium_hydroxide_dust') //can also add recipe for the fluid NaOH
        .outputFluids('gtceu:mixed_lre_leachate 1000')
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.centrifuge('xenotime_leachate_separation_1')
        .inputFluids('gtceu:mixed_lre_leachate 1000')
        .outputFluids('gtceu:leached_lre_liquor 200')
        .itemOutputs('8x gtceu:leached_lre_residue_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_reactor('lre_liquor_1')
        .itemInputs('8x gtceu:leached_lre_residue_dust')
        .inputFluids('gtceu:nitric_acid 200')
        .outputFluids('gtceu:leached_lre_liquor 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_reactor('lre_liquor_precipitation_1')
        .inputFluids('gtceu:leached_lre_liquor 700')
        .inputFluids('gtceu:oxalic_acid 300')
        .outputFluids('gtceu:wet_lre_precipitate 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_dehydrator('lre_precipitate_drying_1')
        .inputFluids('gtceu:wet_lre_precipitate 1000')
        .itemOutputs('4x gtceu:dried_mixed_lre_precipitate_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.centrifuge('mixed_lre_dust_spinny_1')
        .itemInputs('16x gtceu:dried_mixed_lre_precipitate_dust')
        .chancedOutput('gtceu:lanthanum_dust', 1000, 500)
        .chancedOutput('gtceu:cerium_dust', 1000, 500)
        .chancedOutput('gtceu:praseodymium_dust', 1000, 500)
        .chancedOutput('2x gtceu:neodymium_dust', 6000, 500)
        .duration(600)
        .EUt(GTValues.VA[GTValues.HV]);
    //Chromate recycling
    event.recipes.gtceu.chemical_reactor('chromium_hydroxide_reactor')
        .itemInputs('6x gtceu:sodium_hydroxide')
        .inputFluids('gtceu:chromate_waste_water 1000')
        .itemOutputs('2x gtceu:chromium_hydroxide_dust')
        .duration(60)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.chemical_dehydrator('chromium_oxide_vvarm')
        .itemInputs('gtceu:chromium_hydroxide')
        .itemOutputs('gtceu:chromium_iii_oxide_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);

    //D2EHPA synthesis
    event.recipes.gtceu.chemical_reactor('butanol_maker')
        .inputFluids('gtceu:butene 1000')
        .inputFluids('minecraft:water 1000')
        .notConsumable('gtceu:sulfuric_acid 1000')
        .outputFluids('gtceu:butanol 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.autoclave('2ethyl1hexanol') //Long process - 6h
        .inputFluids('gtceu:butanol 1000')
        .notConsumable('1x gtceu:calcium_carbide')
        .outputFluids('gtceu:2_ethyl_1_hexanol')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.arc_furnace('phosphorus_trichloride')
        .itemInputs('gtceu:phosphorus_dust')
        .inputFluids('gtceu:chlorine 3000')
        .outputFluids('gtceu:phosphorus_trichloride 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.chemical_reactor('D2EH_phosphite') //Add NC benzene as solvent if possible
        .inputFluids('gtceu:2_ethyl_1_hexanol 3000')
        .inputFluids('gtceu:phosphorus_trichloride 1000')
        .outputFluids('gtceu:di(2_ethylhexyl)_phosphite 1000')
        .outputFluids('gtceu:hydrochloric_acid 2000') //one alcohol and chlorine go poof cause i am not adding RCl reprocessing
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.chemical_reactor('D2EH_phosphorochloridate')
        .inputFluids('gtceu:di(2_ethylhexyl)_phosphite 1000')
        .inputFluids('gtceu:chlorine 1000')
        .outputFluids('gtceu:hydrochloric_acid 1000')
        .outputFluids('gtceu:di(2_ethylhexyl)_phosphorochloridate 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.chemical_reactor('D2EHPA')
        .inputFluids('gtceu:di(2_ethylhexyl)_phosphorochloridate 1000')
        .itemInputs('1x gtceu:sodium_hydroxide')
        .outputFluids('gtceu:di(2_ethylhexyl)_phosphoric_acid 1000')
        .itemOutputs('1x gtceu:salt')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);

    //Isodecanol
    event.recipes.gtceu.chemical_reactor('hydroxyapatite_prep')
        .itemInputs('10x gtceu:calcium_hydroxide')
        .inputFluids('gtceu:phosphoric_acid 6000')
        .itemOutputs('gtceu:hydroxyapatite')
        .outputFluids('minecraft:water 18000')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.autoclave('isodecanol_prep')
        .notConsumable('gtceu:hydroxyapatite')
        .inputFluids('gtceu:ethanol 5000')
        .outputFluids('gtceu:isodecanol 1000')
        .outputFluids('minecraft:water 4000')
        .duration()
        .EUt(GTValues.VA[GTValues.HV]);


    //Extraction mixture
    event.recipes.gtceu.mixer('tier_2_extraction_mix')
        .inputFluids('gtceu:di(2_ethylhexyl)_phosphoric_acid 1000')
        .inputFluids('gtceu:isodecanol 500')
        .inputFluids('gtceu:kerosene 500')
        .outputFluids('gtceu:mre_tier_2_extraction_mix 2000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV])

    //MRE - tier 2
    event.recipes.gtceu.chemical_reactor('mona_hydroxide')
        .inputFluids('gtceu:monasite_slag 100')
        .itemInputs('3x gtceu:sodium_hydroxide')
        .itemOutputs('gtceu:mre_hydroxides')
        .itemOutputs('gtceu:sodium_phophate')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.chemical_dehydrator('mona_oxide')
        .itemInputs('gtceu:mre_hydroxides')
        .itemOutputs('gtceu:mre_oxides')
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.chemical_reactor('mona_chloride')
        .itemInputs('gtceu:mre_oxides')
        .inputFluids('gtceu:hydrochloric_acid 6000')
        .outputFluids('gtceu:mre_chlorides 1000')
        .duration(300)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.mixer('mre_tier_2_leached_solution')
        .inputFluids('gtceu:mre_chlorides 1000')
        .inputFluids('gtceu:mre_tier_2_extraction_mix 4000')
        .outputFluids('gtceu:mre_leachate_tier_2 5000')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.centrifuge('mre_tier_2_phase_separation')
        .inputFluids('gtceu:mre_leachate_tier_2 5000')
        .outputFluids('gtceu:diluted_hydrochloric_acid 1000')
        .outputFluids('gtceu:mre_tier_2_organic_leachate 4000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.chemical_reactor('mre_tier_2_precipitation')
        .inputFluids('gtceu:mre_tier_2_organic_leachate 4000')
        .inputFluids('gtceu:sufluric_acid 1000')
        .itemOutputs('4x gtceu:mre_mixed_dusts')
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.centrifuge('mre_tier_2_dust_separation') //Probs needs rebalancing
        .itemInputs('16x gtceu:mre_mixed_dusts')
        .chancedOutput('gtceu:europium_dust', 1000, 500)
        .chancedOutput('gtceu:gadolinium_dust', 1000, 500)
        .chancedOutput('gtceu:terbium_dust', 1000, 500)
        .chancedOutput('2x gtceu:samarium_dust', 6000, 500)
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV]);

});
