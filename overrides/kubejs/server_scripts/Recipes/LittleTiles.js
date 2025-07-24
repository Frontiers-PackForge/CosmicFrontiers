let yeet = (itemName) => {
  ServerEvents.recipes(event => { 
      event.remove({ output: itemName })
    })
  ServerEvents.tags('item', event => {
    console.log('[13] - [1] - TAG-WATCHER')
      event.add('c:hidden_from_recipe_viewers', itemName)
  })
}

yeet ('littletiles:storage')

ServerEvents.recipes( event => {
    event.remove({id: "littletiles:workbench"})
    event.custom({
        "result": {
            "item": "littletiles:premade",
            "structure": "workbench"
        },
        "pattern": [
            "SWS",
            "XLX",
            "X X"
        ],
        "type": "littletiles:crafting_shaped_premade",
        "key": {
            "S": {
                "item": "gtceu:iron_screw"
            },
            "X": {
                "tag": "minecraft:planks"
            },
            "W": {
                "item": "minecraft:crafting_table"
            },
            "L": {
                "tag": "forge:tools/wrenches"
            }
        }
    }
    )
    event.remove({id: "littletiles:importer"})
    event.custom({
        "result": {
            "item": "littletiles:premade",
            "structure": "importer"
          },
          "pattern": [
            "IXI",
            "ILI",
            "PAP"
          ],
          "type": "littletiles:crafting_shaped_premade",
          "key": {
            "P": {
              "tag": "minecraft:planks"
            },
            "X": {
              "tag": "forge:glass/colorless"
            },
            "I": {
              "item": "gtceu:iron_plate"
            },
            "A": {
              "item": "gtceu:lv_robot_arm"
            },
            "L": {
              "item": "littletiles:blueprint"
            }
          }
    }
    )
    event.remove({id: "littletiles:exporter"})
    event.custom({
        "result": {
            "item": "littletiles:premade",
            "structure": "exporter"
          },
          "pattern": [
            "IXI",
            "ILI",
            "PAP"
          ],
          "type": "littletiles:crafting_shaped_premade",
          "key": {
            "P": {
              "tag": "minecraft:planks"
            },
            "X": {
              "item": "minecraft:iron_bars"
            },
            "I": {
              "item": "gtceu:iron_plate"
            },
            "A": {
              "item": "gtceu:lv_robot_arm"
            },
            "L": {
              "item": "littletiles:blueprint"
            }
          }
    }
    )
    event.remove({id: "littletiles:particle_emitter"})
    event.custom({
        "result": {
            "item": "littletiles:premade",
            "structure": "particle_emitter"
        },
        "pattern": [
            "CDC",
            "GRG",
            "CIC"
        ],
        "type": "littletiles:crafting_shaped_premade",
        "key": {
            "R": {
                "item": "minecraft:redstone_block"
            },
            "C": {
                "item": "minecraft:black_concrete"
            },
            "G": {
                "item": "minecraft:fire_charge"
            },
            "D": {
                "item": "minecraft:dispenser"
            },
            "I": {
                "item": "gtceu:iron_ring"
            }
        }
    }
    )
    event.remove({id: 'littletiles:blankomatic'})
    event.custom({
      "result": {
        "item": "littletiles:premade",
        "structure": "blankomatic"
    },
    "pattern": [
        "SWS",
        "XLX",
        "XCX"
    ],
    "type": "littletiles:crafting_shaped_premade",
    "key": {
        "X": {
            "tag": "minecraft:planks"
        },
        "W": {
            "item": "gtceu:iron_plate"
        },
        "L": {
            "item": "littletiles:paint_brush"
        },
        "S": {
          "item": "gtceu:iron_screw"
        },
        "C": {
          "item": "gtceu:lv_conveyor_module"
        }
    }
    }
    )
    event.remove({id: 'littletiles:single_cable4'})
    event.custom({
      "result": {
        "item": "littletiles:premade",
        "structure": "single_cable4",
        "count": 32
    },
    "pattern": [
        "CCC",
        "PRP",
        "CCC"
    ],
    "type": "littletiles:crafting_shaped_premade",
    "key": {
        "R": {
            "item": "gtceu:lead_single_wire"
        },
        "C": {
            "item": "minecraft:black_concrete"
        },
        "P": {
            "item": "gtceu:rubber_plate"
        }
    }
    }
    )
    event.remove({id: 'littletiles:single_output4'})
    event.custom({
      "result": {
        "item": "littletiles:premade",
        "structure": "single_output4",
        "count": 32
    },
    "pattern": [
        "PCP",
        "YRY",
        "PCP"
    ],
    "type": "littletiles:crafting_shaped_premade",
    "key": {
        "R": {
            "item": "gtceu:lead_single_wire"
        },
        "C": {
            "item": "minecraft:black_concrete"
        },
        "Y": {
            "item": "minecraft:yellow_concrete"
        },
        "P": {
            "item": "gtceu:rubber_plate"
        }
    }
    }
    )
    event.remove({id: 'littletiles:single_input4'})
    event.custom({
      "result": {
        "item": "littletiles:premade",
        "structure": "single_input4",
        "count": 32
    },
    "pattern": [
        "PCP",
        "BRB",
        "PCP"
    ],
    "type": "littletiles:crafting_shaped_premade",
    "key": {
        "R": {
            "item": "gtceu:lead_single_wire"
        },
        "C": {
            "item": "minecraft:black_concrete"
        },
        "B": {
            "item": "minecraft:light_blue_concrete"
        },
        "P": {
            "item": "gtceu:rubber_plate"
        }
    }
    }
    )
    event.remove({id: 'littletiles:signal_display_16'})
    event.custom({
      "result": {
        "item": "littletiles:premade",
        "structure": "signal_display_16"
    },
    "pattern": [
        "GGG",
        "SRS",
        "CCC"
    ],
    "type": "littletiles:crafting_shaped_premade",
    "key": {
        "R": {
            "item": "minecraft:redstone"
        },
        "C": {
            "item": "minecraft:black_concrete"
        },
        "S": {
            "item": "gtceu:silver_dust"
        },
        "G": {
            "tag": "forge:glass/colorless"
        }
    }
    }
    )
    event.remove({id: 'littletiles:structure_builder'})
    event.custom({
      "result": {
        "item": "littletiles:premade",
        "structure": "structure_builder"
    },
    "pattern": [
        "BAB",
        "CRC",
        "CXC"
    ],
    "type": "littletiles:crafting_shaped_premade",
    "key": {
        "X": {
            "tag": "minecraft:planks"
        },
        "R": {
            "item": "minecraft:redstone_block"
        },
        "C": {
            "item": "minecraft:black_concrete"
        },
        "A": {
            "item": "gtceu:lv_robot_arm"
        },
        "B": {
            "item": "gtceu:iron_rod"
        }
    }
    }
    )
    event.remove({id: 'littletiles:glove'})
    event.custom({
        "result": {
            "item": "littletiles:glove"
        },
        "pattern": [
            " L ",
            "LIL",
            " L "
        ],
        "type": "minecraft:crafting_shaped",
        "key": {
            "L": {
                "item": "cosmiccore:waxed_leather"
            },
            "I": {
                "item": "minecraft:lapis_lazuli"
            }
        }
    }
    )
    event.remove({id: 'littletiles:hammer'})
    event.shaped('littletiles:hammer',[
      'IIP',
      'ALB',
      ' L '
    ],{
      P: 'gtceu:iron_plate',
      I: 'minecraft:iron_ingot',
      L: 'minecraft:lapis_lazuli',
      A: '#forge:tools/hammers',
      B: '#forge:tools/files'
    })
    event.remove({id: 'littletiles:chisel'})
    event.shaped('littletiles:chisel',[
        'APB',
        ' P ',
        ' L '
    ],{
        P: 'gtceu:iron_plate',
        L: 'minecraft:lapis_lazuli',
        A: '#forge:tools/hammers',
        B: '#forge:tools/files'
    })
    event.remove({id: 'littletiles:bag'})
    event.shaped('littletiles:bag',[
        ' S ',
        'LAL',
        ' L '
    ],{
        S: 'minecraft:string',
        L: 'cosmiccore:waxed_leather',
        A: 'minecraft:lapis_lazuli'
    })
    event.remove({id: 'littletiles:paint_brush'})
    event.shaped('littletiles:paint_brush',[
        'WWW',
        'ALB',
        ' L '
    ],{
        W: '#minecraft:wool',
        L: 'minecraft:lapis_lazuli',
        A: '#forge:tools/hammers',
        B: '#forge:tools/files'
    })
    event.remove({id: 'littletiles:saw'})
    event.shaped('littletiles:saw',[
        'LPA',
        'LP ',
        'LB '
    ],{
        L: 'minecraft:lapis_lazuli',
        P: 'gtceu:iron_plate',
        A: '#forge:tools/hammers',
        B: '#forge:tools/files'
    })
    event.remove({id: 'littletiles:wrench'})
    event.shaped('littletiles:wrench',[
        'PAP',
        ' L ',
        ' L '
    ],{
        P: 'gtceu:iron_plate',
        A: '#forge:tools/hammers',
        L: 'minecraft:lapis_lazuli'
    })
    event.remove({id: 'littletiles:signal_converter'})
    event.shaped('littletiles:signal_converter',[
        'SSS',
        'ARA',
        'SSS'
    ],{
        S: '#forge:cobblestone',
        A: 'minecraft:flint',
        R: 'minecraft:redstone_block'
    })
}
)