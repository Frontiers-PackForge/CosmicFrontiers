
ServerEvents.recipes(event => {


    event.recipes.gtceu.wasp('asteroid_ferric')
        .notConsumable('cosmiccore:crusher_wasps_grade_1')
        .itemInputs('cosmiccore:ferric_asteroid')
        .itemOutputs(['64x gtceu:raw_iron_cubic_ore', '64x gtceu:raw_pyrite_cubic_ore', '64x gtceu:raw_vanadium_magnetite_cubic_ore', '64x gtceu:raw_magnetite_cubic_ore', '64x gtceu:raw_goethite_cubic_ore'])
        .duration(2400)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.wasp('asteroid_carbonic')
        .notConsumable('cosmiccore:crusher_wasps_grade_1')
        .itemInputs('cosmiccore:carbon_asteroid_base')
        .itemOutputs(['64x gtceu:raw_coal_cubic_ore', '64x gtceu:raw_coal_cubic_ore', '64x gtceu:raw_coal_cubic_ore', '64x gtceu:raw_graphite_cubic_ore', '64x gtceu:raw_graphite_cubic_ore', '64x gtceu:raw_diamond_cubic_ore', '64x gtceu:raw_opal_cubic_ore'])
        .duration(2400)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.wasp('asteroid_occult')
        .notConsumable('cosmiccore:crusher_wasps_grade_1')
        .itemInputs('cosmiccore:occult_asteroid')
        .itemOutputs(['64x gtceu:raw_hadalite_cubic_ore', '64x gtceu:raw_nebrudite_cubic_ore', '16x gtceu:raw_xeomutithe_cubic_ore', '16x gtceu:raw_plasmoriene_cubic_ore', '16x gtceu:raw_indium_cubic_ore'])
        .duration(2400)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.wasp('asteroid_auric')
        .notConsumable('cosmiccore:crusher_wasps_grade_1')
        .itemInputs('cosmiccore:auric_asteroid')
        .itemOutputs(['64x gtceu:raw_bauxite_cubic_ore', '64x gtceu:raw_bauxite_cubic_ore', '64x gtceu:raw_bauxite_cubic_ore', '64x gtceu:raw_gold_cubic_ore', '64x gtceu:raw_gold_cubic_ore', '64x gtceu:raw_bastnasite_cubic_ore', '64x gtceu:raw_topaz_cubic_ore', '16x gtceu:raw_alunite_cubic_ore', '16x gtceu:raw_ignaphelite_cubic_ore'])
        .duration(2400)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.wasp('asteroid_mafic')
        .notConsumable('cosmiccore:crusher_wasps_grade_1')
        .itemInputs('cosmiccore:mafic_asteroid')
        .itemOutputs(['64x gtceu:raw_scheelite_cubic_ore', '64x gtceu:raw_scheelite_cubic_ore', '64x gtceu:raw_tungstate_cubic_ore', '64x gtceu:raw_tungstate_cubic_ore', '64x gtceu:raw_wolframite_cubic_ore', '64x gtceu:raw_wolframite_cubic_ore'])
        .duration(2400)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.wasp('asteroid_mossy')
        .notConsumable('cosmiccore:crusher_wasps_grade_1')
        .itemInputs('cosmiccore:mossy_asteroid')
        .itemOutputs(['64x gtceu:raw_kynasium_cubic_ore', '64x gtceu:raw_phyllosite_cubic_ore', '64x gtceu:raw_solventime_cubic_ore', '64x gtceu:raw_uranium_cubic_ore', '64x gtceu:raw_beryllium_cubic_ore', '64x gtceu:raw_bismuthinite_cubic_ore', '64x gtceu:raw_malachite_cubic_ore'])
        .duration(2400)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.wasp('asteroid_oxide')
        .notConsumable('cosmiccore:crusher_wasps_grade_1')
        .itemInputs('cosmiccore:oxide_asteroid')
        .itemOutputs(['64x gtceu:raw_kyanite_cubic_ore', '64x gtceu:raw_kyanite_cubic_ore', '64x gtceu:raw_electrotine_cubic_ore', '64x gtceu:raw_electrotine_cubic_ore', '64x gtceu:raw_lapis_cubic_ore', '64x gtceu:raw_lapis_cubic_ore', '64x gtceu:raw_gravitine_cubic_ore', '64x gtceu:raw_gravitine_cubic_ore', '64x gtceu:raw_cobaltite_cubic_ore'])
        .duration(2400)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.wasp('asteroid_lith')
        .notConsumable('cosmiccore:crusher_wasps_grade_1')
        .itemInputs('cosmiccore:lith_asteroid')
        .itemOutputs(['64x gtceu:raw_chromiatum_cubic_ore', '64x gtceu:raw_gravitine_cubic_ore', '64x gtceu:raw_flumuexien_cubic_ore', '64x gtceu:raw_tritenel_cubic_ore'])
        .duration(2400)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.wasp('asteroid_rma')
        .notConsumable('cosmiccore:crusher_wasps_grade_1')
        .itemInputs('cosmiccore:rare_metals_asteroid')
        .itemOutputs(['64x gtceu:raw_cooperite_cubic_ore', '64x gtceu:raw_cooperite_cubic_ore', '64x gtceu:raw_monazite_cubic_ore', '64x gtceu:raw_chromite_cubic_ore', '64x gtceu:raw_tantalite_cubic_ore', '64x gtceu:raw_ilmenite_cubic_ore', '16x gtceu:raw_naquadah_cubic_ore'])
        .duration(2400)
        .EUt(GTValues.VA[GTValues.ZPM]);

})