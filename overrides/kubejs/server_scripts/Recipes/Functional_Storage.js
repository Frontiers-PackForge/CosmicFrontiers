let yeet = (itemName) => {
  ServerEvents.recipes(event => { 
      event.remove({ output: itemName })
    })
  ServerEvents.tags('item', event => {
    console.log('[10] - [1] - TAG-WATCHER')
      event.add('c:hidden_from_recipe_viewers', itemName)
      event.remove('forge:tools/hammers', itemName)
  })
}

yeet(/functionalstorage:fluid_(.*)/);
yeet('functionalstorage:simple_compacting_drawer')
yeet('functionalstorage:framed_simple_compacting_drawer')
yeet('functionalstorage:compacting_framed_drawer')
yeet('functionalstorage:compacting_drawer')
ServerEvents.recipes( e => {

    //registering all the wood types in a variable
    let woodtypes = [
        'oak',
        'spruce',
        'birch',
        'jungle',
        'acacia',
        'dark_oak',
        'crimson',
        'warped',
        'mangrove',
        'cherry'
    ]
    //removing all the recipes in functional storage
    e.remove({ output: /functionalstorage:(.*)/ })

    //
    woodtypes.forEach(item => { //runs this for every item in woodtypes

        //using the woodtypes variable to make all the 1x1 drawers
        e.shaped(`functionalstorage:${item}_1`, [ 
            'ABA', 
            'BCB', 
            'ABA'  
          ], {
            B: `minecraft:${item}_planks`, 
            A: 'gtceu:iron_screw',  
            C: '#forge:chests'   
          }
        )
        //using the woodtypes variable to make all the 1x2 drawers
        e.shaped(`functionalstorage:${item}_2`, [
            'ACA', 
            'BBB', 
            'ACA'  
          ], {
            B: `minecraft:${item}_planks`, 
            A: 'gtceu:iron_screw',  
            C: '#forge:chests'   
          }
        )
        //^^ 2x2 drawers
        e.shaped(`functionalstorage:${item}_4`, [
          'ABA', 
          'BCB', 
          'ABA'  
        ], {
          C: `minecraft:${item}_planks`, 
          B: 'gtceu:iron_screw',  
          A: '#forge:chests'   
        }
      )
    })

    //recipes for the framed drawers
    e.shaped(`functionalstorage:framed_1`, [
      'ABA', 
      'BCB', 
      'ABA'  
    ], {
      B: `framedblocks:framed_cube`, 
      A: 'gtceu:iron_screw',  
      C: '#forge:chests'   
    }
    )
    e.shaped(`functionalstorage:framed_2`, [
      'ACA', 
      'BBB', 
      'ACA'  
    ], {
      B: `framedblocks:framed_cube`, 
      A: 'gtceu:iron_screw',  
      C: '#forge:chests'   
    }
    )
    e.shaped(`functionalstorage:framed_4`, [
      'ABA', 
      'BCB', 
      'ABA'  
    ], {
      C: `framedblocks:framed_cube`, 
      B: 'gtceu:iron_screw',  
      A: '#forge:chests'   
    }
    )
    e.shaped('functionalstorage:storage_controller', [
      'ADA', 
      'BCB', 
      'ADA'  
    ], {
      A: 'gtceu:stone_plate', 
      B: '#functionalstorage:drawer',  
      C: 'gtceu:red_alloy_quadruple_wire',
      D: 'minecraft:quartz_block'
    }
    )
    e.shaped('functionalstorage:framed_storage_controller', [
      'ADA', 
      'BCB', 
      'ADA'  
    ], {
      A: 'gtceu:wrought_iron_nugget', 
      B: '#functionalstorage:drawer',  
      C: 'gtceu:red_alloy_quadruple_wire',
      D: 'gtceu:certus_quartz_block'
    }
    )
    e.shaped('functionalstorage:controller_extension', [
      'ADA', 
      'BCB', 
      'ADA'  
    ], {
      A: 'gtceu:stone_plate', 
      B: '#functionalstorage:drawer',  
      C: 'gtceu:red_alloy_double_wire',
      D: 'minecraft:quartz_block'
    }
    )
    e.shaped('functionalstorage:framed_controller_extension', [
      'ADA', 
      'BCB', 
      'ADA'  
    ], {
      A: 'gtceu:wrought_iron_nugget', 
      B: '#functionalstorage:drawer',  
      C: 'gtceu:red_alloy_double_wire',
      D: 'minecraft:quartz_block'
    }
    )
    e.recipes.gtceu.assembler('functionalstorage:ender_drawer') 
           .itemInputs('2x gtceu:double_tungsten_steel_plate')
           .itemInputs('gtceu:ev_super_chest')
           .itemInputs('6x gtceu:ender_pearl_plate')
           .itemInputs('gtceu:ev_sensor')
           .itemInputs('gtceu:ev_emitter')
           .itemInputs('gtceu:ev_conveyor_module')
           .inputFluids('gtceu:polytetrafluoroethylene 288')
           .itemOutputs('functionalstorage:ender_drawer')
           .duration(100)
           .EUt(1920);
    //various upgrades
    e.shaped(`functionalstorage:copper_upgrade`, [
      'ADA', 
      'BCB', 
      'AAA'  
    ], {
      A: `gtceu:double_copper_plate`, 
      B: '#forge:chests',  
      C: '#functionalstorage:drawer',
      D: '#forge:tools/hammers'
    }
    )

  e.recipes.gtceu.assembler('copper_upgrade_assembly')
    .itemInputs(['5x gtceu:double_copper_plate', '2x #forge:chests', '#functionalstorage:drawer'])
    .itemOutputs('functionalstorage:copper_upgrade')
    .duration(80)
    .EUt(16);

    e.shaped(`functionalstorage:gold_upgrade`, [
      'ADA', 
      'BCB', 
      'AAA'  
    ], {
      A: `gtceu:rose_gold_plate`, 
      B: 'gtceu:aluminium_crate',  
      C: 'functionalstorage:copper_upgrade',
      D: '#forge:tools/hammers'
    }
    )
  e.recipes.gtceu.assembler('gold_upgrade_assembly')
    .itemInputs(['functionalstorage:copper_upgrade', '5x gtceu:rose_gold_plate', '2x gtceu:aluminium_crate', '#functionalstorage:drawer'])
    .itemOutputs('functionalstorage:gold_upgrade')
    .duration(160)
    .EUt(16);

    e.recipes.gtceu.assembler('functionalstorage:diamond_upgrade') 
           .itemInputs('functionalstorage:gold_upgrade')
           .itemInputs('4x gtceu:diamond_plate')
           .itemInputs('2x gtceu:stainless_steel_crate')
           .itemInputs('botania:mana_diamond_block')
           .itemOutputs('functionalstorage:diamond_upgrade')
           .duration(100)
           .EUt(480);
    e.recipes.gtceu.assembler('functionalstorage:netherite_upgrade') 
           .itemInputs('functionalstorage:diamond_upgrade')
           .itemInputs('2x minecraft:netherite_block')
           .itemInputs('gtceu:titanium_crate')
           .itemOutputs('functionalstorage:netherite_upgrade')
           .duration(100)
           .EUt(1920);
  e.shaped(`functionalstorage:iron_downgrade`, [
      'AAA', 
      'ABA', 
      'AAA'  
    ], {
    A: 'gtceu:iron_plate', 
    B: '#functionalstorage:drawer'
    }
    )
    e.shaped(`functionalstorage:armory_cabinet`, [
      'ABA', 
      'BCB', 
      'ADA'  
    ], {
    A: 'gtceu:stone_plate', 
    D: 'minecraft:netherite_ingot',  
    B: '#functionalstorage:drawer',
    C: 'gtceu:red_steel_ingot',
    }
    )
    e.shaped(`functionalstorage:redstone_upgrade`, [
      'ADA', 
      'BCB', 
      'AAA'  
    ], {
    A: 'gtceu:red_alloy_plate', 
    B: 'minecraft:comparator',  
    C: '#functionalstorage:drawer',
    D: '#forge:tools/hammers'
    }
    )

  e.recipes.gtceu.assembler('redstone_upgrade_assembly')
    .itemInputs(['5x gtceu:red_alloy_plate', '2x minecraft:comparator', '#functionalstorage:drawer'])
    .itemOutputs('functionalstorage:redstone_upgrade')
    .duration(80)
    .EUt(16);

    e.shaped(`functionalstorage:void_upgrade`, [
      'ADA', 
      'BCB', 
      'ABA'  
    ], {
    A: 'gtceu:obsidian_plate', 
    B: '#forge:ender_pearls',  
    C: '#functionalstorage:drawer',
    D: '#forge:tools/hammers'
    }
    )

  e.recipes.gtceu.assembler('void_upgrade_assembly')
    .itemInputs(['4x gtceu:obsidian_plate', '3x #forge:ender_pearls', '#functionalstorage:drawer'])
    .itemOutputs('functionalstorage:void_upgrade')
    .duration(160)
    .EUt(28);

    e.shaped(`functionalstorage:puller_upgrade`, [
      'AEA', 
      'DCF', 
      'ABA'  
    ], {
    A: 'gtceu:stone_plate', 
    B: 'gtceu:red_alloy_ingot', 
    C: '#functionalstorage:drawer',
    D: '#forge:tools/hammers',
    E: 'minecraft:hopper',
    F: '#forge:tools/wrenches'
    }
    )

  e.recipes.gtceu.assembler('puller_upgrade_assembly')
    .itemInputs(['4x gtceu:stone_plate', 'gtceu:red_alloy_ingot', 'minecraft:hopper', '#functionalstorage:drawer'])
    .circuit(1)
    .itemOutputs('functionalstorage:puller_upgrade')
    .duration(80)
    .EUt(16);

    e.shaped(`functionalstorage:pusher_upgrade`, [
      'AEA', 
      'DCF', 
      'ABA'  
    ], {
    A: 'gtceu:stone_plate', 
    B: 'minecraft:hopper', 
    C: '#functionalstorage:drawer',
    D: '#forge:tools/hammers',
    E: 'gtceu:red_alloy_ingot',
    F: '#forge:tools/wrenches'
    }
    )

  e.recipes.gtceu.assembler('pusher_upgrade_assembly')
    .itemInputs(['4x gtceu:stone_plate', 'minecraft:hopper','gtceu:red_alloy_ingot', '#functionalstorage:drawer'])
    .circuit(2)
    .itemOutputs('functionalstorage:pusher_upgrade')
    .duration(80)
    .EUt(16);

    e.shaped(`functionalstorage:collector_upgrade`, [
      'AAA', 
      'CDE', 
      'AAA'  
    ], {
    A: 'gtceu:stone_plate', 
    C: 'functionalstorage:puller_upgrade',
    D: '#forge:tools/hammers',
    E: 'functionalstorage:pusher_upgrade'
    }
    )

  e.recipes.gtceu.assembler('collector_upgrade_assembly')
    .itemInputs(['6x gtceu:stone_plate', 'functionalstorage:puller_upgrade', 'functionalstorage:pusher_upgrade', '#functionalstorage:drawer'])
    .itemOutputs('functionalstorage:collector_upgrade')
    .duration(160)
    .EUt(24);

    e.shaped('functionalstorage:linking_tool', [
      'ABA', 
      'CDC', 
      'ABA'  
    ], {
    A: 'minecraft:diamond', 
    B: 'gtceu:red_alloy_double_cable',
    C: 'minecraft:paper',
    D: 'gtceu:stone_plate'
    }
    )
    e.shaped('functionalstorage:configuration_tool', [
      'ABA', 
      'CDC', 
      'ABA'  
    ], {
    A: 'minecraft:emerald', 
    B: 'gtceu:red_alloy_double_cable',
    C: 'minecraft:paper',
    D: 'gtceu:stone_plate'
    }
    )
})
