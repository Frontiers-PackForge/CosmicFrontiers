
// RESIDUAL CODE, DO NOT EXPAND!


ServerEvents.recipes(event => {
    
    //Big Nuking of Recipes Section
    //Wooden Parts, Planks/Wood/Logs will need special treatment - that or i'm just too stupid with regex to figure it out quite yet. ~G
    //IDEALLY We'd like to regex by recipe ID here, might need to unskill issue my JS skills for that though... OR JUST UNDERSTAND THIS BETTER WAAAAH
    
    // //remove Trapdoors/Doors
    // event.remove({ id: /^(?!gtceu:)^(?!minecraft:)([^:]+):(.*)door$/ })
    // //remove fences
    // event.remove({ id: /^(?!gtceu:)([^:]+):(.*)fence$/ })
    // //fence gate
    // event.remove({ id: /^(?!gtceu:)([^:]+):(.*)fence_gate$/ })
    // //remove signs (hanging included)
    // event.remove({ id: /^(?!gtceu:)([^:]+):(.*)sign$/ })
    // //remove pressureplates
    // event.remove({ id: /^(?!gtceu:)([^:]+):(.*)_pressure_plate$/ })
    // //remove button
    // event.remove({ id: /^(?!gtceu:)([^:]+):(.*)_button$/ })
    // //Remove Boats
    // event.remove({ id: /^(?!gtceu:)([^:]+):(.*)_boat$/ })
    
    //Holy Shit Aether piss off already.
    
    event.remove('aether:skyroot_cartography_table')
    event.remove('aether:skyroot_fletching_table')
    event.remove('aether:skyroot_smithing_table')
    event.remove('aether:skyroot_grindstone')
    event.remove('aether:skyroot_grindstone_holystone_slab')
    event.remove('aether:skyroot_loom')
    event.remove('aether:skyroot_note_block')
    event.remove('aether:skyroot_beehive')
    event.remove('aether:skyroot_barrel')
    event.remove('aether:skyroot_tripwire_hook')
    event.remove('aether:skyroot_iron_vanilla_shield')
    event.remove('aether:skyroot_zanite_vanilla_shield')
    event.remove('aether:skyroot_stairs')
    event.remove('aether:skyroot_slab')
    event.remove('aether:skyroot_bed')
    event.remove('aether:skyroot_stick')
    event.remove('aether:skyroot_planks')
    event.remove('ars_nouveau:archwood_planks')
    event.remove('biomeswevegone:birch_planks_from_palo_verde_logs')
    event.remove('integrateddynamics:crafting/menril_planks')
    
    
    //DANGEROUS : WOOD PLANK REMOVALS - BY RECIPE - if something is broken attempt to check it against this matcher first
    // event.remove({ id: /^(?!gtceu:)([^:]+):(.*)_planks$/ })
    //It is too destructive to remove Slabs/stairs en-mass. and TBH we should be removing the recipes in the loop god this file FUCKING SUCKS.
    //forgive me for the sins im about to commit
    
    // woodType.forEach((woodType, index, recipe) => {
        //     var modID;
    //     if (index < 10) {
    //         modID = 'biomesoplenty'
    //     } else if (index >= 10 && index <= 14) {
    //         modID = 'deep_aether'
    //     } else if (index >= 15 && index <= 17) {
    //         modID = 'undergarden'
    //     } else if (index >= 18 && index <= 20) {
    //         modID = 'ad_astra'
    //     } else if (index === 21) {
    //         modID = 'integrateddynamics'
    //     } else if (index === 22) {
    //         modID = 'aether'
    //     } else if (index === 23) {
    //         modID = 'gtceu'
    //     } else if (index === 24) {
    //         modID = 'architects_palette'
    //     } else if (index >= 25 && index <= 48) {
    //         modID = 'biomeswevegone'
    //     } else if (index === 49) {
    //         modID = 'botania'
    //     }
    
    // })
})

ServerEvents.recipes(event => {
    // Can be obtained from two different log types
    event.shaped(`4x minecraft:birch_planks`, [
        'S',
        'L'
    ], {
        S: '#forge:tools/saws',
        L: '#biomeswevegone:palo_verde_logs'
    }).id(`cosmicfrontiers:birch_planks_from_palo_verde_logs_saw`)
    event.shapeless(
        '2x minecraft:birch_planks',
        '#biomeswevegone:palo_verde_logs'
    ).id(`cosmicfrontiers:birch_planks_from_palo_verde_logs`)
    event.recipes.gtceu.cutter('cosmicfrontiers:birch_planks_from_palo_verde_logs_cutting')
        .itemInputs('#biomeswevegone:palo_verde_logs')
        .itemOutputs(['6x minecraft:birch_planks', '2x gtceu:wood_dust'])
        .duration(200)
        .EUt(7);
    
    // Can be obtained from two different log types
    event.shaped(`4x aether:skyroot_planks`, [
        'S',
        'L'
    ], {
        S: '#forge:tools/saws',
        L: '#aether:crafts_skyroot_planks'
    }).id(`cosmicfrontiers:skyroot_planks_from_skyroot_logs_saw`)
    event.shapeless(
        '2x aether:skyroot_planks',
        '#aether:crafts_skyroot_planks'
    ).id(`cosmicfrontiers:skyroot_planks_from_skyroot_logs`)
    event.recipes.gtceu.cutter('cosmicfrontiers:skyroot_planks_cutting')
        .itemInputs('#aether:crafts_skyroot_planks')
        .itemOutputs(['6x aether:skyroot_planks', '2x gtceu:wood_dust'])
        .duration(200)
        .EUt(7);
    
    // Tag uses forge:logs/type format instead of modid:type_logs
    event.shaped(`4x ars_nouveau:archwood_planks`, [
        'S',
        'L'
    ], {
        S: '#forge:tools/saws',
        L: '#forge:logs/archwood'
    }).id(`cosmicfrontiers:archwood_planks_from_archwood_logs_saw`)
    event.shapeless(
        '2x ars_nouveau:archwood_planks',
        '#forge:logs/archwood'
    ).id(`cosmicfrontiers:archwood_planks_from_archwood_logs`)
    event.recipes.gtceu.cutter('cosmicfrontiers:archwood_planks_cutting')
        .itemInputs('#forge:logs/archwood')
        .itemOutputs(['6x ars_nouveau:archwood_planks', '2x gtceu:wood_dust'])
        .duration(200)
        .EUt(7);
    
    // Stair item IDs use type_planks_stairs instead of type_stairs
    event.recipes.gtceu.assembler(`cosmicfrontiers:menril_planks_stairs`)
        .itemInputs(`3x integrateddynamics:menril_planks`)
        .itemOutputs(`4x integrateddynamics:menril_planks_stairs`)
        .circuit(7)
        .duration(100)
        .EUt(4);

    // Stair item IDs use type_planks_stairs instead of type_stairs
    event.recipes.gtceu.assembler(`cosmicfrontiers:shimmerwood_planks_stairs`)
        .itemInputs(`3x botania:shimmerwood_planks`)
        .itemOutputs(`4x botania:shimmerwood_planks_stairs`)
        .circuit(7)
        .duration(100)
        .EUt(4);
    
    // Slab item IDs use type_planks_slab instead of type_slabs
    event.remove({ output: 'botania:shimmerwood_planks_slab' })
    event.shaped('2x botania:shimmerwood_planks_slab', [
        'SP'
    ], {
        S: '#forge:tools/saws',
        P: 'botania:shimmerwood_planks'
    }).id(`cosmicfrontiers:shimmerwood_planks_slab`)
    event.recipes.gtceu.cutter(`cosmicfrontiers:shimmerwood_planks_slab_cutting`)
        .itemInputs('botania:shimmerwood_planks')
        .itemOutputs('2x botania:shimmerwood_planks_slab')
        .duration(100)
        .EUt(4);

    event.recipes.gtceu.macerator(`archwood_pulping`)
        .itemInputs(`ars_nouveau:archwood_planks`)
        .itemOutputs('gtceu:wood_dust')
        .duration(100)
        .EUt(2);
    event.remove({ output: 'framedblocks:framed_chest' })
    event.shaped('framedblocks:framed_chest', [
        'LFL',
        'FSF',
        'LFL'
    ], {
        L: '#minecraft:logs',
        F: 'framedblocks:framed_cube',
        S: 'minecraft:flint'
    })
    
    //Farmer's Delight Signs
    event.recipes.gtceu.assembler(`farmersdelight:hanging_canvas_sign`)
        .itemInputs(['4x #minecraft:planks', '2x farmersdelight:canvas', 'minecraft:chain'])
        .itemOutputs(`2x farmersdelight:hanging_canvas_sign`)
        .circuit(4)
        .duration(100)
        .EUt(4);

    event.shaped(`2x farmersdelight:hanging_canvas_sign`, [
        'SRS',
        'PCP',
        'PCP'
    ], {
        P: `#minecraft:planks`,
        S: 'minecraft:chain',
        R: 'gtceu:iron_ring',
        C: 'farmersdelight:canvas'
    });

    event.recipes.gtceu.assembler(`farmersdelight:canvas_sign`)
        .itemInputs([`4x #minecraft:planks`, '2x farmersdelight:canvas', 'minecraft:stick'])
        .itemOutputs(`4x farmersdelight:canvas_sign`)
        .circuit(3)
        .duration(100)
        .EUt(4);

    event.shaped(`2x farmersdelight:canvas_sign`, [
        'PCP',
        'PCP',
        'FSW'
    ], {
        P: `#minecraft:planks`,
        W: `#forge:tools/saws`,
        S: 'minecraft:stick',
        F: '#forge:tools/files',
        C: 'farmersdelight:canvas'
    });

    colors.forEach((color) => {
        event.shapeless(`farmersdelight:${color}_canvas_sign`,
            [`minecraft:${color}_dye`, 'farmersdelight:canvas_sign']
        );
        event.shapeless(`farmersdelight:${color}_hanging_canvas_sign`,
            [`minecraft:${color}_dye`, 'farmersdelight:hanging_canvas_sign']
        )
        event.recipes.gtceu.assembler(`farmersdelight:${color}_canvas_sign`)
            .itemInputs(['farmersdelight:canvas_sign', `minecraft:${color}_dye`])
            .itemOutputs(`farmersdelight:${color}_canvas_sign`)
            .duration(100)
            .EUt(4);
        event.recipes.gtceu.assembler(`farmersdelight:${color}_hanging_canvas_sign`)
            .itemInputs(['farmersdelight:hanging_canvas_sign', `minecraft:${color}_dye`])
            .itemOutputs(`farmersdelight:${color}_hanging_canvas_sign`)
            .duration(100)
            .EUt(4);
    });
})