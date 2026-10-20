ServerEvents.recipes(event => {
    event.remove({ id: 'create_connected:crafting/kinetics/empty_fan_catalyst' })
    event.shaped('create_connected:empty_fan_catalyst', ['BIB', 'I I', 'BIB'], { B: 'gtceu:brass_ingot', I: 'minecraft:iron_bars' }).id('create_connected:crafting/kinetics/empty_fan_catalyst')
})
