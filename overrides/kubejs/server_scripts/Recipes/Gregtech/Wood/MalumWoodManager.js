// Malum has more block sets than other mods for its woods, hence the use of a seperate file for it
// Also a lot (BUT NOT ALL FOR SOME REASON) of block ids follow the format type_planks_block
// instead of type_block, so its a bit annoying

const malumWoods = [
    'soulwood',
    'runewood'
]

// 'type' is replaced by the wood type
const malumDecorPlanks = [
    'type_planks',
    'type_boards',
    'vertical_type_boards',
    'vertical_type_planks',
    'type_tiles',
    'rustic_type_planks',
    'vertical_rustic_type_planks',
    'rustic_type_tiles',
]

ServerEvents.recipes(event => {
    malumWoods.forEach(wood => {
        event.remove({ output: `malum:${wood}_door` })
        event.shaped(`2x malum:${wood}_door`, [
            'PTD',
            'PRS',
            'PPW'
        ], {
            P: `#malum:${wood}_planks`,
            T: `malum:${wood}_trapdoor`,
            W: `#forge:tools/saws`,
            S: 'gtceu:iron_screw',
            R: 'gtceu:iron_ring',
            D: '#forge:tools/screwdrivers',
        }).id(`cosmicfrontiers:${wood}_door`)
        event.recipes.gtceu.assembler(`cosmicfrontiers:${wood}_door`)
        .itemInputs([`5x #malum:${wood}_planks`])
        .itemOutputs(`3x malum:${wood}_door`)
        .inputFluids('gtceu:iron 16')
        .circuit(3)
        .duration(100)
        .EUt(4);

        event.remove({ id: `malum:solid_${wood}_trapdoor` })
        event.shaped(`2x malum:solid_${wood}_trapdoor`, [
            'PPP',
            'PPP'
        ], {
            P: `#malum:${wood}_slabs`
        }).id(`cosmicfrontiers:solid_${wood}_trapdoor`)
        event.recipes.gtceu.assembler(`cosmicfrontiers:solid_${wood}_trapdoor`)
        .itemInputs(`3x #malum:${wood}_slabs`)
        .itemOutputs(`3x malum:solid_${wood}_trapdoor`)
        .circuit(6)
        .duration(100)
        .EUt(4);

        event.remove({ output: `malum:${wood}_planks_fence` })
        event.recipes.gtceu.assembler(`cosmicfrontiers:${wood}_planks_fence`)
        .itemInputs(`#malum:${wood}_planks`)
        .itemOutputs(`malum:${wood}_planks_fence`)
        .circuit(1)
        .duration(100)
        .EUt(4);
        event.shaped(`malum:${wood}_planks_fence`, [
            'PSP',
            'PSP',
            'PSP'
        ], {
            P: `#malum:${wood}_planks`,
            S: `#forge:rods/wooden`
        }).id(`cosmicfrontiers:${wood}_planks_fence`)
        

        event.remove({ output: `malum:${wood}_planks_fence_gate` })
        event.shaped(`2x malum:${wood}_planks_fence_gate`, [
            'QWQ',
            'SPS',
            'SPS'
        ], {
            P: `#malum:${wood}_planks`,
            S: `#forge:rods/wooden`,
            W: `#forge:tools/screwdrivers`,
            Q: `gtceu:iron_screw`
        }).id(`cosmicfrontiers:${wood}_planks_fence_gate`)

        event.shaped(`2x malum:${wood}_planks_fence_gate`, [
            'Q Q',
            'SPS',
            'SPS'
        ],
        {
            P: `#malum:${wood}_planks`,
            S: `#forge:rods/wooden`,
            Q: `minecraft:flint`
        }).id(`cosmicfrontiers:${wood}_planks_fence_alt`)
        event.recipes.gtceu.assembler(`cosmicfrontiers:${wood}_planks_fence_gate`)
        .itemInputs([`2x #malum:${wood}_planks`, "2x #forge:rods/wooden"])
        .itemOutputs(`malum:${wood}_planks_fence_gate`)
        .circuit(2)
        .duration(100)
        .EUt(4);

        event.remove({ output: `malum:${wood}_planks_pressure_plate` })
        event.recipes.gtceu.cutter(`cosmicfrontiers:${wood}_planks_pressure_plate`)
        .itemInputs(`#malum:${wood}_slabs`)
        .itemOutputs(`4x malum:${wood}_planks_pressure_plate`)
        .duration(100)
        .EUt(4);
        event.shaped(`2x malum:${wood}_planks_pressure_plate`, [
            'S',
            'P'
        ], {
            P: `#malum:${wood}_slabs`,
            S: `#forge:tools/saws`
        }).id(`cosmicfrontiers:${wood}_planks_pressure_plate`)

        event.remove({ output: `malum:${wood}_planks_button` })
        event.recipes.gtceu.cutter(`cosmicfrontiers:${wood}_planks_button`)
        .itemInputs(`malum:${wood}_pressure_plate`)
        .itemOutputs(`4x malum:${wood}_planks_button`)
        .duration(100)
        .EUt(4);
        event.shaped(`2x malum:${wood}_planks_button`, [
            'S',
            'P'
        ], {
            P: `malum:${wood}_planks_pressure_plate`,
            S: `#forge:tools/saws`
        }).id(`cosmicfrontiers:${wood}_planks_button`)

        event.remove({ output: `malum:${wood}_boat` })
        event.recipes.gtceu.assembler(`cosmicfrontiers:${wood}_boat`)
        .itemInputs(`5x #malum:${wood}_planks`)
        .itemOutputs(`malum:${wood}_boat`)
        .circuit(15)
        .duration(100)
        .EUt(4);
        event.shaped(`malum:${wood}_boat`, [
            'SWS',
            'SKS',
            'PPP'
        ], {
            P: `#malum:${wood}_planks`,
            S: `#malum:${wood}_slabs`,
            K: `#forge:tools/knives`,
            W: `#forge:tools/shovels`
        }).id(`cosmicfrontiers:${wood}_boat`)
        
        malumDecorPlanks.forEach(decorType => {
            let block = decorType.replace('type', wood)
            
            event.recipes.gtceu.assembler(`cosmicfrontiers:${block}_stairs`)
            .itemInputs(`3x malum:${block}`)
            .itemOutputs(`4x malum:${block}_stairs`)
            .circuit(7)
            .duration(100)
            .EUt(4);
            
            event.remove({ output: `malum:${block}_slab` })
            event.shaped(`2x malum:${block}_slab`, [
                'SP'
            ], {
                S: '#forge:tools/saws',
                P: `malum:${block}`
            }).id(`cosmicfrontiers:${block}_slab`)
            event.recipes.gtceu.cutter(`cosmicfrontiers:${block}_slab_cutting`)
            .itemInputs(`malum:${block}`)
            .itemOutputs(`2x malum:${block}_slab`)
            .duration(100)
            .EUt(4);
        })
    })
})