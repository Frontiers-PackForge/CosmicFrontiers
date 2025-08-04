ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:fusion_reactor/americium_and_naquadria_to_neutronium_plasma' })
    event.remove({ id: 'gtceu:fusion_reactor/silver_and_lithium_to_indium_plasma' })
    event.remove({ id: 'gtceu:fusion_reactor/potassium_and_fluorine_to_nickel_plasma' })
    event.remove({ id: 'gtceu:fusion_reactor/gold_and_mercury_to_radon_plasma' })
    event.remove({ id: 'gtceu:fusion_reactor/lantanum_and_silicon_to_lutetium_plasma' })
    event.remove({ id: 'gtceu:fusion_reactor/hydrogen_and_vanadium_to_chromium_plasma' })
    event.remove({ id: 'gtceu:fusion_reactor/enriched_naquadah_and_radon_to_naquadria_plasma' })
    event.remove({ id: 'gtceu:fusion_reactor/silver_and_copper_to_osmium_plasma' })
    event.remove({ id: 'gtceu:fusion_reactor/silver_and_helium_3_to_tin_plasma' })
    event.remove({ id: 'gtceu:fusion_reactor/krypton_and_cerium_to_plutonium_241_plasma' })
    event.remove({ id: 'gtceu:fusion_reactor/mercury_and_magnesium_to_uranium_235_plasma' })
    event.remove({ id: 'gtceu:fusion_reactor/carbon_and_helium_3_to_oxygen_plasma' })
    event.remove({ id: 'gtceu:fusion_reactor/beryllium_and_deuterium_to_nitrogen_plasma' })
    event.remove({ id: 'gtceu:fusion_reactor/deuterium_and_tritium_to_helium_plasma' })
    event.remove({ id: 'gtceu:fusion_reactor/xenon_and_zinc_to_plutonium_239_plasma' })
    event.remove({ id: 'gtceu:fusion_reactor/silicon_and_magnesium_to_iron_plasma' })
    event.remove({ id: 'gtceu:fusion_reactor/gold_and_aluminium_to_uranium_238_plasma' })
    event.remove({ id: 'gtceu:fusion_reactor/plutonium_241_and_hydrogen_gas_to_americium_plasma' })
    event.remove({ id: 'gtceu:fusion_reactor/lutenium_and_chromium_to_americium_plasma' })
    event.remove({ id: 'gtceu:fusion_reactor/neodymium_and_hydrogen_to_europium_plasma' })

    //NOTE ; Enable these after you've made replacements for the old fusion recipes.
    event.remove({ id: 'gtceu:fusion_reactor/titanium_and_duranium_to_tritanium_plasma' })
    event.remove({ id: 'gtceu:fusion_reactor/gallium_and_radon_to_duranium_plasma' })
    // event.remove({ id: 'gtceu:fusion_reactor/arsenic_and_ruthenium_to_darmstadtium_plasma' })


    //TODO
    /*
    Harder Recipes for
    Duranium 
    Tritanium 
    Darmstadtium (OLD UV MATERIAL)
    Americium Skip (Better Rates than Fusion MSR1)
    Tau Plasma (And better tau oil creation methods.)
    
    */

    event.recipes.gtceu.fusion_reactor('frontiers:new_duranium_and_tritanium')
        .chancedInput('gtceu:neutron_reflector', 1550, 0)
        .chancedInput('gtceu:neutron_reflector', 1200, 0)
        .chancedInput('gtceu:neutron_reflector', 1200, 0)
        .inputFluids('gtceu:titanium 432') //3
        .inputFluids('gtceu:gallium 576') //4 -> Two Ingots of Duranium and 1 of Tritanium
        .inputFluids('gtceu:radon 4500') //4.5
        .outputFluids('gtceu:duranium 288') //2
        .outputFluids('gtceu:tritanium 144') //1
        .fusionStartEU(320000000)
        .duration(380)
        .EUt(GTValues.VA[GTValues.ZPM]);


    event.recipes.gtceu.fusion_reactor('frontiers:americium')
        .chancedInput('gtceu:neutron_reflector', 850, 0)
        .chancedInput('gtceu:neutron_reflector', 700, 0)
        .chancedInput('gtceu:neutron_reflector', 700, 0)
        .inputFluids('gtceu:uranium 432') //3
        .inputFluids('gtceu:cobalt 576') //4 -> Two Ingots of Duranium and 1 of Tritanium
        .inputFluids('gtceu:radon 144')
        .outputFluids('gtceu:americium 576') //2
        .outputFluids('gtceu:tennessine 144') //1
        .fusionStartEU(320000000)
        .duration(270)
        .EUt(GTValues.VA[GTValues.ZPM]);

})