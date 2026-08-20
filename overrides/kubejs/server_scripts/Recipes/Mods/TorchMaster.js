ServerEvents.recipes(event => {
    event.remove({ id: 'torchmaster:feral_flare_lantern' })
    event.shaped('torchmaster:feral_flare_lantern', [
        ' B ',
        'PGP',
        'HBS'
    ], {
        B: 'gtceu:brass_plate',
        P: 'gtceu:glass_plate',
        G: 'minecraft:glowstone_dust',
        H: '#c:tools/hammers',
        S: '#c:tools/screwdrivers'
    })

    event.remove({ id: 'torchmaster:megatorch' })
    event.shaped('torchmaster:megatorch', [
        'MCS',
        'RGR',
        'LDL'
    ], {
        R: 'gtceu:gold_ring',
        C: 'minecraft:coal_block',
        M: '#c:tools/mallets',
        L: 'gtceu:treated_wood_planks',
        S: '#c:tools/saws',
        G: 'minecraft:gold_block',
        D: 'malum:block_of_soul_stained_steel'
    })

    event.remove({ id: 'torchmaster:dreadlamp' })
    event.shaped('torchmaster:dreadlamp', [
        'HSD',
        'PGP',
        'ROR'
    ], {
        P: 'gtceu:glass_plate',
        G: 'minecraft:glowstone',
        R: 'gtceu:steel_rod',
        S: 'gtceu:steel_plate',
        O: 'minecraft:obsidian',
        H: '#c:tools/hammers',
        D: '#c:tools/screwdrivers'
    })

    event.remove({ id: 'torchmaster:frozen_pearl' })
    event.recipes.gtceu.chemical_bath('frontiers:frozen_pearl')
        .itemInputs(
            '#c:ender_pearls'
        )
        .inputFluids(
            Fluid.of('gtceu:ice', 576)
        )
        .itemOutputs(
            'torchmaster:frozen_pearl'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.LV]);
})
