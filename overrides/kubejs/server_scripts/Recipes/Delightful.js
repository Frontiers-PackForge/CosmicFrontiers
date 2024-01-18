//A Simple "REMOVE AND HIDE" function akin to GroovyScript's Jei.yeet() function - This will tag the item for hiding from recipe viewers and remove the recipe
//This one also has a tag removal function to remove the forge:tools/knives tag from what is removed so bear that in mind if you copy/paste this around
let yeet = (itemName) => {
    ServerEvents.recipes(event => { 
        event.remove({ output: itemName })
      })
    ServerEvents.tags('item', event => {
        event.add('forge:viewers/hidden_from_recipe', itemName)
        event.remove('forge:tools/knives', itemName)
        event.remove('forge:tools/scavenging', itemName)
        event.add('c:hidden_from_recipe_viewers', itemName)
    
    })
}
//Delightful Knives getting yeeted
yeet('farmersdelight:flint_knife');
yeet('farmersdelight:iron_knife');
yeet('farmersdelight:golden_knife');
yeet('farmersdelight:diamond_knife');
yeet('farmersdelight:netherite_knife');
yeet('delightful:gravitite_knife');
yeet('delightful:forgotten_knife');
yeet('delightful:stratus_knife');
yeet('delightful:terra_knife');
yeet('delightful:draco_arcanus_knife');
yeet('delightful:elementium_knife');
yeet('delightful:manasteel_knife');
yeet('delightful:zanite_knife');
yeet('delightful:skyroot_knife');
yeet('delightful:veridium_knife');
yeet('delightful:infused_veridium_knife');
yeet('delightful:skyjade_knife');
yeet('delightful:zinc_knife');
yeet('delightful:nickel_knife');
yeet('delightful:crystalline_knife');
yeet('delightful:cloggrum_knife');
yeet('delightful:froststeel_knife');
yeet('delightful:utherium_knife');
yeet('delightful:bronze_knife');
yeet('delightful:electrum_knife');
yeet('delightful:invar_knife');
yeet('delightful:lead_knife');
yeet('delightful:brass_knife');
yeet('delightful:silver_knife');
yeet('delightful:steel_knife');
yeet('delightful:tin_knife');
yeet('delightful:holystone_knife');
yeet('ends_delight:dragon_tooth_knife');
yeet('ends_delight:end_stone_knife');
yeet('ends_delight:purpur_knife');
yeet('ends_delight:dragon_egg_shell_knife');
yeet('delightful:sinisite_knife');
yeet('delightful:thyrium_knife');
yeet('delightful:onyx_knife');
yeet('delightful:adamantium_knife');
yeet('delightful:mythril_knife');
yeet('delightful:constantan_knife');
yeet('delightful:black_opal_knife');
yeet('delightful:copper_knife');
yeet('delightful:emerald_knife');
yeet('occultism:butcher_knife');
yeet('delightful:alf_knife');
yeet('delightful:necronium_knife');
yeet('delightful:gilded_netherite_knife');
yeet('delightful:rose_gold_knife');
yeet('delightful:soul_steel_knife');
yeet('delightful:stellium_knife');
yeet('delightful:kiwano_knife');
yeet('delightful:leaf_knife');
yeet('delightful:blazing_knife');
yeet('delightful:gilded_quartz_knife');
yeet('delightful:experience_knife');
yeet('delightful:warden_knife');
yeet('delightful:pendorite_knife');
yeet('delightful:living_knife');
yeet('delightful:steeleaf_knife');
yeet('delightful:knightmetal_knife');
yeet('delightful:ironwood_knife');
yeet('delightful:large_amethyst_knife');
yeet('delightful:netherite_opal_knife');
yeet('delightful:obsidian_infused_enderite_knife');
yeet('delightful:refined_obsidian_knife');
yeet('delightful:refined_glowstone_knife');
yeet('delightful:allthemodium_knife');
yeet('delightful:enderite_knife');
yeet('delightful:osmium_knife');
yeet('delightful:fiery_knife');
yeet('delightful:amethyst_knife');
yeet('delightful:lapis_lazuli_knife');
yeet('delightful:bone_knife');
//End Stove duplicate getting yeeted
yeet('ends_delight:end_stove');


//Functional Blocks, Gregified
ServerEvents.recipes(event => { 
    //Farmer's Delight
    event.remove({ output:'farmersdelight:stove' })
    event.shaped( 'farmersdelight:stove', [
        'IGI',
        'BHB',
        'BCB'
    ], {
        I: 'gtceu:iron_plate',
        G: 'minecraft:iron_bars',
        B: 'gtceu:coke_oven_bricks',
        C: 'minecraft:campfire',
        H: '#forge:tools/hammers'
    })
    event.remove({ output:'farmersdelight:cooking_pot' })
    event.shaped( 'farmersdelight:cooking_pot', [
        'BSB',
        'PHP',
        'PPP'
    ], {
        B: 'betterend:leather_wrapped_stick',
        S: 'minecraft:wooden_shovel',
        P: 'gtceu:iron_plate',
        H: '#forge:tools/hammers'
    })
    event.remove({ output:'farmersdelight:skillet' })
    event.shaped( 'farmersdelight:skillet', [
        'HPP',
        'SPP',
        'BSD'
    ], {
        P: 'gtceu:iron_plate',
        B: 'betterend:leather_wrapped_stick',
        S: 'gtceu:iron_screw',
        D: '#forge:tools/screwdrivers',
        H: '#forge:tools/hammers'
    })
    event.remove({ output:'farmersdelight:cutting_board' })
    event.shaped( 'farmersdelight:cutting_board',[
        'KS ',
        'PP ',
        '   '
    ], {
        K: '#forge:tools/knives',
        S: '#forge:tools/mallets',
        P: 'gtceu:wood_plate'
    })
    //Nether's Delight
    event.remove({ output:'nethersdelight:blackstone_stove' })
    event.shaped( 'nethersdelight:blackstone_stove', [
        'IGI',
        'BHB',
        'BCB'
    ], {
        I: 'gtceu:iron_plate',
        G: 'minecraft:iron_bars',
        C: 'minecraft:soul_campfire',
        H: '#forge:tools/hammers',
        B: 'minecraft:polished_blackstone_bricks'
    })
    event.remove({ output:'nethersdelight:blackstone_furnace' })
    event.shaped( 'nethersdelight:blackstone_furnace', [
        'BBB',
        'FFF',
        'BBB'
    ], {
        B: 'minecraft:blackstone',
        F: 'minecraft:flint'
    })
    //Ender's Delight
    event.remove({ output:'endersdelight:endstone_stove' })
    event.shaped( 'endersdelight:endstone_stove', [
        'OOO',
        'EHE',
        'EBE'
    ], {
        O: 'gtceu:obsidian_plate',
        E: 'minecraft:end_stone_bricks',
        B: 'minecraft:dragon_breath',
        H: '#forge:tools/hammers'
    })
    //Coffee's Delight
    event.remove({ output:'coffee_delight:moka_bottom' })
    event.shaped('coffee_delight:moka_bottom', [
        'PRP',
        'PHP',
        ' P '
    ], {
        P: 'gtceu:iron_plate',
        R: 'gtceu:iron_ring',
        H: 'minecraft:hopper'
    })
    event.remove({ output:'coffee_delight:moka_top' })
    event.shaped('coffee_delight:moka_top', [
        ' P ',
        'P P',
        'PRP'
    ], {
        P: 'gtceu:iron_plate',
        R: 'gtceu:iron_ring'
    })
    event.remove({ output:'coffee_delight:moka_pot' })
    event.shaped('coffee_delight:moka_pot', [
        ' T ',
        'PWP',
        ' B '
    ], {
        P: 'gtceu:iron_plate',
        W: '#forge:tools/wrenches',
        T: 'coffee_delight:moka_top',
        B: 'coffee_delight:moka_bottom'
    })
    event.remove({ output:'coffee_delight:turkey_handel' })
    event.shaped('coffee_delight:turkey_handel', [
        'RSL',
        'D  ',
        '   '
    ], {
        R: 'gtceu:iron_rod',
        S: 'gtceu:iron_screw',
        L: 'betterend:leather_wrapped_stick',
        D: '#forge:tools/screwdrivers'
    })
    event.remove({ output:'coffee_delight:turkey_pot_part' })
    event.shaped('coffee_delight:turkey_pot_part', [
        '   ',
        'PHP',
        'PPP'
    ],{
        P: 'gtceu:copper_plate',
        H: '#forge:tools/hammers'
    })
    event.remove({ output:'coffee_delight:turkey_pot' })
    event.shaped('coffee_delight:turkey_pot', [
        'PSH',
        'D  ',
        '   '
    ], {
        H: 'coffee_delight:turkey_handel',
        P: 'coffee_delight:turkey_pot_part',
        S: 'gtceu:iron_screw',
        D: '#forge:tools/screwdrivers'
    })
    event.remove({ output:'coffee_delight:coffee_cap'})
    event.shaped('coffee_delight:coffee_cap', [
        'P P',
        ' P ',
        '   '
    ], {
        P: 'gtceu:nether_quartz_plate'
    })
    //Miner's Delight
    event.remove({ output:'miners_delight:copper_pot'})
    event.shaped('miners_delight:copper_pot', [
        'LSL',
        'PHP',
        'PPP'
    ], {
        L: 'betterend:leather_wrapped_stick',
        S: 'minecraft:wooden_shovel',
        P: 'gtceu:copper_plate',
        H: '#forge:tools/hammers'
    })
    event.remove({ output:'miners_delight:copper_cup'})
    event.shaped('miners_delight:copper_cup', [
        'PHP',
        ' P ',
        '   '
    ], {
        P: 'gtceu:copper_plate',
        H: '#forge:tools/hammers'
    })
    //Vintage Delight
    event.remove({ output:'vintagedelight:cheese_mold' })
    event.shaped('vintagedelight:cheese_mold', [
        'PIP',
        '   ',
        '   '
    ], {
        P: 'gtceu:iron_plate',
        I: 'minecraft:heavy_weighted_pressure_plate'
    })
    event.remove({ output:'vintagedelight:fermenting_jar' })
    event.shaped('vintagedelight:fermenting_jar', [
        'GSG',
        'G G',
        'GGG'
    ], {
        G: '#forge:glass',
        S: '#minecraft:wooden_slabs'
    })
    event.remove({ output:'vintagedelight:evaporator' })
    event.shaped('vintagedelight:evaporator', [
        ' T ',
        'TKT',
        ' T '
    ], {
        T: 'gtceu:treated_wood_frame',
        K: 'vintagedelight:salt_block'
    })
    //Adding a one-way conversion recipe for delight salt, giving players a way to skip the evaporator and use the GT salt they already have
    event.shapeless('6x vintagedelight:salt_dust', [
        '2x gtceu:salt_dust'
    ])
    //Crabber's Delight
    event.remove({ output: 'crabbersdelight:crab_trap' })
    event.shaped('crabbersdelight:crab_trap', [
        'NFN',
        'SDS',
        'WWW'
    ], {
        N: 'farmersdelight:safety_net',
        F: 'gtceu:treated_wood_frame',
        S: 'gtceu:wood_screw',
        D: '#forge:tools/screwdrivers',
        W: '#minecraft:wooden_slabs'

    })

})

//Cabinets, starting with the cabinet function
ServerEvents.recipes(event => {
    let cabinet = (outputCabinet, woodTrapdoor, woodSlab) => {
        event.remove({ output: outputCabinet })
        event.shaped(outputCabinet, [
            'SCS',
            'TDT',
            'SCS'
        ],{
            S: woodSlab,
            T: woodTrapdoor,
            C: 'gtceu:iron_screw',
            D: '#forge:tools/screwdrivers'
        })
    }
//Actually using the function
    cabinet('farmersdelight:oak_cabinet', 'minecraft:oak_trapdoor', 'minecraft:oak_slab')
    cabinet('farmersdelight:spruce_cabinet', 'minecraft:spruce_trapdoor', 'minecraft:spruce_slab')
    cabinet('farmersdelight:birch_cabinet', 'minecraft:birch_trapdoor', 'minecraft:birch_slab')
    cabinet('farmersdelight:jungle_cabinet', 'minecraft:jungle_trapdoor', 'minecraft:jungle_slab')
    cabinet('farmersdelight:acacia_cabinet', 'minecraft:acacia_trapdoor', 'minecraft:acacia_slab')
    cabinet('farmersdelight:dark_oak_cabinet', 'minecraft:dark_oak_trapdoor', 'minecraft:dark_oak_slab')
    cabinet('farmersdelight:mangrove_cabinet', 'minecraft:mangrove_trapdoor', 'minecraft:mangrove_slab')
    cabinet('farmersdelight:cherry_cabinet', 'minecraft:cherry_trapdoor', 'minecraft:cherry_slab')
    cabinet('farmersdelight:bamboo_cabinet', 'minecraft:bamboo_trapdoor', 'minecraft:bamboo_slab')
    cabinet('farmersdelight:crimson_cabinet', 'minecraft:crimson_trapdoor', 'minecraft:crimson_slab')
    cabinet('farmersdelight:warped_cabinet', 'minecraft:warped_trapdoor', 'minecraft:warped_slab')

//Non Wood Cabinets getting Gregified
    event.remove({ output:'delightful:quartz_cabinet' })
    event.shaped( 'delightful:quartz_cabinet', [
        'BHB',
        'QCQ',
        'QQQ'
    ], {
        B: 'minecraft:polished_blackstone_slab',
        C: '#farmersdelight:cabinets/wooden',
        H: '#forge:tools/hammers',
        Q: 'gtceu:nether_quartz_plate'
    })
    event.remove({ output:'delightful:basalt_cabinet' })
    event.shaped( 'delightful:basalt_cabinet', [
        'BHB',
        'SCS',
        'SSS'
    ], {
        B: 'minecraft:polished_blackstone_slab',
        C: '#farmersdelight:cabinets/wooden',
        H: '#forge:tools/hammers',
        S: 'minecraft:basalt' 
    })
})

//Machetes, but... uh... oh yeah! Gregified
ServerEvents.recipes(event => {
    event.remove({ output:'#forge:tools/machetes' })
    event.shaped( 'nethersdelight:iron_machete', [
        '  I',
        'FI ',
        'SH '
    ],{
        I: 'gtceu:iron_plate',
        F: '#forge:tools/files',
        H: '#forge:tools/hammers',
        S: 'minecraft:stick'
    })
    event.shaped( 'nethersdelight:golden_machete', [
        '  G',
        'FG ',
        'SH '
    ],{
        G: 'gtceu:gold_plate',
        F: '#forge:tools/files',
        H: '#forge:tools/hammers',
        S: 'minecraft:stick'
    })
    event.shaped( 'nethersdelight:diamond_machete', [
        '  D',
        'FD ',
        'SH '
    ],{
        D: 'gtceu:diamond_plate',
        F: '#forge:tools/files',
        H: '#forge:tools/hammers',
        S: 'minecraft:stick'
    })
    event.smithing(
        'nethersdelight:netherite_machete',
        'minecraft:netherite_upgrade_smithing_template',
        'nethersdelight:diamond_machete',
        'minecraft:netherite_ingot'
    )
})

//Gregifying misc recipes
ServerEvents.recipes(event => {
    event.remove({ id:'farmersdelight:canvas' })
    event.recipes.gtceu.compressor('gtceu:canvas_compress')
       .itemInputs('4x farmersdelight:straw')
       .itemOutputs('farmersdelight:canvas')
       .duration(50)
       .EUt(8)     
})

//Removing some recipes that have a GT alternative
ServerEvents.recipes(event => {
    //We should fine more uses for bark as well as bring it back for paper recipes in the future, for now removing it is fine.
    event.remove({ id:'farmersdelight:paper_from_tree_bark' })
    event.remove({ id:'farmersdelight:painting_from_canvas' })
    event.remove({ id:'farmersdelight:book_from_canvas' })
})
