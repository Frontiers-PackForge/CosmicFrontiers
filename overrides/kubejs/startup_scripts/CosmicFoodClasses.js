CosmicFood.archetype('nibble', a => {
    a.nutrition(0, 1)
    a.hearts(1, 1.5)
    a.regen(0.1, 0.1)
    a.duration('3m', '3m')
})
CosmicFood.archetype('snack', a => {
    a.nutrition(2, 3)
    a.hearts(1.5, 2.5)
    a.regen(0.15, 0.25)
    a.duration('4m', '6m')
})
CosmicFood.archetype('cooked', a => {
    a.nutrition(4, 7)
    a.hearts(2.5, 4)
    a.regen(0.3, 0.5)
    a.duration('7m', '12m')
})
CosmicFood.archetype('meal', a => {
    a.nutrition(8, 11)
    a.hearts(4, 5.5)
    a.regen(0.5, 0.7)
    a.duration('12m', '20m')
})
CosmicFood.archetype('feast', a => {
    a.nutrition(12, 20)
    a.hearts(5.5, 7)
    a.regen(0.7, 0.9)
    a.duration('18m', '26m')
})
CosmicFood.archetype('juice', a => {
    a.brew()
    a.nutrition(0, 2)
    a.hearts(1, 1.5)
    a.regen(0.15, 0.2)
    a.duration('4m', '4m')
})
CosmicFood.archetype('draught', a => {
    a.brew()
    a.nutrition(3, 6)
    a.hearts(1.5, 2.5)
    a.regen(0.25, 0.4)
    a.duration('6m', '10m')
})
CosmicFood.archetype('elixir', a => {
    a.brew()
    a.nutrition(7, 20)
    a.hearts(2.5, 4)
    a.regen(0.4, 0.6)
    a.duration('10m', '16m')
})

CosmicFood.archetype('produce', a => {
    a.nutrition(0, 4)
    a.hearts(1, 2.5)
    a.regen(0.1, 0.3)
    a.duration('4m', '7m')
})

let produce = [
    'undergarden:droopvine_item',
    'minecraft:chorus_fruit',
    'ars_nouveau:sourceberry_bush',
    'minecraft:sweet_berries',
    'farmersdelight:tomato',
    'ars_nouveau:bombegranate_pod',
    'mynethersdelight:bullet_pepper',
    'ars_elemental:flashpine_pod',
    'ars_nouveau:frostaya_pod',
    'minecraft:apple',
    'ars_nouveau:bastion_pod',
    'minecraft:beetroot',
    'undergarden:blisterberry',
    'undergarden:blood_globule',
    'farmersdelight:cabbage',
    'farmersdelight:cabbage_leaf',
    'minecraft:carrot',
    'farmersdelight:pumpkin_slice',
    'minecraft:potato',
    'farmersdelight:onion',
    'upgrade_aquatic:mulberry',
    'ars_nouveau:mendosteen_pod',
    'minecraft:melon_slice',
    'minecraft:glow_berries',
    'undergarden:underbeans',
    'legendarysurvivaloverhaul:water_plant_bag',
    'occultism:datura',
    'regions_unexplored:duskmelon_slice',
    'regions_unexplored:hanging_earlight_fruit',
    'regions_unexplored:meadow_sage',
    'regions_unexplored:salmonberry',
]
produce.forEach(id => CosmicFood.assign(id, 'produce'))

CosmicFood.archetype('flesh', a => {
    a.nutrition(0, 4)
    a.hearts(1.5, 3)
    a.regen(0.05, 0.15)
    a.duration('3m', '6m')
})

let flesh = [
    'minecraft:mutton',
    'mynethersdelight:minced_strider',
    'farmersdelight:minced_beef',
    'undergarden:raw_gloomper_leg',
    'undergarden:raw_gwibling',
    'minecraft:salmon',
    'farmersdelight:salmon_slice',
    'minecraft:tropical_fish',
    'minecraft:pufferfish',
    'farmersdelight:bacon',
    'minecraft:beef',
    'minecraft:chicken',
    'farmersdelight:chicken_cuts',
    'minecraft:cod',
    'farmersdelight:cod_slice',
    'mynethersdelight:hoglin_loin',
    'mynethersdelight:hoglin_sausage',
    'upgrade_aquatic:lionfish',
    'undergarden:raw_dweller_meat',
    'minecraft:rabbit',
    'minecraft:porkchop',
    'upgrade_aquatic:pike',
    'upgrade_aquatic:perch',
    'farmersdelight:mutton_chops',
    'farmersdelight:ham'
]
flesh.forEach(id => CosmicFood.assign(id, 'flesh'))

CosmicFood.archetype('roast', a => {
    a.nutrition(3, 10)
    a.hearts(2.5, 5)
    a.regen(0.25, 0.55)
    a.duration('6m', '14m')
})

let roast = [
    'upgrade_aquatic:cooked_perch',
    'farmersdelight:cooked_mutton_chops',
    'minecraft:cooked_mutton',
    'mynethersdelight:cooked_loin',
    'undergarden:dweller_steak',
    'farmersdelight:fried_egg',
    'undergarden:gloomper_leg',
    'mynethersdelight:roasted_sausage',
    'farmersdelight:smoked_ham',
    'farmersdelight:beef_patty',
    'farmersdelight:cooked_bacon',
    'minecraft:cooked_beef',
    'minecraft:cooked_chicken',
    'farmersdelight:cooked_chicken_cuts',
    'minecraft:cooked_cod',
    'farmersdelight:cooked_cod_slice',
    'undergarden:cooked_gwibling',
    'upgrade_aquatic:cooked_lionfish',
    'farmersdelight:cooked_salmon_slice',
    'minecraft:cooked_salmon',
    'minecraft:cooked_rabbit',
    'minecraft:cooked_porkchop',
    'upgrade_aquatic:cooked_pike',
    'mynethersdelight:roast_ear',
    'mynethersdelight:strider_slice',
    'undergarden:roasted_underbeans'
]
roast.forEach(id => CosmicFood.assign(id, 'roast'))

CosmicFood.archetype('bowl', a => {
    a.nutrition(4, 14)
    a.hearts(3, 6)
    a.regen(0.5, 1.1)
    a.duration('10m', '24m')
})

let bowl = [
    'farmersdelight:bone_broth',
    'farmersdelight:beef_stew',
    'farmersdelight:tomato_sauce',
    'minecraft:beetroot_soup',
    'minecraft:suspicious_stew',
    'minecraft:rabbit_stew',
    'farmersdelight:noodle_soup',
    'farmersdelight:onion_soup',
    'farmersdelight:cooked_rice',
    'minecraft:mushroom_stew',
    'mynethersdelight:ghast_salad',
    'farmersdelight:mixed_salad',
    'farmersdelight:baked_cod_stew',
    'farmersdelight:chicken_soup',
    'farmersdelight:fruit_salad',
    'farmersdelight:fried_rice',
    'farmersdelight:fish_stew',
    'farmersdelight:pumpkin_soup',
    'farmersdelight:vegetable_soup',
    'farmersdelight:nether_salad',
    'mynethersdelight:egg_soup',
    'mynethersdelight:dried_ghast_with_milk',
    'mynethersdelight:strider_stew',
    'mynethersdelight:sausage_and_potatoes',
    'undergarden:slop_bowl',
    'mynethersdelight:sizzling_pudding',
    'undergarden:veiled_stew',
    'undergarden:indigo_stew',
    'undergarden:inky_stew',
    'undergarden:bloody_stew',
    'mynethersdelight:rock_soup',
    'mynethersdelight:spicy_noodle_soup',
    'mynethersdelight:spicy_hoglin_stew'
]
bowl.forEach(id => CosmicFood.assign(id, 'bowl'))

CosmicFood.archetype('plated', a => {
    a.nutrition(6, 15)
    a.hearts(4, 7)
    a.regen(0.45, 0.85)
    a.duration('14m', '30m')
})

let plated = [
    'farmersdelight:pasta_with_meatballs',
    'farmersdelight:roasted_mutton_chops',
    'farmersdelight:mushroom_rice',
    'mynethersdelight:strider_with_grilled_fungus',
    'mynethersdelight:scotch_eggs',
    'farmersdelight:ratatouille',
    'farmersdelight:vegetable_noodles',
    'farmersdelight:grilled_salmon',
    'farmersdelight:bacon_and_eggs',
    'mynethersdelight:crimson_stroganoff',
    'mynethersdelight:breakfast_sampler',
    'mynethersdelight:bleeding_tartar',
    'farmersdelight:steak_and_potatoes',
    'farmersdelight:squid_ink_pasta',
    'farmersdelight:pasta_with_mutton_chop',
    'mynethersdelight:blue_tenderloin_steak',
    'mynethersdelight:fried_hoglin_chop',
    'mynethersdelight:twisted_ghasta',
    'mynethersdelight:spicy_curry',
    'mynethersdelight:hot_wings',
    'mynethersdelight:giant_takoyaki',
    'mynethersdelight:stuffed_pepper'
]
plated.forEach(id => CosmicFood.assign(id, 'plated'))

CosmicFood.archetype('handheld', a => {
    a.nutrition(5, 12)
    a.hearts(3.5, 6)
    a.regen(0.35, 0.7)
    a.duration('16m', '34m')
})

let handheld = [
    'mynethersdelight:chilidog',
    'mynethersdelight:nether_burger',
    'farmersdelight:mutton_wrap',
    'farmersdelight:bacon_sandwich',
    'farmersdelight:egg_sandwich',
    'farmersdelight:hamburger',
    'farmersdelight:chicken_sandwich',
    'mynethersdelight:hotdog',
    'mynethersdelight:hotdog_with_mixed_salad',
    'mynethersdelight:bacon-wrapped_sausage_on_a_stick',
    'farmersdelight:barbecue_stick',
    'farmersdelight:cabbage_rolls',
    'farmersdelight:dumplings',
    'farmersdelight:kelp_roll',
    'mynethersdelight:red_loin_on_a_stick',
    'farmersdelight:stuffed_potato',
    'mynethersdelight:fries_ghasta',
    'mynethersdelight:burnt_roll',
    'mynethersdelight:spicy_skewer',
    'mynethersdelight:hotdog_with_nether_salad'
]
handheld.forEach(id => CosmicFood.assign(id, 'handheld'))

CosmicFood.archetype('treat', a => {
    a.nutrition(1, 8)
    a.hearts(1.5, 3.5)
    a.regen(0.2, 0.45)
    a.duration('5m', '12m')
})

let treat = [
    'farmersdelight:cod_roll',
    'create:bar_of_chocolate',
    'mynethersdelight:boiled_egg',
    'farmersdelight:cake_slice',
    'create:chocolate_glazed_berries',
    'farmersdelight:chocolate_pie_slice',
    'farmersdelight:apple_pie_slice',
    'farmersdelight:salmon_roll',
    'farmersdelight:honey_cookie',
    'farmersdelight:sweet_berry_cookie',
    'mynethersdelight:toasts',
    'mynethersdelight:slices_of_bread',
    'farmersdelight:pumpkin_pie_slice',
    'ars_nouveau:source_berry_roll',
    'minecraft:cookie',
    'minecraft:dried_kelp',
    'upgrade_aquatic:boiled_pickerelweed',
    'farmersdelight:sweet_berry_cheesecake_slice',
    'farmersdelight:melon_popsicle',
    'mynethersdelight:magma_cake_slice',
    'farmersdelight:kelp_roll_slice',
    'create:honeyed_apple',
    'mynethersdelight:deviled_egg',
    'mynethersdelight:spicy_cotton',
    'mynethersdelight:tear_popsicle',
    'mynethersdelight:hot_cream_cone'
]
treat.forEach(id => CosmicFood.assign(id, 'treat'))

CosmicFood.archetype('makings', a => {
    a.nutrition(0, 4)
    a.hearts(0.5, 1.5)
    a.regen(0.05, 0.1)
    a.duration('2m', '3m')
})

let makings = [
    'mynethersdelight:ghast_sourdough',
    'farmersdelight:wheat_dough',
    'mynethersdelight:ghast_dough',
    'mynethersdelight:ghasta',
    'farmersdelight:milk_bottle',
    'farmersdelight:raw_pasta',
    'farmersdelight:pie_crust',
    'mynethersdelight:strider_egg'
]
makings.forEach(id => CosmicFood.assign(id, 'makings'))

CosmicFood.archetype('chilled', a => {
    a.brew()
    a.nutrition(0, 13)
    a.hearts(1, 3)
    a.regen(0.2, 0.5)
    a.duration('5m', '10m')
})

let chilledMild = [
    'legendarysurvivaloverhaul:apple_juice',
    'legendarysurvivaloverhaul:beetroot_juice',
    'legendarysurvivaloverhaul:carrot_juice',
    'legendarysurvivaloverhaul:melon_juice',
    'legendarysurvivaloverhaul:pumpkin_juice',
    'legendarysurvivaloverhaul:sweet_berries_juice',
    'farmersdelight:apple_cider',
    'farmersdelight:melon_juice',
    'minecraft:honey_bottle',
    'upgrade_aquatic:mulberry_jam_bottle'
]
let chilledProper = [
    'legendarysurvivaloverhaul:cactus_juice',
    'legendarysurvivaloverhaul:glow_berries_juice',
    'legendarysurvivaloverhaul:chorus_fruit_juice',
    'legendarysurvivaloverhaul:glistering_melon_juice'
]
let chilledGolden = [
    'legendarysurvivaloverhaul:golden_apple_juice',
    'legendarysurvivaloverhaul:golden_carrot_juice'
]
let chilledCustard = ['farmersdelight:glow_berry_custard']

chilledMild.concat(chilledProper, chilledGolden, chilledCustard)
    .forEach(id => CosmicFood.assign(id, 'chilled'))

CosmicFood.archetype('platter', a => {
    a.nutrition(2, 14)
    a.hearts(5, 11)
    a.regen(0.6, 1.0)
    a.duration('18m', '30m')
})

let platter = [
    'mynethersdelight:plate_of_striderloaf',
    'mynethersdelight:plate_of_cold_striderloaf',
    'mynethersdelight:plate_of_ghasta_with_cream',
    'farmersdelight:gleaming_salad',
    'farmersdelight:honey_glazed_ham',
    'farmersdelight:stuffed_pumpkin',
    'farmersdelight:shepherds_pie',
    'farmersdelight:roast_chicken',
    'mynethersdelight:plate_of_stuffed_hoglin_snout',
    'mynethersdelight:plate_of_stuffed_hoglin_ham',
    'mynethersdelight:plate_of_stuffed_hoglin',
    'mynethersdelight:hot_wings_bucket'
]
platter.forEach(id => CosmicFood.assign(id, 'platter'))

CosmicFood.archetype('grim', a => {
    a.nutrition(0, 11)
    a.hearts(0.5, 2)
    a.regen(0, 0.1)
    a.duration('3m', '8m')
})

let grim = [
    'undergarden:goo_ball',
    'undergarden:gronglet',
    'undergarden:rogdoric_gronglet',
    'undergarden:rotten_blisterberry',
    'undergarden:utheric_gronglet',
    'malum:cursed_sap',
    'malum:rotting_essence',
    'neovitae:tainted_flesh',
    'neovitae:vitae_morsel',
    'occultism:cursed_honey',
    'occultism:demonic_meat',
    'occultism:demons_dream_essence',
    'farmersdelight:dog_food',
    'minecraft:poisonous_potato',
    'minecraft:spider_eye'
]
grim.forEach(id => CosmicFood.assign(id, 'grim'))
CosmicFood.assign('occultism:otherworld_essence', 'gilded')

CosmicFood.archetype('warming', a => {
    a.brew()
    a.nutrition(0, 6)
    a.hearts(1.5, 3)
    a.regen(0.3, 0.6)
    a.duration('6m', '12m')
})

let warmingMild = [
    'farmersdelight:hot_cocoa',
    'create:builders_tea',
    'malum:runic_sap'
]
let warmingProper = ['mynethersdelight:hot_cream']
warmingMild.concat(warmingProper).forEach(id => CosmicFood.assign(id, 'warming'))

CosmicFood.archetype('staple', a => {
    a.nutrition(4, 10)
    a.hearts(2.5, 4.5)
    a.regen(0.3, 0.5)
    a.duration('9m', '18m')
})

let staple = [
    'minecraft:bread',
    'minecraft:baked_potato',
    'create:sweet_roll',
    'upgrade_aquatic:mulberry_bread',
    'enderio:enderios',
    'minecraft:pumpkin_pie',
    'upgrade_aquatic:mulberry_pie',
    'ars_nouveau:source_berry_pie',
    'undergarden:gloomgourd_pie'
]
staple.forEach(id => CosmicFood.assign(id, 'staple'))

CosmicFood.assign('minecraft:milk_bucket', 'chilled')

CosmicFood.archetype('gilded', a => {
    a.nutrition(4, 20)
    a.hearts(4, 10)
    a.regen(0.8, 2)
    a.duration('8m', '20m')
})

let gilded = [
    'bhc:relic_apple',
    'minecraft:golden_carrot',
    'minecraft:golden_apple',
    'minecraft:enchanted_golden_apple',
    'mynethersdelight:golden_egg',
    'mynethersdelight:enchanted_golden_egg',
]
gilded.forEach(id => CosmicFood.assign(id, 'gilded'))

StartupEvents.postInit(event => {
    let circuits = [
        ['gtceu:basic_electronic_circuit', 1.5, 0.15, '4m'],
        ['cosmiccore:hex_processor', 2, 0.2, '6m'],
        ['cosmiccore:enthelic_processor', 3, 0.3, '8m'],
        ['gtceu:quantum_processor', 4, 0.4, '11m'],
        ['gtceu:crystal_processor', 5, 0.55, '15m'],
        ['gtceu:wetware_processor', 6.5, 0.75, '20m'],
        ['cosmiccore:harmonic_processor', 8, 1.0, '27m'],
        ['cosmiccore:suelescent_processor', 9.5, 1.3, '35m'],
        ['cosmiccore:optical_processor', 11, 1.6, '44m'],
        ['cosmiccore:akashic_processor', 12.5, 1.9, '52m'],
        ['cosmiccore:eschaton_processor', 14, 2.2, '60m']
    ]
    circuits.forEach((entry, index) => {
        let romans = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI']
        CosmicFood.define(entry[0], food => {
            food.health(entry[1])
            food.regen(entry[2])
            food.duration(entry[3])
            food.behavior('⚡', '#ffd75e', 'Silicon vintage', romans[index])
        })
    })

    let notFood = [
        'neovitae:alchemy_flask',
        'ars_nouveau:potion_flask_amplify',
        'ars_nouveau:potion_flask_extend_time',
        'ars_nouveau:potion_flask',
        'gtceu:paracetamol_pill',
        'malum:refined_brilliance',
        'gtceu:rad_away_pill',
        'enderio:void_vial',
        'legendarysurvivaloverhaul:tonic',
        'gtceu:purple_drink',
        'minecraft:ominous_bottle',
        'legendarysurvivaloverhaul:purified_water_bottle',
        'legendarysurvivaloverhaul:large_canteen',
        'legendarysurvivaloverhaul:canteen',
        'occultism:beaver_nugget',
        'malum:concentrated_gluttony',
        'neovitae:bottled_spite'
    ]
    notFood.forEach(id => CosmicFood.exclude(id))

    CosmicFood.exclude('minecraft:potion')
    CosmicFood.exclude('minecraft:splash_potion')
    CosmicFood.exclude('minecraft:lingering_potion')

    warmingMild.forEach(id => CosmicFood.tailor(id, food => {
        food.effect('legendarysurvivaloverhaul:hot_drink', 0)
    }))
    warmingProper.forEach(id => CosmicFood.tailor(id, food => {
        food.effect('legendarysurvivaloverhaul:hot_drink', 1)
    }))

    CosmicFood.define('occultism:sweet_honey_heart', food => {
        food.health(4.5)
        food.regen(0.9)
        food.duration('9m')
        food.effect('minecraft:absorption', 1)
    })

    grim.forEach(id => CosmicFood.vile(id))

    chilledMild.forEach(id => CosmicFood.tailor(id, food => {
        food.effect('legendarysurvivaloverhaul:cold_drink', 0)
    }))
    chilledProper.forEach(id => CosmicFood.tailor(id, food => {
        food.effect('legendarysurvivaloverhaul:cold_drink', 1)
    }))
    chilledGolden.forEach(id => CosmicFood.tailor(id, food => {
        food.effect('legendarysurvivaloverhaul:cold_drink', 2)
        food.effect('legendarysurvivaloverhaul:heat_resistance', 0)
    }))
    CosmicFood.tailor('farmersdelight:glow_berry_custard', food => {
        food.effect('legendarysurvivaloverhaul:cold_food', 1)
    })
})
