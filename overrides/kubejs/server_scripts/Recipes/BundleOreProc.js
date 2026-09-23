ServerEvents.recipes(event => {
    const BUNDLES = [
        'ferosine', 'cuprosiva', 'galenite', 'landisite', 'redstona', 'lazuric', 'carbonic', 'earthen_salts',
        'pyroltic', 'quartizine', 'molybite', 'fahlorium', 'monazite_salts', 'agarlite', 'crude_radionite', 'vanachrome'
    ]

    BUNDLES.forEach(name => {
        event.forEachRecipe({ type: 'minecraft:smelting', input: `cosmiccore:raw_${name}` }, recipe => {
            const blasting = JSON.parse(recipe.json.toString())
            blasting.type = 'minecraft:blasting'
            blasting.cookingtime = Math.max(1, Math.floor((blasting.cookingtime || 200) / 2))
            event.custom(blasting).id(`frontiers:bundle_blasting/raw_${name}`)
        })

        const base = `gtceu:ore_washer/wash_${name}_crushed_ore_to_purified_ore`
        event.remove({ id: `${base}_fast` })
        event.remove({ id: base })
        event.remove({ type: 'gtceu:ore_washer', input: `cosmiccore:crushed_${name}_ore` })
    })

    const crushedOutputs = [
        ['ferosine', 'minecraft:iron_ingot'],
        ['cuprosiva', 'minecraft:copper_ingot'],
        ['galenite', 'gtceu:lead_ingot'],
        ['landisite', 'gtceu:nickel_ingot']
    ]
    crushedOutputs.forEach(([name, output]) => {
        event.blasting(output, `cosmiccore:crushed_${name}_ore`).xp(0).cookingTime(100).id(`frontiers:bundle_blasting/crushed_${name}_ore`)
    })
})
