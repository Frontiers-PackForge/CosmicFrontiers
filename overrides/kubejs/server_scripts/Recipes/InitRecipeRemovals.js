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

})

ServerEvents.recipes(e => { 
    e.remove({id: 'deep_aether:skyroot_crafting_table'})
    e.remove({id: 'aether:skyroot_crafting_table'})
})