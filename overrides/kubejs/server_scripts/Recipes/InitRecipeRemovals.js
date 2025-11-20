// priority: 0
//Commence purification of non-greg behaviour
//Currently only Iron tools but for ease of removal/tweaking
//I opted for a seperate file just for this

ServerEvents.recipes(e => {
    // e.remove({output: 'minecraft:iron_pickaxe'})
    // e.remove({output: 'minecraft:iron_shovel'})
    // e.remove({output: 'minecraft:iron_sword'})
    // e.remove({output: 'minecraft:iron_axe'})
    //Do not remove these
})

//Removal of vanilla charcoal recipes

ServerEvents.recipes(e => {
    e.remove({id: 'minecraft:charcoal'})
    e.remove({id: 'integrateddynamics:smelting/menril_log_filled_coal'})
    e.remove({id: 'integrateddynamics:smelting/menril_log_coal'})
    e.remove({id: 'integrateddynamics:blasting/menril_log_filled_coal'})
    e.remove({id: 'integrateddynamics:blasting/menril_log_coal'})

    e.remove({id: 'deep_aether:skyroot_crafting_table'})
    e.remove({id: 'aether:skyroot_crafting_table'})

    e.remove({id: 'occultism:smelting/iron_ingot_from_dust'})
    e.remove({id: 'bloodmagic:smelting/ingot_iron'})
    e.remove({id: 'occultism:smelting/gold_ingot_from_dust'})
    e.remove({id: 'bloodmagic:smelting/ingot_gold'})
    e.remove({id: 'occultism:smelting/copper_ingot_from_dust'})
    e.remove({id: 'bloodmagic:smelting/ingot_copper'})
    e.remove({id: 'occultism:smelting/iesnium_ingot_from_dust'})
    e.remove({id: 'occultism:smelting/iesnium_ingot_from_raw'})
    e.remove({id: 'aether:holystone_stonecutter'})
    e.remove({id: 'undergarden:stonecutter_from_depthrock'})
    e.remove({id: 'undergarden:stonecutter_from_shiverstone'})
    e.remove({id: 'undergarden:stonecutter_from_tremblecrust'})
    
    e.remove('tconstruct:common/basalt_blast_furnace')
    e.remove('farmersdelight:scaffolding_from_canvas')
    e.remove('undergarden:undergarden_scaffolding')
    e.remove('create:crafting/appliances/item_frame')
    e.remove('minecraft:target')
    e.remove('tconstruct:common/glass/vanilla/daylight_detector')
    e.remove('tconstruct:common/slime/sticky_piston')
    e.remove('embers:sticky_piston_adhesive')
    e.remove('undergarden:sticky_piston_from_goo_ball')
    e.remove('aether:swet_sticky_piston')
    e.remove('gtceu:shaped/bamboo_chest_raft')
    e.remove('dustydecoration:lead_recipe')
    e.remove('tconstruct:common/slime/lead')
    e.remove('embers:lead_adhesive')
    e.remove('undergarden:undergarden_lead')
    e.remove('aether:swet_lead')
    e.remove('farmersdelight:lead_from_straw')
    e.remove('farmersdelight:cake_from_milk_bottle')
    e.remove('forestry:cake_can')
    e.remove('forestry:cake_capsule')
    e.remove('forestry:cake_refractory')
    e.remove('vanilladelight:pumpkin_pie_from_slices')
    e.remove('delightful:food/cookie')
    e.remove('botania:mushroom_stew')
    e.remove('biomesoplenty:rabbit_stew_from_toadstool')
    e.remove('crabbersdelight:scute_from_block')

    e.replaceInput({ id: 'gtceu:shaped/scaffolding' },
        'minecraft:slime_ball',
        '#forge:slimeballs'
    )

    e.replaceInput({ id: 'gtceu:shaped/sticky_piston' },
        'minecraft:string',
        ['minecraft:string', 'undergarden:twsity_twig']
    )

    e.replaceInput({ id: 'create:crafting/appliances/name_tags' },
        'create:cardboard',
        ['create:cardboard', 'farmersdelight:canvas']
    )

    e.replaceInput({ id: 'gtceu:shaped/lead' },
        'minecraft:string',
        ['minecraft:string', 'farmersdelight:straw']
    )

    e.replaceInput({ id: 'gtceu:shaped/lead' },
        'minecraft:slime_ball',
        '#forge:slimeballs'
    )

    e.replaceInput({ id: 'gtceu:assembler/lead' },
        'minecraft:string',
        ['minecraft:string', 'farmersdelight:straw']
    )

    e.replaceInput({ id: 'gtceu:assembler/lead' },
        'minecraft:slime_ball',
        '#forge:slimeballs'
    )

    e.shaped('8x minecraft:scaffolding', [
        'BSB',
        'BWB',
        'BMB'
    ], {
        B: 'minecraft:bamboo',
        S: 'farmersdelight:canvas',
        W: 'gtceu:wood_bolt',
        M: '#forge:tools/mallets'
    })

    e.shapeless('minecraft:bamboo_chest_raft', ['minecraft:bamboo_raft', '#forge:chests/wooden'])

    e.recipes.gtceu.assembler(`frontiers:scaffolding_from_canvas`)
        .itemInputs(['6x minecraft:bamboo', 'farmersdelight:canvas'])
        .itemOutputs('8x minecraft:scaffolding')
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV]);

    e.recipes.gtceu.assembler(`frontiers:item_frame_from_cardboard`)
        .itemInputs(['8x minecraft:stick', 'create:cardboard'])
        .itemOutputs('2x minecraft:item_frame')
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV]);
})