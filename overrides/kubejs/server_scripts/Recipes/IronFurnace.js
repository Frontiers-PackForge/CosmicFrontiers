let yeet = (itemName) => {
    ServerEvents.recipes(event => { 
        event.remove({ output: itemName })
      })
    ServerEvents.tags('item', event => {
        event.add('forge:viewers/hidden_from_recipe', itemName)
    })
}

yeet('ironfurnaces:upgrade_iron');
yeet('ironfurnaces:upgrade_gold');
yeet('ironfurnaces:upgrade_diamond');
yeet('ironfurnaces:upgrade_emerald');
yeet('ironfurnaces:upgrade_obsidian');
yeet('ironfurnaces:upgrade_crystal');
yeet('ironfurnaces:upgrade_gold2');
yeet('ironfurnaces:upgrade_silver2');
yeet('ironfurnaces:upgrade_silver2');
yeet('ironfurnaces:upgrade_copper');
yeet('ironfurnaces:upgrade_silver');
yeet('ironfurnaces:upgrade_obsidian2');
yeet('ironfurnaces:upgrade_iron2');
yeet('ironfurnaces:upgrade_allthemodium');
yeet('ironfurnaces:upgrade_vibranium');
yeet('ironfurnaces:upgrade_unobtainium');
yeet('ironfurnaces:allthemodium_furnace');
yeet('ironfurnaces:vibranium_furnace');
yeet('ironfurnaces:unobtainium_furnace');
yeet('ironfurnaces:item_heater');
yeet('ironfurnaces:heater');
yeet('ironfurnaces:augment_factory');
yeet('ironfurnaces:augment_speed');
yeet('ironfurnaces:rainbow_core');
yeet('ironfurnaces:rainbow_plating');
yeet('ironfurnaces:rainbow_coal');
yeet('ironfurnaces:million_furnace');
yeet('ironfurnaces:augment_generator');
yeet('ironfurnaces:augment_fuel');
yeet('ironfurnaces:item_spooky');
yeet('ironfurnaces:item_xmas');
yeet('ironfurnaces:item_copy');
yeet('ironfurnaces:upgrade_netherite');
yeet('ironfurnaces:crystal_furnace');

ServerEvents.recipes(event => { 
    event.remove({ output: 'ironfurnaces:copper_furnace' }) 
    event.shaped( 'ironfurnaces:copper_furnace', [
        'PDP',
        'DFD',
        'PDP'
    ], {
        P: 'gtceu:copper_plate',
        D: 'gtceu:copper_double_plate',
        F: 'minecraft:furnace',
    })
    event.remove({ output: 'ironfurnaces:iron_furnace' }) 
    event.shaped( 'ironfurnaces:iron_furnace', [
        'PDP',
        'DFD',
        'PDP'
    ], {
        P: 'gtceu:iron_plate',
        D: 'gtceu:iron_double_plate',
        F: 'ironfurnaces:copper_furnace',
    })
    event.remove({ output: 'ironfurnaces:silver_furnace' }) 
    event.shaped( 'ironfurnaces:silver_furnace', [
        'PDP',
        'DFD',
        'PDP'
    ], {
        P: 'gtceu:silver_plate',
        D: 'gtceu:silver_double_plate',
        F: 'ironfurnaces:iron_furnace',
    })
    event.remove({ output: 'ironfurnaces:gold_furnace' }) 
    event.shaped( 'ironfurnaces:gold_furnace', [
        'PDP',
        'DFD',
        'PDP'
    ], {
        P: 'gtceu:rose_gold_plate',
        D: 'gtceu:rose_gold_double_plate',
        F: 'ironfurnaces:silver_furnace',
    })
    event.remove({ output: 'ironfurnaces:diamond_furnace' }) 
    event.shaped( 'ironfurnaces:diamond_furnace', [
        'PDP',
        'DFD',
        'PDP'
    ], {
        P: 'gtceu:diamond_plate',
        D: 'botania:mana_diamond_block',
        F: 'ironfurnaces:gold_furnace',
    })
    event.remove({ output: 'ironfurnaces:emerald_furnace' }) 
    event.shaped( 'ironfurnaces:emerald_furnace', [
        'PDP',
        'DFD',
        'PDP'
    ], {
        P: 'gtceu:emerald_exquisite_gem',
        D: 'gtceu:olivine_exquisite_gem',
        F: 'ironfurnaces:diamond_furnace',
    })
    event.remove({ output: 'ironfurnaces:obsidian_furnace' }) 
    event.shaped( 'ironfurnaces:obsidian_furnace', [
        'PDP',
        'DFD',
        'PDP'
    ], {
        P: 'gtceu:obsidian_plate',
        D: 'create:sturdy_sheet',
        F: 'ironfurnaces:diamond_furnace',
    })

























  })