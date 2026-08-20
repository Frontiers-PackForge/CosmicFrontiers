ServerEvents.recipes(event => {
    event.recipes.cosmiccore.vacuum_bubbler('frontiers:chains/emberite_binder/resin_fractionation')
        .itemInputs('4x gtceu:sticky_resin')
        .inputFluids('250x gtceu:ethanol')
        .outputFluids(['875x gtceu:pelletizing_rosin', '125x gtceu:turpentine'])
        .duration(160)
        .EUt(GTValues.V[GTValues.MV], 4)

    event.recipes.gtceu.mixer('frontiers:cinder_pellet_binder')
        .itemInputs('4x cosmiccore:cannon_powder')
        .inputFluids('750x gtceu:pelletizing_rosin')
        .outputFluids('1000x gtceu:cinder_pellet_binder')
        .duration(160)
        .EUt(GTValues.V[GTValues.MV], 1)

})
