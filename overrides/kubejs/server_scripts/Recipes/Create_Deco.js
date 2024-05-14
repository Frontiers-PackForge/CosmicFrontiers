let yeet = (itemName) => {
    ServerEvents.recipes(event => {
        event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
        event.add('c:hidden_from_recipe_viewers', itemName)

    })
}
yeet('createdeco:andesite_sheet')
yeet('createdeco:zinc_sheet')
yeet('createdeco:industrial_iron_sheet')
yeet('createdeco:industrial_iron_nugget')
yeet('createdeco:netherite_sheet')
yeet('createdeco:netherite_nugget')


ServerEvents.recipes(event => {
    event.replaceInput({ mod: 'createdeco' },
        'createdeco:andesite_sheet',
        'gtceu:andesite_alloy_plate'
    )
    event.replaceInput({ mod: 'createdeco' },
        'create:iron_sheet',
        'gtceu:iron_plate'
    )
    event.replaceInput({ mod: 'createdeco' },
        'create:copper_sheet',
        'gtceu:copper_plate'
    )
    event.replaceInput({ mod: 'createdeco' },
        'createdeco:zinc_sheet',
        'gtceu:zinc_plate'
    )
    event.replaceInput({ mod: 'createdeco' },
        'create:brass_nugget',
        'gtceu:brass_nugget'
    )
    event.replaceInput({ mod: 'createdeco' },
        'create:copper_nugget',
        'gtceu:copper_nugget'
    )
    event.replaceInput({ mod: 'createdeco' },
        'create:zinc_nugget',
        'gtceu:zinc_nugget'
    )
    event.replaceInput({ mod: 'createdeco' },
        'create:brass_ingot',
        'gtceu:brass_ingot'
    )
    event.replaceInput({ mod: 'createdeco' },
        'create:zinc_ingot',
        'gtceu:zinc_ingot'
    )
    event.replaceInput({ mod: 'createdeco' },
        'create:brass_sheet',
        'gtceu:brass_plate'
    )
    event.replaceInput({ mod: 'createdeco' },
        'createdeco:industrial_iron_sheet',
        'gtceu:industrial_iron_plate'
    )
    event.replaceInput({ mod: 'createdeco' },
        'createdeco:industrial_iron_nugget',
        'gtceu:industrial_iron_nugget'
    )
})