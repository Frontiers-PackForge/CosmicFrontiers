ServerEvents.recipes(event => {

  console.log('[BLOODMAGIC.JS] - Sealing Successful')
  event.remove({ not: { type: 'bloodmagic:meteor' }, mod: 'bloodmagic' })


  event.recipes.bloodmagic.altar('cosmiccore:trinavine_dust', 'gtceu:trinium_dust').drainRate(50).consumptionRate(25).altarSyphon(2500)
  event.recipes.bloodmagic.altar('bloodmagic:blankslate', 'gtceu:carbon_fiber_plate').drainRate(50).consumptionRate(25).altarSyphon(1000)

  event.recipes.gtceu.compressor('slate_to_rune')
    .itemInputs('9x bloodmagic:blankslate')
    .itemOutputs('bloodmagic:blankrune')
    .duration(240)
    .EUt(GTValues.VA[GTValues.IV]);
  event.shapeless('bloodmagic:sacrificialdagger', [
    'gtceu:tungsten_steel_knife'
  ])
})