ServerEvents.recipes(event => {
    event.shaped('cosmiccore:lv_desalter', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:bronze_plate',
        B: 'gtceu:lv_electric_pump',
        C: '#gtceu:circuits/lv',
        D: 'gtceu:glass_tube',
        E: 'gtceu:lv_machine_hull'
    }).id('frontiers:petrochem/lv_desalter')

    event.shaped('cosmiccore:mv_desalter', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:stainless_steel_plate',
        B: 'gtceu:mv_electric_pump',
        C: '#gtceu:circuits/mv',
        D: 'cosmiccore:lv_desalter',
        E: 'gtceu:mv_machine_hull'
    }).id('frontiers:petrochem/mv_desalter')

    event.recipes.cosmiccore.phase_separator('frontiers:petrochem/balanced_multi_phase_separation')
        .inputFluids('16000x gtceu:multi_phase_oil')
        .outputFluids(['3200x cosmiccore:salt_laden_light_oil', '6400x cosmiccore:salt_laden_oil', '3200x cosmiccore:salt_laden_heavy_oil', '1200x cosmiccore:wet_natural_gases', '1600x cosmiccore:oil_rich_wastewater', '400x cosmiccore:oily_sludge'])
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.cosmiccore.phase_separator('frontiers:petrochem/volatile_multi_phase_separation')
        .inputFluids('16000x cosmiccore:volatile_multi_phase_oil')
        .outputFluids(['6400x cosmiccore:salt_laden_light_oil', '4000x cosmiccore:salt_laden_oil', '800x cosmiccore:salt_laden_heavy_oil', '4000x cosmiccore:wet_natural_gases', '600x cosmiccore:oil_rich_wastewater', '200x cosmiccore:oily_sludge'])
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.cosmiccore.desalter('frontiers:petrochem/salt_laden_light_oil_desalting')
        .inputFluids(['800x cosmiccore:salt_laden_light_oil', '100x gtceu:distilled_water', '10x cosmiccore:polyethylene_oxide'])
        .outputFluids(['750x gtceu:light_oil', '130x cosmiccore:sour_brine', '30x cosmiccore:oily_sludge'])
        .duration(20)
        .EUt(160)

    event.recipes.cosmiccore.desalter('frontiers:petrochem/salt_laden_oil_desalting')
        .inputFluids(['800x cosmiccore:salt_laden_oil', '150x gtceu:distilled_water', '10x cosmiccore:polyethylene_oxide'])
        .outputFluids(['750x gtceu:oil', '175x cosmiccore:sour_brine', '35x cosmiccore:oily_sludge'])
        .duration(30)
        .EUt(240)

    event.recipes.cosmiccore.desalter('frontiers:petrochem/salt_laden_heavy_oil_desalting')
        .inputFluids(['800x cosmiccore:salt_laden_heavy_oil', '200x gtceu:distilled_water', '10x cosmiccore:polyethylene_oxide'])
        .outputFluids(['750x gtceu:heavy_oil', '200x cosmiccore:sour_brine', '60x cosmiccore:oily_sludge'])
        .duration(40)
        .EUt(480)

    event.recipes.cosmiccore.simple_desalter('frontiers:petrochem/simple_volatile_multi_phase_oil_desalting')
        .inputFluids(['1000x cosmiccore:volatile_multi_phase_oil', '200x gtceu:distilled_water'])
        .outputFluids(['700x gtceu:light_oil', '430x cosmiccore:sour_brine', '80x cosmiccore:oily_sludge'])
        .duration(80)
        .EUt(16)

    event.recipes.cosmiccore.simple_desalter('frontiers:petrochem/simple_multi_phase_oil_desalting')
        .inputFluids(['1000x gtceu:multi_phase_oil', '300x gtceu:distilled_water'])
        .outputFluids(['650x gtceu:oil', '500x cosmiccore:sour_brine', '160x cosmiccore:oily_sludge'])
        .duration(120)
        .EUt(24)

    event.recipes.gtceu.centrifuge('frontiers:petrochem/oilsands_dust_recovery')
        .itemInputs('gtceu:oilsands_dust')
        .chancedOutput('minecraft:sand', 7500)
        .outputFluids('2000x gtceu:multi_phase_oil')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.cosmiccore.phase_separator('frontiers:petrochem/ambient_wet_gas_knockout')
        .inputFluids('4000x cosmiccore:wet_natural_gases')
        .outputFluids(['2800x gtceu:natural_gas', '600x cosmiccore:salt_laden_light_oil', '600x cosmiccore:oil_rich_wastewater'])
        .circuit(1)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.cosmiccore.phase_separator('frontiers:petrochem/chilled_wet_gas_recovery')
        .inputFluids('4000x cosmiccore:wet_natural_gases')
        .outputFluids(['2200x gtceu:sour_refinery_gas', '900x cosmiccore:salt_laden_light_oil', '900x cosmiccore:oil_rich_wastewater'])
        .circuit(2)
        .duration(80)
        .EUt(320)

    event.recipes.gtceu.centrifuge('frontiers:petrochem/oil_rich_wastewater_centrifuging')
        .inputFluids('4000x cosmiccore:oil_rich_wastewater')
        .outputFluids(['3200x minecraft:water', '400x gtceu:multi_phase_oil', '300x cosmiccore:sour_brine', '100x cosmiccore:oily_sludge'])
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.cosmiccore.chemical_dehydrator('frontiers:petrochem/sour_brine_dehydration')
        .inputFluids('4000x cosmiccore:sour_brine')
        .itemOutputs('8x gtceu:salt_dust')
        .outputFluids(['3000x gtceu:distilled_water', '250x cosmiccore:sour_process_water'])
        .duration(160)
        .EUt(24)

    event.recipes.gtceu.centrifuge('frontiers:petrochem/oily_sludge_dewatering')
        .inputFluids('2000x cosmiccore:oily_sludge')
        .itemOutputs('2x gtceu:carbon_dust')
        .outputFluids(['500x gtceu:multi_phase_oil', '1200x cosmiccore:oil_rich_wastewater'])
        .duration(60)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.cosmiccore.sludge_digestor('frontiers:petrochem/deep_oily_sludge_digestion')
        .inputFluids(['4000x cosmiccore:oily_sludge', '2000x gtceu:steam'])
        .itemOutputs('6x gtceu:carbon_dust')
        .outputFluids(['1600x gtceu:multi_phase_oil', '3600x cosmiccore:sour_brine'])
        .duration(200)
        .EUt(256)
})
