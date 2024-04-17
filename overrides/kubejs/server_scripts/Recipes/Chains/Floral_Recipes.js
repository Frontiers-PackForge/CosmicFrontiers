
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
        'minecraft:cactus',
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
    ]
    floraOverworld.forEach(floraOw => {
        event.recipes.gtceu.flora_nurturer(`${floraOw}_nether`)
        .notConsumable(`1x ${floraOw}`)
        .inputFluids('gtceu:nether_sediment_sludge 100')
        .itemOutputs(`1x ${floraOw}`)
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV])
        event.recipes.gtceu.flora_nurturer(`${floraOw}_aether`)
        .notConsumable(`1x ${floraOw}`)
        .inputFluids('gtceu:aether_augmented_sediment 100')
        .itemOutputs(`2x ${floraOw}`)
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV])
    })
    
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
        'corn_delight:corn'
    ]
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
        'croptopia:coffee',
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
        'croptopia:sweetpotato',
        'croptopia:tea',
        'croptopia:tomatillo',
        'croptopia:tomato',
        'croptopia:turmeric',
        'croptopia:turnip',
        'croptopia:vanilla',
        'croptopia:yam',
        'croptopia:zucchini'
    ]
    let floraNether = [
        floraOverworld,

    ]
    let floraAether = [
        floraNether,

    ]
    let floraUndergarden = [
        floraAether,

    ]
    let floraLunar = [
        floraUndergarden,

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