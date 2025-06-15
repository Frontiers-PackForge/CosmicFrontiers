ServerEvents.recipes(event => {
    // event.remove({ input: 'gtceu:manasteel_dust' })
    event.recipes.gtceu.arcane_distillery('frontiers:arcane_distil_1')
        .inputFluids('blasmatech:mana 8000', 'gtceu:argon_plasma 1000')
        .chancedOutput('cosmiccore:tessaron', 100, 0)
        .chancedOutput('cosmiccore:vexiun', 100, 0)
        .duration(390)
        .EUt(GTValues.VA[GTValues.UV]);
    event.recipes.gtceu.arcane_distillery('frontiers:arcane_distil_2')
        .inputFluids('gtceu:source_oils 8000', 'gtceu:argon_plasma 1000')
        .chancedOutput('cosmiccore:ambrion', 100, 0)
        .chancedOutput('cosmiccore:ethera', 100, 0)
        .duration(390)
        .EUt(GTValues.VA[GTValues.UV]);
})