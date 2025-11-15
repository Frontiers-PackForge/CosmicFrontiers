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


    event.recipes.gtceu.arcane_crucible('frontiers:arcane_crucible/lumium_ingot')
        .itemInputs(['gtceu:palladium_ingot', 'minecraft:blaze_powder', 'minecraft:glowstone_dust', 'minecraft:honeycomb'])
        .itemOutputs(['cosmiccore:lumium_ingot', 'forestry:beeswax'])
        .emberInput(32000)
        .duration(1500)
        .EUt(GTValues.VA[GTValues.EV]);

})