ServerEvents.recipes(event => {

    event.remove({ id: 'gtceu:circuit_assembler/neuro_processor' })
    event.remove({ id: 'gtceu:chemical_reactor/wetware_circuit_board_persulfate' })
    event.remove({ id: 'gtceu:chemical_reactor/wetware_circuit_board_iron3' })
    event.remove({ id: 'gtceu:large_chemical_reactor/wetware_circuit_board_iron3' })
    event.remove({ id: 'gtceu:large_chemical_reactor/wetware_circuit_board_persulfate' })
    event.remove({ id: 'gtceu:industrial_chemvat/wetware_circuit_board_persulfate' })
    event.remove({ id: 'gtceu:industrial_chemvat/wetware_circuit_board_persulfate' })
    event.remove({ id: 'gtceu:circuit_assembler/wetware_board' })
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




    event.recipes.gtceu.industrial_chemvat('frontiers:pyrrole')
        .notConsumable('cosmiccore:chronon_dust')
        .inputFluids('gtceu:oxolane 1000', 'gtceu:ammonia 1000', 'gtceu:butene 2000')
        .outputFluids('gtceu:pyrrole 1000', 'minecraft:water 1000', 'gtceu:butane 2000')
        .duration(240)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.industrial_chemvat('frontiers:prophine')
        .notConsumable('cosmiccore:chronon_dust')
        .inputFluids('gtceu:pyrrole 4000', 'gtceu:formaldehyde 4000')
        .outputFluids('gtceu:hydrogen 6000', 'minecraft:water 4000')
        .itemOutputs('gtceu:prophine_dust')
        .duration(180)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);

    //This is an Extremely Lossy Step.
    event.recipes.gtceu.industrial_chemvat('frontiers:heme_ring_but_its_actually_chlorophyte_and_im_just_lazy')
        .itemInputs('gtceu:prophine_dust')
        .inputFluids('gtceu:acetic_acid 1000', 'gtceu:formaldehyde 4000', 'gtceu:methyl_formate 2000', 'gtceu:chlorine 4000', 'gtceu:vinyl_chloride 1000', 'gtceu:chloroethane 1000', 'gtceu:chloromethane 4000')
        .outputFluids('gtceu:hydrochloric_acid 1000', 'minecraft:water 1000')
        .itemOutputs('cosmiccore:heme_ring')
        .duration(440)
        .stationResearch(b => b
            .researchStack('cosmiccore:sculk_fibroblast')
            .CWUt(64)
            .EUt(GTValues.VA[GTValues.UV]))
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.LuV]);

    //Blood Portion (Globules etc)
    event.recipes.gtceu.centrifuge('frontiers:glob_to_blood')
        .itemInputs('undergarden:blood_globule')
        .outputFluids('gtceu:fungal_blood 125', 'gtceu:blood_plasma 125')
        .chancedOutput('gtceu:meat_dust', 2500, 0)
        .duration(650)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.centrifuge('frontiers:blood_plasma_to_other_stuff')
        .inputFluids('gtceu:blood_plasma 8000')
        .outputFluids('gtceu:catalase 1000', 'gtceu:fibroblast_growth_factor 3000')
        .chancedOutput('gtceu:meat_dust', 1500, 0)
        .duration(650)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.large_chemical_reactor('frontiers:collagen')
        .itemInputs('4x gtceu:collagen_dust')
        .inputFluids('gtceu:blood_plasma 500', 'gtceu:phosphoric_acid 1000')
        .itemOutputs('gtceu:phosphorus_dust')
        .outputFluids('gtceu:gelatin_concentrate 1000')
        .duration(1349)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.large_chemical_reactor('frontiers:gelatin_scaffold')
        .notConsumable('gtceu:wire_extruder_mold')  //TODO ; Weaver Item
        .inputFluids('gtceu:gelatin_concentrate 1000')
        .itemOutputs('cosmiccore:gelatin_scaffold')
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.ZPM]);


    //Sculk Fibroblasts
    event.recipes.gtceu.mixer('frontiers:sculk_junks')
        .itemInputs('minecraft:echo_shard')
        .inputFluids('gtceu:oxalic_acid 100')
        .itemOutputs('6x cosmiccore:sculk_fibroblast') //TODO the other sculk things
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.biovat('frontiers:biotin_b7')
        .itemInputs('96x cosmiccore:sculk_fibroblast', '32x minecraft:sugar')
        .inputFluids('gtceu:hydrogen 12000', 'gtceu:nitrogen 8000')
        .outputFluids('gtceu:biotin 4000')
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.LuV]);


    //Sculk Inverted Stem Stells 
    event.recipes.gtceu.biovat('frontiers:basic_stem_cell_sculk')
        .itemInputs('8x cosmiccore:sculk_fibroblast', '16x cosmiccore:heme_ring')
        .inputFluids('gtceu:fibroblast_growth_factor 4000')
        .itemOutputs('8x cosmiccore:sculk_myofibroblast')
        .duration(940)
        .CWUt(32)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.biovat('frontiers:myofibroblast_to_hemocytoblast')
        .itemInputs('cosmiccore:sculk_myofibroblast')
        .inputFluids('gtceu:fibroblast_growth_factor 1000', 'gtceu:tau_oil 800')
        .itemOutputs('cosmiccore:resipiratory_sculk_hemocytoblast')
        .soulInput(75000)
        .duration(440)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.LuV]);

    //Vit C

    //sugar to glucose
    //This Recipe makes zero sense lol, but there's no reason to do the sugar -> fructose -> glucose nosnesne GCYL did. We'll just abstract and skip to sugar -> glucose
    event.recipes.gtceu.sifter('frontiers:glucose')
        .itemInputs('24x minecraft:sugar')
        .itemOutputs('24x gtceu:glucose_dust')
        .duration(440)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);
    //Convert to Sorbose 1:1 with Consumed Strep
    event.recipes.gtceu.biovat('frontiers:sorbose')
        .itemInputs('24x gtceu:glucose_dust', 'cosmiccore:streptococcus_pyogenes')
        .itemOutputs('24x gtceu:sorbose_dust')
        .duration(440)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[GTValues.LuV]);
    event.recipes.gtceu.chemical_dehydrator('frontiers:vit_c')
        .notConsumable('gtceu:platinum_dust')
        .itemInputs('24x gtceu:sorbose_dust')
        .outputFluids('gtceu:ascorbic_acid 1000')
        .duration(440)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
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

    event.recipes.gtceu.large_chemical_reactor('frontiers:acetylene')
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
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VH[GTValues.EV]);

    //Ethanolamine
    event.recipes.gtceu.mixer('frontiers:ethanolamine')
        .inputFluids('gtceu:ethylene_oxide 1000', 'gtceu:ammonia 1000')
        .outputFluids('gtceu:ethanolamine 1000')
        .duration(100)
        .EUt(GTValues.VH[GTValues.IV]);

    event.recipes.gtceu.chemical_reactor('frontiers:complex_multivitamin_solution')
        .inputFluids('gtceu:retinol 1000', 'gtceu:ascorbic_acid 1000', 'gtceu:biotin 1000', 'gtceu:ethanolamine 1000', 'gtceu:catalase 1000')
        .outputFluids('gtceu:complex_multivitamin_solution 1000')
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
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
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VH[GTValues.EV]);
    //Maybe the Dust will be used in the future???? make it apart of RGM ig lol

    event.recipes.gtceu.centrifuge('frontiers:petri_dishing')
    .inputFluids('gtceu:agar 144')
    .itemInputs('gtceu:petri_dish')
    .itemOutputs('cosmiccore:prepared_petri_dish')
    .duration(960)
    .cleanroom(CleanroomType.STERILE_CLEANROOM)
    .EUt(GTValues.VH[GTValues.IV]);
})