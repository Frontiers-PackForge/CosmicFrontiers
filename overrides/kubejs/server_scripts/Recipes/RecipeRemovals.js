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
    event.remove({ output: 'neovitae:ara_vitae' })
    event.remove({ type: 'embers:alchemy' })
    event.remove({ id: 'gtceu:shaped/coated_board' })
    event.remove({ id: 'gtceu:shapeless/coated_board_1x' })
    event.remove({ id: 'gtceu:shaped/electronic_circuit_lv' })

    event.shaped('4x cosmiccore:lv_cogwork_magicapacitor', ['ABA', 'CDC', 'ABA'], { A: 'gtceu:steel_plate', B: 'cosmiccore:cogwork_units', C: 'gtceu:runed_steel_foil', D: 'cosmiccore:overloaded_pearls' })

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