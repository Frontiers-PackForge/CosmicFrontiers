//A Simple "REMOVE AND HIDE" function akin to GroovyScript's Jei.yeet() function - This will tag the item for hiding from recipe viewers and remove the recipe
let yeet = (itemName) => {
    ServerEvents.recipes(event => {
        event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
        event.add('c:hidden_from_recipe_viewers', itemName)
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

ServerEvents.recipes(event => {
event.remove({ output: 'toms_storage:ts.inventory_cable_connector' })
event.shaped('4x toms_storage:ts.inventory_cable_connector', [
    'CDC',
    'RHR',
    'CDC'
], {
    C: 'gtceu:wrought_iron_plate',
    H: 'gtceu:steam_machine_casing',
    D: 'minecraft:diamond',
    R: 'ulvcovm:ulv_conveyor_module'
})
event.remove({ output: 'toms_storage:ts.storage_terminal' })
event.shaped('toms_storage:ts.storage_terminal', [
    'WRW',
    'RCR',
    'WHW'
], {
    W: 'gtceu:treated_wood_planks',
    H: 'gtceu:steam_machine_casing',
    C: 'minecraft:crafting_table',
    R: 'ulvcovm:ulv_conveyor_module'
})
event.remove({ output: 'toms_storage:ts.crafting_terminal' })
event.shaped('toms_storage:ts.crafting_terminal', [
    'WRW',
    'RCR',
    'WHW'
], {
    W: 'minecraft:crafting_table',
    H: 'gtceu:steam_machine_casing',
    C: 'toms_storage:ts.storage_terminal',
    R: 'ulvcovm:ulv_robot_arm'
})
event.remove({ id: 'toms_storage:inventory_connector' })
event.shaped('toms_storage:ts.inventory_connector', [
    'WRW',
    'CHC',
    'WRW'
], {
    W: 'gtceu:treated_wood_plate',
    H: 'gtceu:steam_machine_casing',
    C: '#forge:chests/wooden',
    R: 'ulvcovm:ulv_robot_arm'
})
event.remove({ id: 'toms_storage:inventory_cable' })
event.shaped('16x toms_storage:ts.inventory_cable', [
    'WRW',
    'TCT',
    'WRW'
], {
    W: 'gtceu:treated_wood_plate',
    T: 'gtceu:double_bronze_plate',
    C: '#forge:chests/wooden',
    R: 'ulvcovm:ulv_conveyor_module'
})
})