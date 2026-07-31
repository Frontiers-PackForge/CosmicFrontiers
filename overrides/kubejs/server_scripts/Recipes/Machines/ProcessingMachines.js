ServerEvents.recipes(event => {
    const machines = [
        { tier: 'lv', cable: 'tin', laminatorSpring: 'tin', dehydratorSpring: 'copper' },
        { tier: 'mv', cable: 'copper', laminatorSpring: 'copper', dehydratorSpring: 'cupronickel' },
        { tier: 'hv', cable: 'gold', laminatorSpring: 'gold', dehydratorSpring: 'kanthal' },
        { tier: 'ev', cable: 'aluminium', laminatorSpring: 'aluminium', dehydratorSpring: 'nichrome' },
        { tier: 'iv', cable: 'platinum', laminatorSpring: 'hsla_steel', dehydratorSpring: 'tungsten_steel' },
        { tier: 'luv', cable: 'niobium_titanium', laminatorSpring: 'niobium_titanium', dehydratorSpring: 'hssg' },
        { tier: 'zpm', cable: 'vanadium_gallium', laminatorSpring: 'vanadium_gallium', dehydratorSpring: 'naquadah' },
        { tier: 'uv', cable: 'yttrium_barium_cuprate', laminatorSpring: 'yttrium_barium_cuprate', dehydratorSpring: 'naquadah_alloy' }
    ]

    machines.forEach(machine => {
        event.shaped(`cosmiccore:${machine.tier}_laminator`, [
            'CAC',
            'BHB',
            'ZPZ'
        ], {
            A: `gtceu:${machine.laminatorSpring}_spring`,
            B: `gtceu:${machine.tier}_conveyor_module`,
            C: `#gtceu:circuits/${machine.tier}`,
            H: `gtceu:${machine.tier}_machine_hull`,
            Z: `gtceu:${machine.cable}_single_cable`,
            P: `gtceu:${machine.tier}_electric_pump`
        }).id(`frontiers:machines/${machine.tier}_laminator`)

        event.shaped(`cosmiccore:${machine.tier}_chemical_dehydrator`, [
            'CAC',
            'BHB',
            'ZPZ'
        ], {
            A: `gtceu:${machine.dehydratorSpring}_spring`,
            B: `gtceu:${machine.tier}_electric_motor`,
            C: `#gtceu:circuits/${machine.tier}`,
            H: `gtceu:${machine.tier}_machine_hull`,
            Z: `gtceu:${machine.cable}_single_cable`,
            P: `gtceu:${machine.tier}_electric_pump`
        }).id(`frontiers:machines/${machine.tier}_chemical_dehydrator`)
    })
})
