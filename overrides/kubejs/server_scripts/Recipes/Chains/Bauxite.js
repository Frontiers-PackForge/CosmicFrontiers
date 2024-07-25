ServerEvents.recipes(event => {

    event.remove({ id: 'gtceu:thermal_centrifuge/centrifuge_bauxite_purified_ore_to_refined_ore' })
    event.remove({ id: 'gtceu:thermal_centrifuge/centrifuge_bauxite_crushed_ore_to_refined_ore' })
    event.remove({ id: 'gtceu:macerator/macerate_bauxite_crushed_ore_to_dust' })
    event.remove({ id: 'gtceu:centrifuge/centrifuge_bauxite_pure_dust_to_dust' })
    event.remove({ id: 'gtceu:extractor/extract_cryolite_dust' })

    event.recipes.gtceu.thermal_centrifuge('centrifuge_bauxite_purified_ore_to_refined_ore')
        .itemInputs('gtceu:purified_bauxite_ore')
        .itemOutputs('gtceu:refined_bauxite_ore')
        .chancedOutput(Item.of('gtceu:gallium_dust', 1), 3300, 0)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.thermal_centrifuge('centrifuge_bauxite_crushed_ore_to_refined_ore')
        .itemInputs('gtceu:crushed_bauxite_ore')
        .itemOutputs('gtceu:refined_bauxite_ore')
        .itemOutputs('gtceu:stone_dust')
        .chancedOutput(Item.of('gtceu:gallium_dust', 1), 3300, 0)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.macerator('macerate_bauxite_crushed_ore_to_dust')
        .itemInputs('gtceu:purified_bauxite_ore')
        .itemOutputs('gtceu:pure_bauxite_dust')
        .chancedOutput(Item.of('gtceu:gallium_dust', 1), 1500, 0)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.centrifuge('centrifuge_bauxite_pure_dust_to_dust')
        .itemInputs('gtceu:pure_bauxite_dust')
        .itemOutputs('gtceu:bauxite_dust')
        .chancedOutput(Item.of('gtceu:gallium_dust', 1), 1500, 0)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV]);






    // event.recipes.gtceu.chemical_bath('gtceu:chemical_bath/bathe_nickel_crushed_ore_to_purified_ore')
    //     .itemInputs('gtceu:crushed_nickel_ore')
    //     .inputFluids('gtceu:mercury 100')
    //     .itemOutputs('gtceu:purified_nickel_ore')
    //     .chancedOutput(Item.of('gtceu:platinum_group_sludge_dust', 1), 5000, 500)
    //     .chancedOutput(Item.of('gtceu:stone_dust', 1), 4000, 0)
    //     .duration(200)
    //     .EUt(GTValues.VA[GTValues.MV]);
    // event.remove({ id: 'gtceu:macerator/macerate_nickel_refined_ore_to_dust' })
    // event.recipes.gtceu.macerator('gtceu:macerator/macerate_nickel_refined_ore_to_dust')
    //     .itemInputs('gtceu:refined_nickel_ore')
    //     .itemOutputs('gtceu:nickel_dust')
    //     .chancedOutput(Item.of('gtceu:platinum_group_sludge_dust', 1), 1500, 500)
    //     .duration(400)
    //     .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.mixer('sodium_hydroxide_solution')
        .itemInputs('gtceu:sodium_hydroxide_dust')
        .inputFluids('minecraft:water 1000')
        .outputFluids('gtceu:sodium_hydroxide_solution 1000')
        .duration(20)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.mixer('sodium_hydroxide_bauxite_from_bauxite')
        .itemInputs('29x gtceu:small_bauxite_dust')
        .inputFluids('gtceu:sodium_hydroxide_solution 6000')
        .outputFluids('gtceu:sodium_hydroxide_bauxite 6000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.mixer('sodium_hydroxide_bauxite_from_bauxite_large_batch')
        .itemInputs('29x gtceu:bauxite_dust')
        .inputFluids('gtceu:sodium_hydroxide_solution 24000')
        .outputFluids('gtceu:sodium_hydroxide_bauxite 24000')
        .duration(15)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.fluid_heater('sodium_hydroxide_bauxite_to_heated')
        .circuit(0)
        .inputFluids('gtceu:sodium_hydroxide_bauxite 6000')
        .outputFluids('gtceu:heated_sodium_hydroxide_bauxite 6000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.centrifuge('bauxite_to_red_mud')
        .circuit(0)
        .inputFluids('gtceu:heated_sodium_hydroxide_bauxite 12000')
        .outputFluids('gtceu:red_mud 3000')
        .outputFluids('gtceu:sodium_aluminate_solution 9000')
        .duration(230)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.chemical_dehydrator('sodium_aluminate_straining')
        .circuit(1)
        .inputFluids('gtceu:sodium_aluminate_solution 9000')
        .itemOutputs('32x gtceu:sodium_aluminate_dust')
        .itemOutputs('3x gtceu:sodium_silicate_dust')
        .chancedOutput(Item.of('gtceu:gallium_dust', 1), 1000, 500)
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV]);

    // event.recipes.gtceu.chemical_reactor('gtceu:chemical_reactor/sodium_amalgam')
    //     .itemInputs('3x gtceu:sodium_dust')
    //     .inputFluids('gtceu:mercury 1000')
    //     .itemOutputs('4x gtceu:sodium_amalgam_dust')
    //     .duration(200)
    //     .EUt(GTValues.VA[GTValues.MV]);

    // event.recipes.gtceu.chemical_reactor('gtceu:chemical_reactor/gallium_amalgam')
    //     .itemInputs('4x gtceu:sodium_amalgam_dust')
    //     .inputFluids('gtceu:gallium_liquor 1000')
    //     .itemOutputs('9x gtceu:sodium_hydroxide_dust')
    //     .itemOutputs('2x gtceu:gallium_amalgam_dust')
    //     .duration(200)
    //     .EUt(GTValues.VA[GTValues.MV]);

    // event.recipes.gtceu.electrolyzer('gtceu:electrolyzer/gallium_amalgam_decomp')
    //     .itemInputs('2x gtceu:gallium_amalgam_dust')
    //     .itemOutputs('1x gtceu:gallium_dust')
    //     .outputFluids('gtceu:mercury 1000')
    //     .duration(200)
    //     .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.chemical_reactor('aluminium_hydroxide_bad')
        .itemInputs('8x gtceu:sodium_aluminate_dust')
        .inputFluids('minecraft:water 3000')
        .inputFluids('gtceu:carbon_dioxide 1000')
        .itemOutputs('14x gtceu:aluminium_hydroxide_dust')
        .itemOutputs('6x gtceu:soda_ash_dust')
        .duration(7200)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.chemical_reactor('alumina_to_aluminium')
        .itemInputs('5x gtceu:alumina')
        .inputFluids('gtceu:oxygen 3000')
        .itemOutputs('2x gtceu:aluminium_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.chemical_reactor('aluminium_hydroxide_good')
        .itemInputs('4x gtceu:sodium_aluminate_dust')
        .inputFluids('minecraft:water 2000')
        .notConsumable('1x gtceu:aluminium_hydroxide_dust')
        .itemOutputs('7x gtceu:aluminium_hydroxide_dust')
        .itemOutputs('3x gtceu:sodium_hydroxide_dust')
        .duration(180)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.electric_blast_furnace('alumina_from_hydroxide')
        .itemInputs('14x gtceu:aluminium_hydroxide_dust')
        .itemOutputs('5x gtceu:alumina_dust')
        .outputFluids('minecraft:water 3000')
        .blastFurnaceTemp(1100)
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.chemical_reactor('sodium_silicate_decomp')
        .itemInputs('6x gtceu:sodium_silicate_dust')
        .inputFluids('gtceu:hydrogen 2000')
        .itemOutputs('6x gtceu:sodium_hydroxide_dust')
        .itemOutputs('3x gtceu:silicon_dioxide_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.mixer('neutralized_red_mud')
        .inputFluids('gtceu:red_mud 2000')
        .inputFluids('gtceu:hydrochloric_acid 3000')
        .outputFluids('gtceu:neutralised_red_mud 2000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.centrifuge('red_mud_slurry')
        .inputFluids('gtceu:neutralised_red_mud 2000')
        .outputFluids('gtceu:red_mud_slurry 1000')
        .outputFluids('gtceu:diluted_hydrochloric_acid 2000')
        .outputFluids('gtceu:salt_water 4000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.centrifuge('red_mud_slurry_decomp')
        .inputFluids('gtceu:red_mud_slurry 1000')
        .chancedOutput('3x gtceu:rutile_dust', 8500, 300)
        .chancedOutput('2x gtceu:vanadium_dust', 500, 400)
        .chancedOutput('5x gtceu:banded_iron_dust', 3000, 500)
        .chancedOutput('2x gtceu:quicklime_dust', 700, 250)
        .chancedOutput('5x gtceu:alumina_dust', 1500, 400)
        .outputFluids('gtceu:water 2000')
        .duration(640)
        .EUt(GTValues.VA[GTValues.MV]);

    // event.recipes.gtceu.chemical_reactor('gtceu:chemical_reactor/cryolite_synth')
    //     .itemInputs('18x gtceu:sodium_hydroxide_dust')
    //     .itemInputs('5x gtceu:alumina_dust')
    //     .inputFluids('gtceu:hydrofluoric_acid 12000')
    //     .itemOutputs('20x gtceu:cryolite_dust')
    //     .outputFluids('gtceu:water 9000')
    //     .duration(400)
    //     .EUt(GTValues.VA[GTValues.MV]);

    // event.recipes.gtceu.electrolyzer('gtceu:electrolyzer/aluminium_dust_from_alumina')
    //     .itemInputs('10x gtceu:alumina_dust')
    //     .inputFluids('gtceu:cryolite 1000')
    //     .inputFluids('gtceu:oxygen 6000')
    //     .itemOutputs('4x gtceu:aluminium_dust')
    //     .itemOutputs('6x gtceu:sodium_fluoride_dust')
    //     .itemOutputs('4x gtceu:aluminium_trifluoride_dust')
    //     .inputFluids('gtceu:water 9000')
    //     .duration(200)
    //     .EUt(GTValues.VA[GTValues.HV]);

    // event.recipes.gtceu.chemical_reactor('gtceu:chemical_reactor/cryolite_main')
    //     .itemInputs('6x gtceu:sodium_fluoride_dust')
    //     .itemInputs('4x gtceu:aluminium_trifluoride_dust')
    //     .itemOutputs('4x gtceu:cryolite_dust')
    //     .duration(200)
    //     .EUt(GTValues.VA[GTValues.MV]);

    // event.recipes.gtceu.chemical_reactor('liquid_cryolite')
    //     .circuit(1)
    //     .itemInputs('1x gtceu:cryolite_dust')
    //     .outputFluids('gtceu:cryolite 100')
    //     .duration(30)
    //     .EUt(GTValues.VA[GTValues.LV]);
})