ServerEvents.recipes(event => {
    console.log('Registering Food Cutter Recipes')

    event.recipes.gtceu.slicer('croptopia:bacon')
        .itemInputs('minecraft:porkchop')
        .itemOutputs('4x croptopia:bacon')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('croptopia:ground_pork')
        .itemInputs('minecraft:porkchop')
        .itemOutputs('2x croptopia:ground_pork')
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)
        .duration(400);

    event.recipes.gtceu.slicer('farmersdelight:pumpkin_slice')
        .itemInputs('minecraft:pumpkin')
        .itemOutputs('4x farmersdelight:pumpkin_slice')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    //Farmer's Delight
    event.recipes.gtceu.slicer('farmersdelight:straw')
        .itemInputs('#farmersdelight:straw_plants')
        .chancedOutput('farmersdelight:straw', '1/5', 200)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('farmersdelight:raw_pasta')
        .itemInputs('#forge:dough')
        .itemOutputs('farmersdelight:raw_pasta')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('farmersdelight:cabbage_leaf')
        .itemInputs('farmersdelight:cabbage')
        .itemOutputs('2x farmersdelight:cabbage_leaf')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('farmersdelight:minced_beef')
        .itemInputs('minecraft:beef')
        .itemOutputs('2x farmersdelight:minced_beef')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('farmersdelight:chicken_cuts')
        .itemInputs('minecraft:chicken')
        .itemOutputs('2x farmersdelight:chicken_cuts', 'minecraft:bone_meal')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('farmersdelight:bacon')
        .itemInputs('minecraft:porkchop')
        .itemOutputs('2x farmersdelight:bacon')
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)
        .duration(400);

    event.recipes.gtceu.slicer('farmersdelight:mutton_chops')
        .itemInputs('minecraft:mutton')
        .itemOutputs('2x farmersdelight:mutton_chops')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('farmersdelight:cod_slice')
        .itemInputs('minecraft:cod')
        .itemOutputs('2x farmersdelight:cod_slice', 'minecraft:bone_meal')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('farmersdelight:salmon_slice')
        .itemInputs('minecraft:salmon')
        .itemOutputs('2x farmersdelight:salmon_slice', 'minecraft:bone_meal')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('farmersdelight:cake_slice')
        .itemInputs('minecraft:cake')
        .itemOutputs('7x farmersdelight:cake_slice')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('farmersdelight:apple_pie_slice')
        .itemInputs('farmersdelight:apple_pie')
        .itemOutputs('4x farmersdelight:apple_pie_slice')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('farmersdelight:sweet_berry_cheesecake_slice')
        .itemInputs('farmersdelight:sweet_berry_cheesecake')
        .itemOutputs('4x farmersdelight:sweet_berry_cheesecake_slice')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('farmersdelight:chocolate_pie_slice')
        .itemInputs('farmersdelight:chocolate_pie')
        .itemOutputs('4x farmersdelight:chocolate_pie_slice')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('farmersdelight:kelp_roll_slice')
        .itemInputs('farmersdelight:kelp_roll')
        .itemOutputs('3x farmersdelight:kelp_roll_slice')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('farmersdelight:shepherds_pie')
        .itemInputs('farmersdelight:shepherds_pie_block', '3x minecraft:bowl')
        .itemOutputs('4x farmersdelight:shepherds_pie')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('farmersdelight:honey_glazed_ham')
        .itemInputs('farmersdelight:honey_glazed_ham_block', '3x minecraft:bowl')
        .itemOutputs('4x farmersdelight:honey_glazed_ham', 'minecraft:bone')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('farmersdelight:roast_chicken')
        .itemInputs('farmersdelight:roast_chicken_block', '3x minecraft:bowl')
        .itemOutputs('4x farmersdelight:roast_chicken', 'minecraft:bone_meal')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('farmersdelight:stuffed_pumpkin')
        .itemInputs('farmersdelight:stuffed_pumpkin_block', '4x minecraft:bowl')
        .itemOutputs('4x farmersdelight:stuffed_pumpkin')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    // Nether's Delight
    event.recipes.gtceu.slicer('nethersdelight:ground_strider')
        .itemInputs('nethersdelight:strider_slice')
        .itemOutputs('2x nethersdelight:ground_strider')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('nethersdelight:sliced_stuffed_hoglin')
        .itemInputs('nethersdelight:stuffed_hoglin', '9x minecraft:bowl')
        .itemOutputs('nethersdelight:plate_of_stuffed_hoglin_snout', '4x nethersdelight:plate_of_stuffed_hoglin_ham', '4x nethersdelight:plate_of_stuffed_hoglin_roast', '2x nethersdelight:hoglin_ear', '4x minecraft:bone')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);
    
    // Vintage Delight
    event.recipes.gtceu.slicer('vintagedelight:cucumber_noodles')
        .itemInputs('#forge:cucumber')
        .itemOutputs('vintagedelight:cucumber_noodles')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('vintagedelight:cheese_slice')
        .itemInputs('vintagedelight:cheese_wheel')
        .itemOutputs('4x vintagedelight:cheese_slice')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('vintagedelight:cheese_pizza_slice')
        .itemInputs('vintagedelight:cheese_pizza')
        .itemOutputs('4x vintagedelight:cheese_pizza_slice')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('vintagedelight:meat_pizza_slice')
        .itemInputs('vintagedelight:meat_pizza')
        .itemOutputs('4x vintagedelight:meat_pizza_slice')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    // Ocean's Delight
    event.recipes.gtceu.slicer('oceansdelight:cut_tentacles')
        .itemInputs('oceansdelight:tentacles')
        .itemOutputs('3x oceansdelight:cut_tentacles')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('oceansdelight:guardian_tail')
        .itemInputs('oceansdelight:tentacles')
        .itemOutputs('oceansdelight:guardian_tail', 'minecraft:bone_meal')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('oceansdelight:elder_guardian_slice')
        .itemInputs('oceansdelight:elder_guardian_slab')
        .itemOutputs('9x oceansdelight:elder_guardian_slice', 'minecraft:bone_meal')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.slicer('oceansdelight:fugu_slice')
        .itemInputs('minecraft:pufferfish')
        .itemOutputs('6x oceansdelight:fugu_slice', 'minecraft:bone_meal')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);
})