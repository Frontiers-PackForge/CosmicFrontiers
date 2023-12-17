ServerEvents.recipes(event => {
    event.recipes.gtceu.basic_alternator('power_recipe_1')
        .inputStress(256)
        .rpm(32)
        .duration(2)
        .EUt(-32);

        event.recipes.gtceu.basic_alternator('basic_power_recipe_1')
        .inputStress(1024)
        .rpm(256)
        .duration(2)
        .EUt(-256);

})




// 64mb Steam -> 256SU -> 32eu : 1t