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
        'minecraft:deepslate'
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

    event.recipes.gtceu.celestial_bore(`boremap_earth`)
        .notConsumable('ad_astra:earth_globe')
        .inputFluids('gtceu:prisma 1000000')
        .itemOutputs('gtceu:raw_nickel',
            'gtceu:raw_graphite',
            'gtceu:raw_diamond',
            'gtceu:raw_coal',
            'gtceu:raw_redstone',
            'gtceu:raw_lapis',
            'minecraft:raw_gold',
            'minecraft:raw_copper',
            'minecraft:raw_iron',
            'gtceu:raw_fullers_earth',
            'gtceu:raw_gypsum',
            'gtceu:raw_tin',
            'gtceu:raw_opal',
            'gtceu:raw_amethyst',
            'gtceu:raw_yellow_garnet',
            'gtceu:raw_red_garnet',
            'gtceu:raw_green_sapphire',
            'gtceu:raw_realgar',
            'gtceu:raw_tricalcium_phosphate',
            'gtceu:raw_apatite',
            'gtceu:raw_sulfur',
            'gtceu:raw_sphalerite',
            'gtceu:raw_cinnabar',
            'gtceu:raw_spodumene',
            'gtceu:raw_lepidolite',
            'gtceu:raw_salt',
            'gtceu:raw_rock_salt',
            'gtceu:raw_cobaltite',
            'gtceu:raw_nether_quartz',
            'gtceu:raw_quartzite',
            'gtceu:raw_certus_quartz',
            'gtceu:raw_barite',
            'gtceu:raw_asbestos',
            'gtceu:raw_cassiterite',
            'gtceu:raw_pyrochlore',
            'gtceu:raw_chromite',
            'gtceu:raw_saltpeter',
            'gtceu:raw_electrotine',
            'gtceu:raw_beryllium',
            'gtceu:raw_vanadium_magnetite',
            'gtceu:raw_tantalite',
            'gtceu:raw_pyrolusite',
            'gtceu:raw_calcite',
            'gtceu:raw_lead',
            'gtceu:raw_silver',
            'gtceu:raw_galena',
            'gtceu:raw_stibnite',
            'gtceu:raw_bauxite',
            'gtceu:raw_olivine',
            'gtceu:raw_almandine',
            'gtceu:raw_pyrope',
            'gtceu:raw_sapphire',
            'gtceu:raw_talc',
            'gtceu:raw_kyanite')
        .duration(36000)
        .EUt(GTValues.VA[GTValues.UHV]);
})