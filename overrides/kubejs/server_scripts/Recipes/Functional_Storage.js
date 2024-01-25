let yeet = (itemName) => {
  ServerEvents.recipes(event => { 
      event.remove({ output: itemName })
    })
  ServerEvents.tags('item', event => {
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
      B: `gtceu:steel_frame`, 
      A: 'gtceu:iron_screw',  
      C: '#forge:chests'   
    }
    )
    e.shaped(`functionalstorage:framed_2`, [
      'ACA', 
      'BBB', 
      'ACA'  
    ], {
      B: `gtceu:steel_frame`, 
      A: 'gtceu:iron_screw',  
      C: '#forge:chests'   
    }
    )
    e.shaped(`functionalstorage:framed_4`, [
      'ABA', 
      'BCB', 
      'ABA'  
    ], {
      C: `gtceu:steel_frame`, 
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
           .itemInputs('2x gtceu:tungsten_steel_double_plate')
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
      A: `gtceu:annealed_copper_plate`, 
      B: '#forge:chests',  
      C: '#functionalstorage:drawer',
      D: '#forge:tools/hammers'
    }
    )
    e.shaped(`functionalstorage:gold_upgrade`, [
      'ADA', 
      'BCB', 
      'AAA'  
    ], {
      A: `gtceu:rose_gold_plate`, 
      B: 'sophisticatedstorage:gold_chest',  
      C: 'functionalstorage:copper_upgrade',
      D: '#forge:tools/hammers'
    }
    )

    e.recipes.gtceu.assembler('functionalstorage:diamond_upgrade') 
           .itemInputs('functionalstorage:gold_upgrade')
           .itemInputs('4x gtceu:diamond_plate')
           .itemInputs('2x sophisticatedstorage:diamond_chest')
           .itemInputs('botania:mana_diamond_block')
           .itemOutputs('functionalstorage:diamond_upgrade')
           .duration(100)
           .EUt(480);
    e.recipes.gtceu.assembler('functionalstorage:netherite_upgrade') 
           .itemInputs('functionalstorage:diamond_upgrade')
           .itemInputs('2x minecraft:netherite_block')
           .itemInputs('sophisticatedstorage:netherite_chest')
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
    e.shaped(`functionalstorage:void_upgrade`, [
      'ADA', 
      'BCB', 
      'ABA'  
    ], {
    A: 'gtceu:obsidian_plate', 
    B: 'minecraft:ender_pearl',  
    C: '#functionalstorage:drawer',
    D: '#forge:tools/hammers'
    }
    )
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
    e.shaped('functionalstorage:linking_tool', [
      'ABA', 
      'CDC', 
      'ABA'  
    ], {
    A: 'minecraft:diamond', 
    B: 'gtceu:gold_single_cable',
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
    B: 'gtceu:gold_single_cable',
    C: 'minecraft:paper',
    D: 'gtceu:stone_plate'
    }
    )
})
