ServerEvents.tags('item', e => {
    e.add('forge:flour', 'gtceu:wheat_dust')
    e.add('forge:salt', 'gtceu:salt_dust')
    e.add('forge:rice', 'farmersdelight:rice')
    e.add('forge:cabbage', 'farmersdelight:cabbage')
    e.add('forge:tomatoes', 'farmersdelight:tomato')
    e.add('forge:onions', 'farmersdelight:onion')
    
    e.removeAll('diet:special_food') // Slicer recipes add nutrition to them already, keeping them in this tag makes it do double nutrition
    
    
    spring('biomeswevegone:blueberries')
    summer('biomeswevegone:blueberries')

    // Seasonal crops
    function spring(item) {
        e.add('serenseseasons:spring_crops', item)
    }
    function summer(item) {
        e.add('serenseseasons:summer_crops', item)
    }
    function autumn(item) {
        e.add('serenseseasons:autumn_crops', item)
    }
    function winter(item) {
        e.add('serenseseasons:winter_crops', item)
    }

    
    mana('aether:blue_gummy_swet')
    mana('aether:golden_gummy_swet')
    mana('aether:enchanted_berry')
    mana('malum:runic_sap')
    mana('ars_nouveau:source_berry_roll')
    mana('ars_nouveau:source_berry_pie')
    mana('ars_nouveau:sourceberry_bush')
    mana('ars_nouveau:bastion_pod')
    mana('ars_nouveau:bombegranate_pod')
    mana('ars_nouveau:frostaya_pod')
    mana('ars_nouveau:mendosteen_pod')
    mana('minecraft:enchanted_golden_apple')
    psi('gtceu:basic_electronic_circuit')
    psi('gtceu:purple_drink')
    psi('kubejs:cosmic_meatballs')
    psi('malum:cursed_sap')
    proteins('gtceu:dough')
    proteins('forge:nut_butter')
    proteins('forge:eggs')
    proteins('forge:mushrooms')
    proteins('forge:milk')
    proteins('nethersdelight:hoglin_loin')
    proteins('nethersdelight:hoglin_ear')
    proteins('nethersdelight:strider_slice')
    proteins('occultism:beaver_nugget')
    vegetables('legendarysurvivaloverhaul:beetroot_juice')
    vegetables('legendarysurvivaloverhaul:cactus_juice')
    vegetables('legendarysurvivaloverhaul:carrot_juice')
    vegetables('legendarysurvivaloverhaul:golden_carrot_juice')
    vegetables('biomeswevegone:oddion_bulb')
    vegetables('biomeswevegone:white_puffball_cap')
    vegetables('undergarden:mogmoss')
    vegetables('undergarden:blue_mogmoss')
    vegetables('undergarden:glitterkelp')
    fruits('legendarysurvivaloverhaul:apple_juice')
    fruits('legendarysurvivaloverhaul:chorus_fruit_juice')
    fruits('legendarysurvivaloverhaul:glistering_melon_juice')
    fruits('legendarysurvivaloverhaul:golden_apple_juice')
    fruits('legendarysurvivaloverhaul:melon_juice')
    fruits('legendarysurvivaloverhaul:pumpkin_juice')
    fruits('ars_nouveau:bastion_pod')
    fruits('ars_nouveau:bombegranate_pod')
    fruits('ars_nouveau:frostaya_pod')
    fruits('ars_nouveau:mendosteen_pod')
    fruits('biomeswevegone:aloe_vera_juice')
    fruits('biomeswevegone:baobab_fruit')
    fruits('biomeswevegone:blueberries')
    fruits('biomeswevegone:yucca_fruit')
    fruits('biomeswevegone:green_apple')
    fruits('aether:blue_berry')
    fruits('aether:enchanted_berry')
    fruits('aether:white_apple')
    fruits('occultism:datura')
    fruits('undergarden:droopvine_item')
    fruits('nethersdelight:propelpearl')
    sugars('aether:candy_cane')
    sugars('aether:gingerbread_man')
    sugars('create:builders_tea')
    sugars('legendarysurvivaloverhaul:beetroot_juice')
    sugars('legendarysurvivaloverhaul:cactus_juice')
    sugars('legendarysurvivaloverhaul:carrot_juice')
    sugars('legendarysurvivaloverhaul:golden_carrot_juice')
    sugars('legendarysurvivaloverhaul:apple_juice')
    sugars('legendarysurvivaloverhaul:chorus_fruit_juice')
    sugars('legendarysurvivaloverhaul:glistering_melon_juice')
    sugars('legendarysurvivaloverhaul:golden_apple_juice')
    sugars('legendarysurvivaloverhaul:melon_juice')
    sugars('legendarysurvivaloverhaul:pumpkin_juice')
    grains('aether:gingerbread_man')
    grains('gtceu:dough')

    specialFood('create:builders_tea')
    specialFood('supplementaries:pancake')
    specialFood('undergarden:glitterkelp')
    specialFood('undergarden:blue_mogmoss')
    specialFood('undergarden:mogmoss')

    // Dietary groups
    function mana(item) {
        e.add('diet:mana', item)
    }
    function psi(item) {
        e.add('diet:psi', item)
    }
    function proteins(item) {
        e.add('diet:proteins', item)
    }
    function fruits(item) {
        e.add('diet:fruits', item)
    }
    function vegetables(item) {
        e.add('diet:vegetables', item)
    }
    function sugars(item) {
        e.add('diet:sugars', item)
    }
    function grains(item) {
        e.add('diet:grains', item)
    }
    
    // Force add food groups to items whether its edible or not. Useful for cakes, etc. but slicer recipes make this useless for placeable foods.
    function specialFood(item) {
        e.add('diet:special_food', item)
    }
    // Makes items not have food groups when eaten, but when used as ingredients for other recipes. Useful for condiments, seasonings, etc.
    function ingredients(item) {
        e.add('diet:ingredients', item)
    }

    // todo hot and cold foods

    e.add('frontiers:croptopia/nuts', ['croptopia:almond', 'croptopia:pecan', 'croptopia:walnut']) // non peanut nuts from croptopia used for roasted nuts recipe
    e.add('forge:peanuts', ['vintagedelight:peanut', 'croptopia:peanut']) // this is driving me *nuts* why does one have (s)
})

ServerEvents.tags('block', e => {
    // spring('biomeswevegone:blueberry_bush')
    // summer('biomeswevegone:blueberries')

    // // Seasonal crops
    // function spring(block) {
    //     e.add('serenseseasons:spring_crops', block)
    // }
    // function summer(block) {
    //     e.add('serenseseasons:summer_crops', block)
    // }
    // function autumn(block) {
    //     e.add('serenseseasons:autumn_crops', block)
    // }
    // function winter(block) {
    //     e.add('serenseseasons:winter_crops', block)
    // }
})

ServerEvents.tags('fluid', e => {
    e.add('forge:milk', 'gtceu:soy_milk')
    e.add('forge:milk', 'gtceu:milk')
    e.add('forge:milk', 'minecraft:milk')
})
