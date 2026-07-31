ServerEvents.recipes(event => {
    event.replaceInput(
        { output: 'gtceu:mv_electric_motor' },
        'gtceu:aluminium_rod',
        'cosmiccore:nostium_rod'
    )
    event.replaceInput(
        { output: 'gtceu:mv_electric_motor' },
        'gtceu:magnetic_steel_rod',
        'gtceu:magnetic_runed_steel_rod'
    )
    event.replaceInput(
        { output: 'gtceu:mv_electric_motor' },
        'gtceu:copper_single_cable',
        'gtceu:copper_double_cable'
    )

    event.replaceInput(
        { output: 'gtceu:mv_conveyor_module' },
        'gtceu:copper_single_cable',
        'gtceu:copper_double_cable'
    )

    event.replaceInput(
        { output: 'gtceu:mv_robot_arm' },
        'gtceu:aluminium_rod',
        'cosmiccore:nostium_rod'
    )
    event.replaceInput(
        { output: 'gtceu:mv_robot_arm' },
        'gtceu:copper_single_cable',
        'gtceu:copper_double_cable'
    )

    event.replaceInput(
        { output: 'gtceu:mv_electric_pump' },
        'gtceu:copper_single_cable',
        'gtceu:copper_double_cable'
    )

    event.replaceInput(
        { output: 'gtceu:mv_electric_piston' },
        'gtceu:aluminium_rod',
        'cosmiccore:nostium_rod'
    )
    event.replaceInput(
        { output: 'gtceu:mv_electric_piston' },
        'gtceu:aluminium_plate',
        'cosmiccore:nostium_plate'
    )
    event.replaceInput(
        { output: 'gtceu:mv_electric_piston' },
        'gtceu:small_aluminium_gear',
        'cosmiccore:small_nostium_gear'
    )
    event.replaceInput(
        { output: 'gtceu:mv_electric_piston' },
        'gtceu:copper_single_cable',
        'gtceu:copper_double_cable'
    )

    event.recipes.gtceu.assembler()
        .itemInputs('cosmiccore:mv_cogwork_magicapacitor', 'cosmiccore:mv_modular_frameworks', '3x cosmiccore:mv_cladding', '2x malum:soulwoven_silk')
        .itemOutputs('gtceu:mv_machine_casing')
        .inputFluids('144x gtceu:rubber')
        .EUt(GTValues.VA[GTValues.MV], 1)
        .duration(100)

    event.recipes.gtceu.assembler()
        .itemInputs('gtceu:lv_machine_casing', '4x gtceu:bronze_foil', '2x gtceu:tin_single_cable')
        .itemOutputs('gtceu:lv_machine_hull')
        .inputFluids('288x gtceu:polyethylene')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(100)
    event.recipes.gtceu.assembler()
        .itemInputs('gtceu:mv_machine_casing', '2x cosmiccore:energetic_aluminium_foil', '2x gtceu:annealed_copper_single_cable')
        .itemOutputs('gtceu:mv_machine_hull')
        .inputFluids('576x gtceu:polyethylene')
        .EUt(GTValues.VA[GTValues.MV], 1)
        .duration(100)
        
    event.shaped('2x cosmiccore:mv_cladding', ['ABA', 'BCB', 'ABA'], { A: 'cosmiccore:energetic_aluminium_bolt', B: 'gtceu:rubber_foil', C: 'gtceu:stone_plate' })
    event.shaped('3x cosmiccore:mv_modular_frameworks', ['ABA', 'BCB', 'ABA'], { A: 'cosmiccore:energetic_aluminium_bolt', B: 'cosmiccore:nostium_rod', C: 'cosmiccore:small_nostium_gear' })
    event.shaped('4x cosmiccore:mv_cogwork_magicapacitor', ['ABA', 'CDC', 'ABA'], { A: 'cosmiccore:nostium_plate', B: 'malum:mnemonic_fragment', C: 'cosmiccore:energetic_aluminium_foil', D: '#gtceu:circuits/lv' })
    event.shaped('gtceu:mv_machine_casing', ['ABA', 'CDC', 'ACA'], { A: 'malum:soulwoven_silk', B: 'cosmiccore:mv_cogwork_magicapacitor', C: 'cosmiccore:mv_cladding', D: 'cosmiccore:mv_modular_frameworks' })
})
