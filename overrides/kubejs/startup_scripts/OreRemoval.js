
console.info('[COSMIC MANAGER] - TEST TEST 123 WORLDGEN FILE FOR ORE REMOVALS HIT')

WorldgenEvents.remove(event => {
    event.removeOres(props => {
      props.blocks = ['create:zinc_ore',
      'create:deepslate_zinc_ore',
      'forbidden_arcanus:deepslate_arcane_crystal_ore',
      'forbidden_arcanus:arcane_crystal_ore',
      'forbidden_arcanus:xpetrified_ore',
      'forbidden_arcanus:stella_arcanum',
      'forbidden_arcanus:runic_darkstone',
      'forbidden_arcanus:runic_deepslate',
      'forbidden_arcanus:runic_stone',
      'occultism:silver_ore_deepslate',
      'occultism:silver_ore']
    }) 
})
