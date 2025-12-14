//these recipes are probably redundant but ill leave this file cause.. yeah
ServerEvents.recipes(event => {
    event.remove({id: 'enderio:staff_of_travelling'})
    event.remove({id: 'enderio:travel_anchor'})
    
    event.shaped( 'enderio:travel_anchor',[
        'ADA',
        'BCB',
        'ADA'
    ], {
        A: 'gtceu:steel_plate',
        B: 'gtceu:runed_steel_foil',
        D: '#gtceu:circuits/lv',
        C: 'gtceu:ender_pearl_block'
    })
    event.recipes.gtceu.assembler('travel_anchor')
    .itemInputs(['4x gtceu:steel_plate', '2x gtceu:runed_steel_foil', '2x #gtceu:circuits/lv', 'gtceu:ender_pearl_block'])
    .itemOutputs('enderio:travel_anchor')
    .duration(140)
    .EUt(GTValues.VA[GTValues.LV])

    event.shaped( 'enderio:staff_of_travelling',[
        ' SC',
        'WRS',
        'RD '
    ], {
        S: 'gtceu:runed_steel_screw',
        C: 'gtceu:lv_field_generator',
        R: 'gtceu:long_manasteel_rod',
        W: '#gtceu:tools/crafting_wrenches',
        D: '#gtceu:tools/crafting_screwdrivers'
    })
})