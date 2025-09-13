ServerEvents.recipes( event => {

    //iron_hook => steam
    event.remove({id: 'rehooked:iron_hook'})
    event.shaped('rehooked:iron_hook',[
        'IIA',
        ' HI',
        'C I'
    ],{
        I: 'gtceu:iron_rod',
        A: 'minecraft:iron_pickaxe',
        H: 'rehooked:wood_hook',
        C: 'minecraft:chain'
    })
    //diamond_hook => LV
    event.remove({id: 'rehooked:diamond_hook'})
    event.shaped('rehooked:diamond_hook',[
        'DDA',
        ' HD',
        'C D'
    ],{
        D: 'gtceu:diamond_rod',
        A: 'minecraft:diamond_pickaxe',
        H: 'rehooked:iron_hook',
        C: 'rehooked:diamond_chain'
    })
    event.remove({id: 'rehooked:diamond_chain'})
    event.shaped('rehooked:diamond_chain',[
        ' R ',
        'WRF',
        ' R '
    ],{
        R: 'gtceu:diamond_rod',
        W: '#forge:tools/wrenches',
        F: '#forge:tools/files'
    })
    //blazing_hook => LV
    event.remove({id: 'rehooked:blaze_hook'})
    event.shaped('rehooked:blaze_hook',[
        'GRG',
        ' HR',
        'C G'
    ],{
        G: 'minecraft:glowstone_dust',
        R: 'gtceu:rose_gold_rod',
        H: 'rehooked:diamond_hook',
        C: 'rehooked:blaze_chain'
    })
    event.remove({output: 'rehooked:blaze_chain'})
    event.shaped('rehooked:blaze_chain',[
        ' R ',
        'WRF',
        ' R '
    ],{
        R: 'minecraft:blaze_rod',
        W: '#forge:tools/wrenches',
        F: '#forge:tools/files'
    })
    //red_hook => MV
    event.remove({id: 'rehooked:red_hook'})
    event.shaped('rehooked:red_hook',[
        'HPH',
        ' RP',
        'R H'
    ],{
        H: 'rehooked:iron_hook',
        P: 'gtceu:galvanized_ethersteel_rod',
        R: 'minecraft:redstone_block'
    })
    //ender_hook => HV
    event.remove({id: 'rehooked:ender_hook'})
    event.shaped('rehooked:ender_hook',[
        'ESE',
        ' HS',
        'C E'
    ],{
        E: 'minecraft:ender_eye',
        H: 'rehooked:diamond_hook',
        S: 'gtceu:stainless_steel_rod',
        C: 'rehooked:ender_chain'
    })
    event.remove({output: 'rehooked:ender_chain'})
    event.shaped('rehooked:ender_chain',[
        ' R ',
        'WRF',
        ' R '
    ],{
        R: 'minecraft:ender_pearl',
        W: '#forge:tools/wrenches',
        F: '#forge:tools/files'
    })
}
)