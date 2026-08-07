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
    event.recipes.gtceu.chemical_reactor('frontiers:ages/high_voltage/vanadium_pentoxide')
        .itemInputs('2x gtceu:vanadium_dust')
        .inputFluids('5000x gtceu:oxygen')
        .itemOutputs('7x gtceu:vanadium_pentoxide_dust')
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('frontiers:ages/high_voltage/pyrolitic_contact_catalyst')
        .itemInputs('cosmiccore:utherium_ceramic_membrane', '7x gtceu:vanadium_pentoxide_dust')
        .itemOutputs('cosmiccore:pyroltic_contact_catalyst')
        .circuit(7)
        .duration(240)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('frontiers:ages/high_voltage/pyrolitic_contact_catalyst_regeneration')
        .itemInputs('cosmiccore:spent_pyroltic_contact_catalyst', 'gtceu:vanadium_pentoxide_dust')
        .itemOutputs('cosmiccore:pyroltic_contact_catalyst')
        .circuit(7)
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.forming_press()
        .itemInputs('occultism:chalk_white_impure', 'occultism:marid_essence', '4x gtceu:stainless_steel_dust', '4x cosmiccore:gloomarcine_dust')
        .itemOutputs('occultism:chalk_blue_impure')
        .EUt(GTValues.VA[GTValues.MV], 1)
        .duration(100)
    event.shaped('gtceu:hv_machine_hull', ['ABA', 'CDC', 'AEA'], { A: 'cosmiccore:tenbrium_foil', B: 'gtceu:sterling_silver_plate', C: 'gtceu:dark_steel_single_cable', D: 'gtceu:hv_machine_casing', E: 'gtceu:small_terrasteel_spring' })
    event.shaped('gtceu:hv_machine_casing', ['ABA', 'CDC', 'ACA'], { A: 'cosmiccore:terraweave_cloth', B: 'cosmiccore:hv_cogwork_magicapacitor', C: 'cosmiccore:hv_cladding', D: 'cosmiccore:hv_modular_frameworks' })
    event.shaped('cosmiccore:large_roaster', ['ABA', 'CDC', 'EFE'], { A: 'gtceu:heatproof_machine_casing', B: 'gtceu:hv_electric_pump', C: 'gtceu:black_steel_frame', D: 'gtceu:hv_machine_hull', E: '#gtceu:circuits/hv', F: 'gtceu:hv_electric_motor' })
    event.shaped('2x cosmiccore:hv_cladding', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:galvanized_ethersteel_bolt', B: 'gtceu:polyvinyl_chloride_foil', C: 'gtceu:double_andesite_alloy_plate' })
    event.shaped('cosmiccore:hv_modular_frameworks', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:sterling_silver_bolt', B: 'gtceu:galvanized_ethersteel_rod', C: 'gtceu:small_galvanized_ethersteel_gear' })











})
