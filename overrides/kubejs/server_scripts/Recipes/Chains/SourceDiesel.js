ServerEvents.recipes(event => {
    event.recipes.gtceu.ore_washer('frontiers:washed_magebloom')
        .itemInputs('ars_nouveau:magebloom')
        .inputFluids('100x minecraft:water')
        .itemOutputs('cosmiccore:washed_magebloom')
        .duration(20)
        .EUt(16)

    event.recipes.gtceu.ore_washer('frontiers:washed_magebloom/with_distilled_water')
        .itemInputs('ars_nouveau:magebloom')
        .circuit(1)
        .inputFluids('100x gtceu:distilled_water')
        .itemOutputs('cosmiccore:washed_magebloom')
        .duration(10)
        .EUt(16)

    event.recipes.gtceu.macerator('frontiers:shredded_magebloom')
        .itemInputs('cosmiccore:washed_magebloom')
        .itemOutputs('cosmiccore:shredded_magebloom')
        .duration(40)
        .EUt(GTValues.V[GTValues.LV], 1)

    event.recipes.gtceu.chemical_reactor('frontiers:dirty_magebloom_slurry')
        .itemInputs('4x cosmiccore:shredded_magebloom')
        .inputFluids(['250x gtceu:potent_mana', '3750x minecraft:water'])
        .outputFluids('4000x gtceu:dirty_magebloom_slurry')
        .duration(160)
        .EUt(GTValues.V[GTValues.LV], 2)

    event.recipes.gtceu.mixer('frontiers:two_phase_source_benzene_mixture')
        .inputFluids(['4000x gtceu:dirty_magebloom_slurry', '1000x gtceu:benzene'])
        .outputFluids('5000x gtceu:two_phase_source_benzene_mixture')
        .duration(100)
        .EUt(GTValues.V[GTValues.LV], 1)

    event.recipes.gtceu.centrifuge('frontiers:source_oils')
        .inputFluids('1000x gtceu:two_phase_source_benzene_mixture')
        .outputFluids([
            '700x gtceu:source_oils',
            '200x gtceu:benzene',
            '100x gtceu:source_waste_water'
        ])
        .duration(200)
        .EUt(GTValues.V[GTValues.LV], 1)

    event.recipes.gtceu.distillation_tower('frontiers:source_oils')
        .inputFluids('1000x gtceu:source_waste_water')
        .outputFluids([
            '250x gtceu:source_oils',
            '250x minecraft:water',
            '500x gtceu:source_waste_water'
        ])
        .duration(200)
        .EUt(GTValues.V[GTValues.LV], 2)

    event.recipes.gtceu.chemical_reactor('frontiers:source_enhanced_bio_fuel')
        .itemInputs('gtceu:tiny_sodium_hydroxide_dust')
        .inputFluids(['6000x gtceu:source_oils', '1000x gtceu:ethanol'])
        .outputFluids(['6000x gtceu:source_enhanced_bio_fuel', '1000x gtceu:glycerol'])
        .duration(600)
        .EUt(GTValues.V[GTValues.LV], 8)

    event.recipes.gtceu.large_chemical_reactor('frontiers:source_enhanced_bio_fuel')
        .itemInputs('gtceu:sodium_hydroxide_dust')
        .inputFluids(['54000x gtceu:source_oils', '9000x gtceu:ethanol'])
        .outputFluids(['54000x gtceu:source_enhanced_bio_fuel', '9000x gtceu:glycerol'])
        .duration(600)
        .EUt(GTValues.V[GTValues.LV], 4)
})
