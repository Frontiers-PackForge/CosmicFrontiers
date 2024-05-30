ServerEvents.recipes((event) => {
    
    // Oxalic Acid
    event.recipes.gtceu.chemical_reactor('oxalic_acid')
        .inputFluids('gtceu:ethylene 1000')
        .inputFluids('gtceu:oxygen 4000')
        .notConsumable('4x gtceu:potassium_dichromate_dust')
        .outputFluids('gtceu:oxalic_acid 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);

    // D2EHPA synthesis
    event.recipes.gtceu.chemical_reactor('butanol_maker')
        .inputFluids('gtceu:butene 1000')
        .inputFluids('minecraft:water 1000')
        .notConsumableFluid('gtceu:sulfuric_acid 1000')
        .outputFluids('gtceu:butanol 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.autoclave('2_ethyl_1_hexanol') // Long process - 6h
        .inputFluids('gtceu:butanol 1000')
        .notConsumable('1x gtceu:calcium_carbide_dust')
        .outputFluids('gtceu:2_ethyl_1_hexanol')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.arc_furnace('phosphorus_trichloride')
        .itemInputs('gtceu:phosphorus_dust')
        .inputFluids('gtceu:chlorine 3000')
        .outputFluids('gtceu:phosphorus_trichloride 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.chemical_reactor('d2eh_phosphite') // Add NC benzene as solvent if possible
        .inputFluids('gtceu:2_ethyl_1_hexanol 3000')
        .inputFluids('gtceu:phosphorus_trichloride 1000')
        .outputFluids('gtceu:di_2_ethylhexyl_phosphite 1000')
        .outputFluids('gtceu:hydrochloric_acid 2000') // one alcohol and chlorine go poof cause i am not adding RCl reprocessing
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.chemical_reactor('d2eh_phosphorochloridate')
        .inputFluids('gtceu:di_2_ethylhexyl_phosphite 1000')
        .inputFluids('gtceu:chlorine 1000')
        .outputFluids('gtceu:hydrochloric_acid 1000')
        .outputFluids('gtceu:di_2_ethylhexyl_phosphorochloridate 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.chemical_reactor('d2ehpa')
        .inputFluids('gtceu:di_2_ethylhexyl_phosphorochloridate 1000')
        .itemInputs('1x gtceu:sodium_hydroxide_dust')
        .outputFluids('gtceu:di_2_ethylhexyl_phosphoric_acid 1000')
        .itemOutputs('1x gtceu:salt_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);
    
    // MRE extraction mixture
    event.recipes.gtceu.chemical_reactor('mre_extraction_mix')
        .inputFluids('gtceu:di_2_ethylhexyl_phosphoric_acid 1000')
        .inputFluids('gtceu:isodecanol 500')
        .inputFluids('gtceu:kerosene 500')
        .outputFluids('gtceu:mre_extraction_mix 2000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV])

    // Isodecanol
    event.recipes.gtceu.chemical_reactor('hydroxyapatite_prep')
        .itemInputs('10x gtceu:calcium_hydroxide_dust')
        .inputFluids('gtceu:phosphoric_acid 6000')
        .itemOutputs('gtceu:hydroxyapatite_dust')
        .outputFluids('minecraft:water 18000')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.autoclave('isodecanol_prep')
        .notConsumable('gtceu:hydroxyapatite_dust')
        .inputFluids('gtceu:ethanol 5000')
        .outputFluids('gtceu:isodecanol 1000')
        .outputFluids('minecraft:water 4000')
        .duration(40)
        .EUt(GTValues.VA[GTValues.HV]);

    // Cyanex-272
    event.recipes.gtceu.chemical_reactor('tert_butanol_maker') // this could be in some kind of magnetic reactor
        .inputFluids('gtceu:carbon_dioxide 4000')
        .inputFluids('minecraft:water 5000')
        .notConsumable('gtceu:ferric_alumina_dust')
        .outputFluids('gtceu:oxygen 6000')
        .outputFluids('gtceu:tert_butanol 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.chemical_reactor('isobutene_maker')
        .inputFluids('gtceu:tert_butanol 1000')
        .notConsumableFluid('gtceu:oxalic_acid')
        .outputFluids('gtceu:isobutene 1000')
        .outputFluids('minecraft:water 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.chemical_reactor('ammonium_fluoride')
        .inputFluids('gtceu:ammonia 1000')
        .inputFluids('gtceu:hydrofluoric_acid 1000')
        .itemOutputs('gtceu:ammonium_fluoride_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.chemical_reactor('2_4_4_trimethylpent_2_ene')
        .inputFluids('gtceu:isobutene 2000')
        .notConsumable('gtceu:ammonium_fluoride_dust')
        .notConsumable('gtceu:alumina_dust')
        .outputFluids('gtceu:244_trimethyl_2_pentene 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.chemical_reactor('2_4_4_trimethylpent_1_ene')
        .inputFluids('gtceu:tert_butanol 2000')
        .notConsumableFluid('gtceu:sulfuric_acid 1000')
        .outputFluids('gtceu:244_trimethyl_1_pentene 1000')
        .outputFluids('minecraft:water 2000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.chemical_reactor('tert_butylhydroperoxide')
        .inputFluids('gtceu:tert_butanol 1000')
        .inputFluids('gtceu:hydrogen_peroxide 1000')
        .notConsumableFluid('gtceu:sulfuric_acid 1000')
        .outputFluids('gtceu:tert_butylhydroperoxide 1000')
        .outputFluids('minecraft:water 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.chemical_reactor("sodium_hypophosphite")
        .inputFluids('minecraft:water 3000')
        .itemInputs('3x gtceu:sodium_hydroxide_dust')
        .itemInputs('4x gtceu:phosphorus_dust')
        .itemOutputs('3x gtceu:sodium_hypophosphite_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.large_chemical_reactor('cyanex_272')
        .inputFluids('gtceu:244_trimethyl_1_pentene 1000')
        .inputFluids('gtceu:244_trimethyl_2_pentene 1000')
        .notConsumableFluid('gtceu:tert_butylhydroperoxide 1000')
        .notConsumableFluid('gtceu:acetic_acid')
        .itemInputs('gtceu:sodium_hypophosphite_dust')
        .outputFluids('gtceu:cyanex_272 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV]);
})