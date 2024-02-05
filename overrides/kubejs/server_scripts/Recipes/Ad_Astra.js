let yeet = (itemName) => {
  ServerEvents.recipes(event => { 
      event.remove({ output: itemName })
    })
  ServerEvents.tags('item', event => {
      event.add('c:hidden_from_recipe_viewers', itemName)
      event.remove('forge:tools/hammers', itemName)
  })
}
let yeet_f = (itemName) => {
  ServerEvents.recipes(event => { 
      event.remove({ output: Fluid.of(itemName) })
    })
  ServerEvents.tags('fluid', event => {
      event.add('c:hidden_from_recipe_viewers', itemName)
  })
}   //This regex is apparently messing with the CEU steel ingot as well we also don't wanna hide the AA higher tier ingots quite yet 
    // yeet(/ad_astra:(.*)_ingot/);
    yeet(/ad_astra:(.*)_plate/)
    yeet(/ad_astra:(.*)_raw/)
    yeet(/ad_astra:(.*)_nugget/)
    yeet(/ad_astra:(.*)_block/)
    yeet(/ad_astra:(.*)_tank/)
    yeet(/ad_astra:(.*)_rod/)
    yeet('ad_astra:steel_cable')
    yeet('ad_astra:wrench')
    yeet('ad_astra:desh_cable')
    yeet('ad_astra:steel_fluid_pipe')
    yeet('ad_astra:desh_fluid_pipe')
    yeet('ad_astra:ostrum_fluid_pipe')
    yeet('ad_astra:fluid_pipe_duct')
    yeet('ad_astra:cable_duct')
    yeet('ad_astra:rocket_nose_cone')
    yeet('ad_astra:rocket_fin')
    yeet('ad_astra:engine_frame')
    yeet('ad_astra:engine_fan')
    yeet('ad_astra:hammer')
    yeet('ad_astra:solar_panel' ) 
    yeet('ad_astra:fuel_refinery' ) 
    yeet('ad_astra:coal_generator' )
    yeet('ad_astra:compressor' ) 
    yeet('ad_astra:water_pump' ) 
    yeet('ad_astra:oxygen_loader' ) 
    yeet('ad_astra:energizer' ) 
    yeet('ad_astra:cryo_freezer' ) 
    yeet(/ad_astra:(.*)_engine/) 
    yeet_f('ad_astra:oxygen' ) 
    yeet_f('ad_astra:fuel' ) 
    yeet_f('ad_astra:cryo_fuel' ) 

    //Last fix didn't work, i'm just removing the steel tag from ad astra steel lul - Srdra
    ServerEvents.tags('item', event => {
      event.remove('forge:ingots/steel', 'ad_astra:steel_ingot')     
    })
    
    ServerEvents.tags('fluid', event => {
    
      
    event.add('ad_astra:fuel', `gtceu:rocket_fuel`)
    event.remove('forge:ingots/steel', 'ad_astra:steel_ingot')
    })
    ServerEvents.recipes(event => { 
    event.remove({ output: 'ad_astra:steel_ingot' })
    event.remove({ output: 'ad_astra:tier_1_rocket' })
    event.remove({ output: 'ad_astra:tier_2_rocket' })
    event.remove({ output: 'ad_astra:tier_3_rocket' })
    event.remove({ output: 'ad_astra:tier_4_rocket' })
    event.remove({ output: 'ad_astra:launch_pad' })
    event.remove({ output: 'ad_astra:nasa_workbench'})
    event.remove({ output: 'ad_astra:oxygen_distributor'})
    event.remove({ output: 'ad_astra:oxygen_sensor'})
    event.remove({ output: 'ad_astra:space_helmet'})
    event.remove({ output: 'ad_astra:space_suit'})
    event.remove({ output: 'ad_astra:space_pants'})
    event.remove({ output: 'ad_astra:space_boots'})
    event.remove({ output: 'ad_astra:netherite_space_helmet'})
    event.remove({ output: 'ad_astra:netherite_space_suit'})
    event.remove({ output: 'ad_astra:netherite_space_pants'})
    event.remove({ output: 'ad_astra:netherite_space_boots'})
    event.remove({ output: 'ad_astra:jet_suit_helmet'})
    event.remove({ output: 'ad_astra:jet_suit'})
    event.remove({ output: 'ad_astra:jet_suit_pants'})
    event.remove({ output: 'ad_astra:jet_suit_boots'})
    event.remove({ output: 'ad_astra:wheel'})
    event.remove({ output: 'ad_astra:tier_1_rover'})
    event.custom({
      
    "type": "ad_astra:nasa_workbench",
    "ingredients": [
      {
        "ingredient": {
          "item": 'kubejs:stainless_steel_nose_cone'
        }
      },
      {
        "ingredient": {
          "item": "gtceu:stainless_steel_block"
        }
      },
      {
        "ingredient": {
          "item": "gtceu:stainless_steel_block"
        }
      },
      {
        "ingredient": {
          "item": "gtceu:stainless_steel_block"
        }
      },
      {
        "ingredient": {
          "item": "gtceu:stainless_steel_block"
        }
      },
      {
        "ingredient": {
          "item": "gtceu:stainless_steel_block"
        }
      },
      {
        "ingredient": {
          "item": "gtceu:stainless_steel_block"
        }
      },
      {
        "ingredient": {
          "item": "kubejs:stainless_steel_fin"
        }
      },
      {
        "ingredient": {
          "item": 'gtceu:stainless_steel_drum'
        }
      },
      {
        "ingredient": {
          "item": 'gtceu:stainless_steel_drum'
        }
      },
      {
        "ingredient": {
          "item": "kubejs:stainless_steel_fin"
        }
      },
      {
        "ingredient": {
          "item": "kubejs:stainless_steel_fin"
        }
      },
      {
        "ingredient": {
          "item": "kubejs:stainless_steel_engine"
        }
      },
      {
        "ingredient": {
          "item": "kubejs:stainless_steel_fin"
        }
      }
    ],
    "output": "ad_astra:tier_1_rocket"
    })
    event.custom({
      
      
      "type": "ad_astra:nasa_workbench",
      "ingredients": [
        {
          "ingredient": {
            "item": 'kubejs:hsse_nose_cone'
          }
        },
        {
          "ingredient": {
            "item": "gtceu:hsse_block"
          }
        },
        {
          "ingredient": {
            "item": "gtceu:hsse_block"
          }
        },
        {
          "ingredient": {
            "item": "gtceu:hsse_block"
          }
        },
        {
          "ingredient": {
            "item": "gtceu:hsse_block"
          }
        },
        {
          "ingredient": {
            "item": "gtceu:hsse_block"
          }
        },
        {
          "ingredient": {
            "item": "gtceu:hsse_block"
          }
        },
        {
          "ingredient": {
            "item": "kubejs:hsse_fin"
          }
        },
        {
          "ingredient": {
            "item": 'gtceu:iv_quantum_tank'
          }
        },
        {
          "ingredient": {
            "item": 'gtceu:iv_quantum_tank'
          }
        },
        {
          "ingredient": {
            "item": "kubejs:hsse_fin"
          }
        },
        {
          "ingredient": {
            "item": "kubejs:hsse_fin"
          }
        },
        {
          "ingredient": {
            "item": "kubejs:hsse_engine"
          }
        },
        {
          "ingredient": {
            "item": "kubejs:hsse_fin"
          }
        }
      ],
      "output": "ad_astra:tier_2_rocket"
      })
      event.custom({
      
      
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
          {
            "ingredient": {
              "item": 'kubejs:osmiridium_nose_cone'
            }
          },
          {
            "ingredient": {
              "item": "gtceu:osmiridium_block"
            }
          },
          {
            "ingredient": {
              "item": "gtceu:osmiridium_block"
            }
          },
          {
            "ingredient": {
              "item": "gtceu:osmiridium_block"
            }
          },
          {
            "ingredient": {
              "item": "gtceu:osmiridium_block"
            }
          },
          {
            "ingredient": {
              "item": "gtceu:osmiridium_block"
            }
          },
          {
            "ingredient": {
              "item": "gtceu:osmiridium_block"
            }
          },
          {
            "ingredient": {
              "item": "kubejs:osmiridium_fin"
            }
          },
          {
            "ingredient": {
              "item": 'gtceu:luv_quantum_tank'
            }
          },
          {
            "ingredient": {
              "item": 'gtceu:luv_quantum_tank'
            }
          },
          {
            "ingredient": {
              "item": "kubejs:osmiridium_fin"
            }
          },
          {
            "ingredient": {
              "item": "kubejs:osmiridium_fin"
            }
          },
          {
            "ingredient": {
              "item": "kubejs:osmiridium_engine"
            }
          },
          {
            "ingredient": {
              "item": "kubejs:osmiridium_fin"
            }
          }
        ],
        "output": "ad_astra:tier_3_rocket"
        })
        event.custom({
      
      
          "type": "ad_astra:nasa_workbench",
          "ingredients": [
            {
              "ingredient": {
                "item": 'kubejs:americium_nose_cone'
              }
            },
            {
              "ingredient": {
                "item": "gtceu:americium_block"
              }
            },
            {
              "ingredient": {
                "item": "gtceu:americium_block"
              }
            },
            {
              "ingredient": {
                "item": "gtceu:americium_block"
              }
            },
            {
              "ingredient": {
                "item": "gtceu:americium_block"
              }
            },
            {
              "ingredient": {
                "item": "gtceu:americium_block"
              }
            },
            {
              "ingredient": {
                "item": "gtceu:americium_block"
              }
            },
            {
              "ingredient": {
                "item": "kubejs:americium_fin"
              }
            },
            {
              "ingredient": {
                "item": 'gtceu:zpm_quantum_tank'
              }
            },
            {
              "ingredient": {
                "item": 'gtceu:zpm_quantum_tank'
              }
            },
            {
              "ingredient": {
                "item": "kubejs:americium_fin"
              }
            },
            {
              "ingredient": {
                "item": "kubejs:americium_fin"
              }
            },
            {
              "ingredient": {
                "item": "kubejs:americium_engine"
              }
            },
            {
              "ingredient": {
                "item": "kubejs:americium_fin"
              }
            }
          ],
          "output": "ad_astra:tier_4_rocket"
          })
          event.shaped('ad_astra:nasa_workbench', [
            'DAB', 
            'AHA', 
            'CMC'  
          ], {
            A: 'gtceu:hv_robot_arm',  
            B: 'gtceu:stainless_steel_screwdriver',
            C: '#gtceu:circuits/iv',
            H: 'gtceu:hv_machine_hull',
            D: 'minecraft:redstone_lamp',
            M: 'gtceu:computer_monitor_cover', 
          })
          event.shaped('ad_astra:oxygen_distributor', [
            'CAB', 
            'DHD', 
            'BAC'  
          ], {
            A: 'gtceu:hv_electric_motor',  
            B: 'gtceu:stainless_steel_plate',
            C: '#gtceu:circuits/hv',
            D: 'gtceu:stainless_steel_rotor',
            H: 'gtceu:hv_machine_hull'
          })
          event.shaped('ad_astra:oxygen_sensor', [
            'ACA', 
            'DHD', 
            'ABA'  
          ], {
            A: 'gtceu:ostrum_plate',  
            B: 'minecraft:redstone',
            C: '#gtceu:circuits/hv',
            D: 'gtceu:assembly_line_grating',
            H: 'gtceu:hv_machine_hull'
          })
          event.shaped('ad_astra:space_helmet', [
            'BAB', 
            'ACA', 
            'HWS'  
          ], {
            A: 'gtceu:stainless_steel_plate',  
            B: 'gtceu:aluminium_screw',
            C: 'gtceu:glass_plate',
            H: '#forge:tools/hammers',
            S: '#forge:tools/screwdrivers',
            W: '#minecraft:wool', 
          })
          event.shaped('ad_astra:space_suit', [
            'B B', 
            'ACA', 
            'HWS'  
          ], {
            A: 'gtceu:stainless_steel_plate',  
            B: 'gtceu:aluminium_screw',
            C: 'gtceu:stainless_steel_drum',
            H: '#forge:tools/hammers',
            S: '#forge:tools/screwdrivers',
            W: '#minecraft:wool', 
          })
          event.shaped('ad_astra:space_pants', [
            'BAB', 
            'AHA', 
            'WSW'  
          ], {
            A: 'gtceu:stainless_steel_plate',  
            B: 'gtceu:aluminium_screw',
            H: '#forge:tools/hammers',
            S: '#forge:tools/screwdrivers',
            W: '#minecraft:wool', 
          })
          event.shaped('ad_astra:space_boots', [
            'ABA', 
            'W W', 
            'H S'  
          ], {
            A: 'gtceu:stainless_steel_plate',  
            B: 'gtceu:aluminium_screw',
            H: '#forge:tools/hammers',
            S: '#forge:tools/screwdrivers',
            W: '#minecraft:wool', 
          })

          event.shaped('ad_astra:netherite_space_helmet', [
            'ABA', 
            'ACA', 
            ' H '  
          ], {
            A: 'gtceu:hsse_plate',  
            B: 'minecraft:netherite_ingot',
            C: 'ad_astra:space_helmet',
            H: '#forge:tools/hammers',
          })
          event.shaped('ad_astra:netherite_space_suit', [
            'AHA', 
            'ACA', 
            'ABA'  
          ], {
            A: 'gtceu:hsse_plate',  
            B: 'minecraft:netherite_ingot',
            C: 'ad_astra:space_suit',
            H: '#forge:tools/hammers', 
          })
          event.shaped('ad_astra:netherite_space_pants', [
            'ABA', 
            'ACA', 
            'AHA'  
          ], {
            A: 'gtceu:hsse_plate',  
            B: 'minecraft:netherite_ingot',
            C: 'ad_astra:space_pants',
            H: '#forge:tools/hammers', 
          })
          event.shaped('ad_astra:netherite_space_boots', [
            'ABA', 
            'ACA', 
            ' H '  
          ], {
            A: 'gtceu:hsse_plate',  
            B: 'minecraft:netherite_ingot',
            C: 'ad_astra:space_pants',
            H: '#forge:tools/hammers', 
          })

          event.shaped('ad_astra:jet_suit_helmet', [
            'AAA', 
            'BCB', 
            ' H '  
          ], {
            A: 'gtceu:calorite_plate',  
            B: 'gtceu:styrene_butadiene_rubber_ingot',
            C: 'ad_astra:netherite_space_helmet',
            H: '#forge:tools/hammers',
          })
          event.shaped('ad_astra:jet_suit', [
            'AHA', 
            'ACA', 
            'BDB'  
          ], {
            A: 'gtceu:calorite_plate',  
            B: 'gtceu:styrene_butadiene_rubber_ingot',
            C: 'ad_astra:netherite_space_suit',
            D: 'gtceu:luv_vanadium_battery',
            H: '#forge:tools/hammers',
          })
          event.shaped('ad_astra:jet_suit_pants', [
            'BBB', 
            'ACA', 
            'AHA'  
          ], {
            A: 'gtceu:calorite_plate',  
            B: 'gtceu:styrene_butadiene_rubber_ingot',
            C: 'ad_astra:netherite_space_pants',
            H: '#forge:tools/hammers',
          })
          event.shaped('ad_astra:jet_suit_boots', [
            'A A', 
            'BCB', 
            ' H '  
          ], {
            A: 'gtceu:calorite_plate',  
            B: 'gtceu:styrene_butadiene_rubber_ingot',
            C: 'ad_astra:netherite_space_boots',
            H: '#forge:tools/hammers',
          })
          event.shaped('ad_astra:wheel', [
            'HBS', 
            'BCB', 
            'ABA'  
          ], {
            A: 'gtceu:stainless_steel_screw',  
            B: 'gtceu:styrene_butadiene_rubber_plate',
            C: 'gtceu:stainless_steel_plate',
            H: '#forge:tools/hammers',
            S: '#forge:tools/screwdrivers',
          })
          event.shaped('ad_astra:tier_1_rover', [
            'B R', 
            'BDE', 
            'WPW'  
          ], {
            R: 'gtceu:stainless_steel_rod',  
            B: 'gtceu:desh_block',
            D: 'gtceu:stainless_steel_drum',
            P: 'gtceu:desh_plate',
            W: 'ad_astra:wheel',
            E: 'kubejs:stainless_steel_engine'
          })
  })


