ServerEvents.recipes(event => {

    event.remove({ id: 'gtceu:circuit_assembler/neuro_processor' })

    // event.remove({ id: 'gtceu:circuit_assembler/wetware_board' })
    event.remove({ id: 'gtceu:circuit_assembler/wetware_processor_luv_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/wetware_processor_luv' })
    event.remove({ id: 'gtceu:circuit_assembler/wetware_processor_luv_soc_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/wetware_processor_luv_soc' })
    event.remove({ id: 'gtceu:circuit_assembler/wetware_processor_assembly_zpm_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/wetware_processor_assembly_zpm' })
    event.remove({ id: 'gtceu:assembly_line/wetware_super_computer_uv' })
    event.remove({ id: 'gtceu:assembly_line/wetware_mainframe_uhv' })
    event.remove({ id: 'gtceu:mixer/gelatin_mixture' })
    event.remove({ id: 'gtceu:centrifuge/gelatin' })
    event.remove({ id: 'gtceu:brewery/bacteria' })
    event.remove({ id: 'gtceu:chemical_reactor/stem_cells' })
    event.remove({ id: 'gtceu:chemical_reactor/bacterial_sludge' })
    event.remove({ id: 'gtceu:large_chemical_reactor/stem_cells' })
    event.remove({ id: 'gtceu:large_chemical_reactor/bacterial_sludge' })
    event.remove({ id: 'gtceu:industrial_chemvat/bacterial_sludge' })
    event.remove({ id: 'gtceu:industrial_chemvat/stem_cells' })
    event.remove({ id: 'gtceu:fluid_heater/sterile_growth_medium' })
    event.remove({ id: 'gtceu:mixer/raw_growth_medium' })
    event.remove({ id: 'gtceu:autoclave/agar' })

    event.remove({ id: 'gtceu:brewery/enriched_bacterial_sludge_from_u235' })
    event.remove({ id: 'gtceu:brewery/enriched_bacterial_sludge_from_u238' })
    event.remove({ id: 'gtceu:brewery/enriched_bacterial_sludge_from_naquadria' })
    event.remove({ id: 'gtceu:distillery/mutagen' })
    event.remove({ id: 'frontiers:chemical_reactor/complex_multivitamin_solution' })
    event.remove({ id: 'frontiers:large_chemical_reactor/complex_multivitamin_solution' })




    event.remove({ id: 'gtceu:chemical_reactor/collagen_from_bone' })
    event.remove({ id: 'gtceu:chemical_reactor/collagen_from_bone_meal' })
    event.recipes.gtceu.chemical_reactor('gtceu:collagen_dust_icv')
        .itemInputs('2x gtceu:meat_dust', 'minecraft:bone')
        .inputFluids('gtceu:sulfuric_acid 1000')
        .outputFluids('gtceu:diluted_sulfuric_acid 1000')
        .itemOutputs('2x gtceu:collagen_dust')
        .sterileInput('gtceu:chlorine_plasma 1')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV]);


    event.recipes.gtceu.cracker('frontiers:oxolane')
        .inputFluids('gtceu:butadiene 1000')
        .notConsumableFluid('gtceu:sulfuric_acid 500')
        .outputFluids('gtceu:oxolane 1000')
        .duration(50)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.industrial_chemvat('frontiers:pyrrole')
        .inputFluids('gtceu:oxolane 1000', 'gtceu:ammonia 1000', 'gtceu:butene 2000')
        .outputFluids('gtceu:pyrrole 1000', 'minecraft:water 1000', 'gtceu:butane 2000')
        .duration(240)
        .perTick(true)
        .sterileInput('gtceu:chlorine_plasma 1')
        .perTick(false)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.industrial_chemvat('frontiers:prophine')
        .inputFluids('gtceu:pyrrole 4000', 'gtceu:formaldehyde 4000')
        .outputFluids('gtceu:hydrogen 6000', 'minecraft:water 4000')
        .itemOutputs('gtceu:prophine_dust')
        .duration(180)
        .perTick(true)
        .sterileInput('gtceu:chlorine_plasma 1')
        .perTick(false)
        .EUt(GTValues.VA[GTValues.IV]);

    //This is an Extremely Lossy Step.
    event.recipes.gtceu.industrial_chemvat('frontiers:heme_ring_but_its_actually_chlorophyte_and_im_just_lazy')
        .itemInputs('gtceu:prophine_dust')
        .inputFluids('gtceu:acetic_acid 1000', 'gtceu:formaldehyde 4000', 'gtceu:acetic_acid 2000', 'gtceu:chlorine 4000', 'gtceu:vinyl_chloride 1000', 'gtceu:chloromethane 4000')
        .outputFluids('gtceu:hydrochloric_acid 1000', 'minecraft:water 1000')
        .itemOutputs('4x cosmiccore:heme_ring')
        .circuit(31)
        .duration(440)
        .stationResearch(b => b
            .researchStack('cosmiccore:sculk_fibroblast')
            .CWUt(16)
            .EUt(GTValues.VA[GTValues.ZPM]))
        .perTick(true)
        .sterileInput('gtceu:chlorine_plasma 1')
        .perTick(false)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.industrial_chemvat('frontiers:raw_growth_medium')
        .itemInputs('16x gtceu:agar_dust', '4x gtceu:calcium_dust', '4x gtceu:glucose_dust', '4x gtceu:gelatin_dust', '4x gtceu:salt_dust')
        .inputFluids('gtceu:fibroblast_growth_factor 16000', 'gtceu:mutagen 8000', 'gtceu:complex_multivitamin_solution 8000', 'gtceu:genetic_therapy_solution 4000')
        .outputFluids('gtceu:raw_growth_medium 32000')
        .itemOutputs('5x gtceu:phosphate_dust')
        .duration(1239)
        .perTick(true)
        .sterileInput('gtceu:chlorine_plasma 1')
        .perTick(false)
        .EUt(GTValues.VA[GTValues.UV]);
    //Blood Portion (Globules etc)
    event.recipes.gtceu.centrifuge('frontiers:glob_to_blood')
        .itemInputs('undergarden:blood_globule')
        .outputFluids('gtceu:fungal_blood 125', 'gtceu:blood_plasma 125')
        .chancedOutput('gtceu:meat_dust', 2500, 0)
        .duration(650)
        .perTick(true)
        .sterileInput('gtceu:chlorine_plasma 1')
        .perTick(false)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.centrifuge('frontiers:blood_plasma_to_other_stuff')
        .inputFluids('gtceu:blood_plasma 8000')
        .outputFluids('gtceu:catalase 1000', 'gtceu:fibroblast_growth_factor 3000')
        .chancedOutput('gtceu:meat_dust', 1500, 0)
        .duration(650)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.large_chemical_reactor('frontiers:collagen')
        .itemInputs('4x gtceu:collagen_dust')
        .inputFluids('gtceu:blood_plasma 500', 'gtceu:phosphoric_acid 1000')
        .itemOutputs('gtceu:phosphorus_dust')
        .outputFluids('gtceu:gelatin_concentrate 1000')
        .duration(1349)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.large_chemical_reactor('frontiers:gelatin_scaffold')
        .notConsumable('gtceu:wire_extruder_mold')  //TODO ; Weaver Item
        .inputFluids('gtceu:gelatin_concentrate 1000')
        .itemOutputs('cosmiccore:gelatin_scaffold')
        .duration(100)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.ZPM]);


    //Sculk Fibroblasts
    event.recipes.gtceu.mixer('frontiers:sculk_junks')
        .itemInputs('minecraft:echo_shard')
        .inputFluids('gtceu:oxalic_acid 100')
        .itemOutputs('6x cosmiccore:sculk_fibroblast') //TODO the other sculk things
        .duration(100)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.biovat('frontiers:biotin_b7')
        .itemInputs('cosmiccore:sculk_myofibroblast', '32x minecraft:sugar')
        .inputFluids('gtceu:hydrogen 12000', 'gtceu:nitrogen 8000')
        .outputFluids('gtceu:biotin 4000')
        .duration(100)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.LuV]);


    //Sculk Inverted Stem Stells 
    event.recipes.gtceu.biovat('frontiers:basic_stem_cell_sculk')
        .itemInputs('8x cosmiccore:sculk_fibroblast', '16x cosmiccore:heme_ring')
        .inputFluids('gtceu:fibroblast_growth_factor 4000')
        .itemOutputs('8x cosmiccore:sculk_myofibroblast')
        .duration(940)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.biovat('frontiers:myofibroblast_to_hemocytoblast')
        .itemInputs('cosmiccore:sculk_myofibroblast')
        .inputFluids('gtceu:fibroblast_growth_factor 1000', 'gtceu:tau_oil 200')
        .itemOutputs('cosmiccore:resipiratory_sculk_hemocytoblast')
        .duration(440)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.biovat('frontiers:saturated_sculk_hemocytoblast')
        .itemInputs('cosmiccore:resipiratory_sculk_hemocytoblast')
        .inputFluids('gtceu:synthetic_blood 125')
        .itemOutputs('cosmiccore:saturated_sculk_hemocytoblast')
        .duration(440)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.biovat('frontiers:pure_blood')
        .inputFluids('gtceu:gelatin_concentrate 250', 'gtceu:blood_plasma 1000')
        .itemOutputs('gtceu:gelatin_dust')
        .duration(200)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.chemical_dehydrator('frontiers:gelatin_dust')
        .inputFluids('gtceu:gelatin_concentrate 250')
        .itemOutputs('gtceu:gelatin_dust')
        .duration(200)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.chemical_dehydrator('frontiers:agar_dust')
        .inputFluids('gtceu:agar 144')
        .itemOutputs('gtceu:agar_dust')
        .duration(200)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.chemical_dehydrator('frontiers:fungal_spore')
        .inputFluids('gtceu:fungal_blood 1000')
        .itemOutputs('4x cosmiccore:inert_fungal_spores')
        .duration(200)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.biovat('frontiers:bacteria')
        .itemInputs(['2x cosmiccore:bifidobacterium_breve', '2x cosmiccore:streptococcus_pyogenes', '8x cosmiccore:inert_fungal_spores'])
        .inputFluids('gtceu:sterilized_lake_water 16000')
        .outputFluids('gtceu:bacteria 16000')
        .duration(2500)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.biovat('frontiers:bacterial_sludge')
        .notConsumable('cosmiccore:ultrasonic_homogenizer')
        .inputFluids('gtceu:bacteria 4000')
        .outputFluids('gtceu:bacterial_sludge 2000')
        .duration(800)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.mixer('frontiers:enriched_bacterial_sludge')
        .inputFluids('gtceu:bacterial_sludge 1000', 'gtceu:agar 432')
        .outputFluids('gtceu:enriched_bacterial_sludge 3000')
        .duration(300)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.laser_engraver('frontiers:fermium_rad_bombardment')
        .itemInputs('cosmiccore:fermium_rad_charges')
        .inputFluids('gtceu:enriched_bacterial_sludge 64000')
        .outputFluids('gtceu:mutagen 64000')
        .duration(800)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.ZPM]);

    //This Recipe is Entirely a Shitpost. It's 25000 cheese and there's easier methods to get cheese but this is just FUNNY.
//     event.recipes.gtceu.fermenter(`ad_astra:cheese_insane`)
//         .itemInputs('64x cosmiccore:bifidobacterium_breve')
//         .inputFluids('minecraft:milk 1000000')
//         .itemOutputs(`25000x ad_astra:cheese`)
//         .circuit(2)
//         .duration(8390)
//         .EUt(676767);
    //Vit C

    //sugar to glucose
    //This Recipe makes zero sense lol, but there's no reason to do the sugar -> fructose -> glucose nosnesne GCYL did. We'll just abstract and skip to sugar -> glucose
    event.recipes.gtceu.sifter('frontiers:glucose')
        .itemInputs('24x minecraft:sugar')
        .itemOutputs('24x gtceu:glucose_dust')
        .duration(440)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);
    //Convert to Sorbose 1:1 with Consumed Strep
    event.recipes.gtceu.biovat('frontiers:sorbose')
        .itemInputs('24x gtceu:glucose_dust', 'cosmiccore:streptococcus_pyogenes')
        .itemOutputs('24x gtceu:sorbose_dust')
        .duration(440)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.LuV]);
    event.recipes.gtceu.chemical_dehydrator('frontiers:vit_c')
        .notConsumable('gtceu:platinum_dust')
        .itemInputs('24x gtceu:sorbose_dust')
        .outputFluids('gtceu:ascorbic_acid 1000')
        .duration(440)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.LuV]);


    //Vit A, The Big Scary Vitamin.

    //Refactor DT Wood Tar new turpentine source
    event.remove({ id: "gtceu:distillation_tower/distill_wood_tar" })
    event.remove({ id: "gtceu:distillery/distill_wood_tar_to_creosote" })
    event.remove({ id: "gtceu:distillery/distill_wood_tar_to_phenol" })
    event.remove({ id: "gtceu:distillery/distill_wood_tar_to_dimethylbenzene" })
    event.remove({ id: "gtceu:distillery/distill_wood_tar_to_benzene" })
    event.remove({ id: "gtceu:distillery/distill_wood_tar_to_toluene" })

    event.recipes.gtceu.distillation_tower('frontiers:new_wood_tar')
        .inputFluids('gtceu:wood_tar 1000')
        .outputFluids('gtceu:creosote 300', 'gtceu:phenol 75', 'gtceu:benzene 350', 'gtceu:toluene 75', 'gtceu:dimethylbenzene 100', 'gtceu:turpentine 100')
        .duration(40)
        .EUt(GTValues.VH[GTValues.HV]);

    event.recipes.gtceu.cracker('frontiers:crack_turpentine_to_beta_pinene')
        .inputFluids('gtceu:sulfuric_acid 1000', 'gtceu:turpentine 1000')
        .itemOutputs('26x gtceu:beta_pinene_dust')
        .outputFluids('gtceu:sulfuric_acid 1000')
        // .disableDistilleryRecipes(true)
        .duration(90)
        .EUt(GTValues.VH[GTValues.EV]);

    event.recipes.gtceu.mixer('frontiers:citral_production')
        .itemInputs('26x gtceu:beta_pinene_dust')
        .inputFluids('gtceu:oxygen 2000', 'gtceu:isoprene 2000')
        .outputFluids('gtceu:citral 2000')
        .duration(200)
        .EUt(GTValues.VH[GTValues.IV]);

    event.recipes.gtceu.chemical_dehydrator('frontiers:beta_ionone_production')
        .inputFluids('gtceu:citral 1000', 'gtceu:acetone 1000')
        .outputFluids('gtceu:beta_ionone 1000')
        .duration(350)
        .EUt(GTValues.VH[GTValues.EV]);

    event.recipes.gtceu.large_chemical_reactor('frontiers:chloroethane')
        .inputFluids('gtceu:ethanol 1000', 'gtceu:hydrochloric_acid 1000')
        .outputFluids('gtceu:chloroethane 1000', 'minecraft:water 1000')
        .circuit(4)
        .duration(230)
        .EUt(GTValues.VH[GTValues.IV]);

    event.recipes.gtceu.large_chemical_reactor('frontiers:acetylene')
        .circuit(6)
        .inputFluids('gtceu:methane 3000', 'gtceu:oxygen 3000')
        .outputFluids('gtceu:acetylene 1000', 'gtceu:carbon_monoxide', 'minecraft:water 5000')
        .duration(130)
        .EUt(GTValues.VH[GTValues.EV]);

    event.recipes.gtceu.large_chemical_reactor('frontiers:propargyl_alcohol')
        .notConsumable('gtceu:copper_dust')
        .inputFluids('gtceu:acetylene 1000', 'gtceu:formaldehyde 1000')
        .outputFluids('gtceu:propargyl_alcohol 1000')
        .duration(190)
        .EUt(GTValues.VH[GTValues.EV]);

    event.recipes.gtceu.chemical_dehydrator('frontiers:propargyl_chloride')
        .inputFluids('gtceu:propargyl_alcohol 1000', 'gtceu:hydrochloric_acid 1000')
        .outputFluids('gtceu:propargyl_chloride 1000')
        .duration(100)
        .EUt(GTValues.VH[GTValues.IV]);

    event.recipes.gtceu.large_chemical_reactor('frontiers:vit_a_production')
        .inputFluids('gtceu:propargyl_chloride 5000', 'gtceu:beta_ionone 25000')
        .outputFluids('gtceu:retinol 17000', 'gtceu:oxygen 8000', 'gtceu:hydrochloric_acid 5000')
        .duration(350)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VH[GTValues.EV]);

    //Ethanolamine
    event.recipes.gtceu.mixer('frontiers:ethanolamine')
        .inputFluids('gtceu:ethylene_oxide 1000', 'gtceu:ammonia 1000')
        .outputFluids('gtceu:ethanolamine 1000')
        .duration(100)
        .EUt(GTValues.VH[GTValues.IV]);

    event.recipes.gtceu.industrial_chemvat('frontiers:complex_multivitamin_solution')
        .inputFluids('gtceu:retinol 1000', 'gtceu:ascorbic_acid 1000', 'gtceu:biotin 1000', 'gtceu:ethanolamine 1000', 'gtceu:catalase 1000')
        .outputFluids('gtceu:complex_multivitamin_solution 1000')
        .duration(100)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VH[GTValues.IV]);

    //Agar Fluid Production
    event.recipes.gtceu.biovat('frontiers:agar_sludge')
        .notConsumable('cosmiccore:ultrasonic_homogenizer')
        .inputFluids('gtceu:distilled_water 16000')
        .itemInputs('64x undergarden:glitterkelp', '64x undergarden:glitterkelp', '64x undergarden:glitterkelp', '38x undergarden:glitterkelp')
        .outputFluids('gtceu:agar_sludge 24000')
        .duration(9600)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VH[GTValues.EV]);

    event.recipes.gtceu.centrifuge('frontiers:agar_fluid')
        .inputFluids('gtceu:agar_sludge 1000')
        .itemOutputs('36x gtceu:plant_ball')
        .outputFluids('gtceu:agar 288')
        .duration(960)
        .circuit(1)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VH[GTValues.EV]);
    event.recipes.gtceu.centrifuge('frontiers:agar_fluid_booster')
        .inputFluids('gtceu:agar_sludge 1000')
        .itemInputs('16x cosmiccore:bee_comb_biohazard')
        .itemOutputs('36x gtceu:plant_ball')
        .outputFluids('gtceu:agar 1152')
        .duration(960)
        .circuit(2)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VH[GTValues.EV]);
    //Maybe the Dust will be used in the future???? make it apart of RGM ig lol

    event.recipes.gtceu.chemical_bath('frontiers:petri_dishing')
        .inputFluids('gtceu:agar 144')
        .itemInputs('gtceu:petri_dish')
        .itemOutputs('cosmiccore:prepared_petri_dish')
        .duration(960)
        //.cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VH[GTValues.IV]);



    event.recipes.gtceu.assembler('frontiers:fermium_charge')
        .itemInputs(['gtceu:tungsten_steel_fluid_cell', '2x gtceu:neutron_reflector', '4x gtceu:fermium_ingot'])
        .itemOutputs('cosmiccore:fermium_rad_charges')
        .duration(230)
        .EUt(GTValues.VA[GTValues.IV]);



    //Culture
    event.recipes.gtceu.biovat('frontiers:breve_dish')
        .itemInputs('16x gtceu:meat_dust', '8x cosmiccore:prepared_petri_dish')
        .inputFluids('gtceu:agar 250')
        .outputFluids('gtceu:agar_sludge 75')
        .itemOutputs('8x cosmiccore:bifidobacterium_breve_culture')
        .duration(440)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.biovat('frontiers:strep_dish')
        .itemInputs('16x minecraft:mutton', '8x cosmiccore:prepared_petri_dish')
        .inputFluids('gtceu:agar 250')
        .outputFluids('gtceu:agar_sludge 75')
        .itemOutputs('8x cosmiccore:streptococcus_pyogenes_culture')
        .duration(440)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.biovat('frontiers:ecoli_dish')
        .itemInputs('8x cosmiccore:prepared_petri_dish')
        .inputFluids('vegandelight:soymilk 16000', 'gtceu:agar 250')
        .outputFluids('gtceu:agar_sludge 75')
        .itemOutputs('8x cosmiccore:escherichia_coli_culture')
        .duration(440)
        .EUt(GTValues.VA[GTValues.LuV]);


    //Culture -> Cells
    event.recipes.gtceu.biovat('frontiers:breve_cell')
        .itemInputs('cosmiccore:bifidobacterium_breve_culture')
        .inputFluids('gtceu:agar 2500')
        .chancedOutput('cosmiccore:bifidobacterium_breve', 2500, 0)
        .itemOutputs('cosmiccore:contaminated_petri_dish')
        .duration(240)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.biovat('frontiers:strep_cell')
        .itemInputs('cosmiccore:streptococcus_pyogenes_culture')
        .inputFluids('gtceu:agar 2500')
        .chancedOutput('cosmiccore:streptococcus_pyogenes', 2500, 0)
        .itemOutputs('cosmiccore:contaminated_petri_dish')
        .duration(240)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.biovat('frontiers:ecoli_cell')
        .itemInputs('cosmiccore:escherichia_coli_culture')
        .inputFluids('gtceu:agar 2500')
        .chancedOutput('cosmiccore:escherichia_coli', 2500, 0)
        .itemOutputs('cosmiccore:contaminated_petri_dish')
        .duration(240)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.chemical_bath('frontiers:cleaning_dirty_cultures')
        .itemInputs('cosmiccore:contaminated_petri_dish')
        .inputFluids('gtceu:ethanol 500')
        .itemOutputs('gtceu:petri_dish')
        .duration(250)
        .EUt(GTValues.VA[GTValues.LuV]);

    // event.recipes.gtceu.drygmy_grove('frontiers:summon_a_bajillion_crabs')
    //     .notConsumable('crabbersdelight:clawster')
    //     .notConsumable('ars_nouveau:drygmy_charm')
    //     .inputFluids('gtceu:salt_water 50000')
    //     .itemOutputs('crabbersdelight:clawster')
    //     .duration(940)
    //     .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.extractor('frontiers:crab_juice')
        .itemInputs('undergarden:ditchbulb')
        .outputFluids('gtceu:chitin 150')
        .duration(50)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.extractor(`vegandelight:soymilk`)
        .itemInputs('vegandelight:soybean')
        .outputFluids('vegandelight:soymilk 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.mixer('frontiers:chitosan')
        .itemInputs('4x undergarden:ink_mushroom')
        .inputFluids('gtceu:chitin 1000')
        .outputFluids('gtceu:chitosan 1000')
        .duration(50)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.extractor('frontiers:cas_9')
        .itemInputs('cosmiccore:escherichia_coli')
        .outputFluids('gtceu:cas_9 250')
        .duration(50)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.laser_engraver('frontiers:cancer_fluid')
        .itemInputs('cosmiccore:fermium_rad_charges')
        .inputFluids('gtceu:blood_plasma 16000')
        .outputFluids('gtceu:rapidly_mutating_cancer 64000')
        .duration(700)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.centrifuge('frontiers:cancer_fluid_to_proteins')
        .inputFluids('gtceu:rapidly_mutating_cancer 16000')
        .outputFluids('gtceu:sox_2 4000')
        .outputFluids('gtceu:myc 4000')
        .outputFluids('gtceu:kfl_4 4000')
        .outputFluids('gtceu:oct_4 4000')
        .duration(590)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.large_chemical_reactor('frontiers:gene_fluid_plasmid')
        .inputFluids('gtceu:sox_2 1000')
        .inputFluids('gtceu:myc 1000')
        .inputFluids('gtceu:kfl_4 1000')
        .inputFluids('gtceu:oct_4 1000')
        .inputFluids('gtceu:cas_9 1000')
        .outputFluids('gtceu:gene_plasmids 5000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.mixer('frontiers:gene_fluid')
        .inputFluids('gtceu:chitosan 250')
        .inputFluids('gtceu:gene_plasmids 1000')
        .outputFluids('gtceu:genetic_therapy_solution 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM]);
    //Fermium Eventually from Nuclear Fusion or Fission idk but just blast it with lazers or smthn.
    event.recipes.gtceu.laser_engraver('frontiers:fermium_brrt')
        .itemInputs('8x gtceu:californium_dust')
        .itemOutputs('6x gtceu:fermium_dust')
        .duration(440)
        .EUt(GTValues.VA[GTValues.LuV]);
    event.recipes.gtceu.circuit_assembler('frontiers:neuro_soc')
        .itemInputs(['cosmiccore:crystal_chiplet_base', 'gtceu:engraved_lapotron_crystal_chip', 'gtceu:europium_plasmites', 'gtceu:stem_cells'])
        .inputFluids('gtceu:sterilized_growth_medium 250')
        .itemOutputs('gtceu:neuro_processing_unit')
        .duration(220)
        .EUt(GTValues.VH[GTValues.ZPM]);

    event.recipes.gtceu.fluid_heater('rgm_to_sgm')
        .inputFluids('gtceu:raw_growth_medium 1000')
        .outputFluids('gtceu:sterilized_growth_medium 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV]);
})