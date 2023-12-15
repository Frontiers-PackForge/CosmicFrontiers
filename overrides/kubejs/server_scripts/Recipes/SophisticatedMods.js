ServerEvents.recipes(event => { 
  console.log('[SophisticatedMods.js loading]')
  event.remove({ mod: 'sophisticatedstorage' })

   /* BACKPACKS */

//Backpacks base tiers
//Base
event.remove({ output: 'sophisticatedbackpacks:backpack' })
event.shaped('sophisticatedbackpacks:backpack', [
  'SWS', 
  'SCS', 
  'WWW'  
], {
  S: 'minecraft:string',  
  C: 'gtceu:bronze_crate',
  W: 'cosmiccore:waxed_leather', 
})

//Yup, Upgrading Backpacks takes a special recipetype...
event.remove({ output: 'sophisticatedbackpacks:iron_backpack' })
event.custom({
  'type': 'sophisticatedbackpacks:backpack_upgrade',
  'conditions': [
    {
      'itemRegistryName': 'sophisticatedbackpacks:iron_backpack', //What tier it's being upgraded to
      'type': 'sophisticatedcore:item_enabled'
    }
  ],
  'pattern': [
    'DWD',
    'WBW',
    'DWD'
  ],
  'key': {
    'D': {
      'item': 'gtceu:wrought_iron_plate'
    },
    'B': {
      'item': 'sophisticatedbackpacks:backpack'
    },
    'W': {
      'item': 'cosmiccore:waxed_leather'
    }
  },
  'result': {
    'item': 'sophisticatedbackpacks:iron_backpack' // Same case as the Registry name
  }
})

//GOLD BACKPACK
event.remove({ output: 'sophisticatedbackpacks:gold_backpack' })
event.custom({
  'type': 'sophisticatedbackpacks:backpack_upgrade',
  'conditions': [
    {
      'itemRegistryName': 'sophisticatedbackpacks:gold_backpack', //What tier it's being upgraded to
      'type': 'sophisticatedcore:item_enabled'
    }
  ],
  'pattern': [
    'DWD',
    'WBW',
    'DWD'
  ],
  'key': {
    'D': {
      'item': 'gtceu:rose_gold_plate'
    },
    'B': {
      'item': 'sophisticatedbackpacks:iron_backpack'
    },
    'W': {
      'item': 'cosmiccore:waxed_leather'
    }
  },
  'result': {
    'item': 'sophisticatedbackpacks:gold_backpack' // Same case as the Registry name
  }
})

//DIAMOND BACKPACK
event.remove({ output: 'sophisticatedbackpacks:diamond_backpack' })
event.custom({
  'type': 'sophisticatedbackpacks:backpack_upgrade',
  'conditions': [
    {
      'itemRegistryName': 'sophisticatedbackpacks:diamond_backpack', //What tier it's being upgraded to
      'type': 'sophisticatedcore:item_enabled'
    }
  ],
  'pattern': [
    'DWD',
    'WBW',
    'DWD'
  ],
  'key': {
    'D': {
      'item': 'gtceu:diamond_exquisite_gem'
    },
    'B': {
      'item': 'sophisticatedbackpacks:gold_backpack'
    },
    'W': {
      'item': 'cosmiccore:waxed_leather'
    }
  },
  'result': {
    'item': 'sophisticatedbackpacks:diamond   _backpack' // Same case as the Registry name
  }
})

// event.shaped('sophisticatedbackpacks:iron_backpack', [
  // 'PWP',
  // 'WBW',
  // 'PWP'
//   ], {
  // P: 'gtceu:wrought_iron_plate',
  // B: 'sophisticatedbackpacks:backpack',
  // W: 'cosmiccore:waxed_leather',
//   })

  /* METHODS & UTILS */

  const woodTypes = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove'];

  let woodBarrel = (woodType) => {

      // i didn't find a way to apply nbt data to an output
    event.custom({
      'type': 'minecraft:crafting_shaped',
      'conditions': [
          {
              'type': 'sophisticatedcore:item_enabled',
              'itemRegistryName': 'sophisticatedstorage:barrel'
          }
      ],
      'key': {
          'C': {
              'item': 'minecraft:barrel'
          },
          'S': {
            'item': 'minecraft:' + woodType + '_slab'
          },
          'E': {
              'tag': 'forge:tools/saws'
          },
          'P': {
              'item': 'minecraft:' + woodType + '_planks'
          }
      },
      'pattern': [
          'PEP',
          'PCP',
          'PSP'
      ],
      'result': {
          'item': 'sophisticatedstorage:barrel',
          'nbt': '{woodType:\'' + woodType + '\'}'
      }
  });

  event.recipes.gtceu.assembler('sophisticatedstorage:' + nextTier + "_assembly") 
  .itemInputs('2x minecraft:' + woodType + '_slab')
  .itemInputs('4x minecraft:' + woodType + '_planks')
  .itemInputs('sophisticatedstorage:' + previousTier)
  .itemOutputs('sophisticatedstorage:' + nextTier)
}

  let tierUpgrade = (materialOne, materialTwo, nextTier, previousTier) => {
      event.custom(
          {
              'type': 'sophisticatedstorage:storage_tier_upgrade',
              'conditions': [
                {
                  'type': 'sophisticatedcore:item_enabled',
                  'itemRegistryName': 'sophisticatedstorage:' + nextTier
                }
              ],
              'key': {
                  'C': {
                      'item': 'sophisticatedstorage:' + previousTier
                  },
                  'S': {
                      'tag': 'forge:tools/saws'
                  },
                  'H': {
                      'tag': 'forge:tools/hammers'
                  },
                  'R': {
                      'tag': materialOne
                  },
                  'P': {
                      'item': materialTwo
                  }
              },
              'pattern': [
                  'PRP',
                  'SCH',
                  'PRP'
              ],
              'result': {
                  'item': 'sophisticatedstorage:' + nextTier
              }
          }
      );

      event.recipes.gtceu.assembler('sophisticatedstorage:' + nextTier + "_assembly") 
         .itemInputs('2x #' + materialOne)
         .itemInputs('4x ' + materialTwo)
         .itemInputs('sophisticatedstorage:' + previousTier)
         .itemOutputs('sophisticatedstorage:' + nextTier)

// GHOSTI LOOK HERE!!!!!!!!!!!!!!
// idk how gt values work to know what values should be here, so like, replace/fill in
         .duration(40)
         .EUt(16);
  }

  /* STORAGE */

  woodTypes.forEach(function(woodType) {
      woodBarrel(woodType);
  });

  tierUpgrade('forge:rings/wrought_iron', 'gtceu:wrought_iron_plate', 'iron_barrel', 'barrel');
  tierUpgrade('forge:rings/rose_gold', 'gtceu:rose_gold_plate', 'gold_barrel', 'iron_barrel');
  tierUpgrade('forge:plates/diamond', 'gtceu:diamond_exquisite_gem' ,'diamond_barrel', 'gold_barrel');

  tierUpgrade('forge:rings/wrought_iron', 'gtceu:wrought_iron_plate', 'iron_chest', 'chest');
  tierUpgrade('forge:rings/rose_gold', 'gtceu:rose_gold_plate', 'gold_chest', 'iron_chest');
  tierUpgrade('forge:plates/diamond', 'gtceu:diamond_exquisite_gem' ,'diamond_chest', 'gold_chest');


  /* UPGRADES */

  // will do later :3
})