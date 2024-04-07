ServerEvents.recipes(event => { 
      
    console.log('[BLOODMAGIC.JS] - Sealing Successful')
    event.remove({ mod: 'occultism' })
  })