ServerEvents.recipes(event => {
    event.remove({ output: 'undergarden:catalyst' })
})

ServerEvents.tags('item', event => {
  console.log('[2] - [3] - TAG-WATCHER')
  event.remove('forge:storage_blocks/utherium', 'undergarden:utherium_block')
})