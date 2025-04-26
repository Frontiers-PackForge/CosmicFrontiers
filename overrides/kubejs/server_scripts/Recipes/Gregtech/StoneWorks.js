ServerEvents.recipes(event => {
    //Add new Stones Here -G
    let stoneworks = [
        'minecraft:blackstone',
        'minecraft:andesite',
        'minecraft:granite',
        'minecraft:stone',
        'minecraft:cobblestone',
        'minecraft:diorite',
        'minecraft:obsidian',
        'aether:holystone',
        'minecraft:basalt',
        'minecraft:deepslate',
        'gtceu:marble',
        'gtceu:red_granite'
    ]

    stoneworks.forEach(tier => {
        event.recipes.gtceu.industrial_stoneworks(`indust_stoneworks_${tier}`)
            .notConsumable(`${tier}`)
            .inputFluids('minecraft:water 4000')
            .inputFluids('minecraft:lava 4000')
            .itemOutputs(`64x ${tier}`)
            .duration(100)
            .EUt(GTValues.VA[GTValues.EV]);
    })

    event.stonecutting('gtceu:marble_bricks', 'gtceu:marble')
    event.stonecutting('gtceu:polished_marble', 'gtceu:marble')
    event.stonecutting('gtceu:chiseled_marble', 'gtceu:marble')
    event.stonecutting('gtceu:marble_tile', 'gtceu:marble')
    event.stonecutting('gtceu:marble_small_tile', 'gtceu:marble')
    event.stonecutting('gtceu:marble_windmill_a', 'gtceu:marble')
    event.stonecutting('gtceu:marble_windmill_b', 'gtceu:marble')
    event.stonecutting('gtceu:small_marble_bricks', 'gtceu:marble')
    event.stonecutting('gtceu:square_marble_bricks', 'gtceu:marble')

    event.stonecutting('gtceu:red_granite_bricks', 'gtceu:red_granite')
    event.stonecutting('gtceu:polished_red_granite', 'gtceu:red_granite')
    event.stonecutting('gtceu:chiseled_red_granite', 'gtceu:red_granite')
    event.stonecutting('gtceu:red_granite_tile', 'gtceu:red_granite')
    event.stonecutting('gtceu:red_granite_small_tile', 'gtceu:red_granite')
    event.stonecutting('gtceu:red_granite_windmill_a', 'gtceu:red_granite')
    event.stonecutting('gtceu:red_granite_windmill_b', 'gtceu:red_granite')
    event.stonecutting('gtceu:small_red_granite_bricks', 'gtceu:red_granite')
    event.stonecutting('gtceu:square_red_granite_bricks', 'gtceu:red_granite')

    event.recipes.gtceu.celestial_bore(`boremap_earth`)
        .notConsumable('ad_astra:earth_globe')
        .dimension('ad_astra:earth_orbit')
        .inputFluids('gtceu:pyroflux 100000')
        .itemOutputsRanged('gtceu:raw_nickel', 500, 4500)
        .itemOutputsRanged('gtceu:raw_graphite', 500, 4500)
        .itemOutputsRanged('gtceu:raw_diamond', 500, 4500)
        .itemOutputsRanged('gtceu:raw_coal', 500, 4500)
        .itemOutputsRanged('gtceu:raw_redstone', 500, 4500)
        .itemOutputsRanged('gtceu:raw_lapis', 500, 4500)
        .itemOutputsRanged('minecraft:raw_gold', 500, 4500)
        .itemOutputsRanged('minecraft:raw_copper', 500, 4500)
        .itemOutputsRanged('minecraft:raw_iron', 500, 4500)
        .itemOutputsRanged('gtceu:raw_fullers_earth', 500, 4500)
        .itemOutputsRanged('gtceu:raw_gypsum', 500, 4500)
        .itemOutputsRanged('gtceu:raw_tin', 500, 4500)
        .itemOutputsRanged('gtceu:raw_opal', 500, 4500)
        .itemOutputsRanged('gtceu:raw_amethyst', 500, 4500)
        .itemOutputsRanged('gtceu:raw_yellow_garnet', 500, 4500)
        .itemOutputsRanged('gtceu:raw_red_garnet', 500, 4500)
        .itemOutputsRanged('gtceu:raw_green_sapphire', 500, 4500)
        .itemOutputsRanged('gtceu:raw_realgar', 500, 4500)
        .itemOutputsRanged('gtceu:raw_tricalcium_phosphate', 500, 4500)
        .itemOutputsRanged('gtceu:raw_apatite', 500, 4500)
        .itemOutputsRanged('gtceu:raw_sulfur', 500, 4500)
        .itemOutputsRanged('gtceu:raw_sphalerite', 500, 4500)
        .itemOutputsRanged('gtceu:raw_cinnabar', 500, 4500)
        .itemOutputsRanged('gtceu:raw_spodumene', 500, 4500)
        .itemOutputsRanged('gtceu:raw_lepidolite', 500, 4500)
        .itemOutputsRanged('gtceu:raw_salt', 500, 4500)
        .itemOutputsRanged('gtceu:raw_rock_salt', 500, 4500)
        .itemOutputsRanged('gtceu:raw_cobaltite', 500, 4500)
        .itemOutputsRanged('gtceu:raw_nether_quartz', 500, 4500)
        .itemOutputsRanged('gtceu:raw_quartzite', 500, 4500)
        .itemOutputsRanged('gtceu:raw_certus_quartz', 500, 4500)
        .itemOutputsRanged('gtceu:raw_barite', 500, 4500)
        .itemOutputsRanged('gtceu:raw_asbestos', 500, 4500)
        .itemOutputsRanged('gtceu:raw_cassiterite', 500, 4500)
        .itemOutputsRanged('gtceu:raw_pyrochlore', 500, 4500)
        .itemOutputsRanged('gtceu:raw_chromite', 500, 4500)
        .itemOutputsRanged('gtceu:raw_saltpeter', 500, 4500)
        .itemOutputsRanged('gtceu:raw_electrotine', 500, 4500)
        .itemOutputsRanged('gtceu:raw_beryllium', 500, 4500)
        .itemOutputsRanged('gtceu:raw_vanadium_magnetite', 500, 4500)
        .itemOutputsRanged('gtceu:raw_tantalite', 500, 4500)
        .itemOutputsRanged('gtceu:raw_pyrolusite', 500, 4500)
        .itemOutputsRanged('gtceu:raw_calcite', 500, 4500)
        .itemOutputsRanged('gtceu:raw_lead', 500, 4500)
        .itemOutputsRanged('gtceu:raw_silver', 500, 4500)
        .itemOutputsRanged('gtceu:raw_galena', 500, 4500)
        .itemOutputsRanged('gtceu:raw_stibnite', 500, 4500)
        .itemOutputsRanged('gtceu:raw_bauxite', 500, 4500)
        .itemOutputsRanged('gtceu:raw_olivine', 500, 4500)
        .itemOutputsRanged('gtceu:raw_almandine', 500, 4500)
        .itemOutputsRanged('gtceu:raw_pyrope', 500, 4500)
        .itemOutputsRanged('gtceu:raw_sapphire', 500, 4500)
        .itemOutputsRanged('gtceu:raw_talc', 500, 4500)
        .itemOutputsRanged( 'gtceu:raw_kyanite', 500, 4500)
        .outputFluids('gtceu:oil 5000000')
        .outputFluids('gtceu:oil_heavy 9500000')
        .outputFluids('gtceu:oil_medium 500000')
        .outputFluids('gtceu:oil_light 5500000')
        .outputFluids('gtceu:salt_water 8800000')
        .outputFluids('gtceu:natural_gas 375000')
        .outputFluids('gtceu:pyroflux 500000')
        .outputFluids('gtceu:deeply_withered_nether_slag 4400000')
        .outputFluids('minecraft:lava 2500000')
        .duration(288000)
        .EUt(GTValues.VA[GTValues.IV]);



    //BOREMAP SOL
    event.recipes.gtceu.celestial_bore(`boremap_sol`)
    .notConsumable('ad_astra:sun_globe')
    .dimension('frontiers:sun_orbit')
    .inputFluids('gtceu:grading_fluid_5 100000')
    .outputFluids('gtceu:ghost_matter_plasma 3200000')
    .outputFluids('gtceu:sol_blood_plasma 1380000')
    .outputFluids('gtceu:homeward_resin_plasma 2400000')
    .outputFluids('gtceu:perpetuity_slag_plasma 5500000')
    .outputFluids('gtceu:argon_plasma 3000000')
    .outputFluids('gtceu:helium_plasma 750000')
    .outputFluids('gtceu:iron_plasma 550000')
    .outputFluids('gtceu:nickel_plasma 240000')
    .outputFluids('gtceu:nitrogen_plasma 7500000')
    .outputFluids('gtceu:oxygen_plasma 4500000')
    .outputFluids('gtceu:ultralight_neutronium_plasma 55000')
    .duration(72000)
    .EUt(GTValues.VA[GTValues.ZPM]);
})