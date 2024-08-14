ServerEvents.tags('item', event => {
    console.log('Registering Food Tags')
    event.add('gtceu:wheat_dust', 'forge:flour')
})

ServerEvents.recipes(event => {
    console.log('Registering Other Food Recipes')

    event.recipes.gtceu.macerator(`croptopia:paprika`)
        .itemInputs('croptopia:chile_pepper')
        .itemOutputs('croptopia:paprika')
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.mixer(`croptopia:dough`)
        .itemInputs('#forge:flour')
        .inputFluids('minecraft:water 100')
        .itemOutputs('croptopia:dough')
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.mixer(`croptopia:tortilla`)
        .itemInputs('#forge:flour')
        .inputFluids('minecraft:water 100')
        .itemOutputs('2x croptopia:tortilla')
        .circuit(1)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.extruder('croptopia:noodle')
        .itemInputs('#forge:dough')
        .notConsumable('gtceu:rod_extruder_mold')
        .itemOutputs('croptopia:noodle')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    ['croptopia:olive_oil', 'croptopia:soy_sauce'].forEach((flavor) => {
        let fluid = flavor.split(':')[1]
        event.recipes.gtceu.canner(flavor)
            .inputFluids(`gtceu:${fluid} 100`)
            .itemOutputs(flavor)
            .EUt(GTValues.VA[GTValues.LV])
            .duration(400)

        event.recipes.gtceu.extractor(`${flavor}_bottle`)
            .itemInputs(flavor)
            .outputFluids(`gtceu:${fluid} 100`)
            .EUt(GTValues.VA[GTValues.LV])
            .duration(400)
    });
})