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
yeet('forestry:circuit_board_basic')
yeet('forestry:circuit_board_enhanced')
yeet('forestry:circuit_board_refined')
yeet('forestry:woven_silk')
yeet('forestry:charcoal')

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
yeet('forestry:fabricator')

//Ores
yeet('forestry:tin_ore')
yeet('forestry:deepslate_tin_ore')
yeet('forestry:apatite_ore')
yeet('forestry:deepslate_apatite_ore')
yeet('forestry:raw_tin_block')
yeet('forestry:raw_tin')
yeet('forestry:resource_storage_tin')
yeet('forestry:resource_storage_apatite')
yeet('forestry:resource_storage_bronze')

//Tools
yeet('forestry:adventurer_bag')
yeet('forestry:adventurer_bag_woven')
yeet('forestry:broken_bronze_pickaxe')
yeet('forestry:broken_bronze_shovel')
yeet('forestry:bronze_pickaxe')
yeet('forestry:bronze_shovel')
yeet('forestry:kit_pickaxe')
yeet('forestry:kit_shovel')
yeet('forestry:wrench')
yeet('forestry:pipette')
yeet('forestry:carton')

//Crates
yeet('forestry:crate')
yeet(/forestry:crated_/) //all crated items

//Singleblock farms (both types)
yeet(/forestry:arboretum_/)
yeet(/forestry:peat_bog_/)
yeet(/forestry:farm_mushroom_/)
yeet(/forestry:farm_nether_/)
yeet(/forestry:farm_crops_/)
yeet(/forestry:farm_ender_/)
yeet(/forestry:farm_gourd_/)

//Casings
yeet('forestry:impregnated_casing') 
yeet('forestry:sturdy_machine')
yeet('forestry:hardened_machine')
yeet('forestry:flexible_casing')

//Buckets
yeet('forestry:bucket_seed_oil')
yeet('forestry:bucket_ice')
yeet('forestry:bucket_biomass')
yeet('forestry:bucket_bio_ethanol')
yeet('forestry:bucket_glass')
yeet('forestry:bucket_honey')
yeet('forestry:bucket_short_mead')
yeet('forestry:bucket_juice')

//A better Versionf YEET that will erase entire collections of blocks/items including any stray recipes or tags.

ServerEvents.tags('item', event => {
    event.remove('forge:raw_materials/tin', 'forestry:raw_tin')
    event.remove('forge:ingots/bronze', 'forestry:ingot_bronze')
    event.remove('forge:ingots/tin', 'forestry:ingot_tin')
    event.remove('forge:storage_blocks/tin', 'forestry:resource_storage_tin')
    event.remove('forge:storage_blocks/apatite', 'forestry:resource_storage_apatite')
    event.remove('forge:storage_blocks/bronze', 'forestry:resource_storage_bronze')
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

ServerEvents.tags('fluid', event => {
    //Forestry fluids
    event.add('c:hidden_from_recipe_viewers', 'forestry:seed_oil')
    event.add('c:hidden_from_recipe_viewers', 'forestry:ice')
    event.add('c:hidden_from_recipe_viewers', 'forestry:biomass')
    event.add('c:hidden_from_recipe_viewers', 'forestry:bio_ethanol')
    event.add('c:hidden_from_recipe_viewers', 'forestry:glass')
    event.add('c:hidden_from_recipe_viewers', 'forestry:honey')
    event.add('c:hidden_from_recipe_viewers', 'forestry:short_mead')
    event.add('c:hidden_from_recipe_viewers', 'forestry:juice')
})


ServerEvents.recipes(event => {

    event.remove({ type: 'forestry:still' })
    event.remove({ type: 'forestry:engine_peat' })
    event.remove({ type: 'forestry:engine_biogas' })
    event.remove({ type: 'forestry:engine_clockwork' })
    event.remove({ type: 'forestry:bottler' })
    event.remove({ type: 'forestry:carpenter' })
    event.remove({ type: 'forestry:fabricator' })
    // event.remove({ type: 'forestry:centrifuge' })
    event.remove({ type: 'forestry:fermenter' })
    event.remove({ type: 'forestry:moistener' })
    event.remove({ type: 'forestry:squeezer' })
    event.remove({ mod: 'gendustry' })

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

    //Woven bags

    event.recipes.gtceu.spooling_machine('frontiers:miner_bag_woven')
        .itemInputs(['forestry:miner_bag', '2x botania:manaweave_cloth'])
        .itemOutputs('forestry:miner_bag_woven')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.spooling_machine('frontiers:digger_bag_woven')
        .itemInputs(['forestry:digger_bag', '2x botania:manaweave_cloth'])
        .itemOutputs('forestry:digger_bag_woven')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.spooling_machine('frontiers:hunter_bag_woven')
        .itemInputs(['forestry:hunter_bag', '2x botania:manaweave_cloth'])
        .itemOutputs('forestry:hunter_bag_woven')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.spooling_machine('frontiers:builder_bag_woven')
        .itemInputs(['forestry:builder_bag', '2x botania:manaweave_cloth'])
        .itemOutputs('forestry:builder_bag_woven')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.spooling_machine('frontiers:forester_bag_woven')
        .itemInputs(['forestry:forester_bag', '2x botania:manaweave_cloth'])
        .itemOutputs('forestry:forester_bag_woven')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    //Electron tubes

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_copper')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '8x gtceu:fine_copper_wire'])
        .inputFluids('gtceu:tin 144')
        .itemOutputs('forestry:electron_tube_copper')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_tin')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '8x gtceu:fine_tin_wire'])
        .inputFluids('gtceu:tin 144')
        .itemOutputs('forestry:electron_tube_tin')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_iron')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '2x gtceu:iron_single_wire'])
        .inputFluids('gtceu:tin 144')
        .itemOutputs('forestry:electron_tube_iron')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_gold')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '8x gtceu:fine_gold_wire'])
        .inputFluids('gtceu:tin 144')
        .itemOutputs('forestry:electron_tube_gold')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_bronze')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '2x gtceu:bronze_small_fluid_pipe', '2x gtceu:bronze_ring'])
        .inputFluids('gtceu:tin 144')
        .itemOutputs('forestry:electron_tube_bronze')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_apatite')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '4x gtceu:apatite_rod'])
        .inputFluids('gtceu:tin 144')
        .itemOutputs('forestry:electron_tube_apatite')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_lapis')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '4x gtceu:lapis_rod'])
        .inputFluids('gtceu:tin 144')
        .itemOutputs('forestry:electron_tube_lapis')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_diamond')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '4x gtceu:diamond_rod'])
        .inputFluids('gtceu:tin 144')
        .itemOutputs('forestry:electron_tube_diamond')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_emerald')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '4x gtceu:emerald_rod'])
        .inputFluids('gtceu:tin 144')
        .itemOutputs('forestry:electron_tube_emerald')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_blaze')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '4x minecraft:blaze_rod'])
        .inputFluids('gtceu:tin 144')
        .itemOutputs('forestry:electron_tube_blaze')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_obsidian')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '4x #forge:plates/obsidian'])
        .inputFluids('gtceu:tin 144')
        .itemOutputs('forestry:electron_tube_obsidian')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('frontiers:circuit_board_intricate')
        .itemInputs(['#gtceu:circuits/lv', '16x gtceu:fine_gold_wire', '16x gtceu:fine_red_alloy_wire'])
        .inputFluids('gtceu:tin 144')
        .itemOutputs('forestry:circuit_board_intricate')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_copper_soldering_alloy')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '8x gtceu:fine_copper_wire'])
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('forestry:electron_tube_copper')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_tin_soldering_alloy')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '8x gtceu:fine_tin_wire'])
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('forestry:electron_tube_tin')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_iron_soldering_alloy')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '2x gtceu:iron_single_wire'])
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('forestry:electron_tube_iron')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_gold_soldering_alloy')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '8x gtceu:fine_gold_wire'])
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('forestry:electron_tube_gold')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_bronze_soldering_alloy')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '2x gtceu:bronze_small_fluid_pipe', '2x gtceu:bronze_ring'])
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('forestry:electron_tube_bronze')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_apatite_soldering_alloy')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '4x gtceu:apatite_rod'])
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('forestry:electron_tube_apatite')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_lapis_soldering_alloy')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '4x gtceu:lapis_rod'])
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('forestry:electron_tube_lapis')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_diamond_soldering_alloy')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '4x gtceu:diamond_rod'])
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('forestry:electron_tube_diamond')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_emerald_soldering_alloy')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '4x gtceu:emerald_rod'])
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('forestry:electron_tube_emerald')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_blaze_soldering_alloy')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '4x minecraft:blaze_rod'])
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('forestry:electron_tube_blaze')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('frontiers:electron_tube_obsidian_soldering_alloy')
        .itemInputs(['gtceu:glass_tube', 'gtceu:steel_bolt', '4x #forge:plates/obsidian'])
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('forestry:electron_tube_obsidian')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
    
    event.recipes.gtceu.circuit_assembler('frontiers:circuit_board_intricate_soldering_alloy')
        .itemInputs(['#gtceu:circuits/lv', '16x gtceu:fine_gold_wire', '16x gtceu:fine_red_alloy_wire'])
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('forestry:circuit_board_intricate')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    //Tools

    event.remove({ id: 'forestry:naturalist_helmet' })
    event.shaped('forestry:naturalist_helmet', [
        'ADA',
        'BCB'
    ], {
        A: 'minecraft:leather',
        B: 'gtceu:bronze_plate',
        C: '#forge:glass_panes',
        D: '#forge:tools/hammers'
    })

    event.remove({ id: 'forestry:portable_alyzer' })
    event.shaped('forestry:portable_alyzer', [
        'ABA',
        'ABA',
        'CDC'
    ], {
        A: 'gtceu:iron_plate',
        B: '#forge:glass_panes',
        C: 'gtceu:vacuum_tube',
        D: '#forge:tools/screwdrivers'
    })

    event.shaped('forestry:soldering_iron', [
        'ABF',
        'DE ',
        'C  '
    ], {
        A: '#gtceu:batteries/lv',
        B: 'gtceu:iron_bolt',
        C: 'gtceu:iron_plate',
        D: 'gtceu:iron_rod',
        E: '#forge:tools/screwdrivers',
        F: '#forge:tools/files'
    })

    event.remove({ output: 'forestry:apiarist_helmet' })
    event.shaped('forestry:apiarist_helmet', [
        'AAA',
        'ABA'
    ], {
        A: 'projectred_core:woven_cloth',
        B: '#forge:tools/knives'
    })

    event.remove({ output: 'forestry:apiarist_chest' })
    event.shaped('forestry:apiarist_chest', [
        'ABA',
        'AAA',
        'AAA'
    ], {
        A: 'projectred_core:woven_cloth',
        B: '#forge:tools/knives'
    })

    event.remove({ output: 'forestry:apiarist_legs' })
    event.shaped('forestry:apiarist_legs', [
        'AAA',
        'ABA',
        'A A'
    ], {
        A: 'projectred_core:woven_cloth',
        B: '#forge:tools/knives'
    })

    event.remove({ output: 'forestry:apiarist_boots' })
    event.shaped('forestry:apiarist_boots', [
        'A A',
        'ABA'
    ], {
        A: 'projectred_core:woven_cloth',
        B: '#forge:tools/knives'
    })

    event.remove({ output: 'forestry:scoop' })
    event.shaped('forestry:scoop', [
        'ABA',
        'AAA',
        'SA '
    ], {
       A: 'minecraft:stick',
       B: 'projectred_core:woven_cloth',
       S: '#forge:tools/saws'
    })

    event.remove({ output: 'forestry:smoker' })
    event.shaped('forestry:smoker', [
        'AHB',
        'ACB',
        'BBB'
    ], {
       A: '#forge:leather',
       B: 'gtceu:iron_plate',
       C: '#forge:dusts/ash',
       H: '#forge:tools/hammers'
    })

    event.remove({ output: 'forestry:grafter' })
    event.shaped('forestry:grafter', [
        ' HA',
        ' BF',
        'B  '
    ], {
        A: 'gtceu:bronze_plate',
        B: 'minecraft:stick',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'        
    })

    event.shaped('forestry:grafter_proven', [
        ' HA',
        ' BF',
        'B  '
    ], {
        A: 'gtceu:steel_plate',
        B: 'gtceu:iron_rod',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files' 
    })

    //MultiFarm

    event.remove({ output: /forestry:farm_/ })

    const MultiFarmShit = (MultifarmBase, MultifarmMaterial) => {
        event.shaped(`forestry:farm_plain_${MultifarmBase}`, [
            'WAH',
            'GGG',
            'BBB'
        ], {
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches',
            B: MultifarmMaterial,
            G: 'gtceu:bronze_plate',
            A: 'gtceu:vacuum_tube'
        })

        event.shaped(`forestry:farm_gearbox_${MultifarmBase}`, [
            'WAH',
            'GGG',
            'BBB'
        ], {
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches',
            B: MultifarmMaterial,
            G: 'gtceu:bronze_gearbox',
            A: 'gtceu:vacuum_tube'
        })

        event.shaped(`2x forestry:farm_valve_${MultifarmBase}`, [
            'WGH',
            'ACA',
            'BBB'
        ], {
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches',
            B: MultifarmMaterial,
            G: '#forge:glass',
            A: 'gtceu:vacuum_tube',
            C: 'gtceu:bronze_machine_casing'
        })

        event.shaped(`2x forestry:farm_hatch_${MultifarmBase}`, [
            'WJH',
            'ACA',
            'BBB'
        ], {
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches',
            B: MultifarmMaterial,
            J: 'minecraft:hopper',
            A: 'gtceu:vacuum_tube',
            C: 'gtceu:bronze_machine_casing'
        })

        event.shaped(`forestry:farm_control_${MultifarmBase}`, [
            'WAH',
            'RRR',
            'BBB'
        ], {
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches',
            B: MultifarmMaterial,
            R: 'gtceu:redstone_plate',
            A: 'gtceu:vacuum_tube'
        })
    }

    MultiFarmShit('stone_brick', 'minecraft:stone_bricks')
    MultiFarmShit('mossy_stone_brick', 'minecraft:mossy_stone_bricks')
    MultiFarmShit('cracked_stone_brick', 'minecraft:cracked_stone_bricks')
    MultiFarmShit('brick_chiseled', 'minecraft:chiseled_stone_bricks')
    MultiFarmShit('brick', 'minecraft:bricks')
    MultiFarmShit('cut_sandstone', 'minecraft:cut_sandstone')
    MultiFarmShit('sandstone_chiseled', 'minecraft:chiseled_sandstone')
    MultiFarmShit('brick_nether', 'minecraft:nether_bricks')
    MultiFarmShit('quartz', 'minecraft:quartz_block')
    MultiFarmShit('quartz_chiseled', 'minecraft:chiseled_quartz')
    MultiFarmShit('quartz_lines', 'minecraft:quartz_pillar')

    //Beefuckery

    event.remove({ output: 'forestry:apiary' })
    event.shaped('forestry:apiary', [
        'AAA',
        'BCD',
        'AAA'
    ], {
        A: 'gtceu:treated_wood_slab',
        B: '#forge:tools/saws',
        C: 'gtceu:treated_wood_frame',
        D: '#forge:tools/mallets'
    })

    event.remove({ output: 'forestry:bee_house' })
    event.shaped('forestry:bee_house', [
        'AAA',
        'BCD',
        'EEE'
    ], {
        A: 'gtceu:treated_wood_slab',
        B: '#forge:tools/saws',
        C: '#forestry:combs',
        D: '#forge:tools/mallets',
        E: 'gtceu:treated_wood_plate'
    })

    event.recipes.gtceu.assembler('frontiers:scented_paneling')
        .itemInputs(['6x gtceu:treated_wood_plate', '2x forestry:beeswax', 'forestry:royal_jelly'])
        .itemOutputs('2x forestry:scented_paneling')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.remove({ output: 'forestry:alveary_plain' })
    event.shaped('forestry:alveary_plain', [
        'AEA',
        'BCD',
        'AAA'
    ], {
        A: 'forestry:scented_paneling',
        B: '#forge:tools/saws',
        C: 'gtceu:treated_wood_frame',
        D: '#forge:tools/mallets',
        E: 'embers:dawnstone_plate'
    })

    event.remove({ output: 'forestry:alveary_swarmer' })
    event.shaped('forestry:alveary_swarmer', [
        'ABA',
        'HPW',
        'ABA'
    ], {
        A: 'forestry:electron_tube_diamond',
        B: 'gtceu:gold_plate',
        H: '#forge:tools/hammers',
        P: 'forestry:alveary_plain',
        W: '#forge:tools/wrenches'
    })

    event.remove({ output: 'forestry:alveary_fan' })
    event.shaped('forestry:alveary_fan', [
        'AAA',
        'HPW',
        'ABA'
    ], {
        A: 'embers:dawnstone_plate',
        B: 'forestry:electron_tube_gold',
        H: '#forge:tools/hammers',
        P: 'forestry:alveary_plain',
        W: '#forge:tools/wrenches'
    })

    event.remove({ output: 'forestry:alveary_heater' })
    event.shaped('forestry:alveary_heater', [
        'BAB',
        'HPW',
        'FFF'
    ], {
        A: 'embers:dawnstone_plate',
        B: 'forestry:electron_tube_gold',
        H: '#forge:tools/hammers',
        P: 'forestry:alveary_plain',
        W: '#forge:tools/wrenches',
        F: 'embers:superheater'
    })

    event.remove({ output: 'forestry:alveary_hygro' })
    event.shaped('forestry:alveary_hygro', [
        'BAB',
        'HPW',
        'FAF'
    ], {
        A: 'gtceu:steel_normal_fluid_pipe',
        B: '#forge:glass',
        H: '#forge:tools/hammers',
        P: 'forestry:alveary_plain',
        W: '#forge:tools/wrenches',
        F: 'embers:superheater'
    })

    event.remove({ output: 'forestry:alveary_stabiliser' })
    event.shaped('forestry:alveary_stabiliser', [
        "ABA",
        "HPW",
        "ABA"
    ], {
        A: 'gtceu:aluminium_plate',
        B: '#gtceu:circuits/mv',
        H: '#forge:tools/hammers',
        P: 'forestry:alveary_plain',
        W: '#forge:tools/wrenches'
    })

    event.remove({ output: 'forestry:alveary_sieve' })
    event.shaped('forestry:alveary_sieve', [
        "AAA",
        "HPW",
        "BBB"
    ], {
        A: 'embers:dawnstone_plate',
        B: 'gtceu:item_filter',
        H: '#forge:tools/hammers',
        P: 'forestry:alveary_plain',
        W: '#forge:tools/wrenches'
    })

    event.remove({ output: 'forestry:frame_impregnated' })
    event.shaped('forestry:frame_impregnated', [
        'AAA',
        'ABA',
        'AAA'
    ], {
       A: 'gtceu:treated_wood_rod',
       B: '#forge:string'
    })

    event.recipes.gtceu.assembler('frontiers:frame_proven')
        .itemInputs(['4x forestry:scented_paneling', '2x botania:mana_string'])
        .itemOutputs('forestry:frame_proven')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    //end hive """crafting"""
    event.custom(
        {
            "type": "malum:spirit_transmutation",
            "input": {
              "item": "forestry:beehive_nether"
            },
            "output": {
              "item": "forestry:beehive_end"
            }
        }).id("malum:spirit_infusion.frontiers.end_hive")

    //Misc

    event.remove({ output: 'forestry:fertilizer_compound' })
    event.recipes.gtceu.macerator('frontiers:fertilizer_compound')
    .itemInputs('gtceu:fertilizer')
    .itemOutputs('8x forestry:fertilizer_compound')
    .duration(40)
    .EUt(2);

    event.shaped('16x forestry:humus', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:dirt',
        B: 'gtceu:fertilizer'
    }).id('frontiers:humus_gt_fertilizer')

    event.remove({ output: 'forestry:worktable' })
    event.shaped('forestry:worktable', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: '#forge:tools/screwdrivers',
        B: 'gtceu:wood_screw',
        C: 'minecraft:crafting_table',
        D: '#forge:chests/wooden'
    })

    event.remove({ output: 'forestry:analyzer' })
    event.shaped('forestry:analyzer', [
        "ABA",
        "HCW",
        "ADA"
    ], {
        A: 'gtceu:steel_plate',
        B: 'forestry:portable_alyzer',
        C: 'gtceu:bronze_machine_casing',
        D: 'gtceu:vacuum_tube',
        H: '#forge:tools/hammers',
        W: '#forge:tools/wrenches'
    })

    event.remove({ output: 'forestry:raintank' })
    event.shaped('forestry:raintank', [
        'ABA',
        'ABA',
        'AHA'
    ], {
        A: 'gtceu:iron_plate',
        B: '#forge:glass',
        H: '#forge:tools/hammers'
    })

    event.remove({ output: 'forestry:trade_station' })
    event.shaped('forestry:trade_station', [
        'ABA',
        'BCB',
        'DED'
    ], {
        A: 'forestry:electron_tube_iron',
        B: 'forestry:electron_tube_bronze',
        C: 'gtceu:bronze_machine_casing',
        D: '#forge:chests/wooden',
        E: 'gtceu:vacuum_tube'
    })

    event.remove({ output: 'forestry:mailbox' })
    event.shaped('forestry:mailbox', [
        ' A ',
        'ABA',
        'CCC'
    ], {
        A: 'gtceu:iron_plate',
        B: 'gtceu:bronze_machine_casing',
        C: '#forge:chests/wooden'
    })

    event.remove({ output: 'forestry:rainmaker' })
    event.shaped('forestry:rainmaker', [
        'AGA',
        'GTG',
        'AGA'
    ], {
        T: 'botania:teru_teru_bozu', //lmao
        G: '#forge:glass',
        A: 'gtceu:iron_plate'
    })

    event.recipes.gtceu.canner('frontiers:iodine_capsule')
    .itemInputs(['gtceu:fluid_cell', 'gtceu:iodine_dust'])
    .itemOutputs('forestry:iodine_capsule')
    .duration(40)
    .EUt(2);

    event.shaped('projectred_core:woven_cloth', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'forestry:silk_wisp',
        B: 'minecraft:stick'
    }).id('frontiers:woven_cloth_silk')
    
})
