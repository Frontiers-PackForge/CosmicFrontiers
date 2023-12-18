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
    })
}
//Ha get yoinked, also yeet functions below (Hopefully won't get to use it :) )




//Item Recipes, gregified
ServerEvents.recipes(event => {
    event.remove({output:'supplementaries:bomb'})
    event.shaped('supplementaries:bomb', [
        ' PS',
        'PTP',
        ' P '
    ], {
        P: 'gtceu:iron_plate',
        S: 'minecraft:string',
        T: 'minecraft:tnt'
    })
    event.remove({output:'supplementaries:bomb_spiky'})
    event.shaped('supplementaries:bomb_spiky', [
        ' PS',
        'PTP',
        ' P '
    ], {
        P: 'gtceu:lead_plate',
        S: 'minecraft:string',
        T: 'minecraft:tnt'
    })
    event.remove({id:'supplementaries:bubble_blower'})
    event.shaped('supplementaries:bubble_blower', [
        ' FO',
        ' RH',
        'R  '
    ], {
        F: '#forge:tools/files',
        H: '#forge:tools/hammers',
        O: 'gtceu:iron_ring',
        R: 'gtceu:iron_rod'
    })
    event.remove({output:'supplementaries:slingshot'})
    event.shaped('supplementaries:slingshot', [
        'LRL',
        'SBS',
        ' S '
    ], {
        L: 'betterend:leather_stripe',
        R: 'gtceu:rubber_plate',
        S: 'gtceu:treated_wood_rod',
        B: 'minecraft:slime_ball'
    })
    event.remove({output:'supplementaries:flute'})
    event.shaped('supplementaries:flute', [
        '  B',
        ' BK',
        'B  '
    ], {
        B: 'minecraft:bamboo',
        K: '#forge:tools/knives'
    })
    event.remove({output:'supplementaries:key'})
    event.shaped('supplementaries:key', [
        'O  ',
        'RH ',
        'RB '
    ], {
        O: 'gtceu:gold_ring',
        R: 'gtceu:gold_rod',
        B: 'gtceu:gold_bolt',
        H: '#forge:tools/hammers'
    })
    event.remove({output:'supplementaries:wrench'})
    event.shaped('supplementaries:wrench', [
        'CHC',
        ' C ',
        ' C '
    ], {
        C: 'gtceu:copper_plate',
        H: '#forge:tools/hammers'
    })
    event.remove({output:'supplementaries:altimeter'})
    event.shaped('supplementaries:altimeter', [
        'SGS',
        'PTP',
        'SPS'
    ], {
        G: 'minecraft:glass_pane',
        S: 'gtceu:iron_screw',
        P: 'gtceu:copper_plate',
        T: 'gtceu:glass_tube'
    })
    event.remove({output:'supplementaries:soap'})
    event.shapeless('supplementaries:soap', [
        'minecraft:water_bucket',
        '4x #forge:dusts/ash',
        'minecraft:porkchop'
    ])
})

//Decorational/Functional Blocks, gregified
ServerEvents.recipes(event => {
    event.remove({output:'supplementaries:sconce'})
    event.shaped('supplementaries:sconce', [
        'BTB',
        ' R ',
        '   '
    ], {
        B: 'gtceu:iron_bolt',
        R: 'gtceu:iron_ring',
        T: 'minecraft:torch'
    })
    event.remove({output:'supplementaries:goblet'})
    event.shaped('supplementaries:goblet', [
        ' P ',
        'HRF',
        ' O '
    ], {
        P: 'gtceu:iron_plate',
        R: 'gtceu:iron_rod',
        O: 'gtceu:iron_ring',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })
    event.remove({output:'supplementaries:item_shelf'})
    event.shaped('2x supplementaries:item_shelf', [
        'PPP',
        'SID',
        '   '
    ], {
        P: 'gtceu:wood_plate',
        I: 'gtceu:iron_screw',
        S: '#forge:tools/saws',
        D: '#forge:tools/screwdrivers'
    })
    event.remove({output:'supplementaries:doormat'})
    event.shaped('supplementaries:doormat', [
        'FKF',
        '   ',
        '   '
    ], {
        F: 'supplementaries:flax',
        K: '#forge:tools/knives'
    })
    event.shaped('supplementaries:gold_trapdoor', [
        'SPS',
        'PTP',
        'WPD'
    ], {
        S: 'gtceu:gold_screw',
        P: 'gtceu:gold_plate',
        T: '#minecraft:trapdoors',
        W: '#forge:tools/saws',
        D: '#forge:tools/screwdrivers'
    })
    event.remove({output:'supplementaries:netherite_door'})
    event.shaped('supplementaries:netherite_door', [
        'GHN',
        '   ',
        '   '
    ], {
        G: 'supplementaries:gold_door',
        H: '#forge:tools/hammers',
        N: 'minecraft:netherite_scrap'
    })
    event.remove({output:'supplementaries:netherite_trapdoor'})
    event.shaped('supplementaries:netherite_trapdoor', [
        'GHN',
        '   ',
        '   '
    ], {
        G: 'supplementaries:gold_trapdoor',
        H: '#forge:tools/hammers',
        N: 'minecraft:netherite_scrap'
    })
    event.remove({output:'supplementaries:iron_gate'})
    event.shaped('2x supplementaries:iron_gate', [
        'SDS',
        'RPR',
        'RPR'
    ], {
        S: 'gtceu:iron_screw',
        R: 'gtceu:iron_rod',
        P: 'gtceu:iron_plate',
        D: '#forge:tools/screwdrivers'
    })
    event.remove({output:'supplementaries:flower_box'})
    event.shaped('supplementaries:flower_box', [
        'PDP',
        ' P ',
        '   '
    ], {
        P: 'gtceu:wood_plate',
        D: 'minecraft:dirt'
    })
    event.remove({output:'supplementaries:statue'})
    event.shaped('supplementaries:statue', [
        ' C ',
        ' R ',
        ' P '
    ], {
        C: 'minecraft:clay',
        R: 'gtceu:stone_rod',
        P: 'gtceu:stone_plate'
    })
    event.remove({output:'supplementaries:hat_stand'})
    event.shaped('supplementaries:hat_stand', [
        ' P ',
        ' S ',
        ' T '
    ], {
        P: '#minecraft:planks',
        S: '#forge:sticks/wood',
        T: 'gtceu:stone_plate'
    })
    event.remove({output:'supplementaries:safe'})
    event.shaped('supplementaries:safe', [
        'SHN',
        '   ',
        '   '
    ], {
        S: '#minecraft:shulker_boxes',
        H: '#forge:tools/hammers',
        N: 'minecraft:netherite_ingot'
    })
    event.remove({output:'supplementaries:cage'})
    event.shaped('supplementaries:cage', [
        'PPP',
        'BHB',
        'SSS'
    ], {
        P: 'gtceu:iron_plate',
        B: 'minecraft:iron_bars',
        S: '#minecraft:wooden_slabs',
        H: '#forge:tools/hammers'
    })
    event.remove({output:'supplementaries:pedestal'})
    event.shaped('supplementaries:pedestal', [
        'SPS',
        ' B ',
        'SPS'
    ], {
        S: 'minecraft:stone_brick_slab',
        B: '#minecraft:stone_bricks',
        P: 'gtceu:stone_plate'
    })
    event.remove({output:'supplementaries:notice_board'})
    event.shaped('supplementaries:notice_board', [
        'SPS',
        'IDO',
        'SPS'
    ], {
        S: '#minecraft:wooden_slabs',
        P: '#minecraft:planks',
        O: 'minecraft:paper',
        I: 'gtceu:iron_screw',
        D: '#forge:tools/screwdrivers'
    })
    event.remove({output:'supplementaries:jar'})
    event.shaped('supplementaries:jar', [
        'GPG',
        'G G',
        'GGG'
    ], {
        G: 'minecraft:glass',
        P: 'gtceu:wood_plate'
    })
    event.remove({output:'supplementaries:sack'})
    event.shaped('supplementaries:sack', [
        'FSF',
        'FKF',
        'FFF'
    ], {
        F: 'supplementaries:flax',
        S: 'minecraft:string',
        K: '#forge:tools/knives'
    })
    event.remove({output:'supplementaries:blackboard'})
    event.shaped('supplementaries:blackboard', [
        'PB ',
        'PBW',
        'PB '
    ], {
        P: 'gtceu:wood_plate',
        W: '#supplementaries:blackboard_white',
        B: 'minecraft:blackstone'
    })
    event.remove({output:'supplementaries:bamboo_spikes'})
    event.shaped('supplementaries:bamboo_spikes', [
        'BRB',
        'BKB',
        'SSS'
    ], {
        B: 'minecraft:bamboo',
        R: '#supplementaries:ropes',
        K: '#forge:tools/knives',
        S: '#minecraft:wooden_slabs'
    })
    event.remove({output:'supplementaries:hourglass'})
    event.shaped('supplementaries:hourglass', [
        'SPS',
        'GDG',
        'SPS'
    ], {
        S: 'gtceu:gold_screw',
        P: 'gtceu:gold_plate',
        G: 'minecraft:glass',
        D: '#forge:tools/screwdrivers'
    })
    event.remove({output:'supplementaries:cog_block'})
    event.shaped('6x supplementaries:cog_block', [
        'PHP',
        'GRG',
        'PWP'
    ], {
        P: 'gtceu:copper_plate',
        G: 'gtceu:iron_small_gear',
        R: 'minecraft:redstone_block',
        H: '#forge:tools/hammers',
        W: '#forge:tools/wrenches'
    })
    event.remove({output:'supplementaries:relayer'})
    event.shaped('supplementaries:relayer', [
        'RCR',
        'CPC',
        'GIG'
    ], {
        R: 'gtceu:iron_ring',
        G: 'gtceu:iron_small_gear',
        P: 'gtceu:iron_plate',
        I: 'gtceu:red_alloy_rod',
        C: '#minecraft:stone_crafting_materials'  
    })
    event.remove({output:'supplementaries:spring_launcher'})
    event.shaped('supplementaries:spring_launcher', [
        'PSP',
        'PIP',
        'PAP'
    ], {
        P: 'gtceu:iron_plate',
        I: 'gtceu:iron_spring',
        S: 'minecraft:slime_block',
        A: 'minecraft:sticky_piston'
    })
    event.remove({output:'supplementaries:speaker_block'})
    event.shaped('supplementaries:speaker_block', [
        'LRL',
        'NON',
        'LGL'
    ], {
        L: '#minecraft:logs',
        R: 'gtceu:emerald_rod',
        N: 'minecraft:note_block',
        O: 'gtceu:iron_ring',
        G: 'gtceu:iron_gear'
    })
    event.remove({output:'supplementaries:turn_table'})
    event.shaped('supplementaries:turn_table', [
        'PPP',
        'GFG',
        'CRC'
    ], {
        P: '#minecraft:planks',
        C: '#minecraft:stone_crafting_materials',
        F: '#minecraft:wooden_fences',
        G: 'gtceu:copper_plate',
        R: 'gtceu:red_alloy_plate'
    })
    event.remove({output:'supplementaries:redstone_illuminator'})
    event.shaped('supplementaries:redstone_illuminator', [
        'GGG',
        'GLG',
        'GRG'
    ], {
        G: 'minecraft:glass_pane',
        L: 'minecraft:sea_lantern',
        R: 'gtceu:red_alloy_rod'
    })
    event.remove({output:'supplementaries:pulley_block'})
    event.shaped('supplementaries:pulley_block', [
        'PSP',
        'PGP',
        'PSP'
    ], {
        P: '#minecraft:planks',
        S: '#minecraft:wooden_slabs',
        G: 'gtceu:iron_small_gear'
    })
    event.remove({output:'supplementaries:lock_block'})
    event.shaped('supplementaries:lock_block', [
        'IPI',
        'PRP',
        'IPI'
    ], {
        I: 'gtceu:iron_plate',
        R: 'gtceu:red_alloy_plate',
        P: '#minecraft:planks'
    })
    event.remove({output:'supplementaries:bellows'})
    event.shaped('supplementaries:bellows', [
        'SIS',
        'L L',
        'SIS'
    ], {
        S: '#minecraft:wooden_slabs',
        L: 'minecraft:leather',
        I: 'gtceu:iron_small_spring'
    })
    event.remove({output:'supplementaries:clock_block'})
    event.shaped('supplementaries:clock_block', [
        'PPR',
        'PCG',
        'PPR'
    ], {
        P: '#minecraft:planks',
        R: 'gtceu:gold_rod',
        C: 'minecraft:clock',
        G: 'minecraft:glass'
    })
    event.remove({output:'supplementaries:crystal_display'})
    event.shaped('supplementaries:crystal_display', [
        'DAS',
        'CAF',
        'DAS'
    ], {
        D: 'minecraft:deepslate',
        A: 'minecraft:amethyst_shard',
        C: 'minecraft:comparator',
        F: '#forge:tools/screwdrivers',
        S: 'gtceu:iron_screw'
    })
    event.remove({output:'supplementaries:sconce_lever'})
    event.shaped('supplementaries:sconce_lever', [
        ' S ',
        'IRG',
        ' D '
    ], {
        S: 'supplementaries:sconce',
        I: 'gtceu:iron_rod',
        R: 'gtceu:red_alloy_bolt',
        G: 'gtceu:iron_small_gear',
        D: '#forge:tools/screwdrivers'
    })
    event.remove({output:'supplementaries:wind_vane'})
    event.shaped('supplementaries:wind_vane', [
        ' P ',
        'PBP',
        'GRG'
    ], {
        P: 'gtceu:iron_plate',
        B: 'minecraft:iron_bars',
        G: 'gtceu:iron_small_gear',
        R: 'gtceu:red_alloy_rod'
    })
    event.remove({output:'supplementaries:faucet'})
    event.shaped('supplementaries:faucet', [
        ' G ',
        'SST',
        '  T'
    ], {
        G: 'gtceu:iron_small_gear',
        S: 'gtceu:tin_alloy_small_fluid_pipe',
        T: 'gtceu:tin_alloy_tiny_fluid_pipe'
    })
    event.remove({output:'supplementaries:crank'})
    event.shaped('supplementaries:crank', [
        'OS ',
        'PGP',
        '   '
    ], {
        O: 'gtceu:iron_ring',
        P: 'gtceu:stone_plate',
        G: 'gtceu:iron_small_gear',
        S: 'minecraft:stick'
    })

})