ServerEvents.recipes(event => {

    event.remove({ output: 'shrink:shrinking_device' })
    event.recipes.gtceu.assembler('shrinking_device')
    .itemInputs(['gtceu:lv_field_generator', '4x gtceu:double_steel_plate', '4x gtceu:glass_plate', 'gtceu:ender_pearl_plate'])
    .inputFluids('gtceu:soldering_alloy 288')
    .itemOutputs('shrink:shrinking_device')
    .duration(200)
    .EUt(GTValues.VA[GTValues.LV])
    
})