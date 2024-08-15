ServerEvents.recipes(event => {
    console.log('Registering Juicer Recipes')

    let juiceFlavor = ['minecraft:apple', 'croptopia:cranberry', 'croptopia:grape', '#croptopia:melons', '#forge:pineapples',
        'croptopia:orange', 'croptopia:saguaro', '#forge:tomatoes']
    juiceFlavor.forEach((flavor) => {
        // replace trailing 's' to allow use of tags
        let fruit = (flavor !== '#forge:tomatoes')
            ? flavor.split(':')[1].replace(/s$/, '')
            : 'tomato';
        event.recipes.gtceu.juicer(`croptopia:${fruit}_juice`)
            .itemInputs([flavor, 'minecraft:glass_bottle'])
            .itemOutputs(`croptopia:${fruit}_juice`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.LV]);
    })

    event.recipes.gtceu.juicer(`croptopia:soy_sauce`)
        .itemInputs('croptopia:soybean')
        .inputFluids('minecraft:water 100')
        .outputFluids('croptopia:soy_sauce 100')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.juicer(`croptopia:olive_oil`)
        .itemInputs('2x croptopia:olive')
        .outputFluids('croptopia:olive_oil 100')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.juicer(`croptopia:lemonade`)
        .itemInputs('minecraft:glass_bottle', 'croptopia:lemon')
        .itemOutputs(`croptopia:lemonade`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.juicer(`croptopia:soy_milk`)
        .itemInputs('minecraft:glass_bottle', 'croptopia:soybean')
        .outputFluids('croptopia:soy_milk 100')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.juicer(`croptopia:limeade`)
        .itemInputs('minecraft:glass_bottle', 'croptopia:lemon', 'croptopia:lime')
        .itemOutputs(`croptopia:limeade`)
        .duration(200)
        .circuit(1)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.juicer(`croptopia:wine`)
        .itemInputs('minecraft:glass_bottle', '2x croptopia:grape')
        .itemOutputs(`croptopia:wine`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.juicer(`croptopia:mead`)
        .itemInputs('minecraft:glass_bottle', 'minecraft:honey_bottle')
        .inputFluids('minecraft:water 100')
        .itemOutputs(`croptopia:mead`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.juicer(`croptopia:rum`)
        .itemInputs('minecraft:glass_bottle', 'croptopia:molasses')
        .inputFluids('minecraft:water 100')
        .itemOutputs(`croptopia:rum`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.juicer(`croptopia:beer`)
        .itemInputs('minecraft:glass_bottle', 'croptopia:hops', 'croptopia:barley')
        .itemOutputs(`croptopia:beer`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.juicer(`croptopia:peanut_butter`)
        .itemInputs('4x croptopia:peanut')
        .itemOutputs(`4x croptopia:peanut_butter`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.juicer(`farmersdelight:tomato_sauce`)
        .itemInputs('2x #forge:tomatoes')
        .itemOutputs(`farmersdelight:tomato_sauce`)
        .duration(200)
        .circuit(1)
        .EUt(GTValues.VA[GTValues.LV]);

})