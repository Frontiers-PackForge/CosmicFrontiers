let yeet = (itemName) => {
    ServerEvents.recipes(event => {
        event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
        console.log('[7] - [1] - TAG-WATCHER')
        event.add('c:hidden_from_recipe_viewers', itemName)

    })
}
yeet('createdeco:andesite_sheet')
yeet('createdeco:zinc_sheet')
yeet('createdeco:industrial_iron_sheet')
yeet('createdeco:industrial_iron_nugget')
yeet('createdeco:netherite_sheet')
yeet('createdeco:netherite_nugget')
yeet('copycats:copycat_fluid_pipe') //crashes the game when looking at the pipe while it has running fluid, copycats+ ver 3.0.2

ServerEvents.recipes(event => {
    event.replaceInput({ mod: 'createdeco' },
        'createdeco:andesite_sheet',
        'gtceu:andesite_alloy_plate'
    )
    event.replaceInput({ mod: 'createdeco' },
        'create:iron_sheet',
        'gtceu:iron_plate'
    )
    event.replaceInput({ mod: 'createdeco' },
        'create:copper_sheet',
        'gtceu:copper_plate'
    )
    event.replaceInput({ mod: 'createdeco' },
        'createdeco:zinc_sheet',
        'gtceu:zinc_plate'
    )
    event.replaceInput({ mod: 'createdeco' },
        'create:brass_nugget',
        'gtceu:brass_nugget'
    )
    event.replaceInput({ mod: 'createdeco' },
        'create:copper_nugget',
        'gtceu:copper_nugget'
    )
    event.replaceInput({ mod: 'createdeco' },
        'create:zinc_nugget',
        'gtceu:zinc_nugget'
    )
    event.replaceInput({ mod: 'createdeco' },
        'create:brass_ingot',
        'gtceu:brass_ingot'
    )
    event.replaceInput({ mod: 'createdeco' },
        'create:zinc_ingot',
        'gtceu:zinc_ingot'
    )
    event.replaceInput({ mod: 'createdeco' },
        'create:brass_sheet',
        'gtceu:brass_plate'
    )
    event.replaceInput({ mod: 'createdeco' },
        'createdeco:industrial_iron_sheet',
        'gtceu:industrial_iron_plate'
    )
    event.replaceInput({ mod: 'createdeco' },
        'createdeco:industrial_iron_nugget',
        'gtceu:industrial_iron_nugget'
    )
    event.replaceInput({ mod: 'copycats' },
        'create:zinc_ingot',
        'gtceu:zinc_ingot'  
    )

    event.recipes.gtceu.alloy_smelter("create:industrial_iron_ingot")
        .itemInputs('4x minecraft:iron_ingot', '2x gtceu:coal_dust')
        .itemOutputs('4x createdeco:industrial_iron_ingot')
        .duration(100)
        .EUt(16);

    event.recipes.gtceu.mixer("gtceu:industrial_iron_dust")
        .itemInputs('4x gtceu:iron_dust', '2x gtceu:coal_dust')
        .circuit(1)
        .itemOutputs('4x gtceu:industrial_iron_dust')
        .duration(50)
        .EUt(16);
        
    function trapdoor(trapdoor, slab) {
        event.remove(`${trapdoor}`)
        event.shaped(`2x ${trapdoor}`, [
            'SSS',
            'SSS'
        ], {
            S: `${slab}`
        })
    }

    function door(block, material, trapdoor) {
        event.remove(`${block}`)
        event.shaped(`2x ${block}`, [
            'PTD',
            'PRS',
            'PPH'
        ], {
            P: `gtceu:${material}_plate`,
            T: `${trapdoor}`,
            D: '#forge:tools/screwdrivers',
            R: `gtceu:iron_ring`,
            S: `gtceu:iron_screw`,
            H: '#forge:tools/hammers'
        })
    }
    
    trapdoor('createdeco:andesite_trapdoor', 'create:andesite_alloy')
    trapdoor('createdeco:brass_trapdoor', 'gtceu:brass_plate')
    trapdoor('createdeco:copper_trapdoor', 'gtceu:copper_plate')
    trapdoor('createdeco:industrial_iron_trapdoor', 'gtceu:industrial_iron_plate')
    trapdoor('createdeco:zinc_trapdoor', 'gtceu:zinc_plate')
    trapdoor('trials:copper_trapdoor', 'gtceu:copper_plate')
    
    door('createdeco:andesite_door', 'andesite_alloy', 'createdeco:andesite_trapdoor')
    door('createdeco:brass_door', 'brass', 'createdeco:brass_trapdoor')
    door('createdeco:copper_door', 'copper', 'createdeco:copper_trapdoor')
    door('createdeco:industrial_iron_door', 'industrial_iron', 'createdeco:industrial_iron_trapdoor')
    door('createdeco:zinc_door', 'zinc', 'createdeco:zinc_trapdoor')
    door('trials:copper_door', 'copper', 'gtceu:copper_plate')
    
    event.stonecutting('createdeco:copper_door', 'trials:copper_door')
    event.stonecutting('trials:copper_door', 'createdeco:copper_door')
    event.stonecutting('createdeco:copper_trapdoor', 'trials:copper_trapdoor')
    event.stonecutting('trials:copper_trapdoor', 'createdeco:copper_trapdoor')

    let dyeColors = [
    'white',
    'light_gray',
    'gray',
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'lime',
    'green',
    'cyan',
    'light_blue',
    'blue',
    'purple',
    'magenta',
    'pink'
  ]

  dyeColors.forEach(dyeColors => {
  event.remove({id: `createdeco:${dyeColors}_shipping_container`})
  //cheaper recipe cause buh (we now have a 1 dye 1 vault recipe and this 1 dye 8 vault recipe)
  event.shaped(`8x createdeco:${dyeColors}_shipping_container`, [
    'VVV',
    'VDV',
    'VVV'
    ], {
    V: 'create:item_vault',
    D: `minecraft:${dyeColors}_dye`,
    })  
  })
})