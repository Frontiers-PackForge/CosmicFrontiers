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
})
