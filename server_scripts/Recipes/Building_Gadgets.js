//no yeets needed lmao
ServerEvents.recipes(event => {
    event.remove({ mod: 'buildinggadgets2' })
    event.shaped('buildinggadgets2:template_manager', [
        'APD',
        'CHC',
        'WMW'
    ], {
        A: 'gtceu:mv_robot_arm',
        P: 'minecraft:paper',
        D: '#forge:dyes/blue',
        C: '#gtceu:circuits/mv',
        H: 'gtceu:mv_machine_hull',
        W: 'gtceu:copper_single_cable',
        M: 'gtceu:mv_electric_motor'
    })
    event.shaped('buildinggadgets2:gadget_building', [
        'PEP',
        'CMC',
        'IBI'
    ], {
        M: 'gtceu:computer_monitor_cover',
        E: 'gtceu:lv_emitter',
        B: '#gtceu:batteries/mv',
        C: 'gtceu:mv_robot_arm',
        P: 'gtceu:aluminium_plate',
        I: '#gtceu:circuits/mv'
    })
    event.shaped('buildinggadgets2:gadget_exchanging', [
        'EPS',
        'CMC',
        'IBI'
    ], {
        M: 'gtceu:computer_monitor_cover',
        E: 'gtceu:lv_emitter',
        S: 'gtceu:lv_sensor',
        B: '#gtceu:batteries/mv',
        C: 'gtceu:mv_robot_arm',
        P: 'gtceu:aluminium_plate',
        I: '#gtceu:circuits/mv'
    })
    event.shaped('buildinggadgets2:gadget_copy_paste', [
        'PEP',
        'CMA',
        'IBI'
    ], {
        M: 'gtceu:computer_monitor_cover',
        E: 'gtceu:mv_emitter',
        B: '#gtceu:batteries/hv',
        C: 'minecraft:paper',
        P: 'gtceu:stainless_steel_plate',
        A: 'gtceu:glue_bucket',
        I: '#gtceu:circuits/hv'
    })
    event.shaped('buildinggadgets2:gadget_cut_paste', [
        'PEP',
        'CMA',
        'IBI'
    ], {
        M: 'gtceu:computer_monitor_cover',
        E: 'gtceu:mv_emitter',
        B: '#gtceu:batteries/hv',
        C: 'minecraft:shears',
        P: 'gtceu:stainless_steel_plate',
        A: 'gtceu:glue_bucket',
        I: '#gtceu:circuits/hv'
    })
    event.shaped('buildinggadgets2:gadget_destruction', [
        'PEP',
        'CMC',
        'IBI'
    ], {
        M: 'gtceu:computer_monitor_cover',
        E: 'gtceu:mv_emitter',
        B: '#gtceu:batteries/hv',
        C: 'trashcans:item_trash_can',
        P: 'gtceu:stainless_steel_plate',
        I: '#gtceu:circuits/hv'
    })
})