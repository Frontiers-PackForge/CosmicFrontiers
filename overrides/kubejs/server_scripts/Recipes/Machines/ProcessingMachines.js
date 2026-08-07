ServerEvents.recipes(event => {
    const machines = [
        { tier: 'lv', cable: 'tin', plate: 'steel', glass: 'tempered_glass', laminatorSpring: 'tin', dehydratorSpring: 'copper' },
        { tier: 'mv', cable: 'copper', plate: 'aluminium', glass: 'tempered_glass', laminatorSpring: 'copper', dehydratorSpring: 'cupronickel' },
        { tier: 'hv', cable: 'gold', plate: 'stainless_steel', glass: 'tempered_glass', laminatorSpring: 'gold', dehydratorSpring: 'kanthal' },
        { tier: 'ev', cable: 'aluminium', plate: 'titanium', glass: 'tempered_glass', laminatorSpring: 'aluminium', dehydratorSpring: 'nichrome' },
        { tier: 'iv', cable: 'platinum', plate: 'tungsten_steel', glass: 'laminated_glass', laminatorSpring: 'hsla_steel', dehydratorSpring: 'tungsten_steel' },
        { tier: 'luv', cable: 'niobium_titanium', plate: 'rhodium_plated_palladium', glass: 'laminated_glass', laminatorSpring: 'niobium_titanium', dehydratorSpring: 'hssg' },
        { tier: 'zpm', cable: 'vanadium_gallium', plate: 'naquadah_alloy', glass: 'fusion_glass', laminatorSpring: 'vanadium_gallium', dehydratorSpring: 'naquadah' },
        { tier: 'uv', cable: 'yttrium_barium_cuprate', plate: 'darmstadtium', glass: 'fusion_glass', laminatorSpring: 'yttrium_barium_cuprate', dehydratorSpring: 'naquadah_alloy' }
    ]

    machines.forEach(machine => {
        if (machine.tier !== 'lv') {
            event.shaped(`cosmiccore:${machine.tier}_crystallizer`, [
                'ABA',
                'CDC',
                'EFE'
            ], {
                A: `#gtceu:circuits/${machine.tier}`,
                B: `gtceu:${machine.glass}`,
                C: `gtceu:${machine.plate}_plate`,
                D: `gtceu:${machine.tier}_hermetic_casing`,
                E: `gtceu:${machine.cable}_single_cable`,
                F: `gtceu:${machine.tier}_machine_hull`
            })
        }

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

        event.shaped(`cosmiccore:${machine.tier}_vacuum_bubbler`, [
            'ABA',
            'CDC',
            'EFE'
        ], {
            A: `gtceu:${machine.tier}_electric_pump`,
            B: `gtceu:${machine.tier}_voltage_coil`,
            C: 'gtceu:double_steel_plate',
            D: `gtceu:${machine.tier}_machine_hull`,
            E: `#gtceu:circuits/${machine.tier}`,
            F: 'minecraft:glass'
        }).id(`frontiers:machines/${machine.tier}_vacuum_bubbler`)

        event.shaped(`cosmiccore:${machine.tier}_mana_leaching_tub`, [
            'ABA',
            'CDC',
            'EAE'
        ], {
            A: `#gtceu:circuits/${machine.tier}`,
            B: 'minecraft:cauldron',
            C: 'cosmiccore:sturdy_plates',
            D: `gtceu:${machine.tier}_machine_hull`,
            E: `gtceu:${machine.cable}_single_cable`
        }).id(`frontiers:machines/${machine.tier}_mana_leaching_tub`)
    })
})
