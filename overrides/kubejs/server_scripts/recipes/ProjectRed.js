let yeet = (itemName) => {
    ServerEvents.recipes(event => {
      event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
      event.add('c:hidden_from_recipe_viewers', itemName)
    })
  }

yeet('projectred_core:ruby')
yeet('projectred_core:sapphire')
yeet('projectred_core:peridot')
yeet('projectred_core:sail')
yeet('projectred_core:sand_coal_comp')
yeet('projectred_core:boule')
yeet('projectred_core:silicon')
yeet('projectred_core:red_silicon_comp')
yeet('projectred_core:glow_silicon_comp')
yeet('projectred_core:electrotine_silicon_comp')
yeet('projectred_core:infused_silicon')
yeet('projectred_core:energized_silicon')
yeet('projectred_core:electrotine_silicon')
yeet('projectred_core:copper_coil')
yeet('projectred_core:iron_coil')
yeet('projectred_core:gold_coil')
yeet('projectred_core:motor')
yeet('projectred_core:draw_plate')

ServerEvents.recipes(event => {

    //we're now using these for real so it only makes sense to get a better recipe

    event.recipes.gtceu.spooling_machine('frontiers:cloth_spooling')
            .itemInputs(['8x minecraft:string', 'minecraft:stick'])
            .itemOutputs('2x projectred_core:woven_cloth')
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.spooling_machine('frontiers:cloth_spooling_silk')
            .itemInputs(['4x forestry:silk_wisp', 'minecraft:stick'])
            .itemOutputs('2x projectred_core:woven_cloth')
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])

    //The Redstone Part
    event.remove({ id: 'projectred_core:plate' })
    event.shaped('2x projectred_core:plate', [
        'A',
        'B'
    ], {
        A: '#c:tools/saws',
        B: 'minecraft:smooth_stone'
    }).id('frontiers:circuit_plate_saw')
    event.recipes.gtceu.cutter('frontiers:circuit_plate_cutter')
              .itemInputs('minecraft:smooth_stone_slab')
              .itemOutputs('2x projectred_core:plate')
              .duration(100)
              .EUt(GTValues.VA[GTValues.LV]);

    event.remove({ id: 'projectred_core:conductive_plate' })
    event.shaped('projectred_core:conductive_plate', [
        'A',
        'B'
    ], {
        A: 'gtceu:fine_red_alloy_wire',
        B: 'projectred_core:plate'
    }).id('frontiers:conductive_plate')

    event.remove({ id: 'projectred_transmission:wired_plate' })
    event.shaped('projectred_core:wired_plate', [
        'A',
        'B'
    ], {
        A: 'gtceu:red_alloy_single_wire',
        B: 'projectred_core:plate'
    }).id('frontiers:wired_plate')

    event.remove({ id: 'projectred_core:anode' })
    event.shaped('projectred_core:anode', [
        ' A ',
        'AAA',
        'BBB'
    ], {
        A: 'gtceu:fine_red_alloy_wire',
        B: 'projectred_core:plate'
    }).id('frontiers:anode')

    event.remove({ id: 'projectred_core:silicon_chip' })
    event.shaped('projectred_core:silicon_chip', [
        ' A ',
        'BBB'
    ], {
        A: 'forestry:electron_tube_copper',
        B: 'projectred_core:plate'
    }).id('frontiers:copper_chip')

    event.remove({ id: 'projectred_core:energized_silicon_chip' })
    event.shaped('projectred_core:energized_silicon_chip', [
        ' A ',
        'BBB'
    ], {
        A: 'forestry:electron_tube_gold',
        B: 'projectred_core:plate'
    }).id('frontiers:gold_chip')

    event.remove({ id: 'projectred_core:screwdriver' })
    event.shaped('projectred_core:screwdriver', [
        'A  ',
        ' AB',
        ' BA'
    ], {
        A: 'gtceu:iron_rod',
        B: '#c:dyes/blue'
    }).id('frontiers:projectred_screwdriver')

    event.remove({ id: 'projectred_core:multimeter' })
    event.shaped('projectred_core:multimeter', [
        'A A',
        'BCD',
        'BED'
    ], {
        A: 'gtceu:fine_red_alloy_wire',
        B: '#c:dyes/black',
        C: '#c:glass_panes',
        D: '#c:dyes/red',
        E: 'gtceu:vacuum_tube'
    }).id('frontiers:multimeter')

    //Wires (and illumar)

    event.remove({ id: /projectred_transmission:(.*)_insulated_wire/ })
    event.remove({ id: /projectred_transmission:(.*)_bundled_wire/ })
    event.remove({ id: /projectred_transmission:(.*)_framed_insulated_wire/ })
    event.remove({ id: /projectred_transmission:(.*)_framed_bundled_wire/ })
    event.remove({ id: /projectred_core:(.*)_illumar/})
    event.remove({ id: /projectred_illumination:(.*)_illumar_lamp/})
    event.remove({ id: /projectred_illumination:(.*)_fixture_light/})
    event.remove({ id: /projectred_illumination:(.*)_fallout_light/})
    event.remove({ id: /projectred_illumination:(.*)_cage_light/})
    event.remove({ id: /projectred_illumination:(.*)_lantern/})

    event.remove({ id: 'projectred_transmission:red_alloy_wire' })
    event.shaped('2x projectred_transmission:red_alloy_wire', [
        'A',
        'B'
    ], {
        A: '#gtceu:tools/crafting_wire_cutters',
        B: 'gtceu:red_alloy_single_wire'
    }).id('frontiers:projectred_red_alloy_wire_cutters')
    event.recipes.gtceu.wiremill('frontiers:projectred_red_alloy_wire_wiremill')
        .itemInputs('gtceu:red_alloy_ingot')
        .itemOutputs('4x projectred_transmission:red_alloy_wire')
        .circuit(5)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV]);

    event.shaped('projectred_transmission:neutral_bundled_wire', [
        'ABA',
        'BBB',
        'ABA'
    ], {
        A: '#c:rods/wooden',
        B: 'projectred_transmission:red_alloy_wire'
    }).id('frontiers:projectred_neutral_bundled_wire')

    event.remove({ id: 'projectred_transmission:framed_red_alloy_wire'})
    event.shapeless('4x projectred_transmission:framed_red_alloy_wire', [
        '4x projectred_transmission:red_alloy_wire', 
        'gtceu:wood_frame'
    ]).id('frontiers:framed_red_alloy_wire')

    event.shapeless('4x projectred_transmission:neutral_framed_bundled_wire', [
        '4x projectred_transmission:neutral_bundled_wire', 
        'gtceu:wood_frame'
    ]).id('frontiers:projectred_neutral_framed_bundled_wire')

    event.remove({ id: 'projectred_illumination:illumar_smart_lamp' })
    event.recipes.gtceu.assembler(`frontiers:illumar_smart_lamp`)
            .itemInputs(['projectred_core:red_illumar', 'projectred_core:blue_illumar', 'projectred_core:green_illumar', '4x #c:glass_panes/colorless', '2x gtceu:vacuum_tube'])
            .itemOutputs(`4x projectred_illumination:illumar_smart_lamp`)
            .circuit(3)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])

    let colours = [
        'white',
        'orange',
        'magenta',
        'light_blue',
        'yellow',
        'lime',
        'pink',
        'gray',
        'light_gray',
        'cyan',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black'
    ]

    colours.forEach(colour => {

        event.shapeless(`4x projectred_transmission:${colour}_insulated_wire`, [
            '4x projectred_transmission:red_alloy_wire',
            `minecraft:${colour}_wool`
        ]).id(`frontiers:${colour}_insulated_wire`)

        event.recipes.gtceu.spooling_machine(`frontiers:${colour}_insulated_wire_spooling`)
            .itemInputs(['8x projectred_transmission:red_alloy_wire', `minecraft:${colour}_wool`])
            .itemOutputs(`8x projectred_transmission:${colour}_insulated_wire`)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])

        event.shapeless(`4x projectred_transmission:${colour}_bundled_wire`, [
            '4x projectred_transmission:neutral_bundled_wire',
            `minecraft:${colour}_wool`
        ]).id(`frontiers:${colour}_bundled_wire`)

        event.recipes.gtceu.spooling_machine(`frontiers:${colour}_bundled_wire_spooling`)
            .itemInputs(['8x projectred_transmission:neutral_bundled_wire', `minecraft:${colour}_wool`])
            .itemOutputs(`8x projectred_transmission:${colour}_bundled_wire`)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])

        event.shapeless(`4x projectred_transmission:${colour}_framed_insulated_wire`, [
            `4x projectred_transmission:${colour}_insulated_wire`,
            'gtceu:wood_frame'
        ]).id(`frontiers:${colour}_framed_insulated_wire`)

        event.shapeless(`4x projectred_transmission:${colour}_framed_bundled_wire`, [
            `4x projectred_transmission:${colour}_bundled_wire`,
            'gtceu:wood_frame'
        ]).id(`frontiers:${colour}_framed_bundled_wire`)
        
        event.recipes.gtceu.mixer(`frontiers:${colour}_irrumar_mixing`)
            .itemInputs(['2x minecraft:glowstone_dust', `#c:dyes/${colour}`])
            .itemOutputs(`4x projectred_core:${colour}_illumar`)
            .duration(100)
            .EUt(8);

            //The Illumination Part
        
        event.recipes.gtceu.assembler(`frontiers:${colour}_illumar_lamp`)
            .itemInputs([`4x projectred_core:${colour}_illumar`, '4x #c:glass_panes/colorless', 'projectred_transmission:red_alloy_wire'])
            .itemOutputs(`4x projectred_illumination:${colour}_illumar_lamp`)
            .circuit(1)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])
    
        event.recipes.gtceu.assembler(`frontiers:${colour}_fixture_light`)
            .itemInputs([`4x projectred_core:${colour}_illumar`, '5x #c:glass_panes/colorless', 'projectred_core:conductive_plate'])
            .itemOutputs(`4x projectred_illumination:${colour}_fixture_light`)
            .circuit(1)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])
    
        event.recipes.gtceu.assembler(`frontiers:${colour}_fallout_light`)
            .itemInputs([`4x projectred_core:${colour}_illumar`, '5x minecraft:iron_bars', 'projectred_core:conductive_plate'])
            .itemOutputs(`4x projectred_illumination:${colour}_fallout_light`)
            .circuit(1)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])
    
        event.recipes.gtceu.assembler(`frontiers:${colour}_cage_light`)
            .itemInputs([`4x projectred_core:${colour}_illumar`, '3x minecraft:iron_bars', 'projectred_transmission:red_alloy_wire'])
            .itemOutputs(`4x projectred_illumination:${colour}_cage_light`)
            .circuit(1)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])
    
        event.recipes.gtceu.assembler(`frontiers:${colour}_lantern`)
            .itemInputs([`4x projectred_core:${colour}_illumar`, '2x #c:glass_panes/colorless', 'gtceu:red_alloy_rod'])
            .itemOutputs(`4x projectred_illumination:${colour}_lantern`)
            .circuit(1)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])
        
        event.recipes.gtceu.assembler(`frontiers:${colour}_inverted_illumar_lamp`)
            .itemInputs([`4x projectred_core:${colour}_illumar`, '4x #c:glass_panes/colorless', 'projectred_transmission:red_alloy_wire'])
            .itemOutputs(`4x projectred_illumination:${colour}_inverted_illumar_lamp`)
            .circuit(2)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])
    
        event.recipes.gtceu.assembler(`frontiers:${colour}_inverted_fixture_light`)
            .itemInputs([`4x projectred_core:${colour}_illumar`, '5x #c:glass_panes/colorless', 'projectred_core:conductive_plate'])
            .itemOutputs(`4x projectred_illumination:${colour}_inverted_fixture_light`)
            .circuit(2)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])
    
        event.recipes.gtceu.assembler(`frontiers:${colour}_inverted_fallout_light`)
            .itemInputs([`4x projectred_core:${colour}_illumar`, '5x minecraft:iron_bars', 'projectred_core:conductive_plate'])
            .itemOutputs(`4x projectred_illumination:${colour}_inverted_fallout_light`)
            .circuit(2)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])
    
        event.recipes.gtceu.assembler(`frontiers:${colour}_inverted_cage_light`)
            .itemInputs([`4x projectred_core:${colour}_illumar`, '3x minecraft:iron_bars', 'projectred_transmission:red_alloy_wire'])
            .itemOutputs(`4x projectred_illumination:${colour}_inverted_cage_light`)
            .circuit(2)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])
    
        event.recipes.gtceu.assembler(`frontiers:${colour}_inverted_lantern`)
            .itemInputs([`4x projectred_core:${colour}_illumar`, '2x #c:glass_panes/colorless', 'gtceu:red_alloy_rod'])
            .itemOutputs(`4x projectred_illumination:${colour}_inverted_lantern`)
            .circuit(2)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])
        
    })

})