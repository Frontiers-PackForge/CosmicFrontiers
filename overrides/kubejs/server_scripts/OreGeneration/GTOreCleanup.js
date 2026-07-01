//Im sorry you have to witness whatever the fuck this is.

const isGtClutterForm = (id) => {
    if (!id.startsWith('gtceu:')) return false
    const path = id.substring('gtceu:'.length)
    return path.startsWith('raw_')
        || path.startsWith('crushed_')
        || path.endsWith('_ore')
        || ((path.startsWith('impure_') || path.startsWith('pure_')) && path.endsWith('_dust'))
}

// forms hidden from EMI 
const isHiddenGtForm = (id) => {
    if (!id.startsWith('gtceu:')) return false
    const path = id.substring('gtceu:'.length)
    return path.endsWith('_ore')
        || ((path.startsWith('impure_') || path.startsWith('pure_')) && path.endsWith('_dust'))
}
ServerEvents.tags('item', event => {
    Item.getList().forEach(stack => {
        const id = stack.getId()
        if (isGtClutterForm(id)) event.add('cosmiccore:gt_ore_clutter', id)
        if (isHiddenGtForm(id)) event.add('c:hidden_from_recipe_viewers', id)
    })
})

ServerEvents.recipes(event => {
    event.remove({ input: '#cosmiccore:gt_ore_clutter' })
})
