// Add missing item tags
ServerEvents.tags('item', event => {
	let itemTags = ['minecraft:logs', 'minecraft:logs_that_burn']
	let items = ['vintagedelight:magic_vine', 'vintagedelight:stripped_magic_vine', 'vintagedelight:magic_vine_block', 'vintagedelight:stripped_magic_vine_block']
	itemTags.forEach((tag) => {
		items.forEach((item) => {
			event.add(tag, item)
		})
	})
    event.add('minecraft:planks', [`vintagedelight:vine_tile`])
    event.add('minecraft:stairs', [`vintagedelight:vine_tile_stairs`])
    event.add('minecraft:wooden_stairs', [`vintagedelight:vine_tile_stairs`])
    event.add('minecraft:slabs', [`vintagedelight:vine_tile_slab`])
    event.add('minecraft:wooden_slabs', [`vintagedelight:vine_tile_slab`])
})



// Apparently no longer needed
// ServerEvents.tags('block', event => {
// 	let blockTags = ['ars_nouveau:harvest/fellable', 'minecraft:logs', 'minecraft:logs_that_burn']
// 	let blocks = ['vintagedelight:magic_vine', 'vintagedelight:stripped_magic_vine', 'vintagedelight:magic_vine_block', 'vintagedelight:stripped_magic_vine_block']
// 	blockTags.forEach((tag) => {
// 		blocks.forEach((block) => {
// 			event.add(tag, block)
// 		})
// 	})
// })

ServerEvents.recipes(event => {
	if (Item.exists(`vintagedelight:magic_vine`)) {
		event.recipes.gtceu.cutter(`vintagedelight:magic_vine_cutting`)
			.itemInputs(`vintagedelight:magic_vine`)
			.itemOutputs([`6x vintagedelight:vine_tile`, '2x gtceu:wood_dust'])
			.duration(200)
			.EUt(7);
	}
	if (Item.exists(`vintagedelight:stripped_magic_vine`)) {
		event.recipes.gtceu.cutter(`vintagedelight:stripped_magic_vine_cutting`)
			.itemInputs(`vintagedelight:stripped_magic_vine`)
			.itemOutputs([`6x vintagedelight:vine_tile`, '2x gtceu:wood_dust'])
			.duration(200)
			.EUt(7);
	}
	if (Item.exists(`vintagedelight:magic_vine_block`)) {
		event.recipes.gtceu.cutter(`vintagedelight:magic_vine_block_cutting`)
			.itemInputs(`vintagedelight:magic_vine_block`)
			.itemOutputs([`6x vintagedelight:vine_tile`, '2x gtceu:wood_dust'])
			.duration(200)
			.EUt(7);
	}
	if (Item.exists(`vintagedelight:stripped_magic_vine_block`)) {
		event.recipes.gtceu.cutter(`vintagedelight:stripped_magic_vine_block_cutting`)
			.itemInputs(`vintagedelight:stripped_magic_vine_block`)
			.itemOutputs([`6x vintagedelight:vine_tile`, '2x gtceu:wood_dust'])
			.duration(200)
			.EUt(7);
	}
	//Log -> Plank
	if (Item.exists(`vintagedelight:magic_vine`)) {
		event.shaped(`4x vintagedelight:vine_tile`, [
			'   ',
			' T ',
			' P '
		],
			{
				T: '#forge:tools/saws',
				P: `vintagedelight:magic_vine`
			})
	}
	if (Item.exists(`vintagedelight:magic_vine`)) {
		event.shaped(`2x vintagedelight:vine_tile`, [
			'   ',
			'   ',
			' P '
		],
			{
				P: `vintagedelight:magic_vine`
			})
	}
	//Stripped log -> planks
	if (Item.exists(`vintagedelight:stripped_magic_vine`)) {
		event.shaped(`4x vintagedelight:vine_tile`, [
			'   ',
			' T ',
			' P '
		],
			{
				T: '#forge:tools/saws',
				P: `vintagedelight:stripped_magic_vine`
			})
	}
	if (Item.exists(`vintagedelight:stripped_magic_vine`)) {
		event.shaped(`2x vintagedelight:vine_tile`, [
			'   ',
			'   ',
			' P '
		],
			{
				P: `vintagedelight:stripped_magic_vine`
			})
	}
	//Wood -> Planks
	if (Item.exists(`vintagedelight:magic_vine_block`)) {
		event.shaped(`4x vintagedelight:vine_tile`, [
			'   ',
			' T ',
			' P '
		],
			{
				T: '#forge:tools/saws',
				P: `vintagedelight:magic_vine_block`
			})
	}
	if (Item.exists(`vintagedelight:magic_vine_block`)) {
		event.shaped(`2x vintagedelight:vine_tile`, [
			'   ',
			'   ',
			' P '
		],
			{
				P: `vintagedelight:magic_vine_block`
			})
	}
	//Stripped Wood -> Planks
	if (Item.exists(`vintagedelight:stripped_magic_vine_block`)) {
		event.shaped(`4x vintagedelight:vine_tile`, [
			'   ',
			' T ',
			' P '
		],
			{
				T: '#forge:tools/saws',
				P: `vintagedelight:stripped_magic_vine_block`
			})
	}
	if (Item.exists(`vintagedelight:stripped_magic_vine_block`)) {
		event.shaped(`2x vintagedelight:vine_tile`, [
			'   ',
			'   ',
			' P '
		],
			{
				P: `vintagedelight:stripped_magic_vine_block`
			})
	}
	if (Item.exists(`vintagedelight:vine_tile_stairs`)) {
		event.remove({ output: `vintagedelight:vine_tile_stairs` })
		event.shaped(`4x vintagedelight:vine_tile_stairs`, [
			'W  ',
			'WW ',
			'WWW'
		],
			{
				W: `vintagedelight:vine_tile`
			})
		event.recipes.gtceu.assembler(`cosmicfrontiers:vintagedelight/vine_tile_stairs`)
			.itemInputs(`6x vintagedelight:vine_tile`)
			.itemOutputs(`4x vintagedelight:vine_tile_stairs`)
			.circuit(7)
			.duration(100)
			.EUt(4);
	}
	if (Item.exists(`vintagedelight:vine_tile_slab`)) {
		event.remove({ output: `vintagedelight:vine_tile_slab` })
		event.shaped(`2x vintagedelight:vine_tile_slab`, [
			'   ',
			'   ',
			'TP '
		],
			{
				T: '#forge:tools/saws',
				P: `vintagedelight:vine_tile`
			})
		event.recipes.gtceu.cutter(`cosmicfrontiers:vintagedelight/vine_tile_slab_cutting`)
			.itemInputs(`vintagedelight:vine_tile`)
			.itemOutputs(`2x vintagedelight:vine_tile_slab`)
			.duration(100)
			.EUt(4);
	}
})