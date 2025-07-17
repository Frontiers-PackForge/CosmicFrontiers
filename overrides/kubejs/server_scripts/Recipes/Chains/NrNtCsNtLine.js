ServerEvents.recipes(event => {

    event.recipes.gtceu.fusion_reactor('neutronite_start_reactor_bad')
        .chancedInput('gtceu:neutron_reflector', 750, 0)
        .chancedInput('gtceu:neutron_reflector', 500, 0)
        .chancedInput('gtceu:neutron_reflector', 500, 0)
        .inputFluids('gtceu:americium 576')
        .inputFluids('gtceu:europium 576')
        .itemOutputsRanged('gtceu:resh_neutron_meld_dust', 4, 8)
        .outputFluids('gtceu:resh_neutron_plasma 250')
        .outputFluids('gtceu:alef_neutron_plasma 500')
        .outputFluids('gtceu:pey_neutron_plasma 250')
        .outputFluids('gtceu:ayin_neutron_plasma 500')
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
        .itemOutputs('cosmiccore:hot_neutronite_ingot')
        .duration(440)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.vacuum_freezer('neutronite_cooling')
        .itemInputs('cosmiccore:hot_neutronite_ingot')
        .inputFluids('gtceu:liquid_helium 4000')
        .itemOutputs('cosmiccore:neutronite_ingot')
        .outputFluids(`gtceu:helium 1000`)
        .duration(440)
        .EUt(GTValues.VA[GTValues.ZPM]);


    // New materials all derived from neutronite, naqria and various other precursors

    //Ultralight + Fermium -> Moderate Neutronium Plasma //DONE
    // Moderate + Naquadria -> Ultradense Neutronium plasma // DONE
    // ULTRADENSE -> 'kubejs:heavy_neutron_filter' -> Sifted Neutronium Plasma  // DONE
    // SIFTED + ULTRALIGHT => Neutronium Lattice  // DONE
    // Neutronium Crystal Gas + LATTICE => Ultrahot Neutronium Ingot

    //TODO; Some way to make crystaline? idk if it's actually needed tho


    //Other Ingots that take use of Neutronium plasmas via sintering/alloying/doping/imbument etc.
    //Ultralight + Luminite + Desh -> Starmetal
    //Moderate + Vitrius -> Voidspark
    //Sifted + Vibrosomatic Pthanterum -> Sol Steel
    //Trinavine + Neutron Crystal Gas + The Literal Sun -> Ionized Fulgorinth




    //START NEUTRONIUM
    //THE WORST FUSION RECIPE IN THE HISTORY OF COSMIC FRONTIERS LMAOOOOOOOOOOO
    event.recipes.gtceu.fusion_reactor('neutronium_start_reactor')
        .chancedInput('gtceu:neutron_reflector', 1550, 0)
        .chancedInput('gtceu:neutron_reflector', 1200, 0)
        .chancedInput('gtceu:neutron_reflector', 750, 0)
        .inputFluids('cosmiccore:neutronite 1152') //8
        .inputFluids('gtceu:naquadria 1728') //12
        .outputFluids('gtceu:crystaline_neutronium_plasma 288') //2
        .outputFluids('gtceu:sifted_neutronium_plasma 288') //2
        .outputFluids('gtceu:ultradense_neutronium_plasma 576') //4
        .outputFluids('gtceu:moderate_neutronium_plasma 576') //4
        .outputFluids('gtceu:ultralight_neutronium_plasma 1152') //8
        .fusionStartEU(240000000)
        .duration(400)
        .EUt(131072,16);

    event.recipes.gtceu.vacuum_freezer('crystal_plasma_cooling')
        .inputFluids('gtceu:crystaline_neutronium_plasma 144') //1
        .inputFluids('gtceu:liquid_helium 2000') //8
        .outputFluids('gtceu:crystaline_neutronium 144')
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM]);

    //UltraDense 
    event.recipes.gtceu.fusion_reactor('ultradense_neutronium')
        .chancedInput('gtceu:neutron_reflector', 1550, 0)
        .chancedInput('gtceu:neutron_reflector', 1200, 0)
        .chancedInput('kubejs:heavy_neutron_filter', 750, 0)
        .inputFluids('gtceu:moderate_neutronium_plasma 144') //1
        .inputFluids('gtceu:naquadria 144') //1
        .outputFluids('gtceu:ultradense_neutronium_plasma 216') //1.5
        .outputFluids('gtceu:moderate_neutronium_plasma 72') //0.5
        .fusionStartEU(160000000)
        .duration(723)
        .EUt(GTValues.VA[GTValues.ZPM]);

    //U.Light + Fermium = Moderate
    event.recipes.gtceu.fusion_reactor('moderate_neutronium')
    .chancedInput('gtceu:neutron_reflector', 1550, 0)
    .chancedInput('gtceu:neutron_reflector', 1200, 0)
    .chancedInput('kubejs:heavy_neutron_filter', 750, 0)
    .inputFluids('gtceu:ultralight_neutronium_plasma 144') //1
    .inputFluids('gtceu:fermium 144') //1
    .outputFluids('gtceu:moderate_neutronium_plasma 216') //1.5
    .outputFluids('gtceu:ultralight_neutronium_plasma 72') //0.5
    .fusionStartEU(120000000)
    .duration(723)
    .EUt(GTValues.VA[GTValues.LuV]); 
    
    //Sifted Neutronium Plasma - Very slightly lossy, but not by much.
    event.recipes.gtceu.centrifuge('neutron_sifting')
        .chancedInput('kubejs:heavy_neutron_filter', 750, 0)
        .inputFluids('gtceu:ultradense_neutronium_plasma 1152') //8
        .outputFluids('gtceu:sifted_neutronium_plasma 468') //3.25
        .outputFluids('gtceu:ultradense_neutronium_plasma') //4.5 Means this is lossy by 0.25 of an ingot in most cases
        .chancedOutput('gtceu:small_neutronium_dust', 2500, 0)
        .duration(200)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.polymerizer('neutron_lattice')
        //some kind of non-consume component that can be used to abstract the idea the polymerizer is being used like a 3d printer
        .inputFluids('gtceu:pyroflux 4000')
        .inputFluids('gtceu:sifted_neutronium_plasma 432') //3
        .inputFluids('gtceu:ultralight_neutronium_plasma 432') //3
        .outputFluids('gtceu:sifted_neutronium_plasma 144') //1
        .outputFluids('gtceu:ultralight_neutronium_plasma 288') //2
        .itemOutputs('kubejs:neutronium_lattice')
        .duration(490)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.orbital_forge('pure_neutronium')
        .itemInputs('kubejs:neutronium_lattice')
        .inputFluids('gtceu:pyroflux 4000')
        .inputFluids('gtceu:crystaline_neutronium 144') //1
        .itemOutputs('gtceu:hot_neutronium_ingot')
        .dimension('frontiers:sun_orbit')
        .blastFurnaceTemp(7000)
        .duration(200)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.orbital_forge('frontiers:terrasteel_skip')
        .itemInputs('4x gtceu:blue_alloy_dust','2x botania:mana_diamond','2x botania:mana_pearl')
        .inputFluids('gtceu:potent_mana 100')
        .itemOutputs('6x botania:terrasteel_ingot')
        .blastFurnaceTemp(8700)
        .duration(2000)
        .gameStage('Mana Optimization')
        .dimension('frontiers:sun_orbit')
        .EUt(GTValues.VA[GTValues.ZPM]);

})