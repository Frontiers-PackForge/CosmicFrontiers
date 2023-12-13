//Don't use event.custom() unless it's needed by one of Sophs Mods

ServerEvents.recipes(event => { 
    console.log('[SophisticatedMods.js loading]')
    event.remove({ mod: 'sophisticatedstorage' })















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
    "type": "sophisticatedbackpacks:backpack_upgrade",
    "conditions": [
      {
        "itemRegistryName": "sophisticatedbackpacks:iron_backpack", //What tier it's being upgraded to
        "type": "sophisticatedcore:item_enabled"
      }
    ],
    "pattern": [
      "DWD",
      "WBW",
      "DWD"
    ],
    "key": {
      "D": {
        "item": "gtceu:wrought_iron_plate"
      },
      "B": {
        "item": "sophisticatedbackpacks:backpack"
      },
      "W": {
        "item": "cosmiccore:waxed_leather"
      }
    },
    "result": {
      "item": "sophisticatedbackpacks:iron_backpack" // Same case as the Registry name
    }
  })

//GOLD BACKPACK
event.remove({ output: 'sophisticatedbackpacks:gold_backpack' })
event.custom({
    "type": "sophisticatedbackpacks:backpack_upgrade",
    "conditions": [
      {
        "itemRegistryName": "sophisticatedbackpacks:gold_backpack", //What tier it's being upgraded to
        "type": "sophisticatedcore:item_enabled"
      }
    ],
    "pattern": [
      "DWD",
      "WBW",
      "DWD"
    ],
    "key": {
      "D": {
        "item": "gtceu:rose_gold_plate"
      },
      "B": {
        "item": "sophisticatedbackpacks:iron_backpack"
      },
      "W": {
        "item": "cosmiccore:waxed_leather"
      }
    },
    "result": {
      "item": "sophisticatedbackpacks:gold_backpack" // Same case as the Registry name
    }
  })
//DIAMOND BACKPACK
event.remove({ output: 'sophisticatedbackpacks:diamond_backpack' })
event.custom({
    "type": "sophisticatedbackpacks:backpack_upgrade",
    "conditions": [
      {
        "itemRegistryName": "sophisticatedbackpacks:diamond_backpack", //What tier it's being upgraded to
        "type": "sophisticatedcore:item_enabled"
      }
    ],
    "pattern": [
      "DWD",
      "WBW",
      "DWD"
    ],
    "key": {
      "D": {
        "item": "gtceu:diamond_exquisite_gem"
      },
      "B": {
        "item": "sophisticatedbackpacks:gold_backpack"
      },
      "W": {
        "item": "cosmiccore:waxed_leather"
      }
    },
    "result": {
      "item": "sophisticatedbackpacks:diamond   _backpack" // Same case as the Registry name
    }
  })




  })