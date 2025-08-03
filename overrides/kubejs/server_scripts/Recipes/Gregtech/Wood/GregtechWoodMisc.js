
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

    event.remove({ id: 'gtceu:shapeless/rubber_wood_planks' })
    event.remove({ id: 'ars_nouveau:archwood_planks'})

    //Holy Shit Aether piss off already.

    event.remove({ id: 'aether:skyroot_cartography_table' })
    event.remove({ id: 'aether:skyroot_fletching_table' })
    event.remove({ id: 'aether:skyroot_smithing_table' })
    event.remove({ id: 'aether:skyroot_grindstone' })
    event.remove({ id: 'aether:skyroot_grindstone_holystone_slab' })
    event.remove({ id: 'aether:skyroot_loom' })
    event.remove({ id: 'aether:skyroot_note_block' })
    event.remove({ id: 'aether:skyroot_beehive' })
    event.remove({ id: 'aether:skyroot_barrel' })
    event.remove({ id: 'aether:skyroot_tripwire_hook' })
    event.remove({ id: 'aether:skyroot_iron_vanilla_shield' })
    event.remove({ id: 'aether:skyroot_zanite_vanilla_shield' })
    event.remove({ id: 'aether:skyroot_stairs' })
    event.remove({ id: 'aether:skyroot_slab' })
    event.remove({ id: 'minecraft:kjs/aether_skyroot_fence' })
    event.remove({ id: 'aether:skyroot_bed' })
    event.remove({ id: 'aether:skyroot_stick' })


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

    event.recipes.gtceu.cutter('archwood_cutting')
        .itemInputs('#forge:logs/archwood')
        .itemOutputs(['6x ars_nouveau:archwood_planks', '2x gtceu:wood_dust'])
        .duration(200)
        .EUt(7);
    event.shaped('4x ars_nouveau:archwood_planks', [
        'T',
        'P'
        ],
        {
            T: '#forge:tools/saws',
            P: '#forge:logs/archwood'
        })
    event.shapeless('2x ars_nouveau:archwood_planks', ['#forge:logs/archwood'])
})

ServerEvents.recipes(event => {
    //Door
    if (Item.exists(`ars_nouveau:archwood_door`)) {
        event.shaped(`2x ars_nouveau:archwood_door`, [
            'PTD',
            'PRS',
            'PPW'
        ],
            {
                P: `ars_nouveau:archwood_planks`,
                T: `ars_nouveau:archwood_trapdoor`,
                W: `#forge:tools/saws`,
                S: 'gtceu:iron_screw',
                R: 'gtceu:iron_ring',
                D: '#forge:tools/screwdrivers',
            })
        event.recipes.gtceu.assembler(`ars_nouveau:archwood_door`)
            .itemInputs([`5x ars_nouveau:archwood_planks`, `1x ars_nouveau:archwood_trapdoor`])
            .itemOutputs(`3x ars_nouveau:archwood_door`)
            .inputFluids('gtceu:iron 16')
            .circuit(3)
            .duration(100)
            .EUt(4);
    }
    //Trapdoor
    if (Item.exists(`ars_nouveau:archwood_trapdoor`)) {
        event.shaped(`2x ars_nouveau:archwood_trapdoor`, [
            '   ',
            'PPP',
            'PPP'
        ],
            {
                P: `ars_nouveau:archwood_slab`
            })
        event.recipes.gtceu.assembler(`ars_nouveau:archwood_trapdoor`)
            .itemInputs(`3x ars_nouveau:archwood_slab`)
            .itemOutputs(`3x ars_nouveau:archwood_trapdoor`)
            .circuit(6)
            .duration(100)
            .EUt(4);
    }
    //Sign
    if (Item.exists(`ars_nouveau:archwood_sign`)) {
        event.recipes.gtceu.assembler(`ars_nouveau:archwood_sign`)
            .itemInputs([`6x ars_nouveau:archwood_planks`, 'minecraft:stick'])
            .itemOutputs(`4x ars_nouveau:archwood_sign`)
            .circuit(3)
            .duration(100)
            .EUt(4);
        event.shaped(`2x ars_nouveau:archwood_sign`, [
            'PPP',
            'PPP',
            'FSW'
        ],
            {
                P: `ars_nouveau:archwood_planks`,
                W: `#forge:tools/saws`,
                S: 'minecraft:stick',
                F: '#forge:tools/files',
            })
    }
    //Sign
    if (Item.exists(`ars_nouveau:archwood_hanging_sign`)) {
        event.recipes.gtceu.assembler(`ars_nouveau:archwood_hanging_sign`)
            .itemInputs([`6x ars_nouveau:archwood_planks`, 'minecraft:chain'])
            .itemOutputs(`ars_nouveau:archwood_hanging_sign`)
            .circuit(4)
            .duration(100)
            .EUt(4);
        event.shaped(`2x ars_nouveau:archwood_hanging_sign`, [
            'SRS',
            'PPP',
            'PPP'
        ],
            {
                P: `ars_nouveau:archwood_planks`,
                S: 'minecraft:chain',
                R: 'gtceu:iron_ring'
            })
    }
    //Pressureplate 
    if (Item.exists(`ars_nouveau:archwood_pressure_plate`)) {
        event.recipes.gtceu.cutter(`ars_nouveau:archwood_pressure_plate`)
            .itemInputs(`ars_nouveau:archwood_slab`)
            .itemOutputs(`4x ars_nouveau:archwood_pressure_plate`)
            .duration(100)
            .EUt(4);
        event.shaped(`2x ars_nouveau:archwood_pressure_plate`, [
            '   ',
            ' S ',
            ' P '
        ],
            {
                P: `ars_nouveau:archwood_slab`,
                S: `#forge:tools/saws`
            })
    }
    //Button 
    if (Item.exists(`ars_nouveau:archwood_button`)) {
        event.recipes.gtceu.cutter(`ars_nouveau:archwood_button`)
            .itemInputs(`ars_nouveau:archwood_pressure_plate`)
            .itemOutputs(`4x ars_nouveau:archwood_button`)
            .duration(100)
            .EUt(4);
        event.shaped(`2x ars_nouveau:archwood_button`, [
            '   ',
            ' S ',
            ' P '
        ],
            {
                P: `ars_nouveau:archwood_pressure_plate`,
                S: `#forge:tools/saws`
            })
    }
    //BOAT 
    if (Item.exists(`ars_nouveau:archwood_boat`)) {
        event.recipes.gtceu.assembler(`ars_nouveau:archwood_planks`)
            .itemInputs(`5x ars_nouveau:archwood_planks`)
            .itemOutputs(`4x ars_nouveau:archwood_boat`)
            .duration(100)
            .EUt(4);
        event.shaped(`2x ars_nouveau:archwood_button`, [
            'S S',
            'S S',
            'PPP '
        ],
            {
                P: `ars_nouveau:archwood_planks`,
                S: `ars_nouveau:archwood_slab`,
                K: `forge:tools/knives`,
                W: `#forge:tools/shovels`
            })
    }
    //CHEST-BOAT
    if (Item.exists(`ars_nouveau:archwood_chest_boat`)) {
        event.shapeless(`ars_nouveau:archwood_chest_boat`, [
            `ars_nouveau:archwood_boat`,
            `minecraft:chest`
        ])
    }
    //FENCE
    if (Item.exists(`ars_nouveau:archwood_fence`)) {
        event.recipes.gtceu.assembler(`ars_nouveau:archwood_fence`)
            .itemInputs(`ars_nouveau:archwood_planks`)
            .itemOutputs(`ars_nouveau:archwood_fence`)
            .circuit(1)
            .duration(100)
            .EUt(4);
        event.shaped(`ars_nouveau:archwood_fence`, [
            'PSP',
            'PSP',
            'PSP'
        ],
            {
                P: `ars_nouveau:archwood_planks`,
                S: `minecraft:stick`
            })
    }
    //FENCEGATE
    if (Item.exists(`ars_nouveau:archwood_fence_gate`)) {
        event.shaped(`2x ars_nouveau:archwood_fence_gate`, [
            'QWQ',
            'SPS',
            'SPS'
        ],
            {
                P: `ars_nouveau:archwood_planks`,
                S: `minecraft:stick`,
                W: `#forge:tools/screwdrivers`,
                Q: `gtceu:iron_screw`
            })
        event.shaped(`2x ars_nouveau:archwood_fence_gate`, [
            'Q Q',
            'SPS',
            'SPS'
        ],
            {
                P: `ars_nouveau:archwood_planks`,
                S: `minecraft:stick`,
                Q: `minecraft:flint`
            })
        event.recipes.gtceu.assembler(`ars_nouveau:archwood_fence_gate`)
            .itemInputs([`2x ars_nouveau:archwood_planks`, "2x minecraft:stick"])
            .itemOutputs(`ars_nouveau:archwood_fence_gate`)
            .circuit(2)
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
    }

    // Farmer's Delight Signs
    if (Item.exists(`ars_nouveau:archwood_sign`)) {
        event.recipes.gtceu.assembler(`ars_nouveau:archwood_sign`)
            .itemInputs([`6x ars_nouveau:archwood_planks`, 'minecraft:stick'])
            .itemOutputs(`4x ars_nouveau:archwood_sign`)
            .circuit(3)
            .duration(100)
            .EUt(4);
        event.shaped(`2x ars_nouveau:archwood_sign`, [
            'PPP',
            'PPP',
            'FSW'
        ],
            {
                P: `ars_nouveau:archwood_planks`,
                W: `#forge:tools/saws`,
                S: 'minecraft:stick',
                F: '#forge:tools/files',
            })
    }
    //Farm's Delight Signs
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
    ],
        {
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
    ],
        {
            P: `#minecraft:planks`,
            W: `#forge:tools/saws`,
            S: 'minecraft:stick',
            F: '#forge:tools/files',
            C: 'farmersdelight:canvas'
        });
    ['white', 'light_gray', 'gray', 'black', 'brown', 'red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink'].forEach((color) => {
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