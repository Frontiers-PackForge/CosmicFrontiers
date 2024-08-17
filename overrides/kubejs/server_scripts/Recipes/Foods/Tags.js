ServerEvents.tags('item', event => {
    event.add('forge:flour', 'gtceu:wheat_dust')
    event.add('forge:salt', 'gtceu:salt_dust')
    event.add('forge:rice', 'farmersdelight:rice')
    event.add('forge:cabbage', 'farmersdelight:cabbage')
    event.add('forge:tomatoes', 'farmersdelight:tomato')
    event.add('forge:onions', 'farmersdelight:onion')
})

ServerEvents.tags('fluid', event => {
    event.add('forge:milk', 'gtceu:soy_milk')
    event.add('forge:milk', 'gtceu:milk')
    event.add('forge:milk', 'minecraft:milk')
})

ServerEvents.tags('fluids', event => {
    event.add('forge:milk', 'croptopia:soy_milk')
    event.add('forge:milk', 'gtceu:milk')
    event.add('forge:milk', 'minecraft:milk')
})