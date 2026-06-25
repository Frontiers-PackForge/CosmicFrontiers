let yeet = (itemName) => {
    ServerEvents.recipes(event => {
        event.remove({ output: itemName })
    })

    ServerEvents.tags('item', event => {
        event.add('c:hidden_from_recipe_viewers', itemName)
    })
}

let yeet_f = (itemName) => {
    ServerEvents.recipes(event => {
        event.remove({ output: Fluid.of(itemName) })
    })
    ServerEvents.tags('fluid', event => {
        event.add('c:hidden_from_recipe_viewers', itemName)
    })
}


// yeet('')




ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:shaped/compressed_coke_clay' })
    event.remove({ id: 'gtceu:compressor/coke_bricks' })
    event.remove({ id: 'gtceu:shaped/casing_coke_bricks' })
    event.remove({ id: 'gtceu:assembler/hull_lv' })
    event.remove({ id: 'occultism:crafting/chalk_white_impure' })
    event.remove({ id: 'occultism:crafting/chalk_white_impure2' })
    event.remove({ id: 'gtceu:shaped/basic_circuit_board' })
    event.remove({ id: 'gtceu:assembler/basic_circuit_board' })
    event.remove({ id: 'gtceu:shapeless/programmed_circuit' })
    event.remove({ id: 'gtceu:alloy_smelter/rubber_bar' })
    event.remove({ output: 'create:andesite_alloy' })
    event.remove({ id: 'gtceu:compressor/compress_plate_dust_wood' })
    event.remove({ id: 'gtceu:shaped/bronze_bricks_hull' })

    
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
})