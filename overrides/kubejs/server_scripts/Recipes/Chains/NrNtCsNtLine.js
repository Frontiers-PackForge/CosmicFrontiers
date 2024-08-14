ServerEvents.recipes(event => {

    event.recipes.gtceu.fusion_reactor('neutronite_start_reactor_bad')
        .chancedInput('gtceu:neutron_reflector', 750, 0)
        .chancedInput('gtceu:neutron_reflector', 500, 0)
        .chancedInput('gtceu:neutron_reflector', 500, 0)
        .inputFluids('gtceu:americium 576')
        .inputFluids('gtceu:europium 576')
        .itemOutputsRanged('gtceu:resh_neutron_meld_dust', 4, 8)
        .outputFluids('gtceu:resh_neutron_plasma 250')
        .outputFluids('gtceu:alef_neutron_plasma 250')
        .outputFluids('gtceu:resh_neutron_plasma 250')
        .outputFluids('gtceu:pey_neutron_plasma 250')
        .outputFluids('gtceu:ayin_neutron_plasma 250')
        //borkeed, scream at onyon wtf is a ambiguous type
        // .chancedFluidOutput('gtceu:resh_neutron_plasma', 2500, 1000)
        // .chancedFluidOutput('gtceu:alef_neutron_plasma', 2500, 1000)
        // .chancedFluidOutput('gtceu:resh_neutron_plasma', 2500, 1000)
        // .chancedFluidOutput('gtceu:pey_neutron_plasma', 2500, 1000)
        // .chancedFluidOutput('gtceu:ayin_neutron_plasma', 2500, 1000)
        .fusionStartEU(160000000)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LuV]);


    event.recipes.gtceu.vacuum_freezer(`hebrew_plasma_cooling_1`)
        .inputFluids(`gtceu:resh_neutron_plasma 1000`)
        .itemOutputs('4x gtceu:resh_neutron_meld_dust')
        .duration(240)
        .EUt(GTValues.VA[GTValues.ZPM]);
    event.recipes.gtceu.vacuum_freezer(`hebrew_plasma_cooling_2`)
        .inputFluids(`gtceu:pey_neutron_plasma 1000`)
        .outputFluids(`gtceu:pey_neutron_gas 1000`)
        .duration(240)
        .EUt(GTValues.VA[GTValues.ZPM]);
    event.recipes.gtceu.vacuum_freezer(`hebrew_plasma_cooling_3`)
        .inputFluids(`gtceu:ayin_neutron_plasma 1000`)
        .outputFluids(`gtceu:ayin_neutron_fluid 1000`)
        .duration(240)
        .EUt(GTValues.VA[GTValues.ZPM]);



    event.recipes.gtceu.electric_blast_furnace('fuse_alef_to_resh')
        .itemInputs('4x gtceu:resh_neutron_meld_dust')
        .inputFluids('gtceu:alef_neutron_plasma 500')
        .itemOutputs('gtceu:hot_neutronic_composite_ingot')
        .circuit(1)
        .blastFurnaceTemp(7000)
        .duration(700)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.electric_blast_furnace('critical_step_one')
        .itemInputs('4x gtceu:resh_neutron_meld_dust')
        .itemInputs('gtceu:hot_neutronic_composite_ingot')
        .inputFluids('gtceu:ayin_neutron_fluid 500')
        .itemOutputs('gtceu:hot_critical_neutron_mass_ingot')
        .circuit(2)
        .blastFurnaceTemp(7500)
        .duration(1000)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.arc_furnace('neutronite_hot')
        .itemInputs('gtceu:hot_critical_neutron_mass_ingot')
        .inputFluids('gtceu:pey_neutron_gas 250')
        .itemOutputs('gtceu:hot_neutronite_ingot')
        .duration(440)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.vacuum_freezer('neutronite_cooling')
        .itemInputs('gtceu:hot_neutronite_ingot')
        .inputFluids('gtceu:liquid_helium 4000')
        .itemOutputs('gtceu:neutronite_ingot')
        .outputFluids(`gtceu:helium 1000`)
        .duration(440)
        .EUt(GTValues.VA[GTValues.ZPM]);

})