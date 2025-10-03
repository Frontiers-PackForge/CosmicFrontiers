//A Simple "REMOVE AND HIDE" function akin to GroovyScript's Jei.yeet() function - This will tag the item for hiding from recipe viewers and remove the recipe
//This one also has a tag removal function to remove the forge:tools/hammers tag from what is removed so bear that in mind if you copy/paste this around
let yeet = (itemName) => {
    ServerEvents.recipes(event => {
        event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
        event.remove('forge:tools/hammers', itemName)
        event.add('c:hidden_from_recipe_viewers', itemName)
    })
}

yeet('forestry:ingot_bronze')
yeet('forestry:ingot_tin')
yeet('forestry:apatite')

yeet('forestry:gear_copper')
yeet('forestry:gear_tin')
yeet('forestry:gear_bronze')

//Machines
yeet('forestry:still')
yeet('forestry:engine_peat')
yeet('forestry:engine_biogas')
yeet('forestry:engine_clockwork')
yeet('forestry:bottler')
yeet('forestry:carpenter')
yeet('forestry:centrifuge')
yeet('forestry:fermenter')
yeet('forestry:moistener')
yeet('forestry:squeezer')


//A better Versionf YEET that will erase entire collections of blocks/items including any stray recipes or tags.

ServerEvents.tags('item', event => {
    event.remove('forge:ingots/bronze', 'forestry:ingot_bronze')
    event.remove('forge:ingots/tin', 'forestry:ingot_tin')
    event.remove('forge:gems/apatite', 'forestry:apatite')

    event.remove('forge:gears/copper', 'forestry:gear_copper')
    event.remove('forge:gears/tin', 'forestry:gear_tin')
    event.remove('forge:gears/bronze', 'forestry:gear_bronze')

    event.add('c:hidden_from_recipe_viewers', 'forestry:ingot_bronze')
    event.add('c:hidden_from_recipe_viewers', 'forestry:ingot_tin')
    event.add('c:hidden_from_recipe_viewers', 'forestry:apatite')

    event.add('c:hidden_from_recipe_viewers', 'forestry:can')
    event.add('c:hidden_from_recipe_viewers', 'forestry:capsule')
    event.add('c:hidden_from_recipe_viewers', 'forestry:refractory')



})
ServerEvents.recipes(event => {

    event.remove({ type: 'forestry:still' })
    event.remove({ type: 'forestry:engine_peat' })
    event.remove({ type: 'forestry:engine_biogas' })
    event.remove({ type: 'forestry:engine_clockwork' })
    event.remove({ type: 'forestry:bottler' })
    event.remove({ type: 'forestry:carpenter' })
    // event.remove({ type: 'forestry:centrifuge' })
    event.remove({ type: 'forestry:fermenter' })
    event.remove({ type: 'forestry:moistener' })
    // event.remove({ type: 'forestry:squeezer' })



    event.recipes.gtceu.centrifuge('frontiers:comb_centrifuge_mellow')
        .itemInputs('forestry:bee_comb_mellow')
        .chancedOutput('forestry:honeydew', 6000, 0)
        .chancedOutput('minecraft:quartz', 2000, 0)
        .chancedOutput('forestry:beeswax', 3000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.centrifuge('frontiers:comb_centrifuge_regular_bee')
        .itemInputs('forestry:bee_comb_honey')
        .chancedOutput('forestry:beeswax', 10000, 0)
        .chancedOutput('forestry:honey_drop', 9000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.centrifuge('frontiers:comb_centrifuge_cocoa')
        .itemInputs('forestry:bee_comb_cocoa')
        .chancedOutput('forestry:beeswax', 10000, 0)
        .chancedOutput('minecraft:cocoa_beans', 5000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.centrifuge('frontiers:comb_centrifuge_simmering')
        .itemInputs('forestry:bee_comb_simmering')
        .itemOutputs('forestry:refractory_wax')
        .chancedOutput('forestry:honey_drop', 7000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.centrifuge('frontiers:comb_centrifuge_stringy')
        .itemInputs('forestry:bee_comb_stringy')
        .itemOutputs('forestry:propolis_normal')
        .chancedOutput('forestry:honey_drop', 4000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.centrifuge('frontiers:comb_centrifuge_frozen')
        .itemInputs('forestry:bee_comb_frozen')
        .chancedOutput('forestry:beeswax', 8000, 0)
        .chancedOutput('forestry:honey_drop', 7000, 0)
        .chancedOutput('minecraft:snowball', 4000, 0)
        .chancedOutput('forestry:pollen_cluster_crystalline', 2000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.centrifuge('forestry:bee_comb_dripping')
        .itemInputs('forestry:bee_comb_dripping')
        .itemOutputs('forestry:honeydew')
        .chancedOutput('forestry:honey_drop', 4000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.centrifuge('forestry:bee_comb_silky')
        .itemInputs('forestry:bee_comb_silky')
        .itemOutputs('forestry:honey_drop')
        .chancedOutput('forestry:propolis_silky', 8000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.centrifuge('forestry:bee_comb_parched')
        .itemInputs('forestry:bee_comb_parched')
        .itemOutputs('forestry:beeswax')
        .chancedOutput('forestry:honey_drop', 8000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.centrifuge('forestry:bee_comb_mysterious')
        .itemInputs('forestry:bee_comb_mysterious')
        .itemOutputs('forestry:propolis_pulsating')
        .chancedOutput('forestry:honey_drop', 4000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.centrifuge('forestry:bee_comb_powdery')
        .itemInputs('forestry:bee_comb_powdery')
        .chancedOutput('minecraft:gunpowder', 8000, 0)
        .chancedOutput('forestry:honey_drop', 4000, 0)
        .chancedOutput('forestry:beeswax', 4000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.centrifuge('forestry:bee_comb_wheaten')
        .itemInputs('forestry:bee_comb_wheaten')
        .chancedOutput('minecraft:wheat', 8000, 0)
        .chancedOutput('forestry:honey_drop', 2000, 0)
        .chancedOutput('forestry:beeswax', 2000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.centrifuge('forestry:bee_comb_mossy')
        .itemInputs('forestry:bee_comb_mossy')
        .chancedOutput('minecraft:moss_block', 8000, 0)
        .chancedOutput('forestry:honey_drop', 2000, 0)
        .chancedOutput('forestry:beeswax', 2000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.centrifuge('forestry:bee_comb_kaolin')
        .itemInputs('forestry:bee_comb_kaolin')
        .chancedOutput('minecraft:clay', 9600, 0)
        .chancedOutput('forestry:honey_drop', 2000, 0)
        .chancedOutput('forestry:beeswax', 2000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.centrifuge('forestry:bee_comb_vintage')
        .itemInputs('forestry:bee_comb_vintage')
        .chancedOutput('vintagedelight:cheese_curds', 9600, 0)
        .chancedOutput('forestry:honey_drop', 2000, 0)
        .chancedOutput('forestry:beeswax', 2000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);


    event.recipes.gtceu.extractor('frontiers:lunar_comb_moon_dust')
        .itemInputs('4x cosmiccore:bee_comb_lunar')
        .itemOutputs('2x gtceu:moon_stone_dust')
        .outputFluids('cosmiccore:prisma 250')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.extractor('frontiers:lofty_comb_hydrogen_extract_1')
        .itemInputs('4x cosmiccore:bee_comb_lofty_hydrogen')
        .itemOutputs('4x forestry:refractory_wax')
        .outputFluids('gtceu:hydrogen_honey 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.chemical_dehydrator('frontiers:lofty_comb_hydrogen_extract_2')
        .inputFluids('gtceu:hydrogen_honey 1000')
        .outputFluids('create:honey 1000')
        .outputFluids('gtceu:hydrogen 4000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.extractor('frontiers:lofty_comb_oxygen_extract_1')
        .itemInputs('4x cosmiccore:bee_comb_lofty_oxygen')
        .itemOutputs('4x forestry:refractory_wax')
        .outputFluids('gtceu:oxygen_honey 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.chemical_dehydrator('frontiers:lofty_comb_oxygen_extract_2')
        .inputFluids('gtceu:oxygen_honey 1000')
        .outputFluids('create:honey 1000')
        .outputFluids('gtceu:oxygen 4000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.extractor('frontiers:lofty_comb_nitrogen_extract_1')
        .itemInputs('4x cosmiccore:bee_comb_lofty_nitrogen')
        .itemOutputs('4x forestry:refractory_wax')
        .outputFluids('gtceu:nitrogen_honey 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.chemical_dehydrator('frontiers:lofty_comb_nitrogen_extract_2')
        .inputFluids('gtceu:nitrogen_honey 1000')
        .outputFluids('create:honey 1000')
        .outputFluids('gtceu:nitrogen 4000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.extractor('frontiers:lofty_comb_argon_extract_1')
        .itemInputs('4x cosmiccore:bee_comb_lofty_argon')
        .itemOutputs('4x forestry:refractory_wax')
        .outputFluids('gtceu:argon_honey 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.chemical_dehydrator('frontiers:lofty_comb_argon_extract_2')
        .inputFluids('gtceu:argon_honey 1000')
        .outputFluids('create:honey 1000')
        .outputFluids('gtceu:argon 4000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.electrolyzer('frontiers:create_honey_to_stuff')
        .inputFluids('create:honey 1000')
        .itemOutputs('6x gtceu:carbon_dust')
        .outputFluids('gtceu:hydrogen 12000')
        .outputFluids('gtceu:oxygen 6000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.mixer('frontiers:basic_production_nutrient')
        .inputFluids('create:honey 1000')
        .inputFluids('minecraft:water 9000')
        .circuit(3)
        .outputFluids('cosmiccore:basic_production_nutrient 10000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.mixer('frontiers:adv_production_nutrient')
        .inputFluids('cosmiccore:basic_production_nutrient 10000')
        .inputFluids('gtceu:nutrient_solution 10000')
        .circuit(3)
        .outputFluids('cosmiccore:advanced_production_nutrient 10000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.mixer('frontiers:basic_overclock_nutrient')
        .inputFluids('create:honey 1000')
        .inputFluids('gtceu:nutrient_solution 4000')
        .inputFluids('gtceu:distilled_water 5000')
        .circuit(4)
        .outputFluids('cosmiccore:basic_overclock_nutrient 10000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.mixer('frontiers:adv_overclock_nutrient')
        .inputFluids('cosmiccore:basic_overclock_nutrient 10000')
        .inputFluids('gtceu:complex_multivitamin_solution 1000')
        .circuit(4)
        .outputFluids('cosmiccore:advanced_overclock_nutrient 10000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.compressor('frontiers:abrasive_comb_to_pellet')
        .itemInputs('64x cosmiccore:bee_comb_abrasive')
        .itemOutputs('64x cosmiccore:abrasive_rosin_millstones')
        .duration(40)
        .EUt(GTValues.VA[GTValues.LV]);




})

