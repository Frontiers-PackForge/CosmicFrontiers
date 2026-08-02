ServerEvents.recipes(event => {
    const materials = [
        { name: 'fluix', input: 'gtceu:fluix_gem' },
        { name: 'zanite', input: 'aether:zanite_gemstone' },
        { name: 'ambrosium', input: 'aether:ambrosium_shard' },
        { name: 'cosmolite', input: 'gtceu:cosmolite_gem' },
        { name: 'neutronium_crystals', input: 'gtceu:neutronium_crystals_gem' }
    ]

    const explosives = [
        { name: 'powder_barrel', input: '8x gtceu:powderbarrel' },
        { name: 'tnt', input: '4x minecraft:tnt' },
        { name: 'dynamite', input: '2x gtceu:dynamite' },
        { name: 'industrial_tnt', input: 'gtceu:industrial_tnt' }
    ]

    materials.forEach(material => {
        explosives.forEach(explosive => {
            event.recipes.gtceu.implosion_compressor(
                `frontiers:implosion/gem_quality/gtceu/${material.name}/${explosive.name}`
            )
                .itemInputs(`4x ${material.input}`, explosive.input)
                .itemOutputs(`gtceu:flawless_${material.name}_gem`)
                .duration(10)
                .EUt(GTValues.VA[GTValues.LV], 1)
        })
    })
})
