ServerEvents.recipes(event => {

    event.recipes.gtceu.assembler()
        .itemInputs('4x gtceu:steel_rod', '2x gtceu:tempered_iesnium_bolt', 'gtceu:small_steel_gear')
        .itemOutputs('4x cosmiccore:lv_modular_frameworks')
        .inputFluids('250x gtceu:concrete')
        .EUt(GTValues.VA[GTValues.HV], 1)
        .duration(350)

    event.recipes.gtceu.assembler()
        .itemInputs('4x gtceu:steel_plate', '2x gtceu:tempered_iesnium_foil', 'cosmiccore:overloaded_pearls')
        .itemOutputs('5x cosmiccore:lv_cogwork_magicapacitor')
        .inputFluids('250x gtceu:dark_steel')
        .EUt(GTValues.VA[GTValues.HV], 1)
        .duration(250)

    event.recipes.gtceu.forming_press()
        .itemInputs('gtceu:treated_wood_dust', 'gtceu:rubber_ingot', 'gtceu:lead_bolt')
        .itemOutputs('3x cosmiccore:lv_cladding')
        .EUt(GTValues.VA[GTValues.HV], 1)
        .duration(200)
    event.recipes.gtceu.assembler('frontiers:ae2/pattern_provider_hv')
        .itemInputs('4x gtceu:luminized_titanium_plate', '#gtceu:circuits/mv', '2x gtceu:hv_robot_arm', 'gtceu:hv_machine_hull')
        .itemOutputs('4x ae2:pattern_provider')
        .EUt(GTValues.VH[GTValues.HV], 1)
        .duration(300)
    event.shaped('gtceu:hv_machine_casing', ['ABA', 'CDC', 'ACA'], { A: 'cosmiccore:terraweave_cloth', B: 'cosmiccore:hv_cogwork_magicapacitor', C: 'cosmiccore:hv_cladding', D: 'cosmiccore:hv_modular_frameworks' })

})
