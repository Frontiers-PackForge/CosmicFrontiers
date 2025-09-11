// Vintage Delight does NOT tag its vine blocks with the appropriate block tags. Sigh
const vineBlocks = [
	'vintagedelight:magic_vine',
	'vintagedelight:stripped_magic_vine',
	'vintagedelight:magic_vine_block',
	'vintagedelight:stripped_magic_vine_block'
]

// Add missing item tags
ServerEvents.tags('item', event => {
	console.log('[22] - [1] - TAG-WATCHER')
	let itemTags = ['minecraft:logs', 'minecraft:logs_that_burn', 'vintagedelight:magic_vine_log']
	itemTags.forEach((tag) => {
		vineBlocks.forEach((item) => {
			event.add(tag, item)
		})
	})

    event.add('minecraft:planks', [`vintagedelight:vine_tile`])
    event.add('minecraft:stairs', [`vintagedelight:vine_tile_stairs`])
    event.add('minecraft:wooden_stairs', [`vintagedelight:vine_tile_stairs`])
    event.add('minecraft:slabs', [`vintagedelight:vine_tile_slab`])
    event.add('minecraft:wooden_slabs', [`vintagedelight:vine_tile_slab`])
})

ServerEvents.recipes(event => {
	event.recipes.gtceu.cutter(`vintagedelight:magic_vine_cutting`)
		.itemInputs(`#vintagedelight:magic_vine_log`)
		.itemOutputs([`6x vintagedelight:vine_tile`, '2x gtceu:wood_dust'])
		.duration(200)
		.EUt(7);

	event.shapeless(`4x vintagedelight:vine_tile`, ['#forge:tools/saws', '#vintagedelight:magic_vine_log'])
	event.shapeless(`2x vintagedelight:vine_tile`, '#vintagedelight:magic_vine_log')
	
	if (Item.exists(`vintagedelight:vine_tile_stairs`)) {
		event.remove({ output: `vintagedelight:vine_tile_stairs` })
		event.shaped(`4x vintagedelight:vine_tile_stairs`, [
			'W  ',
			'WW ',
			'WWW'
		], {
			W: `vintagedelight:vine_tile`
		}).id('cosmicfrontiers:vintagedelight/vine_tile_stairs')
		event.recipes.gtceu.assembler(`cosmicfrontiers:vintagedelight/vine_tile_stairs`)
			.itemInputs(`3x vintagedelight:vine_tile`)
			.itemOutputs(`4x vintagedelight:vine_tile_stairs`)
			.circuit(7)
			.duration(100)
			.EUt(4);
	}

	if (Item.exists(`vintagedelight:vine_tile_slab`)) {
		event.remove({ output: `vintagedelight:vine_tile_slab` })
		event.shapeless(`2x vintagedelight:vine_tile_slab`, ['#forge:tools/saws', 'vintagedelight:vine_tile'])
		event.recipes.gtceu.cutter(`cosmicfrontiers:vintagedelight/vine_tile_slab_cutting`)
			.itemInputs(`vintagedelight:vine_tile`)
			.itemOutputs(`2x vintagedelight:vine_tile_slab`)
			.duration(100)
			.EUt(4);
	}
})