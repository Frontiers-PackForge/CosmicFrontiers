ServerEvents.recipes(event => {
    event.remove({ output: 'gtceu:compressed_clay' })
    event.shapeless('gtceu:compressed_clay', ['gtceu:brick_wooden_form', 'minecraft:clay_ball']).id('frontiers:compressed_clay_manual_only')
    event.recipes.create.mixing(['gtceu:compressed_clay', 'gtceu:brick_wooden_form'], ['gtceu:brick_wooden_form', 'minecraft:clay_ball']).id('frontiers:mixing/compressed_clay')
})
