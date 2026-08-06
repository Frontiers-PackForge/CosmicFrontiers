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
    event.recipes.gtceu.mixer()
        .itemInputs('embers:ember_grit')
        .inputFluids('1000x embers:dwarven_oil')
        .inputFluids('250x gtceu:steam')
        .outputFluids('1000x gtceu:inert_cinder_gas')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(100)
    event.recipes.gtceu.assembler()
        .itemInputs('cosmiccore:mv_cogwork_magicapacitor', 'cosmiccore:mv_modular_frameworks', '3x cosmiccore:mv_cladding', '2x malum:soulwoven_silk')
        .itemOutputs('gtceu:mv_machine_casing')
        .inputFluids('144x gtceu:rubber')
        .EUt(GTValues.VA[GTValues.MV], 1)
        .duration(100)
    event.recipes.gtceu.mixer()
        .itemInputs('gtceu:aluminium_dust', '2x minecraft:redstone', '2x minecraft:glowstone_dust')
        .itemOutputs('5x cosmiccore:energetic_aluminium_dust')
        .EUt(GTValues.VA[GTValues.MV], 1)
        .duration(600)
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
    event.recipes.gtceu.assembler('frontiers:ae2/interface_mv')
        .itemInputs('4x cosmiccore:nostium_plate', '2x #gtceu:circuits/lv', '2x gtceu:lv_robot_arm', 'gtceu:mv_machine_hull')
        .itemOutputs('4x ae2:interface')
        .EUt(GTValues.VH[GTValues.MV], 1)
        .duration(300)
    event.recipes.gtceu.pyrolyse_oven()
        .itemInputs('16x #malum:runewood_logs')
        .circuit(20)
        .itemOutputs('20x malum:arcane_charcoal')
        .outputFluids('4000x embers:dwarven_oil')
        .EUt(GTValues.VA[GTValues.MV], 1)
        .duration(640)
    event.recipes.cosmiccore.vacuum_bubbler()
        .chancedInput('neovitae:cycling_catalyst', 2500)
        .inputFluids('1000x cosmiccore:biomana_slurry')
        .notConsumableFluid('1000x gtceu:ethanol')
        .outputFluids('1000x gtceu:potent_mana')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(100)
    event.recipes.cosmiccore.mana_leaching_tub()
        .itemInputs('cosmiccore:arcanite_dust')
        .itemOutputs('gtceu:terrasteel_dust')
        .inputFluids('1000x gtceu:potent_mana')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(1200)
    event.recipes.cosmiccore.arcane_crucible()
        .itemInputs('gtceu:terrasteel_dust', 'malum:raw_brilliance', 'malum:malignant_lead')
        .itemOutputs('gtceu:terrasteel_ingot')
        .inputFluids('500x gtceu:potent_mana')
        .input('cosmiccore:ember', 4000)
        .EUt(GTValues.VA[GTValues.MV], 1)
        .duration(300)
    event.recipes.gtceu.assembler()
        .itemInputs('cosmiccore:nostium_frame', '6x gtceu:chrysanthium_plate')
        .itemOutputs('cosmiccore:me_computation_bay_casing')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .circuit(6)
        .duration(100)
    event.recipes.gtceu.assembler()
        .itemInputs('cosmiccore:me_computation_bay_casing', '16x #gtceu:circuits/lv')
        .itemOutputs('cosmiccore:me_computation_core')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(100)
    event.recipes.gtceu.assembler()
        .itemInputs('cosmiccore:me_computation_bay_casing', '16x #gtceu:circuits/mv')
        .itemOutputs('cosmiccore:mv_me_computation_core')
        .EUt(GTValues.VA[GTValues.MV], 1)
        .duration(100)
    event.recipes.cosmiccore.arcane_crucible()
        .itemInputs('4x gtceu:stainless_steel_ingot', '2x gtceu:terrasteel_ingot', '4x gtceu:zano_aluminate_dust')
        .itemOutputs('8x gtceu:galvanized_ethersteel_ingot', '5x gtceu:alumina_dust', '2x gtceu:electrum_ingot')
        .input('cosmiccore:ember', 4000)
        .EUt(GTValues.VA[GTValues.MV], 1)
        .duration(600)
    event.recipes.cosmiccore.biomana_digestor()
        .itemInputs('16x cosmiccore:blue_algae', '16x cosmiccore:green_algae', '16x cosmiccore:red_algae')
        .inputFluids('250x gtceu:benzene')
        .inputFluids('16000x gtceu:distilled_water')
        .outputFluids('16001x cosmiccore:biomana_slurry')
        .biopowerInput(4)
        .bloomwyrmChargeInput(25)
        .maxCampusParallel(16)
        .EUt(GTValues.VA[GTValues.MV], 1)
        .duration(1200)
    event.recipes.gtceu.assembler()
        .itemInputs('4x malum:soul_stained_steel_plating', '4x gtceu:aluminium_plate')
        .itemOutputs('cosmiccore:soul_stained_steel_aluminium_plated_casing')
        .circuit(6)
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(100)
    event.recipes.ars_nouveau.enchanting_apparatus(['cosmiccore:soul_stained_steel_aluminium_plated_casing', 'cosmiccore:soul_stained_steel_aluminium_plated_casing', 'cosmiccore:soul_stained_steel_aluminium_plated_casing', 'cosmiccore:soul_stained_steel_aluminium_plated_casing', 'gtceu:cupronickel_double_cable', 'gtceu:cupronickel_double_cable', '#gtceu:circuits/mv', '#gtceu:circuits/mv'], ['neovitae:ara_vitae'], 'cosmiccore:arcane_crucible', 20000, true)
    event.shaped('cosmiccore:soul_stained_steel_aluminium_plated_casing', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:aluminium_plate', B: 'malum:soul_stained_steel_plating', C: '#gtceu:crafting_tools/hammer' })
    event.shaped('cosmiccore:mv_ember_input_hatch', ['ABA', 'CDC', 'ABA'], { A: 'cosmiccore:double_nostium_plate', B: 'cosmiccore:energetic_aluminium_foil', C: 'cosmiccore:lv_wildfire_core', D: 'gtceu:mv_machine_hull' })
    event.shaped('gtceu:mv_machine_hull', ['ABA', 'CDC', 'AEA'], { A: 'cosmiccore:energetic_aluminium_foil', B: 'gtceu:runed_steel_plate', C: 'gtceu:annealed_copper_single_cable', D: 'gtceu:mv_machine_casing', E: 'cosmiccore:small_nostium_spring' })
    event.shapeless('cosmiccore:mv_me_power_relay', ['cosmiccore:me_power_relay', 'gtceu:mv_diode'])
    event.shapeless('cosmiccore:me_power_relay', ['cosmiccore:me_power_relay', 'gtceu:lv_diode'])
    event.shaped('cosmiccore:me_computation_array', ['ABA', 'ACA', 'DED'], { A: 'cosmiccore:lightweight_dark_steel_casing', B: '#gtceu:circuits/mv', C: 'cosmiccore:me_computation_core', D: 'gtceu:cupronickel_double_cable', E: 'gtceu:mv_machine_hull' })
    event.shapeless('cosmiccore:me_computation_uplink', ['ae2:fluix_smart_cable', 'gtceu:mv_machine_hull'])
    event.shaped('ae2:wireless_receiver', [' A ', 'BCB', ' B '], { A: 'ae2:fluix_pearl', B: 'gtceu:double_stainless_steel_plate', C: 'gtceu:stainless_steel_frame' })
    event.shaped('ae2:wireless_access_point', [' A ', 'BCB', 'DED'], { A: 'ae2:wireless_receiver', B: 'ae2:fluix_pearl', C: 'ae2:energy_cell', D: 'ae2:fluix_smart_dense_cable', E: 'cosmiccore:energetic_aluminium_frame' })
    event.shaped('ae2:controller', ['ABA', 'CDC', 'ABA'], { A: 'gtceu:double_stainless_steel_plate', B: '#gtceu:circuits/mv', C: 'gtceu:annealed_copper_quadruple_cable', D: 'gtceu:mv_machine_hull' })
        .id('frontiers:ae2/controller_mv')
    event.shaped('2x cosmiccore:mv_cladding', ['ABA', 'BCB', 'ABA'], { A: 'cosmiccore:energetic_aluminium_bolt', B: 'gtceu:rubber_foil', C: 'gtceu:stone_plate' })
    event.shaped('3x cosmiccore:mv_modular_frameworks', ['ABA', 'BCB', 'ABA'], { A: 'cosmiccore:energetic_aluminium_bolt', B: 'cosmiccore:nostium_rod', C: 'cosmiccore:small_nostium_gear' })
    event.shaped('4x cosmiccore:mv_cogwork_magicapacitor', ['ABA', 'CDC', 'ABA'], { A: 'cosmiccore:nostium_plate', B: 'malum:mnemonic_fragment', C: 'cosmiccore:energetic_aluminium_foil', D: '#gtceu:circuits/lv' })
    event.shaped('gtceu:mv_machine_casing', ['ABA', 'CDC', 'ACA'], { A: 'malum:soulwoven_silk', B: 'cosmiccore:mv_cogwork_magicapacitor', C: 'cosmiccore:mv_cladding', D: 'cosmiccore:mv_modular_frameworks' })
})
