//A Simple "REMOVE AND HIDE" function akin to GroovyScript's Jei.yeet() function - This will tag the item for hiding from recipe viewers and remove the recipe
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


yeet('toms_storage:ts.inventory_hopper_basic')
yeet('toms_storage:ts.level_emitter')
yeet('toms_storage:ts.inventory_cable_framed')
yeet('toms_storage:ts.inventory_cable_connector_filtered')
yeet('toms_storage:ts.inventory_cable_connector_framed')
yeet('toms_storage:ts.adv_wireless_terminal')
yeet('toms_storage:ts.wireless_terminal')
yeet('toms_storage:ts.polymorphic_item_filter')
yeet('toms_storage:ts.tag_item_filter')
yeet('toms_storage:ts.item_filter')
yeet('toms_storage:ts.inventory_proxy')
yeet('toms_storage:ts.trim')
yeet('toms_storage:ts.open_crate')
yeet('toms_storage:ts.painted_trim')
yeet('toms_storage:ts.paint_kit')
yeet('toms_storage:ts.storage_terminal')

ServerEvents.recipes(event => {
event.remove({ output: 'toms_storage:ts.inventory_connector' })
event.shaped('toms_storage:ts.inventory_connector', [
    'CDC',
    'RHR',
    'CDC'
], {
    C: 'gtceu:basic_electronic_circuit',
    H: 'gtceu:lv_machine_hull',
    D: 'gtceu:diamond_plate',
    R: 'gtceu:lv_robot_arm'
})
event.remove({ output: 'toms_storage:ts.crafting_terminal' })
event.shaped('toms_storage:ts.crafting_terminal', [
    'WRW',
    'RCR',
    'WHW'
], {
    W: 'gtceu:treated_wood_planks',
    H: 'gtceu:lv_machine_hull',
    C: 'minecraft:crafting_table',
    R: 'gtceu:lv_robot_arm'
})


})