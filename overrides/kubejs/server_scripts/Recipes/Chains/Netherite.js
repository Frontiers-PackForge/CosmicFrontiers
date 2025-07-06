ServerEvents.recipes(event => {
  event.remove({ output: 'minecraft:netherite_scrap' })
  event.remove({ id: 'minecraft:netherite_ingot' })
  event.recipes.gtceu.macerator('macerate_ancient_debris')
    .itemInputs('minecraft:ancient_debris')
    .itemOutputs('gtceu:ancient_debris_dust')
    .duration(400)
    .EUt(GTValues.VA[GTValues.ULV]);
  event.recipes.gtceu.chemical_bath('dissolve_ancient_debris_dust')
    .itemInputs('gtceu:ancient_debris_dust')
    .inputFluids('minecraft:lava 200')
    .outputFluids('gtceu:impure_ancient_debris_solution 200')
    .duration(200)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.mixer('precipitate_netherite_scrap')
    .inputFluids('gtceu:impure_ancient_debris_solution 200')
    .inputFluids('gtceu:nether_sediment_sludge 100')
    .outputFluids('gtceu:netherite_lava_mixture 300')
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.centrifuge('netherite_scrap_seperation')
    .inputFluids('gtceu:netherite_lava_mixture 300')
    .itemOutputs(['2x minecraft:netherite_scrap', '1x gtceu:obsidian_dust'])
    .chancedOutput('gtceu:nether_quartz_dust', 2000, 0)
    .chancedOutput('minecraft:glowstone_dust', 1500, 0)
    .chancedFluidOutput('gtceu:gold 144', 3500, 0)
    .duration(400)
    .EUt(GTValues.VA[GTValues.LV]);

  event.recipes.gtceu.electric_blast_furnace('netherite_scrap_heating')
    .itemInputs(['2x minecraft:netherite_scrap', '1x gtceu:manasteel_dust'])
    .inputFluids('gtceu:nether_air 1000')
    .itemOutputs('gtceu:inactive_netherite_ingot')
    .blastFurnaceTemp(2000)
    .duration(600)
    .EUt(GTValues.VA[GTValues.HV]);
  event.recipes.gtceu.fluid_solidifier('netherite_activation')
    .itemInputs('gtceu:inactive_netherite_ingot')
    .inputFluids('gtceu:rose_gold 288')
    .itemOutputs('minecraft:netherite_ingot')
    .duration(100)
    .EUt(GTValues.VA[GTValues.MV]);
});

/* Netherite Scrap
1x Ancient Debris -> (Macerator) 1x Ancient Debris Dust
1x Ancient Debris Dust + 200mb Lava -> (Chemical Bath) 200mb Impure Ancient Debris Solution
200mb Molten Ancient Debris + 100mb Nether Sediment Sludge -> (Mixer) 300mb Netherite Lava Mixture
300mb Netherite Lava Mixture -> (Centrifuge) 2x Netherite Scrap + 1x Obsidian Dust + 20% 1x Nether Quartz Dust + 20% 1x Glowstone Dust + 20% 144mb Molten Gold
*/

/* Netherite Ingot
2x Netherite Scrap + 1x Manasteel Dust + 1000mb Nether Air -> (Electric Blast Furnace) 1x Inactive Netherite Ingot
1x Inactive Netherite Ingot + 288mb Rose Gold -> (Fluid Solidifier) 1x Netherite Ingot
*/