ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer('frontiers:inert_cinder_gas/from_dwarven_oil')
        .itemInputs('embers:ember_grit')
        .inputFluids('1000x embers:dwarven_oil')
        .inputFluids('250x gtceu:steam')
        .outputFluids('1000x gtceu:inert_cinder_gas')
        .EUt(GTValues.V[GTValues.LV], 1)
        .duration(100)

    const rainbowCaneDyeColors = [
        'white', 'orange', 'magenta', 'light_blue',
        'yellow', 'lime', 'pink', 'gray',
        'light_gray', 'cyan', 'purple', 'blue',
        'brown', 'green', 'red', 'black'
    ]

    rainbowCaneDyeColors.forEach((color, index) => {
        event.recipes.gtceu.chemical_reactor(`frontiers:${color}_dye`)
            .itemInputs('4x cosmiccore:rainbow_cane')
            .inputFluids('1000x gtceu:sulfuric_acid')
            .inputFluids('1000x minecraft:water')
            .outputFluids(`1440x gtceu:${color}_dye`)
            .circuit(index + 1)
            .EUt(GTValues.V[GTValues.LV], 4)
            .duration(300)
    })
    event.recipes.gtceu.chemical_reactor('frontiers:blood_orb_weak')
        .itemInputs('occultism:spirit_attuned_gem', 'gtceu:lv_field_generator')
        .itemOutputs('neovitae:blood_orb_weak')
        .inputFluids('1000x biomesoplenty:blood')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(1400)
    event.shaped('malum:spirit_altar', ['ABA', 'CDC', 'DDD'], { A: 'malum:soul_stained_steel_plating', B: 'occultism:soul_gem', C: 'gtceu:double_gold_plate', D: '#malum:runewood_planks' })
    event.shaped('cosmiccore:lv_ember_input_hatch', ['ABA', 'CDC', 'ABA'], { A: 'gtceu:double_steel_plate', B: 'gtceu:aluminium_foil', C: 'embers:wildfire_core', D: 'embers:ember_crystal_cluster' })
    event.recipes.gtceu.chemical_reactor('frontiers:refined_soulstone')
        .itemInputs('occultism:otherworld_ashes', 'minecraft:amethyst_shard')
        .itemOutputs('malum:refined_soulstone')
        .inputFluids('250x gtceu:hydrochloric_acid')
        .EUt(GTValues.V[GTValues.LV], 2)
        .duration(100)
    event.recipes.gtceu.macerator('frontiers:iesnium_dust')
        .itemInputs('occultism:raw_iesnium')
        .itemOutputs('2x occultism:iesnium_dust')
        .EUt(2, 1)
        .duration(100)
    event.recipes.gtceu.bender('frontiers:empty_mold')
        .itemInputs('4x gtceu:wrought_iron_plate')
        .itemOutputs('gtceu:empty_mold')
        .EUt(12, 1)
        .circuit(4)
        .duration(100)
    event.recipes.gtceu.assembler('frontiers:ore_extraction_drill_lv')
        .itemInputs('gtceu:lv_machine_hull', '4x gtceu:steel_frame', '4x #gtceu:circuits/mv', '4x gtceu:lv_electric_motor', '4x gtceu:lv_electric_piston', '4x gtceu:lv_robot_arm', '4x gtceu:rose_gold_gear', '4x gtceu:diamond_drill_head')
        .itemOutputs('cosmiccore:ore_extraction_drill_lv')
        .circuit(4)
        .EUt(GTValues.V[GTValues.LV], 4)
        .duration(350)
    event.recipes.gtceu.electric_blast_furnace('frontiers:soul_stained_steel_ingot')
        .itemInputs('gtceu:steel_ingot', 'occultism:iesnium_dust', 'malum:refined_soulstone')
        .itemOutputs('2x malum:soul_stained_steel_ingot')
        .blastFurnaceTemp(1700)
        .EUt(GTValues.V[GTValues.MV], 4)
        .duration(900)

    event.recipes.gtceu.electric_blast_furnace('frontiers:dark_steel_ingot')
        .itemInputs('gtceu:lead_ingot', 'cosmiccore:creosote_grease', 'gtceu:carbon_dust')
        .itemOutputs('enderio:dark_steel_ingot')
        .blastFurnaceTemp(1700)
        .EUt(GTValues.V[GTValues.MV], 1)
        .duration(750)
    event.recipes.gtceu.macerator('frontiers:nether_brick_dust_dust')
        .itemInputs('minecraft:nether_brick')
        .itemOutputs('gtceu:nether_brick_dust_dust')
        .EUt(16, 1)
        .duration(50)
    event.recipes.gtceu.electric_blast_furnace('frontiers:netherite_ingot')
        .itemInputs('malum:hallowed_gold_ingot', 'enderio:dark_steel_ingot', 'gtceu:nether_brick_dust_dust')
        .itemOutputs('minecraft:netherite_ingot')
        .inputFluids('250x gtceu:soulresin')
        .blastFurnaceTemp(1700)
        .EUt(GTValues.V[GTValues.MV], 8)
        .duration(1200)
    event.recipes.gtceu.alloy_smelter('frontiers:netherite_ingot')
        .itemInputs('6x minecraft:netherite_scrap', '6x minecraft:gold_ingot')
        .itemOutputs('minecraft:netherite_ingot')
        .EUt(GTValues.V[GTValues.LV], 4)
        .duration(2400)
    event.recipes.gtceu.assembler('frontiers:resistor/aluminium')
        .itemInputs('minecraft:paper', '2x gtceu:aluminium_bolt')
        .itemOutputs('6x gtceu:resistor')
        .inputFluids('250x gtceu:redstone')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(240)
    event.recipes.gtceu.chemical_reactor('frontiers:rubber')
        .itemInputs('9x gtceu:raw_rubber_dust', 'gtceu:sulfur_dust')
        .outputFluids('1296x gtceu:rubber')
        .EUt(24, 1)
        .duration(300)
    event.recipes.gtceu.forming_press('frontiers:otherstone_tablet/from_otherrock')
        .itemInputs('occultism:otherrock', 'gtceu:gold_foil', 'occultism:otherworld_ashes')
        .itemOutputs('4x occultism:otherstone_tablet')
        .EUt(16, 1)
        .duration(260)
    event.recipes.gtceu.forming_press('frontiers:otherstone_tablet/from_otherstone')
        .itemInputs('occultism:otherstone', 'gtceu:gold_foil', 'occultism:otherworld_ashes')
        .itemOutputs('4x occultism:otherstone_tablet')
        .EUt(16, 1)
        .duration(260)
    event.recipes.gtceu.electric_blast_furnace('frontiers:chrysanthium_ingot')
        .itemInputs('malum:hallowed_gold_ingot', 'cosmiccore:utherium_gem', '2x cosmiccore:bloomscrap')
        .itemOutputs('4x gtceu:chrysanthium_ingot')
        .EUt(GTValues.V[GTValues.MV], 4)
        .blastFurnaceTemp(1700)
        .duration(700)
    event.recipes.gtceu.sifter('frontiers:ember_grit/from_netherrack')
        .itemInputs('gtceu:netherrack_dust')
        .itemOutputs('embers:ember_grit')
        .chancedOutput('embers:ember_shard', 5000)
        .chancedOutput('embers:ember_crystal', 2500)
        .EUt(GTValues.V[GTValues.LV], 4)
        .duration(300)
    event.recipes.gtceu.sifter('frontiers:ember_grit/from_cinder_flour')
        .itemInputs('create:cinder_flour')
        .itemOutputs('embers:ember_grit')
        .chancedOutput('embers:ember_shard', 5000)
        .chancedOutput('embers:ember_crystal', 2500)
        .EUt(GTValues.V[GTValues.LV], 4)
        .duration(300)
    event.recipes.gtceu.electric_blast_furnace('frontiers:energetic_aluminium_ingot')
        .itemInputs('cosmiccore:energetic_aluminium_dust')
        .itemOutputs('cosmiccore:energetic_aluminium_ingot')
        .blastFurnaceTemp(1700)
        .circuit(1)
        .EUt(GTValues.V[GTValues.MV], 4)
        .duration(800)
    event.recipes.gtceu.electric_blast_furnace('frontiers:energetic_aluminium_ingot/with_nitrogen')
        .itemInputs('cosmiccore:energetic_aluminium_dust')
        .itemOutputs('cosmiccore:energetic_aluminium_ingot')
        .inputFluids('1000x gtceu:nitrogen')
        .blastFurnaceTemp(1700)
        .circuit(2)
        .EUt(GTValues.V[GTValues.MV], 4)
        .duration(600)
    event.recipes.gtceu.assembler('frontiers:industrial_converter_shell')
        .itemInputs('6x cosmiccore:lv_cladding', '3x gtceu:long_wrought_iron_rod')
        .itemOutputs('cosmiccore:industrial_converter_shell')
        .circuit(6)
        .EUt(GTValues.VA[GTValues.LV], 2)
        .duration(100)
    event.shaped('cosmiccore:modular_power_station', ['ABA', 'CDE', 'AFA'], { A: 'cosmiccore:lv_cladding', B: 'gtceu:lv_combustion', C: 'gtceu:lv_steam_turbine', D: 'cosmiccore:lv_modular_frameworks', E: 'gtceu:lv_gas_turbine', F: 'cosmiccore:lightweight_dark_steel_casing' })
    event.shaped('cosmiccore:industrial_converter_shell', ['AAA', 'BBB', 'AAA'], { A: 'cosmiccore:lv_cladding', B: 'gtceu:long_wrought_iron_rod' })

    event.shaped('cosmiccore:bloomwyrm_heart', ['ABA', 'BCB', 'DED'], { A: 'gtceu:double_chrysanthium_plate', B: '#gtceu:circuits/mv', C: 'gtceu:steel_drum', D: 'cosmiccore:somarust_casing', E: 'gtceu:chrysanthium_frame' })
    event.custom({
        "bloodNeeded": 1000,
        "craftSpeed": 5,
        "drainSpeed": 5,
        "input": {
            "item": "occultism:otherstone_tablet"
        },
        "output": {
            "id": "neovitae:tabula_rasa",
            "count": 1
        },
        "minTier": 0,
        "type": "neovitae:ara_vitae_recipe"
    })
    event.custom({
        "spirits": [
            {
                "type": "malum:wicked",
                "count": 16
            },
            {
                "type": "malum:eldritch",
                "count": 16
            },
            {
                "type": "malum:arcane",
                "count": 16
            },
            {
                "type": "malum:sacred",
                "count": 16
            },
            {
                "type": "malum:aqueous",
                "count": 16
            }
        ],
        "extraInputs": [
            {
                "item": "minecraft:deepslate",
                "count": 4
            },
            {
                "item": "gtceu:double_dark_steel_plate",
                "count": 4
            },
            {
                "item": "simplylight:rodlamp_red",
                "count": 4
            },
            {
                "item": "malum:imitation_flesh",
                "count": 4
            },
            {
                "item": "malum:hex_ash",
                "count": 4
            },
            {
                "item": "gtceu:basic_electronic_circuit",
                "count": 4
            }
        ],
        "input": {
            "item": "malum:block_of_soul_stained_steel",
            "count": 1
        },
        "result": {
            "id": "neovitae:ara_vitae",
            "count": 1
        },
        "type": "malum:spirit_infusion"
    })
    event.recipes.gtceu.chemical_bath('frontiers:bloom_rich_algae_solution')
        .itemInputs('4x cosmiccore:bloomscrap')
        .inputFluids('1000x minecraft:water')
        .outputFluids('1000x cosmiccore:bloom_rich_algae_solution')
        .EUt(GTValues.V[GTValues.LV], 2)
        .duration(100)

    event.recipes.cosmiccore.abyssal_culture_vat()
        .itemInputs('cosmiccore:red_proto_algae')
        .itemOutputs('64x cosmiccore:red_algae')
        .biopowerOutput(16)
        .bloomwyrmChargeOutput(1000)
        .EUt(GTValues.V[GTValues.LV], 2)
        .duration(1200)


    event.recipes.cosmiccore.abyssal_culture_vat()
        .itemInputs('cosmiccore:blue_proto_algae')
        .itemOutputs('64x cosmiccore:blue_algae')
        .biopowerOutput(16)
        .bloomwyrmChargeOutput(1000)
        .EUt(GTValues.V[GTValues.LV], 2)
        .duration(1200)


    event.recipes.cosmiccore.abyssal_culture_vat()
        .itemInputs('cosmiccore:green_proto_algae')
        .itemOutputs('64x cosmiccore:green_algae')
        .biopowerOutput(16)
        .bloomwyrmChargeOutput(1000)
        .EUt(GTValues.V[GTValues.LV], 2)
        .duration(1200)
    event.recipes.gtceu.centrifuge('frontiers:blue_proto_algae')
        .itemOutputs('cosmiccore:blue_proto_algae', 'cosmiccore:green_proto_algae', 'cosmiccore:red_proto_algae')
        .inputFluids('250x cosmiccore:bloom_rich_algae_solution')
        .EUt(GTValues.V[GTValues.LV], 1)
        .duration(100)
    event.recipes.cosmiccore.sculk_biochamber()
        .itemInputs('8x cosmiccore:blue_algae', '8x cosmiccore:red_algae', '8x cosmiccore:green_algae', '4x cosmiccore:aphotite_dust')
        .itemOutputs('4x cosmiccore:nostium_ingot')
        .biopowerInput(32)
        .maxCampusParallel(16)
        .EUt(GTValues.V[GTValues.LV], 1)
        .duration(1200)
    event.recipes.gtceu.electric_blast_furnace('frontiers:iesnium_ingot')
        .itemInputs('occultism:iesnium_dust')
        .itemOutputs('occultism:iesnium_ingot')
        .circuit(2)
        .blastFurnaceTemp(1700)
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(100)
    event.shaped('occultism:chalk_black_impure', ['ABC', 'DDD'], { A: 'occultism:chalk_yellow_impure', B: 'occultism:chalk_orange_impure', C: 'occultism:chalk_red_impure', D: 'occultism:witherite_dust' })
    event.shaped('neovitae:rune_blank', ['ABA', 'ACA', 'ABA'], { A: 'cosmiccore:riveted_straps', B: 'neovitae:tabula_rasa', C: 'cosmiccore:lightweight_dark_steel_casing' })
    event.custom({
        "bloodNeeded": 1000,
        "craftSpeed": 5,
        "drainSpeed": 5,
        "input": {
            "item": "occultism:chalk_yellow_impure"
        },
        "output": {
            "id": "occultism:chalk_orange_impure",
            "count": 1
        },
        "minTier": 1,
        "type": "neovitae:ara_vitae_recipe"
    })
    event.custom({
        "bloodNeeded": 1000,
        "craftSpeed": 5,
        "drainSpeed": 5,
        "input": {
            "item": "cosmiccore:utherium_gem"
        },
        "output": {
            "id": "occultism:chalk_red_impure",
            "count": 1
        },
        "minTier": 2,
        "type": "neovitae:ara_vitae_recipe"
    })
    event.recipes.gtceu.electric_blast_furnace('frontiers:nostium_ingot')
        .itemInputs('cosmiccore:nostium_dust')
        .itemOutputs('cosmiccore:nostium_ingot')
        .circuit(1)
        .EUt(GTValues.V[GTValues.LV], 2)
        .blastFurnaceTemp(1700)
        .duration(200)
    event.recipes.gtceu.electric_blast_furnace('frontiers:nostium_ingot/with_nitrogen')
        .itemInputs('cosmiccore:nostium_dust')
        .itemOutputs('cosmiccore:nostium_ingot')
        .inputFluids('125x gtceu:nitrogen')
        .circuit(2)
        .EUt(GTValues.V[GTValues.LV], 2)
        .blastFurnaceTemp(1700)
        .duration(300)
    event.recipes.gtceu.assembler('frontiers:somarust_casing')
        .itemInputs('gtceu:chrysanthium_frame', '6x gtceu:chrysanthium_plate')
        .itemOutputs('cosmiccore:somarust_casing')
        .circuit(6)
        .EUt(GTValues.V[GTValues.LV], 1)
        .duration(50)
    event.recipes.gtceu.assembler('frontiers:steam_gas_turbine_integral_components')
        .itemInputs('gtceu:solid_machine_casing', '4x gtceu:tin_rotor', 'gtceu:lv_electric_motor')
        .itemOutputs('cosmiccore:steam_gas_turbine_integral_components')
        .EUt(GTValues.V[GTValues.LV], 1)
        .circuit(4)
        .duration(100)
    event.recipes.gtceu.assembler('frontiers:combustion_integral_components')
        .itemInputs('gtceu:solid_machine_casing', 'gtceu:steel_gearbox', 'gtceu:lv_electric_piston')
        .itemOutputs('cosmiccore:combustion_integral_components')
        .EUt(GTValues.V[GTValues.LV], 1)
        .circuit(5)
        .duration(100)
    event.recipes.gtceu.assembler('frontiers:industrial_partwork')
        .itemInputs('gtceu:steel_gearbox', 'gtceu:solid_machine_casing', 'gtceu:lv_electric_motor')
        .itemOutputs('cosmiccore:industrial_partwork')
        .EUt(GTValues.V[GTValues.LV], 1)
        .circuit(6)
        .duration(100)
    event.recipes.cosmiccore.spooling_machine()
        .itemInputs('4x gtceu:lv_voltage_coil', '16x gtceu:copper_double_wire')
        .itemOutputs('cosmiccore:low_voltage_stator_housing')
        .EUt(GTValues.V[GTValues.LV], 1)
        .duration(100)
    event.shapeless('gtceu:data_stick', ['gtceu:plastic_printed_circuit_board', '#gtceu:circuits/lv'])
    event.shaped('cosmiccore:rust_stained_casing', [' A ', 'ABA', ' A '], { A: 'gtceu:chrysanthium_foil', B: 'cosmiccore:steel_plated_bronze_casing' })
    event.shaped('cosmiccore:sculk_biochamber', ['AAA', 'BCB', 'DDD'], { A: '#gtceu:circuits/mv', B: 'gtceu:chrysanthium_frame', C: 'minecraft:sculk_catalyst', D: 'cosmiccore:somarust_casing' })
    event.shaped('cosmiccore:abyssal_culture_vat', ['ABA', 'ABA', 'CDC'], { A: 'gtceu:chrysanthium_frame', B: 'gtceu:aluminium_drum', C: '#gtceu:circuits/mv', D: 'cosmiccore:somarust_casing' })
    event.shaped('cosmiccore:somarust_casing', ['ABA', 'ACA', 'ADA'], { A: 'gtceu:chrysanthium_plate', B: '#gtceu:crafting_tools/hammer', C: 'gtceu:chrysanthium_frame', D: '#gtceu:crafting_tools/wrench' })
    event.shaped('cosmiccore:lv_bloomwyrm_power_root', ['ABA', 'CDC', 'AEA'], { A: 'cosmiccore:riveted_straps', B: 'gtceu:lv_voltage_coil', C: '#gtceu:batteries/lv', D: 'gtceu:lv_energy_input_hatch', E: 'gtceu:lv_transformer_1a' })
    event.shaped('gtceu:good_electronic_circuit', ['ABA', 'CDC', 'ECE'], { A: 'gtceu:diode', B: 'gtceu:runed_steel_plate', C: 'gtceu:basic_electronic_circuit', D: 'gtceu:phenolic_printed_circuit_board', E: 'gtceu:copper_double_wire' })
    event.shaped('8x cosmiccore:lightweight_dark_steel_casing', ['ABA', 'ACA', 'ABA'], { A: 'gtceu:dark_steel_foil', B: 'gtceu:long_dark_steel_rod', C: 'gtceu:dark_steel_frame' })
    event.shaped('cosmiccore:industrial_ore_sorter', ['AAA', 'BCB', 'DED'], { A: 'gtceu:lv_robot_arm', B: 'gtceu:lv_conveyor_module', C: 'cosmiccore:lightweight_dark_steel_casing', D: 'gtceu:tin_single_cable', E: 'gtceu:basic_electronic_circuit' })
    event.shaped('gtceu:implosion_compressor', ['AAA', 'BCB', 'DBD'], { A: 'enderio:reinforced_obsidian_block', B: '#gtceu:circuits/lv', C: 'cosmiccore:steel_plated_bronze_casing', D: 'gtceu:annealed_copper_double_cable' })
    event.shaped('cosmiccore:industrial_flotation_plant', ['AAA', 'BCB', 'DED'], { A: 'minecraft:cauldron', B: 'gtceu:lv_electric_pump', C: 'cosmiccore:lightweight_dark_steel_casing', D: 'gtceu:tin_single_cable', E: 'gtceu:basic_electronic_circuit' })
    event.shaped('cosmiccore:powderizer', ['AAA', 'BCB', 'DED'], { A: 'minecraft:grindstone', B: 'gtceu:lv_conveyor_module', C: 'cosmiccore:lightweight_dark_steel_casing', D: 'gtceu:tin_single_cable', E: 'gtceu:basic_electronic_circuit' })
    event.shaped('gtceu:lv_field_generator', ['ABA', 'CDC', 'ABA'], { A: 'malum:soul_stained_steel_plating', B: 'gtceu:dark_steel_foil', C: '#gtceu:circuits/lv', D: 'embers:wildfire_core' })

    // event.recipes.cosmiccore.abyssal_culture_vat()
    //     .itemInputs('minecraft:sculk')
    //     .itemOutputs('minecraft:moss_block')
    //     .inputFluids('1000x minecraft:water')
    //     .EUt(32, 1)
    //     .duration(1200)
    //     .biopowerOutput(16)
    //     .bloomwyrmChargeOutput(100)

    // event.recipes.cosmiccore.sculk_biochamber()
    //     .itemInputs('minecraft:rotten_flesh')
    //     .itemOutputs('minecraft:bone_meal')
    //     .EUt(32, 1)
    //     .duration(100)
    //     .biopowerInput(8)
    //     .bloomwyrmChargeInput(25)
    //     .maxCampusParallel(8)

    event.recipes.gtceu.assembler('frontiers:steel_rose_light')
        .itemInputs('gtceu:steel_frame', 'create:rose_quartz_lamp')
        .itemOutputs('cosmiccore:steel_rose_light')
        .duration(400)
        .EUt(GTValues.V[GTValues.LV], 4)

    event.recipes.gtceu.combustion_generator('frontiers:turpentine')
        .inputFluids('1x gtceu:turpentine')
        .duration(8)
        .EUt(-GTValues.V[GTValues.LV])







































    event.recipes.gtceu.macerator('frontiers:cannon_powder')
        .itemInputs('mynethersdelight:powder_cannon')
        .itemOutputs('4x cosmiccore:cannon_powder')
        .duration(80)
        .EUt(GTValues.V[GTValues.LV], 2)
})
