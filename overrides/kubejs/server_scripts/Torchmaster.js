ServerEvents.recipes(event => {
	event.remove({ id: 'torchmaster:feral_flare_lantern' })
	event.shaped( 'torchmaster:feral_flare_lantern', [
		' B ',
		'PGP',
		' B '
	], {
		B: 'gtceu:brass_plate',
		P: 'gtceu:glass_plate',
		G: 'minecraft:glowstone_dust'
	})
	
	event.remove({ id: 'torchmaster:megatorch' })
	event.shaped( 'torchmaster:megatorch', [
		'RCR',
		'MLS',
		'GDG'
	], {
		R: 'gtceu:gold_ring',
		C: 'gtceu:coke_block',
		M: 'forge:tools/mallets',
		L: 'minecraft:logs',
		S: 'forge:tools/saws',
		G: 'minecraft:gold_block',
		D: 'minecraft:diamond'
	})
	
	event.remove({ id: 'torchmaster:dreadlamp' })
	event.shaped( 'torchmaster:dreadlamp', [
		'RSR',
		'PGP',
		'RHR'
	], {
		P: 'gtceu:glass_plate',
		G: 'minecraft:glowstone',
		R: 'gtceu:steel_rod',
		S: 'gtceu:steel_plate',
		H: 'forge:tools/hammers'
	})
})
