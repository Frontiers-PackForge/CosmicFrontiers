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

})