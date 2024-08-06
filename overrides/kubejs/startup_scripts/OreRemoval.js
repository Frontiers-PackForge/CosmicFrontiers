
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
      'occultism:silver_ore',
      'evilcraft:dark_ore',
      'evilcraft:dark_ore_deepslate',
      'embers:lead_ore',
      'embers:deepslate_lead_ore',
      'embers:silver_ore',
      'embers:deepslate_silver_ore',
      'undergarden:depthrock_coal_ore',
      'undergarden:shiverstone_coal_ore',
      'undergarden:depthrock_iron_ore',
      'undergarden:shiverstone_iron_ore',
      'undergarden:depthrock_gold_ore',
      'undergarden:depthrock_diamond_ore',
      'undergarden:shiverstone_diamond_ore',
      'undergarden:depthrock_cloggrum_ore',
      'undergarden:shiverstone_cloggrum_ore',
      'undergarden:shiverstone_froststeel_ore',
      'undergarden:depthrock_utherium_ore',
      'undergarden:shiverstone_utherium_ore',
      'undergarden:depthrock_regalium_ore',
      'undergarden:shiverstone_regalium_ore',
      "ad_astra:mars_diamond_ore",
      "ad_astra:mars_ice_shard_ore",
      "ad_astra:mars_iron_ore",
      "ad_astra:mars_ostrum_ore",
      "draconicevolution:overworld_draconium_ore",
      "draconicevolution:deepslate_draconium_ore",
      "draconicevolution:nether_draconium_ore",
      "draconicevolution:end_draconium_ore"
    ]
  })
  event.removeFeatureById('raw_generation', [
    //FOR SOME REASON ADASTRA GENERATES ORES AT THIS GENERATION STEP      
    'ad_astra:moon_iron_ore',
    'ad_astra:deepslate_desh_ore',
    'ad_astra:moon_desh_ore',
    'ad_astra:moon_cheese_ore',
    'ad_astra:moon_ice_shard_ore',
    "ad_astra:mars_diamond_ore",
    "ad_astra:mars_ice_shard_ore",
    "ad_astra:mars_iron_ore",
    "ad_astra:mars_ostrum_ore"
  ])
  event.removeFeatureById('underground_ores', [
    //FOR SOME REASON ADASTRA GENERATES ORES AT THIS GENERATION STEP      
    'aether:gravitite_ore',
    'aether:gravitite_ore_buried',
    'aether:ambrosium_ore',
    'aether:zanite_ore',
    'deep_aether:skyjade_ore',
    'undergarden:depthrock_coal_ore',
    'undergarden:shiverstone_coal_ore',
    'undergarden:depthrock_iron_ore',
    'undergarden:shiverstone_iron_ore',
    'undergarden:depthrock_gold_ore',
    'undergarden:depthrock_diamond_ore',
    'undergarden:shiverstone_diamond_ore',
    'undergarden:depthrock_cloggrum_ore',
    'undergarden:shiverstone_cloggrum_ore',
    'undergarden:shiverstone_froststeel_ore',
    'undergarden:depthrock_utherium_ore',
    'undergarden:shiverstone_utherium_ore',
    'undergarden:depthrock_regalium_ore',
    'undergarden:shiverstone_regalium_ore',
    'ad_astra:moon_iron_ore',
    'ad_astra:deepslate_desh_ore',
    'ad_astra:moon_desh_ore',
    'ad_astra:moon_cheese_ore',
    'ad_astra:moon_ice_shard_ore',
    "ad_astra:mars_diamond_ore",
    "ad_astra:mars_ice_shard_ore",
    "ad_astra:mars_iron_ore",
    "ad_astra:mars_ostrum_ore"
  ])
})

