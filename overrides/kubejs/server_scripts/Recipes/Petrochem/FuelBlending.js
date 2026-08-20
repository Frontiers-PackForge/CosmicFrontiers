ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer('frontiers:diesel')
        .inputFluids(['5000x gtceu:middle_fraction_distillates', '1000x gtceu:gas_oils'])
        .outputFluids('6000x gtceu:diesel')
        .duration(16)
        .EUt(GTValues.V[GTValues.MV], 1)

    event.recipes.cosmiccore.fluid_catalytic_cracking('frontiers:petrochem/c4_octane_alkylation')
        .itemInputs('16x cosmiccore:purple_zeolite_catalyst')
        .inputFluids(['1000x gtceu:butane', '1000x gtceu:butene'])
        .itemOutputs('16x cosmiccore:coked_purple_zeolite_catalyst')
        .outputFluids('1000x gtceu:octane')
        .duration(200)
        .EUt(GTValues.V[GTValues.EV], 8)

    event.recipes.gtceu.large_chemical_reactor('frontiers:gasoline')
        .inputFluids(['8000x gtceu:raw_gasoline', '2000x cosmiccore:high_octane_reformate', '500x gtceu:octane', '500x gtceu:toluene'])
        .outputFluids('11000x gtceu:gasoline')
        .duration(160)
        .EUt(GTValues.V[GTValues.EV], 2)
})
// General Fuel Recipes created from the EV section of the tree, may be extremely unbalanced or stupidly rated, since i've added the MPS these values might just suck too.
// Ugh.
// Updated Aug 2026 (If i forget about this script and suddenly power becomes overpowered in EV, hopefully this will remind me cause god I hate balancing power numbers...)