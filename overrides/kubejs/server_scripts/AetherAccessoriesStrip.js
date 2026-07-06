ServerEvents.tags('item', event => {
    event.removeAll('aether:accessories_gloves')
    event.removeAll('aether:accessories_rings')
    event.removeAll('aether:accessories_pendants')
    event.removeAll('aether:accessories_capes')
    event.removeAll('aether:accessories_miscellaneous')
    event.removeAll('aether:accessories_shields')
    event.removeAll('aether:accessories')
    event.add('minecraft:enchantable/durability', [
        'aether:leather_gloves',
        'aether:chainmail_gloves',
        'aether:iron_gloves',
        'aether:golden_gloves',
        'aether:diamond_gloves',
        'aether:netherite_gloves',
        'aether:zanite_gloves',
        'aether:gravitite_gloves',
        'aether:neptune_gloves',
        'aether:phoenix_gloves',
        'aether:obsidian_gloves',
        'aether:valkyrie_gloves'
    ])
})
