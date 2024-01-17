let yeet = (itemName) => {
  ServerEvents.recipes(event => { 
      event.remove({ output: itemName })
    })
  ServerEvents.tags('item', event => {
      event.add('forge:viewers/hidden_from_recipe', itemName)
  })
}
yeet('ae2:fluix_glass_cable')
yeet('ae2:fluix_covered_cable')
yeet('ae2:fluix_covered_dense_cable')
yeet('ae2:printed_calculation_processor')
yeet('ae2:printed_calculation_processor')
yeet('ae2:printed_logic_processor')
yeet('ae2:printed_logic_processor')
yeet('ae2:logic_processor')
yeet('ae2:calculation_processor')
yeet('ae2:engineering_processor')
yeet('megacells:accumulation_processor_press')
yeet('megacells:printed_accumulation_processor')
yeet('megacells:accumulation_processor')
ServerEvents.recipes(event => {
  event.remove({ mod: 'ae2' })
  event.remove({ mod: 'expatternprovider' })
  event.remove({ mod: 'megacells' })
  event.remove({ mod: 'arseng' })
  event.remove({ mod: 'appbot' })

  //Every Recipe is Removed by default, Additions only from this point forward
  //Acceptor
  event.recipes.gtceu.assembler('ae2:acceptor_assembly')
    .itemInputs(['6x gtceu:steel_plate', '4x gtceu:lv_voltage_coil', '4x #forge:circuits/lv', 'gtceu:lv_machine_hull'])
    .itemOutputs('ae2:energy_acceptor')
    .duration(160)
    .EUt(32);
  //Controller
  event.recipes.gtceu.assembler('ae2:controller_assembly')
    .itemInputs(['8x gtceu:mana_steel_hex_wire', '4x #forge:circuits/mv', 'ae2:energy_acceptor'])
    .itemOutputs('ae2:controller')
    .duration(160)
    .EUt(32);
  //Drive Bay
  event.recipes.gtceu.assembler('ae2:drive_assembly')
    .itemInputs(['8x gtceu:steel_plate', '4x ae2:fluix_smart_cable', '2x #forge:circuits/lv', 'gtceu:steel_frame'])
    .itemOutputs('ae2:drive')
    .duration(160)
    .EUt(32);
  //Illuminated Panel
  event.recipes.gtceu.assembler('ae2:monitor_assembly')
    .itemInputs(['8x gtceu:annealed_copper_fine_wire', '3x gtceu:glass_plate', 'gtceu:computer_monitor_cover', 'gtceu:steel_plate'])
    .itemOutputs('ae2:semi_dark_monitor')
    .duration(160)
    .EUt(32);
  //Formation Core
  event.recipes.gtceu.assembler('ae2:formation_assembly')
    .itemInputs(['4x #forge:flawless_gems/quartzite', 'gtceu:computer_monitor_cover', 'gtceu:lv_robot_arm'])
    .itemOutputs('4x ae2:formation_core')
    .duration(160)
    .EUt(32);
  //Annihilation Core
  event.recipes.gtceu.assembler('ae2:annihilation_assembly')
    .itemInputs(['4x #forge:flawless_gems/certus_quartz', 'gtceu:computer_monitor_cover', 'gtceu:lv_robot_arm'])
    .itemOutputs('4x ae2:annihilation_core')
    .duration(160)
    .EUt(32);
  //Terminal Basic
  event.recipes.gtceu.assembler('ae2:terminal_assembly')
    .itemInputs(['32x gtceu:annealed_copper_fine_wire', '2x ae2:formation_core', '2x ae2:annihilation_core', 'gtceu:terminal', 'ae2:semi_dark_monitor'])
    .itemOutputs('ae2:terminal')
    .duration(320)
    .EUt(32);
  //Terminal Crafting
  event.recipes.gtceu.assembler('ae2:terminal_crafting_assembly')
    .itemInputs(['32x gtceu:electrum_fine_wire', 'craftingstation:crafting_station', 'ae2:terminal'])
    .itemOutputs('ae2:crafting_terminal')
    .duration(320)
    .EUt(32);
  //Interface 1x Craft
  event.recipes.gtceu.assembler('ae2:interface_assembly_t1')
    .itemInputs(['4x gtceu:steel_plate', '2x #forge:circuits/lv', '2x gtceu:lv_robot_arm', 'gtceu:lv_machine_hull'])
    .itemOutputs('ae2:interface')
    .duration(320)
    .EUt(32);
  //Interface 4x Craft
  event.recipes.gtceu.assembler('ae2:interface_assembly_t2')
    .itemInputs(['4x gtceu:stainless_steel_plate', '2x #forge:circuits/hv', '2x gtceu:hv_robot_arm', 'gtceu:hv_machine_hull'])
    .itemOutputs('4x ae2:interface')
    .duration(320)
    .EUt(512);
  //Interface 8x Craft
  event.recipes.gtceu.assembler('ae2:interface_assembly_t3')
    .itemInputs(['4x gtceu:tungsten_steel_plate', '2x #forge:circuits/iv', '2x gtceu:iv_robot_arm', 'gtceu:iv_machine_hull'])
    .itemOutputs('8x ae2:interface')
    .duration(320)
    .EUt(8192);
  event.recipes.gtceu.assembler('ae2:item_cell_housing')
    .itemInputs(['3x gtceu:steel_plate', '2x gtceu:tempered_glass', '2x gtceu:red_alloy_single_cable','ae2:formation_core', 'ae2:annihilation_core'])
    .inputFluids(`redstone 144`)
    .itemOutputs('ae2:item_cell_housing')
    .duration(80)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.assembler('ae2:fluid_cell_housing')
    .itemInputs(['3x gtceu:annealed_copper_plate', '2x gtceu:tempered_glass', '2x gtceu:red_alloy_single_cable','ae2:formation_core', 'ae2:annihilation_core'])
    .inputFluids(`redstone 144`)
    .itemOutputs('ae2:fluid_cell_housing')
    .duration(80)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.assembler('appbot:mana_cell_housing')
    .itemInputs(['3x gtceu:mana_steel_plate', '2x gtceu:tempered_glass', '2x gtceu:red_alloy_single_cable','ae2:formation_core', 'ae2:annihilation_core'])
    .inputFluids(`redstone 144`)
    .itemOutputs('appbot:mana_cell_housing')
    .duration(80)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.assembler('arseng:source_cell_housing')
    .itemInputs(['3x gtceu:rose_gold_plate', '2x gtceu:tempered_glass', '2x gtceu:red_alloy_single_cable','ae2:formation_core', 'ae2:annihilation_core'])
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
      .itemInputs(`32x gtceu:${fineWireMaterial}_fine_wire`, `4x #forge:circuits/${tier}`, `4x gtceu:${plateType}_plate`, 'ae2:formation_core', 'ae2:annihilation_core')
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
      .itemInputs([`gtceu:${tier}_quad_cable`, `8x gtceu:${tier}_foil`])
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