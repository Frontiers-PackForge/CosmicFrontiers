// priority: 0
//Commence purification of non-greg behaviour
//Currently only Iron tools but for ease of removal/tweaking
//I opted for a seperate file just for this

ServerEvents.recipes(event => {
    // event.remove({output: 'minecraft:iron_pickaxe'})
    // event.remove({output: 'minecraft:iron_shovel'})
    // event.remove({output: 'minecraft:iron_sword'})
    // event.remove({output: 'minecraft:iron_axe'})
    //Do not remove these
})

//Removal of vanilla charcoal recipes

ServerEvents.recipes(event => {
    event.remove({id: 'minecraft:charcoal'})
    event.remove({id: 'integrateddynamics:smelting/menril_log_filled_coal'})
    event.remove({id: 'integrateddynamics:smelting/menril_log_coal'})
    event.remove({id: 'integrateddynamics:blasting/menril_log_filled_coal'})
    event.remove({id: 'integrateddynamics:blasting/menril_log_coal'})

    event.remove({id: 'deep_aether:skyroot_crafting_table'})
    event.remove({id: 'aether:skyroot_crafting_table'})

    event.remove({id: 'occultism:smelting/iron_ingot_from_dust'})
    event.remove({id: 'occultism:smelting/gold_ingot_from_dust'})
    event.remove({id: 'occultism:smelting/copper_ingot_from_dust'})
    event.remove({id: 'occultism:smelting/iesnium_ingot_from_dust'})
    event.remove({id: 'occultism:smelting/iesnium_ingot_from_raw'})
    event.remove({id: 'aether:holystone_stonecutter'})
    event.remove({id: 'undergarden:stonecutter_from_depthrock'})
    event.remove({id: 'undergarden:stonecutter_from_shiverstone'})
    event.remove({id: 'undergarden:stonecutter_from_tremblecrust'})
    
    event.remove('tconstruct:common/basalt_blast_furnace')
    event.remove('farmersdelight:scaffolding_from_canvas')
    event.remove('undergarden:undergarden_scaffolding')
    event.remove('create:crafting/appliances/item_frame')
    event.remove('minecraft:target')
    event.remove('tconstruct:common/glass/vanilla/daylight_detector')
    event.remove('tconstruct:common/slime/sticky_piston')
    event.remove('embers:sticky_piston_adhesive')
    event.remove('undergarden:sticky_piston_from_goo_ball')
    event.remove('aether:swet_sticky_piston')
    event.remove('gtceu:shaped/bamboo_chest_raft')
    event.remove('dustydecoration:lead_recipe')
    event.remove('tconstruct:common/slime/lead')
    event.remove('embers:lead_adhesive')
    event.remove('undergarden:undergarden_lead')
    event.remove('aether:swet_lead')
    event.remove('farmersdelight:lead_from_straw')
    event.remove('farmersdelight:cake_from_milk_bottle')
    event.remove('forestry:cake_can')
    event.remove('forestry:cake_capsule')
    event.remove('forestry:cake_refractory')
    event.remove('vanilladelight:pumpkin_pie_from_slices')
    event.remove('delightful:food/cookie')
    event.remove('botania:mushroom_stew')
    event.remove('biomesoplenty:rabbit_stew_from_toadstool')
    event.remove('crabbersdelight:scute_from_block')
})