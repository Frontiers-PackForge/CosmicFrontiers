ServerEvents.recipes(event => {
    //Undergarden Smog
    event.remove({ id: 'gtceu:mixer/graphene' })
    event.recipes.gtceu.mixer('white_gold_creation')
        .itemInputs(['3x gtceu:platinum_dust', 'gtceu:gold_dust'])
        .circuit(3)
        .itemOutputs('4x gtceu:white_gold_dust')
        .duration(400)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.electric_blast_furnace('white_gold_ingot')
        .itemInputs('gtceu:white_gold_dust')
        .inputFluids('gtceu:argon 250')
        .itemOutputs('gtceu:white_gold_ingot')
        .blastFurnaceTemp(4500)
        .duration(1500)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.electric_blast_furnace('synthetic_pthanterum')
        .itemInputs(['gtceu:rhenium_sintered_white_gold_ingot', '4x kubejs:resplendent_sylvan_nanolattice'])
        .inputFluids('gtceu:argon 250')
        .itemOutputs('gtceu:synthetic_pthanterum_ingot')
        .blastFurnaceTemp(4500)
        .duration(1500)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.arc_furnace('sintered_rhenium')
        .itemInputs('gtceu:white_gold_ingot')
        .inputFluids('gtceu:vaporized_rhenium 144')
        .itemOutputs('gtceu:rhenium_sintered_white_gold_ingot')
        .duration(400)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.arc_furnace('rhenium_vapor')
        .itemInputs('gtceu:rhenium_dust')
        .inputFluids('gtceu:oxygen 144')
        .outputFluids('gtceu:vaporized_rhenium 144')
        .duration(400)
        .EUt(GTValues.VA[GTValues.IV]);

})