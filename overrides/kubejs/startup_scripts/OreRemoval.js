
console.info('[COSMIC MANAGER] - TEST TEST 123 WORLDGEN FILE FOR ORE REMOVALS HIT')

WorldgenEvents.remove(event => {
    event.removeOres(props => {
      props.blocks = ['create:zinc_ore','create:deepslate_zinc_ore']
    }) 
})

