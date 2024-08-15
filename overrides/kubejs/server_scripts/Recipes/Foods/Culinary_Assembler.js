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
        .inputFluids('croptopia:olive_oil 100')
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
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs(`croptopia:spaghetti_squash`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:chicken_and_rice`)
        .itemInputs('#forge:rice', 'croptopia:chile_pepper', '#croptopia:chicken_replacements')
        .inputFluids('croptopia:olive_oil 100')
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
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:almond_brittle`)
        .itemInputs('croptopia:butter', 'croptopia:almond', '2x minecraft:sugar')
        .itemOutputs(`2x croptopia:almond_brittle`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:raisin_oatmeal_cookie`)
        .itemInputs('croptopia:raisins', 'minecraft:sugar', '#forge:flour', 'croptopia:oatmeal')
        .itemOutputs(`4x croptopia:raisin_oatmeal_cookie`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:nutty_cookie`)
        .itemInputs('2x #forge:nuts', 'minecraft:sugar', '#forge:flour')
        .itemOutputs(`4x croptopia:nutty_cookie`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:burrito`)
        .itemInputs('#forge:rice', '#forge:tomatoes', 'croptopia:blackbean', 'croptopia:tortilla')
        .itemOutputs(`croptopia:burrito`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:tostada`)
        .itemInputs('croptopia:lettuce', '#forge:tomatoes', '2x croptopia:blackbean', 'croptopia:tortilla')
        .itemOutputs(`croptopia:tostada`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:horchata`)
        .itemInputs('#forge:rice', 'croptopia:almond', 'croptopia:lime', 'croptopia:cinnamon', 'minecraft:sugar')
        .inputFluids('minecraft:water 100')
        .itemOutputs(`croptopia:horchata`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:carnitas`)
        .itemInputs('minecraft:porkchop', 'croptopia:tortilla', '#forge:cabbage', '#forge:onions')
        .itemOutputs(`croptopia:carnitas`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:fajitas`)
        .itemInputs('#croptopia:meat_replacements', 'croptopia:bellpepper', '#forge:tomatoes', '#forge:onions', '#forge:cheese')
        .itemOutputs(`2x croptopia:fajitas`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:enchilada`)
        .itemInputs('#croptopia:meat_replacements', '#forge:tomatoes', '#forge:cheese', 'croptopia:tortilla')
        .itemOutputs(`2x croptopia:enchilada`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:churros`)
        .itemInputs('#forge:flour', 'minecraft:sugar', 'croptopia:cinnamon')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`3x croptopia:churros`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:tamales`)
        .itemInputs('#forge:onions', 'croptopia:chile_pepper', '#forge:flour', '#forge:salt', 'croptopia:corn_husk', '#forge:raw_chicken')
        .itemOutputs(`croptopia:tamales`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:tres_leche_cake`)
        .itemInputs('#forge:flour', 'minecraft:egg', 'minecraft:sugar', 'croptopia:vanilla', 'croptopia:whipping_cream', 'croptopia:rum')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`2x croptopia:tres_leche_cake`, 'minecraft:glass_bottle')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:stuffed_poblanos`)
        .itemInputs('#forge:cheese', 'croptopia:chile_pepper', '#forge:corn', 'croptopia:blackbean', '#forge:rice', '#croptopia:beef_replacements')
        .itemOutputs(`croptopia:stuffed_poblanos`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:chili_relleno`)
        .itemInputs('#forge:flour', 'croptopia:chile_pepper', '#forge:salt', 'minecraft:egg')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs(`croptopia:chili_relleno`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:crema`)
        .itemInputs('#forge:salt', 'croptopia:lime')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`4x croptopia:crema`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:refried_beans`)
        .itemInputs('#forge:cheese', '2x croptopia:blackbean', 'croptopia:chile_pepper')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`4x croptopia:refried_beans`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:chimichanga`)
        .itemInputs('croptopia:burrito', '#forge:flour')
        .itemOutputs(`croptopia:chimichanga`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:quesadilla`)
        .itemInputs('2x croptopia:tortilla', 'croptopia:avocado', '#forge:cheese', '#croptopia:chicken_replacements')
        .itemOutputs(`2x croptopia:quesadilla`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler(`croptopia:corn_husk`)
        .itemInputs('4x #forge:corn')
        .itemOutputs(`8x croptopia:corn_husk`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.culinary_assembler('croptopia:shepherds_pie')
        .itemInputs('#forge:salt', '#croptopia:beef_mutton', '#forge:corn', '#forge:onions',
            'croptopia:pepper', 'minecraft:potato', '#forge:tomatoes', 'croptopia:garlic')
        .itemOutputs('croptopia:shepherds_pie')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:beef_wellington')
        .itemInputs('#forge:flour', '#forge:onions', 'croptopia:mustard', 'croptopia:pepper',
            'minecraft:egg', 'minecraft:beef', 'minecraft:brown_mushroom')
        .itemOutputs('croptopia:beef_wellington')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:fish_and_chips')
        .itemInputs('#forge:flour', '#forge:salt', 'croptopia:pepper', '#minecraft:fishes', 'minecraft:potato')
        .itemOutputs('croptopia:fish_and_chips')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:eton_mess')
        .itemInputs('2x croptopia:strawberry', '2x minecraft:egg', 'croptopia:whipping_cream', 'minecraft:sugar')
        .itemOutputs('croptopia:eton_mess')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:cornish_pasty')
        .itemInputs('#forge:onions', '#forge:flour', 'croptopia:rutabaga', 'croptopia:pepper', 'minecraft:beef', 'minecraft:potato')
        .itemOutputs('croptopia:cornish_pasty')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:scones')
        .itemInputs('minecraft:egg', 'croptopia:vanilla', 'croptopia:blueberry', '#forge:flour', '#forge:salt', 'minecraft:sugar')
        .itemOutputs('2x croptopia:scones')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:figgy_pudding')
        .itemInputs('croptopia:date', 'croptopia:fig', 'minecraft:sugar', 'minecraft:egg', 'croptopia:whipping_cream')
        .inputFluids('minecraft:water 100')
        .itemOutputs('croptopia:figgy_pudding')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:treacle_tart')
        .itemInputs('3x minecraft:bread', 'minecraft:honey_bottle', 'croptopia:lemon', 'croptopia:whipping_cream')
        .itemOutputs('3x croptopia:treacle_tart', 'minecraft:glass_bottle')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:sticky_toffee_pudding')
        .itemInputs('croptopia:date', '#forge:salt', 'croptopia:whipping_cream', 'minecraft:sugar', 'croptopia:butter', 'minecraft:egg', 'croptopia:vanilla')
        .inputFluids('minecraft:water 100')
        .itemOutputs('croptopia:sticky_toffee_pudding')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:trifle')
        .itemInputs('croptopia:strawberry', 'minecraft:bread', 'croptopia:wine', 'croptopia:butter', 'minecraft:egg', 'croptopia:vanilla')
        .inputFluids('minecraft:milk 100')
        .itemOutputs('croptopia:trifle', 'minecraft:glass_bottle')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:ajvar')
        .itemInputs('croptopia:chile_pepper', '#forge:salt', 'croptopia:bellpepper', 'croptopia:eggplant', 'croptopia:garlic')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('croptopia:ajvar')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:ajvar_toast')
        .itemInputs('croptopia:ajvar', 'croptopia:toast')
        .itemOutputs('croptopia:ajvar_toast')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:avocado_toast')
        .itemInputs('croptopia:avocado', 'croptopia:toast')
        .itemOutputs('croptopia:avocado_toast')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:beef_stew')
        .itemInputs('2x minecraft:carrot', 'minecraft:beef', 'minecraft:potato', '#forge:flour')
        .itemOutputs('croptopia:beef_stew')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:beef_stir_fry')
        .itemInputs('2x minecraft:carrot', 'minecraft:beef', 'croptopia:broccoli', 'croptopia:garlic')
        .inputFluids('croptopia:olive_oil 100', 'croptopia:soy_sauce 100')
        .itemOutputs('croptopia:beef_stir_fry')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:stir_fry')
        .itemInputs('2x minecraft:carrot', 'croptopia:greenonion', 'croptopia:bellpepper', 'croptopia:broccoli', 'croptopia:garlic')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('croptopia:stir_fry')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:buttered_green_beans')
        .itemInputs('#forge:salt', 'croptopia:pepper', 'croptopia:butter', 'croptopia:greenbean', 'croptopia:ginger')
        .itemOutputs('croptopia:buttered_green_beans')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:cheesy_asparagus')
        .itemInputs('#forge:cheese', 'croptopia:pepper', 'croptopia:asparagus')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('croptopia:cheesy_asparagus')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:chocolate_ice_cream')
        .itemInputs('croptopia:chocolate', 'minecraft:sugar', 'minecraft:egg', 'minecraft:snowball')
        .inputFluids('croptopia:milk 100')
        .itemOutputs('croptopia:chocolate_ice_cream')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:eggplant_parmesan')
        .itemInputs('croptopia:basil', 'minecraft:egg', 'croptopia:pepper', '#forge:cheese', 'minecraft:bread')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('croptopia:eggplant_parmesan')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:fruit_cake')
        .itemInputs('#forge:salt', '#forge:fruits', 'croptopia:lemon', 'croptopia:pecan', 'croptopia:cinnamon', 'croptopia:nutmeg', 'minecraft:egg', 'minecraft:sugar')
        .itemOutputs('3x croptopia:fruit_cake')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:grilled_eggplant')
        .itemInputs('#forge:salt', 'croptopia:paprika', 'croptopia:pepper', 'croptopia:eggplant', 'croptopia:garlic')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('croptopia:grilled_eggplant')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:kiwi_sorbet')
        .itemInputs('croptopia:kiwi', 'minecraft:honey_bottle')
        .itemOutputs('croptopia:kiwi_sorbet', 'minecraft:glass_bottle')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:lemon_coconut_bar')
        .itemInputs('croptopia:lemon', 'minecraft:egg', 'minecraft:sugar', 'croptopia:butter', 'croptopia:coconut', '#forge:flour')
        .itemOutputs('2x croptopia:lemon_coconut_bar')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:nether_wart_stew')
        .itemInputs('minecraft:nether_wart', 'minecraft:crimson_fungus', 'minecraft:warped_fungus', '#forge:flour')
        .itemOutputs('croptopia:nether_wart_stew')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:peanut_butter_with_celery')
        .itemInputs('croptopia:celery', 'croptopia:peanut_butter')
        .itemOutputs('croptopia:peanut_butter_with_celery')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:potato_soup')
        .itemInputs('minecraft:potato', '#forge:flour', 'croptopia:greenonion', 'croptopia:bacon')
        .inputFluids('minecraft:water 100')
        .itemOutputs('croptopia:potato_soup')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:ratatouille')
        .itemInputs('#forge:tomatoes', 'croptopia:squash', 'croptopia:zucchini', 'croptopia:eggplant', '#forge:onions', 'croptopia:bellpepper', 'croptopia:basil')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('2x croptopia:ratatouille')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:rhubarb_crisp')
        .itemInputs('croptopia:oat', '#forge:flour', 'croptopia:butter', 'croptopia:rhubarb', 'minecraft:sugar', 'croptopia:cinnamon', '#forge:salt')
        .itemOutputs('croptopia:rhubarb_crisp')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:roasted_asparagus')
        .itemInputs('croptopia:asparagus', 'croptopia:garlic', '#forge:salt', 'croptopia:pepper')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('2x croptopia:roasted_asparagus')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:roasted_radishes')
        .itemInputs('croptopia:radish', 'croptopia:garlic', '#forge:salt', 'croptopia:pepper')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('2x croptopia:roasted_radishes')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:roasted_squash')
        .itemInputs('croptopia:squash', 'croptopia:garlic', '#forge:salt', 'croptopia:pepper')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('2x croptopia:roasted_squash')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:roasted_turnips')
        .itemInputs('croptopia:turnip', 'croptopia:garlic', '#forge:salt', 'croptopia:pepper')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('2x croptopia:roasted_turnips')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:steamed_broccoli')
        .itemInputs('2x croptopia:broccoli')
        .inputFluids('minecraft:water 100')
        .itemOutputs('croptopia:steamed_broccoli')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:steamed_green_beans')
        .itemInputs('2x croptopia:greenbean')
        .inputFluids('minecraft:water 100')
        .itemOutputs('2x croptopia:steamed_green_beans')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:stuffed_artichoke')
        .itemInputs('minecraft:bread', '#forge:cheese', 'croptopia:artichoke', 'croptopia:pepper', 'croptopia:lemon', '#forge:salt')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('2x croptopia:stuffed_artichoke')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:toast_sandwich')
        .itemInputs('2x minecraft:bread', 'croptopia:toast')
        .itemOutputs('croptopia:toast_sandwich')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:roasted_pumpkin_seeds')
        .itemInputs('minecraft:pumpkin_seeds', '#forge:salt', 'croptopia:pepper'    )
        .itemOutputs('croptopia:roasted_pumpkin_seeds')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:roasted_sunflower_seeds')
        .itemInputs('minecraft:sunflower', '#forge:salt', 'croptopia:pepper'    )
        .itemOutputs('croptopia:roasted_sunflower_seeds')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);
    
    event.recipes.gtceu.culinary_assembler('croptopia:pumpkin_bars')
        .itemInputs('2x minecraft:pumpkin', 'croptopia:cinnamon', 'croptopia:vanilla', '#forge:salt', 'minecraft:egg', 'minecraft:sugar', '#forge:flour', 'croptopia:butter')
        .itemOutputs('3x croptopia:pumpkin_bars')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:corn_bread')
        .itemInputs('3x #forge:corn')
        .itemOutputs('3x croptopia:corn_bread')
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:pumpkin_soup')
        .itemInputs('farmersdelight:pumpkin_slice', 'croptopia:garlic', 'croptopia:pepper', '#forge:onions', '#forge:salt')
        .itemOutputs('croptopia:pumpkin_soup')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:meringue')
        .itemInputs('#forge:salt', 'croptopia:vanilla', 'minecraft:sugar', '3x minecraft:egg')
        .itemOutputs('2x croptopia:meringue')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);
    
    event.recipes.gtceu.culinary_assembler('croptopia:cabbage_roll')
        .itemInputs('#croptopia:beef_replacements', '#forge:onions', '#forge:salt', '3x #forge:cabbage', '#forge:rice')
        .itemOutputs('2x croptopia:cabbage_roll')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);
    
    event.recipes.gtceu.culinary_assembler('croptopia:borscht')
        .itemInputs('farmersdelight:tomato_sauce', 'minecraft:beetroot', 'minecraft:potato', 'minecraft:carrot', '#forge:cabbage')
        .inputFluids('minecraft:water 100')
        .itemOutputs('croptopia:borscht')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:goulash')
        .itemInputs('2x #croptopia:pork_replacements', '2x #croptopia:beef_replacements', '#forge:onions', '2x #forge:cabbage', '#forge:tomatoes')
        .itemOutputs('croptopia:goulash')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);
    
    event.recipes.gtceu.culinary_assembler('croptopia:beetroot_salad')
        .itemInputs('3x minecraft:beetroot', 'croptopia:lemon', '#forge:cheese', 'croptopia:lettuce')
        .itemOutputs('croptopia:beetroot_salad')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:candied_kumquats')
        .itemInputs('7x croptopia:kumquat', 'croptopia:vanilla', 'minecraft:honey_bottle')
        .itemOutputs('7x croptopia:candied_kumquats', 'minecraft:glass_bottle')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:steamed_crab')
        .itemInputs('croptopia:crab')
        .inputFluids('minecraft:water 100')
        .itemOutputs('croptopia:steamed_crab')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);
    
    event.recipes.gtceu.culinary_assembler('croptopia:deep_fried_shrimp')
        .itemInputs('3x croptopia:shrimp', 'minecraft:egg', 'minecraft:bread')
        .itemOutputs('3x croptopia:deep_fried_shrimp')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:tuna_roll')
        .itemInputs('minecraft:dried_kelp', '#forge:rice', '#forge:onions', 'croptopia:tuna')
        .itemOutputs('2x croptopia:tuna_roll')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:fried_calamari')
        .itemInputs('croptopia:calamari', 'croptopia:lemon', '#forge:flour', 'croptopia:sea_lettuce')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('2x croptopia:fried_calamari')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:crab_legs')
        .itemInputs('croptopia:butter', '#forge:salt', 'croptopia:garlic', 'croptopia:pepper', '2x croptopia:crab')
        .itemOutputs('4x croptopia:crab_legs')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:steamed_clams')
        .itemInputs('croptopia:butter', 'croptopia:garlic', '#forge:salt', 'croptopia:pepper', '2x croptopia:clam')
        .itemOutputs('2x croptopia:steamed_clams')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:grilled_oysters')
        .itemInputs('2x croptopia:oyster', '#forge:cheese', 'croptopia:lemon', 'croptopia:garlic', '#forge:salt')
        .itemOutputs('2x croptopia:grilled_oysters')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);
    
    event.recipes.gtceu.culinary_assembler('croptopia:anchovy_pizza')
        .itemInputs('#forge:tomatoes', 'croptopia:anchovy', '#forge:cheese', '#forge:dough')
        .itemOutputs('croptopia:anchovy_pizza')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);
    
    event.recipes.gtceu.culinary_assembler('croptopia:baked_crepes')
        .itemInputs('2x minecraft:egg', '#forge:flour', 'croptopia:spinach', '#forge:cheese')
        .inputFluids('minecraft:milk 100')
        .itemOutputs('croptopia:baked_crepes')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:cinnamon_roll')
        .itemInputs('#forge:dough', 'minecraft:egg', 'croptopia:butter', '#forge:salt', 'minecraft:sugar', 'croptopia:cinnamon', 'croptopia:whipping_cream')
        .inputFluids('minecraft:milk 100')
        .itemOutputs('3x croptopia:cinnamon_roll')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:croque_madame')
        .itemInputs('minecraft:egg', 'minecraft:bread', '#forge:flour', '#croptopia:pork_replacements', '#forge:cheese', 'croptopia:butter')
        .itemOutputs('croptopia:croque_madame')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:croque_monsieur')
        .itemInputs('minecraft:bread', '#forge:flour', '#croptopia:pork_replacements', '#forge:cheese', 'croptopia:butter')
        .itemOutputs('croptopia:croque_monsieur')
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:dauphine_potatoes')
        .itemInputs('croptopia:butter', '#forge:flour', 'croptopia:mashed_potatoes')
        .inputFluids('minecraft:water 100', 'minecraft:milk 100', 'croptopia:olive_oil 100')
        .itemOutputs('croptopia:dauphine_potatoes')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:hashed_brown')
        .itemInputs('minecraft:potato')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('croptopia:hashed_brown')
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:macaron')
        .itemInputs('minecraft:egg', '2x minecraft:sugar', '2x croptopia:almond')
        .itemOutputs('2x croptopia:macaron')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:quiche')
        .itemInputs('minecraft:egg', 'croptopia:spinach', '#forge:flour', '#forge:onions')
        .inputFluids('minecraft:milk 100')
        .itemOutputs('croptopia:quiche')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:sausage')
        .itemInputs('croptopia:ground_pork', '#forge:salt', 'croptopia:paprika')
        .itemOutputs('croptopia:sausage')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:sunny_side_eggs')
        .itemInputs('2x minecraft:egg')
        .itemOutputs('2x croptopia:sunny_side_eggs')
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(2)
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:sweet_crepes')
        .itemInputs('#forge:flour', 'minecraft:egg', 'minecraft:sugar', '#forge:jams')
        .inputFluids('minecraft:milk 100')
        .itemOutputs('croptopia:sweet_crepes')
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)
        .duration(400);

    event.recipes.gtceu.culinary_assembler('croptopia:the_big_breakfast')
        .itemInputs('minecraft:egg', 'croptopia:bacon', '2x croptopia:hashed_brown', 'croptopia:toast', 'croptopia:baked_beans', 'croptopia:sausage')
        .itemOutputs('croptopia:the_big_breakfast')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);
})