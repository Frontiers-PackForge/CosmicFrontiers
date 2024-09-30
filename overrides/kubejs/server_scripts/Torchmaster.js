ServerEvents.recipes(event => {
	event.remove({ id: 'torchmaster:feral_flare_lantern' })
	event.shaped( 'torchmaster:feral_flare_lantern', [
		' B ',
		'PGP',
		' B '
	], {
		B: 'gtceu:brass_plate',
		P: 'gtceu:glass_plate',
		G: 'minecraft:glowstone'
	})
})
