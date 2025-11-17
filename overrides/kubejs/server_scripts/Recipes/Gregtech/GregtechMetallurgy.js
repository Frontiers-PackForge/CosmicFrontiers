ServerEvents.recipes(event => {


    event.recipes.gtceu.mixer(`frontiers:energetic_alloy_dust`)
        .itemInputs(['gtceu:gold_dust', 'gtceu:red_steel_dust', '4x minecraft:glowstone_dust'])
        .itemOutputs('6x cosmiccore:energetic_alloy_dust')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.HV])



    event.remove({ id: 'gtceu:alloy_blast_smelter/vibrant_alloy_gas' })
    event.remove({ id: 'gtceu:alloy_blast_smelter/vibrant_alloy' })

    event.recipes.gtceu.mixer(`frontiers:vibrant_alloy_dust`)
        .itemInputs(['cosmiccore:energetic_alloy_dust', 'gtceu:galvanized_ethersteel_dust', 'gtceu:luminized_titanium_dust', 'gtceu:ender_eye_dust'])
        .itemOutputs('4x cosmiccore:vibrant_alloy_dust')
        .duration(600)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.mixer('gtceu:mixer/melodic_alloy')
        .itemInputs(['2x gtceu:black_steel_dust', '4x cosmiccore:moondrop_dust', '2x gtceu:ender_pearl_dust', '3x gtceu:hafnium_dust'])
        .circuit(4)
        .itemOutputs('11x cosmiccore:melodic_alloy_dust')
        .duration(720)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.mixer('gtceu:mixer/enderium')
        .itemInputs(['3x gtceu:rhodium_dust', '2x gtceu:platinum_dust', '2x gtceu:actinium_dust', '2x gtceu:ender_eye_dust'])
        .circuit(6)
        .itemOutputs('9x cosmiccore:enderium_dust')
        .duration(1250)
        .EUt(GTValues.VA[GTValues.EV]);

    //I Hate you :)
    event.recipes.gtceu.arcane_crucible('frontiers:arcane_crucible/signalum_ingot')
        .itemInputs(['1x gtceu:sterling_silver_ingot', '1x gtceu:coke_dust', '1x gtceu:scandium_dust', '16x gtceu:red_alloy_dust'])
        .chancedItemOutputLogic($ChanceLogic.XOR)
        .chancedOutput('cosmiccore:hot_signalum_ingot', 6500, 0)
        .chancedOutput('4x gtceu:red_alloy_ingot', 3500, 0)
        .emberInput(32000)
        .duration(360)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.orbital_forge_abs('gtceu:mixer/signalum_dust_skip_zpm')
        .itemInputs(['1x gtceu:sterling_silver_dust', '1x gtceu:coke_dust', '1x gtceu:scandium_dust', '16x gtceu:red_alloy_dust'])
        .circuit(14)
        .outputFluids('cosmiccore:signalum 576')
        .duration(1240)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.arcane_crucible('frontiers:arcane_crucible/lumium_ingot')
        .itemInputs(['gtceu:palladium_ingot', 'minecraft:blaze_powder', 'minecraft:glowstone_dust', 'minecraft:honeycomb'])
        .itemOutputs(['cosmiccore:lumium_ingot', 'forestry:beeswax'])
        .emberInput(32000)
        .duration(1500)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.vacuum_freezer('luminite_cooling')
        .itemInputs('gtceu:hot_luminite_ingot')
        .inputFluids('gtceu:ethane 250')
        .itemOutputs('gtceu:luminite_ingot')
        .duration(160)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.electric_blast_furnace('luminite_blasting_slow')
        .itemInputs('gtceu:luminite_dust')
        .itemOutputs('gtceu:hot_luminite_ingot')
        .circuit(1)
        .blastFurnaceTemp(3600)
        .duration(2400)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.electric_blast_furnace('luminite_blasting_fast')
        .itemInputs('gtceu:luminite_dust')
        .inputFluids('gtceu:helium 100')
        .itemOutputs('gtceu:hot_luminite_ingot')
        .circuit(2)
        .blastFurnaceTemp(3600)
        .duration(1800)
        .EUt(GTValues.VA[GTValues.HV])


    event.recipes.gtceu.electric_blast_furnace('enderium_blasting_slow')
        .itemInputs('cosmiccore:enderium_dust')
        .itemOutputs('cosmiccore:hot_enderium_ingot')
        .circuit(1)
        .blastFurnaceTemp(4500)
        .duration(2400)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.electric_blast_furnace('enderium_blasting_fast')
        .itemInputs('cosmiccore:enderium_dust')
        .inputFluids('gtceu:helium 100')
        .itemOutputs('cosmiccore:hot_enderium_ingot')
        .circuit(2)
        .blastFurnaceTemp(4500)
        .duration(1800)
        .EUt(GTValues.VA[GTValues.HV])



    event.recipes.gtceu.alloy_blast_smelter('virtue_meld_molten_bad')
        .inputFluids('gtceu:galvanized_ethersteel 2304')
        .inputFluids('gtceu:luminite 1152')
        .itemInputs('8x cosmiccore:enderium_ingot')
        .itemInputs('8x gtceu:tantalum_ingot')
        .itemInputs('8x botania:life_essence')
        .outputFluids('gtceu:molten_virtue_meld 4608')
        .blastFurnaceTemp(4500)
        .circuit(4)
        .duration(9600)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.alloy_blast_smelter('virtue_meld_molten_good')
        .notConsumableFluid('gtceu:molten_virtue_meld 1152')
        .inputFluids('gtceu:luminite 1152')
        .itemInputs('8x cosmiccore:enderium_ingot')
        .itemInputs('8x gtceu:tantalum_ingot')
        .outputFluids('gtceu:molten_virtue_meld 4608')
        .duration(4800)
        .circuit(14)
        .blastFurnaceTemp(4500)
        .EUt(GTValues.VA[GTValues.EV]);
})