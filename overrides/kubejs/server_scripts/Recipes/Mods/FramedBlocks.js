ServerEvents.recipes(event => {
    event.remove({ output: 'framedblocks:framed_hopper' })
    event.shapeless('framedblocks:framed_hopper', 'minecraft:hopper').id('frontiers:framed_hopper')
})
