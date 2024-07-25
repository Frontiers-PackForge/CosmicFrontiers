
ServerEvents.recipes(event => {

    event.recipes.gtceu.mixer(`flinak`)
        .itemInputs('gtceu:lithium_dust')
        .inputFluids('gtceu:fluorine 1000')
        .inputFluids('gtceu:sodium_potassium 1000')
        .outputFluids('gtceu:flinak 3000')
        .duration(80)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.steam_turbine('super_critical_steam_consume')
        .inputFluids('gtceu:super_critical_steam 1')
        .duration(200)
        .EUt(-GTValues.V[GTValues.HV])
    event.recipes.gtceu.chemical_reactor(`nept_oxide`)
        .itemInputs('gtceu:neptunium_dust')
        .inputFluids('gtceu:oxygen 2000')
        .itemOutputs(`3x gtceu:neptunium_oxide_dust`)
        .duration(80)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.chemical_reactor(`nept_hexa`)
        .itemInputs('3x gtceu:neptunium_oxide_dust')
        .inputFluids('gtceu:hydrofluoric_acid 4000')
        .inputFluids('gtceu:fluorine 2000')
        .outputFluids('gtceu:neptunium_hexafluoride 1000')
        .outputFluids('minecraft:water 1000')
        .duration(80)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.chemical_reactor(`plutonium_oxide`)
        .itemInputs('gtceu:plutonium_dust')
        .inputFluids('gtceu:oxygen 2000')
        .itemOutputs(`3x gtceu:plutonium_oxide_dust`)
        .duration(80)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.chemical_reactor(`plutonium_hexa`)
        .itemInputs('3x gtceu:plutonium_oxide_dust')
        .inputFluids('gtceu:hydrofluoric_acid 4000')
        .inputFluids('gtceu:fluorine 2000')
        .outputFluids('gtceu:plutonium_hexafluoride 1000')
        .outputFluids('minecraft:water 1000')
        .duration(80)
        .EUt(GTValues.VA[GTValues.LV]);
        
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
        
    let saltFuelt1 = [
        'uranium',
        'neptunium',
        'plutonium'
    ]
    let saltFuelt2 = [
        'americium',
        'curium',
        'berkelium'
    ]
    let saltFuelt3 = [
        'californium',
        'einsteinium',

    ]
    let saltFuelt4 = [
        'fermium',
        'medelevium',
    ]
    let saltFuelt5 = [
        'nobelium',
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
        event.recipes.gtceu.molten_salt_reactor(`${tier}_salt_reaction_equal`)
            .inputFluids(`gtceu:${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:superheated_${tier}_fuel_salt 500`)
            .outputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 500`)
            .circuit(1)
            .duration(120)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.molten_salt_reactor(`${tier}_salt_reaction_breeder`)
            .inputFluids(`gtceu:${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:superheated_${tier}_fuel_salt 250`)
            .outputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 750`)
            .circuit(2)
            .duration(120)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.molten_salt_reactor(`${tier}_salt_reaction_power`)
            .inputFluids(`gtceu:${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:superheated_${tier}_fuel_salt 750`)
            .outputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 250`)
            .circuit(3)
            .duration(120)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.pulse_exchange_steam(`${tier}_salt_waste_freezing_steamy`)
            .inputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:waste_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:super_critical_steam 32000`)
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
            .outputFluids(`gtceu:super_critical_steam 32000`)
            .duration(240)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.pulse_exchange_steam_vent(`${tier}_salt_freezing_steamy_lossy`)
            .inputFluids(`gtceu:superheated_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:${tier}_fuel_salt 1000`)
            .duration(240)
            .EUt(GTValues.VA[GTValues.EV]);


    })
    event.recipes.gtceu.centrifuge(`uranium_waste_reproc_tier_1`)
        .inputFluids(`gtceu:waste_uranium_fuel_salt 1000`)
        .outputFluids(`gtceu:fluorine 6000`)
        .outputFluids(`gtceu:flinak 1000`)
        .itemOutputs(`gtceu:neptunium_dust`)
        .duration(120)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.centrifuge(`neptunium_waste_reproc_tier_1`)
        .inputFluids(`gtceu:waste_neptunium_fuel_salt 1000`)
        .outputFluids(`gtceu:fluorine 6000`)
        .outputFluids(`gtceu:flinak 1000`)
        .itemOutputs('gtceu:plutonium_dust')
        .duration(120)
        .EUt(GTValues.VA[GTValues.EV]);

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
    event.recipes.gtceu.molten_salt_reactor(`${tier}_salt_reaction_equal`)
        .inputFluids(`gtceu:${tier}_fuel_salt 1000`)
        .outputFluids(`gtceu:superheated_${tier}_fuel_salt 500`)
        .outputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 500`)
        .circuit(1)
        .duration(120)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.molten_salt_reactor(`${tier}_salt_reaction_breeder`)
        .inputFluids(`gtceu:${tier}_fuel_salt 1000`)
        .outputFluids(`gtceu:superheated_${tier}_fuel_salt 250`)
        .outputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 750`)
        .circuit(2)
        .duration(120)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.molten_salt_reactor(`${tier}_salt_reaction_power`)
        .inputFluids(`gtceu:${tier}_fuel_salt 1000`)
        .outputFluids(`gtceu:superheated_${tier}_fuel_salt 750`)
        .outputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 250`)
        .circuit(3)
        .duration(120)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.pulse_exchange_steam(`${tier}_salt_waste_freezing_steamy`)
        .inputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 1000`)
        .outputFluids(`gtceu:waste_${tier}_fuel_salt 1000`)
        .outputFluids(`gtceu:super_critical_steam 32000`)
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
        .outputFluids(`gtceu:super_critical_steam 32000`)
        .duration(240)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.pulse_exchange_steam_vent(`${tier}_salt_freezing_steamy_lossy`)
        .inputFluids(`gtceu:superheated_${tier}_fuel_salt 1000`)
        .outputFluids(`gtceu:${tier}_fuel_salt 1000`)
        .duration(240)
        .EUt(GTValues.VA[GTValues.EV]);



    })
    event.recipes.gtceu.centrifuge(`plutonium_waste_reproc_tier_1`)
        .inputFluids(`gtceu:waste_plutonium_fuel_salt 1000`)
        .outputFluids(`gtceu:fluorine 6000`)
        .outputFluids(`gtceu:flinak 1000`)
        .itemOutputs(`gtceu:americium_dust`)
        .duration(120)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.centrifuge(`americium_waste_reproc_tier_1`)
        .inputFluids(`gtceu:waste_americium_fuel_salt 1000`)
        .outputFluids(`gtceu:fluorine 6000`)
        .outputFluids(`gtceu:flinak 1000`)
        .itemOutputs('gtceu:curium_dust')
        .duration(120)
        .EUt(GTValues.VA[GTValues.IV]);
    saltFuelt3.forEach((tier) => {


    })
    saltFuelt4.forEach((tier) => {


    })
    saltFuelt5.forEach((tier) => {


    })
})