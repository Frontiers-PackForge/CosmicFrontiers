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
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
    //   event.remove({ id: '' })
})