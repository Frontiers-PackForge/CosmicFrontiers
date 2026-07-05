let yeet = (itemName) => {
    ServerEvents.recipes(event => {
        event.remove({ output: itemName })
    })

    ServerEvents.tags('item', event => {
        event.add('c:hidden_from_recipe_viewers', itemName)
    })
}

let yeet_f = (itemName) => {
    ServerEvents.recipes(event => {
        event.remove({ output: Fluid.of(itemName) })
    })
    ServerEvents.tags('fluid', event => {
        event.add('c:hidden_from_recipe_viewers', itemName)
    })
}


// yeet('')

yeet('embers:dynamic_crystal_seed')
yeet('occultism:miner_djinni_ores')
yeet('occultism:miner_afrit_deeps')
yeet('occultism:miner_marid_master')
yeet('occultism:miner_ancient_eldritch')



ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:shaped/compressed_coke_clay' })
    event.remove({ id: 'gtceu:compressor/coke_bricks' })
    event.remove({ id: 'gtceu:shaped/casing_coke_bricks' })
    event.remove({ id: 'gtceu:assembler/hull_lv' })
    event.remove({ id: 'occultism:crafting/chalk_white_impure' })
    event.remove({ id: 'occultism:crafting/chalk_white_impure2' })
    event.remove({ id: 'gtceu:shaped/basic_circuit_board' })
    event.remove({ id: 'gtceu:assembler/basic_circuit_board' })
    event.remove({ id: 'gtceu:shapeless/programmed_circuit' })
    event.remove({ id: 'gtceu:alloy_smelter/rubber_bar' })
    event.remove({ type: 'gtceu:ore_washer' })
    event.remove({ type: 'gtceu:thermal_centrifuge' })
    event.remove({ output: 'create:andesite_alloy' })
    event.remove({ id: 'gtceu:compressor/compress_plate_dust_wood' })
    event.remove({ id: 'gtceu:shaped/bronze_bricks_hull' })


    event.remove({ id: 'occultism:crafting/chalk_yellow_impure' })
    event.remove({ id: 'occultism:crafting/chalk_purple_impure' })
    event.remove({ id: 'gtceu:shapeless/fireclay_dust' })
    event.remove({ id: 'gtceu:shaped/casing_primitive_bricks' })
    event.remove({ output: 'gtceu:smelting/fireclay_brick' })
    event.remove({ id: 'gtceu:shaped/lv_machine_hull' })

    // Embers: disable dynamic crystal seed auto-generation
    event.remove({ type: 'embers:dynamic_metal_seed_alchemy' })
    event.remove({ type: 'occultism:miner' })

    // Malum: remove all impetus -> node recipes
    const malumNodeMetals = ['aluminum', 'cobalt', 'copper', 'gold', 'iron', 'lead', 'nickel', 'osmium', 'silver', 'tin', 'uranium', 'zinc']
    malumNodeMetals.forEach(metal => event.remove({ id: 'malum:node_focusing_' + metal }))
    event.remove({ id: 'malum:crush_zephyr_impetus' })
    event.remove({ id: 'malum:crush_fractured_zephyr_impetus' })
    event.remove({ id: 'gtceu:shaped/shape_empty' })

    event.remove({ id: 'gtceu:shaped/steam_boiler_coal_steel' })

    event.remove({ id: 'gtceu:smelting/fireclay_brick' })
    event.remove({ id: 'gtceu:extractor/extract_primitive_bricks' })
    event.remove({ id: 'create:crafting/logistics/factory_gauge' })
    event.remove({ id: 'gtceu:shaped/casing_steel_firebox' })
    event.remove({ output: 'gtceu:lv_machine_casing' })
    event.remove({ output: 'gtceu:resistor' })
    event.remove({ output: 'occultism:iesnium_ingot' })
    event.remove({ output: 'neovitae:ara_vitae' })
    event.remove({ type: 'embers:alchemy' })
    event.remove({ id: 'gtceu:shaped/coated_board' })
    event.remove({ id: 'gtceu:shapeless/coated_board_1x' })
    event.remove({ id: 'gtceu:shaped/electronic_circuit_lv' })

    //   event.remove({ id: 'embers:iron_plate_hammering' })
    //   event.remove({ id: 'embers:copper_plate_hammering' })
    //   event.remove({ id: 'embers:lead_plate_hammering' })
    //   event.remove({ id: 'embers:silver_plate_hammering' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })

    //   event.remove({ id: 'occultism:crafting/chalk_purple_impure' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })

    event.replaceInput(
        { output: 'gtceu:steel_brick_casing' },
        'minecraft:bricks',
        "gtceu:coke_oven_bricks"
    )
    event.replaceInput(
        { output: 'gtceu:lp_steam_solid_boiler' },
        'minecraft:bricks',
        "gtceu:coke_oven_bricks"
    )

    event.replaceInput(
        { output: 'gtceu:lp_steam_liquid_boiler' },
        'minecraft:bricks',
        "gtceu:coke_oven_bricks"
    )

    event.replaceInput(
        { output: 'gtceu:lp_steam_solar_boiler' },
        'minecraft:bricks',
        "gtceu:coke_oven_bricks"
    )
})