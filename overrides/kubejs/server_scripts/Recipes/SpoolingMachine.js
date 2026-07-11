ServerEvents.recipes(event => {

    const spoolingMachineTiers = [
        { tier: 'lv', cable: 'tin' },
        { tier: 'mv', cable: 'copper' },
        { tier: 'hv', cable: 'gold' },
        { tier: 'ev', cable: 'aluminium' },
        { tier: 'iv', cable: 'platinum' },
        { tier: 'luv', cable: 'niobium_titanium' },
        { tier: 'zpm', cable: 'vanadium_gallium' },
        { tier: 'uv', cable: 'yttrium_barium_cuprate' }
    ]

    spoolingMachineTiers.forEach(machine => {
        event.shaped(`cosmiccore:${machine.tier}_spooling_machine`, [
            'CAC',
            'RHP',
            'ZAZ'
        ], {
            A: 'gtceu:steel_rod',
            P: `gtceu:${machine.tier}_electric_motor`,
            R: `gtceu:${machine.tier}_robot_arm`,
            C: `#gtceu:circuits/${machine.tier}`,
            H: `gtceu:${machine.tier}_machine_hull`,
            Z: `gtceu:${machine.cable}_single_cable`
        })
    })
    //TODO : Add some kind of Multi-Tiered Stealth Thread String Thingy... I don't know what to call it though!
    event.shaped('cosmiccore:stealth_coating_1', ['ABC', 'BCB', 'CBD'], { A: 'legendarysurvivaloverhaul:warm_string', B: 'cosmiccore:murk_kelp', C: 'gtceu:long_soul_stained_steel_rod', D: 'legendarysurvivaloverhaul:cold_string' })
    event.remove({ id: 'gtceu:assembler/coil_cupronickel' })
    event.recipes.cosmiccore.spooling_machine('coil_cupronickel')
        .itemInputs(['8x gtceu:cupronickel_double_wire', '8x gtceu:bronze_foil'])
        .inputFluids('144x gtceu:tin_alloy')
        .itemOutputs('gtceu:cupronickel_coil_block')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.remove({ id: 'gtceu:assembler/coil_kanthal' })
    event.recipes.cosmiccore.spooling_machine('coil_kanthal')
        .itemInputs(['8x gtceu:kanthal_double_wire', '8x gtceu:stainless_steel_foil'])
        .inputFluids('144x gtceu:cupronickel')
        .itemOutputs('gtceu:kanthal_coil_block')
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])

    event.remove({ id: 'gtceu:assembler/coil_nichrome' })
    event.recipes.cosmiccore.spooling_machine('coil_nichrome')
        .itemInputs(['8x gtceu:nichrome_double_wire', '8x gtceu:galvanized_ethersteel_foil'])
        .inputFluids('144x gtceu:kanthal')
        .itemOutputs('gtceu:nichrome_coil_block')
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.cosmiccore.spooling_machine('prisma_tungstensteel_coil')
        .itemInputs(['8x cosmiccore:prismatic_tungstensteel_double_wire', '8x gtceu:platinum_foil'])
        .inputFluids('144x gtceu:nichrome')
        .itemOutputs('cosmiccore:prismatic_tungstensteel_coil_block')
        .duration(500)
        .EUt(GTValues.VA[GTValues.EV])

    event.remove({ id: 'gtceu:assembler/voltage_coil_ulv' })
    event.recipes.cosmiccore.spooling_machine('voltage_coil_ulv')
        .itemInputs(['gtceu:magnetic_iron_rod', '16x gtceu:fine_lead_wire'])
        .itemOutputs('gtceu:ulv_voltage_coil')
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV] / 2)

    event.remove({ id: 'gtceu:assembler/voltage_coil_lv' })
    event.recipes.cosmiccore.spooling_machine('voltage_coil_lv')
        .itemInputs(['gtceu:magnetic_iron_rod', '16x gtceu:fine_steel_wire'])
        .itemOutputs('gtceu:lv_voltage_coil')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    event.remove({ id: 'gtceu:assembler/voltage_coil_mv' })
    event.recipes.cosmiccore.spooling_machine('voltage_coil_mv')
        .itemInputs(['gtceu:magnetic_steel_rod', '16x gtceu:fine_aluminium_wire'])
        .itemOutputs('gtceu:mv_voltage_coil')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV] / 2)

    event.remove({ id: 'gtceu:assembler/voltage_coil_hv' })
    event.recipes.cosmiccore.spooling_machine('voltage_coil_hv')
        .itemInputs(['gtceu:magnetic_steel_rod', '16x gtceu:fine_black_steel_wire'])
        .itemOutputs('gtceu:hv_voltage_coil')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV] / 2)

    event.remove({ id: 'gtceu:assembler/voltage_coil_ev' })
    event.recipes.cosmiccore.spooling_machine('voltage_coil_ev')
        .itemInputs(['gtceu:magnetic_neodymium_rod', '16x gtceu:fine_platinum_wire'])
        .itemOutputs('gtceu:ev_voltage_coil')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV] / 2)

    event.remove({ id: 'gtceu:assembler/voltage_coil_iv' })
    event.recipes.cosmiccore.spooling_machine('voltage_coil_iv')
        .itemInputs(['gtceu:magnetic_neodymium_rod', '16x gtceu:fine_iridium_wire'])
        .itemOutputs('gtceu:iv_voltage_coil')
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV] / 2)

    event.remove({ id: 'gtceu:assembler/voltage_coil_luv' })
    event.recipes.cosmiccore.spooling_machine('voltage_coil_luv')
        .itemInputs(['gtceu:magnetic_samarium_rod', '16x gtceu:fine_naquadah_wire'])
        .itemOutputs('gtceu:luv_voltage_coil')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LuV] / 2)

    event.remove({ id: 'gtceu:assembler/voltage_coil_zpm' })
    event.recipes.cosmiccore.spooling_machine('voltage_coil_zpm')
        .itemInputs(['gtceu:long_magnetic_samarium_rod', '16x cosmiccore:fine_neutronite_wire'])
        .itemOutputs('gtceu:zpm_voltage_coil')
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM] / 2)
})
