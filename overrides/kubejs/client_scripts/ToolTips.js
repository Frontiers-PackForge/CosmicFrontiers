//
let cables = ['gtceu:manasteel_single_cable', 'gtceu:manasteel_double_cable', 'gtceu:manasteel_quadruple_cable', 'gtceu:manasteel_octal_cable', 'gtceu:manasteel_hex_cable']
let wires = ['gtceu:manasteel_single_wire', 'gtceu:manasteel_double_wire', 'gtceu:manasteel_quadruple_wire', 'gtceu:manasteel_octal_wire', 'gtceu:manasteel_hex_wire']
let boilaway = ['gtceu:bronze_large_boiler', 'gtceu:steel_large_boiler', 'gtceu:titanium_large_boiler', 'gtceu:tungstensteel_large_boiler']
let circuit_series=['hex', 'enthelic', 'lucidic', 'luv', 'zpm', 'harmonic', 'optical', 'suelescent', 'akashic', 'eschaton']           //Series Name, change here!
let circuit_tier=['_processor', '_processor_assembly', '_processor_supercomputer', '_processor_mainframe']
let voltage=[
  'cosmiccore.circuit.mv_tier.tooltip', 'cosmiccore.circuit.hv_tier.tooltip', 'cosmiccore.circuit.ev_tier.tooltip', 'cosmiccore.circuit.iv_tier.tooltip', 'cosmiccore.circuit.luv_tier.tooltip',
  'cosmiccore.circuit.zpm_tier.tooltip', 'cosmiccore.circuit.uv_tier.tooltip', 'cosmiccore.circuit.uhv_tier.tooltip', 'cosmiccore.circuit.uev_tier.tooltip', 'cosmiccore.circuit.uiv_tier.tooltip',
  'cosmiccore.circuit.uxv_tier.tooltip', 'cosmiccore.circuit.opv_tier.tooltip', 'cosmiccore.circuit.max_tier.tooltip'
]
let circuits=circuit_series.map(series => circuit_tier.map(tier => 'cosmiccore:'+series+tier))
let [hv_tier, ev_tier, iv_tier, luv_tier, zpm_tier, uv_tier, uhv_tier, uev_tier, uiv_tier, uxv_tier]=circuits                         //Segmented by series
let voltage_series=[]
for (var start=0; start<voltage.length; start++)                                                                                      //Segmented by tiers
{
  for (var i=(start<3?0:start-3); i<=(start>9?9:start) ; i++)
  {
    voltage_series[circuits[i][Math.abs(i-start)]]=voltage[start];
  }
}

ItemEvents.tooltip(event => {
  event.addAdvanced('forbidden_arcanus:eternal_stella', (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.disabled.broken').red()) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
  })
  event.addAdvanced(cables, (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.cables.lv_superconductor')) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
  })
  //BOILER WARNING : 
  //event.addAdvanced(boilaway, (item, advanced, text) => {
  //  text.add(1, Text.of('Deprecated - Recipes will still run in Large Boilers, But come 0.6.0 the recipe map and recipes will be removed for the steam age overhaul').gray())
  //})
  //HEX CIRCUITS[, , , ]
  hv_tier.map(element => {
    event.addAdvanced(element, (item, advanced, text) => {
      text.add(1, Text.translate('cosmiccore.circuit.hex.tooltip').gray())
      text.add(2, Text.translate(voltage_series[element]).color(amethyst))  //Amethyst color, which matches the color of the Hex processor very well o(*￣▽￣*)ブ
    })
  })
  //enthelic CIRCUITS
  ev_tier.map(element => {
    event.addAdvanced(element, (item, advanced, text) => {
      text.add(1, Text.translate('cosmiccore.circuit.enthelic.tooltip').gray())
      text.add(2, Text.translate(voltage_series[element]).color(pink))  //Pink, which matches the color of the Enthelic processor very well o(*￣▽￣*)ブ
    })
  })
  //lucidic CIRCUITS
  iv_tier.map(element => {
    event.addAdvanced(element, (item, advanced, text) => {
      text.add(1, Text.translate('cosmiccore.circuit.lucidic.tooltip').gray())
      text.add(2, Text.translate(voltage_series[element]).yellow())
    })
  })
  //luv CIRCUITS FOR FUTURE
  luv_tier.map(element => {
    event.addAdvanced(element, (item, advanced, text) => {
      text.add(1, Text.translate('cosmiccore.circuit.luv.tooltip').gray())
      text.add(2, Text.translate(voltage_series[element]).blue())
    })
  })
  //zpm CIRCUITS FOR FUTURE
  zpm_tier.map(element => {
    event.addAdvanced(element, (item, advanced, text) => {
      text.add(1, Text.translate('cosmiccore.circuit.zpm.tooltip').gray())
      text.add(2, Text.translate(voltage_series[element]).red())
    })
  })
  //harmonic CIRCUITS
  uv_tier.map(element => {
    event.addAdvanced(element, (item, advanced, text) => {
      text.add(1, Text.translate('cosmiccore.circuit.harmonic.tooltip').gray())
      text.add(2, Text.translate(voltage_series[element]).darkAqua())
    })
  })
  //OPTICAL CIRCUITS
  uhv_tier.map(element => {
    event.addAdvanced(element, (item, advanced, text) => {
      text.add(1, Text.translate('cosmiccore.circuit.optical.tooltip').gray())
      text.add(2, Text.translate(voltage_series[element]).gold())
    })
  })
  //suelescent CIRCUITS
  uev_tier.map(element => {
    event.addAdvanced(element, (item, advanced, text) => {
      text.add(1, Text.translate('cosmiccore.circuit.suelescent.tooltip').gray())
      text.add(2, Text.translate(voltage_series[element]).darkPurple())
    })
  })
  //akashic CIRCUITS
  uiv_tier.map(element => {
    event.addAdvanced(element, (item, advanced, text) => {
      text.add(1, Text.translate('cosmiccore.circuit.akashic.tooltip').gray())
      text.add(2, Text.translate(voltage_series[element]).lightPurple())
    })
  })
  //eschaton CIRCUITS
  uxv_tier.map(element => {
    event.addAdvanced(element, (item, advanced, text) => {
      text.add(1, Text.translate('cosmiccore.circuit.eschaton.tooltip').red().bold())
      element.includes('main')?pass:text.add(2, Text.translate(voltage_series[element]).color(rainbow(4500)))  //Rainbow, which matches the color of the Enthelic processor very well o(*￣▽￣*)ブ
    })
  })

  event.addAdvanced('botania:mana_diamond', (item, advanced, text) => {
    text.add(1, Text.of('MaC₄').yellow())
  })
  event.addAdvanced('botania:mana_pearl', (item, advanced, text) => {
    text.add(1, Text.of('Ma(BeK₄N₅)').yellow())
  })
  event.addAdvanced('botania:mana_quartz', (item, advanced, text) => {
    text.add(1, Text.of('Ma(SiO₂)').yellow())
  })
  event.addAdvanced('gtceu:industrial_grade_floral_propagator', (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.floral_propagator').gray())
    text.add(2, Text.translate('frontiers.tooltip.perfect_overclock').white().bold())
    text.add(3, Text.translate('frontiers.tooltip.perfect_overclock.desc').darkPurple())
  })
  event.addAdvanced('gtceu:arboreal_growth_facility', (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.arboreal_facility').gray())
    text.add(2, Text.translate('frontiers.tooltip.perfect_overclock').white().bold())
    text.add(3, Text.translate('frontiers.tooltip.perfect_overclock.desc').darkPurple())
  })
  event.addAdvanced('gtceu:industrial_stoneworks', (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.stoneworks').gray())
    text.add(2, Text.translate('frontiers.tooltip.perfect_overclock').white().bold())
    text.add(3, Text.translate('frontiers.tooltip.perfect_overclock.desc').darkPurple())
  })
  event.addAdvanced('kubejs:cosmic_meatballs', (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.cosmic_meatballs.1').white().bold())
    text.add(2, Text.translate('frontiers.tooltip.cosmic_meatballs.2').white().bold())
    text.add(3, Text.translate('frontiers.tooltip.cosmic_meatballs.3').darkPurple().italic())
  })
  event.addAdvanced('botania:alfheim_portal', (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.alfheim_portal.1').white().bold())
    text.add(2, Text.translate('frontiers.tooltip.alfheim_portal.2').white().bold())
    text.add(3, Text.translate('frontiers.tooltip.alfheim_portal.3').darkPurple().italic())
  })
  event.addAdvanced('cosmiccore:hellfire_foundry', (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.hellfire_foundry.1').gray())
    text.add(2, Text.translate('frontiers.tooltip.hellfire_foundry.2').gray())
    text.add(3, [Text.translate('frontiers.tooltip.hellfire_foundry.3.1').white(), Text.translate('frontiers.tooltip.hellfire_foundry.3.2').gold(), Text.translate('frontiers.tooltip.hellfire_foundry.3.3').white()])
  })
  event.addAdvanced('cosmiccore:drygmy_grove', (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.drygmy_grove.1').white().bold())
    text.add(2, Text.translate('frontiers.tooltip.separator').aqua())
    text.add(3, Text.translate('frontiers.tooltip.drygmy_grove.3'))
    text.add(4, Text.translate('frontiers.tooltip.drygmy_grove.4'))
    text.add(5, Text.translate('frontiers.tooltip.drygmy_grove.5').gold())
    text.add(6, Text.translate('frontiers.tooltip.drygmy_grove.6').red().italic())
    text.add(7, Text.translate('frontiers.tooltip.separator').aqua())
    text.add(8, [Text.translate('frontiers.tooltip.overclock_type'), Text.translate('frontiers.tooltip.overclock.imperfect')])
  })
  event.addAdvanced('cosmiccore:vomahine_celestial_laser_bore', (item, advanced, text) => {
    text.add(1, [Text.translate('frontiers.tooltip.multiblock_classification').aqua().bold(), Text.translate('frontiers.tooltip.multiblock.megastructure').aqua().bold()])
    text.add(2, Text.translate('frontiers.tooltip.laser_bore.2').white().bold())
    text.add(3, Text.translate('frontiers.tooltip.laser_bore.3'))
    if (event.isShift()) {
      text.add(4, Text.translate('frontiers.tooltip.separator').aqua())
      text.add(5, [Text.translate('frontiers.tooltip.laser_bore.5.1').white(), Text.translate('frontiers.tooltip.laser_bore.5.2').gray()])
      text.add(6, [Text.translate('frontiers.tooltip.laser_bore.6.1').white(), Text.translate('frontiers.tooltip.laser_bore.6.2').gray()])
      text.add(7, [Text.translate('frontiers.tooltip.laser_bore.7.1').white(), Text.translate('frontiers.tooltip.laser_bore.7.2').gray()])
      text.add(8, Text.translate('frontiers.tooltip.separator').aqua())
      text.add(9, Text.translate('frontiers.tooltip.laser_bore.9').darkGreen())
      text.add(10, Text.translate('frontiers.tooltip.laser_bore.10').gold())
      text.add(11, Text.translate('frontiers.tooltip.laser_bore.11').yellow())
      text.add(12, Text.translate('frontiers.tooltip.separator').aqua())
      text.add(13, Text.translate('frontiers.tooltip.laser_bore.13').gold())
      text.add(14, Text.translate('frontiers.tooltip.laser_bore.14').red().italic())
      text.add(15, Text.translate('frontiers.tooltip.separator').aqua())
      text.add(16, [Text.translate('frontiers.tooltip.overclock_type'), Text.translate('frontiers.tooltip.overclock.exotic')])
    } else {
      text.add(4, [Text.translate('frontiers.tooltip.hold_shift.1').gold(), Text.translate('frontiers.tooltip.hold_shift.2').yellow(), Text.translate('frontiers.tooltip.hold_shift.3').gold()])
    }
  })
  event.addAdvanced('cosmiccore:stellar_iris', (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.multiblock.megastructure').aqua().bold())
    text.add(2, Text.translate('frontiers.tooltip.stellar_iris.2'))
    if (event.isShift()) {
      text.add(3, Text.translate('frontiers.tooltip.separator').aqua())
      text.add(4, [Text.translate('frontiers.tooltip.stellar_iris.4.1').white(), Text.translate('frontiers.tooltip.stellar_iris.4.2').red()])
      text.add(5, [Text.translate('frontiers.tooltip.stellar_iris.5.1').white(), Text.translate('frontiers.tooltip.stellar_iris.5.2').gray()])
      text.add(6, [Text.translate('frontiers.tooltip.stellar_iris.6.1').white(), Text.translate('frontiers.tooltip.stellar_iris.6.2').gray()])
      text.add(7, Text.translate('frontiers.tooltip.separator').aqua())
      text.add(8, Text.translate('frontiers.tooltip.stellar_iris.8').darkGreen())
      text.add(9, Text.translate('frontiers.tooltip.stellar_iris.9').gold())
      text.add(10, Text.translate('frontiers.tooltip.stellar_iris.10').yellow())
      text.add(11, Text.translate('frontiers.tooltip.separator').aqua())
      text.add(12, Text.translate('frontiers.tooltip.stellar_iris.12').gold())
      text.add(13, Text.translate('frontiers.tooltip.stellar_iris.13').white())
      text.add(14, Text.translate('frontiers.tooltip.stellar_iris.14').red().italic())
      text.add(15, Text.translate('frontiers.tooltip.stellar_iris.15').red().italic())
      text.add(16, Text.translate('frontiers.tooltip.separator').aqua())
      text.add(17, [Text.translate('frontiers.tooltip.overclock_type'), Text.translate('frontiers.tooltip.overclock.infinite')])
    } else {
      text.add(3, [Text.translate('frontiers.tooltip.hold_shift.1').gold(), Text.translate('frontiers.tooltip.hold_shift.2').yellow(), Text.translate('frontiers.tooltip.hold_shift.3').gold()])
    }
  })

  //subscript (copy and paste) ₂₃₄₅₆₇₈₉₀
})
ItemEvents.tooltip(event => {
  // event.addAdvanced(/embers:(.*)/, (item, advanced, text) => {
  //   text.add(1, Text.of('The power of the Overseers hinders your mind.').red().italic())
  //   text.add(2, Text.of('Mod NYI - Expect integration in future Updates.').white().bold())
  // })
  event.addAdvanced('gtceu:max_meteor_recipe_dummy', (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.meteor_dummy.1').red().italic())
    text.add(2, Text.translate('frontiers.tooltip.meteor_dummy.2').white().bold())
  })
  // event.addAdvanced(/naturesaura:(.*)/, (item, advanced, text) => {
  //   text.add(1, Text.of('The power of the Overseers hinders your mind.').red().italic())
  //   text.add(2, Text.of('Mod NYI - Expect integration in future Updates.').white().bold())
  // })
  // event.addAdvanced(/occultism:(.*)/, (item, advanced, text) => {
  //   text.add(1, Text.of('The power of the Overseers hinders your mind.').red().italic())
  //   text.add(2, Text.of('Mod NYI - Expect integration in future Updates.').white().bold())
  // })
  let quarktech = ['cosmiccore:space_advanced_quarktech_chestplate', 'gtceu:quarktech_leggings', 'gtceu:quarktech_boots', 'gtceu:quarktech_helmet', 'gtceu:quarktech_chestplate', 'gtceu:advanced_quarktech_chestplate', 'cosmiccore:space_quarktech_chestplate']
  event.addAdvanced(quarktech, (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.quarktech.adaptive_insulation').green())
  })
  event.addAdvanced('ae2:condenser', (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.disabled.gregtech_recipes').red())
  })
  event.addAdvanced('gtceu:power_substation', (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.power_substation.1').red())
    text.add(2, Text.translate('frontiers.tooltip.power_substation.2').red())
  })
  //event.addAdvanced('ae2:condenser', (item, advanced, text) => {
  //  text.add(1, Text.translate('frontiers.tooltip.disabled.gregtech_recipes').red())
  //})
  event.addAdvanced('bloodmagic:arc', (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.disabled.gregtech_recipes').red())
  })
  event.addAdvanced('malum:encyclopedia_arcana', (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.encyclopedia.warning').red())
  })
  event.addAdvanced('malum:encyclopedia_esoterica', (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.encyclopedia.warning').red())
  })
  event.addAdvanced('kubejs:prismatic_lens', (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.prismatic_lens').lightPurple())
  })
  event.addAdvanced('gtceu:primordial_oil', (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.primordial_oil.1').lightPurple())
    text.add(2, Text.translate('frontiers.tooltip.primordial_oil.2').lightPurple())
  })
  event.addAdvanced('integrateddynamics:mechanical_squeezer', (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.mechanical_squeezer.1').green())
    text.add(2, Text.translate('frontiers.tooltip.mechanical_squeezer.2').green())
  })
  event.addAdvanced('minecraft:nether_star', (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.nether_star').red())
  })
})

ItemEvents.tooltip(event => {
  event.addAdvanced('gtceu:grand_assembly_line', (item, advanced, text) => {
    text.add(1, [Text.translate('frontiers.tooltip.multiblock_classification').aqua().bold(), Text.translate('frontiers.tooltip.multiblock.superior_large_machine').aqua().bold()])
    text.add(2, Text.translate('frontiers.tooltip.assembly_line.2').white().bold())
    text.add(3, Text.translate('frontiers.tooltip.assembly_line.3'))
    if (event.isShift()) {
      text.add(4, Text.translate('frontiers.tooltip.separator').aqua())
      text.add(5, [Text.translate('frontiers.tooltip.assembly_line.5.1').white(), Text.translate('frontiers.tooltip.assembly_line.5.2').aqua()])
      text.add(6, [Text.translate('frontiers.tooltip.assembly_line.6.1').gray(), Text.translate('frontiers.tooltip.assembly_line.6.2').green(), Text.translate('frontiers.tooltip.assembly_line.6.3').gray()])
      text.add(7, [Text.translate('frontiers.tooltip.assembly_line.7.1').white(), Text.translate('frontiers.tooltip.assembly_line.7.2').gold()])
      text.add(8, Text.translate('frontiers.tooltip.separator').aqua())
      text.add(9, Text.translate('frontiers.tooltip.assembly_line.9').gold())
      text.add(10, Text.translate('frontiers.tooltip.assembly_line.10').white().italic())
      text.add(11, Text.translate('frontiers.tooltip.separator').aqua())
      text.add(12, [Text.translate('frontiers.tooltip.overclock_type'), Text.translate('frontiers.tooltip.overclock.exotic')])
    } else {
      text.add(4, [Text.translate('frontiers.tooltip.hold_shift.1').gold(), Text.translate('frontiers.tooltip.hold_shift.2').yellow(), Text.translate('frontiers.tooltip.hold_shift.3').gold()])
    }
  })

  event.addAdvanced('gtceu:lunar_tapestry', (item, advanced, text) => {
    text.add(1, [Text.translate('frontiers.tooltip.multiblock_classification').aqua().bold(), Text.translate('frontiers.tooltip.multiblock.high_quality_lunar_sail').aqua().bold()])
    text.add(2, Text.translate('frontiers.tooltip.lunar_tapestry.2').white().bold())
    text.add(3, Text.translate('frontiers.tooltip.lunar_tapestry.3'))
    if (event.isShift()) {
      text.add(4, Text.translate('frontiers.tooltip.separator').aqua())
      text.add(5, [Text.translate('frontiers.tooltip.lunar_tapestry.5.1').white(), Text.translate('frontiers.tooltip.lunar_tapestry.5.2').aqua()])
      text.add(6, [Text.translate('frontiers.tooltip.lunar_tapestry.6.1').gray(), Text.translate('frontiers.tooltip.lunar_tapestry.6.2').green(), Text.translate('frontiers.tooltip.lunar_tapestry.6.3').gray()])
      text.add(7, [Text.translate('frontiers.tooltip.lunar_tapestry.7.1').white(), Text.translate('frontiers.tooltip.lunar_tapestry.7.2').gold(), Text.translate('frontiers.tooltip.lunar_tapestry.7.3').white()])
      text.add(8, Text.translate('frontiers.tooltip.separator').aqua())
      text.add(9, Text.translate('frontiers.tooltip.lunar_tapestry.9').gold())
      text.add(10, Text.translate('frontiers.tooltip.lunar_tapestry.10').white().italic())
      text.add(11, Text.translate('frontiers.tooltip.separator').aqua())
      text.add(12, [Text.translate('frontiers.tooltip.overclock_type'), Text.translate('frontiers.tooltip.overclock.silent')])
    } else {
      text.add(4, [Text.translate('frontiers.tooltip.hold_shift.1').gold(), Text.translate('frontiers.tooltip.hold_shift.2').yellow(), Text.translate('frontiers.tooltip.hold_shift.3').gold()])
    }
  })



  event.addAdvanced('cosmiccore:void_miner', (item, advanced, text) => {
    text.add(1, [Text.translate('frontiers.tooltip.multiblock_classification').aqua().bold(), Text.translate('frontiers.tooltip.multiblock.bedrock_dredging_drill').aqua().bold()])
    text.add(2, Text.translate('frontiers.tooltip.void_miner.2').white().bold())
    text.add(3, Text.translate('frontiers.tooltip.void_miner.3'))
    if (event.isShift()) {
      text.add(4, Text.translate('frontiers.tooltip.separator').aqua())
      text.add(5, [Text.translate('frontiers.tooltip.void_miner.5.1').white(), Text.translate('frontiers.tooltip.void_miner.5.2').aqua()])
      text.add(6, [Text.translate('frontiers.tooltip.void_miner.6').gray()])
      text.add(7, [Text.translate('frontiers.tooltip.void_miner.7.1').white(), Text.translate('frontiers.tooltip.void_miner.7.2').gold(), Text.translate('frontiers.tooltip.void_miner.7.3').white()])
      text.add(8, Text.translate('frontiers.tooltip.separator').aqua())
      text.add(12, [Text.translate('frontiers.tooltip.overclock_type'), Text.translate('frontiers.tooltip.overclock.imperfect_subtick')])
    } else {
      text.add(4, [Text.translate('frontiers.tooltip.hold_shift.1').gold(), Text.translate('frontiers.tooltip.hold_shift.2').yellow(), Text.translate('frontiers.tooltip.hold_shift.3').gold()])
    }
  })




  // Multiblock Code or Design Credits; a Loose category to give thanks to the wonderful devs making machines possible
  // Do not edit unless you are Ghostipedia or have explicit approval to do so, thank you!
  
  event.addAdvanced('cosmiccore:drone_station', (item, advanced, text) => {
    text.add(1, [Text.translate('frontiers.tooltip.multiblock_classification').aqua().bold(), Text.translate('frontiers.tooltip.multiblock.repair_swarm').aqua().bold()])
    text.add(2, Text.translate('frontiers.tooltip.drone_station.2').white().bold())
    text.add(3, Text.translate('frontiers.tooltip.drone_station.3'))
    if (event.isShift()) {
      text.add(4, Text.translate('frontiers.tooltip.separator_short').aqua())
      text.add(5, [Text.translate('frontiers.tooltip.drone_station.5').white()])
      text.add(6, [Text.translate('frontiers.tooltip.drone_station.6').gray()])
      text.add(7, Text.translate('frontiers.tooltip.separator_short').aqua())
      text.add(8, Text.translate('frontiers.tooltip.credits'))
      text.add(9, Text.translate('frontiers.tooltip.credits.contributors').aqua())
      text.add(10, Text.translate('frontiers.tooltip.credits.jurre&kath').white())
      text.add(11, [Text.translate('frontiers.tooltip.credits.art_ui').gold(), Text.translate('frontiers.tooltip.credits.ghostipedia').white()])
    } else {
      text.add(4, [Text.translate('frontiers.tooltip.hold_shift.1').gold(), Text.translate('frontiers.tooltip.hold_shift.2').yellow(), Text.translate('frontiers.tooltip.hold_shift.3').gold()])
    }
  })

  event.addAdvanced('cosmiccore:honey_alveary', (item, advanced, text) => {
    text.add(1, [Text.translate('frontiers.tooltip.multiblock_classification').aqua().bold(), Text.translate('frontiers.tooltip.multiblock.great_hive').aqua().bold()])
    text.add(2, Text.translate('frontiers.tooltip.honey_alveary.2').white().bold())
    text.add(3, Text.translate('frontiers.tooltip.honey_alveary.3'))
    if (event.isShift()) {
      text.add(4, Text.translate('frontiers.tooltip.separator_short').aqua())
      text.add(5, [Text.translate('frontiers.tooltip.honey_alveary.5').white()])
      text.add(6, [Text.translate('frontiers.tooltip.honey_alveary.6').gray()])
      text.add(7, [Text.translate('frontiers.tooltip.honey_alveary.7').gray()])
      text.add(8, Text.translate('frontiers.tooltip.separator_short').aqua())
      text.add(9, Text.translate('frontiers.tooltip.credits'))
      text.add(10, Text.translate('frontiers.tooltip.credits.contributors').aqua())
      text.add(11, Text.translate('frontiers.tooltip.credits.jurre').white())
      text.add(12, [Text.translate('frontiers.tooltip.credits.art_ui').gold(), Text.translate('frontiers.tooltip.credits.ghostipedia').white()])
    } else {
      text.add(4, [Text.translate('frontiers.tooltip.hold_shift.1').gold(), Text.translate('frontiers.tooltip.hold_shift.2').yellow(), Text.translate('frontiers.tooltip.hold_shift.3').gold()])
    }
  })

})

ItemEvents.tooltip(event => {

  event.addAdvanced('legendarysurvivaloverhaul:purified_water_bottle', (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.purified_water').red())
  })
  //ender tanks/chests
  event.addAdvanced('endertanks:ender_tank', (item, advanced, text) => {
    if (event.isShift()) {
    text.add(2, [Text.translate('frontiers.tooltip.ender_tank.2.1').aqua(), Text.translate('frontiers.tooltip.ender_tank.2.2').gray(), Text.translate('frontiers.tooltip.ender_tank.2.3').gold(), Text.translate('frontiers.tooltip.ender_tank.2.4').gray(), Text.translate('frontiers.tooltip.ender_tank.2.5').gold()])
    text.add(3, [Text.translate('frontiers.tooltip.ender_tank.3.1').aqua(), Text.translate('frontiers.tooltip.ender_tank.3.2').gray(), Text.translate('frontiers.tooltip.ender_tank.3.3').gold()])
    } else {
      text.add(2, [Text.translate('frontiers.tooltip.upgradable.1').gold(), Text.translate('frontiers.tooltip.hold_shift.2').yellow(), Text.translate('frontiers.tooltip.upgradable.3').gold()])
    }
  })
  event.addAdvanced('enderchests:ender_chest', (item, advanced, text) => {
    if (event.isShift()) {
    text.add(2, [Text.translate('frontiers.tooltip.ender_chest.2.1').aqua(), Text.translate('frontiers.tooltip.ender_chest.2.2').gray(), Text.translate('frontiers.tooltip.ender_chest.2.3').gold(), Text.translate('frontiers.tooltip.ender_chest.2.4').gray(), Text.translate('frontiers.tooltip.ender_chest.2.5').gold()])
    } else {
      text.add(2, [Text.translate('frontiers.tooltip.upgradable.1').gold(), Text.translate('frontiers.tooltip.hold_shift.2').yellow(), Text.translate('frontiers.tooltip.upgradable.3').gold()])
    }
  })

})

ItemEvents.tooltip(event => {

  event.addAdvanced(/sophisticatedstorage:(.*)/, (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.deprecated.1').red().italic())
    text.add(2, Text.translate('frontiers.tooltip.deprecated.2').red().bold())
  })

  event.addAdvanced("tconstruct:luck", (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.tconstruct_luck').red().italic()) //It seems to have not taken effect
  })
})

ItemEvents.tooltip(event => {
  event.addAdvanced(/sophisticatedbackpacks:(.*)/, (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.deprecated.1').red().italic())
    text.add(2, Text.translate('frontiers.tooltip.deprecated.2').red().bold())
  })
})

ItemEvents.tooltip(event => {
  event.addAdvanced(/biomancy:(.*)/, (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.coming_soon').red().italic())
  })
})

ItemEvents.tooltip(event => {
  event.addAdvanced(/embers:(.*)/, (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.coming_soon').red().italic())
  })
})

ItemEvents.tooltip(event => {
  event.addAdvanced(/forestry:(.*)/, (item, advanced, text) => {
    text.add(1, Text.translate('frontiers.tooltip.coming_soon').red().italic())
  })
})

//Color Utils
const $Color  =Java.loadClass('java.awt.Color')
const pink    =0xF38BAA
const amethyst=0x9A5CC6

function rainbow(speed){
  let hue = Date.now() % speed / speed
  return $Color.HSBtoRGB(hue, 1, 1)
}
