
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
        'miners_delight:cave_carrot',
        'vintagedelight:peanut',
        'vintagedelight:gearo_berry',
        'delightful:green_tea_leaf',
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
    ]

    floraOverworld.forEach(floraOw => {
        event.recipes.gtceu.flora_nurturer(`${floraOw}_nether`)
        .notConsumable(`1x ${floraOw}`)
        .notConsumable('1x minecraft:dirt')
        .inputFluids('gtceu:nether_sediment_sludge 100')
        .itemOutputs(`1x ${floraOw}`)
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV])
        event.recipes.gtceu.flora_nurturer(`${floraOw}_aether`)
        .notConsumable(`1x ${floraOw}`)
        .notConsumable('1x minecraft:dirt')
        .inputFluids('gtceu:aether_augmented_sediment 100')
        .itemOutputs(`2x ${floraOw}`)
        .duration(160)
        .EUt(GTValues.VA[GTValues.MV])
    })

    event.recipes.gtceu.flora_nurturer(`cactus_nether`)
    .notConsumable('1x minecraft:cactus')
    .notConsumable('1x minecraft:sand')
    .inputFluids('gtceu:nether_sediment_sludge 100')
    .itemOutputs('1x minecraft:cactus')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.flora_nurturer(`cactus_aether`)
    .notConsumable('1x minecraft:cactus')
    .notConsumable('1x minecraft:sand')
    .inputFluids('gtceu:aether_augmented_sediment 100')
    .itemOutputs('2x minecraft:cactus')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LV])
    
    let floraOverworldSeeds = [
        'minecraft:wheat',
        'minecraft:beetroot',
        'minecraft:melon',
        'minecraft:pumpkin',
        'minecraft:torchflower',
        'farmersdelight:cabbage',
        'farmersdelight:tomato',
        'supplementaries:flax',
        'occultism:datura',
        'delightful:cantaloupe',
        'vintagedelight:oat',
        'vintagedelight:ghost_pepper',
        'vintagedelight:cucumber',
        'corn_delight:corn',
        'croptopia:vanilla',
    ]

    floraOverworldSeeds.forEach(floraOw => {
        event.recipes.gtceu.flora_nurturer(`${floraOw}_nether`)
        .notConsumable(`1x ${floraOw}_seeds`)
        .notConsumable('minecraft:dirt')
        .inputFluids('gtceu:nether_sediment_sludge 100')
        .itemOutputs(`1x ${floraOw}`)
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV])
        event.recipes.gtceu.flora_nurturer(`${floraOw}_aether`)
        .notConsumable(`1x ${floraOw}_seeds`)
        .notConsumable('minecraft:dirt')
        .inputFluids('gtceu:aether_augmented_sediment 100')
        .itemOutputs(`2x ${floraOw}`)
        .duration(160)
        .EUt(GTValues.VA[GTValues.MV])
    })

    let floraOverworldSeed = [
        'croptopia:artichoke',
        'croptopia:asparagus',
        'croptopia:barley',
        'croptopia:basil',
        'croptopia:bellpepper',
        'croptopia:blackbean',
        'croptopia:blackberry',
        'croptopia:blueberry',
        'croptopia:broccoli',
        'croptopia:cabbage',
        'croptopia:cantaloupe',
        'croptopia:cauliflower',
        'croptopia:celery',
        'croptopia:chile_pepper',
        'croptopia:corn',
        'croptopia:cranberry',
        'croptopia:cucumber',
        'croptopia:currant',
        'croptopia:eggplant',
        'croptopia:elderberry',
        'croptopia:garlic',
        'croptopia:ginger',
        'croptopia:grape',
        'croptopia:greenbean',
        'croptopia:greenonion',
        'croptopia:honeydew',
        'croptopia:hops',
        'croptopia:kale',
        'croptopia:kiwi',
        'croptopia:leek',
        'croptopia:lettuce',
        'croptopia:mustard',
        'croptopia:oat',
        'croptopia:olive',
        'croptopia:onion',
        'croptopia:peanut',
        'croptopia:pepper',
        'croptopia:pineapple',
        'croptopia:radish',
        'croptopia:raspberry',
        'croptopia:rhubarb',
        'croptopia:rice',
        'croptopia:rutabaga',
        'croptopia:saguaro',
        'croptopia:soybean',
        'croptopia:spinach',
        'croptopia:squash',
        'croptopia:strawberry',
        'croptopia:sweetpotato',,
        'croptopia:tomatillo',
        'croptopia:tomato',
        'croptopia:turmeric',
        'croptopia:turnip',
        'croptopia:yam',
        'croptopia:zucchini'
    ]

    floraOverworldSeed.forEach(floraOw => {
        event.recipes.gtceu.flora_nurturer(`${floraOw}_nether`)
        .notConsumable(`1x ${floraOw}_seed`)
        .notConsumable('minecraft:dirt')
        .inputFluids('gtceu:nether_sediment_sludge 100')
        .itemOutputs(`1x ${floraOw}`)
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV])
        event.recipes.gtceu.flora_nurturer(`${floraOw}_aether`)
        .notConsumable(`1x ${floraOw}_seed`)
        .notConsumable('minecraft:dirt')
        .inputFluids('gtceu:aether_augmented_sediment 100')
        .itemOutputs(`2x ${floraOw}`)
        .duration(160)
        .EUt(GTValues.VA[GTValues.MV])
    })

//Coffee
    event.recipes.gtceu.flora_nurturer('coffee_nether')
    .notConsumable('croptopia:coffee_seed')
    .notConsumable('minecraft:dirt')
    .inputFluids('gtceu:nether_sediment_sludge 100')
    .itemOutputs('1x croptopia:coffee_beans')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.flora_nurturer('coffee_aether')
    .notConsumable('croptopia:coffee_seed')
    .notConsumable('minecraft:dirt')
    .inputFluids('gtceu:aether_augmented_sediment 100')
    .itemOutputs('2x croptopia:coffee_beans')
    .duration(160)
    .EUt(GTValues.VA[GTValues.MV])

//Tea
    event.recipes.gtceu.flora_nurturer('tea_nether')
    .notConsumable('croptopia:tea_seed')
    .notConsumable('minecraft:dirt')
    .inputFluids('gtceu:nether_sediment_sludge 100')
    .itemOutputs('1x croptopia:tea_leaves')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.flora_nurturer('tea_aether')
    .notConsumable('croptopia:tea_seed')
    .notConsumable('minecraft:dirt')
    .inputFluids('gtceu:aether_augmented_sediment 100')
    .itemOutputs('2x croptopia:tea_leaves')
    .duration(160)
    .EUt(GTValues.VA[GTValues.MV])

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
        .itemOutputs(`1x ${floraNe}`)
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV])
        event.recipes.gtceu.flora_nurturer(`${floraNe}_aether`)
        .notConsumable(`1x ${floraNe}`)
        .notConsumable('1x minecraft:netherrack')
        .inputFluids('gtceu:aether_augmented_sediment 100')
        .itemOutputs(`2x ${floraNe}`)
        .duration(160)
        .EUt(GTValues.VA[GTValues.MV])
    })

    let floraAether = [
        'deep_aether:lightcap_mushrooms',
        'deep_aether:radiant_orchid',
        'deep_aether:aerlavender',
        'deep_aether:aether_cattails',
        'deep_aether:golden_flower',
        'deep_aether:enchanted_blossom',
        'deep_aether:sky_tulips',
        'deep_aether:iaspove',
        'deep_aether:golden_aspess',
        'deep_aether:echaisy',
        'aether:purple_flower',
        'aether:white_flower',
        'aether_redux:fungal_growth',
        'aether_redux:fungal_carpet',
        'aether_redux:blightmoss_block',
        'aether_redux:blightmoss_carpet',
        'aether_redux:iridia',
        'aether_redux:aurum',
        'aether_redux:xaelia_patch',
        'aether_redux:golden_clover',
        'aether_redux:zyatrix',
        'aether_redux:luxweed',
        'aether_redux:spirolyctil',
        'aether_redux:blightshade',
        'aether_redux:lumina',
        'aether_redux:daggerbloom',
        'aether_redux:theratip',
        'aether_redux:cloudcap_mushling',
        'aether_redux:jellyshroom',
        'aether_redux:shimmerstool',
        'aether_redux:flareblossom',
        'aether_redux:infernia',
        'aether:aechor_petal'
    ]

    floraAether.forEach(floraAe => {
        event.recipes.gtceu.flora_nurturer(`${floraAe}_aether`)
        .notConsumable(`1x ${floraAe}`)
        .notConsumable('1x aether:aether_dirt')
        .inputFluids('gtceu:aether_augmented_sediment 200')
        .itemOutputs(`1x ${floraAe}`)
        .duration(160)
        .EUt(GTValues.VA[GTValues.MV])
    })

    event.recipes.gtceu.flora_nurturer('berry_aether')
    .notConsumable('1x aether:berry_bush')
    .notConsumable('1x aether:aether_dirt')
    .inputFluids('gtceu:aether_augmented_sediment 200')
    .itemOutputs('1x aether:blue_berry')
    .duration(160)
    .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.flora_nurturer('amber_aether')
    .notConsumable('1x aether:golden_oak_sapling')
    .notConsumable('1x deep_aether:golden_heights_grass_block')
    .inputFluids('gtceu:aether_augmented_sediment 200')
    .itemOutputs('1x aether:golden_amber')
    .duration(160)
    .EUt(GTValues.VA[GTValues.MV])

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