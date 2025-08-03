ServerEvents.recipes(event => {
    event.remove({ output: 'nether_remastered:seal_of_the_underworld_item' })
    // event.shaped(Item.of('gateways:gate_pearl', '{gateway:"gateways:trial_of_the_skies"}'), [
    //     'EPE',
    //     'POP',
    //     'EPE'
    // ], {
    //     O: 'cosmiccore:overloaded_pearls',
    //     E: 'minecraft:echo_shard',
    //     P: 'gtceu:manasteel_plate',
    // })
})