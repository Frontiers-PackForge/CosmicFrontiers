ServerEvents.recipes(event => {
    //This is, for lack of better words, awful. Will need to actually go through all recipes and find the ones using sheets normally as my guess is this is a large overhead on load/reload times
    event.replaceInput({}, 'create:brass_sheet', 'gtceu:brass_plate')
    event.replaceInput({}, 'create:iron_sheet', 'gtceu:iron_plate')
    event.replaceInput({}, 'create:golden_sheet', 'gtceu:gold_plate')
    event.replaceInput({}, 'create:copper_sheet', 'gtceu:copper_plate')
})
