ServerEvents.recipes(event => {
    const alchemyRecipes = [
        ['adhesive', '6x embers:adhesive', ['2x minecraft:bone_meal', 'minecraft:clay_ball']],
        ['aluminum_crystal_seed', 'embers:aluminum_crystal_seed', ['3x gtceu:aluminium_ingot', '#embers:crystal_seeds']],
        ['ancient_motive_core', 'embers:ancient_motive_core', ['3x embers:archaic_brick', 'embers:ember_shard']],
        ['archaic_brick', '5x embers:archaic_brick', ['minecraft:soul_sand', '2x minecraft:clay_ball', 'embers:archaic_brick']],
        ['ashen_fabric', 'embers:ashen_fabric', ['2x #c:dusts/ash', '2x minecraft:string', '#minecraft:wool']],
        ['blasting_core', 'embers:blasting_core', ['3x #c:plates/iron', '#c:ingots/copper', 'minecraft:gunpowder']],
        ['catalytic_plug', 'embers:catalytic_plug', ['2x embers:fluid_pipe', '#c:glass_blocks/colorless', '#c:ingots/silver']],
        ['codebreaking_slate', 'embers:codebreaking_slate', ['embers:caminite_plate', '2x embers:archaic_brick', 'embers:ember_grit']],
        ['copper_crystal_seed', 'embers:copper_crystal_seed', ['3x #c:ingots/copper', '#embers:crystal_seeds']],
        ['ember_sightstone', 'embers:ember_sightstone', ['embers:focal_lens', 'create:polished_rose_quartz', 'aeronautics:end_stone_powder', '#c:plates/dawnstone', 'embers:ember_crystal']],
        ['entropic_enumerator', 'embers:entropic_enumerator', ['#c:ingots/copper', '#c:ingots/iron', '#c:ingots/gold', '#c:ingots/lead', '#c:ingots/silver', '#c:ingots/dawnstone', 'embers:ashen_tile']],
        ['explosion_charm', 'embers:explosion_charm', ['3x embers:archaic_brick', 'minecraft:leather', 'embers:ember_crystal_cluster']],
        ['explosion_pedestal', 'embers:explosion_pedestal', ['embers:explosion_charm', 'embers:alchemy_pedestal']],
        ['flame_barrier', 'embers:flame_barrier', ['3x #c:plates/dawnstone', '#c:ingots/silver', 'embers:ember_crystal']],
        ['focal_lens', 'embers:focal_lens', ['2x #c:plates/dawnstone', '2x #c:plates/silver', 'embers:ember_crystal']],
        ['glimmer_crystal', 'embers:glimmer_crystal', ['2x minecraft:gunpowder', '2x embers:ember_shard', '#c:gems/quartz']],
        ['gold_crystal_seed', 'embers:gold_crystal_seed', ['3x #c:ingots/gold', '#embers:crystal_seeds']],
        ['inflictor_gem', 'embers:inflictor_gem', ['#c:ingots/dawnstone', '3x #minecraft:coals', '#c:gems/diamond']],
        ['intelligent_apparatus', 'embers:intelligent_apparatus', ['2x #c:ingots/copper', '2x embers:archaic_circuit', '#c:plates/copper']],
        ['iron_crystal_seed', 'embers:iron_crystal_seed', ['3x #c:ingots/iron', '#embers:crystal_seeds']],
        ['isolated_materia', '4x embers:isolated_materia', ['#c:gems/quartz', 'minecraft:clay_ball', '#c:gems/lapis', '#c:ingots/iron']],
        ['lead_crystal_seed', 'embers:lead_crystal_seed', ['3x #c:ingots/lead', '#embers:crystal_seeds']],
        ['nickel_crystal_seed', 'embers:nickel_crystal_seed', ['3x #c:ingots/nickel', '#embers:crystal_seeds']],
        ['nonbeliever_amulet', 'embers:nonbeliever_amulet', ['embers:eldritch_insignia', '2x embers:archaic_circuit', 'embers:archaic_brick', 'embers:ashen_amulet']],
        ['shifting_scales', 'embers:shifting_scales', ['5x #c:plates/lead', 'embers:ashen_fabric']],
        ['silver_crystal_seed', 'embers:silver_crystal_seed', ['3x #c:ingots/silver', '#embers:crystal_seeds']],
        ['tin_crystal_seed', 'embers:tin_crystal_seed', ['3x #c:ingots/tin', '#embers:crystal_seeds']],
        ['tyrfing', 'embers:tyrfing', ['#c:storage_blocks/coal', 'minecraft:obsidian', '2x #c:ingots/lead', 'gtceu:steel_sword']],
        ['winding_gears', 'embers:winding_gears', ['4x #c:plates/dawnstone', '#c:ingots/dawnstone']],
        ['zinc_crystal_seed', 'embers:zinc_crystal_seed', ['3x #c:ingots/zinc', '#embers:crystal_seeds']]
    ]

    alchemyRecipes.forEach(([id, output, inputs]) => {
        event.recipes.cosmiccore.dawn_forge(`frontiers:dawn_${id}`)
            .itemInputs(inputs)
            .itemOutputs(output)
            .input('cosmiccore:ember', 500)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV], 2)
    })
})
