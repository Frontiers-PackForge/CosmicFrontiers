ServerEvents.recipes(event => {
    console.log('Registering Food Cutter Recipes')

    event.recipes.gtceu.food_cutter('croptopia:bacon')
        .itemInputs('minecraft:porkchop')
        .itemOutputs('4x croptopia:bacon')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.food_cutter('croptopia:ground_pork')
        .itemInputs('minecraft:porkchop')
        .itemOutputs('2x croptopia:ground_pork')
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)
        .duration(400);

    event.recipes.gtceu.food_cutter('farmersdelight:pumpkin_slice')
        .itemInputs('minecraft:pumpkin')
        .itemOutputs('4x farmersdelight:pumpkin_slice')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);
})