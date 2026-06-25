ServerEvents.recipes(event => {
    const BUNDLES = [
        'ferosine', 'cuprosiva', 'galenite', 'landisite', 'redstona', 'lazuric', 'carbonic', 'earthen_salts',
        'pyroltic', 'quartizine', 'molybite', 'fahlorium', 'monazite_salts', 'agarlite', 'crude_radionite', 'vanachrome'
    ]

    BUNDLES.forEach(name => {
        const base = `gtceu:ore_washer/wash_${name}_crushed_ore_to_purified_ore`
        event.remove({ id: `${base}_fast` })
        event.remove({ id: base })
        event.remove({ type: 'gtceu:ore_washer', input: `cosmiccore:crushed_${name}_ore` })
    })
})
