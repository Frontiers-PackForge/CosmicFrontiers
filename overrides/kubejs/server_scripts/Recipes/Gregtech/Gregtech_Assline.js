




ServerEvents.recipes(event => {
  event.remove({ id: 'gtceu:shaped/luv_machine_hull' })
  event.remove({ id: 'gtceu:assembler/hull_luv' })
  event.remove({ id: 'gtceu:assembler/casing_luv' })
  event.remove({ id: 'gtceu:shaped/casing_luv' })
  event.remove({ id: 'gtceu:shaped/casing_assembly_control' })

  event.replaceOutput({ id: 'gtceu:assembly_line/high_performance_computing_array' }, 'gtceu:high_performance_computation_array', 'cosmiccore:high_performance_computation_array')
  event.shaped('gtceu:assembly_line_casing', [
    'SMS',
    'DCD',
    'BDB'
  ], {
    S: 'gtceu:hpic_chip',
    C: 'gtceu:tungsten_carbide_frame',
    D: '#gtceu:circuits/zpm',
    B: 'gtceu:iv_electric_motor',
    M: 'cosmiccore:iv_radio_module'
  })
  event.recipes.gtceu.assembler('assembly_line_casing')
    .itemInputs(['gtceu:tungsten_carbide_frame', 'cosmiccore:iv_radio_module', '2x gtceu:hpic_chip', '2x gtceu:iv_electric_motor', '3x #gtceu:circuits/zpm'])
    .itemOutputs('gtceu:assembly_line_casing')
    .circuit(2)
    .duration(200)
    .EUt(GTValues.VA[GTValues.IV])
  event.recipes.gtceu.assembly_line('lunar_tapestry')
    .itemInputs(['gtceu:luv_scanner', '64x gtceu:computer_monitor_cover', '16x gtceu:lv_solar_panel', '8x kubejs:prismatic_lens', '8x gtceu:luv_sensor', '8x cosmiccore:luv_radio_module', '4x gtceu:luv_field_generator', '16x gtceu:uranium_rhodium_dinaquadide_double_wire', '16x gtceu:normal_optical_pipe'])
    .itemOutputs('gtceu:lunar_tapestry')
    .inputFluids(
      'gtceu:star_dew 16000',
      'cosmiccore:triphenylphosphine 8500',
      'gtceu:grading_fluid_2 16000'
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('occultism:chalk_red', '{Damage:0}')).EUt(GTValues.VA[GTValues.LuV]).duration(3200))
    .duration(1200)
    .EUt(GTValues.VA[GTValues.LuV])
  event.remove({ id: 'bloodmagic:ritual_diviner_0' })
  event.recipes.gtceu.assembly_line('inscriber_recipe')
    .itemInputs(['16x bloodmagic:infusedslate', 'botania:exchange_rod', Item.of('occultism:chalk_red', '{Damage:0}'), Item.of('occultism:chalk_purple', '{Damage:0}'), Item.of('occultism:chalk_gold', '{Damage:0}'), Item.of('occultism:chalk_white', '{Damage:0}'), Item.of('bloodmagic:airscribetool', '{Damage:0}'), Item.of('bloodmagic:firescribetool', '{Damage:0}'), Item.of('bloodmagic:waterscribetool', '{Damage:0}'), Item.of('bloodmagic:earthscribetool', '{Damage:0}')])
    .itemOutputs('bloodmagic:ritualdiviner')
    .inputFluids(
      'gtceu:4_4_oxydianiline_pyromellitimide 9216',
      'gtceu:grading_fluid_1 32000',
      'gtceu:grading_fluid_2 16000'
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('occultism:chalk_red', '{Damage:0}')).EUt(GTValues.VA[GTValues.LuV]).duration(3200))
    .duration(1200)
    .EUt(GTValues.VA[GTValues.LuV])

  event.recipes.gtceu.assembly_line('luv_hull_assline')
    .itemInputs(['gtceu:iridium_frame', '16x gtceu:rhodium_plated_palladium_plate', '8x cosmiccore:double_prismatic_tungstensteel_plate', '16x gtceu:osmiridium_screw', '#gtceu:circuits/hv', '2x gtceu:niobium_titanium_quadruple_cable'])
    .itemOutputs('gtceu:luv_machine_hull')
    .inputFluids(
      Fluid.of('cosmiccore:prisma', 576),
      Fluid.of('gtceu:silicone_rubber', 1152),
      Fluid.of('gtceu:styrene_butadiene_rubber', 1152),
      Fluid.of('gtceu:soldering_alloy', 1152),
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:iv_machine_hull')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(300)
    .EUt(GTValues.VA[GTValues.LuV])
  event.recipes.gtceu.assembly_line('luv_hull_assline_casing')
    .itemInputs(['gtceu:luv_machine_casing', '8x gtceu:rhodium_plated_palladium_plate', '4x cosmiccore:double_prismatic_tungstensteel_plate', '8x gtceu:osmiridium_screw', '#gtceu:circuits/hv', '2x gtceu:niobium_titanium_quadruple_cable'])
    .itemOutputs('gtceu:luv_machine_hull')
    .inputFluids(
      Fluid.of('cosmiccore:prisma', 576),
      Fluid.of('gtceu:silicone_rubber', 1152),
      Fluid.of('gtceu:styrene_butadiene_rubber', 1152),
      Fluid.of('gtceu:soldering_alloy', 1152),
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:iv_machine_hull')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(300)
    .EUt(GTValues.VA[GTValues.LuV])

  //LUV MOTOR
  event.remove({ id: 'gtceu:assembly_line/electric_motor_luv' })
  event.recipes.gtceu.assembly_line('luv_new_motor')
    .itemInputs(['gtceu:long_magnetic_samarium_rod', '4x cosmiccore:long_resonant_virtue_meld_rod', '2x cosmiccore:resonant_virtue_meld_ring', '4x cosmiccore:resonant_virtue_meld_round', '64x gtceu:fine_ruridit_wire', '64x gtceu:fine_ruridit_wire', '64x gtceu:fine_ruridit_wire', '64x gtceu:fine_ruridit_wire', '2x gtceu:niobium_titanium_quadruple_cable'])
    .itemOutputs('gtceu:luv_electric_motor')
    .inputFluids(
      Fluid.of('gtceu:soldering_alloy', 288),
      Fluid.of('cosmiccore:triphenylphosphine', 500)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:iv_electric_motor')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.IV])

  //LUV PISTON
  event.remove({ id: 'gtceu:assembly_line/electric_piston_luv' })
  event.recipes.gtceu.assembly_line('luv_new_piston')
    .itemInputs(['gtceu:luv_electric_motor', '4x cosmiccore:resonant_virtue_meld_plate', '4x cosmiccore:resonant_virtue_meld_ring', '32x cosmiccore:resonant_virtue_meld_round', '4x cosmiccore:long_resonant_virtue_meld_rod', 'cosmiccore:resonant_virtue_meld_gear', '2x cosmiccore:small_resonant_virtue_meld_gear', '2x gtceu:niobium_titanium_quadruple_cable'])
    .itemOutputs('gtceu:luv_electric_piston')
    .inputFluids(
      Fluid.of('gtceu:soldering_alloy', 288),
      Fluid.of('cosmiccore:triphenylphosphine', 500)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:iv_electric_piston')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.IV])

  //LUV PUMP
  event.remove({ id: 'gtceu:assembly_line/electric_pump_luv' })
  event.recipes.gtceu.assembly_line('luv_new_pump')
    .itemInputs(['gtceu:luv_electric_motor', 'gtceu:niobium_titanium_normal_fluid_pipe', '4x cosmiccore:resonant_virtue_meld_plate', '8x cosmiccore:resonant_virtue_meld_screw', '4x gtceu:silicone_rubber_ring', 'cosmiccore:resonant_virtue_meld_rotor', '2x gtceu:niobium_titanium_quadruple_cable'])
    .itemOutputs('gtceu:luv_electric_pump')
    .inputFluids(
      Fluid.of('gtceu:soldering_alloy', 288),
      Fluid.of('cosmiccore:triphenylphosphine', 500)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:iv_electric_pump')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.IV])
  //LUV CONVEYOR
  event.remove({ id: 'gtceu:assembly_line/conveyor_module_luv' })
  event.recipes.gtceu.assembly_line('luv_conveyor_module_new')
    .itemInputs(['2x gtceu:luv_electric_motor', '2x cosmiccore:resonant_virtue_meld_plate', '4x cosmiccore:resonant_virtue_meld_ring', '32x cosmiccore:resonant_virtue_meld_round', '4x cosmiccore:resonant_virtue_meld_screw', '2x gtceu:niobium_titanium_quadruple_cable'])
    .itemOutputs('gtceu:luv_conveyor_module')
    .inputFluids(
      Fluid.of('gtceu:soldering_alloy', 288),
      Fluid.of('cosmiccore:triphenylphosphine', 500),
      Fluid.of('gtceu:styrene_butadiene_rubber', 1152)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:iv_conveyor_module')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.IV])

  //LUV ROBOT-ARM
  event.remove({ id: 'gtceu:assembly_line/robot_arm_luv' })
  event.recipes.gtceu.assembly_line('robot_arm_luv_new')
    .itemInputs(['4x cosmiccore:long_resonant_virtue_meld_rod', 'cosmiccore:resonant_virtue_meld_gear', 'cosmiccore:small_resonant_virtue_meld_gear', '2x gtceu:luv_electric_motor', 'gtceu:luv_electric_piston', '#gtceu:circuits/luv', '2x #gtceu:circuits/iv', '4x #gtceu:circuits/ev', '4x gtceu:niobium_titanium_quadruple_cable'])
    .itemOutputs('gtceu:luv_robot_arm')
    .inputFluids(
      Fluid.of('gtceu:soldering_alloy', 1152),
      Fluid.of('cosmiccore:triphenylphosphine', 500),
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:iv_robot_arm')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.IV])
  //Frontiers Pattern Buffer
  event.remove({ id: 'gtceu:assembly_line/me_pattern_buffer' })
  event.recipes.gtceu.assembly_line('pattern_buffer_new')
    .itemInputs(['gtceu:luv_dual_output_hatch', '2x expatternprovider:ex_interface', '2x expatternprovider:ex_pattern_provider', 'expatternprovider:ex_io_port', '4x ae2:speed_card', '4x ae2:capacity_card', '2x #gtceu:circuits/luv'])
    .itemOutputs('gtceu:me_pattern_buffer')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 1152),
      Fluid.of('cosmiccore:triphenylphosphine', 4000),
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:luv_dual_input_hatch')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.IV])

  //R.Virtue Coil
  event.recipes.gtceu.assembly_line('resonant_virtue_coil_assem')
    .itemInputs(['2x cosmiccore:prismatic_tungstensteel_frame', '4x gtceu:iv_voltage_coil', '12x cosmiccore:resonant_virtue_meld_double_wire', '8x gtceu:galvanized_ethersteel_screw', '32x gtceu:elementium_foil', '16x cosmiccore:prismatic_tungstensteel_foil', '16x gtceu:terrasteel_foil'])
    .itemOutputs('cosmiccore:resonant_virtue_meld_coil_block')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 288),
      Fluid.of('gtceu:argon', 2000)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('cosmiccore:prismatic_tungstensteel_coil_block')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.IV])
  //Naquadric Superalloy Coil
  event.recipes.gtceu.assembly_line('nsa_coil_assem')
    .itemInputs(['2x cosmiccore:resonant_virtue_meld_frame', '4x gtceu:luv_voltage_coil', '16x cosmiccore:naquadric_superalloy_double_wire', '16x gtceu:naquadah_alloy_screw', '48x cosmiccore:resonant_virtue_meld_foil', '24x gtceu:naquadah_alloy_foil', '24x cosmiccore:trinavine_foil'])
    .itemOutputs('cosmiccore:naquadric_superalloy_coil_block')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 1152),
      Fluid.of('cosmiccore:triphenylphosphine', 1152),
      Fluid.of('gtceu:argon', 4000)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('cosmiccore:resonant_virtue_meld_coil_block')).EUt(GTValues.VA[GTValues.LuV]).duration(1000))
    .duration(800)
    .EUt(GTValues.VA[GTValues.LuV])
  //Reinforced Trinavine Coil
  event.recipes.gtceu.assembly_line('frontiers:trinavine_coil')
    .itemInputs(['4x cosmiccore:trinavine_frame', '8x gtceu:zpm_voltage_coil', '16x cosmiccore:trinavine_quadruple_wire', '32x cosmiccore:neutronite_screw', '64x cosmiccore:neutronite_foil', '32x cosmiccore:neutronite_foil', '64x gtceu:nylon_6_6_foil', '32x cosmiccore:trinavine_foil'])
    .itemOutputs('cosmiccore:reinforced_trinavine_coil_block')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 1152),
      Fluid.of('cosmiccore:neutronite', 1152),
      Fluid.of('gtceu:krypton', 4000)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('cosmiccore:naquadric_superalloy_coil_block')).EUt(GTValues.VA[GTValues.LuV]).duration(1000))
    .duration(800)
    .EUt(GTValues.VA[GTValues.LuV])

  //CleanroomMaintHatch
  event.remove({ id: 'gtceu:shaped/maintenance_hatch_cleaning' })
  event.recipes.gtceu.assembly_line('clean_hatch_assemblyline')
    .itemInputs(['64x gtceu:plascrete', '64x gtceu:plascrete', '16x gtceu:filter_casing', '16x gtceu:hssg_spring', '4x #gtceu:circuits/luv', '4x gtceu:luv_robot_arm', 'gtceu:auto_maintenance_hatch', 'gtceu:cleanroom', 'gtceu:luv_diode'])
    .itemOutputs('gtceu:cleaning_maintenance_hatch')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 1440),
      Fluid.of('gtceu:argon', 16000)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:auto_maintenance_hatch')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.IV])
    .removePreviousMaterialInfo()
    .addMaterialInfo(true)
  //NPR
  event.recipes.gtceu.assembly_line('naquahine_reactor_controller')
    .itemInputs(['4x cosmiccore:fusion_grade_magnet', '4x gtceu:quantum_processor_mainframe', 'gtceu:iv_lapotronic_battery', '16x gtceu:iv_field_generator', '64x gtceu:uhpic_chip', '32x gtceu:indium_tin_barium_titanium_cuprate_single_wire', '16x gtceu:iv_field_generator'])
    .itemOutputs('cosmiccore:naquahine_pressure_reactor')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 2880),
      Fluid.of('gtceu:niobium_titanium', 4608),
      Fluid.of('gtceu:argon', 32000)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:molten_salt_reactor')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.IV])
  //T3 Rocket Parts and T3 Rocket
  event.recipes.gtceu.assembly_line('frontiers:t3_rocket_cone')
    .itemInputs([Item.of('gtceu:light_blue_borderless_lamp', '{bloom:1b,inverted:1b,lit:1b}'), '16x cosmiccore:trinavine_plate', '4x cosmiccore:dense_trinavine_plate', '16x cosmiccore:trinavine_rod', '8x cosmiccore:long_trinavine_rod', '4x cosmiccore:luv_radio_module'])
    .itemOutputs('kubejs:trinavine_nose_cone')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 18432),
      Fluid.of('cosmiccore:triphenylphosphine', 8000),
      Fluid.of('gtceu:polybenzimidazole', 4608)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('kubejs:osmiridium_nose_cone')).EUt(GTValues.VA[GTValues.LuV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.LuV])

  event.recipes.gtceu.assembly_line('frontiers:t3_rocket_tank')
    .itemInputs(['2x gtceu:luv_field_generator', 'gtceu:tungsten_steel_fluid_cell', '4x cosmiccore:dense_trinavine_plate', '4x cosmiccore:trinavine_rod'])
    .itemOutputs('kubejs:trinavine_tank')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 18432),
      Fluid.of('cosmiccore:triphenylphosphine', 8000),
      Fluid.of('gtceu:polybenzimidazole', 4608)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:tungsten_steel_fluid_cell')).EUt(GTValues.VA[GTValues.LuV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.LuV])

  event.recipes.gtceu.assembly_line('frontiers:t3_rocket_thruster')
    .itemInputs(['gtceu:luv_machine_hull', '4x gtceu:luv_electric_pump', '4x cosmiccore:dense_trinavine_plate', '4x cosmiccore:dense_neutronite_plate', '2x cosmiccore:neutronite_rotor'])
    .itemOutputs('kubejs:trinavine_engine')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 18432),
      Fluid.of('cosmiccore:triphenylphosphine', 8000),
      Fluid.of('gtceu:polybenzimidazole', 4608)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('kubejs:osmiridium_engine')).EUt(GTValues.VA[GTValues.LuV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.LuV])

  event.recipes.gtceu.assembly_line('frontiers:t3_rocket_fin')
    .itemInputs(['4x gtceu:luv_electric_motor', '4x cosmiccore:dense_trinavine_plate', '8x cosmiccore:neutronite_screw', '8x cosmiccore:trinavine_screw', '4x cosmiccore:trinavine_rod', '4x cosmiccore:trinavine_rod'])
    .itemOutputs('kubejs:trinavine_fin')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 18432),
      Fluid.of('cosmiccore:triphenylphosphine', 8000),
      Fluid.of('gtceu:polybenzimidazole', 4608)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('kubejs:osmiridium_fin')).EUt(GTValues.VA[GTValues.LuV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.LuV])
  event.recipes.gtceu.assembly_line('frontiers:gravity_float_crucible')
    .itemInputs(['gtceu:alloy_blast_smelter', '4x cosmiccore:resonant_virtue_meld_coil_block', '8x cosmiccore:resonant_virtue_meld_frame', '4x #gtceu:circuits/zpm', '4x gtceu:luv_field_generator', '4x cosmiccore:luv_radio_module'])
    .itemOutputs('gtceu:gravity_float_crucible')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 9216),
      Fluid.of('cosmiccore:triphenylphosphine', 8000),
      Fluid.of('gtceu:polybenzimidazole', 4608)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:alloy_blast_smelter')).EUt(GTValues.VA[GTValues.LuV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.ZPM])

  //This Rocket will massive strain a players Trinavine Production, ideally encouraging them to set up a more passive solution for Grading Catalysts, Tau, and Other BM materials made during LUV
  event.recipes.gtceu.assembly_line('frontiers:t3_rocket')
    .itemInputs(['kubejs:trinavine_nose_cone', '7x cosmiccore:dense_trinavine_plate', '7x cosmiccore:dense_trinavine_plate', '7x cosmiccore:dense_trinavine_plate', '7x cosmiccore:dense_trinavine_plate', '8x kubejs:trinavine_fin', '4x kubejs:trinavine_tank', '2x kubejs:trinavine_engine', '2x kubejs:trinavine_engine'])
    .itemOutputs('ad_astra:tier_3_rocket')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 18432),
      Fluid.of('cosmiccore:triphenylphosphine', 16000),
      Fluid.of('cosmiccore:neutronite', 9216),
      Fluid.of('gtceu:polybenzimidazole', 4608)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('kubejs:osmiridium_fin')).EUt(GTValues.VA[GTValues.LuV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.ZPM])



  ///ZPM STUFF
  //ZPM MOTOR
  event.remove({ id: 'gtceu:assembly_line/electric_motor_zpm' })
  event.recipes.gtceu.assembly_line('zpm_new_motor')
    .itemInputs(['4x gtceu:long_magnetic_samarium_rod', '4x cosmiccore:long_neutronite_rod', '4x cosmiccore:neutronite_ring', '8x cosmiccore:neutronite_round', '64x cosmiccore:fine_trinavine_wire', '64x cosmiccore:fine_trinavine_wire', '64x cosmiccore:fine_trinavine_wire', '64x cosmiccore:fine_trinavine_wire', '64x cosmiccore:fine_trinavine_wire', '4x cosmiccore:trinavine_quadruple_cable'])
    .itemOutputs('gtceu:zpm_electric_motor')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 576),
      Fluid.of('cosmiccore:triphenylphosphine', 1000)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:luv_electric_motor')).EUt(GTValues.VA[GTValues.LuV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.LuV])
  event.remove({ id: 'gtceu:assembly_line/electric_piston_zpm' })
  //ZPM PISTON
  event.recipes.gtceu.assembly_line('new_zpm_piston_recipe')
    .itemInputs(['gtceu:zpm_electric_motor', '4x cosmiccore:neutronite_plate', '6x cosmiccore:neutronite_ring', '48x cosmiccore:neutronite_round', '8x cosmiccore:neutronite_spring', '4x cosmiccore:long_neutronite_rod', 'cosmiccore:neutronite_gear', '2x cosmiccore:small_neutronite_gear', '2x cosmiccore:trinavine_quadruple_cable'])
    .itemOutputs('gtceu:zpm_electric_piston')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 576),
      Fluid.of('cosmiccore:triphenylphosphine', 1000)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:luv_electric_piston')).EUt(GTValues.VA[GTValues.LuV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.LuV])

  //ZPM PUMP
  event.remove({ id: 'gtceu:assembly_line/electric_pump_zpm' })
  event.recipes.gtceu.assembly_line('zpm_new_pump')
    .itemInputs(['gtceu:zpm_electric_motor', 'gtceu:polybenzimidazole_large_fluid_pipe', '6x cosmiccore:neutronite_plate', '12x cosmiccore:neutronite_screw', '8x gtceu:silicone_rubber_ring', 'cosmiccore:neutronite_rotor', '2x cosmiccore:trinavine_quadruple_cable'])
    .itemOutputs('gtceu:zpm_electric_pump')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 288),
      Fluid.of('cosmiccore:triphenylphosphine', 500)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:luv_electric_pump')).EUt(GTValues.VA[GTValues.LuV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.LuV])
  //ZPM CONVEYOR
  event.remove({ id: 'gtceu:assembly_line/conveyor_module_zpm' })
  event.recipes.gtceu.assembly_line('zpm_conveyor_module_new')
    .itemInputs(['2x gtceu:zpm_electric_motor', '4x cosmiccore:neutronite_plate', '8x cosmiccore:neutronite_ring', '64x cosmiccore:neutronite_round', '8x cosmiccore:neutronite_screw', '4x cosmiccore:trinavine_quadruple_cable'])
    .itemOutputs('gtceu:zpm_conveyor_module')
    .inputFluids(
      Fluid.of('gtceu:soldering_alloy', 288),
      Fluid.of('cosmiccore:triphenylphosphine', 1000),
      Fluid.of('gtceu:styrene_butadiene_rubber', 1152)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:luv_conveyor_module')).EUt(GTValues.VA[GTValues.LuV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.LuV])
  //ZPM ROBOT-ARM
  event.remove({ id: 'gtceu:assembly_line/robot_arm_zpm' })
  event.recipes.gtceu.assembly_line('robot_arm_zpm_new')
    .itemInputs(['8x cosmiccore:long_neutronite_rod', '2x cosmiccore:neutronite_gear', '4x cosmiccore:small_neutronite_gear', '2x gtceu:zpm_electric_motor', 'gtceu:zpm_electric_piston', '#gtceu:circuits/zpm', '2x #gtceu:circuits/luv', '4x #gtceu:circuits/iv', '2x cosmiccore:trinavine_quadruple_cable'])
    .itemOutputs('gtceu:zpm_robot_arm')
    .inputFluids(
      Fluid.of('gtceu:soldering_alloy', 1152),
      Fluid.of('cosmiccore:triphenylphosphine', 1000),
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:luv_robot_arm')).EUt(GTValues.VA[GTValues.LuV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.IV])

  // ZPM HULL AND CASING
  event.remove({ id: 'gtceu:assembler/casing_zpm' })
  event.remove({ id: 'gtceu:assembler/hull_zpm' })
  event.remove({ id: 'gtceu:shaped/casing_zpm' })
  event.remove({ id: 'gtceu:shaped/zpm_machine_hull' })
  event.recipes.gtceu.assembly_line('zpm_hull_assline')
    .itemInputs(['cosmiccore:trinavine_frame', '16x cosmiccore:naquadric_superalloy_plate', '8x cosmiccore:double_neutronite_plate', '16x cosmiccore:trinavine_screw', '#gtceu:circuits/ev', '2x cosmiccore:trinavine_quadruple_cable'])
    .itemOutputs('gtceu:zpm_machine_hull')
    .inputFluids(
      Fluid.of('cosmiccore:prisma', 576),
      Fluid.of('gtceu:silicone_rubber', 1152),
      Fluid.of('gtceu:styrene_butadiene_rubber', 1152),
      Fluid.of('gtceu:soldering_alloy', 1152),
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:luv_machine_hull')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(300)
    .EUt(GTValues.VA[GTValues.LuV])
  event.recipes.gtceu.assembly_line('zpm_hull_assline_casing')
    .itemInputs(['gtceu:zpm_machine_casing', '8x cosmiccore:naquadric_superalloy_plate', '4x cosmiccore:double_neutronite_plate', '8x cosmiccore:trinavine_screw', '#gtceu:circuits/ev', '2x cosmiccore:trinavine_quadruple_cable'])
    .itemOutputs('gtceu:zpm_machine_hull')
    .inputFluids(
      Fluid.of('cosmiccore:prisma', 576),
      Fluid.of('gtceu:silicone_rubber', 1152),
      Fluid.of('gtceu:styrene_butadiene_rubber', 1152),
      Fluid.of('gtceu:soldering_alloy', 1152),
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:luv_machine_hull')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(300)
    .EUt(GTValues.VA[GTValues.LuV])


  event.remove({ id: 'bloodmagic:blood_rune_speed' })
  event.remove({ id: 'bloodmagic:blood_rune_capacity' })
  event.remove({ id: 'bloodmagic:blood_rune_sacrifice' })
  event.remove({ id: 'bloodmagic:blood_rune_self_sacrifice' })

  event.recipes.gtceu.assembly_line('frontiers:speed_rune')
    .itemInputs(['bloodmagic:blankrune', '4x botania:rune_spring', '4x botania:rune_air', '64x minecraft:sugar', 'botania:cosmetic_clock_eye'])
    .itemOutputs('bloodmagic:speedrune')
    .inputFluids(
      'gtceu:4_4_oxydianiline_pyromellitimide 288',
      'gtceu:grading_fluid_1 250'
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('bloodmagic:blankrune').EUt(GTValues.VA[GTValues.IV]).duration(3200))
    .duration(300)
    .EUt(GTValues.VA[GTValues.LuV])

  event.recipes.gtceu.assembly_line('frontiers:capacity_rune')
    .itemInputs(['bloodmagic:blankrune', '4x botania:rune_summer', '4x botania:rune_water', 'gtceu:steel_fluid_cell', 'gtceu:aluminium_fluid_cell', 'gtceu:stainless_steel_fluid_cell', 'gtceu:titanium_fluid_cell', 'gtceu:tungstensteel_fluid_cell'])
    .itemOutputs('bloodmagic:altarcapacityrune')
    .inputFluids(
      'gtceu:4_4_oxydianiline_pyromellitimide 288',
      'gtceu:grading_fluid_2 250'
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('bloodmagic:blankrune').EUt(GTValues.VA[GTValues.IV]).duration(3200))
    .duration(300)
    .EUt(GTValues.VA[GTValues.LuV])



  event.recipes.gtceu.assembly_line('frontiers:sacrifice_rune')
    .itemInputs(['bloodmagic:blankrune', 'gtceu:slicing_blades', '4x botania:rune_autumn', '4x botania:rune_fire', 'gtceu:tungsten_steel_buzz_saw_blade', 'gtceu:titanium_buzz_saw_blade'])
    .itemOutputs('bloodmagic:sacrificerune')
    .inputFluids(
      'gtceu:4_4_oxydianiline_pyromellitimide 288',
      'gtceu:grading_fluid_2 250'
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('bloodmagic:blankrune').EUt(GTValues.VA[GTValues.IV]).duration(3200))
    .duration(300)
    .EUt(GTValues.VA[GTValues.LuV])

  event.recipes.gtceu.assembly_line('frontiers:self_sac_rune')
    .itemInputs(['bloodmagic:blankrune', '4x botania:rune_earth', '4x botania:rune_winter', 'bloodmagic:sacrificialdagger', 'bloodmagic:sacrificialdagger', 'bloodmagic:sacrificialdagger'])
    .itemOutputs('bloodmagic:selfsacrificerune')
    .inputFluids(
      'gtceu:4_4_oxydianiline_pyromellitimide 288',
      'gtceu:grading_fluid_2 250'
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('bloodmagic:blankrune').EUt(GTValues.VA[GTValues.IV]).duration(3200))
    .duration(300)
    .EUt(GTValues.VA[GTValues.LuV])
  event.recipes.gtceu.assembly_line('frontiers:mechanical_altar')
    .itemInputs(['bloodmagic:altar', '4x gtceu:europium_frame', '4x cosmiccore:luv_radio_module', '4x gtceu:quantum_processor_mainframe', '16x bloodmagic:etherealslate', '16x bloodmagic:demonslate', '16x bloodmagic:infusedslate', '16x bloodmagic:reinforcedslate', '16x bloodmagic:blankslate'])
    .itemOutputs('cosmiccore:hemophagic_transfuser')
    .inputFluids(
      'gtceu:4_4_oxydianiline_pyromellitimide 36884',
      'gtceu:grading_fluid_4 16000',
      'gtceu:grading_fluid_3 16000',
      'gtceu:grading_fluid_2 16000'
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('bloodmagic:altar').EUt(GTValues.VA[GTValues.LuV]).duration(3200))
    .duration(300)
    .EUt(GTValues.VA[GTValues.LuV])
  event.recipes.gtceu.assembly_line('frontiers:suffering_chamber')
    .itemInputs(['gtceu:luv_macerator', '16x bloodmagic:etherealslate', '4x gtceu:quantum_processor_mainframe', '4x gtceu:luv_field_generator', '4x cosmiccore:luv_radio_module'])
    .itemOutputs('cosmiccore:suffering_chamber')
    .inputFluids(
      'gtceu:4_4_oxydianiline_pyromellitimide 36884',
      'gtceu:grading_fluid_4 16000',
      'gtceu:grading_fluid_3 16000',
      'gtceu:grading_fluid_2 16000'
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('gtceu:luv_macerator').EUt(GTValues.VA[GTValues.LuV]).duration(3200))
    .duration(300)
    .EUt(GTValues.VA[GTValues.LuV])
  event.recipes.gtceu.assembly_line('frontiers:magnet')
    .itemInputs(['gtceu:superconducting_coil', '8x gtceu:luv_voltage_coil', '16x gtceu:fine_europium_wire', '#gtceu:circuits/luv'])
    .itemOutputs('cosmiccore:fusion_grade_magnet')
    .inputFluids(
      'gtceu:high_grade_solder 2304',
      'cosmiccore:triphenylphosphine 2304',
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('gtceu:superconducting_coil').EUt(GTValues.VA[GTValues.LuV]).duration(3200))
    .duration(300)
    .EUt(GTValues.VA[GTValues.LuV])
  event.recipes.gtceu.assembly_line('frontiers:ludicrous_combustion_gen')
    .itemInputs(['gtceu:luv_machine_hull', '2x #gtceu:circuits/luv', '4x gtceu:luv_electric_piston', '4x gtceu:luv_electric_motor', '4x gtceu:synthetic_pthanterum_gear', 'gtceu:niobium_titanium_quadruple_cable'])
    .itemOutputs('cosmiccore:ludicrous_combustion_engine_cc')
    .inputFluids(
      'gtceu:high_grade_solder 2304',
      'cosmiccore:triphenylphosphine 2304',
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('cosmiccore:extreme_combustion_engine_cc').EUt(GTValues.VA[GTValues.LuV]).duration(3200))
    .duration(300)
    .EUt(GTValues.VA[GTValues.LuV])
  event.recipes.gtceu.assembly_line('frontiers:chemvat')
    .itemInputs(['gtceu:large_chemical_reactor', '8x gtceu:synthetic_pthanterum_frame', '4x cosmiccore:cyclozine_chemically_repelling_pipe', '4x #gtceu:circuits/zpm', '32x gtceu:synthetic_pthanterum_plate', '2x gtceu:luv_electric_pump', 'gtceu:luv_field_generator', 'cosmiccore:luv_radio_module'])
    .itemOutputs('cosmiccore:industrial_chemical_vat')
    .inputFluids(
      'gtceu:high_grade_solder 1152',
      'cosmiccore:triphenylphosphine 2304',
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('gtceu:large_chemical_reactor').EUt(GTValues.VA[GTValues.LuV]).duration(3200))
    .duration(940)
    .EUt(GTValues.VA[GTValues.ZPM])

  //Polymerizer
  event.recipes.gtceu.assembly_line('frontiers:polymerizer_assline')
    .itemInputs(['2x cosmiccore:high_tolerance_rhenium_casing', '4x gtceu:quantum_processor_mainframe', '16x gtceu:double_rhenium_plate', 'gtceu:zpm_fluid_regulator', 'gtceu:zpm_robot_arm'])
    .itemOutputs('cosmiccore:polymerizer')
    .inputFluids(
      'gtceu:4_4_oxydianiline_pyromellitimide 1296'
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('32x gtceu:double_4_4_oxydianiline_pyromellitimide_plate').EUt(GTValues.VA[GTValues.LuV]).duration(3200))
    .duration(300)
    .EUt(GTValues.VA[GTValues.LuV])

  event.remove({ id: 'gtceu:assembly_line/me_pattern_buffer_proxy' })
  event.recipes.gtceu.assembly_line('frontiers:pattern_proxy')
    .itemInputs(['gtceu:luv_machine_hull', 'cosmiccore:luv_radio_module', 'cosmiccore:omnia_circuit_zpm', '64x cosmiccore:fine_trinavine_wire', '64x cosmiccore:fine_neutronite_wire'])
    .itemOutputs('gtceu:me_pattern_buffer_proxy')
    .inputFluids(
      'gtceu:4_4_oxydianiline_pyromellitimide 1296',
      'gtceu:high_grade_solder 1152',
      'cosmiccore:triphenylphosphine 2304',
    )
    .stationResearch(b => b
      .researchStack('gtceu:me_pattern_buffer')
      .CWUt(16)
      .EUt(GTValues.VA[GTValues.ZPM]))
    .duration(1750)
    .EUt(GTValues.VA[GTValues.ZPM])


  event.recipes.gtceu.assembly_line('frontiers:orbital_tempering_forge')
    .itemInputs(['32x cosmiccore:trinavine_frame', '8x cosmiccore:multi_purpose_interstellar_grade_casing', '8x cosmiccore:cyclozine_chemically_repelling_casing', 'cosmiccore:reinforced_trinavine_coil_block', '8x gtceu:zpm_field_generator', '8x gtceu:zpm_voltage_coil', '4x gtceu:circuits/zpm'])
    .itemOutputs('cosmiccore:orbital_tempering_forge')
    .inputFluids(
      'gtceu:nylon_6_6 1296',
      'gtceu:high_grade_solder 2304',
      'cosmiccore:triphenylphosphine 1500',
    )
    .stationResearch(b => b
      .researchStack('gtceu:electric_blast_furnace')
      .CWUt(16)
      .EUt(GTValues.VA[GTValues.ZPM]))
    .duration(1750)
    .EUt(GTValues.VA[GTValues.ZPM])

  event.recipes.gtceu.assembly_line('frontiers:ultra_powered_casing')
    .itemInputs(['cosmiccore:trinavine_frame', '32x gtceu:double_black_steel_plate', '32x gtceu:double_black_steel_plate', '32x gtceu:double_black_steel_plate', '32x gtceu:double_black_steel_plate', '#gtceu:circuits/uv', '64x gtceu:fine_ruridit_wire', '64x gtceu:fine_ruridit_wire', '64x gtceu:fine_galvanized_ethersteel_wire', '64x gtceu:fine_galvanized_ethersteel_wire', '8x gtceu:tritanium_double_wire'])
    .itemOutputs('cosmiccore:ultra_powered_casing')
    .inputFluids(
      'gtceu:trinanylon_6_6 1296',
      'gtceu:high_grade_solder 1152',
      'cosmiccore:triphenylphosphine 2304',
    )
    .stationResearch(b => b
      .researchStack('gtceu:high_power_casing')
      .CWUt(16)
      .EUt(GTValues.VA[GTValues.ZPM]))
    .duration(1750)
    .EUt(GTValues.VA[GTValues.ZPM])

  event.recipes.gtceu.assembly_line('frontiers:neutron_filter')
    .itemInputs(['gtceu:item_smart_filter', '8x gtceu:graphene_plate', 'gtceu:lapotron_crystal', 'gtceu:luv_voltage_coil', 'gtceu:iv_voltage_coil', 'gtceu:ev_voltage_coil', 'gtceu:hv_voltage_coil'])
    .itemOutputs('kubejs:heavy_neutron_filter')
    .inputFluids(
      'gtceu:trinanylon_6_6 1296',
      'gtceu:high_grade_solder 1152',
      'cosmiccore:triphenylphosphine 2304',
    )
    .stationResearch(b => b
      .researchStack('gtceu:item_smart_filter')
      .CWUt(16)
      .EUt(GTValues.VA[GTValues.ZPM]))
    .duration(1750)
    .EUt(GTValues.VA[GTValues.ZPM])

  event.recipes.gtceu.assembly_line('frontiers:prisma_foundry')
    .itemInputs(['4x gtceu:large_maceration_tower', '4x gtceu:large_chemical_bath', '4x gtceu:leaching_plant', '4x gtceu:large_centrifuge', '4x gtceu:large_distillery', '8x gtceu:crystal_processor_mainframe', '64x gtceu:uranium_rhodium_dinaquadide_quadruple_wire', '64x gtceu:uranium_rhodium_dinaquadide_quadruple_wire', '16x gtceu:tritanium_modular_shelling', '16x gtceu:heavy_tritanium_beam', '4x gtceu:ultradense_tritanium_plate', '64x gtceu:tungsten_grinding_head', '64x gtceu:tungsten_grinding_head', '64x gtceu:tungsten_grinding_head', '64x gtceu:tungsten_grinding_head'])
    .itemOutputs('cosmiccore:prismatic_ore_foundry')
    .inputFluids(
      'gtceu:trinanylon_6_6 1296',
      'gtceu:high_grade_solder 1152',
      'cosmiccore:triphenylphosphine 2304',
    )
    .stationResearch(b => b
      .researchStack('gtceu:large_maceration_tower')
      .CWUt(240)
      .EUt(GTValues.VA[GTValues.ZPM]))
    .duration(17500)
    .EUt(GTValues.VA[GTValues.ZPM])

  event.recipes.gtceu.assembly_line('frontiers:neutronium_casing')
    .itemInputs(['gtceu:neutronium_frame', '12x gtceu:long_tritanium_rod', '8x gtceu:double_neutronium_plate', '8x gtceu:neutronium_rod', '8x gtceu:neutronium_bolt'])
    .itemOutputs('cosmiccore:tritanium_lined_heavy_neutronium_casing')
    .inputFluids(
      'gtceu:high_grade_solder 9126',
      'gtceu:trinium 288',
    )
    .stationResearch(b => b
      .researchStack('gtceu:neutronium_frame')
      .CWUt(16)
      .EUt(GTValues.VA[GTValues.ZPM]))
    .duration(1750)
    .EUt(GTValues.VA[GTValues.ZPM])
  event.recipes.gtceu.assembly_line('frontiers:zpm_combustion_engine')
    .itemInputs(['gtceu:zpm_machine_hull', '2x #gtceu:circuits/zpm', '4x gtceu:zpm_electric_piston', '4x gtceu:zpm_electric_motor', '8x cosmiccore:neutronite_gear', 'gtceu:vanadium_gallium_quadruple_cable', 'gtceu:zpm_machine_hull'])
    .itemOutputs('cosmiccore:ultimate_combustion_engine_cc')
    .inputFluids(
      'gtceu:trinanylon_6_6 1296',
      'gtceu:high_grade_solder 4608',
      'cosmiccore:triphenylphosphine 2304',
    )
    .stationResearch(b => b
      .researchStack('cosmiccore:ludicrous_combustion_engine_cc')
      .CWUt(16)
      .EUt(GTValues.VA[GTValues.ZPM]))
    .duration(1750)
    .EUt(GTValues.VA[GTValues.ZPM])
  event.recipes.gtceu.assembly_line('frontiers:neutronium_magnet')
    .itemInputs(['cosmiccore:fusion_grade_magnet', '32x gtceu:fine_trinanylon_6_6_wire', '4x gtceu:zpm_field_generator', '4x gtceu:zpm_voltage_coil', '4x gtceu:double_neutronium_plate', '#gtceu:circuit/zpm'])
    .itemOutputs('cosmiccore:stellar_neutronium_grade_magnet')
    .inputFluids(
      'gtceu:trinanylon_6_6 1296',
      'gtceu:high_grade_solder 4608',
      'cosmiccore:triphenylphosphine 2304',
    )
    .stationResearch(b => b
      .researchStack('cosmiccore:fusion_grade_magnet')
      .CWUt(16)
      .EUt(GTValues.VA[GTValues.ZPM]))
    .duration(1750)
    .EUt(GTValues.VA[GTValues.ZPM])
  //Interstellar Hulls

  event.recipes.gtceu.assembly_line('cosmiccore:multi_purpose_interstellar_grade_casing')
    .itemInputs(['2x cosmiccore:trinavine_frame', '16x gtceu:double_titanium_plate', '32x gtceu:double_aluminium_plate', '32x gtceu:double_aluminium_plate', '64x gtceu:aluminium_screw', '64x gtceu:aluminium_screw', '64x gtceu:aluminium_rod', '64x gtceu:aluminium_rod', '64x gtceu:aluminium_rod'])
    .itemOutputs('cosmiccore:multi_purpose_interstellar_grade_casing')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 1152),
    )
    .stationResearch(b => b
      .researchStack('cosmiccore:cyclozine_chemically_repelling_casing')
      .CWUt(16)
      .EUt(GTValues.VA[GTValues.ZPM]))
    .duration(1750)
    .EUt(GTValues.VA[GTValues.ZPM])

  event.recipes.gtceu.assembly_line('frontiers:computation_support_unit')
    .itemInputs(['16x cosmiccore:fine_trinavine_wire', '4x gtceu:duranium_plate', '4x gtceu:polybenzimidazole_small_fluid_pipe', '4x cosmiccore:saturated_sculk_hemocytoblast', 'gtceu:luv_electric_pump'])
    .itemOutputs('4x cosmiccore:computation_support_unit')
    .inputFluids(
      'gtceu:4_4_oxydianiline_pyromellitimide 1152',
      'gtceu:synthetic_blood 1000'
    )
    .stationResearch(b => b
      .researchStack('cosmiccore:bifidobacterium_breve')
      .CWUt(32)
      .EUt(GTValues.VA[GTValues.ZPM]))
    .duration(1750)
    .EUt(GTValues.VA[GTValues.ZPM])

  event.recipes.gtceu.assembly_line('frontiers:neuro_processing_assembly')
    .itemInputs(['64x cosmiccore:fine_neutronite_wire', '8x gtceu:nylon_6_6_foil', '8x gtceu:advanced_smd_transistor', '8x gtceu:advanced_smd_diode', '8x gtceu:advanced_smd_resistor', 'cosmiccore:wired_petri_dish', 'gtceu:wetware_printed_circuit_board', 'gtceu:stem_cells', 'cosmiccore:computation_support_unit'])
    .itemOutputs('4x cosmiccore:neuro_processing_assembly')
    .inputFluids(
      'gtceu:polybenzimidazole 1152',
      'gtceu:sterilized_growth_medium 1000',
      'gtceu:tritanium 1296'
    )
    .stationResearch(b => b
      .researchStack('cosmiccore:computation_support_unit')
      .CWUt(32)
      .EUt(GTValues.VA[GTValues.ZPM]))
    .duration(1750)
    .EUt(GTValues.VA[GTValues.ZPM])


  event.recipes.gtceu.assembly_line('frontiers:mana_complex')
    .itemInputs(['gtceu:mana_simulator', '#gtceu:circuits/uhv', '4x gtceu:ultradense_elementium_plate', '4x gtceu:terrasteel_wire_spool', '4x gtceu:heavy_synthetic_pthanterum_beam'])
    .itemOutputs('cosmiccore:botanical_simulation_complex')
    .inputFluids(
      'gtceu:polybenzimidazole 1152',
      'gtceu:potent_mana 16000',
      'gtceu:starlight 16000'
    )
    .stationResearch(b => b
      .researchStack('gtceu:mana_simulator')
      .CWUt(32)
      .EUt(GTValues.VA[GTValues.ZPM]))
    .duration(1750)
    .EUt(GTValues.VA[GTValues.ZPM])



  event.remove({ id: 'gtceu:assembly_line/electric_motor_uv' })
  event.remove({ id: 'gtceu:assembly_line/electric_piston_uv' })
  event.remove({ id: 'gtceu:assembly_line/conveyor_module_uv' })
  event.remove({ id: 'gtceu:assembly_line/robot_arm_uv' })



  ///////


  // event.recipes.gtceu.assembly_line('the_meatball')
  //   .itemInputs(['64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe'])
  //   .itemOutputs('kubejs:cosmic_meatballs')
  //   .inputFluids(
  //     Fluid.of('cosmiccore:prisma', 100000000),
  //     Fluid.of('gtceu:uu_matter', 100000000),
  //     Fluid.of('gtceu:neutronium', 100000000),
  //     Fluid.of('gtceu:virtue_meld', 1),
  //   )
  // ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('cosmiccore:macroverse_processor_mainframe')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
  //   .duration(99999999)
  //   .EUt(GTValues.VA[GTValues.MAX])



})