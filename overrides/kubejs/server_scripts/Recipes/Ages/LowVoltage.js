ServerEvents.recipes(event => {
    event.shaped('cosmiccore:lv_ember_input_hatch', ['ABA', 'CDC', 'ABA'], { A: 'gtceu:double_steel_plate', B: 'gtceu:aluminium_foil', C: 'embers:wildfire_core', D: 'embers:ember_crystal_cluster' })
    event.recipes.gtceu.chemical_reactor()
        .itemInputs('occultism:otherworld_ashes', 'minecraft:amethyst_shard')
        .itemOutputs('malum:refined_soulstone')
        .inputFluids('250x gtceu:hydrochloric_acid')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(100)
    event.recipes.gtceu.macerator()
        .itemInputs('occultism:raw_iesnium')
        .itemOutputs('2x occultism:iesnium_dust')
        .EUt(2, 1)
        .duration(100)
    event.recipes.gtceu.bender()
        .itemInputs('4x gtceu:wrought_iron_plate')
        .itemOutputs('gtceu:empty_mold')
        .EUt(12, 1)
        .circuit(4)
        .duration(100)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs('gtceu:steel_ingot', 'occultism:iesnium_dust', 'malum:refined_soulstone')
        .itemOutputs('2x malum:soul_stained_steel_ingot')
        .EUt(GTValues.VA[GTValues.MV], 1)
        .blastFurnaceTemp(1700)
        .duration(900)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs('gtceu:lead_ingot', 'cosmiccore:creosote_grease', 'gtceu:carbon_dust')
        .itemOutputs('enderio:dark_steel_ingot')
        .EUt(GTValues.VA[GTValues.MV], 1)
        .blastFurnaceTemp(1700)
        .duration(750)


    event.shaped('8x cosmiccore:lightweight_dark_steel_casing', ['ABA', 'ACA', 'ABA'], { A: 'gtceu:dark_steel_foil', B: 'gtceu:long_dark_steel_rod', C: 'gtceu:dark_steel_frame' })

    event.shaped('cosmiccore:industrial_ore_sorter', ['AAA', 'BCB', 'DED'], { A: 'gtceu:lv_robot_arm', B: 'gtceu:lv_conveyor_module', C: 'cosmiccore:lightweight_dark_steel_casing', D: 'gtceu:tin_single_cable', E: 'gtceu:basic_electronic_circuit' })

    event.shaped('cosmiccore:industrial_flotation_plant', ['AAA', 'BCB', 'DED'], { A: 'minecraft:cauldron', B: 'gtceu:lv_electric_pump', C: 'cosmiccore:lightweight_dark_steel_casing', D: 'gtceu:tin_single_cable', E: 'gtceu:basic_electronic_circuit' })
    event.shaped('cosmiccore:powderizer', ['AAA', 'BCB', 'DED'], { A: 'gtceu:diamond_grinding_head', B: 'gtceu:lv_conveyor_module', C: 'cosmiccore:lightweight_dark_steel_casing', D: 'gtceu:tin_single_cable', E: 'gtceu:basic_electronic_circuit' })
    event.shaped('gtceu:lv_field_generator', ['ABA', 'CDC', 'ABA'], { A: 'malum:soul_stained_steel_plating', B: 'gtceu:dark_steel_foil', C: '#gtceu:circuits/lv', D: 'embers:wildfire_core' })








































})
