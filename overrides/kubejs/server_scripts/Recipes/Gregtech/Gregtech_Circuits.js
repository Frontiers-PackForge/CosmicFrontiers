ServerEvents.recipes(event => {
    event.replaceInput(
        { output: 'gtceu:basic_electronic_circuit' },
        'gtceu:steel_plate',
        'gtceu:runed_steel_plate'
    )
    event.replaceInput(
        { output: 'gtceu:vacuum_tube' },
        'gtceu:copper_single_wire',
        'gtceu:steel_single_wire'
    )
    event.replaceInput(
        { output: 'gtceu:hv_fluid_drilling_rig' },
        'gtceu:tungsten_carbide_gear',
        'gtceu:luminescent_utherium_gear'
    )
    event.remove({ id: 'gtceu:shaped/vacuum_tube' })
    event.shaped('gtceu:vacuum_tube', [
        'CDC',
        'BAB',
        '   '
    ], {
        A: 'gtceu:steel_single_wire',
        B: 'gtceu:copper_single_wire',
        C: 'gtceu:steel_bolt',
        D: 'gtceu:glass_tube'
    })
    event.recipes.gtceu.alloy_blast_smelter('high_grade_solder_abs')
        .itemInputs(['7x gtceu:tin_dust', 'gtceu:antimony_dust', 'gtceu:bismuth_dust', 'gtceu:copper_dust'])
        .inputFluids('gtceu:helium 1000')
        .blastFurnaceTemp(3600)
        .circuit(31)
        .outputFluids('gtceu:high_grade_solder 1440')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.laser_engraver('aram_etch')
        .itemInputs('gtceu:phosphorus_wafer')
        .notConsumable('gtceu:magenta_glass_lens')
        .itemOutputs('cosmiccore:aram_wafer')
        .duration(900)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.laser_engraver('aram_etch_naq')
        .itemInputs('gtceu:naquadah_wafer')
        .notConsumable('gtceu:magenta_glass_lens')
        .itemOutputs('2x cosmiccore:aram_wafer')
        .duration(900)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.cutter('aram_cut')
        .itemInputs('cosmiccore:aram_wafer')
        .itemOutputs('16x cosmiccore:aram_chip')
        .duration(900)
        .EUt(GTValues.VA[GTValues.EV]);
    event.remove({ id: 'gtceu:circuit_assembler/processor_mv_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/processor_mv' })
    event.recipes.gtceu.circuit_assembler('processor_mv_soldering_alloy')
        .itemInputs(['gtceu:plastic_printed_circuit_board', 'gtceu:cpu_chip', '4x gtceu:smd_resistor', '4x gtceu:smd_transistor', '4x gtceu:smd_capacitor', '4x gtceu:fine_red_alloy_wire'])
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('2x gtceu:micro_processor')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.circuit_assembler('processor_mv')
        .itemInputs(['gtceu:plastic_printed_circuit_board', 'gtceu:cpu_chip', '4x gtceu:smd_resistor', '4x gtceu:smd_transistor', '4x gtceu:smd_capacitor', '4x gtceu:fine_red_alloy_wire'])
        .inputFluids('gtceu:tin 144')
        .itemOutputs('2x gtceu:micro_processor')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.MV]);
    event.remove({ id: 'gtceu:circuit_assembler/processor_assembly_hv_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/processor_assembly_hv' })
    event.recipes.gtceu.circuit_assembler('processor_assembly_hv_frontiers')
        .itemInputs(['gtceu:plastic_printed_circuit_board', '2x gtceu:micro_processor', '4x gtceu:smd_inductor', '8x gtceu:smd_capacitor', '4x gtceu:ram_chip', '4x gtceu:fine_red_alloy_wire'])
        .inputFluids('gtceu:tin 288')
        .itemOutputs('gtceu:micro_processor_assembly')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.circuit_assembler('processor_assembly_hv_soldering_alloy_frontiers')
        .itemInputs(['gtceu:plastic_printed_circuit_board', '2x gtceu:micro_processor', '4x gtceu:smd_inductor', '8x gtceu:smd_capacitor', '4x gtceu:ram_chip', '4x gtceu:fine_red_alloy_wire'])
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('gtceu:micro_processor_assembly')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.MV]);
    event.remove({ id: 'gtceu:circuit_assembler/workstation_ev_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/workstation_ev' })
    event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv' })
    event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv' })
    event.recipes.gtceu.circuit_assembler('workstation_ev_frontiers')
        .itemInputs(['gtceu:plastic_printed_circuit_board', '4x gtceu:micro_processor_assembly', '4x gtceu:smd_diode', '4x gtceu:ram_chip', '16x gtceu:fine_electrum_wire', '16x gtceu:blue_alloy_bolt'])
        .inputFluids('gtceu:tin 288')
        .itemOutputs('gtceu:micro_processor_computer')
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.circuit_assembler('workstation_ev_soldering_alloy_frontiers')
        .itemInputs(['gtceu:plastic_printed_circuit_board', '4x gtceu:micro_processor_assembly', '4x gtceu:smd_diode', '4x gtceu:ram_chip', '16x gtceu:fine_electrum_wire', '16x gtceu:blue_alloy_bolt'])
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('gtceu:micro_processor_computer')
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.MV]);
    event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv' })
    event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv_asmd_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv_asmd' })
    event.recipes.gtceu.circuit_assembler('mainframe_iv_frontiers')
        .itemInputs(['2x gtceu:aluminium_frame', '6x gtceu:micro_processor_computer', '8x gtceu:smd_inductor', '16x gtceu:smd_capacitor', '16x gtceu:ram_chip', '16x gtceu:annealed_copper_single_wire'])
        .inputFluids('gtceu:tin 576')
        .itemOutputs('gtceu:micro_processor_mainframe')
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.circuit_assembler('mainframe_iv_soldering_alloy_frontiers')
        .itemInputs(['2x gtceu:aluminium_frame', '6x gtceu:micro_processor_computer', '8x gtceu:smd_inductor', '16x gtceu:smd_capacitor', '16x gtceu:ram_chip', '16x gtceu:annealed_copper_single_wire'])
        .inputFluids('gtceu:soldering_alloy 288')
        .itemOutputs('gtceu:micro_processor_mainframe')
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.HV]);

    //Nano Circuits
    //Processor Changes
    event.remove({ id: 'gtceu:circuit_assembler/nano_processor_hv_asmd' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_processor_hv_asmd_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_processor_hv' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_processor_hv_soldering_alloy' })
    event.recipes.gtceu.circuit_assembler('nano_processor_hv_frontiers')
        .itemInputs(['gtceu:epoxy_printed_circuit_board', 'gtceu:nano_cpu_chip', '16x gtceu:smd_resistor', '8x gtceu:smd_capacitor', '8x gtceu:smd_transistor', '8x gtceu:fine_neptunium_wire'])
        .inputFluids('gtceu:tin 144')
        .itemOutputs('2x gtceu:nano_processor')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.circuit_assembler('nano_processor_hv_soldering_alloy_frontiers')
        .itemInputs(['gtceu:epoxy_printed_circuit_board', 'gtceu:nano_cpu_chip', '16x gtceu:smd_resistor', '8x gtceu:smd_capacitor', '8x gtceu:smd_transistor', '8x gtceu:fine_neptunium_wire'])
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('2x gtceu:nano_processor')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.EV]);
    //Assembly Changes
    event.remove({ id: 'gtceu:circuit_assembler/nano_processor_assembly_ev_asmd_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_processor_assembly_ev_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_processor_assembly_ev_asmd' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_processor_assembly_ev' })
    event.recipes.gtceu.circuit_assembler('nano_processor_assembly_ev_frontiers')
        .itemInputs(['gtceu:epoxy_printed_circuit_board', '2x gtceu:nano_processor', '8x gtceu:smd_inductor', '8x gtceu:smd_capacitor', '16x gtceu:ram_chip', '16x gtceu:fine_neptunium_wire'])
        .inputFluids('gtceu:tin 288')
        .itemOutputs('gtceu:nano_processor_assembly')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.circuit_assembler('nano_processor_assembly_ev_soldering_alloy_frontiers')
        .itemInputs(['gtceu:epoxy_printed_circuit_board', '2x gtceu:nano_processor', '8x gtceu:smd_inductor', '8x gtceu:smd_capacitor', '16x gtceu:ram_chip', '16x gtceu:fine_neptunium_wire'])
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('gtceu:nano_processor_assembly')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.EV]);
    //Nano SuperComputer changes
    event.remove({ id: 'gtceu:circuit_assembler/nano_computer_iv_asmd' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_computer_iv_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_computer_iv_asmd_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_computer_iv' })
    event.recipes.gtceu.circuit_assembler('nano_computer_iv_frontiers')
        .itemInputs(['gtceu:epoxy_printed_circuit_board', '4x gtceu:nano_processor_assembly', '8x gtceu:smd_diode', '4x gtceu:nor_memory_chip', '32x gtceu:ram_chip', '16x gtceu:fine_plutonium_wire'])
        .inputFluids('gtceu:tin 288')
        .itemOutputs('gtceu:nano_processor_computer')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.circuit_assembler('nano_computer_iv_soldering_alloy_frontiers')
        .itemInputs(['gtceu:epoxy_printed_circuit_board', '4x gtceu:nano_processor_assembly', '8x gtceu:smd_diode', '4x gtceu:nor_memory_chip', '32x gtceu:ram_chip', '16x gtceu:fine_plutonium_wire'])
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('gtceu:nano_processor_computer')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.EV]);
    //Nano Mainframe Changes
    event.remove({ id: 'gtceu:circuit_assembler/nano_mainframe_luv' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_mainframe_luv_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_mainframe_luv_asmd' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_mainframe_luv_asmd_soldering_alloy' })
    event.recipes.gtceu.circuit_assembler('nano_mainframe_luv_frontiers')
        .itemInputs(['2x gtceu:terrasteel_frame', '6x gtceu:nano_processor_computer', '16x gtceu:smd_inductor', '32x gtceu:smd_capacitor', '64x gtceu:ram_chip', '32x gtceu:galvanized_ethersteel_single_wire'])
        .inputFluids('gtceu:tin 576')
        .itemOutputs('gtceu:nano_processor_mainframe')
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.circuit_assembler('nano_mainframe_luv_soldering_alloy_frontiers')
        .itemInputs(['2x gtceu:terrasteel_frame', '6x gtceu:nano_processor_computer', '16x gtceu:smd_inductor', '32x gtceu:smd_capacitor', '64x gtceu:ram_chip', '32x gtceu:galvanized_ethersteel_single_wire'])
        .inputFluids('gtceu:soldering_alloy 288')
        .itemOutputs('gtceu:nano_processor_mainframe')
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.EV]);

    //QUANTUM CIRCUIT CHANGES
    event.remove({ id: 'gtceu:circuit_assembler/quantum_processor_ev_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/quantum_processor_ev' })
    event.remove({ id: 'gtceu:circuit_assembler/quantum_processor_ev_asmd_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/quantum_processor_ev_asmd' })
    //Also Have to now remove the SOC recipes as they need the next tier of solder.
    event.remove({ id: 'gtceu:circuit_assembler/quantum_processor_ev_soc' })
    event.remove({ id: 'gtceu:circuit_assembler/quantum_processor_ev_soc_soldering_alloy' })
    event.recipes.gtceu.circuit_assembler('quantum_processor_ev_frontiers')
        .itemInputs(['gtceu:fiber_reinforced_printed_circuit_board', 'gtceu:qbit_cpu_chip', '2x gtceu:nano_cpu_chip', '12x gtceu:smd_capacitor', '12x gtceu:smd_transistor', '16x gtceu:fine_americium_wire'])
        .inputFluids('gtceu:high_grade_solder 144')
        .itemOutputs('2x gtceu:quantum_processor')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.circuit_assembler('quantum_processor_ev_frontiers_soc')
        .itemInputs(['gtceu:fiber_reinforced_printed_circuit_board', 'gtceu:advanced_soc', '16x gtceu:fine_americium_wire', '8x gtceu:osmium_bolt'])
        .inputFluids('gtceu:high_grade_solder 144')
        .itemOutputs('4x gtceu:quantum_processor')
        .duration(50)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.ZPM]);

    //QUANTUM ASSEMBLY
    event.remove({ id: 'gtceu:circuit_assembler/quantum_assembly_iv' })
    event.remove({ id: 'gtceu:circuit_assembler/quantum_assembly_iv_asmd_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/quantum_assembly_iv_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/quantum_assembly_iv_asmd' })
    event.recipes.gtceu.circuit_assembler('quantum_assembly_iv_frontiers')
        .itemInputs(['gtceu:fiber_reinforced_printed_circuit_board', '2x gtceu:quantum_processor', '12x gtceu:smd_inductor', '16x gtceu:smd_capacitor', '4x cosmiccore:aram_chip', '16x gtceu:fine_americium_wire'])
        .inputFluids('gtceu:high_grade_solder 144')
        .itemOutputs('gtceu:quantum_processor_assembly')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);

    //QUANTUM SUPERCOMPUTER
    event.remove({ id: 'gtceu:circuit_assembler/quantum_computer_luv_asmd' })
    event.remove({ id: 'gtceu:circuit_assembler/quantum_computer_luv_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/quantum_computer_luv_asmd_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/quantum_computer_luv' })
    event.recipes.gtceu.circuit_assembler('quantum_supercomputer_luv_frontiers')
        .itemInputs(['gtceu:fiber_reinforced_printed_circuit_board', '4x gtceu:quantum_processor_assembly', '16x gtceu:smd_diode', '8x gtceu:nor_memory_chip', '8x cosmiccore:aram_chip', '16x gtceu:fine_curium_wire'])
        .inputFluids('gtceu:high_grade_solder 288')
        .itemOutputs('gtceu:quantum_processor_computer')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);

    //QUANTUM MAINFRAME
    event.remove({ id: 'gtceu:circuit_assembler/quantum_mainframe_zpm' })
    event.remove({ id: 'gtceu:circuit_assembler/quantum_mainframe_zpm_asmd' })
    event.remove({ id: 'gtceu:circuit_assembler/quantum_mainframe_zpm_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/quantum_mainframe_zpm_asmd_soldering_alloy' })
    event.recipes.gtceu.circuit_assembler('quantum_mainframe_zpm_frontiers')
        .itemInputs(['2x cosmiccore:prismatic_tungstensteel_frame', '6x gtceu:quantum_processor_computer', '64x gtceu:smd_capacitor', '32x gtceu:smd_inductor', '12x cosmiccore:aram_chip', '32x gtceu:hssg_single_wire'])
        .inputFluids('gtceu:high_grade_solder 576')
        .itemOutputs('gtceu:quantum_processor_mainframe')
        .duration(300)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);
    //CRYSTAL

    event.remove({id: 'gtceu:assembly_line/crystal_mainframe_uv'})
    event.recipes.gtceu.assembly_line('crystal_mainframe_new')
        .itemInputs(['2x cosmiccore:trinavine_frame', '6x gtceu:crystal_processor_computer', '16x cosmiccore:aram_chip', '4x gtceu:hpic_chip', '64x cosmiccore:fine_naquadric_superalloy_wire', '64x cosmiccore:fine_naquadric_superalloy_wire', '8x cosmiccore:crystalline_inductor', '16x cosmiccore:crystalline_capacitor', '8x cosmiccore:crystalline_diode'])
        .itemOutputs('gtceu:crystal_processor_mainframe')
        .inputFluids(
            Fluid.of('gtceu:high_grade_solder', 1152),
        )
        .stationResearch(b => b
            .researchStack('gtceu:crystal_processor_computer')
            .CWUt(32)
            .EUt(GTValues.VA[GTValues.LuV]))
        .duration(1750)
        .dimension('ad_astra:earth_orbit')
        .EUt(GTValues.VA[GTValues.LuV])





    //Omnia's
    event.recipes.gtceu.laser_engraver('omnia_lv')
        .itemInputs('#gtceu:circuits/lv')
        .notConsumable('malum:prismatic_focus_lens')
        .itemOutputs('cosmiccore:omnia_circuit_lv')
        .duration(10)
        .EUt(GTValues.VH[GTValues.LV]);
    event.recipes.gtceu.laser_engraver('omnia_mv')
        .itemInputs('#gtceu:circuits/mv')
        .notConsumable('malum:prismatic_focus_lens')
        .itemOutputs('cosmiccore:omnia_circuit_mv')
        .duration(10)
        .EUt(GTValues.VH[GTValues.LV]);
    event.recipes.gtceu.laser_engraver('omnia_hv')
        .itemInputs('#gtceu:circuits/hv')
        .notConsumable('malum:prismatic_focus_lens')
        .itemOutputs('cosmiccore:omnia_circuit_hv')
        .duration(10)
        .EUt(GTValues.VH[GTValues.LV]);
    event.recipes.gtceu.laser_engraver('omnia_ev')
        .itemInputs('#gtceu:circuits/ev')
        .notConsumable('malum:prismatic_focus_lens')
        .itemOutputs('cosmiccore:omnia_circuit_ev')
        .duration(10)
        .EUt(GTValues.VH[GTValues.LV]);
    event.recipes.gtceu.laser_engraver('omnia_iv')
        .itemInputs('#gtceu:circuits/iv')
        .notConsumable('malum:prismatic_focus_lens')
        .itemOutputs('cosmiccore:omnia_circuit_iv')
        .duration(10)
        .EUt(GTValues.VH[GTValues.LV]);
    event.recipes.gtceu.laser_engraver('omnia_luv')
        .itemInputs('#gtceu:circuits/luv')
        .notConsumable('malum:prismatic_focus_lens')
        .itemOutputs('cosmiccore:omnia_circuit_luv')
        .duration(10)
        .EUt(GTValues.VH[GTValues.LV]);
    event.recipes.gtceu.laser_engraver('omnia_zpm')
        .itemInputs('#gtceu:circuits/zpm')
        .notConsumable('malum:prismatic_focus_lens')
        .itemOutputs('cosmiccore:omnia_circuit_zpm')
        .duration(10)
        .EUt(GTValues.VH[GTValues.LV]);
    event.recipes.gtceu.laser_engraver('omnia_uv')
        .itemInputs('#gtceu:circuits/uv')
        .notConsumable('malum:prismatic_focus_lens')
        .itemOutputs('cosmiccore:omnia_circuit_uv')
        .duration(10)
        .EUt(GTValues.VH[GTValues.LV]);
    event.recipes.gtceu.laser_engraver('omnia_uhv')
        .itemInputs('#gtceu:circuits/uhv')
        .notConsumable('malum:prismatic_focus_lens')
        .itemOutputs('cosmiccore:omnia_circuit_uhv')
        .duration(10)
        .EUt(GTValues.VH[GTValues.LV]);
    event.recipes.gtceu.laser_engraver('omnia_uev')
        .itemInputs('#gtceu:circuits/uev')
        .notConsumable('malum:prismatic_focus_lens')
        .itemOutputs('cosmiccore:omnia_circuit_uev')
        .duration(10)
        .EUt(GTValues.VH[GTValues.LV]);
    event.recipes.gtceu.laser_engraver('omnia_uiv')
        .itemInputs('#gtceu:circuits/uiv')
        .notConsumable('malum:prismatic_focus_lens')
        .itemOutputs('cosmiccore:omnia_circuit_uiv')
        .duration(10)
        .EUt(GTValues.VH[GTValues.LV]);
    event.recipes.gtceu.laser_engraver('omnia_uxv')
        .itemInputs('#gtceu:circuits/uxv')
        .notConsumable('malum:prismatic_focus_lens')
        .itemOutputs('cosmiccore:omnia_circuit_uxv')
        .duration(10)
        .EUt(GTValues.VH[GTValues.LV]);
    event.recipes.gtceu.laser_engraver('omnia_opv')
        .itemInputs('#gtceu:circuits/opv')
        .notConsumable('malum:prismatic_focus_lens')
        .itemOutputs('cosmiccore:omnia_circuit_opv')
        .duration(10)
        .EUt(GTValues.VH[GTValues.LV]);
})