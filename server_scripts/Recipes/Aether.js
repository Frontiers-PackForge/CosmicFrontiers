ServerEvents.tags('block', event => {
    event.remove('aether:aether_portal_blocks', 'minecraft:glowstone'),
    event.add('aether:aether_portal_blocks', 'cosmiccore:plated_aerocloud')
  })
ServerEvents.recipes(event => { 
    console.log('Hello! Correcting Errored Recipes in [AETHER!')
    event.remove({ id: 'aether:skyroot_piston' })
    event.remove({ id: 'aether:gravitite_jukebox' })
    event.remove({ id: 'aether:skyroot_jukebox' })
    event.remove({ id: 'aether:skyroot_gravitite_jukebox' })
    event.remove({ id: 'aether:aether_saddle'})
    event.recipes.gtceu.assembler(`cosmiccore:plated_aerocloud_assembly`)
    .itemInputs(['4x gtceu:manasteel_plate', '4x gtceu:blue_alloy_screw', 'deep_aether:sterling_aercloud'])
    .itemOutputs('cosmiccore:plated_aerocloud')
    .duration(40)
    .EUt(GTValues.VA[GTValues.MV]);
  })