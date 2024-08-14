ServerEvents.recipes(event => {
    console.log('Registering Culinary Assembler Recipes')

    event.recipes.gtceu.culinary_assembler(`croptopia:butter`)
        .itemInputs('#forge:dusts/salt')
        .inputFluids('minecraft:milk 100')
        .itemOutputs('croptopia:butter')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    let pieFlavor = ['minecraft:apple', 'croptopia:cherry', 'croptopia:pecan', 'croptopia:rhubarb']
    pieFlavor.forEach((flavor) => {
        event.recipes.gtceu.culinary_assembler(`croptopia:${flavor.split(':')[1]}_pie`)
            .itemInputs([flavor, 'minecraft:sugar', 'minecraft:egg', '#forge:flour', '#forge:doughs'])
            .itemOutputs(`croptopia:${flavor.split(':')[1]}_pie`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.LV]);
    })

    let jamFlavor = ['croptopia:apricot', 'croptopia:blackberry', 'croptopia:blueberry', 'croptopia:cherry',
        'croptopia:elderberry', 'croptopia:grape', 'croptopia:peach', 'croptopia:raspberry', 'croptopia:strawberry']
    jamFlavor.forEach((flavor) => {
        event.recipes.gtceu.culinary_assembler(`croptopia:${flavor.split(':')[1]}_jam`)
            .itemInputs([flavor, 'minecraft:sugar', 'minecraft:glass_bottle'])
            .itemOutputs(`croptopia:${flavor.split(':')[1]}_jam`)
            .circuit(1)
            .duration(200)
            .EUt(GTValues.VA[GTValues.LV]);
    })

    let iceCreamFlavor = ['croptopia:mango', 'croptopia:pecan', 'croptopia:strawberry', 'croptopia:vanilla']
    iceCreamFlavor.forEach((flavor) => {
        event.recipes.gtceu.culinary_assembler(`croptopia:${flavor.split(':')[1]}_ice_cream`)
            .itemInputs([flavor, 'minecraft:sugar', 'minecraft:egg', 'minecraft:snowball', 'minecraft:bowl'])
            .inputFluids('minecraft:milk 100')
            .itemOutputs(`croptopia:${flavor.split(':')[1]}_ice_cream`)
            .circuit(2)
            .duration(200)
            .EUt(GTValues.VA[GTValues.LV]);
    })

    event.recipes.gtceu.culinary_assembler(`croptopia:cheese`)
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:cheese`)
        .circuit(1)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:tofu`)
        .itemInputs('croptopia:soybean')
        .inputFluids('minecraft:water 100')
        .itemOutputs(`croptopia:tofu`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:steamed_rice`)
        .itemInputs('#forge:rice', '#forge:salt')
        .inputFluids('minecraft:water 100')
        .itemOutputs(`croptopia:steamed_rice`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:chocolate`)
        .itemInputs('minecraft:cocoa_beans', 'croptopia:butter')
        .itemOutputs('4x croptopia:chocolate')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:ravioli`)
        .itemInputs('#forge:cheese', 'croptopia:noodle')
        .itemOutputs('2x croptopia:ravioli')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:pepperoni`)
        .itemInputs('minecraft:beef', 'minecraft:porkchop', 'croptopia:paprika', 'croptopia:chile_pepper')
        .itemOutputs('4x croptopia:pepperoni')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:salsa`)
        .itemInputs('#forge:tomatoes', 'croptopia:chile_pepper', '#forge:salt', 'croptopia:lime', 'croptopia:tomatillo')
        .itemOutputs('4x croptopia:salsa')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:artichoke_dip`)
        .itemInputs('#forge:cheese', 'croptopia:artichoke')
        .itemOutputs('croptopia:artichoke_dip')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:beef_jerky`)
        .itemInputs('8x minecraft:beef', '#forge:salt')
        .itemOutputs('14x croptopia:beef_jerky')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:pork_jerky`)
        .itemInputs('8x minecraft:porkchop', '#forge:salt')
        .itemOutputs('14x croptopia:pork_jerky')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    ['croptopia:banana', 'croptopia:strawberry'].forEach((flavor) => {
        let fruit = flavor.split(':')[1];
        event.recipes.gtceu.culinary_assembler(`croptopia:${fruit}_smoothie`)
            .itemInputs('minecraft:glass_bottle', 'minecraft:ice', flavor)
            .inputFluids('minecraft:milk 100')
            .itemOutputs(`croptopia:${fruit}_smoothie`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.LV]);
    })

    event.recipes.gtceu.culinary_assembler(`croptopia:chocolate_milkshake`)
        .itemInputs('minecraft:glass_bottle', 'croptopia:vanilla_ice_cream', 'croptopia:chocolate')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:chocolate_milkshake`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:kale_smoothie`)
        .itemInputs('minecraft:glass_bottle', 'minecraft:ice', 'croptopia:kale', 'croptopia:mango')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:kale_smoothie`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:fruit_smoothie`)
        .itemInputs('minecraft:glass_bottle', 'minecraft:ice', '3x #foorge:fruits')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:fruit_smoothie`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:doughnut`)
        .itemInputs('2x #forge:flour', 'minecraft:sugar')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:doughnut`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:cucumber_salad`)
        .itemInputs('minecraft:bowl', 'croptopia:lettuce', 'croptopia:spinach', '#forge:cucumbers')
        .itemOutputs(`croptopia:cucumber_salad`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:leafy_salad`)
        .itemInputs('minecraft:bowl', 'croptopia:lettuce', 'croptopia:spinach', 'croptopia:kale')
        .itemOutputs(`croptopia:leafy_salad`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:caesar_salad`)
        .itemInputs('minecraft:bowl', 'croptopia:lettuce', 'croptopia:olive', 'croptopia:garlic', 'croptopia:toast')
        .itemOutputs(`croptopia:caesar_salad`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:fruit_salad`)
        .itemInputs('minecraft:bowl', 'croptopia:strawberry', 'croptopia:banana', 'croptopia:grape', 'minecraft:apple')
        .itemOutputs(`croptopia:fruit_salad`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:veggie_salad`)
        .itemInputs('minecraft:bowl', '#forge:cucumbers', '#forge:corn', 'croptopia:lettuce', 'minecraft:carrot')
        .itemOutputs(`croptopia:veggie_salad`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:pork_and_beans`)
        .itemInputs('minecraft:bowl', 'croptopia:blackbean', 'minecraft:porkchop')
        .itemOutputs(`croptopia:pork_and_beans`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:oatmeal`)
        .itemInputs('minecraft:bowl', 'croptopia:oat')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:oatmeal`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:leek_soup`)
        .itemInputs('minecraft:bowl', 'croptopia:leek', 'minecraft:potato')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:leek_soup`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:yoghurt`)
        .itemInputs('minecraft:bowl', 'croptopia:strawberry')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:yoghurt`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:saucy_chips`)
        .itemInputs('minecraft:bowl', '#croptopia:sauces', 'croptopia:potato_chips')
        .itemOutputs(`croptopia:saucy_chips`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:trail_mix`)
        .itemInputs('3x #forge:nuts', 'croptopia:raisins', '#forge:salt', 'croptopia:chocolate')
        .itemOutputs(`4x croptopia:trail_mix`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:protein_bar`)
        .itemInputs('2x #forge:nuts', 'minecraft:sugar', 'croptopia:caramel', 'croptopia:chocolate', '#forge:salt')
        .itemOutputs(`3x croptopia:protein_bar`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:nougat`)
        .itemInputs('2x #forge:nuts', '2x minecraft:sugar', '2x minecraft:egg')
        .itemOutputs(`2x croptopia:nougat`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:scrambled_eggs`)
        .itemInputs('minecraft:egg', '#forge:cheese')
        .itemOutputs(`croptopia:scrambled_eggs`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:buttered_toast`)
        .itemInputs('croptopia:toast', 'croptopia:butter')
        .itemOutputs(`croptopia:buttered_toast`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:toast_with_jam`)
        .itemInputs('croptopia:toast', '#forge:jams')
        .itemOutputs(`croptopia:toast_with_jam`, 'minecraft:glass_bottle')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:ham_sandwich`)
        .itemInputs('minecraft:bread', '#forge:cheese', 'minecraft:cooked_porkchop')
        .itemOutputs(`croptopia:ham_sandwich`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:peanut_butter_and_jam`)
        .itemInputs('minecraft:bread', 'croptopia:peanut_butter', '#forge:jams')
        .itemOutputs(`croptopia:peanut_butter_and_jam`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:blt`)
        .itemInputs('minecraft:bread', 'croptopia:cooked_bacon', 'croptopia:lettuce', '#forge:tomatoes')
        .itemOutputs(`croptopia:blt`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:grilled_cheese`)
        .itemInputs('minecraft:bread', '#forge:cheese')
        .itemOutputs(`croptopia:grilled_cheese`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:cheeseburger`)
        .itemInputs('minecraft:bread', '#forge:cheese', '#croptopia:beef_replacements')
        .itemOutputs(`croptopia:cheeseburger`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:hamburger`)
        .itemInputs('minecraft:bread', 'minecraft:beef')
        .itemOutputs(`croptopia:hamburger`)
        .circuit(1)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:tofuburger`)
        .itemInputs('minecraft:bread', 'croptopia:lettuce', 'croptopia:tofu', '#forge:onions')
        .itemOutputs(`croptopia:tofuburger`)
        .circuit(1)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:pizza`)
        .itemInputs('#forge:doughs', '#forge:cheese', '#forge:tomatoes')
        .itemOutputs(`croptopia:pizza`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:cheese_pizza`)
        .itemInputs('#forge:doughs', '2x #forge:cheese', '#forge:tomatoes')
        .itemOutputs(`croptopia:cheese_pizza`)
        .circuit(2)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:supreme_pizza`)
        .itemInputs('#forge:doughs', '#forge:cheese', '#forge:tomatoes',
            'croptopia:bellpepper', 'croptopia:olive', '#croptopia:meat_replacements')
        .itemOutputs(`croptopia:supreme_pizza`)
        .circuit(1)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:pineapple_pepperoni_pizza`)
        .itemInputs('#forge:doughs', '#forge:cheese', '#forge:tomatoes',
            '2x #forge:pineapples', 'croptopia:pepperoni')
        .itemOutputs(`croptopia:pineapple_pepperoni_pizza`)
        .circuit(1)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:lemon_chicken`)
        .itemInputs('croptopia:lemon', 'croptopia:chile_pepper', '#forge:raw_chicken', '#forge:tomatoes')
        .itemOutputs(`croptopia:lemon_chicken`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:chicken_and_noodles`)
        .itemInputs('#forge:raw_chicken', 'croptopia:chile_pepper', 'croptopia:noodle', 'minecraft:bowl')
        .inputFluids('gtceu:olive_oil 50')
        .itemOutputs(`croptopia:chicken_and_noodles`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:chicken_and_dumplings`)
        .itemInputs('#forge:raw_chicken', 'croptopia:chile_pepper', '#forge:doughs', 'minecraft:bowl')
        .itemOutputs(`croptopia:chicken_and_dumplings`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:tofu_and_dumplings`)
        .itemInputs('croptopia:tofu', 'croptopia:chile_pepper', '#forge:doughs', 'minecraft:bowl')
        .itemOutputs(`croptopia:tofu_and_dumplings`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:spaghetti_squash`)
        .itemInputs('croptopia:squash', 'croptopia:chile_pepper')
        .inputFluids('gtceu:olive_oil 50')
        .itemOutputs(`croptopia:spaghetti_squash`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:chicken_and_rice`)
        .itemInputs('#forge:rice', 'croptopia:chile_pepper', '#croptopia:chicken_replacements')
        .inputFluids('gtceu:olive_oil 50')
        .itemOutputs(`croptopia:chicken_and_rice`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:taco`)
        .itemInputs('croptopia:tortilla', '#forge:cheese', 'croptopia:lettuce', 'croptopia:salsa', '#croptopia:meat_replacements')
        .itemOutputs(`croptopia:taco`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:sushi`)
        .itemInputs('minecraft:seagrass', '#croptopia:fishes', '#forge:rice')
        .itemOutputs(`croptopia:sushi`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:egg_roll`)
        .itemInputs('#forge:doughs', '#croptopia:meat_replacements', 'croptopia:lettuce', 'minecraft:egg')
        .itemOutputs(`croptopia:egg_roll`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:cashew_chicken`)
        .itemInputs('#forge:cabbage', 'minecraft:carrot', 'croptopia:cashew', '#forge:cooked_chicken')
        .inputFluids('gtceu:soy_sauce 100')
        .itemOutputs(`croptopia:cashew_chicken`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:yam_jam`)
        .itemInputs('croptopia:vanilla', 'croptopia:yam')
        .inputFluids('minecraft:milk 200')
        .itemOutputs(`croptopia:yam_jam`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:banana_cream_pie`)
        .itemInputs('croptopia:vanilla', 'croptopia:banana', 'minecraft:sugar', 'minecraft:egg')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:banana_cream_pie`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:candy_corn`)
        .itemInputs('#forge:corn', '2x minecraft:sugar')
        .itemOutputs(`croptopia:candy_corn`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:candied_nuts`)
        .itemInputs('2x #forge:nuts', '2x minecraft:sugar')
        .itemOutputs(`4x croptopia:candied_nuts`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:rum_raisin_ice_cream`)
        .itemInputs('croptopia:rum', 'croptopia:raisins', 'minecraft:sugar', 'minecraft:egg', 'minecraft:snowball')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:rum_raisin_ice_cream`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:brownies`)
        .itemInputs('#forge:flour', 'minecraft:sugar', 'minecraft:egg', 'croptopia:chocolate')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:brownies`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:snicker_doodle`)
        .itemInputs('croptopia:cinnamon', 'minecraft:sugar', '#forge:flour')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`4x croptopia:snicker_doodle`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:banana_nut_bread`)
        .itemInputs('croptopia:cinnamon', 'minecraft:sugar', '#forge:flour', 'croptopia:banana', '#forge:nuts')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`2x croptopia:banana_nut_bread`)
        .circuit(1)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);
})