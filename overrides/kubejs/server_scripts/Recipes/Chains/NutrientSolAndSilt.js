ServerEvents.recipes(event => {

    // .inputFluids('gtceu:source_oils 100')
    // .itemOutputs('2x skilltree:wisdom_scroll')

    event.remove({ output: 'gtceu:crystal_cpu' })
    event.remove({ output: 'gtceu:engraved_crystal_chip' })
    event.remove({ output: 'gtceu:raw_crystal_chip' })
    event.remove({ output: 'gtceu:raw_crystal_chip_parts' })
    event.recipes.gtceu.distillation_tower('swamp_filtering')
        .inputFluids('gtceu:swamp_sediment 500') //Pumped Directly in the undergarden
        .outputFluids('gtceu:rotten_sediment 175') //Done Rotten -> Silt - Output requires a bit extra processing but gains more silt and lakewater
        .outputFluids('gtceu:pungent_sediment 100') // Pugent -> Sludge - Gives you the funny DT fluid, and more silt slurry
        .outputFluids('gtceu:lake_water 500') // For Future Processing - Eject ALL WATER as lake water - For Nutrient Solution Creation
        .outputFluids('gtceu:undergarden_sludge 100') // For DT'ing, Gives a wild amount of random stuff, as well as fermented biomass
        .outputFluids('gtceu:silt_slurry 250') // For Processing in Hell to produce luminent monosilicon
        .dimension('undergarden:undergarden') // Lock the entire chain to Undergarden, require an outpost base
        .duration(40)
        .EUt(GTValues.VA[GTValues.EV]);

    // PROCESSING SEDIMENTS

    event.recipes.gtceu.leaching_plant('rot_sed_leach')
        .inputFluids('gtceu:rotten_sediment 1000')
        .inputFluids('minecraft:water 2000')
        .outputFluids('gtceu:lake_water 750')
        .outputFluids('gtceu:silt_slurry 150')
        .itemOutputs('3x gtceu:bio_chaff')
        .dimension('undergarden:undergarden')
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.leaching_plant('pung_sed_leach')
        .inputFluids('gtceu:pungent_sediment 1000')
        .inputFluids('minecraft:water 2000')
        .outputFluids('gtceu:undergarden_sludge 750')
        .outputFluids('gtceu:silt_slurry 300')
        .itemOutputs('6x gtceu:bio_chaff')
        .dimension('undergarden:undergarden')
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV]);


    event.recipes.gtceu.arboreal_growth_facility('bloody_mushroom_growing')
        .notConsumable('undergarden:blood_mushroom')
        .inputFluids('gtceu:nutrient_solution 500')
        .inputFluids('gtceu:sulfur_trioxide 500')
        .outputFluids('gtceu:fungal_nutrient_waste 1000')
        .itemOutputs('32x undergarden:blood_mushroom_cap')
        .itemOutputs('32x undergarden:blood_mushroom_stem')
        .itemOutputs('24x undergarden:blood_globule')
        .itemOutputs('16x undergarden:engorged_blood_mushroom_cap')
        .dimension('undergarden:undergarden')
        .duration(600)
        .EUt(GTValues.VA[GTValues.IV]);


    event.recipes.gtceu.fluid_heater('lake_to_rich_lake')
        .inputFluids('gtceu:lake_water 1000')
        .outputFluids('gtceu:cultured_lake_water 1000')
        .dimension('undergarden:undergarden')
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.brewery('rich_lake_to_plant_juice_one')
        .inputFluids('gtceu:lake_water 8000')
        .itemInputs('2x gtceu:apatite_dust')
        .outputFluids('gtceu:nutrient_solution_base 4000')
        .dimension('undergarden:undergarden')
        .duration(250)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.brewery('juice_one_juice_two')
        .inputFluids('gtceu:nutrient_solution_base 1000')
        .itemInputs('4x gtceu:bio_chaff')
        .outputFluids('gtceu:nutrient_solution 1000')
        .dimension('undergarden:undergarden')
        .duration(250)
        .EUt(GTValues.VA[GTValues.EV]);

    //SILT PROCESSING PREP

    event.recipes.gtceu.mixer('silt_sep_composite')
        .itemInputs(['8x gtceu:desh_dust', '8x cosmiccore:trinavine_dust', '8x cosmiccore:neutronite_dust'])
        .itemOutputs('24x gtceu:silt_seperation_composite_dust')
        .duration(550)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.chemical_dehydrator('silt_drying')
        .chancedInput('4x gtceu:silt_seperation_composite_dust', 4500, 0)
        .inputFluids('gtceu:silt_slurry 16000')
        .itemOutputs('32x gtceu:impure_silt_dust')
        .dimension('undergarden:undergarden')
        .duration(550)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.mixer('europium_silicon')
        .itemInputs(['2x gtceu:silicon_dust', 'gtceu:europium_dust', 'gtceu:graphene_dust'])
        .itemOutputs('4x gtceu:europium_blended_silicon_dust')
        .circuit(4)
        .dimension('undergarden:undergarden')
        .duration(360)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.mixer('europium_silicide')
        .itemInputs(['gtceu:europium_blended_silicon_dust', '3x gtceu:silicon_dioxide_dust'])
        .itemOutputs('4x gtceu:europium_silicide_dust')
        .circuit(3)
        .dimension('undergarden:undergarden')
        .duration(220)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.sifter('silt_sifting_default')
        .itemInputs('4x gtceu:impure_silt_dust')
        .chancedOutput('2x gtceu:high_grade_silicon_dust', 1500, 500)
        .chancedOutput('2x gtceu:middle_grade_silicon_dust', 2550, 1500)
        .itemOutputsRanged('gtceu:silicon_dust', 4, 8)
        .dimension('undergarden:undergarden')
        .duration(550)
        .EUt(GTValues.VA[GTValues.IV]);
    event.remove({ id: 'gtceu:electric_blast_furnace/naquadah_boule' })
    event.remove({ id: 'gtceu:orbital_forge/naquadah_boule' })
    event.recipes.gtceu.alloy_blast_smelter('naq_boule_new')
        .itemInputs(['54x gtceu:middle_grade_silicon_dust', '18x gtceu:high_grade_silicon_dust', '1x gtceu:gallium_arsenide_dust', '1x gtceu:naquadah_dust'])
        .outputFluids('gtceu:molten_naquadah_doped_silicon 9216')
        .blastFurnaceTemp(5400)
        .dimension('minecraft:the_nether')
        .duration(1750)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.gravity_float_crucible('naq_boule_solidify_autoclave')
        .itemInputs('gtceu:silicon_nugget')
        .inputFluids('gtceu:molten_naquadah_doped_silicon 9216')
        .itemOutputs('gtceu:naquadah_boule')
        .dimension('ad_astra:earth_orbit')
        .duration(6000)
        .EUt(GTValues.VA[GTValues.IV]);

    //DiLumixal Boule Stuff
    event.recipes.gtceu.alloy_blast_smelter('lumial_boule_new')
        .itemInputs(['36x gtceu:middle_grade_silicon_dust', '36x gtceu:high_grade_silicon_dust', '32x minecraft:glowstone_dust', '1x gtceu:gallium_arsenide_dust'])
        .outputFluids('gtceu:molten_luminent_silicon 9216')
        .blastFurnaceTemp(7200)
        .duration(1250)
        .dimension('minecraft:the_nether')
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.gravity_float_crucible('lumial_boule_solidify_autoclave')
        .itemInputs('gtceu:exquisite_malachite_gem')
        .inputFluids('gtceu:molten_luminent_silicon 9216')
        .itemOutputs('cosmiccore:dilumixal_naquadah_doped_silicon_boule')
        .dimension('ad_astra:earth_orbit')
        .duration(5000)
        .EUt(GTValues.VA[GTValues.LuV]);
    event.recipes.gtceu.cutter('cut_lumial_boule')
        .itemInputs('cosmiccore:dilumixal_naquadah_doped_silicon_boule')
        .inputFluids('cosmiccore:prisma 1000')
        .itemOutputs('32x cosmiccore:dilumixal_naquadah_doped_silicon_wafer')
        .dimension('ad_astra:earth_orbit')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.LuV]);
    event.recipes.gtceu.laser_engraver('laser_into_chiplets')
        .itemInputs('cosmiccore:dilumixal_naquadah_doped_silicon_wafer')
        .notConsumable('kubejs:prismatic_lens')
        .itemOutputs('4x cosmiccore:crystal_chiplet_base')
        .dimension('ad_astra:earth_orbit')
        .duration(640)
        .EUt(GTValues.VA[GTValues.LuV]);
    event.recipes.gtceu.aio_lithography_processor('chiplet_masking')
        .itemInputs(['8x cosmiccore:crystal_chiplet_mask', '8x cosmiccore:crystal_chiplet_base', 'gtceu:polybenzimidazole_dust'])
        .inputFluids('gtceu:hydrogensilesquioxane 2500')
        .inputFluids('gtceu:nitric_acid 2500')
        .itemOutputs('cosmiccore:masked_crystal_chiplet_package')
        .dimension('ad_astra:earth_orbit')
        .duration(480)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.gravity_float_crucible('chiplet_sealing')
        .itemInputs(['cosmiccore:masked_crystal_chiplet_package', '16x gtceu:europium_silicide_dust'])
        .notConsumable('bloodmagic:lavacrystal')
        .itemOutputs('cosmiccore:unsealed_crystal_cpu')
        .dimension('ad_astra:earth_orbit')
        .duration(480)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.assembler('chiplet_assembly')
        .itemInputs()
        .dimension('ad_astra:earth_orbit')
        .itemOutputs('8x cosmiccore:engraved_crystal_chiplet')
        .duration(480)
        .EUt(GTValues.VA[GTValues.ZPM]);
    event.recipes.gtceu.assembly_line('chiplet_assembly')
        .notConsumable('gtceu:iv_emitter')
        .itemInputs(['cosmiccore:unsealed_crystal_cpu', '4x gtceu:emerald_plate', '2x bloodmagic:defaultcrystal', '2x gtceu:luminescent_utherium_plate'])
        .itemOutputs('gtceu:crystal_cpu')
        .inputFluids(
            Fluid.of('cosmiccore:prisma', 288),
            Fluid.of('gtceu:high_grade_solder', 1440)
        )
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:qbit_cpu_chip')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
        .duration(160)
        .dimension('ad_astra:earth_orbit')
        .EUt(GTValues.VA[GTValues.LuV])
})