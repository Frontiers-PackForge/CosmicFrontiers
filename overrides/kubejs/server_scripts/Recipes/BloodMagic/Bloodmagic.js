ServerEvents.recipes(event => {

  console.log('[BLOODMAGIC.JS] - Rewriting History')
  // event.remove({ not: { type: 'bloodmagic:meteor' }, mod: 'bloodmagic' })
  event.remove({ type: 'bloodmagic:arc' , mod: 'bloodmagic' })
  event.remove({ type: 'bloodmagic:arc/furnace' , mod: 'bloodmagic' })
  // event.remove({ type: 'minecraft:smelting' , mod: 'bloodmagic' })
  event.remove({id : 'bloodmagic:blood_altar'})
  event.remove({id : 'bloodmagic:altar/slate'})
  event.remove({id : 'bloodmagic:array/spike'})
  event.remove({id : 'bloodmagic:array/night'})
  event.remove({id : 'bloodmagic:array/bounce'})
  event.remove({id : 'bloodmagic:array/updraft'})
  event.remove({id : 'bloodmagic:array/day'})
  event.remove({id : 'bloodmagic:array/movement'})
  event.remove({id : 'bloodmagic:alchemytable/gold_ore_from_gilded'})
  event.remove({id : 'bloodmagic:alchemytable/corrupted_coal'})
  event.remove({id : 'bloodmagic:alchemytable/sand_coal'})
  event.remove({id : 'bloodmagic:alchemytable/corrupted_gold'})
  event.remove({id : 'bloodmagic:alchemytable/corrupted_copper'})
  event.remove({id : 'bloodmagic:alchemytable/sand_iron'})
  event.remove({id : 'bloodmagic:alchemytable/gunpowder'})
  event.remove({id : 'bloodmagic:alchemytable/clay_from_sand'})
  event.remove({id : 'bloodmagic:alchemytable/string'})
  event.remove({id : 'bloodmagic:alchemytable/sulfur_from_sigil'})
  event.remove({id : 'bloodmagic:alchemytable/saltpeter'})
  event.remove({id : 'bloodmagic:alchemytable/saltpeter'})
  event.remove({id : 'bloodmagic:alchemytable/corrupted_iron'})
  event.remove({id : 'bloodmagic:alchemytable/sulfur_from_lava'})
  event.remove({id : 'bloodmagic:altar/reinforcedslate'})
  event.remove({id : 'bloodmagic:ritual_stone_blank'})
  event.remove({id : 'bloodmagic:altar/daggerofsacrifice'})
  event.remove({id : 'bloodmagic:alchemy_table'})
  event.remove({id : 'bloodmagic:sacrificial_dagger'})
  event.remove({id : 'bloodmagic:altar/apprenticebloodorb'})
  event.remove({id : 'bloodmagic:alchemytable/reagent_binding'})

  event.recipes.bloodmagic.altar('cosmiccore:trinavine_dust', 'gtceu:trinium_dust').drainRate(50).consumptionRate(25).altarSyphon(2500)
  event.recipes.bloodmagic.altar('bloodmagic:blankslate', 'gtceu:carbon_fiber_plate').drainRate(50).consumptionRate(25).altarSyphon(1000)
  event.recipes.bloodmagic.altar('bloodmagic:daggerofsacrifice', 'gtceu:nano_saber').drainRate(50).consumptionRate(25).altarSyphon(2000)

  //T2 Orb
  event.recipes.bloodmagic.altar('bloodmagic:daggerofsacrifice', 'gtceu:nano_saber').upgradeLevel(2).drainRate(50).consumptionRate(25).altarSyphon(10000)
  
  
  event.recipes.gtceu.compressor('slate_to_rune')
    .itemInputs('9x bloodmagic:blankslate')
    .itemOutputs('bloodmagic:blankrune')
    .duration(240)
    .EUt(GTValues.VA[GTValues.IV]);
  event.recipes.gtceu.mana_engraver('altar_engraver')
    .itemInputs(['gtceu:iv_chemical_bath', 'botania:fabulous_pool', '2x gtceu:iv_electric_pump', '16x gtceu:stone_plate', 'botania:rune_spring', 'botania:rune_summer', 'botania:rune_autumn', 'botania:rune_winter', 'botania:rune_lust', 'botania:rune_gluttony', 'botania:rune_greed', 'botania:rune_sloth', 'botania:rune_wrath', 'botania:rune_envy', 'botania:rune_pride'])
    .itemOutputs('bloodmagic:altar')
    .duration(240)
    .EUt(GTValues.VA[GTValues.IV]);

  event.shapeless('bloodmagic:sacrificialdagger', [
    'gtceu:tungsten_steel_knife'
  ])
})