ServerEvents.recipes(event => {
    // 3ThSiO4 + 4H3PO4 -> Th3(PO4)4 + 3SiO2 + 6H2O (phosphate conversion)
    event.recipes.gtceu.chemical_reactor('frontiers:chains/utherium_ceramic/phosphate_precipitation')
        .itemInputs('3x cosmiccore:utherium_dust')
        .inputFluids('4000x gtceu:phosphoric_acid')
        .itemOutputs('23x gtceu:utherium_phosphate_dust', '9x gtceu:silicon_dioxide_dust')
        .outputFluids('6000x gtceu:distilled_water')
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])

    // Th3(PO4)4 + Al2O3 -> Th3Al2P4O19 (solid-state reaction)
    event.recipes.gtceu.electric_blast_furnace('frontiers:chains/utherium_ceramic/solid_state_sintering')
        .itemInputs(['23x gtceu:utherium_phosphate_dust', '5x gtceu:alumina_dust'])
        .itemOutputs('28x gtceu:utherium_ceramic_dust')
        .blastFurnaceTemp(1700)
        .duration(600)
        .EUt(GTValues.VA[GTValues.MV])

})
