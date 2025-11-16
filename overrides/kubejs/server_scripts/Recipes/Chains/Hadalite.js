ServerEvents.recipes(event => {

    // C4H6 (g) + Cl2 (g) -> C4H6Cl2 (l)
    event.recipes.gtceu.large_chemical_reactor('hadalite_sludge')
        .itemInputs('9x gtceu:hadalite_dust')
        .inputFluids('minecraft:water 1000')
        .outputFluids('gtceu:hadalite_sludge 1000')
        .duration(850)
        .EUt(GTValues.VA[GTValues.LuV])
    // 2 Tl2S3(MgFeSi2O4)4(H2O) + 12 CO2 + 6 H2O + 3 O2 -> 2 S3 + 2 Tl2(HCO3)6(MgFeSi2O4)4(H2O)
    event.recipes.gtceu.large_chemical_reactor('sparkling_hadalite')
        .inputFluids('gtceu:hadalite_sludge 2000')     // 2 Tl2S3(MgFeSi2O4)4(H2O)
        .inputFluids('gtceu:carbon_dioxide 12000')     // 12 CO2
        .inputFluids('minecraft:water 6000')           // 6 H2O
        .inputFluids('gtceu:oxygen 6000')              // 3 O2
        .outputFluids('gtceu:sparkling_hadalite 2000') // 2 Tl2(HCO3)6(MgFeSi2O4)4(H2O)
        .itemOutputs('6x gtceu:sulfur_dust')           // 2 S3
        .duration(625)
        .EUt(GTValues.VA[GTValues.LuV]);

    // 2 Tl2(HCO3)6(MgFeSi2O4)4(H2O) + 6 H2S
    //   -> 2 Tl2S3 + 12 CO2 + 14 H2O + 8 MgFeSi2O4

    event.recipes.gtceu.large_chemical_reactor('excited_hadalite')
        .inputFluids('gtceu:sparkling_hadalite 2000') // 2 Tl2(HCO3)6(MgFeSi2O4)4(H2O)
        .inputFluids('gtceu:hydrogen_sulfide 6000')   // 6 H2S
        .outputFluids('gtceu:excited_hadalite 2000')  // 2 Tl2S3
        .outputFluids('gtceu:carbon_dioxide 12000')   // 12 CO2
        .outputFluids('minecraft:water 14000')        // 14 H2O
        .itemOutputs('8x gtceu:obsidian_dust')        // 8 MgFeSi2O4
        .duration(625)
        .EUt(GTValues.VA[GTValues.LuV]);


    // Tl2S3 + 3 H2 -> 2 Tl + 3 H2S // For Extracting Thallium

    event.recipes.gtceu.chemical_dehydrator('thallium_refining')
        .inputFluids('gtceu:excited_hadalite 1000') // 1 Tl2S3
        .inputFluids('gtceu:hydrogen 3000')         // 3 H2
        .itemOutputs('2x gtceu:thallium_dust')      // 2 Tl
        .outputFluids('gtceu:hydrogen_sulfide 3000')// 3 H2S
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM]);

    // 1B Excited Hadalite + 1B Ice -> 2x Thallium Dust + 2B Holmium Slush
    event.recipes.gtceu.cryo_chamber('excited_hadalite_to_holium_slush')
        .inputFluids('gtceu:excited_hadalite 1000') // 2 Tl2S3
        .inputFluids('gtceu:ice 1000')        // Literally Water lol
        .itemOutputs('2x gtceu:thallium_dust')     // Thallium Dust
        .itemOutputs('9x gtceu:heavy_hadalite_sludge_dust')     // Thallium Dust
        .outputFluids('gtceu:holmium_slush_mixture 2000') // Start of Holmium Extraction
        .duration(900)
        .EUt(GTValues.VA[GTValues.LuV]);

    // Be + O2 -> BeO
    event.recipes.gtceu.chemical_reactor('beryllium_to_beryllium_oxide')
        .itemInputs('gtceu:beryllium_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('2x gtceu:beryllium_oxide_dust')
        .duration(220)
        .EUt(GTValues.VA[GTValues.LuV]);
    // BeO + F2 -> BeF2 + O
    event.recipes.gtceu.chemical_reactor('beryllium_oxide_to_beryllium_fluoride')
        .itemInputs('2x gtceu:beryllium_oxide_dust')
        .inputFluids('gtceu:fluorine 2000')
        .outputFluids('gtceu:beryllium_fluoride 1000')
        .outputFluids('gtceu:oxygen 1000')
        .duration(110)
        .EUt(GTValues.VA[GTValues.LuV]);

    // Li + Na + 2 BeF2 -> LiNaBe2F4
    event.recipes.gtceu.large_chemical_reactor('beryll_fluroide_to_hot_fluornated_beryllate')
        .itemInputs('gtceu:lithium_dust')
        .itemInputs('gtceu:sodium_dust')
        .inputFluids('gtceu:beryllium_fluoride 2000')
        .outputFluids('gtceu:hot_fluornated_beryllate 1000')
        .duration(900)
        .EUt(GTValues.VA[GTValues.LuV]);

    // LiNa(BeF2)2 + Al + Au + 3 F2 -> LiNa(BeF2)2(AlF3)(AuF3)

    event.recipes.gtceu.industrial_chemvat('liquid_glass_supercoolant')
        .inputFluids('gtceu:hot_fluornated_beryllate 1000')   // LiNa(BeF2)2
        .itemInputs('1x gtceu:aluminium_dust')                // Al
        .itemInputs('1x gtceu:gold_dust')                     // Au
        .inputFluids('gtceu:fluorine 3000')                   // 3 F2
        .outputFluids('gtceu:liquid_glass_supercoolant 1000') // LiNa(BeF2)2(AlF3)(AuF3)
        .duration(800)
        .EUt(GTValues.VA[GTValues.ZPM]);


    //RUBIDIUM

    // Naumannite + Cyanex 272 -> Rubidine Froth
    event.recipes.gtceu.biovat('rubussy_froth')
        .itemInputs('3x gtceu:naumannite_dust')
        .notConsumableFluid('gtceu:cyanex_272 1000')
        .inputFluids('gtceu:hydrogen_sulfide 3000', 'minecraft:water 1000')
        .itemOutputs('1x gtceu:gold_dust', '2x gtceu:selenium_dust')
        .outputFluids('gtceu:rubidine_froth 1000')
        .duration(340)
        .EUt(GTValues.VA[GTValues.ZPM]);

    // Rubidine Froth + Rubidine Extraction Rosin (Oxalic Acid e+ Plasmites) -> Rubidine Honey
    event.recipes.gtceu.biovat('rubidine_honey')
        .inputFluids('gtceu:rubidine_froth 2000', 'gtceu:rubidine_extraction_rosin 1000')
        .outputFluids('gtceu:rubidine_honey 1000')
        .duration(340)
        .EUt(GTValues.VA[GTValues.ZPM]);

    //Rubidine Honey + hydrogen -> Rubidium Dust
    event.recipes.gtceu.biovat('rubidium_dust')
        .inputFluids('gtceu:rubidine_honey 1000', 'gtceu:hydrogen 1000')
        .itemOutputs('1x gtceu:rubidium_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV]);

    //Rosin
    event.recipes.gtceu.biovat('rubidine_extraction_rosin')
        .inputFluids('gtceu:oxalic_acid 1000')
        .notConsumable('gtceu:neutronium_plasmites')
        .notConsumable('gtceu:europium_plasmites')
        .outputFluids('gtceu:rubidine_extraction_rosin 1000')
        .sterileInput('gtceu:ghost_matter_plasma 250')
        .duration(800)
        .EUt(GTValues.VA[GTValues.ZPM]);


    // HOLMIUM
    // More Exotic Extraction using liquid glass supercoolant
    event.recipes.gtceu.mixer('holmium_colloid')
        .itemInputs('gtceu:rubidium_dust')
        .inputFluids('gtceu:holmium_slush_mixture 1000', 'gtceu:liquid_glass_supercoolant 1000')
        .outputFluids('gtceu:holmium_rubidium_colloid_with_supercoolant 1000')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV]);


    event.recipes.gtceu.centrifuge('holmium_solution')
        .inputFluids('gtceu:holmium_rubidium_colloid_with_supercoolant 1000')
        .itemOutputs('2x gtceu:calcium_sulfide_dust')
        .outputFluids('gtceu:holmium_solution 1000')
        .outputFluids('gtceu:liquid_glass_supercoolant 1000')
        .duration(300)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.hemophagic_transfuser('holmium_solution')
        .inputFluids('gtceu:holmium_solution 1000')
        .inputFluids('gtceu:tau_plasma 250')
        .inputFluids('gtceu:fluorine 6000')
        .itemOutputs('9x gtceu:tauin_hexafluoroholmate_dust')
        .soulInput(100000)
        .duration(150)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.chemical_dehydrator('holmium_dust')
        .inputFluids('gtceu:hydrogen 6000')
        .itemInputs('9x gtceu:tauin_hexafluoroholmate_dust')
        .outputFluids('gtceu:hydrofluoric_acid 6000')
        .itemOutputs('gtceu:holmium_dust')
        .itemOutputs('gtceu:rubidium_dust')
        .duration(100)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.remove({ id: 'gtceu:electric_blast_furnace/blast_holmium' })
    event.remove({ id: 'gtceu:orbital_forge/blast_holmium' })
    event.recipes.gtceu.electric_blast_furnace('holmium_ingot')
        .itemInputs('gtceu:holmium_dust')
        .itemOutputs('gtceu:hot_holmium_ingot')
        .inputFluids('gtceu:pyroflux 1000')
        .blastFurnaceTemp(9500)
        .duration(925)
        .EUt(GTValues.VA[GTValues.IV]);


    //Astatine
    event.recipes.gtceu.laser_engraver('astatine_dust')
        .itemInputs('81x gtceu:heavy_hadalite_sludge_dust')
        .itemInputs('cosmiccore:fermium_rad_charges')
        .itemOutputs('4x gtceu:astatine_dust')
        .itemOutputs('gtceu:clumped_waste_metals_dust')
        .duration(60)
        .EUt(GTValues.VA[GTValues.UV]);


    event.recipes.gtceu.sifter('clumped_waste_metals_separation')
        .itemInputs('gtceu:clumped_waste_metals_dust')
        .itemOutputs(['gtceu:indium_dust', 'gtceu:thallium_dust', 'gtceu:germanium_dust'])
        .duration(240)
        .EUt(GTValues.VA[GTValues.UV]);

})