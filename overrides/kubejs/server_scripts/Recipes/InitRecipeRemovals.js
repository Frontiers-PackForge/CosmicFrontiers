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
})
