ServerEvents.recipes(event => {



    event.recipes.gtceu.assembler('drone_frame_mk1')
        .itemInputs(['gtceu:ev_electric_motor', '3x gtceu:ev_robot_arm', 'gtceu:titanium_rotor'])
        .inputFluids('gtceu:helium 1000')
        .itemOutputs('16x cosmiccore:drone_frame_1')
        .duration(200)
        .circuit(9)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.assembler('drone_frame_mk2')
        .itemInputs(['gtceu:iv_electric_motor', '3x gtceu:iv_robot_arm', 'gtceu:tungsten_steel_rotor'])
        .inputFluids('gtceu:helium 1000')
        .itemOutputs('16x cosmiccore:drone_frame_2')
        .duration(200)
        .circuit(9)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.assembler('drone_frame_mk3')
        .itemInputs(['gtceu:luv_electric_motor', '3x gtceu:luv_robot_arm', 'gtceu:osmiridium_rotor'])
        .inputFluids('gtceu:helium 1000')
        .itemOutputs('16x cosmiccore:drone_frame_3')
        .duration(200)
        .circuit(9)
        .EUt(GTValues.VA[GTValues.LuV]);
    event.recipes.gtceu.assembler('drone_frame_mk4')
        .itemInputs(['gtceu:zpm_electric_motor', '3x gtceu:zpm_robot_arm', 'gtceu:synthetic_pthanterum_rotor'])
        .inputFluids('gtceu:helium 1000')
        .itemOutputs('16x cosmiccore:drone_frame_4')
        .duration(200)
        .circuit(9)
        .EUt(GTValues.VA[GTValues.ZPM]);
    event.recipes.gtceu.assembler('drone_frame_mk5')
        .itemInputs(['gtceu:uv_electric_motor', '3x gtceu:uv_robot_arm', 'gtceu:synthetic_pthanterum_rotor'])
        .inputFluids('gtceu:helium 1000')
        .itemOutputs('16x cosmiccore:drone_frame_5')
        .duration(200)
        .circuit(9)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.assembler('drone_mk1')
        .itemInputs(['cosmiccore:drone_frame_1', '4x minecraft:honeycomb', '4x gtceu:cinderwax_foil', '4x gtceu:steel_rod', 'gtceu:stainless_steel_rotor'])
        .itemOutputs('4x cosmiccore:rusty_drone')
        .duration(40)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.assembler('drone_mk2')
        .itemInputs(['cosmiccore:drone_frame_2', '4x minecraft:honeycomb', '4x gtceu:cinderwax_foil', '4x gtceu:steel_rod', 'gtceu:stainless_steel_rotor'])
        .itemOutputs('4x cosmiccore:robust_drone')
        .duration(40)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.assembler('drone_mk3')
        .itemInputs(['cosmiccore:drone_frame_3', '4x minecraft:honeycomb', '4x gtceu:cinderwax_foil', '4x gtceu:steel_rod', 'gtceu:stainless_steel_rotor'])
        .itemOutputs('4x cosmiccore:industrial_drone')
        .duration(40)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.assembler('drone_mk4')
        .itemInputs(['cosmiccore:drone_frame_4', '4x minecraft:honeycomb', '4x gtceu:cinderwax_foil', '4x gtceu:steel_rod', 'gtceu:stainless_steel_rotor'])
        .itemOutputs('4x cosmiccore:sanguine_dron')
        .duration(40)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.assembler('drone_mk5')
        .itemInputs(['cosmiccore:drone_frame_5', '4x minecraft:honeycomb', '4x gtceu:cinderwax_foil', '4x gtceu:steel_rod', 'gtceu:stainless_steel_rotor'])
        .itemOutputs('4x cosmiccore:plasmatic_drone')
        .duration(40)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('drone_hatch_mk1')
        .itemInputs(['cosmiccore:drone_frame_5', '4x minecraft:honeycomb', '4x gtceu:cinderwax_foil', '4x gtceu:steel_rod', 'gtceu:stainless_steel_rotor'])
        .itemOutputs('4x cosmiccore:plasmatic_drone')
        .duration(40)
        .EUt(GTValues.VA[GTValues.LV]);
})