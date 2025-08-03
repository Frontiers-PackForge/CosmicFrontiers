ServerEvents.recipes(event => { 
      
    console.log('[NATURESAURA.JS] - Sealing Successful')
    event.remove({ mod: 'naturesaura' })
  })