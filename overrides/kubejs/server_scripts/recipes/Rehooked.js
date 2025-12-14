ServerEvents.recipes( event => {

    //iron_hook => steam
    event.remove({id: 'hooked:iron_hook'})
    event.shaped('hooked:iron_hook',[
        'IIA',
        ' HI',
        'C I'
    ],{
        I: 'gtceu:iron_rod',
        A: 'minecraft:iron_pickaxe',
        H: 'hooked:wood_hook',
        C: 'minecraft:chain'
    })
    //diamond_hook => LV
    event.remove({id: 'hooked:diamond_hook'})
    event.shaped('hooked:diamond_hook',[
        'DDA',
        ' HD',
        'C D'
    ],{
        D: 'gtceu:diamond_rod',
        A: 'minecraft:diamond_pickaxe',
        H: 'hooked:iron_hook',
        C: 'minecraft:chain'
    })
    //red_hook => MV
    event.remove({id: 'hooked:redstone_hook'})
    event.shaped('hooked:redstone_hook',[
        'HPH',
        ' RP',
        'R H'
    ],{
        H: 'hooked:iron_hook',
        P: 'gtceu:galvanized_ethersteel_rod',
        R: 'minecraft:redstone_block'
    })
    //ender_hook => HV
    event.remove({id: 'hooked:ender_hook'})
    event.shaped('hooked:ender_hook',[
        'ESE',
        ' HS',
        'C E'
    ],{
        E: 'minecraft:ender_eye',
        H: 'hooked:diamond_hook',
        S: 'gtceu:stainless_steel_rod',
        C: 'minecraft:chain'
    })
}
)