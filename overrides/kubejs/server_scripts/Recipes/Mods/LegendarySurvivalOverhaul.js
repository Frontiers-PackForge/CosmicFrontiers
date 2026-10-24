ServerEvents.recipes(event => {
    event.replaceInput(
        { mod: 'legendarysurvivaloverhaul', output: /legendarysurvivaloverhaul:.*_juice/ },
        'legendarysurvivaloverhaul:purified_water_bottle',
        Ingredient.of('minecraft:potion[minecraft:potion_contents={potion:"minecraft:water"}]')
    )
})
