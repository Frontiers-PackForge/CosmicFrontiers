


ServerEvents.recipes(event => {
    event.shaped('4x cosmiccore:lv_cogwork_magicapacitor', ['ABA', 'CDC', 'ABA'], { A: 'gtceu:steel_plate', B: 'cosmiccore:cogwork_units', C: 'gtceu:tempered_iesnium_foil', D: 'cosmiccore:overloaded_pearls' })
    event.shaped('4x gtceu:compressed_coke_clay', ['ABA', 'BAB', ' C '], { A: 'minecraft:clay_ball', B: 'minecraft:wheat', C: 'gtceu:brick_wooden_form' })
    event.shaped('gtceu:coke_oven_bricks', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:coke_oven_brick', B: 'create:andesite_alloy', C: 'minecraft:mud_bricks' })
    event.shaped('gtceu:lv_machine_casing', ['ABA', 'CDC', 'ACA'], { A: 'cosmiccore:riveted_straps', B: 'cosmiccore:lv_cogwork_magicapacitor', C: 'cosmiccore:lv_cladding', D: 'cosmiccore:lv_modular_frameworks' })
    event.shaped('gtceu:lv_machine_hull', ['ABA', 'CDC', 'AEA'], { A: 'gtceu:bronze_foil', B: 'gtceu:steel_plate', C: 'gtceu:tin_single_cable', D: 'gtceu:lv_machine_casing', E: 'gtceu:small_steel_spring' })
    event.shaped('cosmiccore:sturdy_plates', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:double_wrought_iron_plate', B: 'createdeco:andesite_sheet', C: 'gtceu:treated_wood_plate' })
    event.shaped('createdeco:andesite_sheet', ['A', 'B', 'B'], { A: '#gtceu:crafting_tools/hammer', B: 'create:andesite_alloy' })
    event.shaped('gtceu:programmed_circuit', ['A'], { A: 'gtceu:vacuum_tube' })
    event.recipes.create.compacting('cosmiccore:creosote_grease', [Fluid.of('gtceu:creosote', 1000), 'minecraft:sand'])
    event.shaped('4x create:andesite_alloy', ['ABA', 'BCB', 'ABA'], { A: 'minecraft:iron_nugget', B: 'cosmiccore:weak_binding_putty', C: 'minecraft:andesite' })
    event.shaped('4x cosmiccore:weak_binding_putty', ['ABC'], { A: 'minecraft:dried_kelp', B: 'minecraft:sand', C: 'minecraft:clay_ball' })
    event.recipes.create.mixing(Item.of('create:andesite_alloy', 4), [Item.of('cosmiccore:weak_binding_putty', 2), Item.of('minecraft:iron_nugget', 2), 'minecraft:andesite']).heated()
    event.shaped('2x gtceu:wood_plate', ['A', 'B'], { A: '#gtceu:crafting_tools/saw', B: '#minecraft:wooden_slabs' })
    event.shaped('gtceu:bronze_brick_casing', ['AAA', 'ABA', 'CCC'], { A: 'gtceu:bronze_plate', B: '#gtceu:crafting_tools/hammer', C: 'gtceu:coke_oven_bricks' })
    event.shaped('cosmiccore:steam_mixing_vessel', ['ABA', 'ABA', 'CCC'], { A: 'gtceu:bronze_turbine_blade', B: 'gtceu:bronze_pipe_casing', C: 'gtceu:bronze_brick_casing' })
    event.recipes.occultism.spirit_fire('gtceu:tempered_iesnium_ingot', 'occultism:iesnium_ingot')
    event.shaped('gtceu:hp_steam_solid_boiler', ['AAA', 'ABA', 'CDC'], { A: 'gtceu:wrought_iron_plate', B: '#gtceu:crafting_tools/hammer', C: 'gtceu:firebricks', D: 'ironfurnaces:iron_furnace' })
    event.recipes.gtceu.compressor()
        .itemInputs('4x gtceu:sticky_resin')
        .itemOutputs('cosmiccore:hardened_resin')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(50)
    event.shaped('2x create:factory_gauge', ['AB', 'CD'], { A: 'gtceu:vacuum_tube', B: '#gtceu:crafting_tools/file', C: '#gtceu:crafting_tools/screwdriver', D: 'create:precision_mechanism' })
    event.shaped('2x create:package_frogport', ['ABA', 'CDC', 'EFE'], { A: 'copycats:copycat_cogwheel', B: 'minecraft:slime_ball', C: 'gtceu:vacuum_tube', D: 'create:item_vault', E: 'create:andesite_alloy', F: 'gtceu:steel_brick_casing' })
    event.shaped('cosmiccore:hp_steam_wiremill', ['ABA', 'B B', 'CDC'], { A: 'cosmiccore:sturdy_plates', B: 'create_connected:encased_chain_cogwheel', C: 'gtceu:double_steel_plate', D: 'gtceu:steel_brick_casing' })
    event.shaped('cosmiccore:hp_steam_bender', ['ABA', 'CDC', 'EFE'], { A: 'gtceu:wrought_iron_plate', B: 'gtceu:hp_steam_forge_hammer', C: 'create:mechanical_piston', D: 'minecraft:anvil', E: 'gtceu:double_steel_plate', F: 'gtceu:steel_brick_casing' })
    event.shaped('create:precision_mechanism', ['AAA', 'BCD', 'BBB'], { A: 'createdeco:andesite_sheet', B: 'create:golden_sheet', C: 'copycats:copycat_large_cogwheel', D: 'copycats:copycat_cogwheel' })
    event.shaped('gtceu:empty_mold', ['AB', 'CC', 'CC'], { A: '#gtceu:crafting_tools/hammer', B: '#gtceu:crafting_tools/file', C: 'gtceu:wrought_iron_plate' })
    event.shaped('cosmiccore:hardened_resin', ['AAA', 'ABA', 'AAA'], { A: 'gtceu:sticky_resin', B: '#gtceu:crafting_tools/hammer' })
    event.shaped('cosmiccore:steam_caster', ['ABA', 'ACA', 'ADA'], { A: 'gtceu:coke_oven_bricks', B: 'create:spout', C: 'minecraft:cauldron', D: 'gtceu:bronze_crate' })
    event.shaped('cosmiccore:dowsing_rod', ['AB', 'C '], { A: 'minecraft:flint', B: 'minecraft:stick', C: 'minecraft:string' })
    event.shaped('cosmiccore:compactified_rod', ['ABA', 'ABA', 'ABA'], { A: 'createdeco:andesite_sheet', B: 'gtceu:long_wrought_iron_rod' })
    event.shaped('cosmiccore:heavy_bindings', ['ABA', 'B B', 'ABA'], { A: 'createdeco:andesite_sheet', B: 'gtceu:long_wrought_iron_rod' })
    event.shaped('cosmiccore:steam_fluid_output_hatch', ['AAA'], { A: 'cosmiccore:steam_mixing_vessel' })
    event.shapeless('gtceu:tiny_tin_dust', ['gtceu:tin_nugget', '#gtceu:crafting_tools/mortar'])
    event.recipes.cosmiccore.industrial_primitive_blast_furnace()
        .itemInputs('4x gtceu:sulfur_dust', '8x cosmiccore:hardened_resin')
        .itemOutputs('12x gtceu:rubber_ingot')
        .inputFluids('gtceu:creosote 250')
        .duration(1200)
    event.recipes.gtceu.fluid_solidifier()
        .itemInputs('6x gtceu:firebrick')
        .itemOutputs('gtceu:firebricks')
        .inputFluids('gtceu:concrete 1000')
        .EUt(GTValues.VHA[GTValues.LV], 1)
        .duration(100)
    event.recipes.gtceu.mixer()
        .itemInputs('minecraft:clay_ball', 'gtceu:brick_dust', 'create:wheat_flour')
        .itemOutputs('4x cosmiccore:fireclay_ball')
        .inputFluids('minecraft:lava 250')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(100)
    event.recipes.gtceu.compressor()
        .itemInputs('cosmiccore:fireclay_ball')
        .itemOutputs('gtceu:firebrick')
        .EUt(GTValues.V[GTValues.LV], 1)
        .duration(100)
    event.shaped('cosmiccore:reinforced_dawnstone_casing', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:iron_plate', B: 'gtceu:dawnstone_foil', C: 'gtceu:bronze_frame' })
    event.shaped('cosmiccore:light_dawnstone_casing', [' A ', 'BCB', ' A '], { A: 'gtceu:double_iron_plate', B: 'gtceu:dawnstone_foil', C: 'gtceu:bronze_frame' })
    event.recipes.gtceu.alloy_smelter()
        .itemInputs('8x minecraft:copper_ingot', '2x minecraft:gold_ingot')
        .itemOutputs('10x embers:dawnstone_ingot')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(100)
    event.recipes.create.mixing(Fluid.of('embers:molten_dawnstone', 1000), [Fluid.of('gtceu:copper', 800), Fluid.of('gtceu:gold', 200)]).heated()
    event.shaped('gtceu:steel_firebox_casing', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:steel_plate', B: 'gtceu:steel_rod', C: 'gtceu:dawnstone_frame' })
    event.recipes.gtceu.assembler()
        .itemInputs('3x gtceu:steel_plate', '3x gtceu:steel_rod', 'gtceu:dawnstone_frame')
        .itemOutputs('gtceu:steel_firebox_casing')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(100)
    event.shaped('cosmiccore:dawn_forge', ['ABA', 'ABA', 'CDC'], { A: 'gtceu:double_dawnstone_plate', B: 'embers:ember_activator', C: 'gtceu:vacuum_tube', D: 'gtceu:ulv_machine_casing' })
    event.recipes.gtceu.fluid_solidifier()
        .itemInputs('embers:ember_shard')
        .itemOutputs('embers:dawnstone_aspectus')
        .inputFluids('embers:molten_dawnstone 144')
        .input('cosmiccore:ember', 1750)
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(100)
    event.recipes.gtceu.compressor()
        .itemInputs('9x embers:ember_shard')
        .itemOutputs('embers:ember_crystal_cluster')
        .EUt(2)
        .duration(100)
    event.shaped('cosmiccore:high_pressure_assembler', ['AAA', 'ABA', 'CDC'], { A: 'gtceu:rubber_foil', B: 'gtceu:steel_machine_casing', C: 'gtceu:vacuum_tube', D: 'gtceu:steel_firebox_casing' })
    event.recipes.gtceu.mixer()
        .itemInputs('4x gtceu:calcite_dust', '4x occultism:burnt_otherstone', '4x occultism:burnt_otherrock')
        .itemOutputs('occultism:chalk_white_impure')
        .inputFluids('gtceu:concrete 500')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(640)
    event.recipes.cosmiccore.dawn_forge()
        .itemInputs('embers:dawnstone_aspectus', 'embers:ember_crystal_cluster', '6x gtceu:dawnstone_foil')
        .itemOutputs('embers:wildfire_core')
        .input('cosmiccore:ember', 1000)
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(300)
    event.recipes.gtceu.macerator()
        .itemInputs('gtceu:treated_wood_planks')
        .itemOutputs('gtceu:treated_wood_dust')
        .EUt(2, 1)
        .duration(100)
    event.custom({
        "ritual_dummy": {
            "id": "cosmiccore:nether_permit",
            "count": 1
        },
        "result": {
            "id": "cosmiccore:nether_permit",
            "count": 1
        },
        "ritual_type": "occultism:craft",
        "pentacle_id": "occultism:craft_foliot",
        "ingredients": [
            {
                "item": "embers:dawnstone_aspectus"
            },
            {
                "item": "embers:dawnstone_aspectus"
            },
            {
                "item": "embers:dawnstone_aspectus"
            },
            {
                "item": "embers:dawnstone_aspectus"
            },
            {
                "item": "minecraft:echo_shard"
            },
            {
                "item": "minecraft:echo_shard"
            },
            {
                "item": "minecraft:echo_shard"
            },
            {
                "item": "minecraft:echo_shard"
            }
        ],
        "activation_item": {
            "item": "cosmiccore:seal_shards"
        },
        "duration": 300,
        "type": "occultism:ritual"
    })

    event.shaped('cosmiccore:seal_shards', ['ABA', 'BCB', 'ABA'], { A: 'embers:ember_shard', B: 'waystones:deepslate_shard', C: 'bhc:red_heart' })
    event.shaped('cosmiccore:industrial_primitive_blast_furnace', ['ABA', 'BCB', 'DDD'], { A: 'gtceu:vacuum_tube', B: 'gtceu:double_steel_plate', C: 'gtceu:primitive_blast_furnace', D: 'gtceu:bronze_firebox_casing' })
    event.shapeless('cosmiccore:crushed_ferosine_ore', ['#gtceu:crafting_tools/hammer', 'cosmiccore:raw_ferosine'])
    event.shapeless('cosmiccore:crushed_cuprosiva_ore', ['#gtceu:crafting_tools/hammer', 'cosmiccore:raw_cuprosiva'])
    event.recipes.gtceu.alloy_smelter()
        .itemInputs('gtceu:sticky_resin', 'mynethersdelight:pepper_powder')
        .itemOutputs('gtceu:cinderwax_ingot')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(100)

    event.shaped('minecraft:mud_bricks', [' A ', 'ABA', ' A '], { A: 'minecraft:packed_mud', B: 'gtceu:brick_wooden_form' })
    event.recipes.gtceu.bender()
        .itemInputs('gtceu:cinderwax_plate', 'gtceu:wood_dust')
        .itemOutputs('gtceu:resin_circuit_board')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(100)

    event.shaped('gtceu:resin_printed_circuit_board', ['AAA', 'ABA', 'AAA'], { A: 'gtceu:copper_single_wire', B: 'gtceu:resin_circuit_board' })

    event.shaped('occultism:chalk_purple_impure', ['ABB', 'C  '], { A: 'occultism:chalk_white_impure', B: 'gtceu:soulresin_ingot', C: 'gtceu:cinderwax_ingot' })
    event.recipes.gtceu.assembler()
        .itemInputs('6x gtceu:copper_foil', 'gtceu:resin_circuit_board')
        .itemOutputs('gtceu:resin_printed_circuit_board')
        .inputFluids('gtceu:soulresin 250')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(400)

    event.recipes.gtceu.assembler()
        .itemInputs('minecraft:paper', '2x gtceu:tempered_iesnium_bolt')
        .itemOutputs('2x gtceu:resistor')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(100)

    event.shaped('gtceu:basic_electronic_circuit', ['ABA', 'CDC', 'EEE'], { A: 'gtceu:resistor', B: 'gtceu:tempered_iesnium_plate', C: 'gtceu:vacuum_tube', D: 'gtceu:resin_printed_circuit_board', E: 'gtceu:lead_single_cable' })
    event.recipes.gtceu.primitive_blast_furnace()
        .itemInputs('occultism:iesnium_dust')
        .itemOutputs('occultism:iesnium_ingot')
        .duration(100)
    event.recipes.cosmiccore.industrial_primitive_blast_furnace()
        .itemInputs('occultism:iesnium_dust')
        .itemOutputs('occultism:iesnium_ingot')
        .duration(600)

    event.shaped('cosmiccore:ulv_ember_input_hatch', ['ABA', 'CDC', 'ABA'], { A: 'gtceu:double_bronze_plate', B: 'gtceu:bronze_foil', C: 'embers:dawnstone_plate', D: 'embers:ember_crystal_cluster' })

    event.shaped('cosmiccore:steam_ember_emitter', [' A ', ' B ', 'CDE'], { A: 'embers:ember_shard', B: 'embers:dawnstone_plate', C: '#gtceu:crafting_tools/wrench', D: 'gtceu:steel_frame', E: '#gtceu:crafting_tools/hammer' })
    event.shaped('cosmiccore:steam_ember_receptor', ['A A', 'B B', 'CDE'], { A: 'gtceu:wrought_iron_rod', B: 'embers:dawnstone_plate', C: '#gtceu:crafting_tools/wrench', D: 'gtceu:steel_frame', E: '#gtceu:crafting_tools/hammer' })


    event.custom({
        "type": "occultism:miner",
        "ingredient": {
            "tag": "occultism:miners/basic_resources"
        },
        "result": {
            "type": "occultism:weighted_item",
            "stack": {
                "count": 1,
                "id": 'occultism:raw_iesnium'
            },
            "weight": 7000
        }
    })
    event.recipes.gtceu.assembler()
        .itemInputs('2x gtceu:brass_plate', 'gtceu:small_iron_gear', 'gtceu:brass_screw')
        .itemOutputs('4x cosmiccore:cogwork_units')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(100)
    event.recipes.occultism.spirit_fire('cosmiccore:overloaded_pearls', 'mynethersdelight:bullet_pepper')
    event.shaped('3x cosmiccore:lv_modular_frameworks', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:tempered_iesnium_bolt', B: 'gtceu:steel_rod', C: 'gtceu:small_steel_gear' })
    event.recipes.gtceu.macerator()
        .itemInputs('gtceu:treated_wood_dust')
        .itemOutputs('gtceu:treated_wood_planks')
        .EUt(2, 1)
        .duration(40)
    event.recipes.gtceu.compressor()
        .itemInputs('gtceu:treated_wood_dust')
        .itemOutputs('gtceu:treated_wood_plate')
        .EUt(2, 1)
        .duration(40)
    event.shaped('2x cosmiccore:lv_cladding', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:lead_bolt', B: 'gtceu:rubber_foil', C: 'gtceu:treated_wood_plate' })
    event.recipes.gtceu.bender()
        .itemInputs('minecraft:honeycomb', 'minecraft:leather')
        .itemOutputs('cosmiccore:waxed_leather')
        .EUt(32, 1)
        .duration(100)
    event.shaped('8x cosmiccore:riveted_straps', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:lead_bolt', B: 'cosmiccore:waxed_leather', C: 'gtceu:steel_foil' })
































































































































})



































