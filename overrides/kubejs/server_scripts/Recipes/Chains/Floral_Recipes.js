
ServerEvents.recipes(event => {
    let floraOverworld = [
        'minecraft:carrot',
        'minecraft:potato',
        'minecraft:sweet_berries',
        'minecraft:glow_berries',
        'minecraft:kelp',
        'minecraft:brown_mushroom',
        'minecraft:red_mushroom',
        'minecraft:dandelion',
        'minecraft:poppy',
        'minecraft:blue_orchid',
        'minecraft:allium',
        'minecraft:azure_bluet',
        'minecraft:red_tulip',
        'minecraft:orange_tulip',
        'minecraft:white_tulip',
        'minecraft:pink_tulip',
        'minecraft:oxeye_daisy',
        'minecraft:cornflower',
        'minecraft:lily_of_the_valley',
        'minecraft:pink_petals',
        'minecraft:spore_blossom',
        'minecraft:sugar_cane',
        'minecraft:vine',
        'minecraft:sunflower',
        'minecraft:lilac',
        'minecraft:rose_bush',
        'minecraft:peony',
        'minecraft:big_dripleaf',
        'minecraft:small_dripleaf',
        'minecraft:lily_pad',
        'minecraft:seagrass',
        'minecraft:sea_pickle',
        'minecraft:tube_coral_block',
        'minecraft:brain_coral_block',
        'minecraft:bubble_coral_block',
        'minecraft:fire_coral_block',
        'minecraft:horn_coral_block',
        'minecraft:tube_coral',
        'minecraft:brain_coral',
        'minecraft:bubble_coral',
        'minecraft:fire_coral',
        'minecraft:horn_coral',
        'minecraft:tube_coral_fan',
        'minecraft:brain_coral_fan',
        'minecraft:bubble_coral_fan',
        'minecraft:fire_coral_fan',
        'minecraft:horn_coral_fan',
        'minecraft:moss_block',
        'minecraft:moss_carpet',
        'farmersdelight:onion',
        'biomesoplenty:reed',
        'biomesoplenty:cattail',
        'biomesoplenty:huge_lily_pad',
        'biomesoplenty:wilted_lily',
        'biomesoplenty:icy_iris',
        'biomesoplenty:white_petals',
        'biomesoplenty:waterlily',
        'biomesoplenty:pink_hibiscus',
        'biomesoplenty:pink_daffodil',
        'biomesoplenty:orange_cosmos',
        'biomesoplenty:goldenrod',
        'biomesoplenty:wildflower',
        'biomesoplenty:blue_hydrangea',
        'biomesoplenty:lavender',
        'biomesoplenty:violet',
        'biomesoplenty:rose',
        'biomesoplenty:glowing_moss_carpet',
        'biomesoplenty:glowing_moss_block',
        'biomesoplenty:glowshroom',
        'biomesoplenty:toadstool',
        'vegandelight:soybean',
        'botania:white_double_flower',
        'botania:light_gray_double_flower',
        'botania:gray_double_flower',
        'botania:black_double_flower',
        'botania:red_double_flower',
        'botania:green_double_flower',
        'botania:blue_double_flower',
        'botania:yellow_double_flower',
        'botania:light_blue_double_flower',
        'botania:orange_double_flower',
        'botania:pink_double_flower',
        'botania:lime_double_flower',
        'botania:cyan_double_flower',
        'botania:brown_double_flower',
        'botania:magenta_double_flower',
        'botania:purple_double_flower',
        'farmersdelight:rice_panicle'  
    ]

    floraOverworld.forEach(floraOw => {
        event.recipes.gtceu.flora_nurturer(`${floraOw}_nether`)
            .notConsumable(`1x ${floraOw}`)
            .notConsumable('1x minecraft:dirt')
            .inputFluids('gtceu:nether_sediment_sludge 100')
            .itemOutputs(`2x ${floraOw}`)
            .chancedOutput(`1x ${floraOw}`, 5000, 500)
            .duration(160)
            .EUt(GTValues.VA[GTValues.LV] / 2)
        event.recipes.gtceu.flora_nurturer(`${floraOw}_aether`)
            .notConsumable(`1x ${floraOw}`)
            .notConsumable('1x minecraft:dirt')
            .inputFluids('gtceu:aether_augmented_sediment 100')
            .itemOutputs(`4x ${floraOw}`)
            .chancedOutput(`2x ${floraOw}`, 5000, 500)
            .duration(120)
            .EUt(GTValues.VA[GTValues.MV] / 2)
        event.recipes.gtceu.flora_nurturer(`${floraOw}_nutrient_solution`)
            .notConsumable(`1x ${floraOw}`)
            .notConsumable('minecraft:moss_block')
            .inputFluids('gtceu:nutrient_solution 50')
            .itemOutputs(`24x ${floraOw}`)
            .chancedOutput(`16x ${floraOw}`, 5000, 500)
            .duration(120)
            .EUt(GTValues.VA[GTValues.MV] / 2)
    })

    event.recipes.gtceu.flora_nurturer(`cactus_nether`)
        .notConsumable('1x minecraft:cactus')
        .notConsumable('1x minecraft:sand')
        .inputFluids('gtceu:nether_sediment_sludge 100')
        .itemOutputs('2x minecraft:cactus')
        .chancedOutput(`1x minecraft:cactus`, 5000, 500)
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.flora_nurturer(`cactus_aether`)
        .notConsumable('1x minecraft:cactus')
        .notConsumable('1x minecraft:sand')
        .inputFluids('gtceu:aether_augmented_sediment 100')
        .itemOutputs('4x minecraft:cactus')
        .chancedOutput(`2x minecraft:cactus`, 5000, 500)
        .duration(120)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.flora_nurturer(`cactus_nutrient_solution`)
        .notConsumable('1x minecraft:cactus')
        .notConsumable('1x minecraft:sand')
        .inputFluids('gtceu:nutrient_solution 50')
        .itemOutputs('16x minecraft:cactus')
        .chancedOutput(`8x minecraft:cactus`, 5000, 500)
        .duration(120)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    let floraOverworldSeeds = [
        'minecraft:wheat',
        'minecraft:beetroot',
        'minecraft:melon',
        'minecraft:pumpkin',
        'minecraft:torchflower',
        'farmersdelight:cabbage',
        'farmersdelight:tomato',
        'occultism:datura'
    ]

    floraOverworldSeeds.forEach(floraOw => {
        event.recipes.gtceu.flora_nurturer(`${floraOw}_nether`)
            .notConsumable(`1x ${floraOw}_seeds`)
            .notConsumable('minecraft:dirt')
            .inputFluids('gtceu:nether_sediment_sludge 100')
            .itemOutputs(`2x ${floraOw}`)
            .chancedOutput(`1x ${floraOw}`, 5000, 500)
            .duration(160)
            .EUt(GTValues.VA[GTValues.LV] / 2)
        event.recipes.gtceu.flora_nurturer(`${floraOw}_aether`)
            .notConsumable(`1x ${floraOw}_seeds`)
            .notConsumable('minecraft:dirt')
            .inputFluids('gtceu:aether_augmented_sediment 100')
            .itemOutputs(`4x ${floraOw}`)
            .chancedOutput(`2x ${floraOw}`, 5000, 500)
            .duration(120)
            .EUt(GTValues.VA[GTValues.MV] / 2)
        event.recipes.gtceu.flora_nurturer(`${floraOw}_nutrient_solution`)
            .notConsumable(`1x ${floraOw}_seeds`)
            .notConsumable('minecraft:moss_block')
            .inputFluids('gtceu:nutrient_solution 50')
            .itemOutputs(`24x ${floraOw}`)
            .chancedOutput(`16x ${floraOw}`, 5000, 500)
            .duration(120)
            .EUt(GTValues.VA[GTValues.MV] / 2)
    })
    //ferns
    event.recipes.gtceu.flora_nurturer('ice_fern_cultivation')
        .notConsumable('legendarysurvivaloverhaul:ice_fern_leaf')
        .notConsumable('minecraft:moss_block')
        .inputFluids(Fluid.of('gtceu:nether_sediment_sludge', 500))
        .itemOutputs('2x legendarysurvivaloverhaul:ice_fern_leaf')
        .chancedOutput(Item.of('legendarysurvivaloverhaul:ice_fern_leaf', 2), 2500, 500)
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV] / 2);
    event.recipes.gtceu.flora_nurturer('ice_fern_cultivation_nutrient_sol')
        .notConsumable('legendarysurvivaloverhaul:ice_fern_leaf')
        .notConsumable('minecraft:moss_block')
        .inputFluids('gtceu:nutrient_solution 50')
        .itemOutputs('16x legendarysurvivaloverhaul:ice_fern_leaf')
        .chancedOutput(Item.of('legendarysurvivaloverhaul:ice_fern_leaf', 8), 2500, 500)
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV] / 2);

    event.recipes.gtceu.flora_nurturer('sun_fern_cultivation')
        .notConsumable('legendarysurvivaloverhaul:sun_fern_leaf')
        .notConsumable('minecraft:moss_block')
        .inputFluids(Fluid.of('gtceu:nether_sediment_sludge', 500))
        .itemOutputs('2x legendarysurvivaloverhaul:sun_fern_leaf')
        .chancedOutput(Item.of('legendarysurvivaloverhaul:sun_fern_leaf', 2), 2500, 500)
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV] / 2);
    event.recipes.gtceu.flora_nurturer('sun_fern_cultivation_nutrient_sol')
        .notConsumable('legendarysurvivaloverhaul:sun_fern_leaf')
        .notConsumable('minecraft:moss_block')
        .inputFluids('gtceu:nutrient_solution 50')
        .itemOutputs('16x legendarysurvivaloverhaul:sun_fern_leaf')
        .chancedOutput(Item.of('legendarysurvivaloverhaul:sun_fern_leaf', 8), 2500, 500)
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV] / 2);
    //chorus fruit
    event.recipes.gtceu.flora_nurturer('chorus_fruit_cultivation')
        .notConsumable('minecraft:chorus_flower')
        .notConsumable('minecraft:end_stone')
        .inputFluids(Fluid.of('gtceu:nether_sediment_sludge', 100))
        .itemOutputs('2x minecraft:chorus_fruit')
        .chancedOutput(Item.of('minecraft:chorus_fruit', 2), 2500, 500)
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV] / 2);
    event.recipes.gtceu.flora_nurturer('chorus_fruit_cultivation_aether_sediment')
        .notConsumable('minecraft:chorus_flower')
        .notConsumable('minecraft:end_stone')
        .inputFluids('gtceu:aether_augmented_sediment 100')
        .itemOutputs('8x minecraft:chorus_fruit')
        .chancedOutput(Item.of('minecraft:chorus_fruit', 4), 2500, 500)
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV] / 2);
    event.recipes.gtceu.flora_nurturer('chorus_fruit_cultivation_nutrient_sol')
        .notConsumable('minecraft:chorus_flower')
        .notConsumable('minecraft:end_stone')
        .inputFluids('gtceu:nutrient_solution 50')
        .itemOutputs('24x minecraft:chorus_fruit')
        .chancedOutput(Item.of('minecraft:chorus_fruit', 16), 2500, 500)
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV] / 2);
    //tau berry
    event.recipes.gtceu.flora_nurturer('tau_berry_cultivation')
        .notConsumable('cosmiccore:tau_fruit')
        .notConsumable('minecraft:moss_block')
        .inputFluids(Fluid.of('gtceu:nether_sediment_sludge', 500))
        .itemOutputs('2x cosmiccore:tau_fruit')
        .chancedOutput(Item.of('cosmiccore:tau_fruit', 2), 2500, 500)
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV] / 2);
    event.recipes.gtceu.flora_nurturer('tau_berry_cultivation_nutrient_sol')
        .notConsumable('cosmiccore:tau_fruit')
        .notConsumable('minecraft:moss_block')
        .inputFluids('gtceu:nutrient_solution 50')
        .itemOutputs('16x cosmiccore:tau_fruit')
        .duration(160)
        .EUt(GTValues.VA[GTValues.MV] / 2);
    //nether flora    
    let floraNether = [
        'biomesoplenty:glowflower',
        'biomesoplenty:burning_blossom',
        'biomesoplenty:bramble',
        'minecraft:nether_wart',
        'minecraft:twisting_vines',
        'minecraft:weeping_vines',
        'minecraft:nether_sprouts',
        'minecraft:warped_roots',
        'minecraft:crimson_roots',
        'minecraft:warped_fungus',
        'minecraft:crimson_fungus'
    ]

    floraNether.forEach(floraNe => {
        event.recipes.gtceu.flora_nurturer(`${floraNe}_nether`)
            .notConsumable(`1x ${floraNe}`)
            .notConsumable('1x minecraft:netherrack')
            .inputFluids('gtceu:nether_sediment_sludge 200')
            .itemOutputs(`2x ${floraNe}`)
            .chancedOutput(`1x ${floraNe}`, 5000, 500)
            .duration(160)
            .EUt(GTValues.VA[GTValues.LV] / 2)
        event.recipes.gtceu.flora_nurturer(`${floraNe}_aether`)
            .notConsumable(`1x ${floraNe}`)
            .notConsumable('1x minecraft:netherrack')
            .inputFluids('gtceu:aether_augmented_sediment 100')
            .itemOutputs(`4x ${floraNe}`)
            .chancedOutput(`2x ${floraNe}`, 5000, 500)
            .duration(120)
            .EUt(GTValues.VA[GTValues.MV] / 2 / 2)
    })
    //aether flora
    let floraAether = [
        'aether:purple_flower',
        'aether:white_flower',
        'aether:aechor_petal'
    ]

    floraAether.forEach(floraAe => {
        event.recipes.gtceu.flora_nurturer(`${floraAe}_aether`)
            .notConsumable(`1x ${floraAe}`)
            .notConsumable('1x aether:aether_dirt')
            .inputFluids('gtceu:aether_augmented_sediment 100')
            .itemOutputs(`2x ${floraAe}`)
            .chancedOutput(`1x ${floraAe}`, 5000, 500)
            .duration(120)
            .EUt(GTValues.VA[GTValues.MV] / 2)
    })

    event.recipes.gtceu.flora_nurturer('berry_aether')
        .notConsumable('1x aether:berry_bush')
        .notConsumable('1x aether:aether_dirt')
        .inputFluids('gtceu:aether_augmented_sediment 200')
        .itemOutputs('1x aether:blue_berry')
        .duration(160)
        .EUt(GTValues.VA[GTValues.MV] / 2)

    event.recipes.gtceu.flora_nurturer('amber_aether')
        .notConsumable('1x aether:golden_oak_sapling')
        .notConsumable('aether:aether_dirt')
        .inputFluids('gtceu:aether_augmented_sediment 200')
        .itemOutputs('1x aether:golden_amber')
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV] / 2)

    let floraUndergarden = [

    ]
    let floraLunar = [

    ]
    //Flora Nurturer Recipes




    // event.recipes.gtceu.('cosmiccore:pearl_cultivation')
    // .notConsumable('nethersdelight:propelpearl')
    // .inputFluids(Fluid.of('gtceu:nether_sediment_sludge', 500))
    // .itemOutputs('2x cosmiccore:overloaded_pearls')
    // .itemOutputs('2x nethersdelight:propelpearl')
    // .chancedOutput(Item.of('nethersdelight:propelpearl', 1), 5000, 500)
    // .duration(160)
    // .EUt(16);
})