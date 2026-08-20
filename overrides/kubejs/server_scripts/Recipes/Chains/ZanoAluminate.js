ServerEvents.recipes(event => {
    // 4Zi + 4Ab + 4Al -> 4ZiAbAl (compound synthesis)
    event.recipes.gtceu.chemical_reactor('frontiers:zano_aluminate_dust')
        .itemInputs(['4x gtceu:zanite_dust', '4x gtceu:ambrosium_dust'])
        .inputFluids('576x gtceu:aluminium')
        .itemOutputs('12x gtceu:zano_aluminate_dust')
        .duration(390)
        .EUt(GTValues.V[GTValues.MV], 4)
})
