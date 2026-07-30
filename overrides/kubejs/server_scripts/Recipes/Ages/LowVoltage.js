ServerEvents.recipes(event => {
    const rainbowCaneDyeColors = [
        'white', 'orange', 'magenta', 'light_blue',
        'yellow', 'lime', 'pink', 'gray',
        'light_gray', 'cyan', 'purple', 'blue',
        'brown', 'green', 'red', 'black'
    ]

    rainbowCaneDyeColors.forEach((color, index) => {
        event.recipes.gtceu.chemical_reactor()
            .itemInputs('4x cosmiccore:rainbow_cane')
            .inputFluids('1000x gtceu:sulfuric_acid')
            .inputFluids('1000x minecraft:water')
            .outputFluids(`1440x gtceu:${color}_dye`)
            .circuit(index + 1)
            .EUt(GTValues.VA[GTValues.LV], 1)
            .duration(300)
    })
    event.recipes.gtceu.chemical_reactor()
        .itemInputs('occultism:spirit_attuned_gem', 'gtceu:lv_field_generator')
        .itemOutputs('neovitae:blood_orb_weak')
        .inputFluids('1000x biomesoplenty:blood')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(1400)
    event.shaped('malum:spirit_altar', ['ABA', 'CDC', 'DDD'], { A: 'malum:soul_stained_steel_plating', B: 'occultism:soul_gem', C: 'gtceu:double_rose_gold_plate', D: '#malum:runewood_planks' })
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
    event.recipes.gtceu.assembler()
        .itemInputs('gtceu:lv_machine_hull', '4x gtceu:steel_frame', '4x #gtceu:circuits/mv', '4x gtceu:lv_electric_motor', '4x gtceu:lv_electric_piston', '4x gtceu:lv_robot_arm', '4x gtceu:rose_gold_gear', '4x gtceu:diamond_drill_head')
        .itemOutputs('cosmiccore:ore_extraction_drill_lv')
        .circuit(4)
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(350)
    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs('gtceu:steel_ingot', 'occultism:iesnium_dust', 'malum:refined_soulstone')
        .itemOutputs('2x malum:soul_stained_steel_ingot')
        .blastFurnaceTemp(1700)
        .EUt(GTValues.VA[GTValues.MV], 1)
        .duration(900)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs('gtceu:lead_ingot', 'cosmiccore:creosote_grease', 'gtceu:carbon_dust')
        .itemOutputs('enderio:dark_steel_ingot')
        .blastFurnaceTemp(1700)
        .EUt(GTValues.VA[GTValues.MV], 1)
        .duration(750)
    event.recipes.gtceu.macerator()
        .itemInputs('minecraft:nether_brick')
        .itemOutputs('gtceu:nether_brick_dust_dust')
        .EUt(16, 1)
        .duration(50)
    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs('malum:hallowed_gold_ingot', 'enderio:dark_steel_ingot', 'gtceu:nether_brick_dust_dust')
        .itemOutputs('minecraft:netherite_ingot')
        .inputFluids('250x gtceu:soulresin')
        .EUt(GTValues.VA[GTValues.MV], 1)
        .duration(1200)
    event.recipes.gtceu.alloy_smelter()
        .itemInputs('6x minecraft:netherite_scrap', '6x minecraft:gold_ingot')
        .itemOutputs('minecraft:netherite_ingot')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(2400)
    event.recipes.gtceu.assembler()
        .itemInputs('minecraft:paper', '2x gtceu:aluminium_bolt')
        .itemOutputs('6x gtceu:resistor')
        .inputFluids('250x gtceu:redstone')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(240)
    event.recipes.gtceu.chemical_reactor()
        .itemInputs('9x gtceu:raw_rubber_dust', 'gtceu:sulfur_dust')
        .outputFluids('1296x gtceu:rubber')
        .EUt(24, 1)
        .duration(300)
    event.recipes.gtceu.forming_press()
        .itemInputs('occultism:otherrock', 'gtceu:gold_foil', 'occultism:otherworld_ashes')
        .itemOutputs('4x occultism:otherstone_tablet')
        .EUt(16, 1)
        .duration(260)
    event.recipes.gtceu.forming_press()
        .itemInputs('occultism:otherstone', 'gtceu:gold_foil', 'occultism:otherworld_ashes')
        .itemOutputs('4x occultism:otherstone_tablet')
        .EUt(16, 1)
        .duration(260)
    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs('malum:hallowed_gold_ingot', 'gtceu:utherium_gem', 'cosmiccore:bloomscrap')
        .itemOutputs('gtceu:chrysanthium_ingot')
        .EUt(GTValues.VA[GTValues.MV], 1)
        .blastFurnaceTemp(1700)
        .duration(700)
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
    event.recipes.gtceu.chemical_bath()
        .itemInputs('4x cosmiccore:bloomscrap')
        .inputFluids('1000x minecraft:water')
        .outputFluids('1000x cosmiccore:bloom_rich_algae_solution')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(100)

    event.recipes.cosmiccore.abyssal_culture_vat()
        .itemInputs('cosmiccore:red_proto_algae')
        .itemOutputs('64x cosmiccore:red_algae')
        .biopowerOutput(16)
        .bloomwyrmChargeOutput(1000)
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(1200)


    event.recipes.cosmiccore.abyssal_culture_vat()
        .itemInputs('cosmiccore:blue_proto_algae')
        .itemOutputs('64x cosmiccore:blue_algae')
        .biopowerOutput(16)
        .bloomwyrmChargeOutput(1000)
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(1200)


    event.recipes.cosmiccore.abyssal_culture_vat()
        .itemInputs('cosmiccore:green_proto_algae')
        .itemOutputs('64x cosmiccore:green_algae')
        .biopowerOutput(16)
        .bloomwyrmChargeOutput(1000)
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(1200)
    event.recipes.gtceu.centrifuge()
        .itemOutputs('cosmiccore:blue_proto_algae', 'cosmiccore:green_proto_algae', 'cosmiccore:red_proto_algae')
        .inputFluids('250x cosmiccore:bloom_rich_algae_solution')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(100)
    event.recipes.cosmiccore.sculk_biochamber()
        .itemInputs('8x cosmiccore:blue_algae', '8x cosmiccore:red_algae', '8x cosmiccore:green_algae', '4x cosmiccore:aphotite_dust')
        .itemOutputs('4x cosmiccore:nostium_ingot')
        .biopowerInput(32)
        .maxCampusParallel(16)
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(1200)
    event.shaped('cosmiccore:lv_bloomwyrm_power_root', ['ABA', 'CDC', 'AEA'], { A: 'cosmiccore:riveted_straps', B: 'gtceu:lv_voltage_coil', C: '#gtceu:batteries/lv', D: 'gtceu:lv_energy_input_hatch', E: 'gtceu:lv_transformer_1a' })
    event.shaped('gtceu:good_electronic_circuit', ['ABA', 'CDC', 'ECE'], { A: 'gtceu:diode', B: 'gtceu:runed_steel_plate', C: 'gtceu:basic_electronic_circuit', D: 'gtceu:phenolic_printed_circuit_board', E: 'gtceu:copper_double_wire' })
    event.shaped('8x cosmiccore:lightweight_dark_steel_casing', ['ABA', 'ACA', 'ABA'], { A: 'gtceu:dark_steel_foil', B: 'gtceu:long_dark_steel_rod', C: 'gtceu:dark_steel_frame' })
    event.shaped('cosmiccore:industrial_ore_sorter', ['AAA', 'BCB', 'DED'], { A: 'gtceu:lv_robot_arm', B: 'gtceu:lv_conveyor_module', C: 'cosmiccore:lightweight_dark_steel_casing', D: 'gtceu:tin_single_cable', E: 'gtceu:basic_electronic_circuit' })
    event.shaped('gtceu:implosion_compressor', ['AAA', 'BCB', 'DBD'], { A: 'enderio:reinforced_obsidian_block', B: '#gtceu:circuits/mv', C: 'cosmiccore:steel_plated_bronze_casing', D: 'gtceu:annealed_copper_double_cable' })
    event.shaped('cosmiccore:industrial_flotation_plant', ['AAA', 'BCB', 'DED'], { A: 'minecraft:cauldron', B: 'gtceu:lv_electric_pump', C: 'cosmiccore:lightweight_dark_steel_casing', D: 'gtceu:tin_single_cable', E: 'gtceu:basic_electronic_circuit' })
    event.shaped('cosmiccore:powderizer', ['AAA', 'BCB', 'DED'], { A: 'gtceu:diamond_grinding_head', B: 'gtceu:lv_conveyor_module', C: 'cosmiccore:lightweight_dark_steel_casing', D: 'gtceu:tin_single_cable', E: 'gtceu:basic_electronic_circuit' })
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








































})
