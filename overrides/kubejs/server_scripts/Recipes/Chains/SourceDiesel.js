ServerEvents.recipes(event => {
    event.recipes.gtceu.ore_washer('frontiers:chains/source_diesel/magebloom_washing')
        .itemInputs('ars_nouveau:magebloom')
        .inputFluids('100x minecraft:water')
        .itemOutputs('cosmiccore:washed_magebloom')
        .duration(20)
        .EUt(16)

    event.recipes.gtceu.ore_washer('frontiers:chains/source_diesel/magebloom_washing_distilled')
        .itemInputs('ars_nouveau:magebloom')
        .circuit(1)
        .inputFluids('100x gtceu:distilled_water')
        .itemOutputs('cosmiccore:washed_magebloom')
        .duration(10)
        .EUt(16)

    event.recipes.gtceu.macerator('frontiers:chains/source_diesel/magebloom_shredding')
        .itemInputs('cosmiccore:washed_magebloom')
        .itemOutputs('cosmiccore:shredded_magebloom')
        .duration(40)
        .EUt(16)

    event.recipes.gtceu.chemical_reactor('frontiers:chains/source_diesel/magebloom_extraction')
        .itemInputs('4x cosmiccore:shredded_magebloom')
        .inputFluids(['250x gtceu:potent_mana', '3750x minecraft:water'])
        .outputFluids('4000x gtceu:dirty_magebloom_slurry')
        .duration(160)
        .EUt(24)

    event.recipes.gtceu.mixer('frontiers:chains/source_diesel/benzene_extraction')
        .inputFluids(['4000x gtceu:dirty_magebloom_slurry', '1000x gtceu:benzene'])
        .outputFluids('5000x gtceu:two_phase_source_benzene_mixture')
        .duration(100)
        .EUt(16)

    event.recipes.gtceu.centrifuge('frontiers:chains/source_diesel/biphasic_separation')
        .inputFluids('1000x gtceu:two_phase_source_benzene_mixture')
        .outputFluids([
            '700x gtceu:source_oils',
            '200x gtceu:benzene',
            '100x gtceu:source_waste_water'
        ])
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.distillation_tower('frontiers:chains/source_diesel/waste_water_recovery')
        .inputFluids('1000x gtceu:source_waste_water')
        .outputFluids([
            '250x gtceu:source_oils',
            '250x minecraft:water',
            '500x gtceu:source_waste_water'
        ])
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('frontiers:chains/source_diesel/source_diesel')
        .itemInputs('gtceu:tiny_sodium_hydroxide_dust')
        .inputFluids(['6000x gtceu:source_oils', '1000x gtceu:ethanol'])
        .outputFluids(['6000x gtceu:source_enhanced_bio_fuel', '1000x gtceu:glycerol'])
        .duration(600)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.large_chemical_reactor('frontiers:chains/source_diesel/source_diesel_batch')
        .itemInputs('gtceu:sodium_hydroxide_dust')
        .inputFluids(['54000x gtceu:source_oils', '9000x gtceu:ethanol'])
        .outputFluids(['54000x gtceu:source_enhanced_bio_fuel', '9000x gtceu:glycerol'])
        .duration(600)
        .EUt(GTValues.VA[GTValues.LV])
})
