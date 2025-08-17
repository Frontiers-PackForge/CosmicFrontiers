ServerEvents.tags('block', event => {
    console.log('[2016] - [1] - TAG-WATCHER')
    event.add('quality_food:quality_blocks', 'gtceu:uhv_culinary_assembler')

})



ServerEvents.recipes(event => {

    event.recipes.gtceu.culinary_assembler('rice_yummer')
        .itemInputs('farmersdelight:rice')
        .itemOutputs('farmersdelight:cooked_rice')
        .duration(1)
        .EUt(GTValues.VA[GTValues.EV]);

})


