ServerEvents.recipes(event => {
    event.remove({ output: 'nether_remastered:seal_of_the_underworld_item' })
    event.shaped(Item.of('gateways:gate_pearl', '{gateway:"gateways:trial_of_the_overworld"}'), [
        'ZEY',
        'ECE',
        'XEW'
    ], {
        Z: 'nether_remastered:seal_piece_1',
        Y: 'nether_remastered:seal_piece_2',
        X: 'nether_remastered:seal_piece_3',
        W: 'nether_remastered:seal_piece_4',
        E: 'nether_remastered:nether_essence',
        C: 'nether_remastered:seal_crystal',
    })
    event.shaped(Item.of('gateways:gate_pearl', '{gateway:"gateways:trial_of_the_skies"}'), [
        'EPE',
        'POP',
        'EPE'
    ], {
        O: 'cosmiccore:overloaded_pearls',
        E: 'minecraft:echo_shard',
        P: 'gtceu:manasteel_plate',
    })
})