//
let cables = ['gtceu:manasteel_single_cable', 'gtceu:manasteel_double_cable', 'gtceu:manasteel_quadruple_cable', 'gtceu:manasteel_octal_cable', 'gtceu:manasteel_hex_cable']
let wires = ['gtceu:manasteel_single_wire', 'gtceu:manasteel_double_wire', 'gtceu:manasteel_quadruple_wire', 'gtceu:manasteel_octal_wire', 'gtceu:manasteel_hex_wire']
let echo = ['cosmiccore:echo_processor', 'cosmiccore:echo_processor_assembly', 'cosmiccore:echo_processor_supercomputer', 'cosmiccore:echo_processor_mainframe']
let optical = ['cosmiccore:optical_processor', 'cosmiccore:optical_processor_assembly', 'cosmiccore:optical_processor_supercomputer', 'cosmiccore:optical_processor_mainframe']
let cosmic = ['cosmiccore:cosmic_processor', 'cosmiccore:cosmic_processor_assembly', 'cosmiccore:cosmic_processor_supercomputer', 'cosmiccore:cosmic_processor_mainframe']
let psionic = ['cosmiccore:psionic_processor', 'cosmiccore:psionic_processor_assembly', 'cosmiccore:psionic_processor_supercomputer', 'cosmiccore:psionic_processor_mainframe']
let macroverse = ['cosmiccore:macroverse_processor', 'cosmiccore:macroverse_processor_assembly', 'cosmiccore:macroverse_processor_supercomputer', 'cosmiccore:macroverse_processor_mainframe']
let boilaway = ['gtceu:bronze_large_boiler', 'gtceu:steel_large_boiler', 'gtceu:titanium_large_boiler', 'gtceu:tungstensteel_large_boiler']
ItemEvents.tooltip(event => {
  // event.add('gtceu:manasteel_single_cable', Text.of('LV Superconductor'))
  event.addAdvanced('forbidden_arcanus:eternal_stella', (item, advanced, text) => {
    text.add(1, Text.of('DISABLED - Currently Broken with GT TOOLS').red()) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
  })
  event.addAdvanced(cables, (item, advanced, text) => {
    text.add(1, Text.of('LV Superconductor - Arcane Stabilization')) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
  })
  //BOILER WARNING : 
  event.addAdvanced(boilaway, (item, advanced, text) => {
    text.add(1, Text.of('Deprecated - Recipes will still run in Large Boilers, But come 0.6.0 the recipe map and recipes will be removed for the steam age overhaul').gray())
  })
  //ECHO CIRCUITS
  event.addAdvanced(echo, (item, advanced, text) => {
    text.add(1, Text.of('Circuits Resonating with the World').gray())
  })
  event.addAdvanced('cosmiccore:echo_processor', (item, advanced, text) => {
    text.add(2, Text.of('ZPM-Tier Circuit').darkAqua())
  })
  event.addAdvanced('cosmiccore:echo_processor_assembly', (item, advanced, text) => {
    text.add(2, Text.of('UV-Tier Circuit').darkAqua())
  })
  event.addAdvanced('cosmiccore:echo_processor_supercomputer', (item, advanced, text) => {
    text.add(2, Text.of('UHV-Tier Circuit').darkAqua())
  })
  event.addAdvanced('cosmiccore:echo_processor_mainframe', (item, advanced, text) => {
    text.add(2, Text.of('UEV-Tier Circuit').darkAqua())
  })
  //OPTICAL CIRCUITS
  event.addAdvanced(optical, (item, advanced, text) => {
    text.add(1, Text.of('Lightspeed Computation').gray())
  })
  event.addAdvanced('cosmiccore:optical_processor', (item, advanced, text) => {
    text.add(2, Text.of('UV-Tier Circuit').gold())
  })
  event.addAdvanced('cosmiccore:optical_processor_assembly', (item, advanced, text) => {
    text.add(2, Text.of('UHV-Tier Circuit').gold())
  })
  event.addAdvanced('cosmiccore:optical_processor_supercomputer', (item, advanced, text) => {
    text.add(2, Text.of('UEV-Tier Circuit').gold())
  })
  event.addAdvanced('cosmiccore:optical_processor_mainframe', (item, advanced, text) => {
    text.add(2, Text.of('UIV-Tier Circuit').gold())
  })
  //COSMIC CIRCUITS
  event.addAdvanced(cosmic, (item, advanced, text) => {
    text.add(1, Text.of('Planck Computation').gray())
  })
  event.addAdvanced('cosmiccore:cosmic_processor', (item, advanced, text) => {
    text.add(2, Text.of('UHV-Tier Circuit').darkPurple())
  })
  event.addAdvanced('cosmiccore:cosmic_processor_assembly', (item, advanced, text) => {
    text.add(2, Text.of('UEV-Tier Circuit').darkPurple())
  })
  event.addAdvanced('cosmiccore:cosmic_processor_supercomputer', (item, advanced, text) => {
    text.add(2, Text.of('UIV-Tier Circuit').darkPurple())
  })
  event.addAdvanced('cosmiccore:cosmic_processor_mainframe', (item, advanced, text) => {
    text.add(2, Text.of('UXV-Tier Circuit').darkPurple())
  })
  //PSIONIC CIRCUITS
  event.addAdvanced(psionic, (item, advanced, text) => {
    text.add(1, Text.of('Perfected Bioresonance Calculations').gray())
  })
  event.addAdvanced('cosmiccore:psionic_processor', (item, advanced, text) => {
    text.add(2, Text.of('UEV-Tier Circuit').lightPurple())
  })
  event.addAdvanced('cosmiccore:psionic_processor_assembly', (item, advanced, text) => {
    text.add(2, Text.of('UIV-Tier Circuit').lightPurple())
  })
  event.addAdvanced('cosmiccore:psionic_processor_supercomputer', (item, advanced, text) => {
    text.add(2, Text.of('UXV-Tier Circuit').lightPurple())
  })
  event.addAdvanced('cosmiccore:psionic_processor_mainframe', (item, advanced, text) => {
    text.add(2, Text.of('OPV-Tier Circuit').lightPurple())
  })
  //MACROVERSE CIRCUITS
  event.addAdvanced(macroverse, (item, advanced, text) => {
    text.add(1, Text.of('The Universe in the Palm of Your Hands').red().bold())
  })
  event.addAdvanced('cosmiccore:macroverse_processor', (item, advanced, text) => {
    text.add(2, Text.of('UIV-Tier Circuit'))
  })
  event.addAdvanced('cosmiccore:macroverse_processor_assembly', (item, advanced, text) => {
    text.add(2, Text.of('UXV-Tier Circuit'))
  })
  event.addAdvanced('cosmiccore:macroverse_processor_supercomputer', (item, advanced, text) => {
    text.add(2, Text.of('OPV-Tier Circuit'))
  })
  event.addAdvanced('cosmiccore:macroverse_processor_mainframe', (item, advanced, text) => {
    text.add(2, Text.of('MAX-Tier Circuit'))
    text.add(3, Text.of('Can run Minecraft without lagging, satisfactory!').gray())
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
      text.add(11, Text.of('Stars and Blackholes will collect Plasma, Exotic Particles, and Rich Psionic Waveforms').yellow())
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
  // event.addAdvanced('botania:gaia_ingot', (item, advanced, text) => {
  //   text.add(1, Text.of('Disabled: T2 Gaia and Ingot Recipe for Summon will be added when it is time to unlock them!').red())
  // })
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
})