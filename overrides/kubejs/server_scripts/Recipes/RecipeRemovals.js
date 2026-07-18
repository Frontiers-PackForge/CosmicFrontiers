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

RecipeViewerEvents.removeCategories(event => {
    event.remove('create:fan_blasting')
    event.remove('create:fan_smoking')
    event.remove('enderio:alloy_smelting')
    event.remove('ironfurnaces:generator_regular')
    event.remove('ironfurnaces:generator_blasting')
    event.remove('ironfurnaces:generator_smoking')
})


// yeet('')

yeet('embers:dynamic_crystal_seed')
yeet('occultism:miner_djinni_ores')
yeet('occultism:miner_afrit_deeps')
yeet('occultism:miner_marid_master')
yeet('occultism:miner_ancient_eldritch')



ServerEvents.recipes(event => {

    event.remove({ mod: 'ae2' })

    event.remove({ id: 'rocketnautics:pressing/titanium_alloy_ingot' })
    event.remove({ id: 'rocketnautics:pressing/titanium_ingot' })
    event.remove({ id: 'create:pressing/brass_ingot' })
    event.remove({ id: 'embers:create:pressing/iron_plate' })
    event.remove({ id: 'embers:create:pressing/copper_plate' })
    event.remove({ id: 'createdeco:pressing/andesite_sheet' })
    event.remove({ id: 'createdeco:pressing/zinc_sheet' })
    event.remove({ id: 'embers:create/pressing/dawnstone_plate' })
    event.remove({ id: 'create:pressing/gold_ingot' })
    event.remove({ id: 'embers:create/pressing/silver_plate' })
    event.remove({ id: 'embers:create/pressing/lead_plate' })
    event.remove({ id: 'create:pressing/copper_ingot' })
    event.remove({ id: 'embers:create/pressing/dwarven_mithril_plate' })
    event.remove({ id: 'create:pressing/iron_ingot' })
    event.remove({ id: 'simulated:physics_assembler' })
    event.remove({ id: 'create:crafting/kinetics/cart_assembler' })
    event.remove({ id: 'malum:spirit_altar' })
    event.remove({ id: 'gtceu:mixer/concrete_from_calcite' })
    event.remove({ id: 'gtceu:mixer/concrete_from_marble' })
    event.remove({ id: 'gtceu:shaped/bucket_of_concrete' })
    event.remove({ id: 'malum:arcane_charcoal_from_runewood' })
    event.remove({ id: 'malum:arcane_charcoal_from_soulwood' })
    event.remove({ id: 'occultism:crafting/chalk_lime_impure' })
    event.remove({ id: 'occultism:ritual/craft_research_fragment_dust' })
    event.remove({ id: 'create:crafting/logistics/package_frogport' })
    event.remove({ id: 'occultism:smelting/silver_ingot_from_dust' })
    event.remove({ id: 'minecraft:netherite_ingot' })
    event.remove({ id: 'embers:hearth_coil' })
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
    event.remove({ id: 'gtceu:shaped/implosion_compressor' })
    event.remove({ type: 'gtceu:ore_washer' })
    event.remove({ type: 'gtceu:thermal_centrifuge' })
    event.remove({ type: 'embers:dawnstone_plate_hammering' })
    event.remove({ type: 'enderio:alloy_smelting' })
    event.remove({ type: 'enderio:smelting' })
    event.remove({ output: 'create:andesite_alloy' })
    event.remove({ id: 'gtceu:compressor/compress_plate_dust_wood' })
    event.remove({ id: 'gtceu:shaped/bronze_bricks_hull' })
    event.remove({ output: 'gtceu:lv_field_generator' })
    event.remove({ output: 'neovitae:blood_orb_weak' })

    event.remove({ output: 'waystones:end_stone_waystone' })
    event.remove({ output: 'waystones:blackstone_waystone' })
    event.remove({ output: 'waystones:deepslate_waystone' })
    event.remove({ output: 'waystones:sandy_waystone' })
    event.remove({ output: 'waystones:mossy_waystone' })
    event.remove({ output: 'waystones:waystone' })

    event.remove({ id: 'occultism:crafting/chalk_yellow_impure' })
    event.remove({ id: 'occultism:crafting/chalk_purple_impure' })
    event.remove({ id: 'gtceu:shapeless/fireclay_dust' })
    event.remove({ id: 'gtceu:shaped/casing_primitive_bricks' })
    event.remove({ id: 'gtceu:smelting/fireclay_brick' })
    event.remove({ id: 'gtceu:shaped/lv_machine_hull' })

    // Embers: disable dynamic crystal seed auto-generation
    event.remove({ type: 'embers:dynamic_metal_seed_alchemy' })
    event.remove({ type: 'occultism:miner' })

    const malumNodeMetals = ['aluminum', 'cobalt', 'copper', 'gold', 'iron', 'lead', 'nickel', 'osmium', 'silver', 'tin', 'uranium', 'zinc']
    malumNodeMetals.forEach(metal => {
        event.remove({ id: 'malum:spirit_crucible/node_focusing_' + metal })
        event.remove({ id: 'malum:spirit_infusion/' + metal + '_impetus' })
        event.remove({ id: 'malum:spirit_repair/fractured_' + metal + '_impetus_restoration' })
        event.remove({ id: 'malum:' + metal + '_from_node_smelting' })
        event.remove({ id: 'malum:' + metal + '_from_node_blasting' })
    })
    event.remove({ id: 'malum:create/washing/copper_node' })
    event.remove({ id: 'malum:create/washing/gold_node' })
    event.remove({ id: 'malum:create/washing/iron_node' })
    event.remove({ id: 'malum:create/washing/zinc_node' })
    event.remove({ id: 'malum:create/crushing/impetus/crush_metal_impetus' })
    event.remove({ id: 'malum:create/crushing/impetus/crush_fractured_metal_impetus' })
    event.remove({ id: 'malum:create/crushing/impetus/crush_zephyr_impetus' })
    event.remove({ id: 'malum:create/crushing/impetus/crush_fractured_zephyr_impetus' })

    event.remove({ output: 'malum:soul_stained_steel_ingot', type: 'malum:spirit_infusion' })
    event.remove({ id: 'gtceu:macerator/macerate_raw_iesnium_ore_to_crushed_ore' })
    event.remove({ id: 'gtceu:shaped/steam_boiler_coal_steel' })

    event.remove({ id: 'gtceu:smelting/fireclay_brick' })
    event.remove({ id: 'gtceu:extractor/extract_primitive_bricks' })
    event.remove({ id: 'create:crafting/logistics/factory_gauge' })
    event.remove({ id: 'gtceu:shaped/casing_steel_firebox' })
    event.remove({ output: 'occultism:iesnium_ingot' })
    event.remove({ output: 'gtceu:lv_machine_casing' })
    event.remove({ output: 'gtceu:resistor' })
    event.remove({ output: 'neovitae:ara_vitae' })
    event.remove({ output: 'enderio:dark_steel_ingot' })
    event.remove({ output: 'enderio:energetic_alloy_ingot' })
    event.remove({ output: 'enderio:vibrant_alloy_ingot' })
    event.remove({ output: 'gtceu:hssg_coil_block' })
    event.remove({ output: 'gtceu:naquadah_coil_block' })
    event.remove({ output: 'gtceu:trinium_coil_block' })
    event.remove({ output: 'gtceu:empty_mold' })
    event.remove({ type: 'embers:alchemy' })
    event.remove({ id: 'gtceu:shaped/coated_board' })
    event.remove({ id: 'gtceu:shapeless/coated_board_1x' })
    event.remove({ id: 'gtceu:shaped/electronic_circuit_lv' })

    event.remove({ id: 'embers:iron_plate_hammering' })
    event.remove({ id: 'embers:copper_plate_hammering' })
    event.remove({ id: 'embers:lead_plate_hammering' })
    event.remove({ id: 'embers:silver_plate_hammering' })
    event.remove({ id: 'undergarden:catalyst' })
    event.remove({ id: 'gtceu:forge_hammer/hammer_raw_redstona_to_crushed' })
    event.remove({ id: 'gtceu:forge_hammer/hammer_raw_lazuric_to_crushed' })
    event.remove({ id: 'gtceu:forge_hammer/hammer_raw_carbonic_to_crushed' })
    event.remove({ id: 'gtceu:forge_hammer/hammer_raw_earthen_salts_to_crushed' })
    event.remove({ id: 'gtceu:compressor/compress_plate_dust_treated_wood' })
    event.remove({ id: 'gtceu:shaped/shape_empty' })
    event.remove({ id: 'occultism:spirit_fire/spirit_attuned_gem' })



    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
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
    event.replaceInput(
        { output: 'gtceu:lp_steam_macerator' },
        'minecraft:diamond',
        "minecraft:flint"
    )
    const sharestones = [
        'waystones:orange_sharestone',
        'waystones:magenta_sharestone',
        'waystones:light_blue_sharestone',
        'waystones:yellow_sharestone',
        'waystones:lime_sharestone',
        'waystones:pink_sharestone',
        'waystones:gray_sharestone',
        'waystones:light_gray_sharestone',
        'waystones:cyan_sharestone',
        'waystones:purple_sharestone',
        'waystones:blue_sharestone',
        'waystones:brown_sharestone',
        'waystones:green_sharestone',
        'waystones:red_sharestone',
        'waystones:black_sharestone'
    ]

    sharestones.forEach(item => {
        event.remove({ output: item })
    })
})

ServerEvents.tags('item', event => {
    const malumNodeMetals = ['aluminum', 'cobalt', 'copper', 'gold', 'iron', 'lead', 'nickel', 'osmium', 'silver', 'tin', 'uranium', 'zinc']
    malumNodeMetals.forEach(metal => {
        event.add('c:hidden_from_recipe_viewers', 'malum:' + metal + '_node')
        event.add('c:hidden_from_recipe_viewers', 'malum:' + metal + '_impetus')
        event.add('c:hidden_from_recipe_viewers', 'malum:fractured_' + metal + '_impetus')
    })
})
