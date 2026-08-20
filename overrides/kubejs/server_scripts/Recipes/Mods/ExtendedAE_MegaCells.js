const frontiersExtendedAeMatrixBlocks = [
    'extendedae:assembler_matrix_frame',
    'extendedae:assembler_matrix_wall',
    'extendedae:assembler_matrix_pattern',
    'extendedae:assembler_matrix_crafter',
    'extendedae:assembler_matrix_speed',
    'extendedae:assembler_matrix_glass'
]

const frontiersMegaCellTiers = [
    {
        size: '1m',
        wire: 'gtceu:fine_yttrium_barium_cuprate_wire',
        plate: 'gtceu:naquadah_alloy_plate',
        circuit: 'luv',
        voltage: GTValues.LuV
    },
    {
        size: '4m',
        wire: 'gtceu:fine_naquadah_wire',
        plate: 'gtceu:tritanium_plate',
        circuit: 'zpm',
        voltage: GTValues.ZPM
    },
    {
        size: '16m',
        wire: 'gtceu:fine_uranium_rhodium_dinaquadide_wire',
        plate: 'gtceu:neutronium_plate',
        circuit: 'uv',
        voltage: GTValues.UV
    },
    {
        size: '64m',
        wire: 'cosmiccore:fine_living_igniclad_wire',
        plate: 'cosmiccore:psionic_galvorn_plate',
        circuit: 'uhv',
        voltage: GTValues.UHV
    },
    {
        size: '256m',
        wire: 'cosmiccore:fine_psionic_galvorn_wire',
        plate: 'cosmiccore:programmable_matter_plate',
        circuit: 'uev',
        voltage: GTValues.UEV
    }
]

ServerEvents.recipes(event => {
    frontiersExtendedAeMatrixBlocks.forEach(block => event.remove({ output: block }))

    event.remove({ id: 'extendedae:assembler/wireless_connector' })
    event.remove({ id: 'megacells:transform/sky_bronze_ingot' })
    event.remove({ id: 'megacells:transform/sky_osmium_ingot' })
    event.remove({ id: 'megacells:transform/sky_steel_ingot' })
    event.remove({ id: 'extendedae:assembler/sky_bronze' })
    event.remove({ id: 'extendedae:assembler/sky_osmium' })
    event.remove({ id: 'extendedae:assembler/sky_steel' })

    event.recipes.gtceu.assembler('frontiers:assembler_matrix_frame')
        .itemInputs('4x gtceu:plascrete', 'gtceu:palladium_plate', 'gtceu:platinum_plate', 'gtceu:blue_steel_frame', '#gtceu:circuits/hv')
        .itemOutputs('extendedae:assembler_matrix_frame')
        .duration(350)
        .EUt(GTValues.V[GTValues.EV], 4)

    event.recipes.gtceu.assembler('frontiers:assembler_matrix_wall')
        .itemInputs('4x gtceu:plascrete', 'gtceu:palladium_plate', 'gtceu:platinum_plate', 'ae2:fluix_smart_dense_cable', 'gtceu:dense_steel_plate')
        .itemOutputs('extendedae:assembler_matrix_wall')
        .duration(350)
        .EUt(GTValues.V[GTValues.EV], 4)

    event.recipes.gtceu.assembler('frontiers:assembler_matrix_pattern')
        .itemInputs('4x gtceu:plascrete', 'extendedae:ex_pattern_provider', '#gtceu:circuits/ev')
        .itemOutputs('extendedae:assembler_matrix_pattern')
        .duration(350)
        .EUt(GTValues.V[GTValues.EV], 4)

    event.recipes.gtceu.assembler('frontiers:assembler_matrix_crafter')
        .itemInputs('4x gtceu:plascrete', 'ae2:cell_component_16k', '#gtceu:circuits/ev')
        .itemOutputs('extendedae:assembler_matrix_crafter')
        .duration(350)
        .EUt(GTValues.V[GTValues.EV], 4)

    event.recipes.gtceu.assembler('frontiers:assembler_matrix_speed')
        .itemInputs('4x gtceu:plascrete', '8x ae2:speed_card', 'ae2:cell_component_64k', '#gtceu:circuits/ev')
        .itemOutputs('extendedae:assembler_matrix_speed')
        .duration(350)
        .EUt(GTValues.V[GTValues.EV], 4)

    event.recipes.gtceu.assembler('frontiers:assembler_matrix_glass')
        .itemInputs('extendedae:assembler_matrix_wall', 'gtceu:laminated_glass')
        .itemOutputs('extendedae:assembler_matrix_glass')
        .duration(350)
        .EUt(GTValues.V[GTValues.EV], 4)

    event.shaped('2x extendedae:wireless_connect', [
        'RDE',
        'QHQ',
        'SDR'
    ], {
        R: 'ae2:wireless_receiver',
        D: 'ae2:fluix_smart_dense_cable',
        E: 'gtceu:luv_emitter',
        H: 'gtceu:luv_machine_hull',
        Q: 'ae2wtlib:quantum_bridge_card',
        S: 'gtceu:luv_sensor'
    }).id('frontiers:extendedae/wireless_connector')

    event.remove({ output: 'megacells:mega_item_cell_housing' })
    event.remove({ output: 'megacells:mega_fluid_cell_housing' })

    event.recipes.gtceu.assembler('frontiers:mega_item_cell_housing')
        .itemInputs('3x gtceu:naquadah_alloy_plate', '2x gtceu:fusion_glass', '2x gtceu:hssg_single_cable', '4x ae2:formation_core', '4x ae2:annihilation_core')
        .inputFluids('576x gtceu:polybenzimidazole')
        .itemOutputs('megacells:mega_item_cell_housing')
        .duration(80)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.assembler('frontiers:mega_fluid_cell_housing')
        .itemInputs('3x gtceu:trinium_plate', '2x gtceu:fusion_glass', '2x gtceu:hssg_single_cable', '4x ae2:formation_core', '4x ae2:annihilation_core')
        .inputFluids('576x gtceu:polybenzimidazole')
        .itemOutputs('megacells:mega_fluid_cell_housing')
        .duration(80)
        .EUt(GTValues.VA[GTValues.LuV])

    frontiersMegaCellTiers.forEach(tier => {
        event.remove({ output: `megacells:cell_component_${tier.size}` })
        event.remove({ output: `megacells:item_storage_cell_${tier.size}` })
        event.remove({ output: `megacells:fluid_storage_cell_${tier.size}` })

        event.recipes.gtceu.assembler(`frontiers:cell_component_${tier.size}`)
            .itemInputs(`32x ${tier.wire}`, `4x #gtceu:circuits/${tier.circuit}`, `4x ${tier.plate}`, 'ae2:formation_core', 'ae2:annihilation_core')
            .inputFluids('288x gtceu:redstone')
            .itemOutputs(`megacells:cell_component_${tier.size}`)
            .duration(100)
            .EUt(GTValues.VA[tier.voltage])

        event.shapeless(`megacells:item_storage_cell_${tier.size}`, [
            'megacells:mega_item_cell_housing',
            `megacells:cell_component_${tier.size}`
        ]).id(`frontiers:megacells/storage/item_cell_${tier.size}`)

        event.shapeless(`megacells:fluid_storage_cell_${tier.size}`, [
            'megacells:mega_fluid_cell_housing',
            `megacells:cell_component_${tier.size}`
        ]).id(`frontiers:megacells/storage/fluid_cell_${tier.size}`)
    })

})
