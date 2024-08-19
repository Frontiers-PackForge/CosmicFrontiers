ServerEvents.recipes(event => {
    console.log('Registering Culinary Assembler Recipes')
    
    let recipeDuration = 400;
    let recipeEUt = GTValues.VA[GTValues.LV];

    event.recipes.gtceu.culinary_assembler(`croptopia:butter`)
        .itemInputs('#forge:dusts/salt')
        .inputFluids('minecraft:milk 100')
        .itemOutputs('croptopia:butter')
        .duration(recipeDuration)
        .EUt(recipeEUt);

    let pieFlavor = ['minecraft:apple', 'croptopia:cherry', 'croptopia:pecan', 'croptopia:rhubarb']
    pieFlavor.forEach((flavor) => {
        event.recipes.gtceu.culinary_assembler(`croptopia:${flavor.split(':')[1]}_pie`)
            .itemInputs([flavor, 'minecraft:sugar', 'minecraft:egg', '#forge:flour', '#forge:doughs'])
            .itemOutputs(`croptopia:${flavor.split(':')[1]}_pie`)
            .duration(recipeDuration)
            .EUt(recipeEUt);
    })

    let jamFlavor = ['croptopia:apricot', 'croptopia:blackberry', 'croptopia:blueberry', 'croptopia:cherry',
        'croptopia:elderberry', 'croptopia:grape', 'croptopia:peach', 'croptopia:raspberry', 'croptopia:strawberry']
    jamFlavor.forEach((flavor) => {
        event.recipes.gtceu.culinary_assembler(`croptopia:${flavor.split(':')[1]}_jam`)
            .itemInputs([flavor, 'minecraft:sugar', 'minecraft:glass_bottle'])
            .itemOutputs(`croptopia:${flavor.split(':')[1]}_jam`)
            .circuit(1)
            .duration(recipeDuration)
            .EUt(recipeEUt);
    })

    let iceCreamFlavor = ['croptopia:mango', 'croptopia:pecan', 'croptopia:strawberry', 'croptopia:vanilla']
    iceCreamFlavor.forEach((flavor) => {
        event.recipes.gtceu.culinary_assembler(`croptopia:${flavor.split(':')[1]}_ice_cream`)
            .itemInputs([flavor, 'minecraft:sugar', 'minecraft:egg', 'minecraft:snowball', 'minecraft:bowl'])
            .inputFluids('minecraft:milk 100')
            .itemOutputs(`croptopia:${flavor.split(':')[1]}_ice_cream`)
            .circuit(2)
            .duration(recipeDuration)
            .EUt(recipeEUt);
    })

    event.recipes.gtceu.culinary_assembler(`croptopia:cheese`)
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:cheese`)
        .circuit(1)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:tofu`)
        .itemInputs('croptopia:soybean')
        .inputFluids('minecraft:water 100')
        .itemOutputs(`croptopia:tofu`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:steamed_rice`)
        .itemInputs('#forge:rice', '#forge:salt')
        .inputFluids('minecraft:water 100')
        .itemOutputs(`croptopia:steamed_rice`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:chocolate`)
        .itemInputs('minecraft:cocoa_beans', 'croptopia:butter')
        .itemOutputs('4x croptopia:chocolate')
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:ravioli`)
        .itemInputs('#forge:cheese', 'croptopia:noodle')
        .itemOutputs('2x croptopia:ravioli')
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:pepperoni`)
        .itemInputs('minecraft:beef', 'minecraft:porkchop', 'croptopia:paprika', 'croptopia:chile_pepper')
        .itemOutputs('4x croptopia:pepperoni')
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:salsa`)
        .itemInputs('#forge:tomatoes', 'croptopia:chile_pepper', '#forge:salt', 'croptopia:lime', 'croptopia:tomatillo')
        .itemOutputs('4x croptopia:salsa')
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:artichoke_dip`)
        .itemInputs('#forge:cheese', 'croptopia:artichoke')
        .itemOutputs('croptopia:artichoke_dip')
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:beef_jerky`)
        .itemInputs('8x minecraft:beef', '#forge:salt')
        .itemOutputs('14x croptopia:beef_jerky')
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:pork_jerky`)
        .itemInputs('8x minecraft:porkchop', '#forge:salt')
        .itemOutputs('14x croptopia:pork_jerky')
        .duration(recipeDuration)
        .EUt(recipeEUt);

    ['croptopia:banana', 'croptopia:strawberry'].forEach((flavor) => {
        let fruit = flavor.split(':')[1];
        event.recipes.gtceu.culinary_assembler(`croptopia:${fruit}_smoothie`)
            .itemInputs('minecraft:glass_bottle', 'minecraft:ice', flavor)
            .inputFluids('minecraft:milk 100')
            .itemOutputs(`croptopia:${fruit}_smoothie`)
            .duration(recipeDuration)
            .EUt(recipeEUt);
    })

    event.recipes.gtceu.culinary_assembler(`croptopia:chocolate_milkshake`)
        .itemInputs('minecraft:glass_bottle', 'croptopia:vanilla_ice_cream', 'croptopia:chocolate')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:chocolate_milkshake`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:kale_smoothie`)
        .itemInputs('minecraft:glass_bottle', 'minecraft:ice', 'croptopia:kale', 'croptopia:mango')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:kale_smoothie`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:fruit_smoothie`)
        .itemInputs('minecraft:glass_bottle', 'minecraft:ice', '3x #foorge:fruits')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:fruit_smoothie`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:doughnut`)
        .itemInputs('2x #forge:flour', 'minecraft:sugar')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:doughnut`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:cucumber_salad`)
        .itemInputs('minecraft:bowl', 'croptopia:lettuce', 'croptopia:spinach', '#forge:cucumbers')
        .itemOutputs(`croptopia:cucumber_salad`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:leafy_salad`)
        .itemInputs('minecraft:bowl', 'croptopia:lettuce', 'croptopia:spinach', 'croptopia:kale')
        .itemOutputs(`croptopia:leafy_salad`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:caesar_salad`)
        .itemInputs('minecraft:bowl', 'croptopia:lettuce', 'croptopia:olive', 'croptopia:garlic', 'croptopia:toast')
        .itemOutputs(`croptopia:caesar_salad`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:fruit_salad`)
        .itemInputs('minecraft:bowl', 'croptopia:strawberry', 'croptopia:banana', 'croptopia:grape', 'minecraft:apple')
        .itemOutputs(`croptopia:fruit_salad`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:veggie_salad`)
        .itemInputs('minecraft:bowl', '#forge:cucumbers', '#forge:corn', 'croptopia:lettuce', 'minecraft:carrot')
        .itemOutputs(`croptopia:veggie_salad`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:pork_and_beans`)
        .itemInputs('minecraft:bowl', 'croptopia:blackbean', 'minecraft:porkchop')
        .itemOutputs(`croptopia:pork_and_beans`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:oatmeal`)
        .itemInputs('minecraft:bowl', 'croptopia:oat')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:oatmeal`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:leek_soup`)
        .itemInputs('minecraft:bowl', 'croptopia:leek', 'minecraft:potato')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:leek_soup`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:yoghurt`)
        .itemInputs('minecraft:bowl', 'croptopia:strawberry')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:yoghurt`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:saucy_chips`)
        .itemInputs('minecraft:bowl', '#croptopia:sauces', 'croptopia:potato_chips')
        .itemOutputs(`croptopia:saucy_chips`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:trail_mix`)
        .itemInputs('3x #forge:nuts', 'croptopia:raisins', '#forge:salt', 'croptopia:chocolate')
        .itemOutputs(`4x croptopia:trail_mix`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:protein_bar`)
        .itemInputs('2x #forge:nuts', 'minecraft:sugar', 'croptopia:caramel', 'croptopia:chocolate', '#forge:salt')
        .itemOutputs(`3x croptopia:protein_bar`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:nougat`)
        .itemInputs('2x #forge:nuts', '2x minecraft:sugar', '2x minecraft:egg')
        .itemOutputs(`2x croptopia:nougat`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:scrambled_eggs`)
        .itemInputs('minecraft:egg', '#forge:cheese')
        .itemOutputs(`croptopia:scrambled_eggs`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:buttered_toast`)
        .itemInputs('croptopia:toast', 'croptopia:butter')
        .itemOutputs(`croptopia:buttered_toast`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:toast_with_jam`)
        .itemInputs('croptopia:toast', '#forge:jams')
        .itemOutputs(`croptopia:toast_with_jam`, 'minecraft:glass_bottle')
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:ham_sandwich`)
        .itemInputs('minecraft:bread', '#forge:cheese', 'minecraft:cooked_porkchop')
        .itemOutputs(`croptopia:ham_sandwich`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:peanut_butter_and_jam`)
        .itemInputs('minecraft:bread', 'croptopia:peanut_butter', '#forge:jams')
        .itemOutputs(`croptopia:peanut_butter_and_jam`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:blt`)
        .itemInputs('minecraft:bread', 'croptopia:cooked_bacon', 'croptopia:lettuce', '#forge:tomatoes')
        .itemOutputs(`croptopia:blt`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:grilled_cheese`)
        .itemInputs('minecraft:bread', '#forge:cheese')
        .itemOutputs(`croptopia:grilled_cheese`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:cheeseburger`)
        .itemInputs('minecraft:bread', '#forge:cheese', '#croptopia:beef_replacements')
        .itemOutputs(`croptopia:cheeseburger`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:hamburger`)
        .itemInputs('minecraft:bread', 'minecraft:beef')
        .itemOutputs(`croptopia:hamburger`)
        .circuit(1)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:tofuburger`)
        .itemInputs('minecraft:bread', 'croptopia:lettuce', 'croptopia:tofu', '#forge:onions')
        .itemOutputs(`croptopia:tofuburger`)
        .circuit(1)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:pizza`)
        .itemInputs('#forge:doughs', '#forge:cheese', '#forge:tomatoes')
        .itemOutputs(`croptopia:pizza`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:cheese_pizza`)
        .itemInputs('#forge:doughs', '2x #forge:cheese', '#forge:tomatoes')
        .itemOutputs(`croptopia:cheese_pizza`)
        .circuit(2)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:supreme_pizza`)
        .itemInputs('#forge:doughs', '#forge:cheese', '#forge:tomatoes',
            'croptopia:bellpepper', 'croptopia:olive', '#croptopia:meat_replacements')
        .itemOutputs(`croptopia:supreme_pizza`)
        .circuit(1)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:pineapple_pepperoni_pizza`)
        .itemInputs('#forge:doughs', '#forge:cheese', '#forge:tomatoes',
            '2x #forge:pineapples', 'croptopia:pepperoni')
        .itemOutputs(`croptopia:pineapple_pepperoni_pizza`)
        .circuit(1)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:lemon_chicken`)
        .itemInputs('croptopia:lemon', 'croptopia:chile_pepper', '#forge:raw_chicken', '#forge:tomatoes')
        .itemOutputs(`croptopia:lemon_chicken`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:chicken_and_noodles`)
        .itemInputs('#forge:raw_chicken', 'croptopia:chile_pepper', 'croptopia:noodle', 'minecraft:bowl')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs(`croptopia:chicken_and_noodles`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:chicken_and_dumplings`)
        .itemInputs('#forge:raw_chicken', 'croptopia:chile_pepper', '#forge:doughs', 'minecraft:bowl')
        .itemOutputs(`croptopia:chicken_and_dumplings`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:tofu_and_dumplings`)
        .itemInputs('croptopia:tofu', 'croptopia:chile_pepper', '#forge:doughs', 'minecraft:bowl')
        .itemOutputs(`croptopia:tofu_and_dumplings`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:spaghetti_squash`)
        .itemInputs('croptopia:squash', 'croptopia:chile_pepper')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs(`croptopia:spaghetti_squash`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:chicken_and_rice`)
        .itemInputs('#forge:rice', 'croptopia:chile_pepper', '#croptopia:chicken_replacements')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs(`croptopia:chicken_and_rice`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:taco`)
        .itemInputs('croptopia:tortilla', '#forge:cheese', 'croptopia:lettuce', 'croptopia:salsa', '#croptopia:meat_replacements')
        .itemOutputs(`croptopia:taco`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:sushi`)
        .itemInputs('minecraft:seagrass', '#croptopia:fishes', '#forge:rice')
        .itemOutputs(`croptopia:sushi`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:egg_roll`)
        .itemInputs('#forge:doughs', '#croptopia:meat_replacements', 'croptopia:lettuce', 'minecraft:egg')
        .itemOutputs(`croptopia:egg_roll`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:cashew_chicken`)
        .itemInputs('#forge:cabbage', 'minecraft:carrot', 'croptopia:cashew', '#forge:cooked_chicken')
        .inputFluids('gtceu:soy_sauce 100')
        .itemOutputs(`croptopia:cashew_chicken`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:yam_jam`)
        .itemInputs('croptopia:vanilla', 'croptopia:yam')
        .inputFluids('minecraft:milk 200')
        .itemOutputs(`croptopia:yam_jam`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:banana_cream_pie`)
        .itemInputs('croptopia:vanilla', 'croptopia:banana', 'minecraft:sugar', 'minecraft:egg')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:banana_cream_pie`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:candy_corn`)
        .itemInputs('#forge:corn', '2x minecraft:sugar')
        .itemOutputs(`croptopia:candy_corn`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:candied_nuts`)
        .itemInputs('2x #forge:nuts', '2x minecraft:sugar')
        .itemOutputs(`4x croptopia:candied_nuts`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:rum_raisin_ice_cream`)
        .itemInputs('croptopia:rum', 'croptopia:raisins', 'minecraft:sugar', 'minecraft:egg', 'minecraft:snowball')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:rum_raisin_ice_cream`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:brownies`)
        .itemInputs('#forge:flour', 'minecraft:sugar', 'minecraft:egg', 'croptopia:chocolate')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`croptopia:brownies`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:snicker_doodle`)
        .itemInputs('croptopia:cinnamon', 'minecraft:sugar', '#forge:flour')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`4x croptopia:snicker_doodle`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:banana_nut_bread`)
        .itemInputs('croptopia:cinnamon', 'minecraft:sugar', '#forge:flour', 'croptopia:banana', '#forge:nuts')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`2x croptopia:banana_nut_bread`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:almond_brittle`)
        .itemInputs('croptopia:butter', 'croptopia:almond', '2x minecraft:sugar')
        .itemOutputs(`2x croptopia:almond_brittle`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:raisin_oatmeal_cookie`)
        .itemInputs('croptopia:raisins', 'minecraft:sugar', '#forge:flour', 'croptopia:oatmeal')
        .itemOutputs(`4x croptopia:raisin_oatmeal_cookie`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:nutty_cookie`)
        .itemInputs('2x #forge:nuts', 'minecraft:sugar', '#forge:flour')
        .itemOutputs(`4x croptopia:nutty_cookie`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:burrito`)
        .itemInputs('#forge:rice', '#forge:tomatoes', 'croptopia:blackbean', 'croptopia:tortilla')
        .itemOutputs(`croptopia:burrito`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:tostada`)
        .itemInputs('croptopia:lettuce', '#forge:tomatoes', '2x croptopia:blackbean', 'croptopia:tortilla')
        .itemOutputs(`croptopia:tostada`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:horchata`)
        .itemInputs('#forge:rice', 'croptopia:almond', 'croptopia:lime', 'croptopia:cinnamon', 'minecraft:sugar')
        .inputFluids('minecraft:water 100')
        .itemOutputs(`croptopia:horchata`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:carnitas`)
        .itemInputs('minecraft:porkchop', 'croptopia:tortilla', '#forge:cabbage', '#forge:onions')
        .itemOutputs(`croptopia:carnitas`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:fajitas`)
        .itemInputs('#croptopia:meat_replacements', 'croptopia:bellpepper', '#forge:tomatoes', '#forge:onions', '#forge:cheese')
        .itemOutputs(`2x croptopia:fajitas`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:enchilada`)
        .itemInputs('#croptopia:meat_replacements', '#forge:tomatoes', '#forge:cheese', 'croptopia:tortilla')
        .itemOutputs(`2x croptopia:enchilada`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:churros`)
        .itemInputs('#forge:flour', 'minecraft:sugar', 'croptopia:cinnamon')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`3x croptopia:churros`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:tamales`)
        .itemInputs('#forge:onions', 'croptopia:chile_pepper', '#forge:flour', '#forge:salt', 'croptopia:corn_husk', '#forge:raw_chicken')
        .itemOutputs(`croptopia:tamales`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:tres_leche_cake`)
        .itemInputs('#forge:flour', 'minecraft:egg', 'minecraft:sugar', 'croptopia:vanilla', 'croptopia:whipping_cream', 'croptopia:rum')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`2x croptopia:tres_leche_cake`, 'minecraft:glass_bottle')
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:stuffed_poblanos`)
        .itemInputs('#forge:cheese', 'croptopia:chile_pepper', '#forge:corn', 'croptopia:blackbean', '#forge:rice', '#croptopia:beef_replacements')
        .itemOutputs(`croptopia:stuffed_poblanos`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:chili_relleno`)
        .itemInputs('#forge:flour', 'croptopia:chile_pepper', '#forge:salt', 'minecraft:egg')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs(`croptopia:chili_relleno`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:crema`)
        .itemInputs('#forge:salt', 'croptopia:lime')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`4x croptopia:crema`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:refried_beans`)
        .itemInputs('#forge:cheese', '2x croptopia:blackbean', 'croptopia:chile_pepper')
        .inputFluids('minecraft:milk 100')
        .itemOutputs(`4x croptopia:refried_beans`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:chimichanga`)
        .itemInputs('croptopia:burrito', '#forge:flour')
        .itemOutputs(`croptopia:chimichanga`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:quesadilla`)
        .itemInputs('2x croptopia:tortilla', 'croptopia:avocado', '#forge:cheese', '#croptopia:chicken_replacements')
        .itemOutputs(`2x croptopia:quesadilla`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler(`croptopia:corn_husk`)
        .itemInputs('4x #forge:corn')
        .itemOutputs(`8x croptopia:corn_husk`)
        .duration(recipeDuration)
        .EUt(recipeEUt);

    event.recipes.gtceu.culinary_assembler('croptopia:shepherds_pie')
        .itemInputs('#forge:salt', '#croptopia:beef_mutton', '#forge:corn', '#forge:onions',
            'croptopia:pepper', 'minecraft:potato', '#forge:tomatoes', 'croptopia:garlic')
        .itemOutputs('croptopia:shepherds_pie')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:beef_wellington')
        .itemInputs('#forge:flour', '#forge:onions', 'croptopia:mustard', 'croptopia:pepper',
            'minecraft:egg', 'minecraft:beef', 'minecraft:brown_mushroom')
        .itemOutputs('croptopia:beef_wellington')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:fish_and_chips')
        .itemInputs('#forge:flour', '#forge:salt', 'croptopia:pepper', '#minecraft:fishes', 'minecraft:potato')
        .itemOutputs('croptopia:fish_and_chips')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:eton_mess')
        .itemInputs('2x croptopia:strawberry', '2x minecraft:egg', 'croptopia:whipping_cream', 'minecraft:sugar')
        .itemOutputs('croptopia:eton_mess')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:cornish_pasty')
        .itemInputs('#forge:onions', '#forge:flour', 'croptopia:rutabaga', 'croptopia:pepper', 'minecraft:beef', 'minecraft:potato')
        .itemOutputs('croptopia:cornish_pasty')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:scones')
        .itemInputs('minecraft:egg', 'croptopia:vanilla', 'croptopia:blueberry', '#forge:flour', '#forge:salt', 'minecraft:sugar')
        .itemOutputs('2x croptopia:scones')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:figgy_pudding')
        .itemInputs('croptopia:date', 'croptopia:fig', 'minecraft:sugar', 'minecraft:egg', 'croptopia:whipping_cream')
        .inputFluids('minecraft:water 100')
        .itemOutputs('croptopia:figgy_pudding')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:treacle_tart')
        .itemInputs('3x minecraft:bread', 'minecraft:honey_bottle', 'croptopia:lemon', 'croptopia:whipping_cream')
        .itemOutputs('3x croptopia:treacle_tart', 'minecraft:glass_bottle')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:sticky_toffee_pudding')
        .itemInputs('croptopia:date', '#forge:salt', 'croptopia:whipping_cream', 'minecraft:sugar', 'croptopia:butter', 'minecraft:egg', 'croptopia:vanilla')
        .inputFluids('minecraft:water 100')
        .itemOutputs('croptopia:sticky_toffee_pudding')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:trifle')
        .itemInputs('croptopia:strawberry', 'minecraft:bread', 'croptopia:wine', 'croptopia:butter', 'minecraft:egg', 'croptopia:vanilla')
        .inputFluids('minecraft:milk 100')
        .itemOutputs('croptopia:trifle', 'minecraft:glass_bottle')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:ajvar')
        .itemInputs('croptopia:chile_pepper', '#forge:salt', 'croptopia:bellpepper', 'croptopia:eggplant', 'croptopia:garlic')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('croptopia:ajvar')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:ajvar_toast')
        .itemInputs('croptopia:ajvar', 'croptopia:toast')
        .itemOutputs('croptopia:ajvar_toast')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:avocado_toast')
        .itemInputs('croptopia:avocado', 'croptopia:toast')
        .itemOutputs('croptopia:avocado_toast')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:beef_stew')
        .itemInputs('2x minecraft:carrot', 'minecraft:beef', 'minecraft:potato', '#forge:flour')
        .itemOutputs('croptopia:beef_stew')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:beef_stir_fry')
        .itemInputs('2x minecraft:carrot', 'minecraft:beef', 'croptopia:broccoli', 'croptopia:garlic')
        .inputFluids('croptopia:olive_oil 100', 'croptopia:soy_sauce 100')
        .itemOutputs('croptopia:beef_stir_fry')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:stir_fry')
        .itemInputs('2x minecraft:carrot', 'croptopia:greenonion', 'croptopia:bellpepper', 'croptopia:broccoli', 'croptopia:garlic')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('croptopia:stir_fry')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:buttered_green_beans')
        .itemInputs('#forge:salt', 'croptopia:pepper', 'croptopia:butter', 'croptopia:greenbean', 'croptopia:ginger')
        .itemOutputs('croptopia:buttered_green_beans')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:cheesy_asparagus')
        .itemInputs('#forge:cheese', 'croptopia:pepper', 'croptopia:asparagus')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('croptopia:cheesy_asparagus')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:chocolate_ice_cream')
        .itemInputs('croptopia:chocolate', 'minecraft:sugar', 'minecraft:egg', 'minecraft:snowball')
        .inputFluids('croptopia:milk 100')
        .itemOutputs('croptopia:chocolate_ice_cream')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:eggplant_parmesan')
        .itemInputs('croptopia:basil', 'minecraft:egg', 'croptopia:pepper', '#forge:cheese', 'minecraft:bread')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('croptopia:eggplant_parmesan')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:fruit_cake')
        .itemInputs('#forge:salt', '#forge:fruits', 'croptopia:lemon', 'croptopia:pecan', 'croptopia:cinnamon', 'croptopia:nutmeg', 'minecraft:egg', 'minecraft:sugar')
        .itemOutputs('3x croptopia:fruit_cake')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:grilled_eggplant')
        .itemInputs('#forge:salt', 'croptopia:paprika', 'croptopia:pepper', 'croptopia:eggplant', 'croptopia:garlic')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('croptopia:grilled_eggplant')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:kiwi_sorbet')
        .itemInputs('croptopia:kiwi', 'minecraft:honey_bottle')
        .itemOutputs('croptopia:kiwi_sorbet', 'minecraft:glass_bottle')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:lemon_coconut_bar')
        .itemInputs('croptopia:lemon', 'minecraft:egg', 'minecraft:sugar', 'croptopia:butter', 'croptopia:coconut', '#forge:flour')
        .itemOutputs('2x croptopia:lemon_coconut_bar')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:nether_wart_stew')
        .itemInputs('minecraft:nether_wart', 'minecraft:crimson_fungus', 'minecraft:warped_fungus', '#forge:flour')
        .itemOutputs('croptopia:nether_wart_stew')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:peanut_butter_with_celery')
        .itemInputs('croptopia:celery', 'croptopia:peanut_butter')
        .itemOutputs('croptopia:peanut_butter_with_celery')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:potato_soup')
        .itemInputs('minecraft:potato', '#forge:flour', 'croptopia:greenonion', 'croptopia:bacon')
        .inputFluids('minecraft:water 100')
        .itemOutputs('croptopia:potato_soup')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:ratatouille')
        .itemInputs('#forge:tomatoes', 'croptopia:squash', 'croptopia:zucchini', 'croptopia:eggplant', '#forge:onions', 'croptopia:bellpepper', 'croptopia:basil')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('2x croptopia:ratatouille')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:rhubarb_crisp')
        .itemInputs('croptopia:oat', '#forge:flour', 'croptopia:butter', 'croptopia:rhubarb', 'minecraft:sugar', 'croptopia:cinnamon', '#forge:salt')
        .itemOutputs('croptopia:rhubarb_crisp')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:roasted_asparagus')
        .itemInputs('croptopia:asparagus', 'croptopia:garlic', '#forge:salt', 'croptopia:pepper')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('2x croptopia:roasted_asparagus')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:roasted_radishes')
        .itemInputs('croptopia:radish', 'croptopia:garlic', '#forge:salt', 'croptopia:pepper')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('2x croptopia:roasted_radishes')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:roasted_squash')
        .itemInputs('croptopia:squash', 'croptopia:garlic', '#forge:salt', 'croptopia:pepper')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('2x croptopia:roasted_squash')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:roasted_turnips')
        .itemInputs('croptopia:turnip', 'croptopia:garlic', '#forge:salt', 'croptopia:pepper')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('2x croptopia:roasted_turnips')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:steamed_broccoli')
        .itemInputs('2x croptopia:broccoli')
        .inputFluids('minecraft:water 100')
        .itemOutputs('croptopia:steamed_broccoli')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:steamed_green_beans')
        .itemInputs('2x croptopia:greenbean')
        .inputFluids('minecraft:water 100')
        .itemOutputs('2x croptopia:steamed_green_beans')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:stuffed_artichoke')
        .itemInputs('minecraft:bread', '#forge:cheese', 'croptopia:artichoke', 'croptopia:pepper', 'croptopia:lemon', '#forge:salt')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('2x croptopia:stuffed_artichoke')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:toast_sandwich')
        .itemInputs('2x minecraft:bread', 'croptopia:toast')
        .itemOutputs('croptopia:toast_sandwich')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:roasted_pumpkin_seeds')
        .itemInputs('minecraft:pumpkin_seeds', '#forge:salt', 'croptopia:pepper'    )
        .itemOutputs('croptopia:roasted_pumpkin_seeds')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:roasted_sunflower_seeds')
        .itemInputs('minecraft:sunflower', '#forge:salt', 'croptopia:pepper'    )
        .itemOutputs('croptopia:roasted_sunflower_seeds')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('croptopia:pumpkin_bars')
        .itemInputs('2x minecraft:pumpkin', 'croptopia:cinnamon', 'croptopia:vanilla', '#forge:salt', 'minecraft:egg', 'minecraft:sugar', '#forge:flour', 'croptopia:butter')
        .itemOutputs('3x croptopia:pumpkin_bars')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:corn_bread')
        .itemInputs('3x #forge:corn')
        .itemOutputs('3x croptopia:corn_bread')
        .EUt(recipeEUt)
        .circuit(1)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:pumpkin_soup')
        .itemInputs('farmersdelight:pumpkin_slice', 'croptopia:garlic', 'croptopia:pepper', '#forge:onions', '#forge:salt')
        .itemOutputs('croptopia:pumpkin_soup')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:meringue')
        .itemInputs('#forge:salt', 'croptopia:vanilla', 'minecraft:sugar', '3x minecraft:egg')
        .itemOutputs('2x croptopia:meringue')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('croptopia:cabbage_roll')
        .itemInputs('#croptopia:beef_replacements', '#forge:onions', '#forge:salt', '3x #forge:cabbage', '#forge:rice')
        .itemOutputs('2x croptopia:cabbage_roll')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('croptopia:borscht')
        .itemInputs('farmersdelight:tomato_sauce', 'minecraft:beetroot', 'minecraft:potato', 'minecraft:carrot', '#forge:cabbage')
        .inputFluids('minecraft:water 100')
        .itemOutputs('croptopia:borscht')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:goulash')
        .itemInputs('2x #croptopia:pork_replacements', '2x #croptopia:beef_replacements', '#forge:onions', '2x #forge:cabbage', '#forge:tomatoes')
        .itemOutputs('croptopia:goulash')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('croptopia:beetroot_salad')
        .itemInputs('3x minecraft:beetroot', 'croptopia:lemon', '#forge:cheese', 'croptopia:lettuce')
        .itemOutputs('croptopia:beetroot_salad')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:candied_kumquats')
        .itemInputs('7x croptopia:kumquat', 'croptopia:vanilla', 'minecraft:honey_bottle')
        .itemOutputs('7x croptopia:candied_kumquats', 'minecraft:glass_bottle')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:steamed_crab')
        .itemInputs('croptopia:crab')
        .inputFluids('minecraft:water 100')
        .itemOutputs('croptopia:steamed_crab')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('croptopia:deep_fried_shrimp')
        .itemInputs('3x croptopia:shrimp', 'minecraft:egg', 'minecraft:bread')
        .itemOutputs('3x croptopia:deep_fried_shrimp')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:tuna_roll')
        .itemInputs('minecraft:dried_kelp', '#forge:rice', '#forge:onions', 'croptopia:tuna')
        .itemOutputs('2x croptopia:tuna_roll')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:fried_calamari')
        .itemInputs('croptopia:calamari', 'croptopia:lemon', '#forge:flour', 'croptopia:sea_lettuce')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('2x croptopia:fried_calamari')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:crab_legs')
        .itemInputs('croptopia:butter', '#forge:salt', 'croptopia:garlic', 'croptopia:pepper', '2x croptopia:crab')
        .itemOutputs('4x croptopia:crab_legs')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:steamed_clams')
        .itemInputs('croptopia:butter', 'croptopia:garlic', '#forge:salt', 'croptopia:pepper', '2x croptopia:clam')
        .itemOutputs('2x croptopia:steamed_clams')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:grilled_oysters')
        .itemInputs('2x croptopia:oyster', '#forge:cheese', 'croptopia:lemon', 'croptopia:garlic', '#forge:salt')
        .itemOutputs('2x croptopia:grilled_oysters')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('croptopia:anchovy_pizza')
        .itemInputs('#forge:tomatoes', 'croptopia:anchovy', '#forge:cheese', '#forge:dough')
        .itemOutputs('croptopia:anchovy_pizza')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('croptopia:baked_crepes')
        .itemInputs('2x minecraft:egg', '#forge:flour', 'croptopia:spinach', '#forge:cheese')
        .inputFluids('minecraft:milk 100')
        .itemOutputs('croptopia:baked_crepes')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:cinnamon_roll')
        .itemInputs('#forge:dough', 'minecraft:egg', 'croptopia:butter', '#forge:salt', 'minecraft:sugar', 'croptopia:cinnamon', 'croptopia:whipping_cream')
        .inputFluids('minecraft:milk 100')
        .itemOutputs('3x croptopia:cinnamon_roll')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:croque_madame')
        .itemInputs('minecraft:egg', 'minecraft:bread', '#forge:flour', '#croptopia:pork_replacements', '#forge:cheese', 'croptopia:butter')
        .itemOutputs('croptopia:croque_madame')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:croque_monsieur')
        .itemInputs('minecraft:bread', '#forge:flour', '#croptopia:pork_replacements', '#forge:cheese', 'croptopia:butter')
        .itemOutputs('croptopia:croque_monsieur')
        .EUt(recipeEUt)
        .circuit(1)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:dauphine_potatoes')
        .itemInputs('croptopia:butter', '#forge:flour', 'croptopia:mashed_potatoes')
        .inputFluids('minecraft:water 100', 'minecraft:milk 100', 'croptopia:olive_oil 100')
        .itemOutputs('croptopia:dauphine_potatoes')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:hashed_brown')
        .itemInputs('minecraft:potato')
        .inputFluids('croptopia:olive_oil 100')
        .itemOutputs('croptopia:hashed_brown')
        .EUt(recipeEUt)
        .circuit(1)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:macaron')
        .itemInputs('minecraft:egg', '2x minecraft:sugar', '2x croptopia:almond')
        .itemOutputs('2x croptopia:macaron')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:quiche')
        .itemInputs('minecraft:egg', 'croptopia:spinach', '#forge:flour', '#forge:onions')
        .inputFluids('minecraft:milk 100')
        .itemOutputs('croptopia:quiche')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:sausage')
        .itemInputs('croptopia:ground_pork', '#forge:salt', 'croptopia:paprika')
        .itemOutputs('croptopia:sausage')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:sunny_side_eggs')
        .itemInputs('2x minecraft:egg')
        .itemOutputs('2x croptopia:sunny_side_eggs')
        .EUt(recipeEUt)
        .circuit(2)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:sweet_crepes')
        .itemInputs('#forge:flour', 'minecraft:egg', 'minecraft:sugar', '#forge:jams')
        .inputFluids('minecraft:milk 100')
        .itemOutputs('croptopia:sweet_crepes')
        .EUt(recipeEUt)
        .circuit(1)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('croptopia:the_big_breakfast')
        .itemInputs('minecraft:egg', 'croptopia:bacon', '2x croptopia:hashed_brown', 'croptopia:toast', 'croptopia:baked_beans', 'croptopia:sausage')
        .itemOutputs('croptopia:the_big_breakfast')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    //Farmer's Delight
    event.recipes.gtceu.culinary_assembler('farmersdelight:hot_cocoa')
        .itemInputs('2x minecraft:cocoa_beans', 'minecraft:sugar', 'minecraft:glass_bottle')
        .inputFluids('minecraft:milk 100')
        .itemOutputs('farmersdelight:hot_cocoa')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('farmersdelight:apple_cider')
        .itemInputs('2x minecraft:apple', 'minecraft:sugar', 'minecraft:glass_bottle')
        .itemOutputs('farmersdelight:apple_cider')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:apple_pie')
        .itemInputs('3x minecraft:wheat', '3x minecraft:apple', '2x minecraft:sugar', 'farmersdelight:pie_crust')
        .itemOutputs('farmersdelight:apple_pie')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:sweet_berry_cheesecake')
        .itemInputs('6x minecraft:sweet_berries', '#forge:cheese', 'farmersdelight:pie_crust')
        .inputFluids('minecraft:milk 100')
        .itemOutputs('farmersdelight:sweet_berry_cheesecake')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:chocolate_pie')
        .itemInputs('2x minecraft:sugar', '3x #forge:chocolate', 'farmersdelight:pie_crust')
        .inputFluids('minecraft:milk 300')
        .itemOutputs('farmersdelight:chocolate_pie')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:sweet_berry_cookie')
        .itemInputs('minecraft:sweet_berries', '2x minecraft:wheat')
        .itemOutputs('8x farmersdelight:sweet_berry_cookie')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:honey_cookie')
        .itemInputs('minecraft:honey_bottle', '2x minecraft:wheat')
        .itemOutputs('8x farmersdelight:honey_cookie', 'minecraft:glass_bottle')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('farmersdelight:melon_popsicle')
        .itemInputs('4x minecraft:melon_slice', '2x minecraft:ice', 'minecraft:stick')
        .itemOutputs('farmersdelight:melon_popsicle')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:glow_berry_custard')
        .itemInputs('minecraft:glow_berries', '#forge:eggs', 'minecraft:sugar')
        .inputFluids('minecraft:milk 100')
        .itemOutputs('farmersdelight:glow_berry_custard')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:fruit_salad' )
        .itemInputs('3x #forge:fruits', 'minecraft:apple', 'minecraft:melon_slice', 'farmersdelight:pumpkin_slice', 'minecraft:bowl')
        .itemOutputs('farmersdelight:fruit_salad')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:mixer_salad')
        .itemInputs('#forge:salad_ingredients', '#forge:tomatoes', 'minecraft:beetroot', 'minecraft:bowl')
        .itemOutputs('farmersdelight:mixer_salad')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('farmersdelight:nether_salad')
        .itemInputs('minecraft:crimson_fungus', 'minecraft:warped_fungus', 'minecraft:bowl')
        .itemOutputs('farmersdelight:nether_salad')
        .EUt(recipeEUt)
        .duration(recipeDuration);


    ['#forge:cooked_beef', '#forge:cooked_pork', '#forge:cooked_chicken', '#forge:cooked_fishes', '#forge:cooked_mutton', 'minecraft:cooked_rabbit'].forEach((meat, index) => {
        event.recipes.gtceu.culinary_assembler(`farmersdelight:barbecue_stick${index}`)
            .itemInputs('minecraft:stick', '#forge:onions', '#forge:tomatoes', meat)
            .itemOutputs('farmersdelight:barbecue_stick')
            .EUt(recipeEUt)
            .duration(recipeDuration);
    });

    event.recipes.gtceu.culinary_assembler('farmersdelight:egg_sandwich')
        .itemInputs('minecraft:bread', '2x farmersdelight:fried_egg')
        .itemOutputs('farmersdelight:egg_sandwich')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:chicken_sandwich')
        .itemInputs('minecraft:bread', '#forge:cooked_chicken', '#forge:salad_ingredients', 'minecraft:carrot')
        .itemOutputs('farmersdelight:chicken_sandwich')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:hamburger')
        .itemInputs('minecraft:bread', 'farmersdelight:beef_patty', '#forge:salad_ingredients', '#forge:tomatoes', '#forge:onions')
        .itemOutputs('farmersdelight:hamburger')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:bacon_sandwich')
        .itemInputs('minecraft:bread', '#forge:cooked_bacon', '#forge:salad_ingredients', '#forge:tomatoes')
        .itemOutputs('farmersdelight:bacon_sandwich')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:mutton_wrap')
        .itemInputs('minecraft:bread', '#forge:cooked_mutton', '#forge:salad_ingredients', '#forge:onions')
        .itemOutputs('farmersdelight:mutton_wrap')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    ['#forge:raw_beef', '#forge:raw_chicken', '#forge:raw_pork', 'minecraft:brown_mushroom'].forEach((filling, index) => {
        event.recipes.gtceu.culinary_assembler(`farmersdelight:dumplings_${index}`)
            .itemInputs('#forge:dough', '#forge:cabbage', '#forge:onions', filling)
            .itemOutputs('2x farmersdelight:dumplings')
            .EUt(recipeEUt)
            .duration(recipeDuration);
    });

    event.recipes.gtceu.culinary_assembler('farmersdelight:stuffed_potato')
        .itemInputs('minecraft:baked_potato', 'farmersdelight:beef_patty')
        .inputFluids('minecraft:milk 100')
        .itemOutputs('farmersdelight:stuffed_potato')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('farmersdelight:cabbage_rolls')
        .itemInputs('#forge:cabbage', '#farmersdelight:cabbage_roll_ingredients')
        .itemOutputs('farmersdelight:cabbage_rolls')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('farmersdelight:salmon_roll')
        .itemInputs('2x farmersdelight:salmon_slice', 'farmersdelight:cooked_rice')
        .itemOutputs('2x farmersdelight:salmon_roll')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:cod_roll')
        .itemInputs('2x farmersdelight:cod_slice', 'farmersdelight:cooked_rice')
        .itemOutputs('2x farmersdelight:cod_roll')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:kelp_roll')
        .itemInputs('3x minecraft:dried_kelp', '2x farmersdelight:cooked_rice', 'minecraft:carrot')
        .itemOutputs('farmersdelight:kelp_roll', '2x minecraft:bowl')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('farmersdelight:cooked_rice')
        .itemInputs('#forge:rice', 'minecraft:bowl')
        .inputFluids('minecraft:water 100')
        .itemOutputs('farmersdelight:cooked_rice')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('farmersdelight:bone_broth')
        .itemInputs('#forge:bones', '#forge:mushrooms', 'minecraft:bowl')
        .itemOutputs('farmersdelight:bone_broth')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:bone_broth_2')
        .itemInputs('#forge:bones', 'minecraft:glow_berries', 'minecraft:bowl')
        .itemOutputs('farmersdelight:bone_broth')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:bone_broth_3')
        .itemInputs('#forge:bones', 'minecraft:hanging_roots', 'minecraft:bowl')
        .itemOutputs('farmersdelight:bone_broth')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:bone_broth_4')
        .itemInputs('#forge:bones', 'minecraft:glow_lichen', 'minecraft:bowl')
        .itemOutputs('farmersdelight:bone_broth')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('farmersdelight:beef_stew')
        .itemInputs('#forge:raw_beef', 'minecraft:carrot', 'minecraft:potato', 'minecraft:bowl')
        .itemOutputs('farmersdelight:beef_stew')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('farmersdelight:chicken_soup')
        .itemInputs('#forge:raw_chicken', 'minecraft:carrot', '#forge:salad_ingredients', '#forge:vegetables', 'minecraft:bowl')
        .itemOutputs('farmersdelight:chicken_soup')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('farmersdelight:vegetable_soup')
        .itemInputs('minecraft:carrot', 'minecraft:potato', 'minecraft:potato', '#forge:salad_ingredients', 'minecraft:bowl')
        .itemOutputs('farmersdelight:vegetable_soup')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:fish_stew')
        .itemInputs('#forge:raw_fishes', 'farmersdelight:tomato_sauce', '#forge:onions', 'minecraft:bowl')
        .itemOutputs('farmersdelight:fish_stew')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:fried_rice')
        .itemInputs('#forge:rice', '#forge:eggs', 'minecraft:carrot', '#forge:onions', 'minecraft:bowl')
        .itemOutputs('farmersdelight:fried_rice')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:pumpkin_soup')
        .itemInputs('farmersdelight:pumpkin_slice', '#forge:salad_ingredients', '#forge:raw_pork')
        .inputFluids('minecraft:milk 100')
        .itemOutputs('farmersdelight:pumpkin_soup')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:baked_cod_stew')
        .itemInputs('#forge:raw_fishes/cod', 'minecraft:potato', '#forge:eggs', '#forge:tomatoes', 'minecraft:bowl')
        .itemOutputs('farmersdelight:baked_cod_stew')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:noodle_soup')
        .itemInputs('#forge:pasta', 'farmersdelight:fried_egg', 'minecraft:dried_kelp', '#forge:raw_pork', 'minecraft:bowl'     )
        .itemOutputs('farmersdelight:noodle_soup')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:bacon_and_eggs')
        .itemInputs('2x farmersdelight:cooked_bacon', '2x farmersdelight:fried_egg', 'minecraft:bowl')
        .itemOutputs('farmersdelight:bacon_and_eggs')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('farmersdelight:pasta_with_meatballs')
        .itemInputs('farmersdelight:minced_beef', '#forge:pasta', 'farmersdelight:tomato_sauce')
        .itemOutputs('farmersdelight:pasta_with_meatballs')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:pasta_with_mutton_chop')
        .itemInputs('#forge:raw_mutton', '#forge:pasta', 'farmersdelight:tomato_sauce')
        .itemOutputs('farmersdelight:pasta_with_mutton_chop')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:mushroom_rice')
        .itemInputs('minecraft:brown_mushroom', 'minecraft:red_mushroom', '#forge:rice', 'minecraft:carrot', 'minecraft:bowl')
        .itemOutputs('farmersdelight:mushroom_rice')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:mushroom_rice_2')
        .itemInputs('minecraft:brown_mushroom', 'minecraft:red_mushroom', '#forge:rice', 'minecraft:potato', 'minecraft:bowl')
        .itemOutputs('farmersdelight:mushroom_rice')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:roasted_mutton_chops')
        .itemInputs('farmersdelight:cooked_mutton_chops', 'minecraft:beetroot', '#forge:tomatoes', 'farmersdelight:cooked_rice')
        .itemOutputs('farmersdelight:roasted_mutton_chops')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:vegetable_noodles')
        .itemInputs('#forge:pasta', 'minecraft:carrot', 'minecraft:brown_mushroom', '#forge:salad_ingredients', '#forge:vegetables', 'minecraft:bowl')
        .itemOutputs('farmersdelight:vegetable_noodles')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:steak_and_potatoes')
        .itemInputs('minecraft:baked_potato', 'minecraft:cooked_beef', '#forge:onions', 'farmersdelight:cooked_rice')
        .itemOutputs('farmersdelight:steak_and_potatoes')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:ratatouille')
        .itemInputs('#forge:tomatoes', '#forge:onions', '#forge:vegetables', 'minecraft:beetroot', 'minecraft:bowl')
        .itemOutputs('farmersdelight:ratatouille')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:squid_ink_pasta')
        .itemInputs('#forge:raw_fishes', '#forge:pasta', '#forge:tomatoes', 'minecraft:ink_sac', 'minecraft:bowl')
        .itemOutputs('farmersdelight:squid_ink_pasta')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:grilled_salmon')
        .itemInputs('#forge:cooked_fishes/salmon', '#forge:cabbage', '#forge:onions', 'minecraft:sweet_berries', 'minecraft:bowl')
        .itemOutputs('farmersdelight:grilled_salmon')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:roast_chicken_block')
        .itemInputs('2x minecraft:baked_potato', '2x minecraft:carrot', '#forge:onions', '#forge:eggs', 'minecraft:bread', 'minecraft:bowl')
        .itemOutputs('farmersdelight:roast_chicken_block')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:stuffed_pumpkin_block')
        .itemInputs('#forge:rice', '#forge:vegetables', '#forge:onions', 'minecraft:brown_mushroom', 'minecraft:potato', '#forge:berries', 'minecraft:pumpkin')
        .itemOutputs('farmersdelight:stuffed_pumpkin_block')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:honey_glazed_ham_block')
        .itemInputs('4x minecraft:sweet_berries', 'farmersdelight:smoked_ham', '2x farmersdelight:cooked_rice', 'minecraft:honey_bottle')
        .itemOutputs('farmersdelight:honey_glazed_ham_block', 'minecraft:bowl', 'minecraft:glass_bottle')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('farmersdelight:shepherds_pie_block')
        .itemInputs('2x #forge:onions', '3x #forge:cooked_mutton', '2x minecraft:baked_potato', 'minecraft:bowl')
        .inputFluids('minecraft:milk 100')
        .itemOutputs('farmersdelight:shepherds_pie_block')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:rice_roll_medley_block')
        .itemInputs('3x farmersdelight:kelp_roll_slice', '3x farmersdelight:salmon_roll', '2x farmersdelight:cod_roll', 'minecraft:bowl')
        .itemOutputs('farmersdelight:rice_roll_medley_block')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:dog_food')
        .itemInputs('minecraft:rotten_flesh', 'minecraft:bone_meal', '#farmersdelight:wolf_prey', '#forge:rice', 'minecraft:bowl')
        .itemOutputs('farmersdelight:dog_food')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:horse_feed')
        .itemInputs('minecraft:hay_bale', '2x minecraft:apple', 'minecraft:golden_carrot')
        .itemOutputs('farmersdelight:horse_feed')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('farmersdelight:horse_feed_2')
        .itemInputs('farmersdelight:rice_bale', '2x minecraft:apple', 'minecraft:golden_carrot')
        .itemOutputs('farmersdelight:horse_feed')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    // Nether's Delight
    event.recipes.gtceu.culinary_assembler('nethersdelight:grilled_strider')
        .itemInputs('#nethersdelight:raw_strider', 'minecraft:warped_fungus', 'minecraft:crimson_fungus', 'minecraft:warped_roots', 'minecraft:crimson_roots', 'minecraft:bowl')
        .itemOutputs('nethersdelight:grilled_strider')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('nethersdelight:warped_moldy_meat')
        .itemInputs('2x minecraft:warped_roots', 'nethersdelight:hoglin_sirloin', 'minecraft:bowl')
        .itemOutputs('nethersdelight:warped_moldy_meat')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('nethersdelight:strider_moss_stew')
        .itemInputs('2x minecraft:warped_fungus', 'minecraft:crimson_fungus', 'minecraft:crimson_roots', '#nethersdelight:raw_strider', 'minecraft:bowl')
        .itemOutputs('nethersdelight:strider_moss_stew')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('nethersdelight:nether_skewer')
        .itemInputs('minecraft:blaze_rod', 'nethersdelight:propelpearl', '#nethersdelight:raw_strider')
        .itemOutputs('nethersdelight:nether_skewer')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('nethersdelight:magma_gelatin')
        .itemInputs('3x minecraft:magma_cream', 'nethersdelight:propelpearl', 'minecraft:lava_bucket')
        .itemOutputs('nethersdelight:magma_gelatin')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('nethersdelight:magma_gelatin_2')
        .itemInputs('3x minecraft:magma_cream', 'nethersdelight:propelpearl', 'minecraft:bucket')
        .inputFluids('minecraft:lava 1000')
        .itemOutputs('nethersdelight:magma_gelatin')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('nethersdelight:raw_stuffed_hoglin')
        .itemInputs('2x farmersdelight:ham', '2x nethersdelight:hoglin_loin', 'nethersdelight:hoglin_hide', 'farmersdelight:nether_salad', 'minecraft:warped_fungus', 'minecraft:crimson_fungus', 'minecraft:crimson_roots')
        .itemOutputs('nethersdelight:raw_stuffed_hoglin')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('nethersdelight:stuffed_hoglin')
        .itemInputs('nethersdelight:raw_stuffed_hoglin', '2x farmersdelight:nether_salad')
        .itemOutputs('nethersdelight:stuffed_hoglin')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    // Vintage Delight
    event.recipes.gtceu.culinary_assembler('vintagedelight:pickled_pepper')
        .itemInputs('5x vintagedelight:ghost_pepper', '#forge:salt')
        .itemOutputs('5x vintagedelight:pickled_pepper')
        .EUt(recipeEUt)
        .duration(1200);

    event.recipes.gtceu.culinary_assembler('vintagedelight:pickle')
        .itemInputs('5x #forge:cucumber', '#forge:salt')
        .itemOutputs('5x vintagedelight:pickle')
        .EUt(recipeEUt)
        .duration(1200);

    event.recipes.gtceu.culinary_assembler('vintagedelight:pickled_onion')
        .itemInputs('5x #forge:onions', '#forge:salt')
        .itemOutputs('5x vintagedelight:pickled_onion')
        .EUt(recipeEUt)
        .duration(1200);

    event.recipes.gtceu.culinary_assembler('vintagedelight:pickled_beetroot')
        .itemInputs('5x minecraft:beetroot', '#forge:salt')
        .itemOutputs('5x vintagedelight:pickled_beetroot')
        .EUt(recipeEUt)
        .duration(1200);

    event.recipes.gtceu.culinary_assembler('vintagedelight:pickled_egg')
        .itemInputs('5x minecraft:egg', '#forge:salt')
        .itemOutputs('5x vintagedelight:pickled_egg')
        .EUt(recipeEUt)
        .duration(1200);

    event.recipes.gtceu.culinary_assembler('vintagedelight:surstromming')
        .itemInputs('5x #forge:raw_fishes', '#forge:salt')
        .itemOutputs('5x vintagedelight:surstromming')
        .EUt(recipeEUt)
        .duration(1200);

    event.recipes.gtceu.culinary_assembler('vintagedelight:century_egg')
        .itemInputs('minecraft:sniffer_egg', 'minecraft:coal', '#forge:salt')
        .itemOutputs('5x vintagedelight:century_egg')
        .EUt(recipeEUt)
        .duration(72000); // this is not an error recipe takes 1h

    event.recipes.gtceu.culinary_assembler('vintagedelight:kimchi')
        .itemInputs('4x farmersdelight:cabbage_leaf', '#forge:salt', 'vintagedelight:ghost_pepper')
        .itemOutputs('4x vintagedelight:kimchi', 'vintagedelight:pickled_pepper')
        .EUt(recipeEUt)
        .duration(1200);

    event.recipes.gtceu.culinary_assembler('vintagedelight:oatmeal')
        .itemInputs('vintagedelight:raw_oats', 'minecraft:sugar', 'minecraft:bowl')
        .itemOutputs('vintagedelight:oatmeal')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:oatmeal_cookie')
        .itemInputs('2x vintagedelight:raw_oats', 'minecraft:honey_bottle')
        .itemOutputs('8x vintagedelight:oatmeal_cookie')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:overnight_oats')
        .itemInputs('vintagedelight:raw_oats', '#forge:berries', 'farmersdelight:pumpkin_slice', 'minecraft:melon_slice', 'minecraft:apple', 'minecraft:bowl')
        .itemOutputs('vintagedelight:overnight_oats')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:chocolate_nut_granola_bar')
        .itemInputs('vintagedelight:raw_oats', 'minecraft:honey_bottle', 'minecraft:cocoa_beans', 'vintagedelight:roasted_peanut')
        .itemOutputs('vintagedelight:chocolate_nut_granola_bar', 'minecraft:glass_bottle')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:deluxe_granola_bar')
        .itemInputs('vintagedelight:raw_oats', 'minecraft:honey_bottle', 'minecraft:cocoa_beans', 'vintagedelight:roasted_peanut', '2x #forge:berries')
        .itemOutputs('vintagedelight:deluxe_granola_bar', 'minecraft:glass_bottle')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:fruity_granola_bar')
        .itemInputs('vintagedelight:raw_oats', 'minecraft:honey_bottle', '2x #forge:berries')
        .itemOutputs('vintagedelight:fruity_granola_bar', 'minecraft:glass_bottle')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:apple_sauce_mason_jar')
        .itemInputs('5x minecraft:apple', 'minecraft:sugar', 'vintagedelight:mason_jar')
        .itemOutputs('vintagedelight:apple_sauce_mason_jar')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:gearo_berry_mason_jar')
        .itemInputs('5x vintagedelight:gearo_berry', 'minecraft:sugar', 'vintagedelight:mason_jar')
        .itemOutputs('vintagedelight:gearo_berry_mason_jar')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:sweet_berry_mason_jar')
        .itemInputs('5x minecraft:sweet_berries', 'minecraft:sugar', 'vintagedelight:mason_jar')
        .itemOutputs('vintagedelight:sweet_berry_mason_jar')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:glow_berry_mason_jar')
        .itemInputs('5x minecraft:glow_berries', 'minecraft:sugar', 'vintagedelight:mason_jar')
        .itemOutputs('vintagedelight:glow_berry_mason_jar')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:pepper_jam_mason_jar')
        .itemInputs('5x vintagedelight:pickled_pepper', 'minecraft:sugar', 'vintagedelight:mason_jar')
        .itemOutputs('vintagedelight:pepper_jam_mason_jar')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:relish_mason_jar')
        .itemInputs('5x vintagedelight:pickle', 'minecraft:sugar', 'vintagedelight:mason_jar')
        .itemOutputs('vintagedelight:relish_mason_jar')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:nut_mash_mason_jar')
        .itemInputs('5x #forge:coooked_nuts', 'minecraft:sugar', 'vintagedelight:mason_jar')
        .itemOutputs('vintagedelight:nut_mash_mason_jar')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:vinegar_mason_jar')
        .itemInputs('#vintagedelight:jam_jars', '#forge:mushrooms')
        .itemOutputs('vintagedelight:vinegar_mason_jar', '3x vintagedelight:organic_mash')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('vintagedelight:vinegar_bottle')
        .itemInputs('vintagedelight:vinegar_mason_jar', '3x minecraft:glass_bottle')
        .itemOutputs('3x vintagedelight:vinegar_bottle')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:apple_sauce_bottle')
        .itemInputs('vintagedelight:apple_sauce_mason_jar', '3x minecraft:glass_bottle')
        .itemOutputs('3x vintagedelight:apple_sauce_bottle')
        .EUt(recipeEUt)
        .circuit(1)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:gearo_berry_bottle')
        .itemInputs('vintagedelight:gearo_berry_mason_jar', '3x minecraft:glass_bottle')
        .itemOutputs('3x vintagedelight:gearo_berry_bottle')
        .EUt(recipeEUt)
        .circuit(1)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:sweet_berry_bottle')
        .itemInputs('vintagedelight:sweet_berry_mason_jar', '3x minecraft:glass_bottle')
        .itemOutputs('3x vintagedelight:sweet_berry_bottle')
        .EUt(recipeEUt)
        .circuit(1)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:glow_berry_bottle')
        .itemInputs('vintagedelight:glow_berry_mason_jar', '3x minecraft:glass_bottle')
        .itemOutputs('3x vintagedelight:glow_berry_bottle')
        .EUt(recipeEUt)
        .circuit(1)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:pepper_jam_bottle')
        .itemInputs('vintagedelight:pepper_jam_mason_jar', '3x minecraft:glass_bottle')
        .itemOutputs('3x vintagedelight:pepper_jam_bottle')
        .EUt(recipeEUt)
        .circuit(1)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:relish_bottle')
        .itemInputs('vintagedelight:relish_mason_jar', '3x minecraft:glass_bottle')
        .itemOutputs('3x vintagedelight:relish_bottle')
        .EUt(recipeEUt)
        .circuit(1)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:nut_mash_bottle')
        .itemInputs('vintagedelight:nut_mash_mason_jar', '3x minecraft:glass_bottle')
        .itemOutputs('3x vintagedelight:nut_mash_bottle')
        .EUt(recipeEUt)
        .circuit(1)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:cheese_curds')
        .itemInputs('#forge:salt', 'vintagedelight:vinegar_bottle')
        .inputFluids('minecraft:milk 500')
        .itemOutputs('4x vintagedelight:cheese_curds')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:cheese_wheel')
        .itemInputs('4x vintagedelight:cheese_curds')
        .itemOutputs('vintagedelight:cheese_wheel')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:cheese_pizza')
        .itemInputs('3x #forge:cheese', '2x #forge:dough', 'farmersdelight:tomato_sauce')
        .itemOutputs('vintagedelight:cheese_pizza')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    ['#forge:cooked_beef', '#forge:cooked_pork', '#forge:cooked_chicken', '#forge:cooked_fishes', '#forge:cooked_mutton', 'minecraft:cooked_rabbit'].forEach((meat, index) => {
        event.recipes.gtceu.culinary_assembler(`vintagedelight:meat_pizza_${index}`)
            .itemInputs('3x #forge:cheese', '2x #forge:dough', 'farmersdelight:tomato_sauce', meat)
            .itemOutputs('vintagedelight:meat_pizza')
            .EUt(recipeEUt)
            .circuit(1)
            .duration(recipeDuration);
    });

    event.recipes.gtceu.culinary_assembler('vintagedelight:pickle_soup')
        .itemInputs('vintagedelight:pickle', 'minecraft:carrot', 'minecraft:potato', 'minecraft:beetroot', '#forge:salad_ingredients', 'minecraft:bowl')
        .itemOutputs('vintagedelight:pickle_soup')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:ghostly_chili')
        .itemInputs('2x vintagedelight:ghost_pepper', 'minecraft:carrot', '#forge:tomatoes', 'farmersdelight:minced_beef', 'minecraft:bowl')
        .itemOutputs('vintagedelight:ghostly_chili')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:pad_thai')
        .itemInputs('vintagedelight:ghost_pepper', '#forge:pasta', '#forge:cooked_chicken', 'vintagedelight:nut_mash_bottle', 'vintagedelight:peanut', 'minecraft:bowl')
        .itemOutputs('vintagedelight:pad_thai', 'minecraft:glass_bottle')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:cheese_pasta')
        .itemInputs('#forge:pasta', '2x #forge:cheese', 'minecraft:bowl')
        .itemOutputs('vintagedelight:cheese_pasta')
        .EUt(recipeEUt)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:cucumber_salad')
        .itemInputs('#forge:cabbage', '#forge:cucumber', 'vintagedelight:pickled_beetroot', 'vintagedelight:pickled_onion', 'minecraft:bowl')
        .itemOutputs('vintagedelight:cucumber_salad')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('vintagedelight:cheese_burger')
        .itemInputs('minecraft:bread', 'farmersdelight:beef_patty', '#forge:cheese', '#forge:salad_ingredients', '#forge:tomatoes', '#forge:onions')
        .itemOutputs('vintagedelight:cheese_burger')
        .EUt(recipeEUt)
        .duration(recipeDuration);
    
    event.recipes.gtceu.culinary_assembler('vintagedelight:deluxe_burger')
        .itemInputs('minecraft:bread', 'farmersdelight:beef_patty', '#forge:cheese', '#forge:salad_ingredients', '#forge:tomatoes', '#forge:onions', 'farmersdelight:fried_egg', '#forge:cooked_bacon')
        .itemOutputs('vintagedelight:deluxe_burger')
        .EUt(recipeEUt)
        .circuit(1)
        .duration(recipeDuration);

    event.recipes.gtceu.culinary_assembler('vintagedelight:stuffed_burrito')
        .itemInputs('minecraft:bread', 'farmersdelight:beef_patty', '#forge:salad_ingredients', '#forge:tomatoes', '#forge:cheese', 'vintagedelight:ghost_pepper')
        .itemOutputs('vintagedelight:stuffed_burrito')
        .EUt(recipeEUt)
        .circuit(2)
        .duration(recipeDuration);
})