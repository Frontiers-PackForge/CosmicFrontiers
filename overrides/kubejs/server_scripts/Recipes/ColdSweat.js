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
    event.remove({ id: 'cold_sweat:thermometer'})
    event.shaped('cold_sweat:thermometer', [
        'PTP',
        'PRP',
        'FBH'
    ], {
        P: 'gtceu:gold_plate',
        T: 'gtceu:glass_tube',
        R: 'gtceu:red_alloy_rod',
        B: 'gtceu:gold_bolt',
        F: '#forge:tools/files',
        H: '#forge:tools/hammers'
    })
    event.remove({ id: 'cold_sweat:boiler'})
    event.shaped('cold_sweat:boiler', [
        'SSS',
        'W W',
        'DCD'
    ], {
        S: 'minecraft:cobblestone_slab',
        W: 'minecraft:cobblestone_wall',
        D: 'minecraft:deepslate_tiles',
        C: 'gtceu:coke_oven_bricks'
    })
    event.remove({ id: 'cold_sweat:icebox'})
    event.shaped('cold_sweat:icebox', [
        'PTP',
        'W W',
        'WWW'
    ], {
        P: 'gtceu:iron_plate',
        T: '#minecraft:wooden_trapdoors',
        W: 'gtceu:treated_wood_planks'
    })
    event.remove({ id: 'cold_sweat:thermolith'})
    event.shaped('cold_sweat:thermolith', [
        'CCC',
        'CHP',
        'TTR'
    ], {
        C: 'cold_sweat:chameleon_molt',
        H: 'cold_sweat:thermometer',
        P: 'gtceu:treated_wood_plate',
        T: 'gtceu:treated_wood_planks',
        R: 'minecraft:comparator'
    })
    event.remove({ id: 'cold_sweat:waterskin'})
    event.shaped('cold_sweat:waterskin', [
        '  S',
        'LL ',
        'LL '
    ], {
        S: 'minecraft:string',
        L: 'cosmiccore:waxed_leather'
    })
    event.remove({ id: 'cold_sweat:soulspring_lamp'})
    event.shaped(Item.of('cold_sweat:soulspring_lamp', '{Fuel:64.0d}'), [
        'GRG',
        'LML',
        'HCS'
    ], {
        G: 'gtceu:gold_screw',
        R: 'gtceu:iron_ring',
        L: 'gtceu:lead_plate',
        M: 'minecraft:heart_of_the_sea',
        C: 'minecraft:chain',
        H: '#forge:tools/hammers',
        S: '#forge:tools/screwdrivers'
    })
    event.remove({ id: 'cold_sweat:minecart_insulation'})
    event.shaped('cold_sweat:minecart_insulation', [
        'W W',
        'LLL'
    ], {
        W: '#minecraft:wool',
        L: 'cosmiccore:waxed_leather'
    })
    event.remove({ id: 'cold_sweat:insul_minecart_raw'})
    event.remove({ id: 'cold_sweat:insul_minecart'})
    event.shaped('cold_sweat:insulated_minecart', [
        'SIS',
        'SMS',
        ' D '
    ], {
        S: 'gtceu:iron_screw',
        I: 'cold_sweat:minecart_insulation',
        M: 'minecraft:minecart',
        D: '#forge:tools/screwdrivers'
    })
})