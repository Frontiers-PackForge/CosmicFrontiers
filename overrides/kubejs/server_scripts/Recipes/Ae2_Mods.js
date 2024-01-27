let yeet = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: itemName })
  })
  ServerEvents.tags('item', event => {
    event.add('c:hidden_from_recipe_viewers', itemName)
    event.add('forge:viewers/hidden_from_recipe', itemName)
  })
}
//Oh jeebus AE2 Recipe Yeeting
yeet('ae2:fluix_glass_cable')
yeet('ae2:fluix_covered_cable')
yeet('ae2:fluix_covered_dense_cable')
yeet('ae2:printed_calculation_processor')
yeet('ae2:printed_silicon')
yeet('ae2:printed_engineering_processor')
yeet('ae2:printed_logic_processor')
yeet('ae2:logic_processor')
yeet('ae2:calculation_processor')
yeet('ae2:engineering_processor')
yeet('megacells:accumulation_processor_press')
yeet('megacells:printed_accumulation_processor')
yeet('megacells:accumulation_processor')
yeet('ae2:certus_quartz_axe')
yeet('ae2:nether_quartz_axe')
yeet('ae2:fluix_axe')
yeet('ae2:certus_quartz_hoe')
yeet('ae2:nether_quartz_hoe')
yeet('ae2:fluix_hoe')
yeet('ae2:certus_quartz_shovel')
yeet('ae2:nether_quartz_shovel')
yeet('ae2:fluix_shovel')
yeet('ae2:certus_quartz_pickaxe')
yeet('ae2:nether_quartz_pickaxe')
yeet('ae2:fluix_pickaxe')
yeet('ae2:certus_quartz_sword')
yeet('ae2:nether_quartz_sword')
yeet('ae2:fluix_sword')
yeet('ae2:fluix_crystal')
yeet('ae2:fluix_dust')
yeet('ae2:certus_quartz_crystal')
yeet('ae2:charged_certus_quartz_crystal')
yeet('ae2:certus_quartz_dust')
yeet('ae2:quartz_cluster')
yeet('ae2:large_quartz_bud')
yeet('ae2:medium_quartz_bud')
yeet('ae2:small_quartz_bud')
yeet('ae2:damaged_budding_quartz')
yeet('ae2:chipped_budding_quartz')
yeet('ae2:flawed_budding_quartz')
yeet('ae2:flawless_budding_quartz')
yeet('ae2:fluix_block')
yeet('ae2:fluix_stairs')
yeet('ae2:fluix_slab')
yeet('ae2:fluix_wall')
yeet('ae2:ender_dust')
yeet('ae2:engineering_processor_press')
yeet('ae2:calculation_processor_press')
yeet('ae2:silicon_press')
yeet('ae2:logic_processor_press')
yeet('ae2:sky_dust')
yeet('ae2:inscriber')
yeet('expatternprovider:ex_inscriber')
yeet('ae2:sky_stone_chest')
yeet('ae2:smooth_sky_stone_chest')
yeet('ae2:sky_stone_tank')
yeet('ae2:silicon')
yeet('megacells:cable_mega_interface')
yeet('megacells:cable_mega_pattern_provider')
yeet('megacells:mega_interface')
yeet('megacells:mega_pattern_provider')
yeet('ae2:vibration_chamber')
//Purging Recipes Containing these - JEI moment
// This is Incredibly Destructive, but due to how AE2 Nests/Autogens Recipes and The Migration to JEI from REI due to stability, there's some extra work I've needed to do.

let denseCoverHidding = ['ae2:black_covered_dense_cable', 'ae2:red_covered_dense_cable', 'ae2:green_covered_dense_cable', 'ae2:brown_covered_dense_cable', 'ae2:blue_covered_dense_cable', 'ae2:purple_covered_dense_cable', 'ae2:cyan_covered_dense_cable', 'ae2:light_gray_covered_dense_cable', 'ae2:gray_covered_dense_cable', 'ae2:pink_covered_dense_cable', 'ae2:lime_covered_dense_cable', 'ae2:yellow_covered_dense_cable', 'ae2:light_blue_covered_dense_cable', 'ae2:magenta_covered_dense_cable', 'ae2:orange_covered_dense_cable', 'ae2:white_covered_dense_cable']
let quartzCableHidding = ['ae2:black_glass_cable', 'ae2:red_glass_cable', 'ae2:green_glass_cable', 'ae2:brown_glass_cable', 'ae2:blue_glass_cable', 'ae2:purple_glass_cable', 'ae2:cyan_glass_cable', 'ae2:light_gray_glass_cable', 'ae2:gray_glass_cable', 'ae2:pink_glass_cable', 'ae2:lime_glass_cable', 'ae2:yellow_glass_cable', 'ae2:light_blue_glass_cable', 'ae2:magenta_glass_cable', 'ae2:orange_glass_cable', 'ae2:white_glass_cable']
let coveredCableHidding= ['ae2:black_covered_cable', 'ae2:red_covered_cable', 'ae2:green_covered_cable', 'ae2:brown_covered_cable', 'ae2:blue_covered_cable', 'ae2:purple_covered_cable', 'ae2:cyan_covered_cable', 'ae2:light_gray_covered_cable', 'ae2:gray_covered_cable', 'ae2:pink_covered_cable', 'ae2:lime_covered_cable', 'ae2:yellow_covered_cable', 'ae2:light_blue_covered_cable', 'ae2:magenta_covered_cable', 'ae2:orange_covered_cable', 'ae2:white_covered_cable']
let processors = ['ae2:logic_processor', 'ae2:calculation_processor', 'ae2:engineering_processor', 'megacells:accumulation_processor']
ServerEvents.recipes(event => {
  event.remove({ output: 'ae2:fluix_glass_cable' })
  event.remove({ input: 'ae2:fluix_glass_cable' })
  event.remove({ output: 'ae2:fluix_crystal' })
  event.remove({ input: 'ae2:fluix_crystal' })
  event.remove({ output: 'ae2:fluix_dust'})
  event.remove({ input: 'ae2:fluix_dust' })

  event.remove({ output: processors })
  event.remove({ input: processors })
  event.remove({ output: denseCoverHidding })
  event.remove({ output: quartzCableHidding })
  event.remove({ output: coveredCableHidding })
  event.remove({ input: denseCoverHidding })
  event.remove({ input: quartzCableHidding })
  event.remove({ input: coveredCableHidding })
})

ServerEvents.tags('item', event => {
  event.add('forge:viewers/hidden_from_recipe', denseCoverHidding)
  event.add('c:hidden_from_recipe_viewers', denseCoverHidding)

  event.add('forge:viewers/hidden_from_recipe', quartzCableHidding)
  event.add('c:hidden_from_recipe_viewers', quartzCableHidding)

  event.add('forge:viewers/hidden_from_recipe', coveredCableHidding)
  event.add('c:hidden_from_recipe_viewers', coveredCableHidding)

  // event.add('forge:viewers/hidden_from_recipe', denseCoverHidding)
  // event.add('c:hidden_from_recipe_viewers', denseCoverHidding)
})

ServerEvents.recipes(event => {
  event.remove({ output: 'ae2:item_cell_housing' })
  event.remove({ output: 'ae2:fluid_cell_housing' })
  event.remove({ output: 'appbot:mana_cell_housing' })
  event.remove({ output: 'megacells:mega_item_cell_housing' })
  event.remove({ output: 'megacells:mega_fluid_cell_housing' })
  event.remove({ output: 'megacells:mega_mana_cell_housing' })
  event.remove({ output: 'ae2:cable_anchor' })
  event.remove({ output: 'ae2:cable_anchor' })
  event.remove({ output: 'ae2:molecular_assembler' })
  event.remove({ output: 'ae2:pattern_provider' })
  event.remove({ output: 'ae2:quartz_fiber' })
  event.remove({ output: 'ae2:quartz_glass' })
  event.remove({ output: 'ae2:interface' })
  // event.remove({ output:  })
  // event.remove({ output:  })
  event.recipes.gtceu.assembly_line('gtceu:assline/create_cell_recipe')
  .itemInputs('64x megacells:mega_energy_cell', '8x #gtceu:circuits/luv', '16x gtceu:superconducting_coil', '64x ae2:fluix_smart_dense_cable','64x ae2:fluix_smart_dense_cable','32x gtceu:neutron_reflector')
  .itemOutputs('ae2:creative_energy_cell')
  .inputFluids(
      Fluid.of('gtceu:uu_matter', 666),
      Fluid.of('gtceu:titanium_tungsten_carbide', 4608),
      Fluid.of('gtceu:soldering_alloy', 8192),
  )
  .duration(500)
  .EUt(GTValues.VA[GTValues.LuV])

  event.remove({ id: 'ars_nouveau:novice_spell_book' })
  event.recipes.gtceu.compressor('gtceu:compressor/certus_block_squish')
    .itemInputs('2x gtceu:netherite_scrap_dust')
    .itemInputs('2x gtceu:rose_gold_dust')
    .itemOutputs('gtceu:netherite_alloy_dust')
    .duration(500)
    .EUt(GTValues.VA[GTValues.LV]);

  //Acceptor
  event.remove({ output: 'ae2:energy_acceptor' })
  event.recipes.gtceu.assembler('ae2:acceptor_assembly')
    .itemInputs(['6x gtceu:steel_plate', '4x gtceu:lv_voltage_coil', '4x #gtceu:circuits/lv', 'gtceu:lv_machine_hull'])
    .itemOutputs('ae2:energy_acceptor')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LV]);
  //Controller
  event.recipes.gtceu.assembler('ae2:controller_assembly')
    .itemInputs(['8x gtceu:mana_steel_hex_wire', '4x #gtceu:circuits/mv', 'ae2:energy_acceptor'])
    .itemOutputs('ae2:controller')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LV]);
  //Drive Bay
  event.recipes.gtceu.assembler('ae2:drive_assembly')
    .itemInputs(['8x gtceu:steel_plate', '4x ae2:fluix_smart_cable', '2x #gtceu:circuits/lv', 'gtceu:steel_frame'])
    .itemOutputs('ae2:drive')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LV]);
  //Illuminated Panel
  event.recipes.gtceu.assembler('ae2:monitor_assembly')
    .itemInputs(['8x gtceu:annealed_copper_fine_wire', '3x gtceu:glass_plate', 'gtceu:computer_monitor_cover', 'gtceu:steel_plate'])
    .itemOutputs('ae2:semi_dark_monitor')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LV]);
  //Formation Core
  event.recipes.gtceu.assembler('ae2:formation_assembly')
    .itemInputs(['4x #forge:flawless_gems/quartzite', 'gtceu:computer_monitor_cover', 'gtceu:lv_robot_arm'])
    .itemOutputs('4x ae2:formation_core')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LV]);
  //Annihilation Core
  event.recipes.gtceu.assembler('ae2:annihilation_assembly')
    .itemInputs(['4x #forge:flawless_gems/certus_quartz', 'gtceu:computer_monitor_cover', 'gtceu:lv_robot_arm'])
    .itemOutputs('4x ae2:annihilation_core')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LV]);
  //Terminal Basic
  event.recipes.gtceu.assembler('ae2:terminal_assembly')
    .itemInputs(['32x gtceu:annealed_copper_fine_wire', '2x ae2:formation_core', '2x ae2:annihilation_core', 'gtceu:terminal', 'ae2:semi_dark_monitor'])
    .itemOutputs('ae2:terminal')
    .duration(320)
    .EUt(GTValues.VA[GTValues.LV]);
  //Terminal Crafting
  event.recipes.gtceu.assembler('ae2:terminal_crafting_assembly')
    .itemInputs(['32x gtceu:electrum_fine_wire', 'craftingstation:crafting_station', 'ae2:terminal'])
    .itemOutputs('ae2:crafting_terminal')
    .duration(320)
    .EUt(GTValues.VA[GTValues.LV]);
  //Interface 1x Craft
  event.recipes.gtceu.assembler('ae2:interface_assembly_t1')
    .itemInputs(['4x gtceu:steel_plate', '2x #gtceu:circuits/lv', '2x gtceu:lv_robot_arm', 'gtceu:lv_machine_hull'])
    .itemOutputs('ae2:interface')
    .duration(320)
    .EUt(GTValues.VA[GTValues.LV]);
  //Interface 4x Craft
  event.recipes.gtceu.assembler('ae2:interface_assembly_t2')
    .itemInputs(['4x gtceu:stainless_steel_plate', '2x #gtceu:circuits/hv', '2x gtceu:hv_robot_arm', 'gtceu:hv_machine_hull'])
    .itemOutputs('4x ae2:interface')
    .duration(320)
    .EUt(512);
  //Interface 8x Craft
  event.recipes.gtceu.assembler('ae2:interface_assembly_t3')
    .itemInputs(['4x gtceu:tungsten_steel_plate', '2x #gtceu:circuits/iv', '2x gtceu:iv_robot_arm', 'gtceu:iv_machine_hull'])
    .itemOutputs('8x ae2:interface')
    .duration(320)
    .EUt(8192);
  //Pattern Providers
  //Pattern Provide 1x Craft
  event.recipes.gtceu.assembler('ae2:pattern_assembly_t1')
    .itemInputs(['4x gtceu:galvanized_ethersteel_plate', '2x #gtceu:circuits/hv', '2x gtceu:hv_robot_arm', 'gtceu:hv_machine_hull'])
    .itemOutputs('ae2:pattern_provider')
    .duration(320)
    .EUt(GTValues.VA[GTValues.HV]);
  //Pattern Provide 4x Craft
  event.recipes.gtceu.assembler('ae2:pattern_assembly_t2')
    .itemInputs(['4x gtceu:prismatic_tungstensteel_plate', '2x #gtceu:circuits/iv', '2x gtceu:iv_robot_arm', 'gtceu:iv_machine_hull'])
    .itemOutputs('4x ae2:pattern_provider')
    .duration(320)
    .EUt(GTValues.VA[GTValues.IV]);
  //Pattern Provide 8x Craft
  event.recipes.gtceu.assembler('ae2:pattern_assembly_t3')
    .itemInputs(['4x gtceu:virtue_meld_plate', '2x #gtceu:circuits/luv', '2x gtceu:luv_robot_arm', 'gtceu:luv_machine_hull'])
    .itemOutputs('8x ae2:pattern_provider')
    .duration(320)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.assembler('ae2:item_cell_housing')
    .itemInputs(['3x gtceu:steel_plate', '2x gtceu:tempered_glass', '2x gtceu:red_alloy_single_cable', 'ae2:formation_core', 'ae2:annihilation_core'])
    .inputFluids(`redstone 144`)
    .itemOutputs('ae2:item_cell_housing')
    .duration(80)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.assembler('ae2:fluid_cell_housing')
    .itemInputs(['3x gtceu:annealed_copper_plate', '2x gtceu:tempered_glass', '2x gtceu:red_alloy_single_cable', 'ae2:formation_core', 'ae2:annihilation_core'])
    .inputFluids(`redstone 144`)
    .itemOutputs('ae2:fluid_cell_housing')
    .duration(80)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.assembler('appbot:mana_cell_housing')
    .itemInputs(['3x gtceu:mana_steel_plate', '2x gtceu:tempered_glass', '2x gtceu:red_alloy_single_cable', 'ae2:formation_core', 'ae2:annihilation_core'])
    .inputFluids(`redstone 144`)
    .itemOutputs('appbot:mana_cell_housing')
    .duration(80)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.assembler('arseng:source_cell_housing')
    .itemInputs(['3x gtceu:rose_gold_plate', '2x gtceu:tempered_glass', '2x gtceu:red_alloy_single_cable', 'ae2:formation_core', 'ae2:annihilation_core'])
    .inputFluids(`redstone 144`)
    .itemOutputs('arseng:source_cell_housing')
    .duration(80)
    .EUt(GTValues.VA[GTValues.LV]);
  //Interface Full to Thin and Thin to Full
  event.shapeless('ae2:cable_interface', [
    'ae2:interface'
  ])
  event.shapeless('ae2:interface', [
    'ae2:cable_interface'
  ])
  event.shapeless('ae2:pattern_provider', [
    'ae2:cable_pattern_provider'
  ])
  //Storage Components (Automatic Recipe Generation)
  let machineTier = [
    'lv',
    'mv',
    'hv',
    'ev',
    'iv',
    'luv',
    'zpm',
    'uv'
  ]
  let tierFineWire = [
    'annealed_copper',
    'electrum',
    'mana_steel',
    'aluminium',
    'tungsten_steel',
    'yttrium_barium_cuprate',
    'naquadah',
    'uranium_rhodium_dinaquadide'
  ]
  let tierPlate = [
    'steel',
    'aluminium',
    'stainless_steel',
    'tungsten_steel',
    'rhodium_plated_palladium',
    'naquadah_alloy',
    'darmstadtium',
    'neutronium'
  ]
  let componentTier = [
    'ae2:cell_component_1k',
    'ae2:cell_component_4k',
    'ae2:cell_component_16k',
    'ae2:cell_component_64k',
    'ae2:cell_component_256k',
    'megacells:cell_component_1m',
    'megacells:cell_component_4m',
    'megacells:cell_component_16m'
  ]
  let euScale = [
    GTValues.VA[GTValues.LV],
    GTValues.VA[GTValues.MV],
    GTValues.VA[GTValues.HV],
    GTValues.VA[GTValues.EV],
    GTValues.VA[GTValues.IV],
    GTValues.VA[GTValues.LuV],
    GTValues.VA[GTValues.ZPM],
    GTValues.VA[GTValues.UV],
  ]
  machineTier.forEach((tier, index) => {
    let fineWireMaterial = tierFineWire[index]
    let plateType = tierPlate[index]
    let componentType = componentTier[index]
    let euType = euScale[index]

    event.recipes.gtceu.assembler(`ae2:${tier}_component_assembly`)
      .itemInputs(`32x gtceu:${fineWireMaterial}_fine_wire`, `4x #gtceu:circuits/${tier}`, `4x gtceu:${plateType}_plate`, 'ae2:formation_core', 'ae2:annihilation_core')
      .inputFluids('gtceu:redstone 288')
      .itemOutputs(`${componentType}`)
      .duration(100)
      .EUt(`${euType}`);
  })


  let ae2Components = [
    '1',
    '4',
    '16',
    '64',
    '256'
  ]


  ae2Components.forEach(ae2comp => {
    event.remove({ output: `ae2:item_storage_cell_${ae2comp}k` })
    event.remove({ output: `ae2:fluid_storage_cell_${ae2comp}k` })
    event.remove({ output: `appbot:mana_storage_cell_${ae2comp}k` })
    event.remove({ output: `megacells:item_storage_cell_${ae2comp}m` })
    event.remove({ output: `megacells:fluid_storage_cell_${ae2comp}m` })
    event.remove({ output: `megacells:mana_storage_cell_${ae2comp}m` })
    event.shapeless(`ae2:item_storage_cell_${ae2comp}k`, [
      'ae2:item_cell_housing',
      `ae2:cell_component_${ae2comp}k`

    ])
    event.shapeless(`ae2:fluid_storage_cell_${ae2comp}k`, [
      'ae2:fluid_cell_housing',
      `ae2:cell_component_${ae2comp}k`

    ])
    event.shapeless(`appbot:mana_storage_cell_${ae2comp}k`, [
      'appbot:mana_cell_housing',
      `ae2:cell_component_${ae2comp}k`

    ])
    //Now the Mega Cells
    event.shapeless(`megacells:item_storage_cell_${ae2comp}m`, [
      'megacells:mega_item_cell_housing',
      `megacells:cell_component_${ae2comp}m`

    ])
    event.shapeless(`megacells:fluid_storage_cell_${ae2comp}m`, [
      'megacells:mega_fluid_cell_housing',
      `megacells:cell_component_${ae2comp}m`

    ])
    event.shapeless(`megacells:mana_storage_cell_${ae2comp}m`, [
      'megacells:mega_mana_cell_housing',
      `megacells:cell_component_${ae2comp}m`

    ])
  })

  let tierCable = [
    'tin',
    'copper',
    'gold',
    'aluminium',
    'platinum',
    'niobium_titanium',
    'vanadium_gallium',
    'yttrium_barium_cuprate'
  ]
  let lamFluids = [
    'tin',
    'annealed_copper',
    'gold',
    'aluminium',
    'platinum',
    'niobium_titanium',
    'vanadium_steel',
    'yttrium_barium_cuprate'
  ]
  let outputAmount = [
    '1',
    '4',
    '8',
    '12',
    '16',
    '32',
    '48',
    '64',
  ]
  tierCable.forEach((tier, index) => {
    //Adding Relevant Indexes for some reason the fluid index is also fucked so uh, neat...
    let euType = euScale[index]
    let fluids = lamFluids[index]
    let output = outputAmount[index]
    event.recipes.gtceu.laminator(`ae2:${tier}_smart_cable`)
      .itemInputs([`gtceu:${tier}_single_cable`, `gtceu:${tier}_foil`])
      .inputFluids(`tin_alloy 144`)
      .itemOutputs(`${output}x ae2:fluix_smart_cable`)
      .duration(100)
      .EUt(`${euType}`);
    event.recipes.gtceu.laminator(`ae2:${tier}_smart_dense_cable`)
      .itemInputs([`gtceu:${tier}_quadruple_cable`, `8x gtceu:${tier}_foil`])
      .inputFluids(`tin_alloy 144`)
      .itemOutputs(`${output}x ae2:fluix_smart_dense_cable`)
      .duration(100)
      .EUt(`${euType}`);
    event.recipes.gtceu.cutter(`ae2:${tier}_cable_anchor`)
      .itemInputs(`gtceu:${fluids}_bolt`)
      .itemOutputs(`${output}x ae2:cable_anchor`)
      .duration(100)
      .EUt(`${euType}`);
  })

  event.recipes.gtceu.lathe(`ae2:fiber`)
    .itemInputs('minecraft:quartz')
    .itemOutputs('ae2:quartz_fiber')
    .duration(20)
    .EUt(GTValues.VA[GTValues.LV])


  event.recipes.gtceu.assembler('ae2:storage_bus')
    .itemInputs(['ae2:cable_interface', '#forge:chests', 'ae2:formation_core', 'ae2:annihilation_core'])
    .itemOutputs('ae2:storage_bus')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LV]);















  event.custom({
    "type": "ae2:transform",
    "circumstance": {
      "type": "fluid",
      "tag": "minecraft:water"
    },
    "ingredients": [
      {
        "tag": "forge:gems/quartz"
      },
      {
        "tag": "forge:gems/quartzite"
      },
      {
        "tag": "forge:dusts/redstone"
      }
    ],
    "result": {
      "count": 2,
      "item": "gtceu:certus_quartz_flawless_gem"
    }
  })
  event.custom({
    "type": "ae2:transform",
    "circumstance": {
      "type": "fluid",
      "tag": "minecraft:lava"
    },
    "ingredients": [
      {
        "tag": "forge:ingots/iron"
      },
      {
        "tag": "forge:dusts/charcoal"
      }
    ],
    "result": {
      "count": 1,
      "item": "gtceu:wrought_iron_ingot"
    }
  })




})