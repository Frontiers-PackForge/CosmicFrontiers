// priority: 999

ServerEvents.tags('item', event => {
    console.log('[20] - [1] - TAG-WATCHER')
    event.add('forge:flour', 'gtceu:wheat_dust')
    event.add('forge:salt', 'gtceu:salt_dust')
    event.add('forge:rice', 'farmersdelight:rice')
    event.add('forge:cabbage', 'farmersdelight:cabbage')
    event.add('forge:tomatoes', 'farmersdelight:tomato')
    event.add('forge:onions', 'farmersdelight:onion')
    event.add('forge:dough', 'farmersdelight:wheat_dough')
    event.add('forge:doughs', 'gtceu:dough')
    event.add('forge:tentacles', [
        'crabbersdelight:raw_squid_tentacles',
        'crabbersdelight:raw_glow_squid_tentacles',
        'oceansdelight:tentacles',
        'oceansdelight:cut_tentacles',
    ])
    event.add('forge:golden_apple_slices', [
        'some_assembly_required:golden_apple_slices',
        'vanilladelight:golden_apple_slice'
    ])

    event.remove('forge:oat', 'vintagedelight:oat') //this removes vintagedelight oat from one recipe (oat cutting) 

    event.removeAll('diet:special_food') // Slicer recipes add nutrition to them already, keeping them in this tag makes it do double nutrition


    // Seasonal crops
    function spring(item) {
        event.add('serenseseasons:spring_crops', item)
    }
    function summer(item) {
        event.add('serenseseasons:summer_crops', item)
    }
    function autumn(item) {
        event.add('serenseseasons:autumn_crops', item)
    }
    function winter(item) {
        event.add('serenseseasons:winter_crops', item)
    }


    mana('aether:blue_gummy_swet')
    mana('aether:golden_gummy_swet')
    mana('aether:enchanted_berry')
    mana('malum:runic_sap')
    mana('ars_nouveau:sourceberry_bush')
    mana('ars_nouveau:bastion_pod')
    mana('ars_nouveau:bombegranate_pod')
    mana('ars_nouveau:frostaya_pod')
    mana('ars_nouveau:mendosteen_pod')
    mana('minecraft:enchanted_golden_apple')
    mana('arsdelight:source_berry_cookie') 
    mana(/arsdelight:(.*)_jelly/)
    mana(/arsdelight:(.*)_pie_slice/)
    mana(/arsdelight:(.*)_meat/)
    mana(/arsdelight:(.*)_meat_slice/)
    mana(/arsdelight:(.*)_skewer/) 
    mana(/arsdelight:(.*)_stew/)
    mana(/arsdelight:(.*)_sauce/)
    mana(/arsdelight:(.*)_soup/)
    mana(/arsdelight:(.*)_cupcake/)
    mana(/arsdelight:(.*)_roll/)
    mana(/arsdelight:(.*)_chicken/)
    mana(/arsdelight:(.*)_pork/)
    mana(/arsdelight:(.*)_steak/)
    mana(/arsdelight:(.*)_mutton/)
    mana(/arsdelight:(.*)_salad/)
    mana(/arsdelight:(.*)_chimera/) 

    psi('gtceu:basic_electronic_circuit')
    psi('gtceu:purple_drink')
    psi('kubejs:cosmic_meatballs')
    psi('malum:cursed_sap')

    proteins('gtceu:dough')
    proteins('#forge:nut_butter')
    proteins('#forge:eggs')
    proteins('#forge:mushrooms')
    proteins('#forge:milk')
    proteins('nethersdelight:hoglin_loin')
    proteins('nethersdelight:hoglin_ear')
    proteins('nethersdelight:strider_slice')
    proteins('occultism:beaver_nugget')
    proteins('arsdelight:bowl_of_honey_glazed_chimera')  

    vegetables('legendarysurvivaloverhaul:beetroot_juice')
    vegetables('legendarysurvivaloverhaul:cactus_juice')
    vegetables('legendarysurvivaloverhaul:carrot_juice')
    vegetables('legendarysurvivaloverhaul:golden_carrot_juice')
    vegetables('biomeswevegone:oddion_bulb')
    vegetables('biomeswevegone:white_puffball_cap')
    vegetables('undergarden:mogmoss')
    vegetables('undergarden:blue_mogmoss')
    vegetables('undergarden:glitterkelp')
    vegetables('arsdelight:bowl_of_wilden_salad') 

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
    fruits('arsdelight:bowl_of_honey_glazed_chimera') 
    fruits('arsdelight:bowl_of_wilden_salad') 

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
    sugars('arsdelight:bowl_of_honey_glazed_chimera') 

    grains('aether:gingerbread_man')
    grains('gtceu:dough')



    psi('gtceu:micro_processor')
    mana('gtceu:micro_processor')

    psi('gtceu:nano_processor')
    mana('gtceu:nano_processor')
    proteins('gtceu:nano_processor')

    psi('gtceu:quantum_processor')
    mana('gtceu:quantum_processor')
    proteins('gtceu:quantum_processor')
    vegetables('gtceu:quantum_processor')

    psi('gtceu:crystal_processor')
    mana('gtceu:crystal_processor')
    proteins('gtceu:crystal_processor')
    vegetables('gtceu:crystal_processor')
    fruits('gtceu:crystal_processor')
    grains()

    psi('gtceu:wetware_processor')
    mana('gtceu:wetware_processor')
    proteins('gtceu:wetware_processor')
    vegetables('gtceu:wetware_processor')
    fruits('gtceu:wetware_processor')
    grains('gtceu:wetware_processor')

    psi('cosmiccore:harmonic_processor')
    mana('cosmiccore:harmonic_processor')
    proteins('cosmiccore:harmonic_processor')
    vegetables('cosmiccore:harmonic_processor')
    fruits('cosmiccore:harmonic_processor')
    grains('cosmiccore:harmonic_processor')

    psi('cosmiccore:optical_processor')
    mana('cosmiccore:optical_processor')
    proteins('cosmiccore:optical_processor')
    vegetables('cosmiccore:optical_processor')
    fruits('cosmiccore:optical_processor')
    grains('cosmiccore:optical_processor')

    psi('cosmiccore:suelescent_processor')
    mana('cosmiccore:suelescent_processor')
    proteins('cosmiccore:suelescent_processor')
    vegetables('cosmiccore:suelescent_processor')
    fruits('cosmiccore:suelescent_processor')
    grains('cosmiccore:suelescent_processor')

    psi('cosmiccore:akashic_processor')
    mana('cosmiccore:akashic_processor')
    proteins('cosmiccore:akashic_processor')
    vegetables('cosmiccore:akashic_processor')
    fruits('cosmiccore:akashic_processor')
    grains('cosmiccore:akashic_processor')

    mana('cosmiccore:eschaton_processor_mainframe')
    psi('cosmiccore:eschaton_processor_mainframe')
    proteins('cosmiccore:eschaton_processor_mainframe')
    vegetables('cosmiccore:eschaton_processor_mainframe')
    fruits('cosmiccore:eschaton_processor_mainframe')
    grains('cosmiccore:eschaton_processor_mainframe')


    specialFood('create:builders_tea')
    specialFood('supplementaries:pancake')
    specialFood('undergarden:glitterkelp')
    specialFood('undergarden:blue_mogmoss')
    specialFood('undergarden:mogmoss')
    specialFood('#forge:eggs')
    specialFood('#forge:milk')
    specialFood('#forge:mushrooms')

    ingredients('#forge:dough')

    // Dietary groups
    function psi(item) {
        event.add('diet:psi', item)
    }
    function mana(item) {
        event.add('diet:mana', item)
    }
    function proteins(item) {
        event.add('diet:proteins', item)
    }
    function fruits(item) {
        event.add('diet:fruits', item)
    }
    function vegetables(item) {
        event.add('diet:vegetables', item)
    }
    function sugars(item) {
        event.add('diet:sugars', item)
    }
    function grains(item) {
        event.add('diet:grains', item)
    }

    // Force add food groups to items whether its edible or not. Useful for cakes, etc. but slicer recipes make this useless for placeable foods.
    function specialFood(item) {
        event.add('diet:special_food', item)
    }
    // Makes items not have food groups when eaten, but when used as ingredients for other recipes. Useful for condiments, seasonings, etc.
    function ingredients(item) {
        event.add('diet:ingredients', item)
    }

    // todo hot and cold foods

})

ServerEvents.tags('block', event => {
    console.log('[20] - [2] - TAG-WATCHER')
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

ServerEvents.tags('fluid', event => {
    console.log('[20] - [3] - TAG-WATCHER')
    event.add('forge:milk', 'gtceu:soy_milk')
    event.add('forge:milk', 'vegandelight:soymilk')
    event.add('forge:milk', 'gtceu:milk')
    event.add('forge:milk', 'minecraft:milk')
})
