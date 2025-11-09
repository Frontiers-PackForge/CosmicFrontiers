ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'some_assembly_required:golden_apple_slices' }, 
        'some_assembly_required:golden_apple_slices',
        '#forge:golden_apple_slices'
    )
    event.replaceInput(
        { input: 'vanilladelight:golden_apple_slice' }, 
        'vanilladelight:golden_apple_slice',
        '#forge:golden_apple_slices'
    )
})