ServerEvents.recipes(event => {
	event.remove({ id: 'torchmaster:feral_flare_lantern' })
	event.shaped( 'torchmaster:feral_flare_lantern', [
		' B ',
		'PGP',
		'HBS'
	], {
		B: 'gtceu:brass_plate',
		P: 'gtceu:glass_plate',
		G: 'minecraft:glowstone_dust',
		H: '#forge:tools/hammers',
		S: '#forge:tools/screwdrivers'
	})
	
	event.remove({ id: 'torchmaster:megatorch' })
	event.shaped( 'torchmaster:megatorch', [
		'MCS',
		'RGR',
		'LDL'
	], {
		R: 'gtceu:gold_ring',
		C: 'gtceu:coke_block',
		M: '#forge:tools/mallets',
		L: 'botania:livingwood',
		S: '#forge:tools/saws',
		G: 'minecraft:gold_block',
		D: 'botania:mana_diamond'
	})
	
	event.remove({ id: 'torchmaster:dreadlamp' })
	event.shaped( 'torchmaster:dreadlamp', [
		'HSD',
		'PGP',
		'ROR'
	], {
		P: 'gtceu:glass_plate',
		G: 'minecraft:glowstone',
		R: 'gtceu:steel_rod',
		S: 'gtceu:steel_plate',
		O: 'minecraft:obsidian',
		H: '#forge:tools/hammers',
		D: '#forge:tools/screwdrivers'
	})
	
	event.remove({ id: 'torchmaster:frozen_pearl' })
	event.recipes.gtceu.chemical_bath('torchmaster:frozen_pearl')
		.itemInputs(
			'1x minecraft:ender_pearl'
		)
		.inputFluids(
			Fluid.of('gtceu:ice', 576)
		)
		.itemOutputs(
			'torchmaster:frozen_pearl'
		)
		.duration(600)
		.EUt(GTValues.VA[GTValues.LV]);
})
