ServerEvents.recipes(event => {
    let colors = [
        'white',
        'orange',
        'magenta',
        'light_blue',
        'yellow',
        'lime',
        'pink',
        'light_gray',
        'gray',
        'cyan',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black'
    ]

    colors.forEach(color => {
        event.remove({id: `elevatorid:elevator_${color}`})
        event.shaped(`elevatorid:elevator_${color}`, [
            'SPS',
            'PEP',
            'WWW'
        ], {
            S: 'gtceu:iron_screw',
            P: 'gtceu:iron_plate',
            E: 'minecraft:ender_pearl',
            W: `minecraft:${color}_wool`
        })
    })
})
