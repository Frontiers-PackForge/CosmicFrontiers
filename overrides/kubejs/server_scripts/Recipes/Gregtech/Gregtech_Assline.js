ServerEvents.recipes(event => {
  event.recipes.gtceu.assembly_line('luv_hull_assline')
    .itemInputs(['gtceu:iridium_frame', '16x gtceu:rhodium_plated_palladium_plate', '8x gtceu:double_prismatic_tungstensteel_plate', '16x gtceu:osmiridium_screw', 'gtceu:advanced_integrated_circuit', '2x gtceu:niobium_titanium_quadruple_cable'])
    .itemOutputs('gtceu:luv_machine_hull')
    .inputFluids(
      Fluid.of('gtceu:prisma', 576),
      Fluid.of('gtceu:silicone_rubber', 1152),
      Fluid.of('gtceu:styrene_butadiene_rubber', 1152),
      Fluid.of('gtceu:soldering_alloy', 1152),
    )
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:iv_machine_hull')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(300)
    .EUt(GTValues.VA[GTValues.LuV])
  event.recipes.gtceu.assembly_line('luv_hull_assline_casing')
    .itemInputs(['gtceu:luv_machine_casing', '8x gtceu:rhodium_plated_palladium_plate', '4x gtceu:double_prismatic_tungstensteel_plate', '8x gtceu:osmiridium_screw', 'gtceu:advanced_integrated_circuit', '2x gtceu:niobium_titanium_quadruple_cable'])
    .itemOutputs('gtceu:luv_machine_hull')
    .inputFluids(
      Fluid.of('gtceu:prisma', 576),
      Fluid.of('gtceu:silicone_rubber', 1152),
      Fluid.of('gtceu:styrene_butadiene_rubber', 1152),
      Fluid.of('gtceu:soldering_alloy', 1152),
    )
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:iv_machine_hull')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(300)
    .EUt(GTValues.VA[GTValues.LuV])

  event.recipes.gtceu.assembly_line('the_meatball')
    .itemInputs(['64x cosmiccore:macroverse_processor_mainframe','64x cosmiccore:macroverse_processor_mainframe','64x cosmiccore:macroverse_processor_mainframe','64x cosmiccore:macroverse_processor_mainframe','64x cosmiccore:macroverse_processor_mainframe','64x cosmiccore:macroverse_processor_mainframe','64x cosmiccore:macroverse_processor_mainframe','64x cosmiccore:macroverse_processor_mainframe','64x cosmiccore:macroverse_processor_mainframe','64x cosmiccore:macroverse_processor_mainframe','64x cosmiccore:macroverse_processor_mainframe','64x cosmiccore:macroverse_processor_mainframe','64x cosmiccore:macroverse_processor_mainframe','64x cosmiccore:macroverse_processor_mainframe','64x cosmiccore:macroverse_processor_mainframe','64x cosmiccore:macroverse_processor_mainframe'])
    .itemOutputs('kubejs:cosmic_meatballs')
    .inputFluids(
      Fluid.of('gtceu:prisma', 100000000),
      Fluid.of('gtceu:uu_matter', 100000000),
      Fluid.of('gtceu:neutronium', 100000000),
      Fluid.of('gtceu:virtue_meld', 1),
    )
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('cosmiccore:macroverse_processor_mainframe')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(99999999)
    .EUt(GTValues.VA[GTValues.MAX])

})