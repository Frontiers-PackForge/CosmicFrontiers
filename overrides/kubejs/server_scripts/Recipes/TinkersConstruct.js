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

	event.remove({ id: 'tconstruct:smeltery/casting/ender/eye' })
	
	
	event.remove({ id: 'tconstruct:smeltery/seared/seared_brick' })
	event.remove({ id: 'tconstruct:smeltery/seared/seared_brick_kiln' })

	
	event.remove({ id: 'tconstruct:smeltery/melting/metal/molten_debris/ore' })
	event.remove({ id: 'tconstruct:smeltery/alloys/molten_rose_gold' })
	event.remove({ id: 'tconstruct:smeltery/alloys/molten_netherite' })


    
})