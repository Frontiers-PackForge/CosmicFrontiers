//just gonna do all the smelting/material tag removal here instead of splitting it between tcon filer/embers file
//probably could have used an array or something for this but uhh... yeah
let yeet = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: itemName })
  })
  ServerEvents.tags('item', event => {
    event.add('c:hidden_from_recipe_viewers', itemName)
  })
}

yeet(/embers:(.*)_lead/)
yeet(/embers:(.*)_silver/)
yeet(/embers:lead_(.*)/)
yeet(/embers:silver_(.*)/)
yeet('tconstruct:rose_gold_nugget')
yeet('tconstruct:rose_gold_ingot')
yeet('tconstruct:rose_gold_block')
yeet('tconstruct:steel_nugget')
yeet('tconstruct:steel_ingot')
yeet('tconstruct:steel_block')
yeet('tconstruct:cobalt_nugget')
yeet('tconstruct:cobalt_ingot')
yeet('tconstruct:cobalt_block')
yeet('tconstruct:raw_cobalt_block')
yeet('tconstruct:raw_cobalt')
yeet('tconstruct:molten_lumium_bucket')
yeet('tconstruct:molten_signalum_bucket')
yeet('tconstruct:molten_enderium_bucket')
yeet('tconstruct:plate_cast')
yeet('tconstruct:plate_sand_cast')
yeet('tconstruct:plate_red_sand_cast')
yeet('tconstruct:gem_cast')
yeet('tconstruct:gem_sand_cast')
yeet('tconstruct:gem_red_sand_cast')
yeet('tconstruct:foundry_controller')
yeet('tconstruct:scorched_drain')
yeet('tconstruct:scorched_duct')
yeet('tconstruct:scorched_chute')

//hiding the molten fluids
let yoot = (fluidName) => {
  ServerEvents.tags('fluid', event => {
    event.add('c:hidden_from_recipe_viewers', fluidName)
  })
}

yoot('tconstruct:molten_lumium')
yoot('tconstruct:molten_signalum')
yoot('tconstruct:molten_enderium')

//removing all tcon recipes for these 3
//this could probably be used for any future unwanted tcon recipes aswell
ServerEvents.recipes(event => {

  let tcondumb = [
    'lumium',
    'signalum',
    'enderium'
  ]

   tcondumb.forEach(tcondumb => {
	   //casting
       event.remove({ id: `tconstruct:smeltery/alloys/molten_${tcondumb}`})
	   event.remove({ id: `tconstruct:smeltery/casting/metal/${tcondumb}/ingot_gold_cast`})
	   event.remove({ id: `tconstruct:smeltery/casting/metal/${tcondumb}/ingot_sand_cast`})
	   event.remove({ id: `tconstruct:smeltery/casting/metal/${tcondumb}/nugget_gold_cast`})
	   event.remove({ id: `tconstruct:smeltery/casting/metal/${tcondumb}/nugget_sand_cast`})
	   event.remove({ id: `tconstruct:smeltery/casting/metal/${tcondumb}/block`})
	   event.remove({ id: `tconstruct:smeltery/casting/metal/${tcondumb}/plate_gold_cast`})
	   event.remove({ id: `tconstruct:smeltery/casting/metal/${tcondumb}/plate_sand_cast`})
	   event.remove({ id: `tconstruct:smeltery/casting/metal/${tcondumb}/gear_gold_cast`})
	   event.remove({ id: `tconstruct:smeltery/casting/metal/${tcondumb}/gear_sand_cast`})
       //melting
	   event.remove({ id: `tconstruct:smeltery/melting/metal/${tcondumb}/ingot`})
	   event.remove({ id: `tconstruct:smeltery/melting/metal/${tcondumb}/nugget`})
	   event.remove({ id: `tconstruct:smeltery/melting/metal/${tcondumb}/block`})
	   event.remove({ id: `tconstruct:smeltery/melting/metal/${tcondumb}/plate`})
	   event.remove({ id: `tconstruct:smeltery/melting/metal/${tcondumb}/gear`})
	   event.remove({ id: `tconstruct:smeltery/melting/metal/${tcondumb}/dust`})

   })
})

ServerEvents.tags('item', event => {
  //ore blocks
  event.remove('forge:ores/lead', 'embers:lead_ore')
  event.remove('forge:ores/lead', 'embers:deepslate_lead_ore')
  event.remove('forge:ores/silver', 'embers:silver_ore')
  event.remove('forge:ores/silver', 'embers:deepslate_silver_ore')
  event.remove('forge:ores/cobalt', 'tconstruct:cobalt_ore') //pretty sure tcon cobalt was removed from generating
  //raw ores
  event.remove('forge:raw_materials/lead', 'embers:raw_lead')
  event.remove('forge:raw_materials/silver', 'embers:raw_silver')
  event.remove('forge:raw_materials/cobalt', 'tconstruct:raw_cobalt')
  //raw ore blocks
  event.remove('forge:storage_blocks/raw_lead', 'embers:raw_lead_block')
  event.remove('forge:storage_blocks/raw_silver', 'embers:raw_silver_block')
  event.remove('forge:storage_blocks/raw_cobalt', 'tconstruct:raw_cobalt_block')
  //blocks
  event.remove('forge:storage_blocks/lead', 'embers:lead_block')
  event.remove('forge:storage_blocks/silver', 'embers:silver_block')
  event.remove('forge:storage_blocks/cobalt', 'tconstruct:cobalt_block')
  event.remove('forge:storage_blocks/rose_gold', 'tconstruct:rose_gold_block')
  event.remove('forge:storage_blocks/steel', 'tconstruct:steel_block')
  //ingots
  event.remove('forge:ingots/lead', 'embers:lead_ingot')
  event.remove('forge:ingots/silver', 'embers:silver_ingot')
  event.remove('forge:ingots/cobalt', 'tconstruct:cobalt_ingot')
  event.remove('forge:ingots/rose_gold', 'tconstruct:rose_gold_ingot')
  event.remove('forge:ingots/steel', 'tconstruct:steel_ingot')
  //nuggets
  event.remove('forge:nuggets/lead', 'embers:lead_nugget')
  event.remove('forge:nuggets/silver', 'embers:silver_nugget')
  event.remove('forge:nuggets/cobalt', 'tconstruct:cobalt_nugget')
  event.remove('forge:nuggets/rose_gold', 'tconstruct:rose_gold_nugget')
  event.remove('forge:nuggets/steel', 'tconstruct:steel_nugget')
})


ServerEvents.recipes(event => {

	event.remove({ type: 'tconstruct:foundry' })
		
	event.remove({ input: 'tconstruct:plate_cast' })
	event.remove({ input: 'tconstruct:plate_sand_cast' })
	event.remove({ input: 'tconstruct:plate_red_sand_cast' })
	event.remove({ input: 'tconstruct:gem_cast' })
	event.remove({ input: 'tconstruct:gem_sand_cast' })
	event.remove({ input: 'tconstruct:gem_red_sand_cast' })

	event.remove({ id: 'tconstruct:smeltery/melting/metal/aluminum/ore_sparse' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/aluminum/raw' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/aluminum/raw_block' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/copper/geore/bud_large' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/copper/geore/bud_medium' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/copper/geore/bud_small' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/copper/geore/cluster' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/copper/ore_sparse' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/gold/geore/bud_large' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/gold/geore/bud_medium' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/gold/geore/bud_small' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/gold/geore/cluster' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/gold/ore_dense' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/geore/bud_large' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/geore/bud_medium' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/geore/bud_small' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/geore/cluster' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/ore_dense' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/ore_sparse' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/lead/ore_dense' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/lead/ore_sparse' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/nickel/ore_dense' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/nickel/ore_sparse' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/osmium/ore_dense' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/osmium/ore_singular' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/osmium/ore_sparse' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/osmium/raw' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/osmium/raw_block' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/platinum/ore_dense' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/platinum/ore_sparse' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/silver/ore_dense' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/silver/ore_sparse' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/tin/ore_dense' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/tin/ore_sparse' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/tungsten/ore_dense' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/tungsten/ore_singular' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/tungsten/ore_sparse' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/tungsten/raw' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/tungsten/raw_block' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/uranium/ore_dense' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/uranium/ore_sparse' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/zinc/geore/bud_large' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/zinc/geore/bud_medium' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/zinc/geore/bud_small' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/zinc/geore/cluster' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/zinc/ore_dense' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/zinc/ore_sparse' })
	event.remove({ id: 'tconstruct:smeltery/melting/quartz/geore/bud_large' })
	event.remove({ id: 'tconstruct:smeltery/melting/quartz/geore/bud_medium' })
	event.remove({ id: 'tconstruct:smeltery/melting/quartz/geore/bud_small' })
	event.remove({ id: 'tconstruct:smeltery/melting/quartz/geore/cluster' })
	event.remove({ id: 'tconstruct:smeltery/melting/quartz/ore_dense' })
	event.remove({ id: 'tconstruct:smeltery/melting/quartz/ore_sparse' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/aluminum/ore_dense' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/aluminum/ore_dense' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/aluminum/ore_singular' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/netherite/lodestone' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/osmium/dust' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/rose_gold/dust' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/rose_gold/silky_cloth' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/tungsten/dust' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/amethyst/spyglass' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/diamond/jukebox' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/gold/bell' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/gold/clock' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/chain' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/chain_boots' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/chain_chestplate' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/chain_leggings' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/chain_helmet' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/crossbow' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/ingot_4' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/ingot_5' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/nugget_3' })
	event.remove({ id: 'tconstruct:smeltery/melting/quartz/gem_1' })

	event.remove({ id: 'tconstruct:smeltery/casting/ender/eye' })
	event.remove({ id: 'tconstruct:smeltery/casting/metal/gold/clock' })
	event.remove({ id: 'tconstruct:smeltery/casting/metal/iron/compass' })
	
	event.remove({ id: 'tconstruct:smeltery/seared/seared_brick' })
	event.remove({ id: 'tconstruct:smeltery/seared/seared_brick_kiln' })

	
	event.remove({ id: 'tconstruct:smeltery/melting/metal/molten_debris/ore' })
	event.remove({ id: 'tconstruct:smeltery/alloys/molten_rose_gold' })
	event.remove({ id: 'tconstruct:smeltery/alloys/molten_netherite' })

	event.remove({ id: 'tconstruct:common/glass/vanilla/daylight_detector' })
	event.remove({ id: 'tconstruct:common/basalt_blast_furnace' })
	event.remove({ id: 'tconstruct:common/flint' })
	event.remove({ id: 'tconstruct:common/glass/vanilla/glass_bottle' })

	event.remove({ id: 'tconstruct:tables/pattern' })
	event.shaped('6x tconstruct:pattern', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:rods/wooden',
		B: '#minecraft:planks',
		C: 'gtceu:sticky_resin'
    }).id('frontiers:tconstruct_pattern')

	//"What if you knife a cheese ingot on a cutting board to get ad astra cheese before moon" (c) ghost
	//IN CASE FD KUBEJS ADDON GETS ADDED CHANGE THAT UP FOR A PROPER RECIPE
	event.custom({
		type: 'farmersdelight:cutting',
		ingredients: [
		  { item: 'tconstruct:cheese_ingot' }
		],
		tool: { tag: 'forge:tools/knives' },
		result: [
		  { item: 'ad_astra:cheese', count: 2 }
		]
	}).id('frontiers:cheese_cutting')

	event.remove({ output: 'tconstruct:silky_cloth' })
	event.recipes.gtceu.assembler('frontiers:silky_cloth')
        .itemInputs(['4x projectred_core:woven_cloth', '#forge:gems/rose_quartz'])
        .itemOutputs('tconstruct:silky_cloth')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

	event.remove({ output: 'tconstruct:seared_drain' })
    event.shaped('tconstruct:seared_drain', [
        'BHB',
        'CCC',
        'B B'
    ], {
        H: '#forge:tools/hammers',
		C: 'gtceu:copper_plate',
		B: 'tconstruct:seared_brick'
    }).id('frontiers:seared_drain')

	event.remove({ output: 'tconstruct:seared_duct' })
    event.shaped('tconstruct:seared_duct', [
        'BHB',
        'CCC',
        'B B'
    ], {
        H: '#forge:tools/hammers',
		C: 'gtceu:gold_plate',
		B: 'tconstruct:seared_brick'
    }).id('frontiers:seared_duct')

	event.remove({ output: 'tconstruct:seared_chute' })
    event.shaped('tconstruct:seared_chute', [
        'BCB',
        'HC ',
        'BCB'
    ], {
        H: '#forge:tools/hammers',
		C: 'gtceu:copper_plate',
		B: 'tconstruct:seared_brick'
    }).id('frontiers:seared_chute')

	//ticon mob smelting, reduced by 40-50%
	event.remove({ id: 'tconstruct:smeltery/entity_melting/drowned' })
	event.custom({
		"type": "tconstruct:entity_melting",
		"damage": 4,
		"entity": {
		  "type": "minecraft:drowned"
		},
		"result": {
		  "amount": 10,
		  "fluid": "gtceu:copper"
		}
	}).id("frontiers:smeltery_drowned_melting")
	event.remove({ id: 'tconstruct:smeltery/entity_melting/creeper' })
	event.custom({
		"type": "tconstruct:entity_melting",
		"damage": 2,
		"entity": {
		  "type": "minecraft:creeper"
		},
		"result": {
			"amount": 25,
			"fluid": "tconstruct:molten_glass"
		}
	}).id("frontiers:smeltery_creeper_melting")
	event.remove({ id: 'tconstruct:smeltery/entity_melting/creeper' })
	event.custom({
		"type": "tconstruct:entity_melting",
		"damage": 2,
		"entity": {
		  "types": [
			"minecraft:enderman",
			"minecraft:endermite",
			"minecraft:ender_dragon"
		  ]
		},
		"result": {
		  "amount": 15,
		  "tag": "forge:ender"
		}
	}).id("frontiers:smeltery_ender_melting")
	event.remove({ id: 'tconstruct:smeltery/entity_melting/illager' })
	event.custom({
		"type": "tconstruct:entity_melting",
		"damage": 2,
		"entity": {
		  "tag": "forge:illagers"
		},
		"result": {
		  "amount": 15,
		  "fluid": "tconstruct:molten_emerald"
		}
	}).id("frontiers:smeltery_illager_melting")
	event.remove({ id: 'tconstruct:smeltery/entity_melting/iron_golem' })
	event.custom({
		"type": "tconstruct:entity_melting",
		"damage": 4,
		"entity": {
		  "type": "minecraft:iron_golem"
		},
		"result": {
		  "amount": 5,
		  "fluid": "gtceu:iron"
		}
	}).id("frontiers:smeltery_iron_golem_melting")
	event.remove({ id: 'tconstruct:smeltery/entity_melting/piglin' })
	event.custom({
		"type": "tconstruct:entity_melting",
		"damage": 4,
		"entity": {
		  "types": [
			"minecraft:piglin",
			"minecraft:piglin_brute",
			"minecraft:zombified_piglin"
		  ]
		},
		"result": {
		  "amount": 5,
		  "fluid": "gtceu:gold"
		}
	}).id("frontiers:smeltery_piglin_melting")
	event.remove({ id: 'tconstruct:smeltery/entity_melting/villager' })
	event.custom({
		"type": "tconstruct:entity_melting",
		"damage": 5,
		"entity": {
		  "tag": "forge:villagers"
		},
		"result": {
		  "amount": 15,
		  "fluid": "tconstruct:molten_emerald"
		}
	}).id("frontiers:smeltery_villager_melting")
	event.remove({ id: 'tconstruct:smeltery/entity_melting/zombie' })
	event.custom({
		"type": "tconstruct:entity_melting",
		"damage": 4,
		"entity": {
		  "types": [
			"minecraft:zombie",
			"minecraft:husk",
			"minecraft:zombie_horse"
		  ]
		},
		"result": {
		  "amount": 5,
		  "fluid": "gtceu:iron"
		}
	}).id("frontiers:smeltery_zombie_melting")

	//making ticon cast correct blocks
	event.remove({ id: 'tconstruct:smeltery/casting/metal/brass/block' })
	event.custom({
		"type": "tconstruct:casting_basin",
		"cooling_time": 161,
		"fluid": {
		  "amount": 1296,
		  "fluid": "gtceu:brass"
		},
		"result": {
		  "item": "gtceu:brass_block"
		}
	}).id("frontiers:smeltery_brass_block_casting")
	event.remove({ id: 'tconstruct:smeltery/casting/metal/steel/block' })
	event.custom({
		"type": "tconstruct:casting_basin",
		"cooling_time": 194,
		"fluid": {
		  "amount": 1296,
		  "fluid": "gtceu:steel"
		},
		"result": {
		  "item": "gtceu:steel_block"
		}
	}).id("frontiers:smeltery_steel_block_casting")
	event.remove({ id: 'tconstruct:smeltery/casting/metal/zinc/block'})
	event.custom({
		"type": "tconstruct:casting_basin",
		"cooling_time": 141,
		"fluid": {
		  "amount": 1296,
		  "fluid": "gtceu:zinc"
		},
		"result": {
		  "item": "gtceu:zinc_block"
		}
	}).id("frontiers:smeltery_zinc_block_casting")
	event.remove({ id: 'gm_construct:smeltery/casting/metal/malachite/block' })
	event.custom({
		"type": "tconstruct:casting_basin",
		"cooling_time": 121,
		"fluid": {
		  "amount": 1296,
		  "fluid": "gtceu:copper"
		},
		"result": {
		  "item": "gtceu:copper_block"
		}
	}).id("frontiers:smeltery_copper_block_casting")

	//slimy crystals
	event.recipes.gtceu.forge_hammer('frontiers:forge_hammer_earth_slime_crystal')
        .itemInputs('tconstruct:earth_slime_crystal_block')
        .itemOutputs('4x tconstruct:earth_slime_crystal')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.forge_hammer('frontiers:forge_hammer_sky_slime_crystal')
        .itemInputs('tconstruct:sky_slime_crystal_block')
        .itemOutputs('4x tconstruct:sky_slime_crystal')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.forge_hammer('frontiers:forge_hammer_ichor_slime_crystal')
        .itemInputs('tconstruct:ichor_slime_crystal_block')
        .itemOutputs('4x tconstruct:ichor_slime_crystal')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
	
})
