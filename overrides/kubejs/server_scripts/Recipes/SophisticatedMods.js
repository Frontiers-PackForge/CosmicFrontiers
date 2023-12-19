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
    'item': 'sophisticatedbackpacks:diamond_backpack' // Same case as the Registry name
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

  const woodTypes = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'crimson', 'warped'];

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
            'item': `minecraft:${woodType}_slab`
          },
          'E': {
              'tag': 'forge:tools/saws'
          },
          'P': {
              'item': `minecraft:${woodType}_planks`
          }
      },
      'pattern': [
          'PEP',
          'PCP',
          'PSP'
      ],
      'result': {
          'item': 'sophisticatedstorage:barrel',
          'nbt': `{woodType:\'${woodType}\'}`
      }
  });
}

  let containerTierUpgrade = (materialOne, materialTwo, nextTier, previousTier) => {
      event.custom(
          {
              'type': 'sophisticatedstorage:storage_tier_upgrade',
              'conditions': [
                {
                  'type': 'sophisticatedcore:item_enabled',
                  'itemRegistryName': `sophisticatedstorage:${nextTier}`
                }
              ],
              'key': {
                  'C': {
                      'item': `sophisticatedstorage:${previousTier}`
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
                  'item': `sophisticatedstorage:${nextTier}`
              }
          }
      );
  }

  let upgradeUpgrade = (materialOne, materialTwo, coreItem, result) => {
      event.shaped(result, [
          'OTO', 
          'TCT', 
          'OTO'  
        ], {
          O: materialOne,  
          T: materialTwo,
          C: coreItem
        })
  }

  let twoTierUpgrade = (input, result, storageModType) => {
      upgradeUpgrade(input, '#forge:dusts/redstone', 'sophisticatedstorage:upgrade_base', `sophisticated${storageModType}:${result}_upgrade`);
      upgradeUpgrade('gtceu:rose_gold_screw', '#forge:dusts/redstone', `sophisticated${storageModType}:${result}_upgrade`, `sophisticated${storageModType}:advanced_${result}_upgrade`);
}

  let upgradeSmeltingStuff = (input, result) => {
      upgradeUpgrade(input, '#forge:dusts/redstone', 'sophisticatedstorage:upgrade_base', `sophisticatedstorage:${result}_upgrade`);
      upgradeUpgrade('gtceu:rose_gold_screw', '#forge:dusts/redstone', `sophisticatedstorage:${result}_upgrade`, `sophisticatedstorage:auto_${result}_upgrade`);
  }


  /* STORAGE */

  woodTypes.forEach(function(woodType) {
      woodBarrel(woodType);
  });

  containerTierUpgrade('forge:rings/wrought_iron', 'gtceu:wrought_iron_plate', 'iron_barrel', 'barrel');
  containerTierUpgrade('forge:rings/rose_gold', 'gtceu:rose_gold_plate', 'gold_barrel', 'iron_barrel');
  containerTierUpgrade('forge:plates/diamond', 'gtceu:diamond_exquisite_gem' ,'diamond_barrel', 'gold_barrel');

  containerTierUpgrade('forge:rings/wrought_iron', 'gtceu:wrought_iron_plate', 'iron_chest', 'chest');
  containerTierUpgrade('forge:rings/rose_gold', 'gtceu:rose_gold_plate', 'gold_chest', 'iron_chest');
  containerTierUpgrade('forge:plates/diamond', 'gtceu:diamond_exquisite_gem' ,'diamond_chest', 'gold_chest');


  /* UPGRADES */

  upgradeUpgrade('gtceu:wood_screw', '#minecraft:planks', '#forge:tools/saws', 'sophisticatedstorage:upgrade_base');
  upgradeUpgrade('gtceu:wood_screw', 'gtceu:wood_plate', 'sophisticatedstorage:upgrade_base', 'sophisticatedstorage:basic_tier_upgrade');
  upgradeUpgrade('gtceu:wrought_iron_screw', 'gtceu:wood_plate', 'sophisticatedstorage:basic_tier_upgrade', 'sophisticatedstorage:basic_to_iron_tier_upgrade');
  upgradeUpgrade('gtceu:rose_gold_screw', 'gtceu:wrought_iron_plate', '#forge:tools/screwdrivers', 'sophisticatedstorage:iron_to_gold_tier_upgrade');
  upgradeUpgrade('gtceu:diamond_exquisite_gem', 'gtceu:rose_gold_plate', '#forge:tools/files', 'sophisticatedstorage:gold_to_diamond_tier_upgrade');



    twoTierUpgrade('minecraft:sticky_piston', 'pickup', 'storage');
    twoTierUpgrade('#forge:string', 'filter', 'storage');
    twoTierUpgrade('#forge:ender_pearls', 'magnet', 'storage');
    twoTierUpgrade('#forge:golden_apple', 'feeding', 'storage');
    twoTierUpgrade('minecraft:piston', 'compacting', 'storage');
    twoTierUpgrade('#forge:obsidian', 'void', 'storage');
    upgradeSmeltingStuff('minecraft:furnace', 'smelting', 'storage');
    upgradeSmeltingStuff('minecraft:smoker', 'smoking', 'storage');
    upgradeSmeltingStuff('minecraft:blast_furnace', 'blasting', 'storage');

    twoTierUpgrade('minecraft:hopper', 'hopper');

  upgradeUpgrade('minecraft:crafting_table', '#forge:dusts/redstone', 'sophisticatedstorage:upgrade_base', `sophisticatedstorage:crafting_upgrade`);
  upgradeUpgrade('minecraft:stonecutter', '#forge:dusts/redstone', 'sophisticatedstorage:upgrade_base', `sophisticatedstorage:stonecutter_upgrade`);
  upgradeUpgrade('minecraft:jukebox', '#forge:dusts/redstone', 'sophisticatedstorage:upgrade_base', `sophisticatedstorage:jukebox_upgrade`);
  upgradeUpgrade('#forge:dusts/redstone', 'minecraft:piston', 'sophisticatedstorage:upgrade_base', `sophisticatedstorage:compression_upgrade`);


// YES, I GAME UP HERE!
// I'M FUCKING TIRED AHHHHHHHHHHHHHH

  upgradeUpgrade('gtceu:wood_screw', 'gtceu:wood_plate', `sophisticatedstorage:upgrade_base`, `sophisticatedstorage:stack_upgrade_tier_1`);
  upgradeUpgrade('gtceu:wrought_iron_screw', 'gtceu:wrought_iron_platee', `sophisticatedstorage:stack_upgrade_tier_1`, `sophisticatedstorage:stack_upgrade_tier_2`);
  upgradeUpgrade('gtceu:rose_gold_screw', 'gtceu:rose_gold_plate', `sophisticatedstorage:stack_upgrade_tier_2`, `sophisticatedstorage:stack_upgrade_tier_3`);
  upgradeUpgrade('gtceu:diamond_exquisite_gem', 'gtceu:diamond_plate', `sophisticatedstorage:stack_upgrade_tier_3`, `sophisticatedstorage:stack_upgrade_tier_4`);

  // will do later :3
})