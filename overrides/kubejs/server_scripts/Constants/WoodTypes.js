const woodTypes = [
    'ad_astra:glacian',
    'aether:skyroot',
    'architects_palette:twisted',
    'biomesoplenty:fir',
    'biomesoplenty:pine',
    'biomesoplenty:maple',
    'biomesoplenty:redwood',
    'biomesoplenty:mahogany',
    'biomesoplenty:jacaranda',
    'biomesoplenty:palm',
    'biomesoplenty:willow',
    'biomesoplenty:dead',
    'biomesoplenty:magic',
    'biomesoplenty:umbran',
    'biomesoplenty:hellbark',
    'biomesoplenty:empyreal',
    'biomeswevegone:aspen',
    'biomeswevegone:baobab',
    'biomeswevegone:blue_enchanted',
    'biomeswevegone:cika',
    'biomeswevegone:cypress',
    'biomeswevegone:ebony',
    'biomeswevegone:florus',
    'biomeswevegone:green_enchanted',
    'biomeswevegone:holly',
    'biomeswevegone:ironwood',
    'biomeswevegone:rainbow_eucalyptus',
    'biomeswevegone:sakura',
    'biomeswevegone:skyris',
    'biomeswevegone:white_mangrove',
    'biomeswevegone:witch_hazel',
    'biomeswevegone:zelkova',
    'botania:livingwood',
    'botania:dreamwood',
    'gtceu:rubber',
    'gtceu:treated_wood',
    'integrateddynamics:menril',
    'malum:runewood',
    'malum:soulwood',
    'undergarden:smogstem',
    'undergarden:wigglewood',
    'undergarden:grongle'
]

// BoP and BYG have some overlapping wood types. This is to prevent recipe ids from overwriting each other
const duplicateWoods = [
    'biomeswevegone:fir',
    'biomeswevegone:jacaranda',
    'biomeswevegone:mahogany',
    'biomeswevegone:maple',
    'biomeswevegone:palm',
    'biomeswevegone:pine',
    'biomeswevegone:redwood',
    'biomeswevegone:willow'
]

const mcWoods = [
    'minecraft:oak',
    'minecraft:spruce',
    'minecraft:birch',
    'minecraft:jungle',
    'minecraft:acacia',
    'minecraft:dark_oak',
    'minecraft:mangrove',
    'minecraft:cherry',
    'minecraft:bamboo'
]

// Woods with special logs (stems, hyphae, caps, etc.)
const specialWoods = new Map([
    ['ad_astra:aeronos', 'caps'],
    ['ad_astra:strophar', 'caps'],
    ['ars_nouveau:archwood', null],
    ['biomeswevegone:florus', 'stems'],
    ['botania:shimmerwood', null],
    ['integrateddynamics:menril', null],
    ['malum:runewood', null],
    ['malum:soulwood', null],
    ['minecraft:warped', 'stems'],
    ['minecraft:crimson', 'stems']
])