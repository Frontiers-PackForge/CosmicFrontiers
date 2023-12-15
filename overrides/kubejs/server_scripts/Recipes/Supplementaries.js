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

})