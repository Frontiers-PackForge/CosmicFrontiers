ServerEvents.recipes(event => {
    const omniaTiers = [
        'lv',
        'mv',
        'hv',
        'ev',
        'iv',
        'luv',
        'zpm',
        'uv',
        'uhv',
        'uev',
        'uiv',
        'uxv',
        'opv'
    ]

    omniaTiers.forEach(tier => {
        event.recipes.gtceu.forming_press(`omnia_${tier}`)
            .itemInputs(`#gtceu:circuits/${tier}`)
            .itemOutputs(`cosmiccore:omnia_circuit_${tier}`)
            .circuit(27)
            .duration(10)
            .EUt(GTValues.VH[GTValues.LV])
    })

    // Hex Circuit Stuff

    event.recipes.gtceu.chemical_reactor('frontiers:circuits/hex/zano_aluminate')
        .itemInputs('4x gtceu:zanite_dust', '4x gtceu:ambrosium_dust')
        .inputFluids('576x gtceu:aluminium')
        .itemOutputs('12x gtceu:zano_aluminate_dust')
        .duration(390)
        .EUt(GTValues.VA[GTValues.MV])

    

    event.recipes.cosmiccore.mana_etching('frontiers:circuits/hex/runic_hex_cpu_wafer')
        .notConsumableItem('malum:prismatic_focus_lens')
        .itemInputs('cosmiccore:livirock_aluminite_wafer', 'cosmiccore:energetic_aluminium_foil')
        .inputFluids('16x cosmiccore:nostium')
        .itemOutputs('cosmiccore:runic_hex_cpu_wafer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(320)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.cutter('frontiers:circuits/hex/runic_hex_cpu')
        .itemInputs('cosmiccore:runic_hex_cpu_wafer')
        .itemOutputs('4x cosmiccore:runic_hex_cpu')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(100)
        .EUt(GTValues.VH[GTValues.LV])

    event.recipes.cosmiccore.mana_etching('frontiers:circuits/hex/plastic_circuit_board')
        .itemInputs('4x ars_nouveau:magebloom_fiber', '2x gtceu:gold_foil')
        .inputFluids('144x gtceu:polyethylene')
        .itemOutputs('cosmiccore:plastic_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV])

    const etchants = [
        { fluid: 'iron_iii_chloride', amount: 250 },
        { fluid: 'sodium_persulfate', amount: 500 }
    ]

    etchants.forEach(etchant => {
        event.recipes.gtceu.large_chemical_reactor(`frontiers:circuits/hex/runewoven_plastic_circuit_board_${etchant.fluid}`)
            .notConsumableItem('cosmiccore:rune_conjunction_arklythar')
            .itemInputs('cosmiccore:plastic_circuit_board', '6x cosmiccore:energetic_aluminium_foil')
            .inputFluids(`${etchant.amount}x gtceu:${etchant.fluid}`)
            .itemOutputs('cosmiccore:runewoven_plastic_circuit_board')
            .cleanroom(CleanroomType.CLEANROOM)
            .duration(600)
            .EUt(GTValues.VA[GTValues.LV])
    })

    const removedHexRecipes = [
        'processor_mv',
        'processor_mv_soldering_alloy',
        'processor_mv_soc',
        'processor_mv_soc_soldering_alloy',
        'processor_assembly_hv',
        'processor_assembly_hv_soldering_alloy',
        'workstation_ev',
        'workstation_ev_soldering_alloy',
        'mainframe_iv',
        'mainframe_iv_soldering_alloy',
        'mainframe_iv_asmd',
        'mainframe_iv_asmd_soldering_alloy'
    ]

    removedHexRecipes.forEach(recipe => {
        event.remove({ id: `gtceu:circuit_assembler/${recipe}` })
    })

    const addHexCircuitRecipes = (name, inputs, output, duration, eut, tin, solderingAlloy) => {
        const solders = [
            ['tin', tin],
            ['soldering_alloy', solderingAlloy]
        ]

        solders.forEach(([solder, amount]) => {
            event.recipes.gtceu.circuit_assembler(`frontiers:circuits/hex/${name}_${solder}`)
                .itemInputs(inputs)
                .inputFluids(`${amount}x gtceu:${solder}`)
                .itemOutputs(output)
                .cleanroom(CleanroomType.CLEANROOM)
                .duration(duration)
                .EUt(eut)
        })
    }

    addHexCircuitRecipes(
        'processor_mv',
        [
            'cosmiccore:runewoven_plastic_circuit_board',
            'cosmiccore:runic_hex_cpu',
            '4x gtceu:smd_resistor',
            '4x gtceu:smd_transistor',
            '4x gtceu:smd_capacitor',
            '4x gtceu:fine_red_alloy_wire'
        ],
        '2x cosmiccore:hex_processor',
        200,
        GTValues.VA[GTValues.MV],
        144,
        72
    )

    addHexCircuitRecipes(
        'processor_assembly_hv',
        [
            'cosmiccore:runewoven_plastic_circuit_board',
            '2x cosmiccore:hex_processor',
            '4x gtceu:smd_inductor',
            '8x gtceu:smd_capacitor',
            '4x gtceu:ram_chip',
            '4x gtceu:fine_red_alloy_wire'
        ],
        'cosmiccore:hex_processor_assembly',
        200,
        GTValues.VA[GTValues.MV],
        288,
        144
    )

    addHexCircuitRecipes(
        'workstation_ev',
        [
            'cosmiccore:runewoven_plastic_circuit_board',
            '4x cosmiccore:hex_processor_assembly',
            '4x gtceu:smd_diode',
            '4x gtceu:ram_chip',
            '16x gtceu:fine_electrum_wire',
            '16x gtceu:terrasteel_bolt'
        ],
        'cosmiccore:hex_processor_supercomputer',
        400,
        GTValues.VA[GTValues.MV],
        288,
        144
    )

    addHexCircuitRecipes(
        'mainframe_iv',
        [
            '2x gtceu:galvanized_ethersteel_frame',
            '6x cosmiccore:hex_processor_supercomputer',
            '8x gtceu:smd_inductor',
            '16x gtceu:smd_capacitor',
            '16x gtceu:ram_chip',
            '64x gtceu:fine_soul_stained_steel_wire'
        ],
        'cosmiccore:hex_processor_mainframe',
        800,
        GTValues.VA[GTValues.HV],
        576,
        288
    )
})
