ServerEvents.recipes(event => {
    event.remove({ id: 'cold_sweat:hearth' })
    event.shaped('cold_sweat:hearth', [
        ' S ',
        'BBB',
        'GCG'
    ], {
        S: 'cold_sweat:smokestack',
        G: 'gtceu:coke_oven_bricks',
        B: 'minecraft:bricks',
        C: 'minecraft:campfire'
    })
})