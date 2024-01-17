ServerEvents.tags('block', event => {
    event.remove('aether:aether_portal_blocks', 'minecraft:glowstone'),
    event.add('aether:aether_portal_blocks', 'cosmiccore:plated_aerocloud')
  })
ServerEvents.recipes(event => { 
    console.log('Hello! Correcting Errored Recipes in [AETHER!')
    event.remove({ id: 'aether:skyroot_piston' })
    
  })