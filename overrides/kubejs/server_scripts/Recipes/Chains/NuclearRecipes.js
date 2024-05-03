
ServerEvents.recipes(event => {
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