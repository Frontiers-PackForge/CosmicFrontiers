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
        event.recipes.gtceu.canner(flavor)
            .inputFluids(`${flavor} 100`)
            .itemOutputs(flavor)
            .EUt(GTValues.VA[GTValues.LV])
            .duration(400)

        event.recipes.gtceu.extractor(`${flavor}_bottle`)
            .itemInputs(flavor)
            .outputFluids(`${flavor} 100`)
            .EUt(GTValues.VA[GTValues.LV])
            .duration(400)
    });

    ['minecraft:water', 'minecraft:milk'].forEach((flavor) => {
        let fluid = flavor.split(':')[1]
        event.recipes.gtceu.canner(flavor)
            .inputFluids(`${flavor} 100`)
            .itemOutputs(`croptopia:${fluid}_bottle`)
            .EUt(GTValues.VA[GTValues.LV])
            .duration(400)

        event.recipes.gtceu.extractor(`${flavor}_bottle`)
            .itemInputs(`croptopia:${fluid}_bottle`)
            .outputFluids(`${flavor} 100`)
            .EUt(GTValues.VA[GTValues.LV])
            .duration(400)
    });

    event.recipes.gtceu.mixer('croptopia:whipping_cream')
        .itemInputs('minecraft:sugar', 'croptopia:vanilla')
        .inputFluids('minecraft:milk 100')
        .itemOutputs('4x croptopia:whipping_cream')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.mixer('croptopia:mashed_potatoes')
        .itemInputs('minecraft:potato', '#forge:salt')
        .inputFluids(`minecraft:milk 100`)
        .itemOutputs('croptopia:mashed_potatoes')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.mixer('farmersdelight:wheat_dough')
        .itemInputs('#forge:eggs', '3x minecraft:wheat')
        .itemOutputs('farmersdelight:wheat_dough')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.mixer('farmersdelight:wheat_dough_2')
        .itemInputs('3x minecraft:wheat')
        .inputFluids(`minecraft:water 100`)
        .itemOutputs('farmersdelight:wheat_dough')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.mixer('farmersdelight:pie_crust')
        .itemInputs('3x minecraft:wheat')
        .inputFluids(`minecraft:milk 100`)
        .itemOutputs('farmersdelight:pie_crust')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    // Vintage's Delight
    event.recipes.gtceu.mixer('vintagedelight:oat_dough')
        .itemInputs('#forge:eggs', '3x vintagedelight:raw_oats')
        .itemOutputs('vintagedelight:oat_dough')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.mixer('vintagedelight:oat_dough_2')
        .itemInputs('3x vintagedelight:raw_oats')
        .inputFluids(`minecraft:water 100`)
        .itemOutputs('vintagedelight:oat_dough')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);


})