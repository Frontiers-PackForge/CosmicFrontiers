
ServerEvents.recipes(event => {

    event.recipes.gtceu.mixer(`flinak`)
    .itemInputs('gtceu:lithium_dust')
    .inputFluids('gtceu:fluorine 1000')
    .inputFluids('gtceu:sodium_potassium 1000')
    .outputFluids('gtceu:flinak 3000')
    .duration(80)
    .EUt(GTValues.VA[GTValues.HV]);


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
            .inputFluids(`${tier}_hexafluoride 1000`)
            .inputFluids(`gtceu:enriched_${tier}_hexafluoride 1000`)
            .inputFluids(`gtceu:flinak 10000`)
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
            .inputFluids(`gtceu:${tier}_fuel_salt 500`)
            .outputFluids(`gtceu:superheated_${tier}_fuel_salt 250`)
            .outputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 250`)
            .duration(1200)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.pulse_exchange_steam(`${tier}_salt_waste_freezing_steamy`)
            .inputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:waste_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:steam 32000`)
            .duration(400)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.pulse_exchange_steam_vent(`${tier}_salt_waste_freezing_steamy_lossy`)
            .inputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:waste_${tier}_fuel_salt 1000`)
            .duration(400)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.pulse_exchange_steam(`${tier}_salt_freezing_steamy`)
            .inputFluids(`gtceu:superheated_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:steam 32000`)
            .duration(400)
            .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.pulse_exchange_steam_vent(`${tier}_salt_freezing_steamy_lossy`)
            .inputFluids(`gtceu:superheated_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:waste_${tier}_fuel_salt 1000`)
            .duration(400)
            .EUt(GTValues.VA[GTValues.EV]);

    })
    saltFuelt2.forEach((tier) => {
        event.recipes.gtceu.molten_salt_reactor(`${tier}_salt_reaction_equal`)
            .inputFluids(`gtceu:${tier}_fuel_salt 500`)
            .outputFluids(`gtceu:superheated_${tier}_fuel_salt 250`)
            .outputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 250`)
            .duration(1200)
            .EUt(GTValues.VA[GTValues.IV]);
        event.recipes.gtceu.pulse_exchange_steam(`${tier}_salt_waste_freezing_steamy`)
            .inputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:waste_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:steam 32000`)
            .duration(400)
            .EUt(GTValues.VA[GTValues.IV]);
        event.recipes.gtceu.pulse_exchange_steam_vent(`${tier}_salt_waste_freezing_steamy_lossy`)
            .inputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:waste_${tier}_fuel_salt 1000`)
            .duration(400)
            .EUt(GTValues.VA[GTValues.IV]);

    })
    saltFuelt3.forEach((tier) => {
        event.recipes.gtceu.molten_salt_reactor(`${tier}_salt_reaction_equal`)
            .inputFluids(`gtceu:${tier}_fuel_salt 500`)
            .outputFluids(`gtceu:superheated_${tier}_fuel_salt 250`)
            .outputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 250`)
            .duration(1200)
            .EUt(GTValues.VA[GTValues.LuV]);
        event.recipes.gtceu.pulse_exchange_steam(`${tier}_salt_waste_freezing_steamy`)
            .inputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:waste_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:steam 32000`)
            .duration(400)
            .EUt(GTValues.VA[GTValues.LuV]);
        event.recipes.gtceu.pulse_exchange_steam_vent(`${tier}_salt_waste_freezing_steamy_lossy`)
            .inputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:waste_${tier}_fuel_salt 1000`)
            .duration(400)
            .EUt(GTValues.VA[GTValues.LuV]);

    })
    saltFuelt4.forEach((tier) => {
        event.recipes.gtceu.molten_salt_reactor(`${tier}_salt_reaction_equal`)
            .inputFluids(`gtceu:${tier}_fuel_salt 500`)
            .outputFluids(`gtceu:superheated_${tier}_fuel_salt 250`)
            .outputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 250`)
            .duration(1200)
            .EUt(GTValues.VA[GTValues.ZPM]);
        event.recipes.gtceu.pulse_exchange_steam(`${tier}_salt_waste_freezing_steamy`)
            .inputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:waste_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:steam 32000`)
            .duration(400)
            .EUt(GTValues.VA[GTValues.ZPM]);
        event.recipes.gtceu.pulse_exchange_steam_vent(`${tier}_salt_waste_freezing_steamy_lossy`)
            .inputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:waste_${tier}_fuel_salt 1000`)
            .duration(400)
            .EUt(GTValues.VA[GTValues.ZPM]);

    })
    saltFuelt5.forEach((tier) => {
        event.recipes.gtceu.molten_salt_reactor(`${tier}_salt_reaction_equal`)
            .inputFluids(`gtceu:${tier}_fuel_salt 500`)
            .outputFluids(`gtceu:superheated_${tier}_fuel_salt 250`)
            .outputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 250`)
            .duration(1200)
            .EUt(GTValues.VA[GTValues.UV]);
        event.recipes.gtceu.pulse_exchange_steam(`${tier}_salt_waste_freezing_steamy`)
            .inputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:waste_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:steam 32000`)
            .duration(400)
            .EUt(GTValues.VA[GTValues.UV]);
        event.recipes.gtceu.pulse_exchange_steam_vent(`${tier}_salt_waste_freezing_steamy_lossy`)
            .inputFluids(`gtceu:superheated_waste_${tier}_fuel_salt 1000`)
            .outputFluids(`gtceu:waste_${tier}_fuel_salt 1000`)
            .duration(400)
            .EUt(GTValues.VA[GTValues.UV]);

    })
})