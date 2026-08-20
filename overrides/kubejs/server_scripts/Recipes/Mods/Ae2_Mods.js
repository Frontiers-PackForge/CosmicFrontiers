const frontiersAe2Colors = [
    'white',
    'light_gray',
    'gray',
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'lime',
    'green',
    'cyan',
    'light_blue',
    'blue',
    'purple',
    'magenta',
    'pink'
]

const frontiersAe2RetiredCableItems = [
    'ae2:fluix_glass_cable',
    'ae2:fluix_covered_cable',
    'ae2:fluix_covered_dense_cable'
]

const frontiersAe2ParkedItems = [
    'ae2:spatial_anchor',
    'ae2:spatial_io_port',
    'ae2:spatial_pylon',
    'ae2:spatial_cell_component_2',
    'ae2:spatial_cell_component_16',
    'ae2:spatial_cell_component_128',
    'ae2:spatial_storage_cell_2',
    'ae2:spatial_storage_cell_16',
    'ae2:spatial_storage_cell_128',
    'ae2:quantum_ring',
    'ae2:quantum_link'
]

const frontiersAe2BaselineRecipeOutputs = [
    'ae2:crafting_accelerator',
    'ae2:io_port',
    'ae2:cell_workbench',
    'ae2:view_cell',
    'ae2:network_tool',
    'ae2:energy_card',
    'ae2:wireless_booster',
    'ae2:dense_energy_cell',
    'ae2:singularity',
    'ae2:formation_plane',
    'ae2:annihilation_plane',
    'ae2:energy_level_emitter',
    'ae2:storage_monitor',
    'ae2:conversion_monitor',
    'ae2:inverted_toggle_bus',
    'ae2:chest',
    'ae2:cell_component_64k',
    'ae2:cell_component_256k',
    'ae2:item_storage_cell_64k',
    'ae2:item_storage_cell_256k',
    'ae2:fluid_storage_cell_64k',
    'ae2:fluid_storage_cell_256k',
    'ae2:64k_crafting_storage',
    'ae2:256k_crafting_storage'
]

frontiersAe2Colors.forEach(color => {
    frontiersAe2RetiredCableItems.push(`ae2:${color}_glass_cable`)
    frontiersAe2RetiredCableItems.push(`ae2:${color}_covered_cable`)
    frontiersAe2RetiredCableItems.push(`ae2:${color}_covered_dense_cable`)
})

const frontiersAe2RetiredItems = [
    'ae2:fluix_crystal',
    'ae2:fluix_dust',
    'ae2:certus_quartz_crystal',
    'ae2:certus_quartz_dust',
    'ae2:silicon',
    'ae2:printed_silicon',
    'ae2:printed_logic_processor',
    'ae2:printed_calculation_processor',
    'ae2:printed_engineering_processor',
    'ae2:logic_processor',
    'ae2:calculation_processor',
    'ae2:engineering_processor',
    'ae2:silicon_press',
    'ae2:logic_processor_press',
    'ae2:calculation_processor_press',
    'ae2:engineering_processor_press',
    'ae2:inscriber',
    'ae2:charger',
    'ae2:crank',
    'ae2:crystal_resonance_generator',
    'ae2:growth_accelerator',
    'ae2:condenser',
    'ae2:vibration_chamber',
    'ae2:energy_acceptor',
    'ae2:cable_energy_acceptor',
    'extendedae:ex_inscriber',
    'extendedae:infinity_cobblestone_cell',
    'extendedae:infinity_water_cell',
    'megacells:accumulation_processor_press',
    'megacells:printed_accumulation_processor',
    'megacells:accumulation_processor'
].concat(frontiersAe2RetiredCableItems, frontiersAe2ParkedItems)

const frontiersAe2RetiredIngredients = [
    'ae2:fluix_crystal',
    'ae2:fluix_dust',
    'ae2:logic_processor',
    'ae2:calculation_processor',
    'ae2:engineering_processor',
    'ae2:growth_accelerator',
    'ae2:condenser',
    'ae2:energy_acceptor',
    'ae2:cable_energy_acceptor',
    'megacells:accumulation_processor'
].concat(frontiersAe2RetiredCableItems, frontiersAe2ParkedItems)

ServerEvents.tags('item', event => {
    event.add('c:hidden_from_recipe_viewers', frontiersAe2RetiredItems)
})

ServerEvents.recipes(event => {
    frontiersAe2RetiredItems.forEach(item => event.remove({ output: item }))
    frontiersAe2RetiredIngredients.forEach(item => event.remove({ input: item }))
    frontiersAe2BaselineRecipeOutputs.forEach(item => event.remove({ output: item }))

    event.recipes.gtceu.polarizer('frontiers:charged_certus_quartz_crystal')
        .itemInputs('gtceu:certus_quartz_gem')
        .itemOutputs('ae2:charged_certus_quartz_crystal')
        .duration(80)
        .EUt(GTValues.V[GTValues.MV], 1)

    event.recipes.gtceu.mixer('frontiers:fluix_dust')
        .itemInputs('gtceu:certus_quartz_dust', 'gtceu:nether_quartz_dust', 'minecraft:redstone')
        .itemOutputs('2x gtceu:fluix_dust')
        .duration(40)
        .EUt(GTValues.V[GTValues.MV], 1)

    event.recipes.cosmiccore.laminator('frontiers:ae2/materials/fluix_pearl')
        .itemInputs('2x #c:ender_pearls', '8x gtceu:fluix_dust')
        .itemOutputs('2x ae2:fluix_pearl')
        .duration(100)
        .EUt(GTValues.V[GTValues.MV], 1)

    event.recipes.cosmiccore.laminator('frontiers:ae2/materials/quartz_glass')
        .itemInputs('gtceu:tempered_glass', 'gtceu:certus_quartz_dust')
        .itemOutputs('ae2:quartz_glass')
        .duration(100)
        .EUt(GTValues.V[GTValues.MV], 1)

    event.recipes.gtceu.assembler('frontiers:semi_dark_monitor')
        .itemInputs('8x gtceu:fine_annealed_copper_wire', '3x gtceu:glass_plate', 'gtceu:computer_monitor_cover', 'gtceu:steel_plate')
        .itemOutputs('ae2:semi_dark_monitor')
        .duration(160)
        .EUt(GTValues.V[GTValues.LV], 2)

    event.recipes.gtceu.assembler('frontiers:formation_core')
        .itemInputs('4x gtceu:flawless_quartzite_gem', 'gtceu:computer_monitor_cover', '2x #gtceu:circuits/lv')
        .itemOutputs('4x ae2:formation_core')
        .duration(160)
        .EUt(GTValues.V[GTValues.LV], 2)

    event.recipes.gtceu.assembler('frontiers:annihilation_core')
        .itemInputs('4x gtceu:flawless_certus_quartz_gem', 'gtceu:computer_monitor_cover', '2x #gtceu:circuits/lv')
        .itemOutputs('4x ae2:annihilation_core')
        .duration(160)
        .EUt(GTValues.V[GTValues.LV], 2)

    const cableTiers = [
        { name: 'lv', conductor: 'tin', laminate: 'tin', polymer: 'gtceu:rubber_foil', output: 1, voltage: GTValues.LV },
        { name: 'mv', conductor: 'copper', laminate: 'annealed_copper', polymer: 'gtceu:polyethylene_foil', output: 4, voltage: GTValues.MV },
        { name: 'hv', conductor: 'gold', laminate: 'gold', polymer: 'gtceu:polyethylene_foil', output: 8, voltage: GTValues.HV },
        { name: 'ev', conductor: 'aluminium', laminate: 'aluminium', polymer: 'gtceu:polytetrafluoroethylene_foil', output: 12, voltage: GTValues.EV },
        { name: 'iv', conductor: 'platinum', laminate: 'platinum', polymer: 'gtceu:polytetrafluoroethylene_foil', output: 16, voltage: GTValues.IV },
        { name: 'luv', conductor: 'niobium_titanium', laminate: 'niobium_titanium', polymer: 'gtceu:polytetrafluoroethylene_foil', output: 32, voltage: GTValues.LuV },
        { name: 'zpm', conductor: 'vanadium_gallium', laminate: 'vanadium_steel', polymer: 'gtceu:polytetrafluoroethylene_foil', output: 48, voltage: GTValues.ZPM },
        { name: 'uv', conductor: 'yttrium_barium_cuprate', laminate: 'yttrium_barium_cuprate', polymer: 'gtceu:polybenzimidazole_foil', output: 64, voltage: GTValues.UV }
    ]

    cableTiers.forEach(tier => {
        frontiersAe2Colors.forEach(color => {
            event.recipes.cosmiccore.laminator(`frontiers:ae2/cables/${tier.name}/${color}_smart`)
                .itemInputs(`gtceu:${tier.conductor}_single_cable`, tier.polymer)
                .inputFluids([`144x gtceu:${tier.laminate}`, `288x gtceu:${color}_dye`])
                .itemOutputs(`${tier.output}x ae2:${color}_smart_cable`)
                .circuit(2)
                .duration(100)
                .EUt(GTValues.VA[tier.voltage])

            event.recipes.cosmiccore.laminator(`frontiers:ae2/cables/${tier.name}/${color}_dense`)
                .itemInputs(`gtceu:${tier.conductor}_quadruple_cable`, `16x ${tier.polymer}`)
                .inputFluids([`144x gtceu:${tier.laminate}`, `2304x gtceu:${color}_dye`])
                .itemOutputs(`${tier.output}x ae2:${color}_smart_dense_cable`)
                .circuit(2)
                .duration(100)
                .EUt(GTValues.VA[tier.voltage])
        })

        event.recipes.cosmiccore.laminator(`frontiers:ae2/cables/${tier.name}/fluix_smart`)
            .itemInputs(`gtceu:${tier.conductor}_single_cable`, tier.polymer)
            .inputFluids(`144x gtceu:${tier.laminate}`)
            .itemOutputs(`${tier.output}x ae2:fluix_smart_cable`)
            .circuit(1)
            .duration(100)
            .EUt(GTValues.VA[tier.voltage])

        event.recipes.cosmiccore.laminator(`frontiers:ae2/cables/${tier.name}/fluix_dense`)
            .itemInputs(`gtceu:${tier.conductor}_quadruple_cable`, `16x ${tier.polymer}`)
            .inputFluids(`144x gtceu:${tier.laminate}`)
            .itemOutputs(`${tier.output}x ae2:fluix_smart_dense_cable`)
            .circuit(1)
            .duration(100)
            .EUt(GTValues.VA[tier.voltage])

        event.recipes.gtceu.cutter(`frontiers:cable_anchor/${tier.name}`)
            .itemInputs(`gtceu:${tier.laminate}_bolt`)
            .itemOutputs(`${tier.output}x ae2:cable_anchor`)
            .duration(100)
            .EUt(GTValues.VA[tier.voltage])
    })

    event.recipes.gtceu.lathe('frontiers:quartz_fiber')
        .itemInputs('minecraft:quartz')
        .itemOutputs('ae2:quartz_fiber')
        .duration(20)
        .EUt(GTValues.V[GTValues.LV], 2)

    event.recipes.gtceu.assembler('frontiers:drive')
        .itemInputs('8x gtceu:steel_plate', '4x ae2:fluix_smart_cable', '2x #gtceu:circuits/lv', 'gtceu:steel_frame')
        .itemOutputs('ae2:drive')
        .duration(160)
        .EUt(GTValues.V[GTValues.LV], 2)

    event.recipes.gtceu.assembler('frontiers:terminal')
        .itemInputs('32x gtceu:fine_annealed_copper_wire', '2x ae2:formation_core', '2x ae2:annihilation_core', 'gtceu:terminal', 'ae2:semi_dark_monitor')
        .itemOutputs('ae2:terminal')
        .duration(320)
        .EUt(GTValues.V[GTValues.LV], 4)

    event.recipes.gtceu.assembler('frontiers:crafting_terminal')
        .itemInputs('32x gtceu:fine_electrum_wire', 'craftingstation:crafting_station', 'ae2:terminal')
        .itemOutputs('ae2:crafting_terminal')
        .duration(320)
        .EUt(GTValues.V[GTValues.MV], 4)

    event.recipes.gtceu.assembler('frontiers:storage_bus')
        .itemInputs('ae2:cable_interface', '#c:chests', 'ae2:formation_core', 'ae2:annihilation_core')
        .itemOutputs('ae2:storage_bus')
        .duration(160)
        .EUt(GTValues.V[GTValues.LV], 2)

    event.recipes.gtceu.assembler('frontiers:import_bus')
        .itemInputs('ae2:annihilation_core', 'gtceu:lv_conveyor_module', '16x gtceu:fine_annealed_copper_wire', '2x gtceu:steel_plate')
        .itemOutputs('2x ae2:import_bus')
        .duration(100)
        .EUt(GTValues.V[GTValues.LV], 1)

    event.recipes.gtceu.assembler('frontiers:export_bus')
        .itemInputs('ae2:formation_core', 'gtceu:lv_conveyor_module', '16x gtceu:fine_annealed_copper_wire', '2x gtceu:steel_plate')
        .itemOutputs('2x ae2:export_bus')
        .duration(100)
        .EUt(GTValues.V[GTValues.LV], 1)

    event.recipes.gtceu.assembler('frontiers:level_emitter')
        .itemInputs('16x gtceu:fine_annealed_copper_wire', '4x gtceu:steel_plate', 'minecraft:redstone_torch', '#gtceu:circuits/mv')
        .itemOutputs('ae2:level_emitter')
        .duration(100)
        .EUt(GTValues.V[GTValues.MV], 1)

    event.recipes.gtceu.assembler('frontiers:energy_level_emitter')
        .itemInputs('16x gtceu:fine_annealed_copper_wire', '4x gtceu:tin_plate', 'minecraft:redstone_torch', '#gtceu:circuits/mv')
        .itemOutputs('ae2:energy_level_emitter')
        .duration(100)
        .EUt(GTValues.V[GTValues.MV], 1)

    event.shapeless('ae2:storage_monitor', ['ae2:level_emitter', 'ae2:semi_dark_monitor'])
        .id('frontiers:ae2/network/storage_monitor')
    event.shapeless('ae2:conversion_monitor', ['ae2:storage_monitor', 'ae2:formation_core', 'ae2:annihilation_core'])
        .id('frontiers:ae2/network/conversion_monitor')

    event.recipes.gtceu.assembler('frontiers:me_p2p_tunnel')
        .itemInputs('4x gtceu:stainless_steel_plate', '4x ae2:charged_certus_quartz_crystal', '2x ae2:semi_dark_monitor', '#gtceu:circuits/mv', 'ae2:formation_core', 'ae2:annihilation_core')
        .itemOutputs('4x ae2:me_p2p_tunnel')
        .duration(160)
        .EUt(GTValues.V[GTValues.MV], 2)

    event.recipes.gtceu.assembler('frontiers:io_port')
        .itemInputs('5x gtceu:aluminium_plate', 'ae2:drive', '2x gtceu:mv_conveyor_module', '#gtceu:circuits/mv')
        .itemOutputs('ae2:io_port')
        .duration(160)
        .EUt(GTValues.V[GTValues.MV], 2)

    event.recipes.gtceu.assembler('frontiers:chest')
        .itemInputs('5x gtceu:aluminium_plate', 'ae2:terminal', 'ae2:drive', '2x gtceu:mv_conveyor_module')
        .itemOutputs('ae2:chest')
        .duration(160)
        .EUt(GTValues.V[GTValues.MV], 2)

    event.recipes.gtceu.assembler('frontiers:annihilation_plane')
        .itemInputs('ae2:semi_dark_monitor', '3x ae2:annihilation_core', 'gtceu:stainless_steel_drill_head')
        .inputFluids('576x gtceu:soldering_alloy')
        .itemOutputs('ae2:annihilation_plane')
        .circuit(2)
        .duration(180)
        .EUt(GTValues.V[GTValues.HV], 2)

    event.recipes.gtceu.assembler('frontiers:formation_plane')
        .itemInputs('ae2:semi_dark_monitor', '3x ae2:formation_core', 'gtceu:hv_robot_arm')
        .inputFluids('576x gtceu:soldering_alloy')
        .itemOutputs('ae2:formation_plane')
        .circuit(3)
        .duration(180)
        .EUt(GTValues.V[GTValues.HV], 2)

    event.shapeless('ae2:cell_workbench', ['ae2:item_cell_housing', 'minecraft:crafting_table'])
        .id('frontiers:ae2/network/cell_workbench')
    event.shapeless('ae2:view_cell', ['ae2:item_cell_housing', 'gtceu:certus_quartz_gem'])
        .id('frontiers:ae2/network/view_cell')
    event.shapeless('ae2:network_tool', ['gtceu:steel_wrench', 'ae2:energy_cell', 'ae2:terminal'])
        .id('frontiers:ae2/network/network_tool')

    event.shapeless('ae2:cable_interface', ['ae2:interface'])
        .id('frontiers:ae2/network/cable_interface')
    event.shapeless('ae2:interface', ['ae2:cable_interface'])
        .id('frontiers:ae2/network/interface')
    event.shapeless('ae2:cable_pattern_provider', ['ae2:pattern_provider'])
        .id('frontiers:ae2/network/cable_pattern_provider')
    event.shapeless('ae2:pattern_provider', ['ae2:cable_pattern_provider'])
        .id('frontiers:ae2/network/pattern_provider')
    event.shapeless('ae2:toggle_bus', ['ae2:level_emitter', 'minecraft:lever'])
        .id('frontiers:ae2/network/toggle_bus')
    event.shapeless('ae2:inverted_toggle_bus', ['ae2:toggle_bus'])
        .id('frontiers:ae2/network/inverted_toggle_bus')

    event.recipes.gtceu.assembler('frontiers:basic_card')
        .itemInputs('16x gtceu:fine_red_alloy_wire', '4x gtceu:steel_plate', '4x gtceu:rose_gold_plate', '#gtceu:circuits/mv')
        .inputFluids('144x gtceu:soldering_alloy')
        .itemOutputs('4x ae2:basic_card')
        .duration(80)
        .EUt(GTValues.V[GTValues.LV], 1)

    event.recipes.gtceu.assembler('frontiers:advanced_card')
        .itemInputs('16x gtceu:fine_red_alloy_wire', '4x gtceu:steel_plate', '3x gtceu:diamond_plate', '#gtceu:circuits/mv')
        .inputFluids('144x gtceu:soldering_alloy')
        .itemOutputs('4x ae2:advanced_card')
        .duration(80)
        .EUt(GTValues.V[GTValues.MV], 1)

    event.shapeless('2x ae2:speed_card', ['ae2:advanced_card', '2x gtceu:flawless_fluix_gem'])
        .id('frontiers:ae2/cards/speed')
    event.shapeless('ae2:void_card', ['ae2:basic_card', 'trashcans:item_trash_can'])
        .id('frontiers:ae2/cards/void')
    event.shapeless('ae2:equal_distribution_card', ['ae2:advanced_card', 'gtceu:lv_robot_arm'])
        .id('frontiers:ae2/cards/equal_distribution')
    event.shapeless('ae2:memory_card', ['ae2:basic_card', 'ae2:cell_component_1k'])
        .id('frontiers:ae2/cards/memory')
    event.shapeless('2x ae2:capacity_card', ['ae2:basic_card', 'gtceu:steel_crate'])
        .id('frontiers:ae2/cards/capacity')
    event.shapeless('ae2:redstone_card', ['ae2:basic_card', 'minecraft:redstone_torch'])
        .id('frontiers:ae2/cards/redstone')
    event.shapeless('ae2:crafting_card', ['ae2:basic_card', 'minecraft:crafting_table'])
        .id('frontiers:ae2/cards/crafting')
    event.shapeless('ae2:fuzzy_card', ['ae2:advanced_card', '#minecraft:wool'])
        .id('frontiers:ae2/cards/fuzzy')
    event.shapeless('ae2:inverter_card', ['ae2:advanced_card', 'minecraft:redstone_torch'])
        .id('frontiers:ae2/cards/inverter')
    event.shapeless('ae2:energy_card', ['ae2:advanced_card', 'ae2:dense_energy_cell'])
        .id('frontiers:ae2/cards/energy')
    event.shapeless('ae2:wireless_booster', ['gtceu:mv_emitter', '2x gtceu:flawless_fluix_gem'])
        .id('frontiers:ae2/network/wireless_booster')

    event.recipes.gtceu.assembler('frontiers:item_cell_housing')
        .itemInputs('3x gtceu:steel_plate', '2x gtceu:tempered_glass', '2x gtceu:red_alloy_single_cable', 'ae2:formation_core', 'ae2:annihilation_core')
        .inputFluids('144x gtceu:redstone')
        .itemOutputs('ae2:item_cell_housing')
        .duration(80)
        .EUt(GTValues.V[GTValues.LV], 1)

    event.recipes.gtceu.assembler('frontiers:fluid_cell_housing')
        .itemInputs('3x gtceu:annealed_copper_plate', '2x gtceu:tempered_glass', '2x gtceu:red_alloy_single_cable', 'ae2:formation_core', 'ae2:annihilation_core')
        .inputFluids('144x gtceu:redstone')
        .itemOutputs('ae2:fluid_cell_housing')
        .duration(80)
        .EUt(GTValues.V[GTValues.LV], 1)

    const storageTiers = [
        { size: '1k', wire: 'annealed_copper', plate: 'steel', circuit: 'lv', voltage: GTValues.LV },
        { size: '4k', wire: 'electrum', plate: 'aluminium', circuit: 'mv', voltage: GTValues.MV },
        { size: '16k', wire: 'manasteel', plate: 'stainless_steel', circuit: 'hv', voltage: GTValues.HV },
        { size: '64k', wire: 'aluminium', plate: 'tungsten_steel', circuit: 'ev', voltage: GTValues.EV },
        { size: '256k', wire: 'tungsten_steel', plate: 'rhodium_plated_palladium', circuit: 'iv', voltage: GTValues.IV }
    ]

    storageTiers.forEach(tier => {
        event.recipes.gtceu.assembler(`frontiers:cell_component_${tier.size}`)
            .itemInputs(`32x gtceu:fine_${tier.wire}_wire`, `4x #gtceu:circuits/${tier.circuit}`, `4x gtceu:${tier.plate}_plate`, 'ae2:formation_core', 'ae2:annihilation_core')
            .inputFluids('288x gtceu:redstone')
            .itemOutputs(`ae2:cell_component_${tier.size}`)
            .duration(100)
            .EUt(GTValues.VA[tier.voltage])

        event.shapeless(`ae2:item_storage_cell_${tier.size}`, ['ae2:item_cell_housing', `ae2:cell_component_${tier.size}`])
            .id(`frontiers:ae2/storage/item_cell_${tier.size}`)
        event.shapeless(`ae2:fluid_storage_cell_${tier.size}`, ['ae2:fluid_cell_housing', `ae2:cell_component_${tier.size}`])
            .id(`frontiers:ae2/storage/fluid_cell_${tier.size}`)
    })

    event.recipes.gtceu.assembler('frontiers:energy_cell')
        .itemInputs('4x gtceu:steel_plate', '4x ae2:charged_certus_quartz_crystal', 'ae2:quartz_glass', '#gtceu:batteries/lv')
        .itemOutputs('ae2:energy_cell')
        .duration(160)
        .EUt(GTValues.V[GTValues.MV], 2)

    event.recipes.gtceu.assembler('frontiers:dense_energy_cell')
        .itemInputs('8x ae2:energy_cell', '16x gtceu:galvanized_ethersteel_plate', '32x gtceu:electrum_foil', '8x gtceu:terrasteel_double_wire')
        .itemOutputs('ae2:dense_energy_cell')
        .duration(320)
        .EUt(GTValues.V[GTValues.HV], 4)

    event.recipes.gtceu.assembler('frontiers:singularity')
        .itemInputs('ae2:dense_energy_cell', '4x gtceu:ev_emitter', '4x gtceu:ev_sensor', 'gtceu:ev_field_generator')
        .itemOutputs('ae2:singularity')
        .duration(12000)
        .EUt(GTValues.V[GTValues.EV], 4)

    event.custom({
        type: 'ae2:transform',
        circumstance: { type: 'explosion' },
        ingredients: [
            { item: 'ae2:singularity' },
            { tag: 'c:dusts/ender_pearl' }
        ],
        result: { count: 2, id: 'ae2:quantum_entangled_singularity' }
    }).id('frontiers:ae2/quantum/entangled_singularity')

    event.custom({
        type: 'ae2:transform',
        circumstance: { type: 'explosion' },
        ingredients: [
            { item: 'ae2:singularity' },
            { tag: 'c:ender_pearls' }
        ],
        result: { count: 2, id: 'ae2:quantum_entangled_singularity' }
    }).id('frontiers:ae2/quantum/entangled_singularity_from_pearl')

    event.recipes.gtceu.assembler('frontiers:crafting_unit')
        .itemInputs('gtceu:stainless_steel_frame', '4x gtceu:stainless_steel_plate', '4x gtceu:galvanized_ethersteel_plate', '4x gtceu:galvanized_ethersteel_screw', '#gtceu:circuits/hv')
        .itemOutputs('ae2:crafting_unit')
        .duration(160)
        .EUt(GTValues.V[GTValues.HV], 2)

    event.recipes.gtceu.assembler('frontiers:molecular_assembler')
        .itemInputs('gtceu:stainless_steel_frame', '6x gtceu:glass_plate', '4x gtceu:galvanized_ethersteel_screw', 'gtceu:hv_robot_arm', 'minecraft:crafting_table')
        .itemOutputs('ae2:molecular_assembler')
        .duration(160)
        .EUt(GTValues.V[GTValues.HV], 2)

    event.recipes.gtceu.assembler('frontiers:blank_pattern')
        .itemInputs('32x gtceu:fine_galvanized_ethersteel_wire', '16x gtceu:stainless_steel_plate', '2x #gtceu:circuits/hv', 'gtceu:diamond_lens')
        .inputFluids('576x gtceu:soldering_alloy')
        .itemOutputs('8x ae2:blank_pattern')
        .duration(90)
        .EUt(GTValues.V[GTValues.HV], 1)

    event.recipes.gtceu.assembler('frontiers:pattern_encoding_terminal')
        .itemInputs('32x gtceu:fine_manasteel_wire', 'ae2:crafting_terminal', 'ae2:blank_pattern', 'gtceu:hv_emitter')
        .itemOutputs('ae2:pattern_encoding_terminal')
        .duration(160)
        .EUt(GTValues.V[GTValues.HV], 2)

    event.recipes.gtceu.assembler('frontiers:pattern_access_terminal')
        .itemInputs('32x gtceu:fine_electrum_wire', 'ae2:blank_pattern', 'ae2:terminal', 'gtceu:computer_monitor_cover')
        .itemOutputs('ae2:pattern_access_terminal')
        .duration(320)
        .EUt(GTValues.V[GTValues.HV], 4)

    storageTiers.forEach(tier => {
        event.shapeless(`ae2:${tier.size}_crafting_storage`, ['ae2:crafting_unit', `ae2:cell_component_${tier.size}`])
            .id(`frontiers:ae2/crafting/${tier.size}_crafting_storage`)
    })

    event.shapeless('ae2:crafting_monitor', ['ae2:crafting_unit', 'ae2:semi_dark_monitor'])
        .id('frontiers:ae2/crafting/crafting_monitor')

    event.shapeless('ae2:crafting_accelerator', ['ae2:crafting_unit', '#gtceu:circuits/ev'])
        .id('frontiers:ae2/crafting/crafting_accelerator')
})
