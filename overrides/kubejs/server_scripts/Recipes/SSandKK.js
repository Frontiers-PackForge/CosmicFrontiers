ServerEvents.recipes( e => {
    let v_materials = [
        'iron',
        'gold',
        'diamond',
    ]
    let bn_materials = [
        'cincinnasite',
        'nether_ruby'
    ]
    //weapons with materials from other dimensions will be fixed once we get to them
    let weapons = [
        'longsword',  
        'twinblade',  
        'rapier',  
        'katana',  
        'sai',  
        'spear',  
        'glaive',  
        'warglaive',  
        'cutlass',  
        'warglaive',  
        'cutlass',  
        'claymore',  
        'greathammer',  
        'greataxe', 
        'chakram'
    ]
    

    
//e.remove({ output: /(.*)longsword/ })
//e.remove({ output: /(.*)twinblade/ })
//e.remove({ output: /(.*)rapier/ })
//e.remove({ output: /(.*)katana/ })
//e.remove({ output: /(.*)sai/ })
//e.remove({ output: /(.*)spear/ })
//e.remove({ output: /(.*)glaive/ })
//e.remove({ output: /(.*)warglaive/ })
//e.remove({ output: /(.*)cutlass/ })
//e.remove({ output: /(.*)claymore/ })
//e.remove({ output: /(.*)greathammer/ })
//e.remove({ output: /(.*)greataxe/ })
//e.remove({ output: /(.*)chakram/ })
//e.remove({ output: /(.*)scythe/ })
//e.remove({ output: /(.*)halberd/ })

v_materials.forEach(item => {
    e.shaped(`simplyswords:${item}_longsword`, [ 
        ' DB', 
        ' BC', 
        'A  '  
      ], {
        A: '#forge:sticks/wood',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
      }
    )
    e.shaped(`simplyswords:${item}_twinblade`, [ 
        '  B', 
        'DAC', 
        'B  '  
      ], {
        A: '#forge:sticks/wood',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
      }
    )
    e.shaped(`simplyswords:${item}_rapier`, [ 
        ' DB', 
        ' BC', 
        'A  '  
      ], {
        A: '#forge:sticks/wood',
        B: `gtceu:${item}_rod`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
      }
    )
    e.shaped(`simplyswords:${item}_katana`, [ 
        '  D', 
        'ABB', 
        '  C'  
      ], {
        A: '#forge:sticks/wood',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
      }
    )
    e.shaped(`simplyswords:${item}_sai`, [ 
        'DB ', 
        'AC ', 
        '   '  
      ], {
        A: '#forge:sticks/wood',
        B: `gtceu:${item}_rod`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
      }
    )
    e.shaped(`simplyswords:${item}_spear`, [ 
        ' DB', 
        ' AC', 
        'A  '  
      ], {
        A: '#forge:sticks/wood',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
      }
    )
    e.shaped(`simplyswords:${item}_glaive`, [ 
        ' DB', 
        ' AB', 
        'A C'  
      ], {
        A: '#forge:sticks/wood',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
      }
    )
    e.shaped(`simplyswords:${item}_warglaive`, [ 
        ' ED', 
        'BAB', 
        'C  '  
      ], {
        A: '#forge:sticks/wood',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'gtceu:wrought_iron_nugget'
      }
    )
    e.shaped(`simplyswords:${item}_cutlass`, [ 
        'CED', 
        'AA ', 
        'B  '  
      ], {
        B: '#forge:sticks/wood',
        A: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'gtceu:wrought_iron_nugget'
      }
    )
    e.shaped(`simplyswords:${item}_claymore`, [ 
        'CEB', 
        'EBE', 
        'AED'  
      ], {
        A: '#forge:sticks/wood',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'gtceu:wrought_iron_nugget'
      }
    )
    e.shaped(`simplyswords:${item}_greathammer`, [ 
        'AAA', 
        'EEE', 
        'DBC'  
      ], {
        B: '#forge:sticks/wood',
        A: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'gtceu:steel_nugget'
      }
    )
    e.shaped(`simplyswords:${item}_greataxe`, [ 
        'AAA', 
        'EBE', 
        'DBC'  
      ], {
        B: '#forge:sticks/wood',
        A: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'gtceu:steel_nugget'
      }
    )
    e.shaped(`simplyswords:${item}_chakram`, [ 
        'DBC', 
        'B B', 
        'EAE'  
      ], {
        A: '#forge:sticks/wood',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'minecraft:iron_nugget'
      }
    )
    e.shaped(`simplyswords:${item}_scythe`, [ 
        'BBE', 
        'BAC', 
        'AD '  
      ], {
        A: '#forge:sticks/wood',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'gtceu:steel_nugget'
      }
    )
    e.shaped(`simplyswords:${item}_halberd`, [ 
        ' BE', 
        'BAB', 
        'ADC'  
      ], {
        A: '#forge:sticks/wood',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'gtceu:steel_nugget'
      }
    )

})

bn_materials.forEach(item => {
    e.shaped(`knavesneeds:betternether/${item}/longsword`, [ 
        ' DB', 
        ' BC', 
        'A  '  
      ], {
        A: 'betternether:nether_reed_stem',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
      }
    )
    e.shaped(`knavesneeds:betternether/${item}/twinblade`, [ 
        '  B', 
        'DAC', 
        'B  '  
      ], {
        A: 'betternether:nether_reed_stem',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
      }
    )
    e.shaped(`knavesneeds:betternether/${item}/rapier`, [ 
        ' DB', 
        ' BC', 
        'A  '  
      ], {
        A: 'betternether:nether_reed_stem',
        B: `gtceu:${item}_rod`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
      }
    )
    e.shaped(`knavesneeds:betternether/${item}/katana`, [ 
        '  D', 
        'ABB', 
        '  C'  
      ], {
        A: 'betternether:nether_reed_stem',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
      }
    )
    e.shaped(`knavesneeds:betternether/${item}/sai`, [ 
        'DB ', 
        'AC ', 
        '   '  
      ], {
        A: 'betternether:nether_reed_stem',
        B: `gtceu:${item}_rod`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
      }
    )
    e.shaped(`knavesneeds:betternether/${item}/spear`, [ 
        ' DB', 
        ' AC', 
        'A  '  
      ], {
        A: 'betternether:nether_reed_stem',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
      }
    )
    e.shaped(`knavesneeds:betternether/${item}/glaive`, [ 
        ' DB', 
        ' AB', 
        'A C'  
      ], {
        A: 'betternether:nether_reed_stem',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
      }
    )
    e.shaped(`knavesneeds:betternether/${item}/warglaive`, [ 
        ' ED', 
        'BAB', 
        'C  '  
      ], {
        A: 'betternether:nether_reed_stem',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'gtceu:wrought_iron_nugget'
      }
    )
    e.shaped(`knavesneeds:betternether/${item}/cutlass`, [ 
        'CED', 
        'AA ', 
        'B  '  
      ], {
        B: 'betternether:nether_reed_stem',
        A: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'gtceu:wrought_iron_nugget'
      }
    )
    e.shaped(`knavesneeds:betternether/${item}/claymore`, [ 
        'CEB', 
        'EBE', 
        'AED'  
      ], {
        A: 'betternether:nether_reed_stem',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'gtceu:wrought_iron_nugget'
      }
    )
    e.shaped(`knavesneeds:betternether/${item}/greathammer`, [ 
        'AAA', 
        'EEE', 
        'DBC'  
      ], {
        B: 'betternether:nether_reed_stem',
        A: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'gtceu:steel_nugget'
      }
    )
    e.shaped(`knavesneeds:betternether/${item}/greataxe`, [ 
        'AAA', 
        'EBE', 
        'DBC'  
      ], {
        B: 'betternether:nether_reed_stem',
        A: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'gtceu:steel_nugget'
      }
    )
    e.shaped(`knavesneeds:betternether/${item}/chakram`, [ 
        'DBC', 
        'B B', 
        'EAE'  
      ], {
        A: 'betternether:nether_reed_stem',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'minecraft:iron_nugget'
      }
    )
    e.shaped(`knavesneeds:betternether/${item}/scythe`, [ 
        'BBE', 
        'BAC', 
        'AD '  
      ], {
        A: 'betternether:nether_reed_stem',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'gtceu:steel_nugget'
      }
    )
    e.shaped(`knavesneeds:betternether/${item}/halberd`, [ 
        ' BE', 
        'BAB', 
        'ADC'  
      ], {
        A: 'betternether:nether_reed_stem',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'gtceu:steel_nugget'
      }
    )
    })

    //upgrading the cincinnatite items
    weapons.forEach(item => {
        e.smithing(
            `knavesneeds:betternether/cincinnasite_diamond/${item}`,  
            'betternether:cincinnasite_diamond_upgrade_smithing_template' ,
            `knavesneeds:betternether/cincinnasite/${item}`, 
            'minecraft:diamond' 
          )
    })
})