sdrp.dimension_change((event) => {
  const dimPath = event.level.dimension().location().getPath();
  event.updateSDRPState(`sdrp.${dimPath}.in`, `sdrp.${dimPath}`, "dimPath");
});
//
let cables = ['gtceu:mana_steel_single_cable', 'gtceu:mana_steel_double_cable', 'gtceu:mana_steel_quadruple_cable', 'gtceu:mana_steel_octal_cable', 'gtceu:mana_steel_hex_cable']
let wires = ['gtceu:mana_steel_single_wire', 'gtceu:mana_steel_double_wire', 'gtceu:mana_steel_quadruple_wire', 'gtceu:mana_steel_octal_wire', 'gtceu:mana_steel_hex_wire']
let echo = ['cosmiccore:echo_processor', 'cosmiccore:echo_processor_assembly', 'cosmiccore:echo_processor_supercomputer', 'cosmiccore:echo_processor_mainframe']
let optical = ['cosmiccore:optical_processor', 'cosmiccore:optical_processor_assembly', 'cosmiccore:optical_processor_supercomputer', 'cosmiccore:optical_processor_mainframe']
let cosmic = ['cosmiccore:cosmic_processor', 'cosmiccore:cosmic_processor_assembly', 'cosmiccore:cosmic_processor_supercomputer', 'cosmiccore:cosmic_processor_mainframe']
let psionic = ['cosmiccore:psionic_processor', 'cosmiccore:psionic_processor_assembly', 'cosmiccore:psionic_processor_supercomputer', 'cosmiccore:psionic_processor_mainframe']
let macroverse = ['cosmiccore:macroverse_processor', 'cosmiccore:macroverse_processor_assembly', 'cosmiccore:macroverse_processor_supercomputer', 'cosmiccore:macroverse_processor_mainframe']
ItemEvents.tooltip(event => {
  // event.add('gtceu:mana_steel_single_cable', Text.of('LV Superconductor'))
  event.addAdvanced('forbidden_arcanus:eternal_stella', (item, advanced, text) => {
    text.add(1, Text.of('DISABLED - Currently Broken with GT TOOLS').red()) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
  })
  event.addAdvanced(cables, (item, advanced, text) => {
    text.add(1, Text.of('LV Superconductor - Arcane Stabilization')) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
  })
  event.addAdvanced(wires, (item, advanced, text) => {
    text.add(1, Text.of('LV Superconductor')) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
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
  })
})