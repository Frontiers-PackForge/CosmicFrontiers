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
  // event.add('gtceu:manasteel_single_cable', Text.of('LV Superconductor'))
  event.addAdvanced('forbidden_arcanus:eternal_stella', (item, advanced, text) => {
    text.add(1, Text.of('DISABLED - Currently Broken with GT TOOLS').red()) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
  })
  event.addAdvanced(cables, (item, advanced, text) => {
    text.add(1, Text.of('LV Superconductor - Arcane Stabilization')) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
  })
  //BOILER WARNING : 
  //event.addAdvanced(boilaway, (item, advanced, text) => {
  //  text.add(1, Text.of('Deprecated - Recipes will still run in Large Boilers, But come 0.6.0 the recipe map and recipes will be removed for the steam age overhaul').gray())
  //})
  //HEX CIRCUITS[, , , ]
  hv_tier.map(element => {
    event.addAdvanced(element, (item, advanced, text) => {
      text.add(1, Text.translate('cosmiccore.circuit.hex.tooltip').gray())
      text.add(2, Text.translate(voltage_series[element]).color(0x9A5CC6))  //Amethyst color, which matches the color of the Hex processor very well o(*￣▽￣*)ブ
    })
  })
  //enthelic CIRCUITS
  ev_tier.map(element => {
    event.addAdvanced(element, (item, advanced, text) => {
      text.add(1, Text.translate('cosmiccore.circuit.enthelic.tooltip').gray())
      text.add(2, Text.translate(voltage_series[element]).color(0xF38BAA))  //Pink, which matches the color of the Enthelic processor very well o(*￣▽￣*)ブ
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
      element.includes('main')?pass:text.add(2, Text.translate(voltage_series[element]))
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
    text.add(1, Text.of('Large Scale Agriculture').gray())
    text.add(2, Text.of('Perfect Overclock').white().bold())
    text.add(3, Text.of('Does not lose energy efficiency when overclocked.').darkPurple())
  })
  event.addAdvanced('gtceu:arboreal_growth_facility', (item, advanced, text) => {
    text.add(1, Text.of('Large Scale Arboriculture').gray())
    text.add(2, Text.of('Perfect Overclock').white().bold())
    text.add(3, Text.of('Does not lose energy efficiency when overclocked.').darkPurple())
  })
  event.addAdvanced('gtceu:industrial_stoneworks', (item, advanced, text) => {
    text.add(1, Text.of('Volcano in a Box').gray())
    text.add(2, Text.of('Perfect Overclock').white().bold())
    text.add(3, Text.of('Does not lose energy efficiency when overclocked.').darkPurple())
  })
  event.addAdvanced('kubejs:cosmic_meatballs', (item, advanced, text) => {
    text.add(1, Text.of('Power of the Multiverse').white().bold())
    text.add(2, Text.of('in one hearty meal.').white().bold())
    text.add(3, Text.of('May contain stellar matter').darkPurple().italic())
  })
  event.addAdvanced('botania:alfheim_portal', (item, advanced, text) => {
    text.add(1, Text.of('A dimensional bridge to another world').white().bold())
    text.add(2, Text.of('empty, silent, and void of life, hanging with a heavy smell of death.').white().bold())
    text.add(3, Text.of('No trade with the elves will be possible').darkPurple().italic())
  })
  event.addAdvanced('cosmiccore:hellfire_foundry', (item, advanced, text) => {
    text.add(1, Text.of('A crucible capable of processing ').gray())
    text.add(2, Text.of('various alchemical reactions. ').gray())
    text.add(3, [Text.of('Accepts ').white(), Text.of('One ').gold(), Text.of('Energy Input Hatch.').white()])
  })
  event.addAdvanced('cosmiccore:drygmy_grove', (item, advanced, text) => {
    text.add(1, Text.of('The Infinite Forest').white().bold())
    text.add(2, Text.of('------------------------------------------------------------').aqua())
    text.add(3, Text.of('Creates a Grove with the perfect conditions to house an army of Drygmys'))
    text.add(4, Text.of('Each Drygmy Token multiplies the recipes output with no upper limit'))
    text.add(5, Text.of('(Recipe Output * Inserted Drygmy Token)').gold())
    text.add(6, Text.of('Parallel Hatches scare away the harmony of nature, and unforms the multiblock.').red().italic())
    text.add(7, Text.of('------------------------------------------------------------').aqua())
    text.add(8, Text.of('Overclock Type : Imperfect'))
  })
  event.addAdvanced('cosmiccore:vomahine_celestial_laser_bore', (item, advanced, text) => {
    text.add(1, Text.of('Multiblock Classification: Megastructure').aqua().bold())
    text.add(2, Text.of('Stellar Grade Mining Platform').white().bold())
    text.add(3, Text.of('Selectively targets the planet below to extract a bounty of resources.'))
    if (event.isShift()) {
      text.add(4, Text.of('------------------------------------------------------------').aqua())
      text.add(5, [Text.of('Storage Cells').white(), Text.of(' dictate how much material one recipe cycle can collect.').gray()])
      text.add(6, [Text.of('Dyson Grade Solar Panels').white(), Text.of(' will reduce the total EU required to run a recipe.').gray()])
      text.add(7, [Text.of('Beam Coils').white(), Text.of(' will increase the total EU required to run but Overclock the recipe.').gray()])
      text.add(8, Text.of('------------------------------------------------------------').aqua())
      text.add(9, Text.of('Planets will collect Molten Slag, Fluids, and Ores').darkGreen())
      text.add(10, Text.of('Gas Giants will collect Gasses, and Exotic Solids').gold())
      text.add(11, Text.of('Stars and Blackholes will collect Plasma, Exotic Particles, and Rich akashic Waveforms').yellow())
      text.add(12, Text.of('------------------------------------------------------------').aqua())
      text.add(13, Text.of('EUTotal = (RecipeEU*BeamTier)/SolarTier').gold())
      text.add(14, Text.of('Multiple Bores owned by the same user in a dimension will cause ALL bores to shut down').red().italic())
      text.add(15, Text.of('------------------------------------------------------------').aqua())
      text.add(16, Text.of('Overclock Type : Exotic'))
    } else {
      text.add(4, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
  })
  event.addAdvanced('cosmiccore:stellar_iris', (item, advanced, text) => {
    text.add(1, Text.of('Embodiment of the Soul').aqua().bold())
    text.add(2, Text.of('A massive structure linking the soul to stellar bodies and unkown perpetuity.'))
    if (event.isShift()) {
      text.add(3, Text.of('------------------------------------------------------------').aqua())
      text.add(4, [Text.of('Star Ballast: ').white(), Text.of('Data Corruption Present').red()])
      text.add(5, [Text.of('Somatic Uplink: ').white(), Text.of('Required for stellar bodies to form, will prevent a supernova by shattering the soul.').gray()])
      text.add(6, [Text.of('Cosmic Weave: ').white(), Text.of('Threads Dense Stellar Matter into threads of potential.').gray()])
      text.add(7, Text.of('------------------------------------------------------------').aqua())
      text.add(8, Text.of('Stars created within the core will have stats based on the "stellar seed" used').darkGreen())
      text.add(9, Text.of('Stars will consume hydrogen, helium, nitrogen, and oxygen per tick.').gold())
      text.add(10, Text.of('Stars and Blackholes will modify production rates and unlock recipes.').yellow())
      text.add(11, Text.of('------------------------------------------------------------').aqua())
      text.add(12, Text.of('TODO ; All the Fancy Multi-recipe handler stuff/modules/etc').gold())
      text.add(13, Text.of('There seems to be more here, observe the GUI to learn more.').white())
      text.add(14, Text.of('The Iris is bound to the soul(s) of the user(or team), catastrophic shutdown will kill all bound players instantly.').red().italic())
      text.add(15, Text.of('There may only be one Stellar IRIS per team/player').red().italic())
      text.add(16, Text.of('------------------------------------------------------------').aqua())
      text.add(17, Text.of('Overclock Type : ∞'))
    } else {
      text.add(3, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
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
    text.add(1, Text.of('Through my eyes, you will see the stars').red().italic())
    text.add(2, Text.of('FAKE MACHINE - ALLOWS YOU TO VIEW VALID BLOODMAGIC METEORS.').white().bold())
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
    text.add(1, Text.of('Adaptive Insulation').green())
  })
  event.addAdvanced('ae2:condenser', (item, advanced, text) => {
    text.add(1, Text.of('Disabled: Use the GregTech based recipes!').red())
  })
  event.addAdvanced('gtceu:power_substation', (item, advanced, text) => {
    text.add(1, Text.of('DEPRECATED: Use shapeless recipe to migrate to CosmicCore version!').red())
    text.add(2, Text.of('Without it you will not be able to access wireless power! \n You have been warned!').red())
  })
  event.addAdvanced('ae2:condenser', (item, advanced, text) => {
    text.add(1, Text.of('Disabled: Use the GregTech based recipes!').red())
  })
  event.addAdvanced('bloodmagic:arc', (item, advanced, text) => {
    text.add(1, Text.of('Disabled: Use the GregTech based recipes!').red())
  })
  event.addAdvanced('malum:encyclopedia_arcana', (item, advanced, text) => {
    text.add(1, Text.of('Notice; Recipes may be incorrect, check EMI!').red())
  })
  event.addAdvanced('malum:encyclopedia_esoterica', (item, advanced, text) => {
    text.add(1, Text.of('Notice; Recipes may be incorrect, check EMI!').red())
  })
  event.addAdvanced('kubejs:prismatic_lens', (item, advanced, text) => {
    text.add(1, Text.of('Creates a laser energetic enough to cut metal').lightPurple())
  })
  event.addAdvanced('gtceu:primordial_oil', (item, advanced, text) => {
    text.add(1, Text.of('An infinitely dense blob of primal perpetuity.').lightPurple())
    text.add(2, Text.of('Tastes like peaches.').lightPurple())
  })
  event.addAdvanced('integrateddynamics:mechanical_squeezer', (item, advanced, text) => {
    text.add(1, Text.of('Energy Consumption was set to 0!').green())
    text.add(2, Text.of('Will run without power!').green())
  })
  event.addAdvanced('minecraft:nether_star', (item, advanced, text) => {
    text.add(1, Text.of('Netherstars no longer drop from withers.').red())
  })
})

ItemEvents.tooltip(event => {
  event.addAdvanced('gtceu:grand_assembly_line', (item, advanced, text) => {
    text.add(1, Text.of('Multiblock Classification: Superior Large Machine').aqua().bold())
    text.add(2, Text.of('Puts Henry Ford to shame. ').white().bold())
    text.add(3, Text.of('Assembles hardware at blinding speeds.'))
    if (event.isShift()) {
      text.add(4, Text.of('------------------------------------------------------------').aqua())
      text.add(5, [Text.of('Supports the use of').white(), Text.of(' Laser Target Hatches.').aqua()])
      text.add(6, [Text.of('Takes').gray(), Text.of(' Computation').green(), Text.of(' to run, amount of CWU/t is dictated by base recipe tier and amount of energy overclocks.').gray()])
      text.add(7, [Text.of('Accepts the use of').white(), Text.of(' Parallel Control Hatches.').gold()])
      text.add(8, Text.of('------------------------------------------------------------').aqua())
      text.add(9, Text.of('Placeholder for Computation Math Formula').gold())
      text.add(10, Text.of('CWU/t Required Displayed in machine controller').white().italic())
      text.add(11, Text.of('------------------------------------------------------------').aqua())
      text.add(12, Text.of('Overclock Type : Exotic'))
    } else {
      text.add(4, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
  })

  event.addAdvanced('gtceu:lunar_tapestry', (item, advanced, text) => {
    text.add(1, Text.of('Multiblock Classification: High Quality Lunar Sail').aqua().bold())
    text.add(2, Text.of('Collecting the tears of stars. ').white().bold())
    text.add(3, Text.of('Gathers otherworldly materials out of cosmic winds.'))
    if (event.isShift()) {
      text.add(4, Text.of('------------------------------------------------------------').aqua())
      text.add(5, [Text.of('Can not be').white(), Text.of(' Overclocked!').aqua()])
      text.add(6, [Text.of('Takes').gray(), Text.of(' Computation & EU/t').green(), Text.of(' to run.').gray()])
      text.add(7, [Text.of('Generates exotic stellar liquids depending on').white(), Text.of(' the planet').gold(), Text.of(' it is placed on.').white()])
      text.add(8, Text.of('------------------------------------------------------------').aqua())
      text.add(9, Text.of('Change Optical Targeting Circuit to increase the collectors strength').gold())
      text.add(10, Text.of('CWU/t Required is multiplied by 4 each time.').white().italic())
      text.add(11, Text.of('------------------------------------------------------------').aqua())
      text.add(12, Text.of('Overclock Type : SILENT'))
    } else {
      text.add(4, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
  })



  event.addAdvanced('cosmiccore:void_miner', (item, advanced, text) => {
    text.add(1, Text.of('Multiblock Classification: Bedrock Dredging Drill').aqua().bold())
    text.add(2, Text.of('Ores Galore!').white().bold())
    text.add(3, Text.of('Rips apart bedrock for various ore and mineral deposits.'))
    if (event.isShift()) {
      text.add(4, Text.of('------------------------------------------------------------').aqua())
      text.add(5, [Text.of('ALL EMI RECIPES USE').white(), Text.of(' XOR RECIPE LOGIC').aqua()])
      text.add(6, [Text.of('This means you will get 1 ore type, from the listed ore page per cycle.').gray()])
      text.add(7, [Text.of('Requires').white(), Text.of(' Pyroflux & Drilling Fluid').gold(), Text.of(' and be placed near the void to run.').white()])
      text.add(8, Text.of('------------------------------------------------------------').aqua())
      text.add(12, Text.of('Overclock Type : IMPERFECT SUBTICK'))
    } else {
      text.add(4, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
  })




  // Multiblock Code or Design Credits; a Loose category to give thanks to the wonderful devs making machines possible
  // Do not edit unless you are Ghostipedia or have explicit approval to do so, thank you!
  
  event.addAdvanced('cosmiccore:drone_station', (item, advanced, text) => {
    text.add(1, Text.of('Multiblock Classification: The Repair Swarm').aqua().bold())
    text.add(2, Text.of('What is all that noise!?').white().bold())
    text.add(3, Text.of('Automatically repairs multiblock damage, with Bees!'))
    if (event.isShift()) {
      text.add(4, Text.of('-------------------------------------------').aqua())
      text.add(5, [Text.of('Consumes Drones to Fix Structural Damage').white()])
      text.add(6, [Text.of('Higher tier drones grant higher range, and Plasmatic grants cleanroom status.').gray()])
      text.add(7, Text.of('-------------------------------------------').aqua())
      text.add(8, Text.of('Credits:'))
      text.add(9, Text.of('Major Code Contributors:').aqua())
      text.add(10, Text.of('JurreJelle & Kathryne').white())
      text.add(11, [Text.of('Art & UI: ').gold(), Text.of('Ghostipedia').white()])
    } else {
      text.add(4, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
  })

  event.addAdvanced('cosmiccore:honey_alveary', (item, advanced, text) => {
    text.add(1, Text.of('Multiblock Classification: The Great Hive').aqua().bold())
    text.add(2, Text.of('What is all that noise!? AGAIN!?!?!').white().bold())
    text.add(3, Text.of('Automatically take care of your bee needs!'))
    if (event.isShift()) {
      text.add(4, Text.of('-------------------------------------------').aqua())
      text.add(5, [Text.of('Consumes Nutrient Boosters to Speed Up and Multiply Production Rates!').white()])
      text.add(6, [Text.of('Overclock Nutrient reduces time between yields.').gray()])
      text.add(7, [Text.of('Production Nutrient multiplies comb yields.').gray()])
      text.add(8, Text.of('-------------------------------------------').aqua())
      text.add(9, Text.of('Credits:'))
      text.add(10, Text.of('Major Code Contributors:').aqua())
      text.add(11, Text.of('JurreJelle').white())
      text.add(12, [Text.of('Art & UI: ').gold(), Text.of('Ghostipedia').white()])
    } else {
      text.add(4, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
  })

})

ItemEvents.tooltip(event => {

  event.addAdvanced('legendarysurvivaloverhaul:purified_water_bottle', (item, advanced, text) => {
    text.add(1, Text.of('Recipes Do Not Work In Iron Furnaces').red())
  })
  //ender tanks/chests
  event.addAdvanced('endertanks:ender_tank', (item, advanced, text) => {
    if (event.isShift()) {
    text.add(2, [Text.of('Capacity: ').aqua(), Text.of('LV Field Generator, 8B Per').gray(), Text.of(' Or ').gold(), Text.of('MV Field Generator, 32B Per, Max').gray().gray(), Text.of(' 256B ').gold()])
    text.add(3, [Text.of('Pump Speed: ').aqua(), Text.of('LV Electric Piston, 1B Per, Max').gray(), Text.of(' 4B ').gold()])
    } else {
      text.add(2, [Text.of('Can be upgraded, Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
  })
  event.addAdvanced('enderchests:ender_chest', (item, advanced, text) => {
    if (event.isShift()) {
    text.add(2, [Text.of('Inventory Slots: ').aqua(), Text.of('LV Field Generator, 3 Slots Per').gray(), Text.of(' Or ').gold(), Text.of('MV Field Generator, 9 Slots Per, Max').gray(), Text.of(' 27 ').gold()])
    } else {
      text.add(2, [Text.of('Can be upgraded, Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
  })

})

ItemEvents.tooltip(event => {

  event.addAdvanced(/sophisticatedstorage:(.*)/, (item, advanced, text) => {
    text.add(1, Text.of('DEPRECATED DEPRECATED DEPRECATED').red().italic())
    text.add(2, Text.of('MOD REMOVAL IN 0.9.0').red().bold())
  })

})

  event.addAdvanced("tconstruct:luck", (item, advanced, text) => {
    text.add(1, Text.of('Fortune does not work on GT Ores').red().italic())
  })
ItemEvents.tooltip(event => {
  event.addAdvanced(/sophisticatedbackpacks:(.*)/, (item, advanced, text) => {
    text.add(1, Text.of('DEPRECATED DEPRECATED DEPRECATED').red().italic())
    text.add(2, Text.of('MOD REMOVAL IN 0.9.0').red().bold())
  })
})


ItemEvents.tooltip(event => {
  event.addAdvanced(/biomancy:(.*)/, (item, advanced, text) => {
    text.add(1, Text.of('Coming Soon - In Dev').red().italic())
  })
})

ItemEvents.tooltip(event => {
  event.addAdvanced(/embers:(.*)/, (item, advanced, text) => {
    text.add(1, Text.of('Coming Soon - In Dev').red().italic())
  })
})

ItemEvents.tooltip(event => {
  event.addAdvanced(/forestry:(.*)/, (item, advanced, text) => {
    text.add(1, Text.of('Coming Soon - In Dev').red().italic())
  })
})