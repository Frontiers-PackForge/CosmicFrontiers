sdrp.dimension_change((event) => {
  const dimPath = event.level.dimension().location().getPath();
  event.updateSDRPState(`sdrp.${dimPath}.in`, `sdrp.${dimPath}`, "dimPath");
});

let wires = ['gtceu:mana_steel_single_wire', 'gtceu:mana_steel_double_wire', 'gtceu:mana_steel_quadruple_wire', 'gtceu:mana_steel_octal_wire', 'gtceu:mana_steel_hex_wire', 'gtceu:mana_steel_single_cable', 'gtceu:mana_steel_double_cable', 'gtceu:mana_steel_quadruple_cable', 'gtceu:mana_steel_octal_cable', 'gtceu:mana_steel_hex_cable']

ItemEvents.tooltip(event => {
  // event.add('gtceu:mana_steel_single_cable', Text.of('LV Superconductor'))
  event.addAdvanced(wires, (item, advanced, text) => {
    text.add(1, Text.of('LV Superconductor')) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
  })
})