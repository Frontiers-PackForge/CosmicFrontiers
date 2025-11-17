const $ChanceLogic = Java.loadClass('com.gregtechceu.gtceu.api.recipe.chance.logic.ChanceLogic')
ServerEvents.recipes(event => {

    event.recipes.gtceu.mixer(`flinak`)
        .itemInputs('gtceu:lithium_dust')
        .inputFluids('gtceu:fluorine 1000')
        .inputFluids('gtceu:sodium_potassium 1000')
        .outputFluids('gtceu:flinak 3000')
        .duration(80)
        .EUt(GTValues.VA[GTValues.HV]);



    event.recipes.gtceu.assembler(`fleshy_uranium_rod_production`)
        .itemInputs(['cosmiccore:empty_fuel_rod', '54x gtceu:uranium_dust', '6x gtceu:uranium_235_dust', '16x malum:living_flesh'])
        .itemOutputs('cosmiccore:flesh_packed_uranium_fuel')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.HV]);



    event.recipes.gtceu.vile_fission(`fleshy_uranium`)
        .itemInputs('cosmiccore:flesh_packed_uranium_fuel')
        .itemOutputs('cosmiccore:spent_flesh_packed_uranium_fuel')
        .duration(6000)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.electric_blast_furnace('yeah_fleshy_waste_fuel_rod_uranium')
        .itemInputs('cosmiccore:spent_flesh_packed_uranium_fuel')
        .itemOutputs(['cosmiccore:superheated_fuel_rod', '64x cosmiccore:fleshy_uranium_waste', '64x cosmiccore:fleshy_uranium_waste'])
        .blastFurnaceTemp(3600)
        .duration(700)
        .EUt(GTValues.VA[GTValues.EV]);




    event.recipes.gtceu.vile_fission(`fleshy_plutonium`)
        .itemInputs('cosmiccore:flesh_packed_plutonium_fuel')
        .itemOutputs('cosmiccore:spent_flesh_packed_plutonium_fuel')
        .duration(6000)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.electric_blast_furnace('yeah_fleshy_waste_fuel_rod')
        .itemInputs('cosmiccore:spent_flesh_packed_plutonium_fuel')
        .itemOutputs(['cosmiccore:superheated_fuel_rod', '64x cosmiccore:fleshy_plutonium_waste', '64x cosmiccore:fleshy_plutonium_waste'])
        .blastFurnaceTemp(3600)
        .duration(700)
        .EUt(GTValues.VA[GTValues.EV]);


    event.recipes.gtceu.vile_fission(`fleshy_neptunium`)
        .itemInputs('cosmiccore:flesh_packed_neptunium_fuel')
        .itemOutputs('cosmiccore:spent_flesh_packed_neptunium_fuel')
        .duration(6000)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.electric_blast_furnace('yeah_fleshy_waste_fuel_rod_neptunium')
        .itemInputs('cosmiccore:spent_flesh_packed_neptunium_fuel')
        .itemOutputs(['cosmiccore:superheated_fuel_rod', '64x cosmiccore:fleshy_neptunium_waste', '64x cosmiccore:fleshy_neptunium_waste'])
        .blastFurnaceTemp(3600)
        .duration(700)
        .EUt(GTValues.VA[GTValues.EV]);


    event.recipes.gtceu.sifter(`fleshy_neptunium`)
        .itemInputs('cosmiccore:fleshy_neptunium_waste')
        .chancedOutput('malum:rotting_essence', 9500, 0)
        .chancedOutput('malum:void_salts', 8000, 0)
        .chancedOutput('gtceu:tantalum_dust', 6500, 0)
        .chancedOutput('gtceu:indium_dust', 3500, 0)
        .chancedOutput('gtceu:actinium_dust', 3500, 0)
        .chancedOutput('gtceu:californium_dust', 3500, 0)
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV]);


    event.recipes.gtceu.sifter(`fleshy_plutonium`)
        .itemInputs('cosmiccore:fleshy_plutonium_waste')
        .chancedOutput('malum:rotting_essence', 9500, 0)
        .chancedOutput('malum:void_salts', 8000, 0)
        .chancedOutput('gtceu:tantalum_dust', 6500, 0)
        .chancedOutput('gtceu:indium_dust', 3500, 0)
        .chancedOutput('cosmiccore:somanone_dust', 3500, 0)
        .chancedOutput('gtceu:neptunium_dust', 3500, 0)
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV]);


    event.recipes.gtceu.sifter(`fleshy_uranium`)
        .itemInputs('cosmiccore:fleshy_uranium_waste')
        .chancedOutput('malum:rotting_essence', 9500, 0)
        .chancedOutput('malum:void_salts', 8000, 0)
        .chancedOutput('gtceu:hafnium_dust', 6500, 0)
        .chancedOutput('gtceu:praseodymium_dust', 3500, 0)
        .chancedOutput('cosmiccore:somanone_dust', 3500, 0)
        .chancedOutput('gtceu:plutonium_dust', 3500, 0)
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV]);


    event.recipes.gtceu.centrifuge(`uranium_waste_reproc_tier_1`)
        .inputFluids(`gtceu:waste_uranium_fuel_salt 1000`)
        .outputFluids(`gtceu:fluorine 6000`)
        .outputFluids(`gtceu:flinak 1000`)
        .itemOutputs('gtceu:plutonium_dust')
        .chancedOutput(`gtceu:uranium_dust`, 500, 500)
        .itemOutputsRanged('gtceu:neptunium_dust', 2, 4)
        .itemOutputsRanged('gtceu:plutonium_dust', 1, 2)
        .itemOutputsRanged('gtceu:americium_dust', 1, 2)
        .chancedOutput(`gtceu:americium_dust`, 3500, 1500)
        .duration(120)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.centrifuge(`americium_waste_reproc_tier_1`)
        .inputFluids(`gtceu:waste_americium_fuel_salt 1000`)
        .outputFluids(`gtceu:fluorine 6000`)
        .outputFluids(`gtceu:flinak 1000`)
        .itemOutputs('gtceu:curium_dust')
        .chancedOutput(`gtceu:americium_dust`, 500, 500)
        .itemOutputsRanged('gtceu:berkelium_dust', 1, 2)
        .itemOutputsRanged('gtceu:californium_dust', 1, 2)
        .chancedOutput('gtceu:californium_dust', 3500, 1500)
        .duration(120)
        .EUt(GTValues.VA[GTValues.IV]);
    // event.recipes.gtceu.chemical_reactor("test_xor")
    //     .itemInputs('1x minecraft:stone')
    //     .chancedFluidOutputLogic($ChanceLogic.XOR)
    //     .chancedFluidOutput('gtceu:oxygen 500', 5000, 0)
    //     .chancedFluidOutput('gtceu:fluorine 500', 2500, 0)
    //     .duration(400)
    //     .EUt(25)
    let saltFuelt1 = [
        'uranium',
    ]
    let saltFuelt2 = [
        'americium',
    ]
    let saltFuelt3 = [
        'californium',
    ]
    let saltFuelt4 = [
        'medelevium',
    ]
    let saltFuelt5 = [
        'lawrencium',
    ]
    let coilTier = [
        'cupronickel',
        'kanthal',
        'nichrome',
        'tungstensteel',
        'hssg',
        'naquadah',
        'trinium',
        'tritanium'
    ]
    saltFuelt1.forEach((tier) => {
        event.recipes.gtceu.centrifuge(`${tier}_fluoride_centri`)
            .inputFluids(`gtceu:${tier}_hexafluoride 1000`)
            .outputFluids(`gtceu:depleted_${tier}_hexafluoride 900`)
            .outputFluids(`gtceu:enriched_${tier}_hexafluoride 100`)
            .duration(100)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.chemical_reactor(`${tier}_salt_fuel`)
            .inputFluids(`gtceu:depleted_${tier}_hexafluoride 9000`)
            .inputFluids(`gtceu:enriched_${tier}_hexafluoride 1000`)
            .inputFluids(`gtceu:flinak 10000`)
            .outputFluids(`gtceu:${tier}_fuel_salt 10000`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.void_salt_fission(`${tier}_salt_reaction_equal`)
            .inputFluids(`gtceu:${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:superheated_${tier}_fuel_salt 500`)
            .outputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 500`)
            .circuit(1)
            .duration(120)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.void_salt_fission(`${tier}_salt_reaction_breeder`)
            .inputFluids(`gtceu:${tier}_fuel_salt 1000`)
            .outputFluids([`gtceu:superheated_${tier}_fuel_salt 250`, `gtceu:superheated_waste_${tier}_fuel_salt 750`])
            .circuit(2)
            .duration(120)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.void_salt_fission(`${tier}_salt_reaction_power`)
            .inputFluids(`gtceu:${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:superheated_${tier}_fuel_salt 750`)
            .outputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 250`)
            .circuit(3)
            .duration(120)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.pulse_exchange_steam(`${tier}_salt_waste_freezing_steamy`)
            .inputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:waste_${tier}_fuel_salt 1000`)
            .perTick(true)
            .outputFluids(`gtceu:super_critical_steam 8000`)
            .perTick(false)
            .duration(240)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.pulse_exchange_steam_vent(`${tier}_salt_waste_freezing_steamy_lossy`)
            .inputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:waste_${tier}_fuel_salt 1000`)
            .duration(240)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.pulse_exchange_steam(`${tier}_salt_freezing_steamy`)
            .inputFluids(`gtceu:superheated_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:${tier}_fuel_salt 1000`)
            .perTick(true)
            .outputFluids(`gtceu:super_critical_steam 8000`)
            .perTick(false)
            .duration(240)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.pulse_exchange_steam_vent(`${tier}_salt_freezing_steamy_lossy`)
            .inputFluids(`gtceu:superheated_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:${tier}_fuel_salt 1000`)
            .duration(240)
            .EUt(GTValues.VA[GTValues.EV]);


    })
    event.recipes.gtceu.chemical_reactor(`americium_oxide`)
        .itemInputs('gtceu:americium_dust')
        .inputFluids('gtceu:oxygen 2000')
        .itemOutputs(`3x gtceu:americium_oxide_dust`)
        .duration(80)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.chemical_reactor(`americium_hexa`)
        .itemInputs('3x gtceu:americium_oxide_dust')
        .inputFluids('gtceu:hydrofluoric_acid 4000')
        .inputFluids('gtceu:fluorine 2000')
        .outputFluids('gtceu:americium_hexafluoride 1000')
        .outputFluids('minecraft:water 1000')
        .duration(80)
        .EUt(GTValues.VA[GTValues.LV]);
    saltFuelt2.forEach((tier) => {
        event.recipes.gtceu.centrifuge(`${tier}_fluoride_centri`)
            .inputFluids(`gtceu:${tier}_hexafluoride 1000`)
            .outputFluids(`gtceu:depleted_${tier}_hexafluoride 900`)
            .outputFluids(`gtceu:enriched_${tier}_hexafluoride 100`)
            .duration(100)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.chemical_reactor(`${tier}_salt_fuel`)
            .inputFluids(`gtceu:depleted_${tier}_hexafluoride 9000`)
            .inputFluids(`gtceu:enriched_${tier}_hexafluoride 1000`)
            .inputFluids(`gtceu:flinak 10000`)
            .outputFluids(`gtceu:${tier}_fuel_salt 10000`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.void_salt_fission(`${tier}_salt_reaction_equal`)
            .inputFluids(`gtceu:${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:superheated_${tier}_fuel_salt 500`)
            .outputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 500`)
            .circuit(1)
            .duration(120)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.void_salt_fission(`${tier}_salt_reaction_breeder`)
            .inputFluids(`gtceu:${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:superheated_${tier}_fuel_salt 250`)
            .outputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 750`)
            .circuit(2)
            .duration(120)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.void_salt_fission(`${tier}_salt_reaction_power`)
            .inputFluids(`gtceu:${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:superheated_${tier}_fuel_salt 750`)
            .outputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 250`)
            .circuit(3)
            .duration(120)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.pulse_exchange_steam(`${tier}_salt_waste_freezing_steamy`)
            .inputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:waste_${tier}_fuel_salt 1000`)
            .perTick(true)
            .outputFluids(`gtceu:super_critical_steam 8000`)
            .perTick(false)
            .duration(240)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.pulse_exchange_steam_vent(`${tier}_salt_waste_freezing_steamy_lossy`)
            .inputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:waste_${tier}_fuel_salt 1000`)
            .duration(240)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.pulse_exchange_steam(`${tier}_salt_freezing_steamy`)
            .inputFluids(`gtceu:superheated_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:${tier}_fuel_salt 1000`)
            .perTick(true)
            .outputFluids(`gtceu:super_critical_steam 8000`)
            .perTick(false)
            .duration(240)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.pulse_exchange_steam_vent(`${tier}_salt_freezing_steamy_lossy`)
            .inputFluids(`gtceu:superheated_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:${tier}_fuel_salt 1000`)
            .duration(240)
            .EUt(GTValues.VA[GTValues.EV]);



    })
    saltFuelt3.forEach((tier) => {


    })
    saltFuelt4.forEach((tier) => {


    })
    saltFuelt5.forEach((tier) => {


    })
})